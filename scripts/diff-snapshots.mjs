import { readFile, writeFile } from 'node:fs/promises';
const [previousFile, currentFile, reportFile = 'snapshot-diff.json'] = process.argv.slice(2);
if (!previousFile || !currentFile) throw new Error('Usage: node scripts/diff-snapshots.mjs previous.json current.json [report.json]');
const previous = JSON.parse(await readFile(previousFile, 'utf8')); const current = JSON.parse(await readFile(currentFile, 'utf8'));
const index = (values = []) => new Map(values.map((item) => [item.id, item]));
function changes(beforeValues, afterValues) { const before = index(beforeValues), after = index(afterValues); return { added: [...after.keys()].filter((id) => !before.has(id)), removed: [...before.keys()].filter((id) => !after.has(id)), changed: [...after.keys()].filter((id) => before.has(id) && JSON.stringify(before.get(id)) !== JSON.stringify(after.get(id))) }; }
const report = { generatedAt: new Date().toISOString(), compressors: changes(previous.compressors, current.compressors), tools: changes(previous.tools, current.tools), offers: changes(previous.offers, current.offers) };
await writeFile(reportFile, `${JSON.stringify(report, null, 2)}\n`, { flag: 'wx' }).catch(async (error) => { if (error.code !== 'EEXIST') throw error; await writeFile(reportFile, `${JSON.stringify(report, null, 2)}\n`); });
console.log(JSON.stringify(report));
if ((previous.offers?.length ?? 0) >= 10 && (current.offers?.length ?? 0) < previous.offers.length * .5) { console.error('Blocage : disparition de plus de 50 % des offres.'); process.exit(1); }
