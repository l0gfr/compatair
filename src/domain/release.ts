export const RELEASE_SCHEMA_VERSION = '1.0.0';
export const releaseShaPattern = /^[0-9a-f]{40}$/;

export function createReleaseMetadata(gitSha = 'development') {
	if (gitSha !== 'development' && !releaseShaPattern.test(gitSha)) throw new Error('SHA de release invalide.');
	return { schemaVersion: RELEASE_SCHEMA_VERSION, gitSha } as const;
}
