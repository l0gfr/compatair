import { describe, expect, it } from 'vitest';
import { ANALYTICS_LIFETIME_SECONDS, analyticsPage, makeAnalyticsChoice, readAnalyticsChoice } from './analytics-consent';

describe('analytics consent and data minimization', () => {
	const now = Date.UTC(2026, 10, 11);
	it('requires a current explicit boolean choice and retains refusal for the same duration', () => {
		for (const allowed of [false, true]) {
			const choice = makeAnalyticsChoice(allowed, now);
			expect(readAnalyticsChoice(JSON.stringify(choice), now)).toEqual(choice);
			expect(choice.expiresAt - choice.savedAt).toBe(ANALYTICS_LIFETIME_SECONDS * 1000);
			expect(readAnalyticsChoice(JSON.stringify(choice), choice.expiresAt)).toBeNull();
		}
	});
	it('fails closed on missing, malformed, future or extended consent', () => {
		const valid = makeAnalyticsChoice(true, now);
		for (const value of [null, '{', '{}', 'true', JSON.stringify({ ...valid, allowed: 'true' }), JSON.stringify({ ...valid, version: 2 }), JSON.stringify({ ...valid, savedAt: now + 1 }), JSON.stringify({ ...valid, expiresAt: valid.expiresAt + 1 })]) expect(readAnalyticsChoice(value, now)).toBeNull();
	});
	it('strips simulation fragments, query values and referrer path, query, credentials and fragment', () => {
		expect(analyticsPage('https://compatair.fr/calculateur/?email=a%40b.fr#configuration', 'https://user:pass@www.google.fr/search?q=private#secret')).toEqual({ page_location: 'https://compatair.fr/calculateur/', page_referrer: 'https://www.google.fr/' });
	});
	it('rejects a foreign canonical and discards unsafe or malformed referrers', () => {
		for (const url of ['https://evil.test/', 'https://compatair.fr.evil.test/', 'http://compatair.fr/', '/calculateur/']) expect(() => analyticsPage(url, '')).toThrow();
		for (const url of ['', 'invalid', 'javascript:alert(1)', 'data:text/plain,x']) expect(analyticsPage('https://compatair.fr/', url).page_referrer).toBe('');
	});
});
