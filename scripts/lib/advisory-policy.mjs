const SEVERITY_RANK = new Map([
	['info', 0],
	['low', 1],
	['moderate', 2],
	['high', 3],
	['critical', 4],
]);

export function advisoryBlocksRelease(advisory, directRuntimeDependencies) {
	if (directRuntimeDependencies.has(advisory.packageName)) return true;
	return (SEVERITY_RANK.get(advisory.severity) ?? Number.POSITIVE_INFINITY) >= SEVERITY_RANK.get('high');
}

export function classifyNpmAdvisories(response, directRuntimeDependencies) {
	const advisories = Object.entries(response).flatMap(([packageName, entries]) =>
		(entries ?? []).map((entry) => ({ packageName, ...entry })),
	);
	const blocking = advisories.filter((advisory) => advisoryBlocksRelease(advisory, directRuntimeDependencies));
	return { advisories, blocking };
}
