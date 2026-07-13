#!/usr/bin/env bash
set -Eeuo pipefail

public_key=${1:-}
script_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)

if [[ ${EUID:-$(id -u)} -ne 0 ]]; then
	echo "This script must run as root" >&2
	exit 2
fi

if [[ ! "$public_key" =~ ^ssh-ed25519\ [A-Za-z0-9+/=]+\ compatair-github-actions$ ]]; then
	echo "Invalid dedicated deployment public key" >&2
	exit 2
fi

deploy_user=compatair-deploy
deploy_root=/var/www/html/compatair

if ! id "$deploy_user" >/dev/null 2>&1; then
	useradd --create-home --shell /bin/bash "$deploy_user"
fi

install -d -o "$deploy_user" -g "$deploy_user" -m 700 "/home/$deploy_user/.ssh"
printf '%s %s\n' 'no-agent-forwarding,no-port-forwarding,no-X11-forwarding,no-pty' "$public_key" > "/home/$deploy_user/.ssh/authorized_keys"
chown "$deploy_user:$deploy_user" "/home/$deploy_user/.ssh/authorized_keys"
chmod 600 "/home/$deploy_user/.ssh/authorized_keys"

install -d -o "$deploy_user" -g www-data -m 2755 "$deploy_root" "$deploy_root/releases"
install -d -o "$deploy_user" -g www-data -m 755 "$deploy_root/releases/bootstrap"
printf '%s\n' '<!doctype html><html lang="fr"><meta charset="utf-8"><title>CompatAir</title><h1>CompatAir arrive.</h1></html>' > "$deploy_root/releases/bootstrap/index.html"
chown "$deploy_user:www-data" "$deploy_root/releases/bootstrap/index.html"
ln -sfn "$deploy_root/releases/bootstrap" "$deploy_root/current.next"
mv -Tf "$deploy_root/current.next" "$deploy_root/current"

install -m 644 "$script_dir/../apache/compatair.fr-http.conf" /etc/apache2/sites-available/compatair.fr.conf
a2enmod headers rewrite ssl >/dev/null
a2ensite compatair.fr.conf >/dev/null
apache2ctl configtest
systemctl reload apache2

echo "CompatAir HTTP bootstrap complete. Request the certificate before enabling deployment."
