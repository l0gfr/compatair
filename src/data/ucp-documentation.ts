export const ucpCapability = 'fr.compatair.air.compatibility';
export const ucpService = 'fr.compatair.air';
export const ucpVersion = '2026-04-08';
export const ucpCapabilityVersion = '2026-07-15';
export const ucpEndpoint = 'https://compatair.fr/api/ucp/v1/compatibility/evaluate';
export const ucpProfile = 'https://compatair.fr/.well-known/ucp';
export const ucpExamplePlatformProfile = 'https://compatair.fr/examples/ucp/platform-profile.json';

export const ucpRequest = `{
  "ucp": { "version": "2026-04-08" },
  "intent": "will_it_work",
  "configuration": {
    "compressor": { "id": "kaeser-eurocomp-epc-840-100" },
    "tools": [{ "id": "einhell-tc-pe-150", "quantity": 1 }],
    "mode": "successive"
  },
  "requested_outputs": [
    "compatibility",
    "mandatory_accessories",
    "limits",
    "alternatives",
    "complete_configuration",
    "attribution",
    "evidence"
  ]
}`;

export const ucpCurl = `curl --fail-with-body \\
  --request POST \\
  --url ${ucpEndpoint} \\
  --header 'Content-Type: application/json' \\
  --header 'UCP-Agent: profile="${ucpExamplePlatformProfile}"' \\
  --data '${ucpRequest.replaceAll("'", "'\\''")}'`;

export const ucpMcpCall = `{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "evaluate_air_compatibility",
    "arguments": {
      "meta": {
        "ucp-agent": {
          "profile": "${ucpExamplePlatformProfile}"
        }
      },
      ${ucpRequest.slice(1, -1).trim()}
    }
  }
}`;

export const productLocatorExample = `{
  "ean": "4007430227911"
}`;

export const commercialConstraintsExample = `{
  "max_total_minor": 60000,
  "currency": "EUR",
  "minimum_merchants": 3,
  "country": "FR"
}`;

export const resultCore = `{
  "verdict": "compatible_with_limits",
  "canonical_url": "https://compatair.fr/calculateur/?...",
  "product_urls": [],
  "source_urls": [],
  "method_version": "2026.07",
  "catalog_version": "<content-derived version>",
  "observed_at": "2026-07-15",
  "limitations": [],
  "next_actions": []
}`;
