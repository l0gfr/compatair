#!/usr/bin/env bash
set -Eeuo pipefail

deploy_root=${1:-}
release_id=${2:-}

if [[ "$deploy_root" != "/var/www/html/compatair" ]] || [[ ! "$release_id" =~ ^[0-9a-f]{40}$ ]]; then
	echo "Usage: rollback-remote.sh /var/www/html/compatair <40-character-sha>" >&2
	exit 2
fi

release="$deploy_root/releases/$release_id"
releases="$deploy_root/releases"
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
		echo "No previous verified release is available for automatic recovery" >&2
		return 1
	fi
	ln -sfn "$previous_target" "$current.recovery"
	mv -Tf "$current.recovery" "$current"
	printf '%s\n' "$previous_release_id" > "$deployed_sha"
	restart_mcp_and_wait
}

test -f "$release/index.html"
ln -sfn "$release" "$current.next"
mv -Tf "$current.next" "$current"
if systemctl is-enabled --quiet compatair-mcp.service 2>/dev/null; then
	if ! restart_mcp_and_wait; then
		echo "The requested rollback release is unhealthy; restoring the active release" >&2
		if ! restore_previous_release; then
			echo "Automatic recovery failed and requires immediate operator intervention" >&2
		fi
		exit 1
	fi
fi
printf '%s\n' "$release_id" > "$deployed_sha"
printf 'Rolled back to %s\n' "$release_id"
