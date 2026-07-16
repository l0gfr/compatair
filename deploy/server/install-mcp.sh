#!/usr/bin/env bash
set -Eeuo pipefail

script_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
project_dir=$(cd -- "$script_dir/../.." && pwd)

if [[ ${EUID:-$(id -u)} -ne 0 ]]; then
	echo "This script must run as root" >&2
	exit 2
fi

test -f /var/www/html/compatair/current/_server/mcp-server.mjs
test -f /var/www/html/compatair/current/_server/ucp-core.mjs
test -f /var/www/html/compatair/current/_server/product-funnel-aggregates.mjs
test -f /var/www/html/compatair/current/_server/mcp-telemetry.mjs
test -f /var/www/html/compatair/current/data/catalog.json
test -f /var/www/html/compatair/current/data/verdicts.json
test -f "$project_dir/deploy/systemd/compatair-mcp.service"
test -f "$project_dir/deploy/apache/compatair.fr.conf.example"
test -f "$script_dir/install-apache-vhost.sh"
test -f "$script_dir/converge-mcp-config.sh"
test -f "$script_dir/assert-recent-drill.sh"
test -f "$script_dir/verify-drill-report.mjs"
test -f "$script_dir/smoke-mcp-profile-contract.mjs"
node_binary="/opt/compatair/node/bin/node"
if [[ ! -x "$node_binary" ]]; then
	echo "Install the dedicated runtime with deploy/server/install-node-runtime.sh first" >&2
	exit 2
fi
node_major=$($node_binary -p 'process.versions.node.split(".")[0]')
if (( node_major != 24 )); then
	echo "Node.js 24 is required; found $node_major" >&2
	exit 2
fi

target_vhost=/etc/apache2/sites-available/compatair.fr.conf
vhost_backup=$(mktemp /etc/apache2/sites-available/.compatair-mcp-install.XXXXXX)
had_previous_vhost=false
vhost_activation_pending=false
if [[ -f "$target_vhost" && ! -L "$target_vhost" ]]; then
	cp --preserve=mode,ownership,timestamps -- "$target_vhost" "$vhost_backup"
	had_previous_vhost=true
fi

restore_previous_vhost() {
	if [[ "$had_previous_vhost" == true ]]; then
		install -o root -g root -m 644 "$vhost_backup" "$target_vhost"
	else
		rm -f -- "$target_vhost"
	fi
	apache2ctl configtest
	systemctl reload apache2
}

rollback_failed_vhost_smoke() {
	status=$?
	trap - EXIT INT TERM
	if [[ "$vhost_activation_pending" == true ]]; then
		echo "MCP proxy contract failed; restoring the previous Apache vhost" >&2
		if ! restore_previous_vhost; then
			echo "Apache vhost rollback failed and requires immediate operator intervention" >&2
		fi
	fi
	rm -f -- "$vhost_backup"
	exit "$status"
}
trap rollback_failed_vhost_smoke EXIT
trap 'exit 130' INT
trap 'exit 143' TERM

a2enmod proxy proxy_http headers rewrite ssl
install -m 644 "$project_dir/deploy/systemd/compatair-mcp.service" /etc/systemd/system/compatair-mcp.service
install -m 644 "$project_dir/deploy/systemd/compatair-weekly-insights.service" /etc/systemd/system/compatair-weekly-insights.service
install -m 644 "$project_dir/deploy/systemd/compatair-weekly-insights.timer" /etc/systemd/system/compatair-weekly-insights.timer
install -d -o root -g root -m 755 /etc/compatair/approved /usr/local/libexec/compatair
install -o root -g root -m 644 "$project_dir/deploy/apache/compatair.fr.conf.example" /etc/compatair/approved/compatair.fr.conf
install -o root -g root -m 755 "$script_dir/install-apache-vhost.sh" /usr/local/libexec/compatair/install-apache-vhost
install -o root -g root -m 755 "$script_dir/converge-mcp-config.sh" /usr/local/sbin/compatair-converge-mcp-config
install -o root -g root -m 644 "$script_dir/verify-drill-report.mjs" /usr/local/libexec/compatair/verify-drill-report.mjs
install -o root -g root -m 755 "$script_dir/assert-recent-drill.sh" /usr/local/sbin/compatair-assert-recent-drill
cat > /etc/sudoers.d/compatair-mcp-deploy <<'EOF'
compatair-deploy ALL=(root) NOPASSWD: /bin/systemctl restart compatair-mcp.service
compatair-deploy ALL=(root) NOPASSWD: /bin/systemctl restart compatair-weekly-insights.timer
compatair-deploy ALL=(root) NOPASSWD: /usr/local/sbin/compatair-converge-mcp-config
compatair-deploy ALL=(root) NOPASSWD: /usr/local/sbin/compatair-assert-recent-drill
EOF
chmod 440 /etc/sudoers.d/compatair-mcp-deploy
visudo -cf /etc/sudoers.d/compatair-mcp-deploy
systemctl daemon-reload
systemctl enable compatair-mcp.service
systemctl enable compatair-weekly-insights.timer
systemctl restart compatair-mcp.service
vhost_activation_pending=true
/usr/local/sbin/compatair-converge-mcp-config
"$node_binary" "$script_dir/smoke-mcp-profile-contract.mjs"
vhost_activation_pending=false
curl --fail --silent --show-error --max-time 5 http://127.0.0.1:8787/health
echo
rm -f -- "$vhost_backup"
echo "CompatAir MCP installed."
