import { expect, it } from 'vitest';
import { answerGroupView } from './answer-group-view.mjs';

it('bounds large variant groups while retaining the primary and requested identity', () => {
 const group = { primaryPath: '/product/999/', members: Array.from({ length: 1000 }, (_, index) => ({ path: `/product/${index}/`, label: `Fixture ${index}` })) };
 const view = answerGroupView(group, '/product/998/');
 expect(view.total).toBe(1000);
 expect(view.members).toHaveLength(12);
 expect(view.members.slice(0, 2).map(item => item.path)).toEqual(['/product/999/', '/product/998/']);
 expect(new Set(view.members.map(item => item.path)).size).toBe(12);
 expect(group.members).toHaveLength(1000);
 expect(() => answerGroupView(group, '/missing/')).toThrow();
 expect(answerGroupView(undefined, '/missing/')).toBeUndefined();
});
