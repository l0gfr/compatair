import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const component = readFileSync(new URL('./McpCanonicalTelemetry.astro', import.meta.url), 'utf8');
const layout = readFileSync(new URL('../layouts/BaseLayout.astro', import.meta.url), 'utf8');

describe('MCP canonical consultation telemetry', () => {
	it('runs as a CSP-compatible module from the document head before page modules can rewrite the URL', () => {
		expect(component).toContain('<script>');
		expect(component).not.toContain('is:inline');
		expect(component).toContain("searchParameters.get('via') === 'mcp'");
		expect(component).toContain("navigator.sendBeacon('/events'");
		expect(component).toContain("fetch('/events'");
		expect(component).toContain('keepalive: true');
		expect(layout.indexOf('<McpCanonicalTelemetry />')).toBeGreaterThan(-1);
		expect(layout.indexOf('<McpCanonicalTelemetry />')).toBeLessThan(layout.indexOf('</head>'));
	});
});
