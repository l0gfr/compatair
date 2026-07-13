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

if [[ ! "$deploy_root" =~ ^/var/www/html/[A-Za-z0-9._/-]+$ ]]; then
	echo "DEPLOY_PATH must be a dedicated directory below /var/www/html" >&2
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

ln -sfn "$release" "$deploy_root/current.next"
mv -Tf "$deploy_root/current.next" "$deploy_root/current"

printf '%s\n' "$release_id" > "$deploy_root/DEPLOYED_SHA"
if systemctl is-enabled --quiet compatair-mcp.service 2>/dev/null; then
	sudo -n /bin/systemctl restart compatair-mcp.service
	mcp_ready=0
	for attempt in {1..10}; do
		if curl --fail --silent --max-time 2 http://127.0.0.1:8787/health > /dev/null; then
			mcp_ready=1
			break
		fi
		sleep 1
	done
	if (( mcp_ready == 0 )); then
		curl --fail --silent --show-error --max-time 5 http://127.0.0.1:8787/health > /dev/null
	fi
fi
printf 'Activated %s at %s\n' "$release_id" "$(date -u +%FT%TZ)"
