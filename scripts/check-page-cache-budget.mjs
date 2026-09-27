import { appendFileSync, lstatSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const limit = 384 * 1024 * 1024;
let bytes = 0;
function inspect(directory) {
	for (const name of readdirSync(directory)) {
		const path = join(directory, name), stat = lstatSync(path);
		if (stat.isSymbolicLink()) throw new Error('symlink');
		if (stat.isDirectory()) inspect(path);
		else if (stat.isFile()) bytes += stat.size;
		else throw new Error('unsupported_file');
		if (bytes > limit) throw new Error('budget');
	}
}
let ready = false;
try { inspect('node_modules/.astro'); ready = bytes > 0; } catch { /* A disposable cache never blocks a cold build. */ }
console.log(JSON.stringify({ ready, bytes, limit }));
if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `ready=${ready}\n`);
