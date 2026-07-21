# CompatAir public API contract

`openapi.json` describes the public read-only decision surface. It is published at `https://compatair.fr/openapi/compatair-2026-07-15.json`.

The API exposes compatibility, full-text search, evidence and proof graphs, a changefeed, and the UCP decision capability. It does not expose a write operation, account, identity, checkout, payment, order or arbitrary URL fetch.

Current dataset scope is explicit: 14,400 explorable compressor-tool combinations, of which 13,080 are audited fixed-flow verdicts. The remaining 1,320 combinations require action rate or volume and target time, so they are not precomputed verdicts. Catalog quality is published field by field with normalized MPNs, EAN/GTIN, evidenced distributor SKUs, primary-source coverage, independent corroboration coverage and a data-type freshness SLA.

No open-source license is granted by this contract mirror. The files are public for inspection and integration against the published service; all other rights are reserved unless stated otherwise.
