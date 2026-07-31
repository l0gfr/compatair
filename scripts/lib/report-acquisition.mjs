function ratio(numerator, denominator) { return denominator > 0 ? Number((numerator / denominator).toFixed(6)) : null; }

export function buildAcquisitionReport(aggregate) {
	if (!aggregate || aggregate.schemaVersion !== '1.0.0' || !Array.isArray(aggregate.buckets)) throw new Error('acquisition_aggregate_schema_mismatch');
	const rows = new Map();
	for (const bucket of aggregate.buckets) {
		const key = `${bucket.channel}\u0000${bucket.template}`;
		const row = rows.get(key) ?? { channel: bucket.channel, template: bucket.template, views: 0, calculator_intents: 0, merchant_interests: 0, decision_requests: 0, successes: 0, insufficient_data: 0, incompatible: 0, errors: 0, canonical_follows: 0, offer_outbounds: 0, conversions: 0, citation_acknowledged: 0 };
		if (bucket.action === 'view') row.views += bucket.count;
		if (bucket.action === 'calculator_intent') row.calculator_intents += bucket.count;
		if (bucket.action === 'merchant_interest') row.merchant_interests += bucket.count;
		if (bucket.action === 'decision_request') {
			row.decision_requests += bucket.count;
			if (bucket.outcome === 'success') row.successes += bucket.count;
			if (bucket.outcome === 'insufficient_data') row.insufficient_data += bucket.count;
			if (bucket.outcome === 'incompatible') row.incompatible += bucket.count;
			if (bucket.outcome === 'error') row.errors += bucket.count;
		}
		if (bucket.action === 'canonical_follow') row.canonical_follows += bucket.count;
		if (bucket.action === 'offer_outbound') row.offer_outbounds += bucket.count;
		if (bucket.action === 'conversion') row.conversions += bucket.count;
		if (bucket.action === 'citation_acknowledged') row.citation_acknowledged += bucket.count;
		rows.set(key, row);
	}
	const segments = [...rows.values()].map((row) => ({
		...row,
		calculator_intent_rate: ratio(row.calculator_intents, row.views),
		merchant_interest_rate: ratio(row.merchant_interests, row.views),
		decision_success_rate: ratio(row.successes, row.decision_requests),
		insufficient_data_rate: ratio(row.insufficient_data, row.decision_requests),
		canonical_follow_rate: ratio(row.canonical_follows, row.views + row.decision_requests),
		conversion_rate: ratio(row.conversions, row.views + row.decision_requests),
		citation_acknowledgement_rate: ratio(row.citation_acknowledged, row.decision_requests),
	})).sort((left, right) => right.decision_requests - left.decision_requests || right.views - left.views || left.channel.localeCompare(right.channel) || left.template.localeCompare(right.template));
	return {
		schemaVersion: '1.0.0', sourceSchemaVersion: aggregate.schemaVersion, sourceUpdatedAt: aggregate.updatedAt,
		window: { firstWeek: aggregate.buckets.map((item) => item.week).sort().at(0) ?? null, lastWeek: aggregate.buckets.map((item) => item.week).sort().at(-1) ?? null },
		definitions: {
			calculator_intent_rate: 'calculator link intentions / external entry views in the same closed channel and page template; null when views are zero',
			merchant_interest_rate: 'anonymous merchant-interest signals / external entry views in the same closed channel and page template; the signal contains no product reference',
			decision_success_rate: 'compatible or compatible_with_limits decision responses / decision requests',
			insufficient_data_rate: 'insufficient_data decision responses / decision requests',
			canonical_follow_rate: 'explicit canonical follow events / views plus decision requests; null when the denominator is zero',
			citation_acknowledgement_rate: 'explicit integration acknowledgements / decision requests; never inferred from MCP output emission',
		},
		limitations: ['No cookie, user identifier, raw URL, query string, referrer, product reference, IP address or user agent is stored.', 'Browser intentions are deduplicated per action and page load; they do not prove a completed calculation or purchase.', 'GSC impressions and clicks are not present until an aggregate-only export is explicitly imported.', 'A canonical URL emitted by CompatAir is not counted as retained or cited without an explicit downstream acknowledgement.'],
		segments,
	};
}
