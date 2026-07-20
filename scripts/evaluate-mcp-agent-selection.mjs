import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { evaluateMcpAgentSelection } from './lib/evaluate-mcp-agent-selection.mjs';

const [benchmarkPath, submissionsPath, outputPath] = process.argv.slice(2);
if (!benchmarkPath || !submissionsPath || !outputPath) throw new Error('Usage: node scripts/evaluate-mcp-agent-selection.mjs BENCHMARK.json RESPONSES.ndjson REPORT.json');
const benchmark = JSON.parse(await readFile(resolve(benchmarkPath), 'utf8'));
const submissions = (await readFile(resolve(submissionsPath), 'utf8')).split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line));
const report = evaluateMcpAgentSelection(benchmark, submissions);
await writeFile(resolve(outputPath), `${JSON.stringify(report, null, 2)}\n`, { mode: 0o600 });
console.log(`MCP agent benchmark: ${report.modelCount}/${report.requiredModelCount} model-client-tokenizer profiles; eligible=${report.eligible}`);
if (!report.eligible) process.exitCode = 1;
