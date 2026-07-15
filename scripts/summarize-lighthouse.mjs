import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { summarizeLighthouseReports } from './lib/lighthouse-summary.mjs';

const reportDirectory = process.argv[2] ?? '.lighthouseci/reports';
await mkdir(reportDirectory, { recursive: true });
const reportFiles = (await readdir(reportDirectory)).filter((file) => file.endsWith('.report.json'));
const reports = [];
for (const file of reportFiles) {
	try { reports.push(JSON.parse(await readFile(join(reportDirectory, file), 'utf8'))); } catch { /* Le résumé ignore un fichier partiel et exige au moins un rapport valide. */ }
}
const summary = summarizeLighthouseReports(reports);
await writeFile(join(reportDirectory, 'summary.json'), `${JSON.stringify(summary, null, 2)}\n`);
console.log(`Résumé Lighthouse : ${summary.reportCount} rapports récents, ${Object.keys(summary.pages).length} pages.`);
