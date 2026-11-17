import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

function clientSources(directory: string): string[] {
	return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
		const path = join(directory, entry.name);
		if (entry.isDirectory()) return clientSources(path);
		return /\.(astro|ts|js)$/.test(entry.name) && !entry.name.includes('.test.') ? [path] : [];
	});
}

describe('no browser tracking', () => {
	it('contains no Google loader or event-collection transport in shipped client sources', () => {
		const root = new URL('../', import.meta.url).pathname;
		for (const folder of ['client', 'components', 'scripts', 'layouts']) {
			for (const file of clientSources(join(root, folder))) {
				const source = readFileSync(file, 'utf8');
				expect(source, file).not.toMatch(/googletagmanager\.com|google-analytics\.com|analytics\.google\.com|navigator\.sendBeacon|['"]\/events['"]|dataLayer|\bgtag\s*\(/);
			}
		}
	});

	it('exposes a plain privacy information link without a consent manager', () => {
		const layout = readFileSync(new URL('../layouts/BaseLayout.astro', import.meta.url), 'utf8');
		expect(layout).toContain('href="/cookies/"');
		expect(layout).not.toMatch(/AnalyticsConsent|data-analytics-settings|Telemetry/);
	});
});
