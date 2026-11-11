import { ANALYTICS_CHOICE_KEY, ANALYTICS_LIFETIME_SECONDS, analyticsPage, makeAnalyticsChoice, readAnalyticsChoice } from '../domain/analytics-consent';

type AnalyticsWindow = Window & { dataLayer?: IArguments[]; gtag?: (...args: unknown[]) => void };

export function initializeAnalyticsConsent() {
	const panel = document.querySelector<HTMLElement>('[data-analytics-consent]');
	const measurementId = panel?.dataset.measurementId ?? '';
	if (!panel || !/^G-[A-Z0-9]+$/.test(measurementId)) return;
	const production = location.hostname === 'compatair.fr' && location.protocol === 'https:';
	const host = window as AnalyticsWindow;
	const flags = host as unknown as Record<string, unknown>;
	const disabledKey = `ga-disable-${measurementId}`;
	flags[disabledKey] = true;
	const accept = panel.querySelector<HTMLButtonElement>('[data-analytics-accept]');
	const refuse = panel.querySelector<HTMLButtonElement>('[data-analytics-refuse]');
	const close = panel.querySelector<HTMLButtonElement>('[data-analytics-close]');
	const status = panel.querySelector<HTMLElement>('[data-analytics-status]');
	const en = document.documentElement.lang === 'en';
	let loaded = false;
	let pageParameters: ReturnType<typeof analyticsPage> & { page_title: string; send_to: string } | undefined;
	let expiryTimer: ReturnType<typeof setTimeout> | undefined;
	let returnFocus: HTMLElement | null = null;
	const choice = () => { try { return readAnalyticsChoice(localStorage.getItem(ANALYTICS_CHOICE_KEY)); } catch { return null; } };
	const clearCookies = () => {
		try {
		for (const cookie of document.cookie.split(';')) {
			const name = cookie.trim().split('=')[0];
			if (name !== '_ga' && !/^_ga_[A-Z0-9]+$/.test(name)) continue;
			for (const domain of ['', '; Domain=compatair.fr', '; Domain=.compatair.fr']) document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax; Secure${domain}`;
		}
		} catch { /* Cookie storage can be unavailable; collection stays disabled. */ }
	};
	const stop = (reload = true) => {
		flags[disabledKey] = true;
		clearTimeout(expiryTimer);
		clearCookies();
		// A fresh document also stops Google's already-loaded engagement timers.
		if (loaded && reload) location.reload();
	};
	const send = (name: 'page_view' | 'calculator_result' | 'calculator_intent' | 'merchant_click') => {
		if (choice()?.allowed && loaded && !flags[disabledKey] && pageParameters) host.gtag?.('event', name, { ...pageParameters });
	};
	const synchronize = () => {
		const current = choice();
		if (!current?.allowed) { stop(); return; }
		if (!production) return;
		clearTimeout(expiryTimer);
		expiryTimer = setTimeout(synchronize, Math.min(current.expiresAt - Date.now(), 2_147_000_000));
		if (loaded) return;
		let page;
		try { page = analyticsPage(document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href ?? '', document.referrer); } catch { return; }
		flags[disabledKey] = false;
		host.dataLayer = [];
		host.gtag = function (..._args: unknown[]) { host.dataLayer!.push(arguments); };
		host.gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
		host.gtag('consent', 'update', { analytics_storage: 'granted' });
		pageParameters = { ...page, page_title: document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.content ?? 'CompatAir', send_to: measurementId };
		const configuration = {
			...pageParameters, send_page_view: false,
			allow_google_signals: false, allow_ad_personalization_signals: false,
			cookie_domain: 'compatair.fr', cookie_path: '/', cookie_expires: ANALYTICS_LIFETIME_SECONDS,
			cookie_update: false, cookie_flags: 'SameSite=Lax;Secure',
		};
		// Set defaults before initialization; explicit events also carry the sanitized context.
		// Event parameters have precedence over config and global settings in gtag.js.
		host.gtag('set', configuration);
		host.gtag('js', new Date());
		host.gtag('config', measurementId, { ...configuration });
		const script = document.createElement('script');
		script.async = true;
		script.referrerPolicy = 'no-referrer';
		script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
		loaded = true;
		send('page_view');
		document.head.append(script);
	};
	const show = (trigger?: HTMLElement) => {
		returnFocus = trigger ?? null;
		panel.hidden = false;
		if (close) close.hidden = !choice();
		if (status) status.textContent = choice()?.allowed ? (en ? 'Currently accepted.' : 'Actuellement accepté.') : (en ? 'Currently disabled.' : 'Actuellement désactivé.');
		if (trigger) refuse?.focus();
	};
	const hide = () => { panel.hidden = true; returnFocus?.focus(); };
	const save = (allowed: boolean) => {
		try {
			localStorage.setItem(ANALYTICS_CHOICE_KEY, JSON.stringify(makeAnalyticsChoice(allowed)));
			if (choice()?.allowed !== allowed) throw new Error('Consent was not persisted');
		} catch {
			stop(false);
			if (status) status.textContent = en ? 'Preferences could not be saved. Analytics remains disabled.' : 'Choix impossible à enregistrer. La mesure reste désactivée.';
			return;
		}
		hide();
		synchronize();
	};
	accept?.addEventListener('click', () => save(true));
	refuse?.addEventListener('click', () => save(false));
	close?.addEventListener('click', hide);
	panel.addEventListener('keydown', (event) => { if (event.key === 'Escape' && choice()) hide(); });
	document.querySelectorAll<HTMLElement>('[data-analytics-settings]').forEach((trigger) => trigger.addEventListener('click', (event) => { event.preventDefault(); show(trigger); }));
	window.addEventListener('storage', (event) => { if (event.key === ANALYTICS_CHOICE_KEY || event.key === null) { synchronize(); if (!choice()) show(); } });
	window.addEventListener('pageshow', () => { synchronize(); if (!choice()) show(); });
	window.addEventListener('compatair:calculator-result', () => send('calculator_result'));
	// Only closed event names: no form values, search terms or destination URLs.
	document.addEventListener('click', (event) => {
		if (!choice()?.allowed || !loaded || flags[disabledKey] || !(event.target instanceof Element)) return;
		const link = event.target.closest<HTMLAnchorElement>('a[href]');
		if (link?.origin === location.origin && link.pathname === '/calculateur/') send('calculator_intent');
		else if (link?.origin === location.origin && link.pathname.startsWith('/go/')) send('merchant_click');
	});
	synchronize();
	if (!choice()) show();
}
