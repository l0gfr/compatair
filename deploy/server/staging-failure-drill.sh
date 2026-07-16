#!/usr/bin/env bash
set -Eeuo pipefail

deploy_root=/var/www/html/compatair-staging
mcp_service=compatair-mcp-staging.service
health_url=http://127.0.0.1:8788/health
target_vhost=/etc/apache2/sites-available/compatair-staging.conf
enabled_vhost=/etc/apache2/sites-enabled/compatair-staging.conf
script_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
deploy_script=/usr/local/libexec/compatair/staging-deploy-remote.sh
apache_installer="$script_dir/install-apache-vhost.sh"

if [[ ${EUID:-$(id -u)} -ne 0 ]]; then
	echo "The staging failure drill must run as root" >&2
	exit 2
fi
if [[ ! -L "$deploy_root/current" || ! -f "$deploy_root/DEPLOYED_SHA" ]]; then
	echo "A seeded staging release and DEPLOYED_SHA are required" >&2
	exit 2
fi
if [[ ! -f "$target_vhost" || ! -L "$enabled_vhost" || "$(readlink -f -- "$enabled_vhost")" != "$target_vhost" ]]; then
	echo "The isolated staging vhost must be installed and enabled" >&2
	exit 2
fi
if [[ ! -f "$deploy_script" || -L "$deploy_script" || $(stat -c '%u:%g:%a' "$deploy_script") != '0:0:755' ]]; then
	echo "The root-owned staging deploy runtime is unavailable" >&2
	exit 2
fi
if ! sudo -u compatair-deploy test -r "$deploy_script" || ! sudo -u compatair-deploy test -x "$deploy_script"; then
	echo "The staging deploy runtime is inaccessible to compatair-deploy" >&2
	exit 2
fi
systemctl is-enabled --quiet "$mcp_service"
apache2ctl configtest
curl --fail --silent --show-error --max-time 5 "$health_url" > /dev/null

baseline_target=$(readlink -f -- "$deploy_root/current")
baseline_release=${baseline_target#"$deploy_root/releases/"}
baseline_marker=$(tr -d '\n' < "$deploy_root/DEPLOYED_SHA")
if [[ "$baseline_target" != "$deploy_root/releases/"* || ! "$baseline_release" =~ ^[0-9a-f]{40}$ || "$baseline_marker" != "$baseline_release" || ! -f "$baseline_target/index.html" ]]; then
	echo "The staging baseline is not a verified immutable release" >&2
	exit 2
fi

temporary_root=$(mktemp -d /var/tmp/compatair-staging-drill.XXXXXX)
chmod 755 "$temporary_root"
trap 'rm -rf -- "$temporary_root"' EXIT

new_release_id() {
	printf '%s' "$1-$(date -u +%s%N)-$$" | sha1sum | cut -c1-40
}

build_candidate() {
	local release_id=$1
	local mode=$2
	local payload="$temporary_root/payload-$release_id"
	local archive="$temporary_root/compatair-$release_id.tar.gz"
	mkdir -p "$payload"
	cp -a -- "$baseline_target/." "$payload/"
	if [[ "$mode" == invalid-mcp ]]; then
		printf '%s\n' "throw new Error('intentional staging drill failure');" > "$payload/_server/mcp-server.mjs"
	fi
	tar -C "$payload" -czf "$archive" .
	sha256sum "$archive" > "$archive.sha256"
	chmod 644 "$archive" "$archive.sha256"
}

require_expected_failure() {
	local log=$1
	local actual_status=$2
	local expected_status=$3
	shift 3
	cat "$log"
	if [[ "$actual_status" -ne "$expected_status" ]]; then
		echo "Failure drill exited with status $actual_status; expected $expected_status" >&2
		exit 1
	fi
	for marker in "$@"; do
		if ! grep -Fq -- "$marker" "$log"; then
			echo "Failure drill did not emit the expected marker: $marker" >&2
			exit 1
		fi
	done
}

assert_restored() {
	test "$(readlink -f -- "$deploy_root/current")" = "$baseline_target"
	test "$(tr -d '\n' < "$deploy_root/DEPLOYED_SHA")" = "$baseline_release"
	curl --fail --silent --show-error --max-time 5 "$health_url" > /dev/null
}

invalid_release=$(new_release_id invalid-mcp)
build_candidate "$invalid_release" invalid-mcp
invalid_mcp_log="$temporary_root/invalid-mcp.log"
set +e
sudo -u compatair-deploy env COMPATAIR_STAGING_DRILL=1 bash "$deploy_script" "$temporary_root/compatair-$invalid_release.tar.gz" "$temporary_root/compatair-$invalid_release.tar.gz.sha256" "$deploy_root" "$invalid_release" > "$invalid_mcp_log" 2>&1
invalid_mcp_status=$?
set -e
require_expected_failure "$invalid_mcp_log" "$invalid_mcp_status" 1 'The candidate MCP release is unhealthy' 'Activation interrupted or unhealthy; restoring the previous verified release'
assert_restored

invalid_vhost="$temporary_root/compatair-staging.invalid.conf"
cp -- "$target_vhost" "$invalid_vhost"
printf '%s\n' 'CompatAirIntentionalInvalidDirective On' >> "$invalid_vhost"
vhost_checksum=$(sha256sum "$target_vhost" | awk '{ print $1 }')
invalid_vhost_log="$temporary_root/invalid-vhost.log"
set +e
COMPATAIR_STAGING_DRILL=1 bash "$apache_installer" "$invalid_vhost" "$target_vhost" > "$invalid_vhost_log" 2>&1
invalid_vhost_status=$?
set -e
require_expected_failure "$invalid_vhost_log" "$invalid_vhost_status" 1 'Invalid command' 'Apache rejected the candidate vhost; the previous configuration was restored'
test "$(sha256sum "$target_vhost" | awk '{ print $1 }')" = "$vhost_checksum"
apache2ctl configtest

interrupted_release=$(new_release_id interrupted)
build_candidate "$interrupted_release" valid
interrupted_log="$temporary_root/interrupted-switch.log"
set +e
sudo -u compatair-deploy env COMPATAIR_STAGING_DRILL=1 COMPATAIR_DEPLOY_FAILPOINT=after-switch bash "$deploy_script" "$temporary_root/compatair-$interrupted_release.tar.gz" "$temporary_root/compatair-$interrupted_release.tar.gz.sha256" "$deploy_root" "$interrupted_release" > "$interrupted_log" 2>&1
interrupted_status=$?
set -e
require_expected_failure "$interrupted_log" "$interrupted_status" 143 'Activation interrupted or unhealthy; restoring the previous verified release'
assert_restored

public_smoke_release=$(new_release_id public-smoke)
build_candidate "$public_smoke_release" valid
public_smoke_log="$temporary_root/public-smoke.log"
set +e
sudo -u compatair-deploy env COMPATAIR_STAGING_DRILL=1 COMPATAIR_DEPLOY_FAILPOINT=public-smoke bash "$deploy_script" "$temporary_root/compatair-$public_smoke_release.tar.gz" "$temporary_root/compatair-$public_smoke_release.tar.gz.sha256" "$deploy_root" "$public_smoke_release" > "$public_smoke_log" 2>&1
public_smoke_status=$?
set -e
require_expected_failure "$public_smoke_log" "$public_smoke_status" 1 'Intentional staging post-activation smoke failure' 'Activation interrupted or unhealthy; restoring the previous verified release'
assert_restored

report_directory=/var/lib/compatair-staging/failure-drills
install -d -o root -g root -m 700 "$report_directory"
report="$report_directory/$(date -u +%Y%m%dT%H%M%SZ).json"
printf '{\n  "schemaVersion": "1.2.0",\n  "executedAt": "%s",\n  "baselineRelease": "%s",\n  "invalidMcpRollback": "passed",\n  "apacheRejectedConfigRestore": "passed",\n  "interruptedSwitchRollback": "passed",\n  "publicSmokeRollback": "passed",\n  "finalHealth": "passed",\n  "failureStatusCodes": {\n    "invalidMcp": %d,\n    "apacheConfig": %d,\n    "interruptedSwitch": %d,\n    "publicSmoke": %d\n  }\n}\n' "$(date -u +%FT%TZ)" "$baseline_release" "$invalid_mcp_status" "$invalid_vhost_status" "$interrupted_status" "$public_smoke_status" > "$report"
chmod 600 "$report"
printf 'Staging failure drill passed. Evidence: %s\n' "$report"
