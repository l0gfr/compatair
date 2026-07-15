#!/usr/bin/env bash
set -Eeuo pipefail

script_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
cert_dir=/etc/letsencrypt/live/compatair.fr

if [[ ${EUID:-$(id -u)} -ne 0 ]]; then
	echo "This script must run as root" >&2
	exit 2
fi

test -s "$cert_dir/fullchain.pem"
test -s "$cert_dir/privkey.pem"

"$script_dir/install-apache-vhost.sh" "$script_dir/../apache/compatair.fr.conf.example"

echo "CompatAir TLS vhost activated."
