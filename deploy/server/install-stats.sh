#!/usr/bin/env bash
set -Eeuo pipefail

script_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
project_dir=$(cd -- "$script_dir/../.." && pwd)

if [[ ${EUID:-$(id -u)} -ne 0 ]]; then
	echo "This script must run as root" >&2
	exit 2
fi

test -f "$project_dir/deploy/server/generate-stats.sh"
test -f "$project_dir/deploy/systemd/compatair-stats.service"
test -f "$project_dir/deploy/systemd/compatair-stats.timer"

apt-get update
apt-get install -y --no-install-recommends apache2-utils goaccess gzip
a2enmod auth_basic authn_file headers

goaccess_help=$(/usr/bin/goaccess --help 2>&1 || true)
if [[ "$goaccess_help" != *"--anonymize-level"* ]]; then
	echo "The installed GoAccess version does not support the required IP anonymization level" >&2
	exit 2
fi

if ! id compatair-stats >/dev/null 2>&1; then
	useradd --system --home-dir /var/lib/compatair-stats --create-home \
		--shell /usr/sbin/nologin --groups adm compatair-stats
fi
usermod --append --groups adm compatair-stats

install -d -o compatair-stats -g www-data -m 2750 /var/www/html/compatair-stats
install -o root -g root -m 755 "$project_dir/deploy/server/generate-stats.sh" \
	/usr/local/libexec/compatair-generate-stats
install -o root -g root -m 644 "$project_dir/deploy/systemd/compatair-stats.service" \
	/etc/systemd/system/compatair-stats.service
install -o root -g root -m 644 "$project_dir/deploy/systemd/compatair-stats.timer" \
	/etc/systemd/system/compatair-stats.timer

stats_user=""
while [[ ! "$stats_user" =~ ^[A-Za-z0-9._-]{1,64}$ ]]; do
	read -r -p "Stats username [bluetouff]: " stats_user
	stats_user=${stats_user:-bluetouff}
done

password=""
confirmation=""
while [[ ${#password} -lt 16 || "$password" != "$confirmation" ]]; do
	read -r -s -p "Stats password, 16 characters minimum: " password
	echo
	read -r -s -p "Confirm stats password: " confirmation
	echo
	if [[ ${#password} -lt 16 ]]; then
		echo "Password is too short" >&2
	elif [[ "$password" != "$confirmation" ]]; then
		echo "Passwords do not match" >&2
	fi
done

htpasswd_file="/etc/apache2/compatair-stats.htpasswd"
if [[ -f "$htpasswd_file" ]]; then
	printf '%s\n' "$password" | htpasswd -i -B -C 12 "$htpasswd_file" "$stats_user"
else
	printf '%s\n' "$password" | htpasswd -i -B -C 12 -c "$htpasswd_file" "$stats_user"
fi
unset password confirmation
chown root:www-data "$htpasswd_file"
chmod 640 "$htpasswd_file"

systemctl daemon-reload
systemctl enable --now compatair-stats.timer
systemctl start compatair-stats.service

"$script_dir/install-apache-vhost.sh" "$project_dir/deploy/apache/compatair.fr.conf.example"

test -s /var/www/html/compatair-stats/index.html
stats_status=$(curl --silent --show-error --head --output /dev/null --write-out '%{http_code}' \
	--max-time 5 https://compatair.fr/stats/)
if [[ "$stats_status" != "401" ]]; then
	echo "Expected the private statistics endpoint to return 401 without credentials, got $stats_status" >&2
	exit 2
fi
echo "CompatAir statistics installed at https://compatair.fr/stats/"
