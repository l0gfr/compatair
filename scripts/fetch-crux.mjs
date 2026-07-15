import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { summarizeCruxRecord } from './lib/crux-report.mjs';

const reportDirectory = process.argv[2] ?? '.lighthouseci/reports';
const apiKey = process.env.CRUX_API_KEY?.trim();
await mkdir(reportDirectory, { recursive: true });
let report;
if (!apiKey) {
	report = { schemaVersion: '1.0.0', source: 'Chrome UX Report API', origin: 'https://compatair.fr', status: 'not_configured', reason: 'CRUX_API_KEY absent' };
} else {
	try {
		const response = await fetch(`https://chromeuxreport.googleapis.com/v1/records:queryRecord?key=${encodeURIComponent(apiKey)}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ origin: 'https://compatair.fr', formFactor: 'PHONE', metrics: ['largest_contentful_paint', 'interaction_to_next_paint', 'cumulative_layout_shift'] }),
		});
		if (response.status === 404) report = { status: 'insufficient_data', metrics: {} };
		else {
			if (!response.ok) throw new Error(`CrUX HTTP ${response.status}`);
			report = summarizeCruxRecord(await response.json());
		}
		report = { schemaVersion: '1.0.0', source: 'Chrome UX Report API', origin: 'https://compatair.fr', collectedAt: new Date().toISOString(), ...report };
	} catch (error) {
		report = { schemaVersion: '1.0.0', source: 'Chrome UX Report API', origin: 'https://compatair.fr', status: 'unavailable', reason: error instanceof Error ? error.message : 'Erreur CrUX inconnue' };
	}
}
await writeFile(join(reportDirectory, 'crux-summary.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(`CrUX terrain : ${report.status}.`);
