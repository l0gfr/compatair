import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { buildAcquisitionReport } from './lib/report-acquisition.mjs';

const input = process.argv[2];
const output = process.argv[3];
if (!input || !output) throw new Error('Usage: node scripts/report-acquisition.mjs INPUT.json OUTPUT.json');
const report = buildAcquisitionReport(JSON.parse(await readFile(resolve(input), 'utf8')));
await writeFile(resolve(output), `${JSON.stringify(report, null, 2)}\n`, { mode: 0o600 });
console.log(`Private acquisition report written to ${resolve(output)}`);
