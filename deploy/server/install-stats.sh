#!/usr/bin/env bash
set -Eeuo pipefail

script_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
project_dir=$(cd -- "$script_dir/../.." && pwd)
mode=${1:-}
if [[ $# -gt 1 || ( -n "$mode" && "$mode" != "--update" ) ]]; then
	echo "Usage: $0 [--update]" >&2
	exit 2
fi

if [[ ${EUID:-$(id -u)} -ne 0 ]]; then
	echo "This script must run as root" >&2
	exit 2
fi

test -f "$project_dir/deploy/server/generate-stats.sh"
test -f "$project_dir/deploy/server/aggregate-stats.mjs"
test -f "$project_dir/deploy/systemd/compatair-stats.service"
test -f "$project_dir/deploy/systemd/compatair-stats.timer"
test -x /opt/compatair/node/bin/node

check_goaccess() {
	local goaccess_help
	goaccess_help=$(/usr/bin/goaccess --help 2>&1 || true)
	if [[ "$goaccess_help" != *"--anonymize-level"* ]]; then
		echo "The installed GoAccess version does not support the required IP anonymization level" >&2
		return 2
	fi
}

check_private_reports() {
	test -s /var/www/html/compatair-stats/index.html
	test -s /var/www/html/compatair-stats/traffic-segments.json
	local endpoint status
	for endpoint in https://compatair.fr/stats/ https://compatair.fr/stats/traffic-segments.json; do
		status=$(curl --silent --show-error --head --output /dev/null --write-out '%{http_code}' \
			--user-agent 'CompatAir-Internal-Check/1.0 stats-install' --max-time 5 "$endpoint")
		if [[ "$status" != "401" ]]; then
			echo "Expected the private statistics endpoint to return 401 without credentials, got $status" >&2
			return 2
		fi
	done
}

if [[ "$mode" == "--update" ]]; then
	# Update only an established installation; never recreate or rewrite credentials.
	for required in /etc/apache2/compatair-stats.htpasswd \
		/usr/local/libexec/compatair-generate-stats \
		/etc/systemd/system/compatair-stats.service /etc/systemd/system/compatair-stats.timer \
		/etc/compatair/approved/compatair.fr.conf /etc/apache2/sites-available/compatair.fr.conf; do
		if [[ ! -s "$required" || ! -f "$required" || -L "$required" ]]; then
			echo "An existing regular stats installation and approved vhost are required for --update" >&2
			exit 2
		fi
	done
	if [[ $(stat -c '%U:%G:%a' /etc/apache2/compatair-stats.htpasswd) != 'root:www-data:640' \
		|| ! -d /var/www/html/compatair-stats || -L /var/www/html/compatair-stats \
		|| $(stat -c '%U:%G:%a' /var/www/html/compatair-stats) != 'compatair-stats:www-data:2750' ]]; then
		echo "The existing stats credentials or report directory have unexpected permissions" >&2
		exit 2
	fi
	if ! id compatair-stats >/dev/null 2>&1 || [[ " $(id -nG compatair-stats) " != *" adm "* ]]; then
		echo "The existing compatair-stats account must belong to adm" >&2
		exit 2
	fi
	test -x /usr/bin/goaccess
	command -v gzip >/dev/null
	check_goaccess
	for unit in compatair-stats.service compatair-stats.timer; do
		if ! cmp --silent -- "$project_dir/deploy/systemd/$unit" "/etc/systemd/system/$unit"; then
			echo "The installed stats units differ from this package; --update cannot migrate units" >&2
			exit 2
		fi
	done
	for vhost in /etc/compatair/approved/compatair.fr.conf /etc/apache2/sites-available/compatair.fr.conf; do
		if ! cmp --silent -- "$project_dir/deploy/apache/compatair.fr.conf.example" "$vhost"; then
			echo "Run install-mcp.sh --prepare-release from this verified package before --update" >&2
			exit 2
		fi
	done
	if ! systemctl is-enabled --quiet compatair-stats.timer || ! systemctl is-active --quiet compatair-stats.timer; then
		echo "The existing stats timer must be enabled and active before --update" >&2
		exit 2
	fi

	# Stop the timer while replacing its executables. Save reports as GoAccess also
	# writes external CSS/JS before the pipeline has necessarily completed.
	update_files=(/usr/local/libexec/compatair-generate-stats /usr/local/libexec/compatair-aggregate-stats.mjs \
		/var/www/html/compatair-stats/index.html /var/www/html/compatair-stats/traffic-segments.json \
		/var/www/html/compatair-stats/goaccess.css /var/www/html/compatair-stats/goaccess.js)
	for target in "${update_files[@]}"; do
		if [[ -L "$target" || ( -e "$target" && ! -f "$target" ) ]]; then
			echo "Refusing an unexpected stats executable or report path" >&2
			exit 2
		fi
	done
	backup_dir=$(mktemp -d /usr/local/libexec/.compatair-stats-update.XXXXXX)
	update_pending=false
	timer_stopped=false
	finish_update() {
		local status=$? restored=true index target
		trap '' PIPE
		trap - EXIT INT TERM HUP
		if [[ "$update_pending" == true ]]; then
			timer_stopped=true
			if systemctl stop compatair-stats.timer && systemctl stop compatair-stats.service; then
				for index in "${!update_files[@]}"; do
					target=${update_files[$index]}
					if [[ -f "$backup_dir/$index" ]]; then
						cp --preserve=mode,ownership,timestamps --remove-destination -- "$backup_dir/$index" "$target" || restored=false
					else
						rm -f -- "$target" || restored=false
					fi
				done
			else
				restored=false
			fi
		fi
		if [[ "$timer_stopped" == true && "$restored" == true ]]; then
			systemctl start compatair-stats.timer || restored=false
		fi
		if [[ "$restored" == true ]]; then
			if [[ "$update_pending" == true ]]; then
				(echo "Stats update failed; previous executables and reports restored." >&2) || true
			fi
			rm -rf -- "$backup_dir"
		else
			(echo "Stats recovery requires operator intervention; backups retained in $backup_dir" >&2) || true
			status=1
		fi
		exit "$status"
	}
	trap finish_update EXIT
	trap 'exit 130' INT
	trap 'exit 143' TERM
	trap 'exit 129' HUP
	timer_stopped=true
	systemctl stop compatair-stats.timer
	# Type=oneshot remains activating while it writes GoAccess assets. Never stop
	# that existing generation or snapshot its CSS/JS before it has finished.
	for attempt in {0..30}; do
		service_state=$(systemctl show --property=ActiveState --value compatair-stats.service)
		case "$service_state" in
			inactive|failed) break ;;
			active|activating|deactivating|reloading)
				if (( attempt == 30 )); then
					echo "Stats generation is still running after 30 seconds; update refused without stopping it" >&2
					exit 2
				fi
				sleep 1
				;;
			*)
				echo "Unable to establish an idle stats service; update refused" >&2
				exit 2
				;;
		esac
	done
	for index in "${!update_files[@]}"; do
		target=${update_files[$index]}
		if [[ -f "$target" ]]; then
			cp --preserve=mode,ownership,timestamps -- "$target" "$backup_dir/$index"
		fi
	done
	update_pending=true
	install -o root -g root -m 755 "$project_dir/deploy/server/generate-stats.sh" /usr/local/libexec/compatair-generate-stats
	install -o root -g root -m 644 "$project_dir/deploy/server/aggregate-stats.mjs" /usr/local/libexec/compatair-aggregate-stats.mjs
	systemctl start compatair-stats.service
	check_private_reports
	systemctl start compatair-stats.timer
	update_pending=false
	timer_stopped=false
	echo "CompatAir statistics updated; existing credentials preserved."
	exit 0
fi

apt-get update
apt-get install -y --no-install-recommends apache2-utils goaccess gzip
a2enmod auth_basic authn_file headers

check_goaccess

if ! id compatair-stats >/dev/null 2>&1; then
	useradd --system --home-dir /var/lib/compatair-stats --create-home \
		--shell /usr/sbin/nologin --groups adm compatair-stats
fi
usermod --append --groups adm compatair-stats

install -d -o compatair-stats -g www-data -m 2750 /var/www/html/compatair-stats
install -o root -g root -m 755 "$project_dir/deploy/server/generate-stats.sh" \
	/usr/local/libexec/compatair-generate-stats
install -o root -g root -m 644 "$project_dir/deploy/server/aggregate-stats.mjs" \
	/usr/local/libexec/compatair-aggregate-stats.mjs
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

check_private_reports
echo "CompatAir statistics installed at https://compatair.fr/stats/"
