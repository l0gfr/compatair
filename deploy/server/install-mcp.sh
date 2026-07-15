#!/usr/bin/env bash
set -Eeuo pipefail

script_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
project_dir=$(cd -- "$script_dir/../.." && pwd)

if [[ ${EUID:-$(id -u)} -ne 0 ]]; then
	echo "This script must run as root" >&2
	exit 2
fi

test -f /var/www/html/compatair/current/_server/mcp-server.mjs
test -f /var/www/html/compatair/current/_server/product-funnel-aggregates.mjs
test -f /var/www/html/compatair/current/data/catalog.json
test -f /var/www/html/compatair/current/data/verdicts.json
test -f "$project_dir/deploy/systemd/compatair-mcp.service"
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
cat > /etc/sudoers.d/compatair-mcp-deploy <<'EOF'
compatair-deploy ALL=(root) NOPASSWD: /bin/systemctl restart compatair-mcp.service
EOF
chmod 440 /etc/sudoers.d/compatair-mcp-deploy
visudo -cf /etc/sudoers.d/compatair-mcp-deploy
systemctl daemon-reload
systemctl enable compatair-mcp.service
systemctl restart compatair-mcp.service
"$script_dir/install-apache-vhost.sh" "$project_dir/deploy/apache/compatair.fr.conf.example"
curl --fail --silent --show-error --max-time 5 http://127.0.0.1:8787/health
echo
echo "CompatAir MCP installed."
