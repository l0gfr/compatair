#!/usr/bin/env bash
set -Eeuo pipefail

if [[ ${EUID:-$(id -u)} -ne 0 ]]; then
	echo "This script must run as root" >&2
	exit 2
fi

version="24.18.0"
node_arch=""
archive_sha256=""

case "$(dpkg --print-architecture)" in
	amd64)
		node_arch="x64"
		archive_sha256="55aa7153f9d88f28d765fcdad5ae6945b5c0f98a36881703817e4c450fa76742"
		;;
	arm64)
		node_arch="arm64"
		archive_sha256="58c9520501f6ae2b52d5b210444e24b9d0c029a58c5011b797bc1fe7105886f6"
		;;
	*)
		echo "Unsupported architecture. CompatAir supports Debian amd64 and arm64." >&2
		exit 2
		;;
esac

runtime_root="/opt/compatair"
runtime_dir="$runtime_root/node-v$version"
runtime_link="$runtime_root/node"
archive="node-v$version-linux-$node_arch.tar.xz"
download_url="https://nodejs.org/dist/v$version/$archive"

if [[ -x "$runtime_dir/bin/node" ]]; then
	installed_version=$($runtime_dir/bin/node --version)
	if [[ "$installed_version" != "v$version" ]]; then
		echo "Unexpected Node.js version in $runtime_dir: $installed_version" >&2
		exit 2
	fi
	ln -sfn "node-v$version" "$runtime_link"
	echo "CompatAir Node.js runtime already installed: $installed_version"
	exit 0
fi

if [[ -e "$runtime_dir" || -L "$runtime_dir" ]]; then
	echo "Refusing to replace unexpected path: $runtime_dir" >&2
	exit 2
fi

apt-get update
apt-get install -y --no-install-recommends ca-certificates curl xz-utils

temporary_dir=$(mktemp -d)
trap 'rm -rf "$temporary_dir"' EXIT

curl --proto '=https' --tlsv1.2 --fail --location --silent --show-error --connect-timeout 15 --max-time 120 \
	--output "$temporary_dir/$archive" "$download_url"
(
	cd "$temporary_dir"
	printf '%s  %s\n' "$archive_sha256" "$archive" | sha256sum --check --strict -
)

tar -xJf "$temporary_dir/$archive" -C "$temporary_dir"
install -d -o root -g root -m 755 "$runtime_root"
mv "$temporary_dir/node-v$version-linux-$node_arch" "$runtime_dir"
chown -R root:root "$runtime_dir"
ln -sfn "node-v$version" "$runtime_link"

test "$($runtime_link/bin/node --version)" = "v$version"
echo "CompatAir Node.js runtime installed: $($runtime_link/bin/node --version)"
