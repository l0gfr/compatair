import { existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { tools } from './catalog';
import { defaultToolGuidePath, toolGuideByCategoryId, toolGuidePath } from './tool-guide-links';

function guideSource(path: string) {
	return new URL(`../content${path.slice(0, -1)}.md`, import.meta.url);
}

describe('tool guide links', () => {
	it('points every configured category to an existing guide', () => {
		expect(existsSync(guideSource(defaultToolGuidePath))).toBe(true);
		for (const path of Object.values(toolGuideByCategoryId)) expect(existsSync(guideSource(path!))).toBe(true);
	});

	it('depends on the stable category id rather than the editorial label', () => {
		const tool = tools.find((item) => item.categoryId === 'cle-a-cliquet');
		expect(tool).toBeDefined();
		expect(toolGuidePath({ categoryId: tool!.categoryId })).toBe('/guides/compresseur-pour-cle-a-cliquet-pneumatique/');
		expect(toolGuidePath({ categoryId: tool!.categoryId })).toBe(toolGuidePath({ categoryId: 'cle-a-cliquet' }));
	});
});
