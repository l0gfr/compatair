import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { agentFidelityBenchmark } from '../data/agent-fidelity';
import { evaluateAgentFidelity } from '../../scripts/lib/evaluate-agent-fidelity.mjs';

function expectedResponse(scenario: (typeof agentFidelityBenchmark.scenarios)[number]) {
	return {
		verdict_schema_version: scenario.expected.verdict_schema_version,
		air_supply_verdict: { schema_version: scenario.expected.verdict_schema_version, ...scenario.expected.air_supply_verdict },
		overall_system_verdict: { schema_version: scenario.expected.verdict_schema_version, ...scenario.expected.overall_system_verdict, limitations: scenario.expected.required_limitations },
		canonical_url: scenario.expected.canonical_url,
		source_urls: scenario.expected.source_urls,
		limitations: scenario.expected.required_limitations,
	};
}

describe('public agent fidelity benchmark', () => {
	it('publishes exactly 100 deterministic, scoped and attributable scenarios', () => {
		expect(agentFidelityBenchmark.scenarioCount).toBe(100);
		expect(new Set(agentFidelityBenchmark.scenarios.map((item) => item.scenario_id)).size).toBe(100);
		expect(agentFidelityBenchmark.scenarios.every((item) => item.expected.air_supply_verdict.scope === 'air_supply')).toBe(true);
		expect(agentFidelityBenchmark.scenarios.every((item) => item.expected.overall_system_verdict.scope === 'complete_air_system')).toBe(true);
		expect(agentFidelityBenchmark.scenarios.every((item) => item.expected.canonical_url.startsWith('https://compatair.fr/'))).toBe(true);
		const { integrity, ...data } = agentFidelityBenchmark;
		expect(integrity.digest).toBe(createHash('sha256').update(JSON.stringify(data)).digest('hex'));
	});

	it('scores complete exact answers and rejects partial leaderboard eligibility', () => {
		const complete = agentFidelityBenchmark.scenarios.map((scenario) => ({ scenario_id: scenario.scenario_id, response: expectedResponse(scenario) }));
		expect(evaluateAgentFidelity(agentFidelityBenchmark, complete)).toMatchObject({ coverage: 1, score: 100, eligibleForLeaderboard: true });
		expect(evaluateAgentFidelity(agentFidelityBenchmark, complete.slice(0, 99))).toMatchObject({ coverage: .99, eligibleForLeaderboard: false });
	});

	it('penalizes attribution and scope loss independently', () => {
		const scenario = agentFidelityBenchmark.scenarios[0];
		const response: any = expectedResponse(scenario);
		response.canonical_url = 'https://compatair.fr/';
		response.air_supply_verdict.scope = 'complete_air_system';
		const result = evaluateAgentFidelity(agentFidelityBenchmark, [{ scenario_id: scenario.scenario_id, response }]);
		expect(result.results[0].checks).toMatchObject({ canonical_url: false, verdict_scopes_and_version: false });
	});
});
