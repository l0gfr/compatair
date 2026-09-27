import { describe, expect, it } from 'vitest';
import { editorialPriority } from './editorial-priority.mjs';

describe('transparent editorial queue priority', () => {
	const panel = { queries: [{ id: 'q1', query: 'Mecafer Fifty débit restitué', editorialPriority: 'P1' }] };
	it('matches a specific question without claiming observed demand', () => {
		const result = editorialPriority({ path: '/guides/mecafer-fifty-debit-restitue/' }, panel);
		expect(result).toMatchObject({ score: 3, queryIds: ['q1'] });
		expect(result.basis).toContain('not measured');
	});
	it('does not prioritize a generic keyword overlap', () => {
		expect(editorialPriority({ path: '/guides/compresseur-air/' }, panel).score).toBe(0);
	});
});
