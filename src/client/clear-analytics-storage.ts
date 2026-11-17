export function clearLegacyAnalyticsStorage() {
	if (location.protocol !== 'https:' || !['compatair.fr', 'www.compatair.fr'].includes(location.hostname)) return;
	try { localStorage.removeItem('ca:analytics-consent:v1'); } catch { /* Storage may be blocked. */ }
	try { sessionStorage.removeItem('ca:acquisition'); } catch { /* Session storage may be blocked. */ }
	try {
		for (const entry of document.cookie.split(';')) {
			const name = entry.trim().split('=')[0];
			if (!/^_ga(?:_[A-Za-z0-9]+)?$/.test(name)) continue;
			for (const domain of ['', '; Domain=compatair.fr', '; Domain=.compatair.fr']) {
				document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax; Secure${domain}`;
			}
		}
	} catch { /* Cookie access may be blocked; no collection is initialized. */ }
}
