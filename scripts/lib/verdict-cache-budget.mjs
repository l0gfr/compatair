import { lstatSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

export function inspectVerdictCache(directory, limit = 64 * 1024 * 1024) {
	try {
		if (!lstatSync(directory).isDirectory()) return { ready: false };
		let bytes = 0, manifest = false;
		for (const name of readdirSync(directory)) {
			if (name !== 'manifest.json' && !/^[a-f0-9]{64}\.json\.gz$/.test(name)) return { ready: false };
			const stat = lstatSync(join(directory, name));
			if (!stat.isFile()) return { ready: false };
			bytes += stat.size;
			if (bytes > limit) return { ready: false, bytes };
			if (name === 'manifest.json') manifest = true;
		}
		return { ready: manifest, bytes };
	} catch { return { ready: false }; }
}
