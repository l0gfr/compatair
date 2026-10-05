import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, it, expect } from 'vitest';
import { buildDocumentedToolsOctober5, assertDocumentedToolsOctober5NewIdentities, documentedIdentityKey, OCTOBER5_UNIT_CONVERSIONS } from './documented-tools-2026-10-05.mjs';
import { technicalCardSvg } from './technical-card.mjs';
import { toolProfileSchema } from '../../src/domain/catalog';
import { tools } from '../../src/data/catalog';
import { toolTaxonomy, toolUsageForCategory } from '../../src/data/taxonomy';
import { toolGuideByCategoryId } from '../../src/data/tool-guide-links';
import { perActionAverageFlow, sizeConfiguration } from '../../src/domain/sizing';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';

const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/documented-tools-2026-10-05.json', import.meta.url), 'utf8'));
const batch = buildDocumentedToolsOctober5(snapshot);
const ample = { id: 'fixture-compressor', tankLiters: 500, maxPressureBar: 20, fadCurve: [{ pressureBar: 2, litersPerMinute: 50000 }, { pressureBar: 20, litersPerMinute: 40000 }], dutyCycle: 1, oilType: 'oil', confidence: 'B' };
const digest = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const f325 = () => batch.find(product => product.brand === 'Paslode' && product.mpn === '513000');
const f325row = row => row.brand === 'Paslode' && row.mpn === '513000';

// Exercise semantic admission independently of the source/row checksum seal.
async function repinned(copy) {
 let code = readFileSync(new URL('./documented-tools-2026-10-05.mjs', import.meta.url), 'utf8');
 for (const [name, records] of [
  ['approvedSources', copy.sources.map(source => ({ id: source.id, reviewedSourceSha256: digest(source) }))],
  ['approvedRows', copy.tools.map(row => ({ documentRowId: row.documentRowId, reviewedRowSha256: digest(row) }))],
 ]) {
  const pattern = new RegExp(`const ${name} = \\[[\\s\\S]*?\\];`);
  if (!pattern.test(code)) throw new Error('Missing approval contract');
  code = code.replace(pattern, `const ${name} = ${JSON.stringify(records)};`);
 }
 code = code.replace(/const approvedUnitConversionsSha256 = '[a-f0-9]{64}';/, `const approvedUnitConversionsSha256 = '${digest(copy.unitConversions)}';`);
 return (await import(/* @vite-ignore */ 'data:text/javascript;base64,' + Buffer.from(code).toString('base64'))).buildDocumentedToolsOctober5;
}
async function tamperRow(find, change) {
 const copy = structuredClone(snapshot), row = copy.tools.find(find);
 if (!row) throw new Error('Missing mutation fixture');
 change(row);
 Object.assign(copy.technicalRows.find(item => item.documentRowId === row.documentRowId), structuredClone(row));
 expect(() => buildDocumentedToolsOctober5(copy)).toThrow();
 const build = await repinned(copy);
 expect(() => build(copy)).toThrow();
}

describe('documented tools October 5', () => {
 it('admits exactly 2000 new physical identities across 19 brands against the complete baseline', () => {
  expect(batch).toHaveLength(2000);
  const ids = new Set(batch.map(product => product.id));
  expect(ids.size).toBe(2000);
  expect(new Set(batch.map(product => product.brand)).size).toBe(19);
  const baseline = tools.filter(product => !ids.has(product.id));
  expect(baseline).toHaveLength(16087);
  expect(() => assertDocumentedToolsOctober5NewIdentities(snapshot.tools, baseline)).not.toThrow();
  expect(tools.filter(product => ids.has(product.id))).toHaveLength(2000);
 });
 it('writes schema-valid canonical products and exact technical-card assets', () => {
  const prefix = 'const product: unknown = ', suffix = ';\n\nexport default product;\n';
  for (const product of batch) {
   expect(toolProfileSchema.safeParse(product).success, product.id).toBe(true);
   const content = readFileSync(new URL(`../../src/data/products/tools/${product.id}.ts`, import.meta.url), 'utf8');
   expect(content.startsWith(prefix) && content.endsWith(suffix), product.id).toBe(true);
   expect(JSON.parse(content.slice(prefix.length, -suffix.length))).toEqual(product);
   expect(readFileSync(new URL(`../../public${product.image.src}`, import.meta.url), 'utf8')).toBe(technicalCardSvg(product, 'tools'));
  }
 }, 30000);
 it('preserves actual capture dates, HTTP200, bytes, digests and cell/page attribution', () => {
  expect(snapshot.sources).toHaveLength(849);
  expect(JSON.stringify(snapshot)).not.toMatch(/\/Users\/|\/tmp\/|\/private\/tmp\/|responsePath|<html\b|%PDF-/i);
  const sourceIds = new Set(snapshot.sources.map(source => source.id));
  for (const source of snapshot.sources) {
   expect(source.httpStatus).toBe(200); expect(source.sha256).toMatch(/^[a-f0-9]{64}$/);
   expect(source.bytes).toBeGreaterThan(0); expect(source.observedAt.startsWith('2026-10-05T')).toBe(true);
   expect(source.edition.length).toBeGreaterThan(0); expect(new URL(source.url).protocol).toBe('https:');
  }
  for (const row of snapshot.tools) for (const cell of row.sourceTechnicalCells) {
   expect(sourceIds.has(cell.sourceId)).toBe(true); expect(Number.isInteger(cell.page) && cell.page > 0).toBe(true);
  }
  for (const product of batch) {
   const proofIds = new Set(product.evidence.map(proof => proof.id));
   expect(product.fieldSources.workingPressureBar.length).toBeGreaterThan(0);
   for (const refs of Object.values(product.fieldSources)) expect(refs.every(id => proofIds.has(id))).toBe(true);
   for (const spec of product.specifications) expect(spec.evidenceIds.every(id => proofIds.has(id))).toBe(true);
  }
 });
 it('keeps 1999 unqualified consumption profiles unknown even with ample compressed air', () => {
  const unknown = batch.filter(product => product.demandModel === 'variable-volume');
  expect(unknown).toHaveLength(1999);
  for (const product of unknown) {
   expect(product.workingPressureBar).toEqual({});
   expect(product.airflowLpm).toBeUndefined(); expect(product.airPerActionLiters).toBeUndefined();
   expect(product.dutyFactor).toBeUndefined(); expect(product.airflowBasis).toBeUndefined();
   expect(evaluateCompatibility(ample, product).verdict, product.id).toBe('insufficient_data');
  }
  expect(batch.filter(product => product.demandModel === 'fixed-flow')).toHaveLength(0);
 });
 it('qualifies only the explicitly annotated Paslode F325R p10 point, independently of the service range', () => {
  expect(batch.filter(product => product.demandModel === 'per-action')).toHaveLength(1);
  const row = snapshot.tools.find(f325row), product = f325();
  expect(row.perActionProfile).toMatchObject({ volumeOriginal: .09, volumeUnit: 'SCF/fastener', volumeBasis: 'standard-volume', pressureOriginal: 100, pressureUnit: 'PSIG', page: 10, volumeAnnotationQuote: '.090 SCF', volumeAxisQuote: 'AIR CONSUMPTION - SCF/FASTENER', pressureAxisQuote: 'AIR PRESSURE - PSIG', modelHeadingQuote: 'F325R , 513000' });
  expect(row.flowOriginal).toBeNull(); expect(row.pressureBar).toBeNull();
  expect(product.airPerActionLiters).toBeCloseTo(2.54851619328, 11);
  expect(product.workingPressureBar).toEqual({ min: 6.894757, typical: 6.894757, max: 6.894757 });
  expect(product.editorial.overview).toContain('90 à 120 PSIG');
  expect(product.editorial.overview).toContain('point documenté de 100 PSIG');
  expect(product.fieldSources.airPerActionLiters).toContain('october5-tools-paslode-f325-manual-p10');
  expect(product.fieldSources.airPerActionLiters).toContain('october5-tools-unit-nist-volume-exact-p258');
  expect(product.fieldSources.workingPressureBar).toContain('october5-tools-unit-nist-conversions-p1');
  expect(evaluateCompatibility(ample, product).verdict).toBe('insufficient_data');
  const other = batch.find(product => product.brand === 'Paslode' && product.model === 'F150S-PP');
  expect(other.demandModel).toBe('variable-volume'); expect(other.airPerActionLiters).toBeUndefined();
 });
 it('converts units from independent captured NIST tables without pretending they cover a tool brand', () => {
  const { pressure, volume } = snapshot.unitConversions;
  expect(pressure.factor).toBe(OCTOBER5_UNIT_CONVERSIONS.psiToBar);
  expect(volume.factor).toBe(OCTOBER5_UNIT_CONVERSIONS.cubicFootToLiters);
  expect(volume.source).toMatchObject({ httpStatus: 200, page: 258, printedPage: 232, bytes: 6786061, sha256: 'd10f84baa8256d95b0c6900d56e616dc987e7505cfeec824d11744270c066d3c' });
  expect(pressure.source.sha256).toBe('a66b8ada84af2d6f8ff8cb88ce6384f0bfe0af8583f166f6f6ffec0b26250180');
  expect(volume.sourceTechnicalCells).toContainEqual({ label: 'Conversion factor', value: '28.316 846 592' });
  for (const conversion of [pressure, volume]) expect(conversion.source.brands).toBeUndefined();
  const proofs = f325().evidence.filter(proof => proof.id.includes('-unit-'));
  expect(proofs).toHaveLength(2);
  for (const proof of proofs) { expect(proof.sourceType).toBe('manual'); expect(proof.notes).toContain('Aucune déclaration fabricant'); }
 });
 it('requires an explicit cadence for the average and rejects zero or invented infinite cadence', () => {
  const product = f325(), liters = product.airPerActionLiters;
  expect(perActionAverageFlow(liters, 40)).toBeCloseTo(101.9406477312, 10);
  const result = sizeConfiguration({ demands: [{ model: 'per-action', id: product.id, litersPerAction: liters, actionsPerMinute: 40, pressureBar: product.workingPressureBar.typical }] });
  expect(result.averageFlowLpm).toBeCloseTo(liters * 40, 10); expect(result.flowBasis).toBe('derived-average');
  expect(result.warnings.join(' ')).toMatch(/instantan|pointe/);
  for (const cadence of [0, -1, Infinity, 10001]) expect(() => perActionAverageFlow(liters, cadence)).toThrow();
  expect(() => sizeConfiguration({ demands: [{ model: 'per-action', id: product.id, litersPerAction: liters, pressureBar: product.workingPressureBar.typical }] })).toThrow();
 });
 it('assigns manual cutting pincers and automatic painting guns to explicit taxonomy and existing useful guides', () => {
  for (const [category, count, usage] of [['pince-coupante-pneumatique', 115, 'decoupe'], ['pistolet-peinture-automatique', 43, 'peinture']]) {
   expect(batch.filter(product => product.categoryId === category)).toHaveLength(count);
   expect(toolTaxonomy.some(item => item.id === category)).toBe(true);
   expect(toolUsageForCategory(category).id).toBe(usage);
   const path = toolGuideByCategoryId[category];
   expect(existsSync(new URL(`../../src/content${path.slice(0, -1)}.md`, import.meta.url))).toBe(true);
  }
  expect(batch.filter(product => product.brand === 'Graco' && product.categoryId === 'pistolet-peinture-automatique')).toHaveLength(43);
  expect(batch.some(product => product.brand === 'Graco' && ['24B876', '24B893'].includes(product.mpn))).toBe(false);
 });
 it('preserves Nile course-volume and the MB20 band-size contradiction outside flow calculations', () => {
  const nile = batch.filter(product => product.brand === 'Nile');
  expect(nile).toHaveLength(133); expect(nile.every(product => product.demandModel === 'variable-volume')).toBe(true);
  const mb20 = nile.find(product => product.model === 'MB20');
  expect(mb20.editorial.limitations.join(' ')).toContain('20 × 500');
  expect(mb20.editorial.limitations.join(' ')).toContain('20 × 520');
  expect(nile.some(product => product.editorial.limitations.some(note => note.includes('cm³/course')))).toBe(true);
 });
 it('does not turn OBER Nl/ciclo into L/min or shorten complete multiword model names', () => {
  for (const [model, page] of [['ALL BLACK', 48], ['ANGLE BLACK', 49], ['SUPER BLACK', 50], ['GREY BLACK', 51], ['GREY BLACK - AL', 52], ['IMP8 XC', 54], ['SUPERERGO 13', 105], ['MP100CA con mandrino', 138]]) {
   expect(snapshot.tools.some(row => row.brand === 'OBER' && row.model === model && row.page === page)).toBe(true);
  }
  expect(snapshot.tools.some(row => row.brand === 'OBER' && (row.model === 'XC' || row.mpn === '8305537.2'))).toBe(false);
  for (const row of snapshot.tools.filter(row => row.brand === 'OBER' && [47, 48, 49, 50, 51, 52, 53, 57].includes(row.page))) expect(row.categoryId).toBe('cle-a-chocs');
  expect(batch.find(product => product.brand === 'OBER' && product.model === 'IMP8 XC').categoryId).toBe('visseuse');
  for (const [model, right, left] of [['ERMAS88D', '370', '740'], ['ERMAS88', '370', '740'], ['ERGOMAS120D', '360', '720'], ['ERGOMAS120', '360', '720']]) {
   const row = snapshot.tools.find(row => row.brand === 'OBER' && row.model === model);
   expect(row.details).toContainEqual({ label: 'VELOCITÀ A VUOTO (giri/min), a destra', value: right });
   expect(row.details).toContainEqual({ label: 'VELOCITÀ A VUOTO (giri/min), a sinistra', value: left });
  }
 });
 it('retains HsuTech printed full titles and ambiguous raw cells without publishing them as specifications', () => {
  const corrected = snapshot.tools.filter(row => row.brand === 'HsuTech' && row.sourceTechnicalCells.some(cell => cell.label === 'Published model designation'));
  expect(corrected).toHaveLength(21);
  for (const row of corrected) expect(row.sourceTechnicalCells.some(cell => cell.label === 'Published model designation' && cell.value === row.model && cell.bbox)).toBe(true);
  const rawOnly = snapshot.tools.filter(row => row.sourceTechnicalCells.some(cell => !cell.label || !cell.value || cell.label.includes('Level Vibration A)')));
  expect(rawOnly.length).toBeGreaterThan(0);
  for (const row of rawOnly) expect(row.details.every(detail => detail.label && detail.value && !detail.label.includes('Level Vibration A)'))).toBe(true);
 });
 it('keeps Graco fluid pressure distinct and preserves Sames family/configuration contradictions', () => {
  const graco = snapshot.tools.find(row => row.brand === 'Graco' && row.mpn === '288726');
  expect(graco.details.some(detail => detail.label === 'Maximum air working pressure' && detail.value.includes('100 psi'))).toBe(true);
  expect(graco.details.some(detail => detail.label === 'Maximum fluid working pressure' && detail.value.includes('300 psi'))).toBe(true);
  expect(batch.find(product => product.brand === 'Graco' && product.mpn === '288726').workingPressureBar).toEqual({});
  expect(batch.filter(product => product.brand === 'Sames Kremlin').every(product => product.editorial.limitations.some(note => note.includes('famille')))).toBe(true);
 });
 it('excludes possible AP/RP collisions without declaring an unproven global OEM alias', () => {
  expect(documentedIdentityKey('Aeropro', 'AP17407')).not.toBe(documentedIdentityKey('Rongpeng', 'RP17407'));
  expect(snapshot.aliasReview.confirmedAliases).toEqual([]);
  expect(() => assertDocumentedToolsOctober5NewIdentities([{ brand: 'Aeropro', model: 'AP17407', mpn: 'AP17407' }], [{ brand: 'Rongpeng', model: 'RP17407', mpn: 'RP17407' }])).toThrow(/independence/);
  expect(() => assertDocumentedToolsOctober5NewIdentities([{ brand: 'Aeropro', model: 'AP99999', mpn: 'AP99999' }], [{ brand: 'Rongpeng', model: 'RP17407', mpn: 'RP17407' }])).not.toThrow();
  expect(() => assertDocumentedToolsOctober5NewIdentities([{ brand: 'Hitachi', model: 'NV65', mpn: 'NV65' }], [{ brand: 'Metabo HPT', model: 'NV65', mpn: 'NV65' }])).toThrow(/identity/);
 });
 for (const [name, find, change] of [
  ['unknown average promoted to fixed load', row => row.brand === 'HsuTech', row => { row.measurementQualification = 'continuous-flow-point'; row.flowBasis = 'load'; }],
  ['unqualified action point added to unknown', row => row.brand === 'Nile', row => { row.perActionProfile = { qualified: true, volumeOriginal: 30 }; }],
  ['Paslode amount changed', f325row, row => { row.perActionProfile.volumeOriginal = .091; }],
  ['Paslode service pressure substituted for point', f325row, row => { row.perActionProfile.pressureOriginal = 90; }],
  ['gauge psi misdeclared as bar', f325row, row => { row.perActionProfile.pressureUnit = 'bar'; }],
  ['example page substituted for source point', f325row, row => { row.perActionProfile.page = 8; }],
  ['standard volume relabelled as measured operating volume', f325row, row => { row.perActionProfile.volumeBasis = 'operating-volume'; }],
  ['implicit cadence added to qualified point', f325row, row => { row.perActionProfile.actionsPerMinute = 60; }],
  ['implicit duty factor added to qualified point', f325row, row => { row.dutyFactor = .25; }],
  ['per-fastener axis relabelled as CFM', f325row, row => { row.perActionProfile.volumeAxisQuote = 'CFM'; }],
  ['original graphic cell changed', f325row, row => { row.sourceTechnicalCells.find(cell => cell.label === 'Volume annotation').value = '.080 SCF'; }],
  ['OBER full header truncated', row => row.brand === 'OBER' && row.model === 'ALL BLACK', row => { row.model = 'ALL'; }],
  ['OBER printed code lost', row => row.brand === 'OBER', row => { row.sourceTechnicalCells = row.sourceTechnicalCells.filter(cell => cell.label !== 'CODICE'); }],
  ['technical attribution removed', row => row.brand === 'Nile', row => { row.sourceTechnicalCells[0].sourceId = 'missing-source'; }],
 ]) it('rejects mirrored and repinned interpretation changes: ' + name, async () => tamperRow(find, change));
 for (const [name, change] of [
  ['rounded fluid-volume factor used as exact', copy => { copy.unitConversions.volume.factor = 28.31685; }],
  ['wrong NIST table page', copy => { copy.unitConversions.volume.source.page = 260; }],
  ['pressure factor changed', copy => { copy.unitConversions.pressure.factor = .06895; }],
  ['wrong volume column', copy => { copy.unitConversions.volume.sourceTechnicalCells.find(cell => cell.label === 'Ending unit').value = 'Milliliters'; }],
  ['fabricated NIST brand coverage', copy => { copy.unitConversions.pressure.source.brands = ['Paslode']; }],
  ['NIST original digest substituted', copy => { copy.unitConversions.volume.source.sha256 = 'f'.repeat(64); }],
  ['failed manufacturer capture', copy => { copy.sources[0].httpStatus = 403; }],
  ['unsafe source protocol', copy => { copy.sources[0].url = 'http://example.com/source'; }],
  ['credentials in source URL', copy => { copy.sources[0].resolvedUrl = 'https://user:password@example.com/source'; }],
  ['signed secret in source URL', copy => { copy.sources[0].url = 'https://example.com/source?token=private'; }],
 ]) it('rejects repinned provenance/conversion change: ' + name, async () => {
  const copy = structuredClone(snapshot); change(copy);
  expect(() => buildDocumentedToolsOctober5(copy)).toThrow();
  const build = await repinned(copy); expect(() => build(copy)).toThrow();
 });
 it('rejects missing documentary rows, reused identities and modified sealed cells', () => {
  for (const mutate of [copy => { copy.technicalRows.pop(); }, copy => { copy.tools[1].documentRowId = copy.tools[0].documentRowId; }, copy => { copy.tools[0].sourceTechnicalCells[0].value += ' altered'; }]) {
   const copy = structuredClone(snapshot); mutate(copy); expect(() => buildDocumentedToolsOctober5(copy)).toThrow();
  }
 });
});
