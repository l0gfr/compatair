import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { initializeAnalyticsConsent } from './analytics';
import { ANALYTICS_CHOICE_KEY, makeAnalyticsChoice } from '../domain/analytics-consent';

class NodeStub extends EventTarget {
	hidden = true;
	dataset: Record<string, string> = {};
	textContent = '';
	focus = vi.fn();
	querySelector = vi.fn();
}

function fixture(saved: boolean | null = null) {
	const controls = { accept: new NodeStub(), refuse: new NodeStub(), close: new NodeStub(), status: new NodeStub() };
	const panel = new NodeStub(); panel.dataset.measurementId = 'G-TEST123456';
	panel.querySelector.mockImplementation((selector: string) => controls[selector.match(/analytics-(\w+)/)?.[1] as keyof typeof controls]);
	const settings = new NodeStub();
	const storage = new Map<string, string>();
	if (saved !== null) storage.set(ANALYTICS_CHOICE_KEY, JSON.stringify(makeAnalyticsChoice(saved)));
	const local = { getItem: vi.fn((key: string) => storage.get(key) ?? null), setItem: vi.fn((key: string, value: string) => storage.set(key, value)) };
	const win = new EventTarget() as EventTarget & { dataLayer?: IArguments[]; [key: string]: unknown };
	const loc = { hostname: 'compatair.fr', protocol: 'https:', origin: 'https://compatair.fr', reload: vi.fn() };
	const doc = new EventTarget() as EventTarget & { [key: string]: unknown };
	const writes: string[] = [];
	Object.defineProperty(doc, 'cookie', { get: () => '_ga=old; _ga_TEST123456=old; essential=keep', set: (value: string) => writes.push(value) });
	doc.documentElement = { lang: 'fr' };
	doc.referrer = 'https://www.google.fr/search?q=secret';
	doc.querySelector = vi.fn((selector: string) => selector === '[data-analytics-consent]' ? panel : selector === 'link[rel="canonical"]' ? { href: 'https://compatair.fr/calculateur/?private=secret#simulation' } : { content: 'Calculateur | CompatAir' });
	doc.querySelectorAll = vi.fn(() => [settings]);
	const append = vi.fn(); doc.head = { append };
	doc.createElement = vi.fn(() => ({}));
	vi.stubGlobal('document', doc); vi.stubGlobal('window', win); vi.stubGlobal('localStorage', local); vi.stubGlobal('location', loc);
	return { controls, panel, settings, local, storage, win, loc, doc, append, writes };
}

beforeEach(() => { vi.useFakeTimers(); vi.setSystemTime(Date.UTC(2026, 10, 11)); });
afterEach(() => { vi.useRealTimers(); vi.unstubAllGlobals(); });

describe('GA4 browser consent boundary', () => {
	it('counts a displayed calculator result only after consent, without simulation values', () => {
		const f = fixture(); initializeAnalyticsConsent();
		f.win.dispatchEvent(new Event('compatair:calculator-result')); expect(f.win.dataLayer).toBeUndefined();
		f.controls.accept.dispatchEvent(new Event('click'));
		f.win.dispatchEvent(new Event('compatair:calculator-result'));
		expect(Array.from(f.win.dataLayer!.at(-1)!)).toEqual(['event', 'calculator_result']);
		f.controls.refuse.dispatchEvent(new Event('click'));
		const length = f.win.dataLayer!.length;
		f.win.dispatchEvent(new Event('compatair:calculator-result')); expect(f.win.dataLayer).toHaveLength(length);
	});
	it('sends nothing before choice, after refusal, or on untrusted hosts', () => {
		for (const saved of [null, false]) {
			const f = fixture(saved); initializeAnalyticsConsent();
			expect(f.append).not.toHaveBeenCalled(); expect(f.win.dataLayer).toBeUndefined();
			expect(f.panel.hidden).toBe(saved === false);
			f.controls.refuse.dispatchEvent(new Event('click'));
			expect(f.append).not.toHaveBeenCalled();
		}
		const f = fixture(true); f.loc.hostname = 'localhost'; initializeAnalyticsConsent(); expect(f.append).not.toHaveBeenCalled();
	});
	it('starts once only after explicit acceptance, keeps ads denied and sends sanitized addresses', () => {
		const f = fixture(); initializeAnalyticsConsent(); f.controls.accept.dispatchEvent(new Event('click'));
		expect(f.append).toHaveBeenCalledTimes(1);
		expect(f.append.mock.calls[0][0]).toMatchObject({ async: true, referrerPolicy: 'no-referrer', src: 'https://www.googletagmanager.com/gtag/js?id=G-TEST123456' });
		const commands = f.win.dataLayer!.map((item) => Array.from(item));
		expect(commands[0]).toEqual(['consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' }]);
		expect(commands[1]).toEqual(['consent', 'update', { analytics_storage: 'granted' }]);
		expect(commands[3][2]).toMatchObject({ page_location: 'https://compatair.fr/calculateur/', page_referrer: 'https://www.google.fr/', cookie_update: false, cookie_expires: 15552000, allow_google_signals: false, allow_ad_personalization_signals: false });
		expect(JSON.stringify(commands)).not.toContain('secret'); expect(JSON.stringify(commands)).not.toContain('simulation');
		f.win.dispatchEvent(new Event('pageshow')); expect(f.append).toHaveBeenCalledTimes(1);
	});
	it('remembers consent and immediately disables collection on withdrawal without sending a denied ping', () => {
		const f = fixture(true); initializeAnalyticsConsent(); const initial = f.win.dataLayer!.length;
		f.settings.dispatchEvent(new Event('click', { cancelable: true })); expect(f.panel.hidden).toBe(false); expect(f.controls.refuse.focus).toHaveBeenCalled();
		f.controls.refuse.dispatchEvent(new Event('click'));
		expect(f.win['ga-disable-G-TEST123456']).toBe(true); expect(f.loc.reload).toHaveBeenCalledOnce();
		expect(f.win.dataLayer).toHaveLength(initial);
		expect(f.writes.some((v) => v.startsWith('_ga=; Max-Age=0'))).toBe(true);
		expect(f.writes.some((v) => v.startsWith('_ga_TEST123456=; Max-Age=0'))).toBe(true);
		expect(f.writes.some((v) => v.startsWith('essential='))).toBe(false);
	});
	it('fails closed if storage throws or refuses to retain the choice', () => {
		for (const broken of ['throw', 'discard']) {
			const f = fixture(); if (broken === 'throw') f.local.getItem.mockImplementation(() => { throw new Error('blocked'); }); else f.local.setItem.mockImplementation(() => new Map());
			initializeAnalyticsConsent(); f.controls.accept.dispatchEvent(new Event('click'));
			expect(f.append).not.toHaveBeenCalled(); expect(f.win['ga-disable-G-TEST123456']).toBe(true);
		}
	});
	it('revokes an active page when consent expires or is cleared in another tab', () => {
		const f = fixture(true); initializeAnalyticsConsent();
		vi.advanceTimersByTime(180 * 24 * 60 * 60 * 1000);
		expect(f.loc.reload).toHaveBeenCalled(); expect(f.win['ga-disable-G-TEST123456']).toBe(true);
		const other = fixture(true); initializeAnalyticsConsent(); other.storage.clear();
		const event = new Event('storage'); Object.defineProperty(event, 'key', { value: null }); other.win.dispatchEvent(event);
		expect(other.loc.reload).toHaveBeenCalled(); expect(other.win['ga-disable-G-TEST123456']).toBe(true);
	});
});
