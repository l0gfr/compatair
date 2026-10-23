import { describe, expect, it } from 'vitest';
import { createRelatedToolLookup } from './related-tools';

type Tool = { id: string; categoryId: string; brand: string; label: string };
const tool = (id: string, brand: string, label: string, categoryId = 'tools'): Tool => ({ id, brand, label, categoryId });
// Reference behavior from relatedToolsFor before indexing: full catalog filter,
// stable brand-priority/French-label sort, then the first three other IDs.
function reference(tools: readonly Tool[], target: Tool) {
 return tools.filter(item => item.id !== target.id && item.categoryId === target.categoryId)
  .sort((a, b) => (a.brand === target.brand ? 0 : 1) - (b.brand === target.brand ? 0 : 1) || a.label.localeCompare(b.label, 'fr')).slice(0, 3);
}

describe('indexed related tools', () => {
 it('matches the original ordering for every fixture and cloned or external target', () => {
  const tools = Array.from({ length: 96 }, (_, index) => tool(`tool-${index}`, ['A', 'B', 'C', 'D'][index % 4],
   ['Étau', 'Alpha', 'Étau', 'Zèbre', 'Echelle', 'Échelle', 'alpha', 'Bêta'][index % 8], `category-${Math.floor(index / 24)}`));
  const lookup = createRelatedToolLookup(tools);
  const targets = [...tools, ...tools.map(item => ({ ...item })),
   tool('external', 'A', 'Outside', 'category-1'), tool('external', 'unknown-brand', 'Outside', 'category-2'),
   { ...tools[0], brand: 'C' }, { ...tools[1], categoryId: 'category-3' }];
  for (const target of targets) {
   const actual = lookup(target), expected = reference(tools, target);
   expect(actual).toEqual(expected);
   actual.forEach((item, index) => expect(item).toBe(expected[index]));
  }
 });

 it('preserves catalog order for equal French labels and excludes the target before taking three', () => {
  const tools = [tool('foreign-first', 'B', 'Identique'), tool('same-first', 'A', 'Identique'),
   tool('target', 'A', 'Identique'), tool('same-next', 'A', 'Identique'),
   tool('foreign-next', 'C', 'Identique'), tool('other-category', 'A', 'Identique', 'other')];
  const lookup = createRelatedToolLookup(tools);
  expect(lookup(tools[2]).map(item => item.id)).toEqual(['same-first', 'same-next', 'foreign-first']);
  expect(lookup(tools[0]).map(item => item.id)).toEqual(['same-first', 'target', 'same-next']);
  for (const target of tools) expect(lookup(target)).toEqual(reference(tools, target));
 });

 it('handles short, empty and missing categories and excludes every equal ID', () => {
  const tools = [tool('same-id', 'A', 'First'), tool('same-id', 'B', 'Second'),
   tool('other', 'C', 'Third'), tool('single', 'A', 'Only', 'single')];
  const lookup = createRelatedToolLookup(tools);
  expect(lookup(tools[0]).map(item => item.id)).toEqual(['other']);
  expect(lookup(tools[3])).toEqual([]);
  expect(lookup(tool('missing', 'A', 'Absent', 'missing'))).toEqual([]);
  expect(createRelatedToolLookup<Tool>([])(tools[0])).toEqual([]);
  for (const target of tools) expect(lookup(target)).toEqual(reference(tools, target));
 });

 it('keeps the source order intact and does not share mutable result arrays', () => {
  const tools = Object.freeze([Object.freeze(tool('target', 'A', 'Zèbre')),
   Object.freeze(tool('first', 'A', 'Bêta')), Object.freeze(tool('second', 'A', 'Alpha'))]);
  const order = tools.map(item => item.id);
  const lookup = createRelatedToolLookup(tools);
  const first = lookup(tools[0]); first.reverse(); first.pop();
  expect(tools.map(item => item.id)).toEqual(order);
  expect(lookup(tools[0])).toEqual(reference(tools, tools[0]));
 });
});
