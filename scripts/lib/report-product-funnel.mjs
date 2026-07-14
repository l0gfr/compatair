function completionRate(started, completed, warnings) {
	if (completed > started) {
		warnings.push('Le nombre de complétions dépasse les démarrages ; le taux est masqué.');
		return null;
	}
	return started ? Number((completed / started * 100).toFixed(1)) : null;
}

export function reportProductFunnel(aggregates) {
	if (aggregates?.schemaVersion !== '1.0.0' || !aggregates.calculator) throw new Error('Agrégat de funnel incompatible.');
	const warnings = [];
	const { started, completed } = aggregates.calculator;
	if (![aggregates.totalEvents, started, completed].every((value) => Number.isSafeInteger(value) && value >= 0) || aggregates.totalEvents !== started + completed) throw new Error('Compteurs de funnel incohérents.');
	return {
		schemaVersion: '1.0.0',
		sourceUpdatedAt: aggregates.updatedAt ?? null,
		totalEvents: aggregates.totalEvents,
		calculator: { started, completed, completionRatePercent: completionRate(started, completed, warnings) },
		dataQualityWarnings: warnings,
	};
}
