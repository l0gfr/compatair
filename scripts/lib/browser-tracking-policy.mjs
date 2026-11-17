export function browserTrackingErrors(source, kind, label) {
	const errors = [];
	if (kind === 'html') {
		if (/data-analytics-(?:consent|settings|accept|refuse)\b/.test(source)) errors.push(`${label}: ancien consentement Analytics présent`);
		if (/<script\b[^>]*\bsrc\s*=\s*["'][^"']*(?:googletagmanager\.com|google-analytics\.com|analytics\.google\.com)/i.test(source)) errors.push(`${label}: script de suivi externe présent`);
	} else if (kind === 'javascript') {
		if (/googletagmanager\.com|google-analytics\.com|analytics\.google\.com|\bsendBeacon\b|["'`]\/events["'`]|\bdataLayer\b/.test(source)) errors.push(`${label}: collecte de suivi présente dans le JavaScript navigateur`);
	}
	return errors;
}
