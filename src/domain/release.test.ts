import { describe, expect, it } from 'vitest';
import { createReleaseMetadata } from './release';

describe('métadonnées de release', () => {
	it('publie le SHA explicite injecté par le workflow', () => {
		expect(createReleaseMetadata('a'.repeat(40))).toEqual({
			schemaVersion: '1.0.0',
			gitSha: 'a'.repeat(40),
		});
	});

	it('refuse une identité de release ambiguë', () => {
		expect(() => createReleaseMetadata('main')).toThrow('SHA de release invalide');
	});

	it('conserve un marqueur explicite pour les builds locaux', () => {
		expect(createReleaseMetadata().gitSha).toBe('development');
	});
});
