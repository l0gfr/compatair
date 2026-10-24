const sourceSha = '${{ github.sha }}';
const nodeVersion = '${{ needs.preflight.outputs.node_version }}';
const mainGate = "github.ref == 'refs/heads/main' && vars.DEPLOY_ENABLED == 'true'";
const buildCommand = 'pnpm build && pnpm data:validate && pnpm benchmark:mcp-startup && pnpm benchmark:publication-signatures';
const artifactId = '${{ needs.validate.outputs.release_artifact_id }}';
const downloadAction = 'actions/download-artifact@9000827ccba6bdab643e8b6fd33ac0654aef8333';
const timeouts = { preflight: 10, 'source-tests': 15, 'source-archive': 15, validate: 35, deploy: 15, storage: 5 };
const liveConditions = {
	'Enforce live append-only evidence history': "steps.production-invariants.outputs.available == 'true'",
	'Enforce live append-only observatory history': "steps.production-invariants.outputs.available == 'true'",
	'Enforce immutable live widget': "steps.production-invariants.outputs.available == 'true'",
	'Enforce current immutable live widget': "steps.production-invariants.outputs.current_widget_available == 'true'",
};
const liveCommands = {
	'Enforce live append-only evidence history': 'node scripts/assert-evidence-history-extension.mjs previous-evidence-history.json dist/data/evidence-history.json',
	'Enforce live append-only observatory history': 'node scripts/assert-observatory-history-extension.mjs previous-document-quality-observatory.json dist/data/document-quality-observatory.json',
	'Enforce immutable live widget': 'cmp --silent previous-compatair-widget.js dist/widget/v1.0.0/compatair-widget.js',
	'Enforce current immutable live widget': 'cmp --silent previous-compatair-widget-v1.1.0.js dist/widget/v1.1.0/compatair-widget.js',
};

const list = value => Array.isArray(value) ? value : typeof value === 'string' ? [value] : [];
const lines = step => typeof step?.run === 'string' ? step.run.split('\n').map(line => line.trim()) : [];
const environmentName = job => typeof job?.environment === 'string' ? job.environment : job?.environment?.name;

/** Validate the production DAG and its blocking gates without executing the workflow. */
export function productionWorkflowErrors(config) {
	const errors = [];
	const fail = message => errors.push(`.github/workflows/deploy-production.yml: ${message}`);
	const jobs = config?.jobs ?? {};
	const steps = job => Array.isArray(jobs[job]?.steps) ? jobs[job].steps : [];
	const equalList = (actual, expected) => JSON.stringify([...list(actual)].sort()) === JSON.stringify([...expected].sort());
	const requireNeeds = (job, expected) => {
		if (!equalList(jobs[job]?.needs, expected)) fail(`dépendances bloquantes incorrectes (${job})`);
	};
	const gate = (job, command, condition) => {
		const matches = steps(job).flatMap((step, index) => lines(step).includes(command) ? [index] : []);
		const index = matches[0] ?? -1;
		const step = steps(job)[index];
		if (matches.length !== 1 || step?.if !== condition || step?.['continue-on-error'] !== undefined) fail(`contrôle obligatoire absent, conditionnel ou dupliqué (${job}: ${command})`);
		return index;
	};
	const namedGate = (job, name, condition) => {
		const matches = steps(job).flatMap((step, index) => step.name === name ? [index] : []);
		const index = matches[0] ?? -1;
		const step = steps(job)[index];
		if (matches.length !== 1 || step?.if !== condition || step?.['continue-on-error'] !== undefined) fail(`étape obligatoire absente, conditionnelle ou dupliquée (${job}: ${name})`);
		return index;
	};
	const ordered = (job, indices) => {
		if (indices.some((index, position) => index < 0 || (position > 0 && index <= indices[position - 1]))) fail(`ordre des contrôles incorrect (${job})`);
	};

	if (JSON.stringify(config?.on?.push?.branches) !== JSON.stringify(['main']) || config?.on?.pull_request !== undefined || config?.on?.[['pull', 'request', 'target'].join('_')] !== undefined || config?.on?.workflow_run !== undefined) fail('la production doit être réservée à main, sans PR ni relance automatique');
	if (config?.on?.workflow_dispatch?.inputs?.recovery_mode?.type !== 'boolean' || config?.on?.workflow_dispatch?.inputs?.recovery_mode?.default !== false) fail('le mode restauration doit rester une option manuelle désactivée par défaut');
	if (config?.concurrency?.group !== 'production' || config?.concurrency?.['cancel-in-progress'] !== false) fail('la concurrence production doit préserver le déploiement en cours');
	if (config?.permissions?.contents !== 'read' || Object.values(config?.permissions ?? {}).some(value => value === 'write')) fail('les permissions globales doivent rester en lecture seule');
	if (!equalList(Object.keys(jobs), Object.keys(timeouts))) fail('les contrôles de production doivent rester répartis dans les six jobs prévus');
	if (jobs.preflight?.if !== mainGate) fail('le précontrôle doit vérifier main et DEPLOY_ENABLED');
	if (jobs.preflight?.outputs?.node_version !== '${{ steps.node.outputs.node-version }}') fail('le précontrôle doit exporter la version Node résolue');
	requireNeeds('preflight', []);
	for (const job of ['source-tests', 'source-archive', 'validate']) requireNeeds(job, ['preflight']);
	requireNeeds('deploy', ['preflight', 'source-tests', 'source-archive', 'validate']);
	requireNeeds('storage', ['deploy']);

	for (const [jobName, maximum] of Object.entries(timeouts)) {
		const job = jobs[jobName];
		if (!job) continue;
		if (job['runs-on'] !== 'ubuntu-24.04') fail(`runner identique requis (${jobName})`);
		if (!Number.isInteger(job['timeout-minutes']) || job['timeout-minutes'] <= 0 || job['timeout-minutes'] > maximum) fail(`durée maximale absente ou supérieure à ${maximum} minutes (${jobName})`);
		if (job['continue-on-error'] !== undefined) fail(`un job bloquant ne peut ignorer une erreur (${jobName})`);
		if (jobName !== 'preflight' && jobName !== 'storage' && job.if !== undefined) fail(`un job bloquant doit conserver la condition de succès implicite (${jobName})`);
		if (jobName === 'storage' && job.if !== undefined && job.if !== "github.ref == 'refs/heads/main'") fail('le nettoyage doit dépendre du succès du déploiement');
		if (jobName !== 'storage' && Object.values(job.permissions ?? {}).some(value => value === 'write')) fail(`permissions en écriture interdites (${jobName})`);
		const checkout = steps(jobName).filter(step => step.uses?.startsWith('actions/checkout@'));
		const node = steps(jobName).filter(step => step.uses?.startsWith('actions/setup-node@'));
		if (checkout.length !== 1 || checkout[0].with?.ref !== sourceSha || checkout[0].with?.['persist-credentials'] !== false || checkout[0].if !== undefined) fail(`checkout immuable du SHA exact requis (${jobName})`);
		if (node.length !== 1 || node[0].if !== undefined || node[0].with?.['check-latest'] !== false) fail(`installation Node déterministe requise (${jobName})`);
		if (jobName === 'preflight') {
			if (node[0]?.id !== 'node' || node[0]?.with?.['node-version-file'] !== '.nvmrc') fail('le précontrôle doit résoudre Node depuis .nvmrc');
		} else if (jobName === 'storage') {
			if (node[0]?.with?.['node-version-file'] !== '.nvmrc') fail('le nettoyage doit conserver la version Node prévue dans .nvmrc');
		} else if (node[0]?.with?.['node-version'] !== nodeVersion || node[0]?.with?.['node-version-file'] !== undefined) fail(`la version Node exacte doit venir du précontrôle (${jobName})`);
		for (const step of steps(jobName)) {
			if (step.uses && !/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_./-]+@[0-9a-f]{40}$/.test(step.uses)) fail(`action non épinglée à un SHA complet (${jobName})`);
			if (step['continue-on-error'] !== undefined) fail(`une étape ne peut ignorer une erreur (${jobName}: ${step.name ?? step.id ?? 'sans nom'})`);
			if (/rerun-failed-jobs|gh\s+run\s+rerun/.test(step.run ?? '')) fail('les relances automatiques sont interdites');
		}
	}
	if (jobs.storage?.permissions?.contents !== 'read' || jobs.storage?.permissions?.actions !== 'write') fail('seul le job de nettoyage doit disposer de actions: write');
	for (const job of ['validate', 'deploy']) if (environmentName(jobs[job]) !== 'production') fail(`environnement production requis (${job})`);
	for (const job of ['preflight', 'source-tests', 'source-archive', 'validate', 'deploy']) {
		const install = gate(job, 'pnpm install --frozen-lockfile');
		const pnpm = gate(job, 'npm install --global --ignore-scripts pnpm@10.34.4');
		const checkoutIndex = steps(job).findIndex(step => step.uses?.startsWith('actions/checkout@'));
		const nodeIndex = steps(job).findIndex(step => step.uses?.startsWith('actions/setup-node@'));
		ordered(job, [checkoutIndex, nodeIndex, pnpm, install]);
		if (job === 'preflight') ordered(job, [install, gate(job, 'pnpm security:audit'), gate(job, 'pnpm lint:source')]);
		else {
			const supplyChain = gate(job, 'pnpm security:supply-chain');
			ordered(job, [install, supplyChain]);
			if (job === 'source-tests') ordered(job, [supplyChain, gate(job, 'pnpm validate:source')]);
			if (job === 'source-archive') ordered(job, [supplyChain, gate(job, 'pnpm archive:verify')]);
			if (job === 'validate') ordered(job, [supplyChain, gate(job, buildCommand)]);
		}
	}
	const buildSteps = Object.entries(jobs).flatMap(([job, data]) => (data?.steps ?? []).filter(step => /\bpnpm\s+(?:run\s+)?build\b|\bastro\s+build\b|\bpnpm\s+(?:validate(?=\s|$)|validate:(?:full|main)(?=\s|$))/.test(step.run ?? '')).map(step => ({ job, step })));
	if (buildSteps.length !== 1 || buildSteps[0]?.job !== 'validate' || buildSteps[0]?.step.run !== buildCommand || buildSteps[0]?.step.env?.COMPATAIR_RELEASE_SHA !== sourceSha) fail('un seul build complet du SHA exact doit être exécuté dans validate');

	const build = gate('validate', buildCommand);
	const repository = namedGate('validate', 'Enforce repository append-only baseline');
	for (const command of [
		'node scripts/assert-evidence-history-extension.mjs previous-repository-evidence-history.json dist/data/evidence-history.json',
		'node scripts/assert-observatory-history-extension.mjs previous-repository-observatory-history.json dist/data/document-quality-observatory.json',
	]) if (gate('validate', command) !== repository) fail('les invariants Git doivent être contrôlés dans la même étape bloquante');
	const production = namedGate('validate', 'Fetch current production invariants');
	const fetchInvariants = steps('validate')[production];
	if (fetchInvariants?.id !== 'production-invariants' || fetchInvariants.env?.RECOVERY_MODE !== "${{ github.event_name == 'workflow_dispatch' && inputs.recovery_mode || false }}" || !['https://compatair.fr/data/evidence-history.json', 'https://compatair.fr/widget/v1.0.0/compatair-widget.js', 'https://compatair.fr/data/document-quality-observatory.json', 'https://compatair.fr/widget/v1.1.0/compatair-widget.js'].every(url => fetchInvariants.run?.includes(url)) || !fetchInvariants.run?.includes('if [[ "$RECOVERY_MODE" != "true" ]]; then')) fail('les invariants live doivent rester bloquants hors restauration manuelle explicite');
	const live = Object.entries(liveConditions).map(([name, condition]) => {
		const index = namedGate('validate', name, condition);
		if (gate('validate', liveCommands[name], condition) !== index) fail(`commande de contrôle live absente (${name})`);
		return index;
	});
	const sign = gate('validate', 'pnpm data:sign');
	const verify = gate('validate', 'pnpm data:verify-signatures');
	if (sign !== verify) fail('la signature et sa vérification doivent rester dans la même étape bloquante');
	ordered('validate', [build, repository, production, ...live, sign, gate('validate', 'node scripts/audit-dist.mjs'), namedGate('validate', 'Select the hosted Chrome browser'), gate('validate', 'pnpm lighthouse:production'), gate('validate', 'pnpm lighthouse:summary'), gate('validate', 'node scripts/check-page-cache-budget.mjs'), gate('validate', 'node scripts/check-page-calculation-cache.mjs'), gate('validate', 'pnpm crux:report'), namedGate('validate', 'Package immutable release'), namedGate('validate', 'Bound compressed release storage'), namedGate('validate', 'Upload release artifact')]);
	for (const [restoreName, restoreId, saveName, budgetId, cachePath, budgetCommand] of [
		['Restore bounded page calculations', 'page-calculations', 'Save verified page calculations', 'page-calculations-budget', '.astro/page-calculations-v1', 'node scripts/check-page-calculation-cache.mjs'],
		['Restore incremental static pages', 'page-cache', 'Save incremental static pages', 'page-cache-budget', 'node_modules/.astro', 'node scripts/check-page-cache-budget.mjs'],
	]) {
		const restore = namedGate('validate', restoreName);
		const saveCondition = `steps.${restoreId}.outputs.cache-hit != 'true' && steps.${budgetId}.outputs.ready == 'true'`;
		const save = namedGate('validate', saveName, saveCondition);
		const restoreStep = steps('validate')[restore];
		const saveStep = steps('validate')[save];
		const budget = steps('validate').findIndex(step => step.id === budgetId);
		if (gate('validate', budgetCommand) !== budget) fail(`le signal de sauvegarde doit provenir du contrôle de budget (${restoreId})`);
		ordered('validate', [restore, build, budget, save]);
		if (restoreStep?.id !== restoreId || !restoreStep.uses?.startsWith('actions/cache/restore@') || restoreStep.with?.path !== cachePath || !saveStep?.uses?.startsWith('actions/cache/save@') || saveStep.with?.path !== cachePath || saveStep.with?.key !== `\${{ steps.${restoreId}.outputs.cache-primary-key }}`) fail(`cache borné ou correspondance restauration/sauvegarde incorrecte (${restoreId})`);
	}
	const packageBudget = steps('validate').find(step => step.name === 'Bound compressed release storage');
	if (!packageBudget?.run?.includes('release_bytes > 201326592')) fail('le paquet doit conserver son plafond de 192 Mio');
	const prepare = gate('validate', 'node scripts/production-artifact.mjs prepare');
	if (prepare !== namedGate('validate', 'Prepare verified release handoff')) fail('la préparation de l’artefact vérifié doit rester une étape bloquante');
	ordered('validate', [namedGate('validate', 'Bound compressed release storage'), prepare, namedGate('validate', 'Upload release artifact')]);
	const releaseUpload = steps('validate').find(step => step.name === 'Upload release artifact');
	const releasePaths = ['compatair-${{ github.sha }}.tar.xz', 'compatair-${{ github.sha }}.tar.xz.sha256', 'compatair-admin-${{ github.sha }}.tar.gz', 'compatair-admin-${{ github.sha }}.tar.gz.sha256', 'compatair-plan-${{ github.sha }}.json.gz', 'compatair-plan-${{ github.sha }}.json.gz.sha256'];
	if (releaseUpload?.id !== 'release_artifact' || !releaseUpload.uses?.startsWith('actions/upload-artifact@') || releaseUpload.with?.name !== 'compatair-production-${{ github.sha }}' || !equalList(releaseUpload.with?.path?.trim().split('\n').map(line => line.trim()), releasePaths) || releaseUpload.with?.['if-no-files-found'] !== 'error' || releaseUpload.with?.['retention-days'] !== 7 || releaseUpload.with?.['compression-level'] !== 0 || releaseUpload.with?.overwrite !== undefined) fail('le paquet de release doit rester immuable, complet, compact et conservé sept jours');
	if (jobs.validate?.outputs?.release_artifact_id !== '${{ steps.release_artifact.outputs.artifact-id }}') fail('validate doit exporter l’identifiant de l’artefact exact');
	for (const [name, condition, retention] of [
		['Upload compact Lighthouse summary', "${{ always() && hashFiles('.lighthouseci/reports/summary.json') != '' }}", 7],
		['Upload full Lighthouse diagnostics on failure', "${{ failure() && hashFiles('.lighthouseci/reports/**') != '' }}", 3],
	]) {
		const diagnostic = steps('validate')[namedGate('validate', name, condition)];
		if (!diagnostic?.uses?.startsWith('actions/upload-artifact@') || diagnostic.with?.['if-no-files-found'] !== 'error' || diagnostic.with?.['retention-days'] !== retention) fail(`les diagnostics Lighthouse et leur rétention doivent être conservés (${name})`);
	}

	const clock = namedGate('deploy', 'Record validation clock');
	if (clock !== 0 || steps('deploy')[clock]?.id !== 'validation_clock') fail('l’horloge de déploiement doit démarrer à la première étape');
	const downloads = steps('deploy').flatMap((step, index) => step.uses?.startsWith('actions/download-artifact@') ? [index] : []);
	const download = downloads[0] ?? -1;
	const downloadStep = steps('deploy')[download];
	if (downloads.length !== 1 || downloadStep?.uses !== downloadAction || downloadStep.with?.['artifact-ids'] !== artifactId || downloadStep.with?.['merge-multiple'] !== true || downloadStep.with?.['digest-mismatch'] !== 'error' || downloadStep.with?.path !== '.' || downloadStep.if !== undefined || Object.keys(downloadStep.with ?? {}).some(key => !['artifact-ids', 'merge-multiple', 'digest-mismatch', 'path'].includes(key))) fail('le téléchargement doit vérifier l’artefact immuable du même run, sans sélection par nom');
	const identity = namedGate('deploy', 'Verify release artifact identity');
	const identityStep = steps('deploy')[identity];
	if (identityStep?.env?.RELEASE_ARTIFACT_ID !== artifactId || identityStep.shell !== 'bash' || identityStep.run !== '[[ "$RELEASE_ARTIFACT_ID" =~ ^[1-9][0-9]*$ ]]') fail('un identifiant d’artefact numérique non vide est obligatoire avant téléchargement');
	const checkpoint = gate('deploy', 'node scripts/verify-indexation-release.mjs');
	const restore = gate('deploy', 'node scripts/production-artifact.mjs restore');
	if (restore !== namedGate('deploy', 'Restore verified release handoff')) fail('la restauration vérifiée doit rester une étape bloquante');
	const ssh = namedGate('deploy', 'Configure SSH');
	const activation = namedGate('deploy', 'Transfer and activate release');
	const smoke = gate('deploy', 'node scripts/smoke-live-http.mjs');
	const seo = gate('deploy', 'node scripts/verify-live-seo.mjs');
	if (smoke !== seo || steps('deploy')[smoke]?.env?.COMPATAIR_EXPECTED_RELEASE_SHA !== sourceSha) fail('les contrôles live doivent vérifier le SHA exact après activation');
	ordered('deploy', [clock, gate('deploy', 'pnpm security:supply-chain'), identity, download, restore, checkpoint, ssh, activation, smoke, gate('deploy', 'pnpm indexnow:submit'), namedGate('deploy', 'Archive signed production invariants')]);
	if (steps('deploy')[checkpoint]?.id !== 'seo_checkpoint' || jobs.deploy?.outputs?.previous_release_sha !== '${{ steps.seo_checkpoint.outputs.previous_release_sha }}') fail('le SHA précédent doit provenir du checkpoint SEO validé');
	const transfer = steps('deploy')[activation];
	if (transfer?.env?.COMPATAIR_VALIDATION_STARTED_AT !== '${{ steps.validation_clock.outputs.started_at }}' || !/local remaining=\$\(\(15 \* 60 - \(10#\$now - 10#\$validation_started\) - 60\)\)/.test(transfer.run ?? '') || !/remaining < 600/.test(transfer.run ?? '') || !/StrictHostKeyChecking=yes/.test(transfer.run ?? '') || !/ConnectionAttempts=1/.test(transfer.run ?? '')) fail('l’activation doit préserver la réserve de 600 secondes, le setup de 60 secondes et SSH strict sans relance');
	const invariants = steps('deploy').find(step => step.name === 'Archive signed production invariants');
	if (!invariants?.uses?.startsWith('actions/upload-artifact@') || invariants.with?.name !== 'compatair-invariants-${{ github.sha }}' || invariants.with?.['if-no-files-found'] !== 'error' || invariants.with?.['retention-days'] !== 90 || !equalList(invariants.with?.path?.trim().split('\n').map(line => line.trim()), ['dist/data/evidence-history.json', 'dist/data/release.json', 'dist/data/signatures.json', 'dist/data/signing-keys.json', 'dist/widget/v1.0.0/compatair-widget.js', 'dist/widget/v1.1.0/compatair-widget.js', 'config/immutable-assets.json'])) fail('les invariants signés et widgets immuables doivent être archivés pendant 90 jours');
	const prune = gate('storage', 'node scripts/prune-actions-storage.mjs --apply');
	if (steps('storage')[prune]?.env?.COMPATAIR_PREVIOUS_RELEASE_SHA !== '${{ needs.deploy.outputs.previous_release_sha }}') fail('le nettoyage doit préserver le SHA précédent validé au déploiement');
	return errors;
}
