import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

describe('static manufacturer directory audit contract', () => {
	it('requires static pagination in both audit contracts without exposing it to the client replacement selector', () => {
		const page = readFileSync(new URL('../../src/components/BrandDirectoryPage.astro', import.meta.url), 'utf8');
		const pagination = readFileSync(new URL('../../src/components/DirectoryPagination.astro', import.meta.url), 'utf8');
		const auditor = readFileSync(new URL('../audit-dist.mjs', import.meta.url), 'utf8');
		const brandContracts = [...auditor.matchAll(/\['\/marques\/index\.html', \[([^\]]*)\]\]/g)].map(match => match[1]);
		expect(page).toContain('<DirectoryPagination basePath="/marques/"');
		expect(pagination).toContain('<nav class="directory-pagination"');
		expect(page).not.toContain('data-directory-pagination');
		expect(pagination).not.toContain('data-directory-pagination');
		expect(brandContracts).toHaveLength(2);
		for (const contract of brandContracts) {
			expect(contract).toContain('\'class="directory-pagination"\'');
			expect(contract).not.toContain('data-directory-pagination');
		}
	});
});
