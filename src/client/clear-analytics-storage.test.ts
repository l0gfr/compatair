import { afterEach, describe, expect, it, vi } from 'vitest';
import { clearLegacyAnalyticsStorage } from './clear-analytics-storage';

afterEach(() => vi.unstubAllGlobals());

function fixture(hostname = 'compatair.fr', protocol = 'https:') {
	const removed = vi.fn();
	const sessionRemoved = vi.fn();
	const writes: string[] = [];
	const doc = {};
	Object.defineProperty(doc, 'cookie', {
		get: () => '_ga=old; _ga_EY1HBDD7KR=old; preferences=keep; _ga_unrelated_name=keep',
		set: (value: string) => writes.push(value),
	});
	vi.stubGlobal('document', doc);
	vi.stubGlobal('location', { hostname, protocol });
	vi.stubGlobal('localStorage', { removeItem: removed });
	vi.stubGlobal('sessionStorage', { removeItem: sessionRemoved });
	return { doc, removed, sessionRemoved, writes };
}

describe('removal of legacy Analytics storage', () => {
	it('expires only the old GA cookies at their configured root scopes', () => {
		const f = fixture();
		clearLegacyAnalyticsStorage();
		expect(f.removed.mock.calls).toEqual([['ca:analytics-consent:v1']]);
		expect(f.sessionRemoved.mock.calls).toEqual([['ca:acquisition']]);
		expect(f.writes).toHaveLength(6);
		for (const name of ['_ga', '_ga_EY1HBDD7KR']) {
			for (const domain of ['', '; Domain=compatair.fr', '; Domain=.compatair.fr']) {
				expect(f.writes).toContain(`${name}=; Max-Age=0; Path=/; SameSite=Lax; Secure${domain}`);
			}
		}
		expect(f.writes.join('\n')).not.toMatch(/preferences=|_ga_unrelated_name=/);
	});

	it('cleans the www alias but leaves other origins untouched', () => {
		const alias = fixture('www.compatair.fr');
		clearLegacyAnalyticsStorage();
		expect(alias.writes).toHaveLength(6);
		for (const [host, protocol] of [['localhost', 'http:'], ['compatair.fr.evil.test', 'https:'], ['compatair.fr', 'http:']]) {
			const f = fixture(host, protocol);
			clearLegacyAnalyticsStorage();
			expect(f.removed).not.toHaveBeenCalled();
			expect(f.sessionRemoved).not.toHaveBeenCalled();
			expect(f.writes).toEqual([]);
		}
	});

	it('still clears cookies when local storage is unavailable', () => {
		const f = fixture();
		f.removed.mockImplementation(() => { throw new Error('blocked'); });
		expect(clearLegacyAnalyticsStorage).not.toThrow();
		expect(f.writes).toHaveLength(6);
	});

	it('tolerates unavailable cookies without touching other local data', () => {
		const f = fixture();
		vi.stubGlobal('document', { get cookie() { throw new Error('blocked'); } });
		expect(clearLegacyAnalyticsStorage).not.toThrow();
		expect(f.removed.mock.calls).toEqual([['ca:analytics-consent:v1']]);
		expect(f.sessionRemoved.mock.calls).toEqual([['ca:acquisition']]);
	});
});
