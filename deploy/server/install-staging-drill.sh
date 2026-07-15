#!/usr/bin/env bash
set -Eeuo pipefail

script_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
repo_root=$(cd -- "$script_dir/../.." && pwd)
production_root=/var/www/html/compatair
staging_root=/var/www/html/compatair-staging
staging_service=compatair-mcp-staging.service
staging_vhost=/etc/apache2/sites-available/compatair-staging.conf
staging_vhost_link=/etc/apache2/sites-enabled/compatair-staging.conf
node_binary=/opt/compatair/node/bin/node
sudoers_file=/etc/sudoers.d/compatair-mcp-staging-drill
service_file=/etc/systemd/system/compatair-mcp-staging.service

umask 022

if [[ ${EUID:-$(id -u)} -ne 0 ]]; then
	echo "This script must run as root" >&2
	exit 2
fi

for required in \
	"$production_root/DEPLOYED_SHA" \
	"$repo_root/deploy/apache/compatair-staging.conf.example" \
	"$repo_root/deploy/systemd/compatair-mcp-staging.service" \
	"$repo_root/scripts/deploy-remote.sh" \
	"$script_dir/install-apache-vhost.sh" \
	"$script_dir/staging-failure-drill.sh"; do
	test -f "$required"
done
test -x "$node_binary"
test "$($node_binary -p 'process.versions.node.split(".")[0]')" = 24

for directory in "$staging_root" "$staging_root/releases"; do
	if [[ -L "$directory" || ( -e "$directory" && ! -d "$directory" ) ]]; then
		echo "Refusing an unexpected staging directory path: $directory" >&2
		exit 1
	fi
done
for regular_target in "$staging_root/DEPLOYED_SHA" "$sudoers_file" "$service_file"; do
	if [[ -L "$regular_target" || ( -e "$regular_target" && ! -f "$regular_target" ) ]]; then
		echo "Refusing an unexpected staging configuration path: $regular_target" >&2
		exit 1
	fi
done
if [[ -e "$staging_vhost_link" && ! -L "$staging_vhost_link" ]]; then
	echo "Refusing to replace a non-symlink staging vhost activation path" >&2
	exit 1
fi

release=$(tr -d '\n' < "$production_root/DEPLOYED_SHA")
if [[ ! "$release" =~ ^[0-9a-f]{40}$ ]]; then
	echo "The production release marker is invalid" >&2
	exit 2
fi
production_release=$(readlink -f -- "$production_root/current")
if [[ "$production_release" != "$production_root/releases/$release" || ! -f "$production_release/index.html" || ! -f "$production_release/_server/mcp-server.mjs" ]]; then
	echo "The production release is not an immutable seeded baseline" >&2
	exit 2
fi

install -d -o compatair-deploy -g www-data -m 2755 "$staging_root" "$staging_root/releases"
staging_release="$staging_root/releases/$release"
seed_directory="$staging_root/releases/.seed-$release-$$"
sudoers_candidate=
cleanup() {
	if [[ -d "$seed_directory" ]]; then rm -rf -- "$seed_directory"; fi
	if [[ -n "$sudoers_candidate" && -f "$sudoers_candidate" ]]; then rm -f -- "$sudoers_candidate"; fi
}
trap cleanup EXIT

if [[ -e "$staging_release" ]]; then
	if [[ ! -d "$staging_release" || -L "$staging_release" ]] || ! diff -qr -- "$production_release" "$staging_release" > /dev/null; then
		echo "The existing staging baseline differs from production; refusing to overwrite it" >&2
		exit 1
	fi
else
	mkdir -m 2755 "$seed_directory"
	cp -a -- "$production_release/." "$seed_directory/"
	chown -R compatair-deploy:www-data "$seed_directory"
	mv -- "$seed_directory" "$staging_release"
fi

if [[ -e "$staging_root/current" && ! -L "$staging_root/current" ]]; then
	echo "Refusing to replace a non-symlink staging current path" >&2
	exit 1
fi
ln -sfn -- "$staging_release" "$staging_root/current"
printf '%s\n' "$release" > "$staging_root/DEPLOYED_SHA"
chown compatair-deploy:www-data "$staging_root/DEPLOYED_SHA"
chmod 644 "$staging_root/DEPLOYED_SHA"

install -o root -g root -m 644 "$repo_root/deploy/systemd/compatair-mcp-staging.service" "$service_file"
sudoers_candidate=$(mktemp /etc/sudoers.d/.compatair-mcp-staging-drill.XXXXXX)
printf '%s\n' 'compatair-deploy ALL=(root) NOPASSWD: /bin/systemctl restart compatair-mcp-staging.service' > "$sudoers_candidate"
chmod 440 "$sudoers_candidate"
visudo -cf "$sudoers_candidate"
install -o root -g root -m 440 "$sudoers_candidate" "$sudoers_file"
rm -f -- "$sudoers_candidate"
sudoers_candidate=
visudo -cf "$sudoers_file"

COMPATAIR_STAGING_DRILL=1 bash "$script_dir/install-apache-vhost.sh" "$repo_root/deploy/apache/compatair-staging.conf.example" "$staging_vhost"
ln -sfn -- "$staging_vhost" "$staging_vhost_link"
apache2ctl configtest
systemctl reload apache2
systemctl daemon-reload
systemctl enable "$staging_service"
systemctl restart "$staging_service"
curl --fail --silent --show-error --max-time 5 http://127.0.0.1:8788/health > /dev/null

bash "$script_dir/staging-failure-drill.sh"
/usr/local/sbin/compatair-assert-recent-drill
echo "CompatAir isolated staging installed and failure drill verified."
