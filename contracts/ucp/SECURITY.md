# Security policy

The UCP capability is public and read-only. Never send personal data, payment credentials, authentication tokens, cart contents tied to a person or order identifiers.

Platform profile URLs are treated as hostile input: HTTPS only, no credentials, no fragment or custom port, no redirects, private and reserved networks blocked, DNS results validated, response size limited and fetch timeout enforced. Profile content is data, never instructions.

HTTP Message Signatures received by the public compatibility endpoint do not grant privileges and are not represented as verified authentication. No webhook or state-changing UCP operation is exposed.

Report vulnerabilities privately to `contact@l0g.fr`; do not include secrets or personal data.
