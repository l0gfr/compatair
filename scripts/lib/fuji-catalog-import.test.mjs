import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { fujiPressureNotices } from './fuji-pressure-notices.mjs';
import { tools } from '../../src/data/catalog';
import { toolProfileSchema } from '../../src/domain/catalog';
import { toolCategoryLabel } from '../../src/data/taxonomy';
import { createFujiToolDraft, fujiQuantity } from './fuji-catalog-import.mjs';

const snapshot = JSON.parse(await readFile(new URL('../../src/data/imports/fuji-reviewed-2026-09-25.json', import.meta.url)));

describe('reviewed Fuji manufacturer import', () => {
	it('rejects missing, ambiguous, zero and wrongly labelled quantities', () => {
		for (const value of ['0', '-1', '3,5', '3.5, 4.2', '3.5 l/s', 'NaN', '', undefined]) expect(() => fujiQuantity({ value, unit: 'l/s' }, 'l/s')).toThrow();
		expect(() => fujiQuantity({ value: '3.5', unit: 'm³/min' }, 'l/s')).toThrow();
		expect(fujiQuantity({ value: '3.5', unit: 'l/s' }, 'l/s')).toBe(3.5);
	});
	it('requires an exact MPN-to-document chain for portal notices', () => {
		const row = snapshot.rows.find(r => !fujiPressureNotices.some(n => r.documents.some(d => new URL(d.url).href === n.url)));
		expect(row).toBeDefined();
		for (const patch of [{ partNumber: '5412000000' }, { linkedPartNumber: '5412000000' }, { responseSha256: '' }, { documentUrl: 'https://example.org/manual.pdf' }, { documentVersion: '99' }, { endpointUrl: 'https://example.org/api' }]) expect(() => createFujiToolDraft(snapshot, { ...row, pressurePortalEvidence: { ...row.pressurePortalEvidence, ...patch } })).toThrow();
		expect(() => createFujiToolDraft({ ...snapshot, pressureNotices: snapshot.pressureNotices.map(n => ({ ...n, sha256: '' })) }, row)).toThrow();
	});
	it('requires a pressure notice explicitly linked by the individual product', () => {
		const row = structuredClone(snapshot.rows[0]);
		row.documents = [];
		expect(() => createFujiToolDraft(snapshot, row)).toThrow();
		for (const patch of [{ url: 'https://example.org/manual.pdf' }, { sha256: '' }, { page: 99 }, { workingPressureBar: 8 }]) expect(() => createFujiToolDraft({ ...snapshot, pressureNotices: snapshot.pressureNotices.map(n => ({ ...n, ...patch })) }, snapshot.rows[0])).toThrow();
	});
	it('rejects unverified identities, inactive items and kits', () => {
		for (const patch of [{ sourceUrl: 'https://www.fujitools.com.evil.test/' }, { sourceSha256: '' }, { status: 'inactive' }, { model: 'FG-13 KIT' }, { mpn: '5412' }, { categoryId: 'unknown' }, { observedAt: '2026-01-01' }]) expect(() => createFujiToolDraft(snapshot, { ...snapshot.rows[0], ...patch })).toThrow();
	});
	it('does not substitute free-speed flow or accept contradictory flow units', () => {
		const row = structuredClone(snapshot.rows[0]);
		row.attributes.FreeSpeedAirConsumption_unit_SI = { value: '12', unit: 'l/s' };
		delete row.attributes.AirConsumptionAtLoad_unit_SI;
		expect(() => createFujiToolDraft(snapshot, row)).toThrow();
		const contradiction = structuredClone(snapshot.rows[0]);
		contradiction.attributes.AirConsumptionAtLoad_unit_USCS.value = '10000';
		expect(() => createFujiToolDraft(snapshot, contradiction)).toThrow();
	});
	it('preserves the exact 250 MPNs, loaded flows and separate pressure provenance', () => {
		expect(snapshot.rows).toHaveLength(250);
		expect(new Set(snapshot.rows.map(r => r.mpn)).size).toBe(250);
		for (const row of snapshot.rows) {
			const actual = tools.find(t => t.brand === 'Fuji' && t.mpn === row.mpn);
			expect(actual, row.model).toBeDefined();
			const expected = toolProfileSchema.parse(createFujiToolDraft(snapshot, row));
			expect(actual).toEqual({ ...expected, category: toolCategoryLabel(expected.categoryId) });
			expect(actual.model).toBe(row.model);
			expect(actual.airflowLpm.typical).toBe(Number((Number(row.attributes.AirConsumptionAtLoad_unit_SI.value) * 60).toFixed(3)));
			expect(actual.workingPressureBar).toEqual({ min: 6.3, typical: 6.3, max: 6.3 });
			expect(actual.recommendedHose).toEqual({ innerDiameterMm: Number(row.attributes.Min_HoseDiameter5mHoseLenght_unit_SI.value), maximumLengthMeters: 5 });
			expect(actual.fieldSources.airflowLpm).not.toEqual(actual.fieldSources.workingPressureBar);
			const direct = fujiPressureNotices.find(n => row.documents.some(d => new URL(d.url).href === n.url));
			const notice = direct ?? fujiPressureNotices.find(n => n.url === row.pressurePortalEvidence?.documentUrl);
			expect(notice).toBeDefined();
			expect(actual.evidence.find(e => actual.fieldSources.workingPressureBar.includes(e.id)).sourceUrl).toBe(`${notice.url}#page=${notice.page}`);
			if (!direct) expect(row.pressurePortalEvidence.linkedPartNumber).toBe(row.mpn);
		}
	});
	it('keeps reference-specific connection and mechanical differences', () => {
		const profiles = snapshot.rows.map(row => {
			const p = createFujiToolDraft(snapshot, row);
			return JSON.stringify([p.categoryId, p.airflowLpm.typical, p.connectorSize, p.specifications.map(s => [s.label, s.value])]);
		});
		expect(new Set(profiles).size).toBe(250);
		const p = tools.find(t => t.mpn === '5412052716');
		expect(p).toMatchObject({ model: 'FG-13-1 1-8 N', airflowLpm: { typical: 252 }, connectorSize: 'Entrée 1/4 pouce NPT, flexible intérieur 6,3 mm sur 5 m' });
	});
	it('retains free-speed limits and leaves uncertain source values outside the catalog', () => {
		const row = snapshot.rows.find(r => Number(r.attributes.FreeSpeedAirConsumption_unit_SI?.value) > Number(r.attributes.AirConsumptionAtLoad_unit_SI.value));
		expect(row).toBeDefined();
		const p = createFujiToolDraft(snapshot, row);
		expect(p.editorial.limitations.join(' ')).toContain('dépasse le seuil en charge');
		for (const mpn of ['5412052878', '5412052879', '5412052289']) {
			expect(snapshot.rows.some(r => r.mpn === mpn)).toBe(false);
			expect(snapshot.exclusions.some(r => r.mpn === mpn)).toBe(true);
		}
	});
});
