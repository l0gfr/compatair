# CompatAir MCP public contracts

This is the source directory for the minimal public `bluetouff/compatair-mcp` repository. It contains no compatibility engine, merchant feed or private operational configuration.

Published contract:

- Streamable HTTP endpoint: `https://compatair.fr/mcp`
- method version: `2026.07`
- response schema: `schemas/result.schema.json`
- AirGraph schema: `schemas/airgraph.schema.json`
- compatibility receipt schema: `schemas/compatibility-receipt.schema.json`
- example: `examples/compatibility-result.json`

The deterministic public export also includes the UCP capability contracts under `ucp/`. It is generated from an explicit allowlist and never contains the compatibility engine, merchant feeds or production configuration.

Run the dependency-free contract checks with `npm test`.

No open-source license is granted by this repository. The files are public for inspection and integration against the published contracts; all other rights are reserved unless stated otherwise.
