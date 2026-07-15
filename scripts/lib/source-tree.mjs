import { lstat, readdir } from 'node:fs/promises';
import { join } from 'node:path';

export async function walkRegularSourceFiles(directory, { onFile, onUnsafeEntry }) {
	const directoryInfo = await lstat(directory);
	if (directoryInfo.isSymbolicLink()) {
		await onUnsafeEntry(directory, 'symbolic-link');
		return;
	}
	if (!directoryInfo.isDirectory()) {
		await onUnsafeEntry(directory, 'non-regular');
		return;
	}
	for (const name of await readdir(directory)) {
		const file = join(directory, name);
		const info = await lstat(file);
		if (info.isSymbolicLink()) {
			await onUnsafeEntry(file, 'symbolic-link');
			continue;
		}
		if (info.isDirectory()) {
			await walkRegularSourceFiles(file, { onFile, onUnsafeEntry });
			continue;
		}
		if (info.isFile()) {
			await onFile(file);
			continue;
		}
		await onUnsafeEntry(file, 'non-regular');
	}
}
