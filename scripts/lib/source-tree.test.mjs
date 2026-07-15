import { execFile } from 'node:child_process';
import { mkdtemp, mkdir, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, join } from 'node:path';
import { promisify } from 'node:util';
import { describe, expect, it } from 'vitest';
import { walkRegularSourceFiles } from './source-tree.mjs';

const execFileAsync = promisify(execFile);

describe('walkRegularSourceFiles', () => {
	it('visite uniquement les fichiers réguliers et refuse les liens symboliques', async () => {
		const root = await mkdtemp(join(tmpdir(), 'compatair-source-tree-'));
		try {
			const nested = join(root, 'nested');
			const linkedDirectory = join(root, 'linked-directory');
			await mkdir(nested);
			await writeFile(join(nested, 'source.ts'), 'export {}\n');
			await symlink(nested, linkedDirectory);

			const files = [];
			const unsafeEntries = [];
			await walkRegularSourceFiles(root, {
				onFile: (file) => files.push(basename(file)),
				onUnsafeEntry: (file, kind) => unsafeEntries.push({ name: basename(file), kind }),
			});

			expect(files).toEqual(['source.ts']);
			expect(unsafeEntries).toEqual([{ name: 'linked-directory', kind: 'symbolic-link' }]);

			const linkedFiles = [];
			const linkedRootEntries = [];
			await walkRegularSourceFiles(linkedDirectory, {
				onFile: (file) => linkedFiles.push(file),
				onUnsafeEntry: (file, kind) => linkedRootEntries.push({ name: basename(file), kind }),
			});
			expect(linkedFiles).toEqual([]);
			expect(linkedRootEntries).toEqual([{ name: 'linked-directory', kind: 'symbolic-link' }]);
		} finally {
			await rm(root, { recursive: true, force: true });
		}
	});

	it('refuse les entrées qui ne sont ni des fichiers réguliers ni des répertoires', async () => {
		const root = await mkdtemp(join(tmpdir(), 'compatair-source-tree-'));
		const pipePath = join(root, 'source.pipe');
		try {
			await execFileAsync('mkfifo', [pipePath]);

			const unsafeEntries = [];
			await walkRegularSourceFiles(root, {
				onFile: () => undefined,
				onUnsafeEntry: (file, kind) => unsafeEntries.push({ name: basename(file), kind }),
			});

			expect(unsafeEntries).toEqual([{ name: 'source.pipe', kind: 'non-regular' }]);
		} finally {
			await rm(root, { recursive: true, force: true });
		}
	});
});
