export const ANALYTICS_CHOICE_KEY = 'ca:analytics-consent:v1';
export const ANALYTICS_LIFETIME_SECONDS = 180 * 24 * 60 * 60;
export type AnalyticsChoice = { version: 1; allowed: boolean; savedAt: number; expiresAt: number };

export function readAnalyticsChoice(raw: string | null, now = Date.now()): AnalyticsChoice | null {
	try {
		const value: unknown = JSON.parse(raw ?? 'null');
		if (!value || typeof value !== 'object') return null;
		const item = value as Partial<AnalyticsChoice>;
		if (item.version !== 1 || typeof item.allowed !== 'boolean' || !Number.isSafeInteger(item.savedAt) || !Number.isSafeInteger(item.expiresAt)) return null;
		if (item.savedAt! > now || item.savedAt! < 0 || item.expiresAt! <= now || item.expiresAt! - item.savedAt! !== ANALYTICS_LIFETIME_SECONDS * 1000) return null;
		return item as AnalyticsChoice;
	} catch { return null; }
}

export function makeAnalyticsChoice(allowed: boolean, now = Date.now()): AnalyticsChoice {
	return { version: 1, allowed, savedAt: now, expiresAt: now + ANALYTICS_LIFETIME_SECONDS * 1000 };
}

export function analyticsPage(canonical: string, referrer: string) {
	const page = new URL(canonical);
	if (page.origin !== 'https://compatair.fr') throw new Error('Analytics requires a public CompatAir canonical');
	page.username = ''; page.password = '';
	page.search = ''; page.hash = '';
	let source = '';
	try { const url = new URL(referrer); if (url.protocol === 'https:' || url.protocol === 'http:') source = url.origin + '/'; } catch {}
	return { page_location: page.href, page_referrer: source };
}
