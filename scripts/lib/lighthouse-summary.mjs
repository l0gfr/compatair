const median = (values) => {
	if (!values.length) return null;
	const sorted = [...values].sort((left, right) => left - right);
	const middle = Math.floor(sorted.length / 2);
	return sorted.length % 2 ? Number(sorted[middle].toFixed(3)) : Number(((sorted[middle - 1] + sorted[middle]) / 2).toFixed(3));
};

export function summarizeLighthouseReports(reports) {
	const valid = reports.filter((report) => report && typeof report.finalUrl === 'string' && !Number.isNaN(Date.parse(report.fetchTime)));
	if (!valid.length) throw new Error('Aucun rapport Lighthouse exploitable.');
	const chronological = [...valid].sort((left, right) => Date.parse(left.fetchTime) - Date.parse(right.fetchTime));
	let currentRunStart = chronological.length - 1;
	while (currentRunStart > 0 && Date.parse(chronological[currentRunStart].fetchTime) - Date.parse(chronological[currentRunStart - 1].fetchTime) <= 5 * 60 * 1000) currentRunStart--;
	const currentRun = chronological.slice(currentRunStart);
	const latestFetch = Date.parse(currentRun.at(-1).fetchTime);
	const grouped = Map.groupBy(currentRun, (report) => new URL(report.finalUrl).pathname);
	const pages = Object.fromEntries([...grouped].sort(([left], [right]) => left.localeCompare(right)).map(([path, pageReports]) => {
		const auditValues = (audit) => pageReports.map((report) => report.audits?.[audit]?.numericValue).filter(Number.isFinite);
		const categoryValues = (category) => pageReports.map((report) => report.categories?.[category]?.score).filter(Number.isFinite).map((score) => score * 100);
		return [path, {
			runs: pageReports.length,
			categories: {
				performance: median(categoryValues('performance')),
				accessibility: median(categoryValues('accessibility')),
				bestPractices: median(categoryValues('best-practices')),
				seo: median(categoryValues('seo')),
			},
			labMetrics: {
				largestContentfulPaintMs: median(auditValues('largest-contentful-paint')),
				cumulativeLayoutShift: median(auditValues('cumulative-layout-shift')),
				totalBlockingTimeMs: median(auditValues('total-blocking-time')),
			},
		}];
	}));
	return {
		schemaVersion: '1.0.0',
		measurementType: 'controlled_lab',
		generatedFromFetchesEndingAt: new Date(latestFetch).toISOString(),
		lighthouseVersion: currentRun[0].lighthouseVersion,
		browserUserAgent: currentRun[0].userAgent,
		reportCount: currentRun.length,
		pages,
		fieldCoreWebVitals: { status: 'not_measured_here', definition: 'Lighthouse fournit ici LCP et CLS de laboratoire avec TBT comme indicateur de réactivité. LCP, CLS et INP terrain proviennent séparément de CrUX.' },
	};
}
