import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { parseDocument } from 'yaml';
import { productionWorkflowErrors } from './production-workflow-policy.mjs';

const production = parseDocument(readFileSync(new URL('../../.github/workflows/deploy-production.yml', import.meta.url), 'utf8')).toJS();
const step = (config, job, name) => config.jobs[job].steps.find(item => item.name === name);
const commandStep = (config, job, command) => config.jobs[job].steps.find(item => item.run?.split('\n').map(line => line.trim()).includes(command));
const rejects = mutate => {
	const config = structuredClone(production);
	mutate(config);
	expect(productionWorkflowErrors(config).length).toBeGreaterThan(0);
};
const gates = [
	['preflight', 'pnpm security:audit'],
	['preflight', 'pnpm lint:source'],
	['source-tests', 'pnpm security:supply-chain'],
	['source-tests', 'pnpm validate:source'],
	['source-archive', 'pnpm security:supply-chain'],
	['source-archive', 'pnpm archive:verify'],
	['validate', 'pnpm security:supply-chain'],
	['validate', 'pnpm build && pnpm data:validate && pnpm benchmark:mcp-startup && pnpm benchmark:publication-signatures'],
	['validate', 'node scripts/assert-evidence-history-extension.mjs previous-repository-evidence-history.json dist/data/evidence-history.json'],
	['validate', 'node scripts/assert-observatory-history-extension.mjs previous-repository-observatory-history.json dist/data/document-quality-observatory.json'],
	['validate', 'pnpm data:sign'],
	['validate', 'pnpm data:verify-signatures'],
	['validate', 'node scripts/audit-dist.mjs'],
	['validate', 'pnpm lighthouse:production'],
	['validate', 'pnpm lighthouse:summary'],
	['validate', 'node scripts/check-page-cache-budget.mjs'],
	['validate', 'node scripts/check-page-calculation-cache.mjs'],
	['validate', 'pnpm crux:report'],
	['validate', 'node scripts/production-artifact.mjs prepare'],
	['deploy', 'pnpm security:supply-chain'],
	['deploy', 'node scripts/production-artifact.mjs restore'],
	['deploy', 'node scripts/verify-indexation-release.mjs'],
	['deploy', 'node scripts/smoke-live-http.mjs'],
	['deploy', 'node scripts/verify-live-seo.mjs'],
	['deploy', 'pnpm indexnow:submit'],
	['storage', 'node scripts/prune-actions-storage.mjs --apply'],
];

describe('production workflow blocking DAG', () => {
	it('accepts the actual workflow without changing its input', () => {
		const config = structuredClone(production);
		expect(productionWorkflowErrors(config)).toEqual([]);
		expect(config).toEqual(production);
	});
	it.each([undefined, null, {}])('fails closed when the configuration is absent: %s', config => {
		expect(productionWorkflowErrors(config).length).toBeGreaterThan(0);
	});
	it.each(gates)('rejects removing the blocking command %s: %s', (job, command) => {
		rejects(config => { commandStep(config, job, command).run = commandStep(config, job, command).run.replace(command, 'echo skipped'); });
	});
	it.each(gates)('rejects a conditional or ignored blocking command %s: %s', (job, command) => {
		for (const override of [{ if: 'always()' }, { 'continue-on-error': true }]) rejects(config => Object.assign(commandStep(config, job, command), override));
	});
	it.each(['source-tests', 'source-archive', 'validate', 'deploy', 'storage'])('rejects removing required dependencies for %s', job => {
		rejects(config => { delete config.jobs[job].needs; });
	});
	it.each(['source-tests', 'source-archive', 'validate', 'deploy'])('rejects overriding implicit success for %s', job => {
		for (const condition of ['always()', 'success() || failure()', "github.ref == 'refs/heads/main'"]) rejects(config => { config.jobs[job].if = condition; });
	});
	it.each(['source-tests', 'source-archive', 'validate'])('keeps %s independent of its parallel siblings', job => {
		rejects(config => { config.jobs[job].needs = ['preflight', job === 'validate' ? 'source-tests' : 'validate']; });
	});
	it.each(['preflight', 'source-tests', 'source-archive', 'validate', 'deploy', 'storage'])('rejects missing jobs and increased timeouts for %s', job => {
		rejects(config => { delete config.jobs[job]; });
		rejects(config => { config.jobs[job]['timeout-minutes'] += 1; });
		rejects(config => { config.jobs[job]['continue-on-error'] = true; });
		rejects(config => { config.jobs[job]['runs-on'] = 'ubuntu-latest'; });
		rejects(config => { config.jobs[job].steps.find(item => item.uses?.startsWith('actions/checkout@')).with.ref = 'main'; });
		rejects(config => { config.jobs[job].steps.find(item => item.uses?.startsWith('actions/checkout@')).with['persist-credentials'] = true; });
	});
	it.each(['source-tests', 'source-archive', 'validate', 'deploy'])('pins the same exact Node version for %s', job => {
		rejects(config => { config.jobs[job].steps.find(item => item.uses?.startsWith('actions/setup-node@')).with['node-version'] = '24'; });
	});
	it('rejects building twice, building outside validate and replacing the explicit generated-data gates', () => {
		rejects(config => { config.jobs.deploy.steps.unshift({ run: 'pnpm build' }); });
		rejects(config => { step(config, 'validate', 'Build once and validate generated snapshots').run = 'pnpm validate:full'; });
		rejects(config => { step(config, 'validate', 'Build once and validate generated snapshots').run += ' && pnpm build'; });
		rejects(config => { step(config, 'validate', 'Build once and validate generated snapshots').env.COMPATAIR_RELEASE_SHA = '${{ github.event.before }}'; });
	});
	it('rejects a command failure hidden by a shell fallback', () => {
		rejects(config => { commandStep(config, 'source-tests', 'pnpm validate:source').run += ' || true'; });
		rejects(config => { commandStep(config, 'source-archive', 'pnpm archive:verify').run += ' || true'; });
	});
	it('requires every direct deployment dependency, including both parallel controls', () => {
		for (const name of ['preflight', 'source-tests', 'source-archive', 'validate']) rejects(config => { config.jobs.deploy.needs = config.jobs.deploy.needs.filter(job => job !== name); });
	});
	it('rejects late or conditional artifact identity, restore, checkpoint and activation gates', () => {
		for (const name of ['Verify release artifact identity', 'Restore verified release handoff', 'Verify SEO publication checkpoint before deployment', 'Configure SSH', 'Transfer and activate release', 'Verify live HTTPS surface', 'Archive signed production invariants']) {
			rejects(config => { step(config, 'deploy', name).if = 'always()'; });
			rejects(config => { const index = config.jobs.deploy.steps.findIndex(item => item.name === name); config.jobs.deploy.steps.unshift(config.jobs.deploy.steps.splice(index, 1)[0]); });
		}
	});
	it('does not allow a new run or artifact name to replace the immutable artifact ID', () => {
		for (const override of [{ 'artifact-ids': '123' }, { name: 'release' }, { 'run-id': '${{ github.run_id }}' }, { 'digest-mismatch': 'warn' }, { path: '/tmp/another-release' }, { 'merge-multiple': false }]) rejects(config => Object.assign(step(config, 'deploy', 'Download verified release artifact').with, override));
		rejects(config => { delete step(config, 'deploy', 'Verify release artifact identity').env.RELEASE_ARTIFACT_ID; });
		rejects(config => { step(config, 'deploy', 'Verify release artifact identity').run = 'test -n "$RELEASE_ARTIFACT_ID"'; });
		rejects(config => { delete config.jobs.validate.outputs.release_artifact_id; });
	});
	it('keeps handoff checksums, immutable storage and their budget', () => {
		rejects(config => { step(config, 'validate', 'Upload release artifact').with.path = 'dist'; });
		rejects(config => { step(config, 'validate', 'Upload release artifact').with.overwrite = true; });
		rejects(config => { step(config, 'validate', 'Upload release artifact').with['retention-days'] = 90; });
		rejects(config => { step(config, 'validate', 'Bound compressed release storage').run = 'echo no budget'; });
		rejects(config => { step(config, 'validate', 'Save incremental static pages').if = 'always()'; });
		rejects(config => { step(config, 'validate', 'Save verified page calculations').with.key = 'unbounded'; });
	});
	it('preserves both repository and live history checks, including the explicit recovery boundary', () => {
		for (const name of ['Enforce live append-only evidence history', 'Enforce live append-only observatory history', 'Enforce immutable live widget', 'Enforce current immutable live widget']) {
			rejects(config => { step(config, 'validate', name).run = 'echo skipped'; });
			rejects(config => { step(config, 'validate', name).if = 'false'; });
		}
		rejects(config => { step(config, 'validate', 'Fetch current production invariants').env.RECOVERY_MODE = true; });
		rejects(config => { config.on.workflow_dispatch.inputs.recovery_mode.default = true; });
	});
	it('keeps signed production evidence and compact diagnostics with their storage limits', () => {
		rejects(config => { step(config, 'deploy', 'Archive signed production invariants').with.path = 'dist/data/release.json'; });
		rejects(config => { step(config, 'deploy', 'Archive signed production invariants').with['retention-days'] = 1; });
		for (const name of ['Upload compact Lighthouse summary', 'Upload full Lighthouse diagnostics on failure']) rejects(config => { delete step(config, 'validate', name).uses; });
		rejects(config => { step(config, 'validate', 'Bound page calculation cache storage').id = 'unrelated-budget'; });
	});
	it('preserves signature, HTML, Lighthouse and handoff order before activation', () => {
		for (const name of ['Sign published data snapshots', 'Check generated HTML and internal links', 'Lighthouse performance, accessibility and SEO', 'Prepare verified release handoff']) rejects(config => { const index = config.jobs.validate.steps.findIndex(item => item.name === name); config.jobs.validate.steps.unshift(config.jobs.validate.steps.splice(index, 1)[0]); });
	});
	it('preserves the activation time reserve, SSH checks and exact live SHA', () => {
		rejects(config => { step(config, 'deploy', 'Transfer and activate release').run = step(config, 'deploy', 'Transfer and activate release').run.replace('remaining < 600', 'remaining < 60'); });
		rejects(config => { step(config, 'deploy', 'Transfer and activate release').run = step(config, 'deploy', 'Transfer and activate release').run.replace('15 * 60', '60 * 60'); });
		rejects(config => { step(config, 'deploy', 'Transfer and activate release').run = step(config, 'deploy', 'Transfer and activate release').run.replace('StrictHostKeyChecking=yes', 'StrictHostKeyChecking=no'); });
		rejects(config => { step(config, 'deploy', 'Verify live HTTPS surface').env.COMPATAIR_EXPECTED_RELEASE_SHA = 'main'; });
	});
	it('limits write permissions and cleanup to the successfully activated release', () => {
		rejects(config => { config.permissions.actions = 'write'; });
		rejects(config => { config.jobs.validate.permissions = { actions: 'write' }; });
		rejects(config => { config.jobs.storage.needs = 'validate'; });
		rejects(config => { config.jobs.storage.if = 'always()'; });
		rejects(config => { commandStep(config, 'storage', 'node scripts/prune-actions-storage.mjs --apply').env.COMPATAIR_PREVIOUS_RELEASE_SHA = '${{ needs.validate.outputs.previous_release_sha }}'; });
	});
	it('rejects non-main production, overlapping cancellation, unpinned actions and automatic reruns', () => {
		rejects(config => { config.on.push.branches.push('other'); });
		rejects(config => { config.on.pull_request = {}; });
		rejects(config => { config.on.workflow_run = {}; });
		rejects(config => { config.concurrency['cancel-in-progress'] = true; });
		rejects(config => { config.jobs.preflight.steps[0].uses = 'actions/checkout@main'; });
		rejects(config => { config.jobs.deploy.steps.push({ run: 'gh run rerun 1234' }); });
	});
});
