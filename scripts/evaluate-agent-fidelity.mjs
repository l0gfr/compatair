import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { evaluateAgentFidelity } from './lib/evaluate-agent-fidelity.mjs';

const [benchmarkPath, submissionsPath, outputPath] = process.argv.slice(2);
if (!benchmarkPath || !submissionsPath || !outputPath) throw new Error('Usage: node scripts/evaluate-agent-fidelity.mjs BENCHMARK.json RESPONSES.ndjson REPORT.json');
const benchmark = JSON.parse(await readFile(resolve(benchmarkPath), 'utf8'));
const lines = (await readFile(resolve(submissionsPath), 'utf8')).split(/\r?\n/).filter(Boolean);
if (lines.length > 100) throw new Error('A submission cannot contain more than 100 responses');
const submissions = lines.map((line) => JSON.parse(line));
const report = evaluateAgentFidelity(benchmark, submissions);
await writeFile(resolve(outputPath), `${JSON.stringify(report, null, 2)}\n`, { mode: 0o600 });
console.log(`Agent fidelity score: ${report.score}/100; coverage ${(report.coverage * 100).toFixed(1)}%`);
