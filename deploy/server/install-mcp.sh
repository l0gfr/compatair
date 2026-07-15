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
test -f /var/www/html/compatair/current/data/catalog.json
test -f /var/www/html/compatair/current/data/verdicts.json
test -f "$project_dir/deploy/systemd/compatair-mcp.service"
test -f "$project_dir/deploy/apache/compatair.fr.conf.example"
test -f "$script_dir/install-apache-vhost.sh"
test -f "$script_dir/converge-mcp-config.sh"
test -f "$script_dir/assert-recent-drill.sh"
test -f "$script_dir/verify-drill-report.mjs"
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
/usr/local/sbin/compatair-converge-mcp-config
curl --fail --silent --show-error --max-time 5 http://127.0.0.1:8787/health
echo
echo "CompatAir MCP installed."
