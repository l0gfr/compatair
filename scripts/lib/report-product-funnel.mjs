import { normalizeProductFunnelAggregate, PRODUCT_FUNNEL_FAMILIES, PRODUCT_FUNNEL_SCHEMA_VERSION } from '../../server/product-funnel-aggregates.mjs';

function boundedRate(numerator, denominator, warnings, label) {
	if (numerator > denominator) {
		warnings.push(`${label} : le numérateur dépasse le dénominateur ; le taux est masqué.`);
		return null;
	}
	return denominator ? Number((numerator / denominator * 100).toFixed(1)) : null;
}

export function reportProductFunnel(aggregates) {
	const normalized = normalizeProductFunnelAggregate(aggregates);
	if (!normalized) throw new Error('Compteurs de funnel incohérents.');
	const warnings = [];
	const { started, completed } = normalized.calculator;
	const { displayed, selected, recalculated } = normalized.counterfactual;
	const families = Object.fromEntries(PRODUCT_FUNNEL_FAMILIES.map((family) => {
		const counts = normalized.counterfactual.byFamily[family];
		return [family, {
			...counts,
			selectionRatePercent: boundedRate(counts.selected, counts.displayed, warnings, `Famille ${family}, sélection`),
			recalculationSuccessRatePercent: boundedRate(counts.recalculated, counts.selected, warnings, `Famille ${family}, recalcul`),
		}];
	}));
	return {
		schemaVersion: PRODUCT_FUNNEL_SCHEMA_VERSION,
		sourceSchemaVersion: aggregates.schemaVersion,
		sourceUpdatedAt: normalized.updatedAt ?? null,
		totalEvents: normalized.totalEvents,
		calculator: { started, completed, completionRatePercent: boundedRate(completed, started, warnings, 'Calculateur') },
		counterfactual: {
			displayed,
			selected,
			recalculated,
			selectionRatePercent: boundedRate(selected, displayed, warnings, 'Recommandations, sélection'),
			recalculationSuccessRatePercent: boundedRate(recalculated, selected, warnings, 'Recommandations, recalcul'),
			families,
		},
		dataQualityWarnings: warnings,
		privacyBoundary: 'Compteurs fermés uniquement : aucune URL, valeur saisie, référence produit, adresse IP persistée, cookie ou événement brut.',
	};
}
