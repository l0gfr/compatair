#!/usr/bin/env bash
set -Eeuo pipefail

source_config=${1:-}
target_config=/etc/apache2/sites-available/compatair.fr.conf

if [[ ${EUID:-$(id -u)} -ne 0 ]]; then
	echo "This script must run as root" >&2
	exit 2
fi

if [[ -z "$source_config" || ! -f "$source_config" || -L "$source_config" ]]; then
	echo "A regular CompatAir vhost candidate is required" >&2
	exit 2
fi

if [[ -L "$target_config" || ( -e "$target_config" && ! -f "$target_config" ) ]]; then
	echo "Refusing to replace an unexpected Apache vhost path" >&2
	exit 2
fi

backup_config=$(mktemp /etc/apache2/sites-available/.compatair.fr.conf.XXXXXX)
trap 'rm -f -- "$backup_config"' EXIT
had_previous_config=false

if [[ -f "$target_config" ]]; then
	cp --preserve=mode,ownership,timestamps -- "$target_config" "$backup_config"
	had_previous_config=true
fi

restore_previous_config() {
	if [[ "$had_previous_config" == "true" ]]; then
		install -o root -g root -m 644 "$backup_config" "$target_config"
	else
		rm -f -- "$target_config"
	fi
}

install -o root -g root -m 644 "$source_config" "$target_config"
if ! apache2ctl configtest; then
	restore_previous_config
	apache2ctl configtest
	echo "Apache rejected the candidate vhost; the previous configuration was restored" >&2
	exit 1
fi

if ! systemctl reload apache2; then
	restore_previous_config
	apache2ctl configtest
	systemctl reload apache2
	echo "Apache reload failed; the previous configuration was restored" >&2
	exit 1
fi

echo "CompatAir Apache vhost installed."
