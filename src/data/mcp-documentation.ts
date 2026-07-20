export const mcpEndpoint = 'https://compatair.fr/mcp';
export const mcpExtendedEndpoint = 'https://compatair.fr/mcp/extended';
export const mcpLegacyEndpoint = 'https://compatair.fr/mcp/legacy';
export const mcpHealthEndpoint = 'https://compatair.fr/mcp-health';

export const initializeCurl = `curl --request POST 'https://compatair.fr/mcp' \\
  --header 'Content-Type: application/json' \\
  --header 'Accept: application/json, text/event-stream' \\
  --data '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "initialize",
    "params": {
      "protocolVersion": "2025-11-25",
      "capabilities": {},
      "clientInfo": { "name": "example-client", "version": "1.0.0" }
    }
  }'`;

export const listToolsCurl = `curl --request POST 'https://compatair.fr/mcp' \\
  --header 'Content-Type: application/json' \\
  --header 'Accept: application/json, text/event-stream' \\
  --header 'MCP-Protocol-Version: 2025-11-25' \\
  --data '{"jsonrpc":"2.0","id":2,"method":"tools/list","params":{}}'`;

export const callToolCurl = `curl --request POST 'https://compatair.fr/mcp' \\
  --header 'Content-Type: application/json' \\
  --header 'Accept: application/json, text/event-stream' \\
  --header 'MCP-Protocol-Version: 2025-11-25' \\
  --data '{
    "jsonrpc": "2.0",
    "id": 3,
    "method": "tools/call",
    "params": {
      "name": "identify_product",
      "arguments": { "ean": "4006825660630" }
    }
  }'`;

export const claudeCli = `claude mcp add --transport http compatair https://compatair.fr/mcp
claude mcp get compatair
# Dans Claude Code : /mcp`;

export const claudeCliEnglish = `claude mcp add --transport http compatair https://compatair.fr/mcp
claude mcp get compatair
# In Claude Code: /mcp`;

export const claudeProjectConfig = `{
  "mcpServers": {
    "compatair": {
      "type": "http",
      "url": "https://compatair.fr/mcp"
    }
  }
}`;

export const geminiPython = `from google import genai

client = genai.Client()
interaction = client.interactions.create(
    model="gemini-3.5-flash",
    input="Cette clé à chocs est-elle compatible avec mon compresseur ?",
    tools=[{
        "type": "mcp_server",
        "name": "compatair",
        "url": "https://compatair.fr/mcp",
    }],
)

print(interaction.output_text)`;

export const geminiPythonEnglish = `from google import genai

client = genai.Client()
interaction = client.interactions.create(
    model="gemini-3.5-flash",
    input="Is this impact wrench compatible with my compressor?",
    tools=[{
        "type": "mcp_server",
        "name": "compatair",
        "url": "https://compatair.fr/mcp",
    }],
)

print(interaction.output_text)`;

export const geminiJavaScript = `import { GoogleGenAI } from '@google/genai';

const client = new GoogleGenAI({});
const interaction = await client.interactions.create({
  model: 'gemini-3.5-flash',
  input: 'Build a documented compressed-air system for this tool.',
  tools: [{
    type: 'mcp_server',
    name: 'compatair',
    url: 'https://compatair.fr/mcp',
  }],
});

console.log(interaction.output_text);`;

export const agentsPython = `import asyncio
from agents import Agent, HostedMCPTool, Runner

async def main() -> None:
    agent = Agent(
        name="Conseiller air comprimé",
        instructions=(
            "Conserver verdict, limitations et source_urls. "
            "Toujours citer canonical_url."
        ),
        tools=[HostedMCPTool(tool_config={
            "type": "mcp",
            "server_label": "compatair",
            "server_url": "https://compatair.fr/mcp",
            "require_approval": "never",
        })],
    )
    result = await Runner.run(agent, "Explique ce verdict CompatAir")
    print(result.final_output)

asyncio.run(main())`;

export const agentsPythonEnglish = `import asyncio
from agents import Agent, HostedMCPTool, Runner

async def main() -> None:
    agent = Agent(
        name="Compressed air advisor",
        instructions=(
            "Preserve verdict, limitations and source_urls. "
            "Always cite canonical_url."
        ),
        tools=[HostedMCPTool(tool_config={
            "type": "mcp",
            "server_label": "compatair",
            "server_url": "https://compatair.fr/mcp",
            "require_approval": "never",
        })],
    )
    result = await Runner.run(agent, "Explain this CompatAir verdict")
    print(result.final_output)

asyncio.run(main())`;

export const agentsJavaScript = `import { Agent, MCPServerStreamableHttp, run } from '@openai/agents';

const server = new MCPServerStreamableHttp({
  name: 'CompatAir',
  url: 'https://compatair.fr/mcp',
  cacheToolsList: true,
});

await server.connect();
try {
  const agent = new Agent({
    name: 'Compressed air advisor',
    instructions: 'Preserve limitations and cite canonical_url.',
    mcpServers: [server],
  });
  const result = await run(agent, 'Build a documented complete air system.');
  console.log(result.finalOutput);
} finally {
  await server.close();
}`;

export const resultEnvelope = `{
  "verdict": "insufficient_data",
  "verdict_scope": "complete_air_system",
  "verdict_schema_version": "2.0.0",
  "overall_system_verdict": {
    "schema_version": "2.0.0",
    "scope": "complete_air_system",
    "verdict": "insufficient_data",
    "limitations": ["Network components remain unverified."]
  },
  "air_supply_verdict": {
    "schema_version": "2.0.0",
    "scope": "air_supply",
    "verdict": "compatible",
    "engine_verdict": "continuous",
    "limitations": []
  },
  "canonical_url": "https://compatair.fr/calculateur/?outil=...&compresseur=...",
  "product_urls": [],
  "source_urls": [],
  "method_version": "2026.07",
  "catalog_version": "2026-07-15",
  "observed_at": "2026-07-15",
  "limitations": [],
  "next_actions": []
}`;

export const airGraphTools = [
	'orient_decision',
  'identify_product',
  'build_complete_air_system',
  'explain_compatibility_verdict',
  'find_compatible_alternatives',
  'compare_complete_systems',
  'get_compatibility_evidence',
  'search_knowledge',
  'get_current_offers',
  'get_changefeed',
] as const;

export const legacyTools = [
  'search_tools',
  'get_tool_requirements',
  'search_compressors',
  'get_compressor_specs',
  'size_compressor',
  'check_compatibility',
  'compare_compressors',
  'find_accessories',
  'find_offers',
] as const;

export const coreTools = [
	'orient_decision',
  'identify_product',
  'evaluate_air_compatibility',
  'build_complete_air_system',
  'find_compatible_alternatives',
  'search_knowledge',
  'get_current_offers',
] as const;

export const extendedTools = [
  'get_compatibility_evidence',
  'explain_compatibility_verdict',
  'compare_complete_systems',
  'get_changefeed',
] as const;

export const mcpResources = [
  'compatair://catalog/version',
  'compatair://methodology',
  'compatair://tools/taxonomy',
  'compatair://confidence-scale',
  'compatair://affiliation-policy',
  'compatair://engine/version',
  'compatair://airgraph/schema',
  'compatair://responses/schema',
  'compatair://tools/core-profile',
  'compatair://receipts/schema',
  'compatair://changefeed/current',
] as const;

export const mcpPrompts = [
  'choisir_un_compresseur',
  'auditer_une_installation',
  'comparer_des_configurations',
] as const;
