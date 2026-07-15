#!/usr/bin/env bash
set -Eeuo pipefail

if [[ $# -ne 0 ]]; then
	echo "This privileged drill assertion accepts no arguments" >&2
	exit 2
fi
if [[ ${EUID:-$(id -u)} -ne 0 ]]; then
	echo "This command must run as root" >&2
	exit 2
fi
verifier=/usr/local/libexec/compatair/verify-drill-report.mjs
node_binary=/opt/compatair/node/bin/node
if [[ ! -f "$verifier" || -L "$verifier" || $(stat -c '%u:%g:%a' "$verifier") != '0:0:644' || ! -x "$node_binary" ]]; then
	echo "The root-owned drill verifier is unavailable" >&2
	exit 2
fi
exec "$node_binary" "$verifier" /var/lib/compatair-staging/failure-drills
