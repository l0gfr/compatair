#!/usr/bin/env bash
set -Eeuo pipefail

deploy_root=${1:-}
release_id=${2:-}

if [[ "$deploy_root" != "/var/www/html/compatair" ]] || [[ ! "$release_id" =~ ^[0-9a-f]{40}$ ]]; then
	echo "Usage: rollback-remote.sh /var/www/html/compatair <40-character-sha>" >&2
	exit 2
fi

release="$deploy_root/releases/$release_id"
test -f "$release/index.html"
ln -sfn "$release" "$deploy_root/current.next"
mv -Tf "$deploy_root/current.next" "$deploy_root/current"
printf '%s\n' "$release_id" > "$deploy_root/DEPLOYED_SHA"
if systemctl is-enabled --quiet compatair-mcp.service 2>/dev/null; then
	sudo -n /bin/systemctl restart compatair-mcp.service
	for attempt in {1..10}; do
		if curl --fail --silent --max-time 2 http://127.0.0.1:8787/health > /dev/null; then
			mcp_ready=1
			break
		fi
		sleep 1
	done
	if [[ ${mcp_ready:-0} != 1 ]]; then
		curl --fail --silent --show-error --max-time 5 http://127.0.0.1:8787/health > /dev/null
	fi
fi
printf 'Rolled back to %s\n' "$release_id"
