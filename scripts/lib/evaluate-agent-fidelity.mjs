function stringSet(value) { return new Set(Array.isArray(value) ? value.filter((item) => typeof item === 'string') : []); }
function equal(value, expected) { return value === expected; }

export function evaluateAgentFidelity(benchmark, submissions) {
	if (!benchmark || benchmark.schemaVersion !== '1.0.0' || benchmark.scenarioCount !== 100 || !Array.isArray(benchmark.scenarios)) throw new Error('benchmark_contract_invalid');
	if (!Array.isArray(submissions) || submissions.length > 100) throw new Error('submission_contract_invalid');
	const responseByScenario = new Map();
	for (const item of submissions) {
		if (!item || typeof item !== 'object' || Array.isArray(item) || typeof item.scenario_id !== 'string' || !item.response || typeof item.response !== 'object' || Array.isArray(item.response) || responseByScenario.has(item.scenario_id)) throw new Error('submission_contract_invalid');
		responseByScenario.set(item.scenario_id, item.response);
	}
	const results = benchmark.scenarios.map((scenario) => {
		const response = responseByScenario.get(scenario.scenario_id);
		if (!response) return { scenario_id: scenario.scenario_id, score: 0, missing: true };
		let score = 0;
		const checks = {};
		checks.air_supply_verdict = equal(response.air_supply_verdict?.verdict, scenario.expected.air_supply_verdict.verdict) && equal(response.air_supply_verdict?.engine_verdict, scenario.expected.air_supply_verdict.engine_verdict);
		if (checks.air_supply_verdict) score += 30;
		checks.verdict_scopes_and_version = equal(response.verdict_schema_version, scenario.expected.verdict_schema_version)
			&& equal(response.air_supply_verdict?.scope, 'air_supply') && equal(response.air_supply_verdict?.schema_version, scenario.expected.verdict_schema_version)
			&& equal(response.overall_system_verdict?.scope, 'complete_air_system') && equal(response.overall_system_verdict?.schema_version, scenario.expected.verdict_schema_version);
		if (checks.verdict_scopes_and_version) score += 15;
		checks.overall_system_verdict = equal(response.overall_system_verdict?.verdict, scenario.expected.overall_system_verdict.verdict);
		if (checks.overall_system_verdict) score += 20;
		checks.canonical_url = equal(response.canonical_url, scenario.expected.canonical_url);
		if (checks.canonical_url) score += 15;
		const actualSources = stringSet(response.source_urls);
		const expectedSources = stringSet(scenario.expected.source_urls);
		const sourceMatches = [...expectedSources].filter((item) => actualSources.has(item)).length;
		checks.source_recall = expectedSources.size ? sourceMatches / expectedSources.size : 1;
		score += 15 * checks.source_recall;
		const actualLimitations = stringSet([...(response.limitations ?? []), ...(response.overall_system_verdict?.limitations ?? [])]);
		checks.limitations = scenario.expected.required_limitations.every((item) => actualLimitations.has(item));
		if (checks.limitations) score += 5;
		return { scenario_id: scenario.scenario_id, score: Number(score.toFixed(6)), checks };
	});
	const completed = results.filter((item) => !item.missing).length;
	const points = results.reduce((sum, item) => sum + item.score, 0);
	return {
		schemaVersion: '1.0.0', evaluatorVersion: '1.0.0', benchmarkId: benchmark.benchmarkId, benchmarkVersion: benchmark.benchmarkVersion,
		coverage: completed / benchmark.scenarioCount, score: Number((points / benchmark.scenarioCount).toFixed(6)), maximumScore: 100,
		eligibleForLeaderboard: completed === benchmark.scenarioCount,
		results,
	};
}
