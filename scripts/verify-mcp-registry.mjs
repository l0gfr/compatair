const endpoint = new URL('https://registry.modelcontextprotocol.io/v0.1/servers');
endpoint.searchParams.set('search', 'io.github.bluetouff/compatair');
const response = await fetch(endpoint, { headers: { Accept: 'application/json', 'User-Agent': 'CompatAir registry verifier' }, signal: AbortSignal.timeout(10_000) });
if (!response.ok) throw new Error(`MCP Registry HTTP ${response.status}`);
const payload = await response.json();
const entries = Array.isArray(payload.servers) ? payload.servers : [];
const exact = entries.find((entry) => {
	const server = entry.server ?? entry;
	return server.name === 'io.github.bluetouff/compatair' && server.version === '3.0.0'
		&& Array.isArray(server.remotes) && server.remotes.some((remote) => remote.type === 'streamable-http' && remote.url === 'https://compatair.fr/mcp');
});
if (!exact) throw new Error('CompatAir MCP 3.0.0 is not present with the expected Streamable HTTP remote');
console.log('CompatAir MCP 3.0.0 is published in the official Registry with the expected remote.');
