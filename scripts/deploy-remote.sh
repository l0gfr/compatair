#!/usr/bin/env bash
set -Eeuo pipefail

script_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
archive=${1:-}
checksum_file=${2:-}
deploy_root=${3:-}
release_id=${4:-}

if [[ ! "$release_id" =~ ^[0-9a-f]{40}$ ]]; then
	echo "Invalid release identifier" >&2
	exit 2
fi

deployment_profile=production
mcp_service=compatair-mcp.service
health_url=http://127.0.0.1:8787/health
case "$deploy_root" in
	/var/www/html/compatair) ;;
	/var/www/html/compatair-staging)
		if [[ ${COMPATAIR_STAGING_DRILL:-0} != 1 ]]; then
			echo "The staging root is reserved for an explicit failure drill" >&2
			exit 2
		fi
		deployment_profile=staging
		mcp_service=compatair-mcp-staging.service
		health_url=http://127.0.0.1:8788/health
		;;
	*)
		echo "DEPLOY_PATH must be /var/www/html/compatair" >&2
		exit 2
		;;
esac

if [[ "$deployment_profile" == production ]]; then
	approved_vhost=/etc/compatair/approved/compatair.fr.conf
	candidate_vhost="$script_dir/deploy/apache/compatair.fr.conf.example"
	if [[ ! -f "$approved_vhost" || -L "$approved_vhost" || ! -f "$candidate_vhost" || -L "$candidate_vhost" ]]; then
		echo "The root-approved or candidate Apache configuration is missing" >&2
		exit 2
	fi
	if ! cmp --silent -- "$candidate_vhost" "$approved_vhost"; then
		echo "The release Apache configuration is not root-approved; run install-mcp.sh manually before deployment" >&2
		exit 2
	fi
	if ! sudo -n /usr/local/sbin/compatair-converge-mcp-config; then
		echo "Apache convergence failed before activation" >&2
		exit 1
	fi
fi

if [[ -n ${COMPATAIR_DEPLOY_FAILPOINT:-} && ( "$deployment_profile" != staging || ! "$COMPATAIR_DEPLOY_FAILPOINT" =~ ^(after-switch|public-smoke)$ ) ]]; then
	echo "Invalid or production failpoint" >&2
	exit 2
fi

if [[ ! -f "$archive" || ! -f "$checksum_file" ]]; then
	echo "Release archive or checksum is missing" >&2
	exit 2
fi

(cd "$(dirname "$archive")" && sha256sum --check "$(basename "$checksum_file")")

while IFS= read -r entry; do
	case "$entry" in
		/*|../*|*/../*|*/..)
			echo "Unsafe archive entry: $entry" >&2
			exit 2
			;;
	esac
done < <(tar -tzf "$archive")

if tar -tvzf "$archive" | awk '$1 ~ /^[lhcbp]/ { found=1 } END { exit !found }'; then
	echo "Release archive contains a link or special file" >&2
	exit 2
fi

releases="$deploy_root/releases"
release="$releases/$release_id"
incoming="$releases/.incoming-$release_id"
current="$deploy_root/current"
deployed_sha="$deploy_root/DEPLOYED_SHA"
previous_target=""
previous_release_id=""

if [[ -L "$current" ]]; then
	resolved_current=$(readlink -f -- "$current" || true)
	resolved_release_id=${resolved_current#"$releases/"}
	if [[ "$resolved_current" == "$releases/"* && "$resolved_release_id" =~ ^[0-9a-f]{40}$ && -f "$resolved_current/index.html" ]]; then
		previous_target="$resolved_current"
		previous_release_id="$resolved_release_id"
	fi
fi

restart_mcp_and_wait() {
	if ! sudo -n /bin/systemctl restart "$mcp_service"; then
		return 1
	fi
	for attempt in {1..10}; do
		if curl --fail --silent --max-time 2 "$health_url" > /dev/null; then
			return 0
		fi
		sleep 1
	done
	curl --fail --silent --show-error --max-time 5 "$health_url" > /dev/null
}

run_public_smoke() {
	local expected_release=$1
	local release_directory=$2
	local node_binary=/opt/compatair/node/bin/node
	local smoke_script="$script_dir/scripts/smoke-live-http.mjs"
	local seo_script="$script_dir/scripts/verify-live-seo.mjs"
	local mcp_enabled=false
	if [[ ! -x "$node_binary" || ! -f "$smoke_script" || ! -f "$seo_script" || ! -f "$script_dir/scripts/lib/live-seo-verification.mjs" || ! -f "$script_dir/scripts/lib/markup-text.mjs" ]]; then
		echo "The production smoke runtime is incomplete" >&2
		return 1
	fi
	if systemctl is-enabled --quiet "$mcp_service" 2>/dev/null; then mcp_enabled=true; fi
	COMPATAIR_EXPECTED_RELEASE_SHA="$expected_release" COMPATAIR_RELEASE_DIR="$release_directory" MCP_ENABLED="$mcp_enabled" "$node_binary" "$smoke_script"
	COMPATAIR_EXPECTED_RELEASE_SHA="$expected_release" "$node_binary" "$seo_script"
}

restore_previous_release() {
	if [[ -z "$previous_target" || -z "$previous_release_id" ]]; then
		echo "No previous verified release is available for automatic rollback" >&2
		return 1
	fi
	ln -sfn "$previous_target" "$current.rollback"
	mv -Tf "$current.rollback" "$current"
	printf '%s\n' "$previous_release_id" > "$deployed_sha"
	restart_mcp_and_wait
}

activation_pending=false
rollback_after_failed_activation() {
	status=$?
	trap - EXIT INT TERM
	if [[ "$activation_pending" == true ]]; then
		echo "Activation interrupted or unhealthy; restoring the previous verified release" >&2
		if ! restore_previous_release; then
			echo "Automatic rollback failed and requires immediate operator intervention" >&2
		fi
	fi
	exit "$status"
}
trap rollback_after_failed_activation EXIT
trap 'exit 130' INT
trap 'exit 143' TERM

install -d -m 755 "$releases"
if [[ -e "$release" ]]; then
	echo "Release $release_id is already present; reactivating it"
else
	if [[ -e "$incoming" ]]; then
		rm -rf -- "$incoming"
	fi
	install -d -m 755 "$incoming"
	tar -xzf "$archive" -C "$incoming" --no-same-owner --no-same-permissions
	test -f "$incoming/index.html"
	mv "$incoming" "$release"
fi

if [[ "$deployment_profile" == production && -n "$previous_target" ]]; then
	node_binary=/opt/compatair/node/bin/node
	read_mcp_version() {
		"$node_binary" --input-type=module -e 'import { pathToFileURL } from "node:url"; const module = await import(pathToFileURL(process.argv[1]).href); process.stdout.write(module.MCP_SERVER_VERSION);' "$1"
	}
	current_mcp_version=$(read_mcp_version "$previous_target/_server/mcp-core.mjs")
	candidate_mcp_version=$(read_mcp_version "$release/_server/mcp-core.mjs")
	if [[ ! "$current_mcp_version" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ || ! "$candidate_mcp_version" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
		echo "Unable to verify MCP server versions before activation" >&2
		exit 2
	fi
	if [[ ${current_mcp_version%%.*} != "${candidate_mcp_version%%.*}" ]]; then
		echo "Major MCP server evolution detected: $current_mcp_version -> $candidate_mcp_version"
		sudo -n /usr/local/sbin/compatair-assert-recent-drill
	fi
fi

ln -sfn "$release" "$current.next"
mv -Tf "$current.next" "$current"
activation_pending=true

if [[ "$deployment_profile" == staging && ${COMPATAIR_DEPLOY_FAILPOINT:-} == after-switch ]]; then
	kill -TERM "$$"
fi

if systemctl is-enabled --quiet "$mcp_service" 2>/dev/null; then
	if ! restart_mcp_and_wait; then
		echo "The candidate MCP release is unhealthy" >&2
		exit 1
	fi
fi
if [[ "$deployment_profile" == staging && ${COMPATAIR_DEPLOY_FAILPOINT:-} == public-smoke ]]; then
	echo "Intentional staging post-activation smoke failure" >&2
	exit 1
fi
if [[ "$deployment_profile" == production ]]; then
	if ! run_public_smoke "$release_id" "$release"; then
		echo "The candidate failed the public HTTPS smoke; rollback is mandatory" >&2
		exit 1
	fi
	if ! sudo -n /bin/systemctl restart compatair-weekly-insights.timer; then
		echo "The private weekly report timer failed to converge" >&2
		exit 1
	fi
fi
printf '%s\n' "$release_id" > "$deployed_sha"
activation_pending=false
printf 'Activated %s at %s\n' "$release_id" "$(date -u +%FT%TZ)"
