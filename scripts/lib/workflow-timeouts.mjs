export function workflowTimeoutErrors(file, jobs) {
	const errors = [];
	for (const [name, job] of Object.entries(jobs)) {
		const maximum = file === '.github/workflows/ci.yml'
			? name === 'build' ? 35 : name === 'source-tests' ? 15 : 25
			: 15;
		const timeout = job?.['timeout-minutes'];
		if (!Number.isInteger(timeout) || timeout <= 0 || timeout > maximum) {
			errors.push(`${file}: durée maximale absente ou supérieure à ${maximum} minutes (${name})`);
		}
	}
	return errors;
}
