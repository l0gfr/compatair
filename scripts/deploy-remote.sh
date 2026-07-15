#!/usr/bin/env bash
set -Eeuo pipefail

archive=${1:-}
checksum_file=${2:-}
deploy_root=${3:-}
release_id=${4:-}

if [[ ! "$release_id" =~ ^[0-9a-f]{40}$ ]]; then
	echo "Invalid release identifier" >&2
	exit 2
fi

if [[ "$deploy_root" != "/var/www/html/compatair" ]]; then
	echo "DEPLOY_PATH must be /var/www/html/compatair" >&2
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
	if ! sudo -n /bin/systemctl restart compatair-mcp.service; then
		return 1
	fi
	for attempt in {1..10}; do
		if curl --fail --silent --max-time 2 http://127.0.0.1:8787/health > /dev/null; then
			return 0
		fi
		sleep 1
	done
	curl --fail --silent --show-error --max-time 5 http://127.0.0.1:8787/health > /dev/null
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

ln -sfn "$release" "$current.next"
mv -Tf "$current.next" "$current"

if systemctl is-enabled --quiet compatair-mcp.service 2>/dev/null; then
	if ! restart_mcp_and_wait; then
		echo "The candidate MCP release is unhealthy; restoring the previous release" >&2
		if ! restore_previous_release; then
			echo "Automatic rollback failed and requires immediate operator intervention" >&2
		fi
		exit 1
	fi
fi
printf '%s\n' "$release_id" > "$deployed_sha"
printf 'Activated %s at %s\n' "$release_id" "$(date -u +%FT%TZ)"
