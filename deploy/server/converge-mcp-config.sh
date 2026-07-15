#!/usr/bin/env bash
set -Eeuo pipefail

approved_vhost=/etc/compatair/approved/compatair.fr.conf
installer=/usr/local/libexec/compatair/install-apache-vhost

if [[ $# -ne 0 ]]; then
	echo "This privileged convergence command accepts no arguments" >&2
	exit 2
fi
if [[ ${EUID:-$(id -u)} -ne 0 ]]; then
	echo "This command must run as root" >&2
	exit 2
fi
if [[ ! -f "$approved_vhost" || -L "$approved_vhost" || ! -x "$installer" || -L "$installer" ]]; then
	echo "The root-approved CompatAir configuration is incomplete" >&2
	exit 2
fi
if [[ $(stat -c '%u:%g:%a' "$approved_vhost") != '0:0:644' || $(stat -c '%u:%g:%a' "$installer") != '0:0:755' ]]; then
	echo "The root-approved CompatAir configuration has unsafe ownership or mode" >&2
	exit 2
fi

exec "$installer" "$approved_vhost" /etc/apache2/sites-available/compatair.fr.conf
