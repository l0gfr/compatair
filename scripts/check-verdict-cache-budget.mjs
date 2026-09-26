import { appendFileSync } from 'node:fs';
import { inspectVerdictCache } from './lib/verdict-cache-budget.mjs';

const result = inspectVerdictCache('.astro/compatibility-cache-v1');
console.log(JSON.stringify(result));
if (!result.ready) console.warn('::warning::Calculation cache unavailable or outside its storage contract; upload skipped.');
if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `ready=${result.ready}\n`);
