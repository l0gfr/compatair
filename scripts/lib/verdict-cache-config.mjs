import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

// Invalidate on implementation, validation/dependency or runtime changes even
// when CALCULATION_VERSION was not bumped. Catalog records are hashed separately.
export function verdictCacheConfig(root) {
	const files = [];
	function collect(directory) {
		for (const entry of readdirSync(join(root, directory), { withFileTypes: true })) {
			const file = `${directory}/${entry.name}`;
			if (entry.isDirectory()) collect(file);
			else if (entry.isFile() && /\.(ts|mjs|js|json)$/.test(entry.name) && !/\.test\.[^.]+$/.test(entry.name)) files.push(file);
		}
	}
	collect('src/domain');
	files.push('pnpm-lock.yaml', 'scripts/lib/verdict-cache-config.mjs');
	const digest = createHash('sha256').update(JSON.stringify({ format: 1, node: process.versions.node, v8: process.versions.v8, icu: process.versions.icu }));
	for (const file of files.sort()) digest.update(file).update('\0').update(readFileSync(join(root, file))).update('\0');
	return { directory: join(root, '.astro/compatibility-cache-v1'), fingerprint: digest.digest('hex') };
}
