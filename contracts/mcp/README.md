# CompatAir MCP public contracts

This is the source directory for the minimal public `bluetouff/compatair-mcp` repository. It contains no compatibility engine, merchant feed or private operational configuration.

Published contract:

- decision-core Streamable HTTP endpoint: `https://compatair.fr/mcp`
- extended endpoint: `https://compatair.fr/mcp/extended`
- legacy migration endpoint: `https://compatair.fr/mcp/legacy`
- MCP server version: `3.0.0`
- method version: `2026.07`
- response schema: `schemas/result.schema.json`
- AirGraph schema: `schemas/airgraph.schema.json`
- compatibility receipt schema: `schemas/compatibility-receipt.schema.json`
- example: `examples/compatibility-result.json`

The deterministic public export also includes the UCP capability contracts under `ucp/`. It is generated from an explicit allowlist and never contains the compatibility engine, merchant feeds or production configuration.

The current catalog and `/data/verdicts.json` manifest publish the calculable scope. Decisions are computed on demand; the manifest does not contain a `pairs` array or a global verdict distribution. Parametric combinations require explicit action rate or volume and target time. The manifest links the frozen, signed historical dataset and its original catalog. Product identities expose normalized MPNs, EAN/GTIN and evidenced distributor SKUs. Evidence labels `primary`, `independent_corroboration` and `secondary` separately; field-level coverage and the data-type freshness SLA are published in the catalog and freshness snapshots.

Run the dependency-free contract checks with `npm test`.

No open-source license is granted by this repository. The files are public for inspection and integration against the published contracts; all other rights are reserved unless stated otherwise.

The public version matrix is available at `https://compatair.fr/data/version-compatibility.json`. A reusable license for OpenAPI, JSON Schema or future SDK material requires a separate explicit owner decision and does not imply licensing the proprietary catalog.
