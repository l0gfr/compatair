const definitions = {
	largest_contentful_paint: { label: 'LCP', goodThreshold: 2500 },
	interaction_to_next_paint: { label: 'INP', goodThreshold: 200 },
	cumulative_layout_shift: { label: 'CLS', goodThreshold: .1 },
};

export function summarizeCruxRecord(payload) {
	const record = payload?.record;
	if (!record?.metrics) return { status: 'insufficient_data', metrics: {} };
	const metrics = Object.fromEntries(Object.entries(definitions).map(([key, definition]) => {
		const percentile = Number(record.metrics[key]?.percentiles?.p75);
		return [definition.label, Number.isFinite(percentile) ? { p75: percentile, good: percentile <= definition.goodThreshold } : null];
	}));
	const measured = Object.values(metrics).every(Boolean);
	return {
		status: measured ? 'measured' : 'insufficient_data',
		formFactor: record.key?.formFactor ?? null,
		collectionPeriod: record.collectionPeriod ?? null,
		metrics,
		passesCoreWebVitals: measured ? Object.values(metrics).every((metric) => metric.good) : null,
	};
}
