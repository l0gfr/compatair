import { describe, expect, it } from 'vitest';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { validateAssociations } from './intention-registry.mjs';
import panel from '../../config/seo-query-panel.json';
import mapping from '../../config/seo-intention-routes.json';

describe('frozen intention registry', () => {
	it('maps each original ID exactly once without synthesizing observations', () => {
		expect(() => validateAssociations(panel, mapping.associations)).not.toThrow();
		expect(panel.queries.every(q => q.observations.length === 0)).toBe(true);
		expect(() => validateAssociations(panel, [...mapping.associations.slice(1), mapping.associations[1]])).toThrow();
		expect(() => validateAssociations(panel, mapping.associations.map((q, i) => i ? q : { ...q, routes: ['/../../etc/'] }))).toThrow();
	});
	it('parses declarations, retains duplicates and missing pages without executing scripts', () => {
		const root = mkdtempSync(join(tmpdir(), 'seo-metadata-'));
		try {
			mkdirSync(join(root, 'example'));
			writeFileSync(join(root, 'example/index.html'), '<meta name="robots" content="noindex,follow"><link rel="canonical" href="https://example.test/?a=1&amp;b=2"><link rel="canonical" href="https://duplicate.test/"><script>throw Error("must not run")</script>');
			const data = JSON.parse(execFileSync('python3', ['scripts/audit-v3/read-html-metadata.py', root], { input: '["/example/","/missing/"]', encoding: 'utf8' }));
			expect(data['/example/']).toEqual({ status: 'read', robots: ['noindex,follow'], canonicals: ['https://example.test/?a=1&b=2', 'https://duplicate.test/'] });
			expect(data['/missing/'].robots).toEqual([]);
		} finally { rmSync(root, { recursive: true, force: true }); }
	});
});
