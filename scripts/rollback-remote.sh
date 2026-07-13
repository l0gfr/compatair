#!/usr/bin/env bash
set -Eeuo pipefail

deploy_root=${1:-}
release_id=${2:-}

if [[ ! "$deploy_root" =~ ^/var/www/html/[A-Za-z0-9._/-]+$ ]] || [[ ! "$release_id" =~ ^[0-9a-f]{40}$ ]]; then
	echo "Usage: rollback-remote.sh /var/www/html/compatair <40-character-sha>" >&2
	exit 2
fi

release="$deploy_root/releases/$release_id"
test -f "$release/index.html"
ln -sfn "$release" "$deploy_root/current.next"
mv -Tf "$deploy_root/current.next" "$deploy_root/current"
printf '%s\n' "$release_id" > "$deploy_root/DEPLOYED_SHA"
printf 'Rolled back to %s\n' "$release_id"
