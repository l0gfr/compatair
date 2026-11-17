import { describe, expect, it } from 'vitest';
import { browserTrackingErrors } from './browser-tracking-policy.mjs';

describe('generated browser tracking boundary', () => {
	it.each([
		'const s=document.createElement("script");s.src="https://www.googletagmanager.com/gtag/js?id=G-OLD";',
		'navigator.sendBeacon("/events",new Blob([JSON.stringify(event)]))',
		'fetch("/events",{method:"POST",body:payload})',
		'window.dataLayer=[];',
	])('rejects a cached or minified collection module', source => {
		expect(browserTrackingErrors(source, 'javascript', '/_assets/stale.js')).toHaveLength(1);
	});

	it('rejects stale consent HTML and external Google scripts', () => {
		expect(browserTrackingErrors('<aside data-analytics-consent hidden></aside>', 'html', '/')).toHaveLength(1);
		expect(browserTrackingErrors('<script src="https://www.googletagmanager.com/gtag/js?id=G-OLD"></script>', 'html', '/')).toHaveLength(1);
	});

	it('permits necessary API calls, local cleanup and factual privacy information', () => {
		expect(browserTrackingErrors('fetch("/api/v1/search/products?q=reference");localStorage.removeItem("ca:analytics-consent:v1")', 'javascript', 'functional.js')).toEqual([]);
		expect(browserTrackingErrors('<h1>Retrait de Google Analytics</h1><code>/events</code>', 'html', '/confidentialite/')).toEqual([]);
	});
});
