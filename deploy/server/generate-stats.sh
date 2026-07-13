#!/usr/bin/env bash
set -Eeuo pipefail
umask 027

log_directory="/var/log/apache2"
active_log="$log_directory/compatair-ssl-access.log"
output_directory="/var/www/html/compatair-stats"
temporary_report=$(mktemp "$output_directory/.index.html.XXXXXX")
trap 'rm -f "$temporary_report"' EXIT

test -r "$active_log"
test -d "$output_directory"

mapfile -t compressed_logs < <(
	find "$log_directory" -maxdepth 1 -type f -name 'compatair-ssl-access.log.*.gz' -print | sort -V -r
)

{
	for log_file in "${compressed_logs[@]}"; do
		gzip --decompress --stdout -- "$log_file"
	done
	if [[ -r "$active_log.1" ]]; then
		cat -- "$active_log.1"
	fi
	cat -- "$active_log"
} | /usr/bin/goaccess - \
	--no-global-config \
	--log-format=COMBINED \
	--anonymize-ip \
	--anonymize-level=2 \
	--no-query-string \
	--keep-last=90 \
	--external-assets \
	--html-report-title='CompatAir, statistiques des 90 derniers jours' \
	--html-prefs='{"theme":"darkPurple","perPage":20,"layout":"vertical","showTables":true}' \
	--tz=Europe/Paris \
	--no-progress \
	--no-parsing-spinner \
	--output="$temporary_report"

chmod 640 "$temporary_report"
mv -f "$temporary_report" "$output_directory/index.html"
chmod 640 "$output_directory/goaccess.css" "$output_directory/goaccess.js"
trap - EXIT
