# CompatAir UCP public contracts

This directory contains the public, engine-independent contract for the `fr.compatair.air.compatibility` UCP capability.

- UCP protocol: `2026-04-08`
- capability version: `2026-07-15`
- discovery: `https://compatair.fr/.well-known/ucp`
- REST endpoint: `https://compatair.fr/api/ucp/v1/compatibility/evaluate`
- MCP endpoint: `https://compatair.fr/mcp`
- REST service description: `openapi.json`
- MCP service description: `openrpc.json`
- payload schema: `schemas/compatibility.schema.json`

The capability is deliberately read-only. It accepts product identifiers and a use mode, and returns technical compatibility, required accessories, limits, alternatives, a complete configuration, evidence and a canonical CompatAir attribution URL. It does not accept identity, cart, checkout, payment or order data.

Run the dependency-free checks with `npm test`.

No open-source license is granted by this contract mirror. The files are public for inspection and integration against the published service; all other rights are reserved unless stated otherwise.
