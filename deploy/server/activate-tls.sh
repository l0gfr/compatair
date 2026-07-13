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

install -m 644 "$script_dir/../apache/compatair.fr.conf.example" /etc/apache2/sites-available/compatair.fr.conf
apache2ctl configtest
systemctl reload apache2

echo "CompatAir TLS vhost activated."
