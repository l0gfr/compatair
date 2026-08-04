#!/usr/bin/env bash

node_major_for() {
	local node_bin=${1:-}
	if [[ -z "$node_bin" || ! -x "$node_bin" ]]; then
		return 1
	fi
	"$node_bin" --eval 'process.stdout.write(process.versions.node.split(".")[0])' 2>/dev/null
}

node_matches_major() {
	local node_bin=${1:-}
	local required_major=${2:-}
	local actual_major
	actual_major="$(node_major_for "$node_bin" || true)"
	[[ -n "$required_major" && "$actual_major" == "$required_major" ]]
}

resolve_node_for_major() {
	local required_major=${1:-}
	local candidate
	local current_node
	local home=${HOME:-}

	if [[ ! "$required_major" =~ ^[0-9]+$ ]]; then
		return 2
	fi

	current_node="$(type -P node 2>/dev/null || true)"
	for candidate in \
		"${COMPATAIR_NODE_BIN:-}" \
		"${NVM_BIN:+${NVM_BIN}/node}" \
		"$current_node" \
		"${home:+${home}/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node}" \
		"/opt/homebrew/opt/node@${required_major}/bin/node" \
		"/usr/local/opt/node@${required_major}/bin/node"; do
		if node_matches_major "$candidate" "$required_major"; then
			printf '%s\n' "$candidate"
			return 0
		fi
	done

	if [[ -n "$home" ]]; then
		for candidate in \
			"$home/.nvm/versions/node/v${required_major}."*/bin/node \
			"$home/.fnm/node-versions/v${required_major}."*/installation/bin/node \
			"$home/Library/Application Support/fnm/node-versions/v${required_major}."*/installation/bin/node \
			"$home/.volta/tools/image/node/${required_major}."*/bin/node \
			"$home/.asdf/installs/nodejs/${required_major}."*/bin/node \
			"$home/.local/share/mise/installs/node/${required_major}."*/bin/node; do
			if node_matches_major "$candidate" "$required_major"; then
				printf '%s\n' "$candidate"
				return 0
			fi
		done
	fi

	return 1
}

if [[ "${BASH_SOURCE[0]}" == "$0" ]]; then
	resolve_node_for_major "${1:-}"
fi
