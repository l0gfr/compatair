import { describe, expect, it } from 'vitest';
import { createIndexationPolicy, validateHeldPaths, validateManifest } from './indexation-policy.mjs';

const now = new Date('2026-10-07T12:00:00Z');
const baseline = { schemaVersion: 1, sourceSha: 'a'.repeat(40), paths: ['/', '/guides/baseline/', '/quel-compresseur-pour/baseline-tool/'] };
const manifest = {
	schemaVersion: 1, baselineSha: baseline.sourceSha, gitSha: 'b'.repeat(40), builtAt: now.toISOString(),
	batches: [{ openedAt: '2026-10-07T10:00:00Z', publicationDay: '2026-10-07', dailyLimits: { guides: 2, compressors: 2, tools: 6 }, paths: ['/compresseurs/admitted/', '/outils-pneumatiques/admitted/', '/outils-pneumatiques/alias/'] }],
	pending: [{ path: '/guides/waiting/', firstSeen: '2026-10-06T10:00:00Z' }, { path: '/quel-compresseur-pour/admitted/', firstSeen: now.toISOString() }],
};

describe('validated editorial hold projection in the public manifest', () => {
	it('shares strict path validation without requiring the private baseline', () => {
		expect([...validateHeldPaths(['/guides/waiting/', '/quel-compresseur-pour/admitted/'])]).toEqual(['/guides/waiting/', '/quel-compresseur-pour/admitted/']);
		expect([...validateHeldPaths(undefined)]).toEqual([]);
		expect(() => validateHeldPaths(null)).toThrow();
		expect(() => validateHeldPaths(['/guides/waiting/', '/guides/waiting/'])).toThrow('dupliquée');
		expect(() => validateHeldPaths(['/guides/particuliers/page/2/'])).toThrow('réserve éditoriale');
		expect(() => validateHeldPaths(['/guides/waiting/'], new Set(['/guides/baseline/']))).toThrow('inconnue');
	});
	it('accepts older manifests without the optional field and preserves their indexability', () => {
		expect(validateManifest(manifest, baseline, now)).toBe(manifest);
		const allows = createIndexationPolicy(baseline, manifest);
		expect(allows('/guides/baseline/')).toBe(true);
		expect(allows('/outils-pneumatiques/admitted/')).toBe(true);
		expect(allows('/quel-compresseur-pour/baseline-tool/')).toBe(true);
		expect(allows('/guides/waiting/')).toBe(false);
		expect(allows('/marques/example/')).toBe(true);
		expect(allows('/compatibilite/example/')).toBe(false);
	});
	it('blocks baseline, historical admission and derived usage while leaving admissions unchanged', () => {
		const heldPaths = ['/guides/baseline/', '/compresseurs/admitted/', '/outils-pneumatiques/admitted/', '/quel-compresseur-pour/baseline-tool/', '/quel-compresseur-pour/admitted/', '/guides/waiting/'];
		const current = { ...manifest, heldPaths };
		const original = structuredClone(current);
		expect(validateManifest(current, baseline, now)).toBe(current);
		const allows = createIndexationPolicy(baseline, current);
		for (const path of heldPaths) expect(allows(path)).toBe(false);
		expect(allows('/outils-pneumatiques/alias/')).toBe(true);
		expect(current).toEqual(original);
	});
	it.each([null, {}, true, '/guides/baseline/', [null], [42], ['/guides/unknown/'], ['/guides/baseline/', '/guides/baseline/'], ['//evil.test/'], ['https://compatair.fr/guides/baseline/'], ['/guides/baseline/?x=1'], ['/guides/baseline/#x'], ['/guides/Baseline/'], ['/guides/%2f/'], ['/guides/../baseline/'], ['/guides/baseline'], ['/'], ['/marques/example/'], ['/compatibilite/example/']])('fails closed on malformed, unknown or non-detail held paths %#', heldPaths => {
		const current = { ...manifest, heldPaths };
		expect(() => validateManifest(current, baseline, now)).toThrow();
		expect(() => createIndexationPolicy(baseline, current)).toThrow();
	});
	it('rejects navigation paths even when they are present in the baseline', () => {
		const navigation = '/guides/particuliers/page/2/';
		const extended = { ...baseline, paths: [...baseline.paths, navigation] };
		expect(() => validateManifest({ ...manifest, heldPaths: [navigation] }, extended, now)).toThrow('réserve éditoriale');
	});
	it('permits an alias source under hold only when its admitted canonical target is not held', () => {
		const current = { ...manifest, heldPaths: ['/outils-pneumatiques/alias/'], canonicalAliases: { '/outils-pneumatiques/alias/': '/outils-pneumatiques/admitted/' } };
		expect(validateManifest(current, baseline, now)).toBe(current);
		expect(createIndexationPolicy(baseline, current)('/outils-pneumatiques/alias/')).toBe(false);
		expect(createIndexationPolicy(baseline, current)('/outils-pneumatiques/admitted/')).toBe(true);
		expect(() => validateManifest({ ...current, heldPaths: [...current.heldPaths, '/outils-pneumatiques/admitted/'] }, baseline, now)).toThrow('canonique');
	});
});
