function isRecord(value) { return value !== null && typeof value === 'object' && !Array.isArray(value); }
function subset(expected, actual) {
	if (Array.isArray(expected)) return Array.isArray(actual) && expected.length === actual.length && expected.every((item, index) => subset(item, actual[index]));
	if (isRecord(expected)) return isRecord(actual) && Object.entries(expected).every(([key, value]) => Object.hasOwn(actual, key) && subset(value, actual[key]));
	return Object.is(expected, actual);
}
function ratio(numerator, denominator) { return denominator ? Number((numerator / denominator).toFixed(6)) : null; }
function percentile(values, fraction) {
	if (!values.length) return null;
	const sorted = [...values].sort((left, right) => left - right);
	return sorted[Math.min(sorted.length - 1, Math.ceil(sorted.length * fraction) - 1)];
}

export function evaluateMcpAgentSelection(benchmark, submissions) {
	if (!isRecord(benchmark) || benchmark.schemaVersion !== '1.0.0' || benchmark.caseCount !== 50 || !Array.isArray(benchmark.cases) || benchmark.cases.length !== 50) throw new Error('mcp_agent_benchmark_invalid');
	if (!Array.isArray(submissions) || submissions.length > 5_000) throw new Error('mcp_agent_submissions_invalid');
	const cases = new Map(benchmark.cases.map((item) => [item.case_id, item]));
	const models = new Map();
	for (const submission of submissions) {
		if (!isRecord(submission) || typeof submission.model !== 'string' || !submission.model.trim() || typeof submission.client !== 'string' || !submission.client.trim() || typeof submission.tokenizer !== 'string' || !submission.tokenizer.trim() || !cases.has(submission.case_id)) throw new Error('mcp_agent_submission_invalid');
		const modelKey = `${submission.model}\u0000${submission.client}\u0000${submission.tokenizer}`;
		const model = models.get(modelKey) ?? { model: submission.model, client: submission.client, tokenizer: submission.tokenizer, manifestTokens: [], responses: new Map() };
		if (model.responses.has(submission.case_id) || !Number.isSafeInteger(submission.manifest_tokens) || submission.manifest_tokens <= 0) throw new Error('mcp_agent_submission_invalid');
		model.manifestTokens.push(submission.manifest_tokens);
		model.responses.set(submission.case_id, submission);
		models.set(modelKey, model);
	}

	const modelReports = [...models.values()].map((model) => {
		let selections = 0, argumentsValid = 0, calculableTotal = 0, calculableSuccess = 0, honestMissing = 0, missingTotal = 0, contractMisunderstood = 0;
		const results = benchmark.cases.map((testCase) => {
			const response = model.responses.get(testCase.case_id);
			if (!response) return { case_id: testCase.case_id, missing: true, passed: false };
			const selection = response.selected_profile === testCase.expected.profile && response.selected_tool === testCase.expected.tool;
			const validArguments = selection && subset(testCase.expected.arguments, response.arguments);
			const status = response.result?.status;
			const reasonCode = response.result?.reason_code;
			const taskSuccess = testCase.calculable ? status === 'success' : status === 'insufficient_data' && reasonCode === 'source_data_missing';
			if (selection) selections += 1;
			if (validArguments) argumentsValid += 1;
			if (testCase.calculable) { calculableTotal += 1; if (selection && validArguments && taskSuccess) calculableSuccess += 1; }
			else { missingTotal += 1; if (selection && validArguments && taskSuccess) honestMissing += 1; }
			if (status === 'insufficient_data' && reasonCode === 'contract_misunderstood') contractMisunderstood += 1;
			return { case_id: testCase.case_id, selection, valid_arguments: validArguments, task_success: taskSuccess, passed: selection && validArguments && taskSuccess };
		});
		const coverage = ratio(model.responses.size, benchmark.caseCount);
		const calculableSuccessRate = ratio(calculableSuccess, calculableTotal);
		return {
			model: model.model, client: model.client, tokenizer: model.tokenizer, coverage,
			selection_success_rate: ratio(selections, benchmark.caseCount), argument_success_rate: ratio(argumentsValid, benchmark.caseCount),
			calculable_task_success_rate: calculableSuccessRate, honest_missing_data_rate: ratio(honestMissing, missingTotal),
			contract_misunderstood_insufficient_data: contractMisunderstood,
			manifest_tokens: { minimum: Math.min(...model.manifestTokens), p95: percentile(model.manifestTokens, .95), maximum: Math.max(...model.manifestTokens) },
			passes: coverage === 1 && calculableSuccessRate !== null && calculableSuccessRate >= benchmark.targets.calculableSuccessRate && contractMisunderstood === 0,
			results,
		};
	});

	return {
		schemaVersion: '1.0.0', benchmarkId: benchmark.benchmarkId, benchmarkVersion: benchmark.benchmarkVersion,
		modelCount: modelReports.length, requiredModelCount: benchmark.targets.minimumModels,
		eligible: modelReports.length >= benchmark.targets.minimumModels && modelReports.every((model) => model.passes),
		targets: benchmark.targets, models: modelReports,
	};
}
