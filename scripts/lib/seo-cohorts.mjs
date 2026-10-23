import { candidateQuotaGroup, indexationDay, INDEXATION_TIME_ZONE, validatePath } from './indexation-policy.mjs';

const dayMilliseconds = 86_400_000;
const gscTimeZone = 'America/Los_Angeles';
const gscDay = new Intl.DateTimeFormat('en-CA', { timeZone: gscTimeZone, year: 'numeric', month: '2-digit', day: '2-digit' });
const groups = ['guides', 'compressors', 'tools'];

function dateValue(value) {
	if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new Error('Expected a civil date YYYY-MM-DD.');
	const parsed = Date.parse(`${value}T12:00:00.000Z`);
	if (!Number.isFinite(parsed) || new Date(parsed).toISOString().slice(0, 10) !== value) throw new Error('Invalid civil date.');
	return parsed;
}

function shiftDay(day, offset) {
	return new Date(dateValue(day) + offset * dayMilliseconds).toISOString().slice(0, 10);
}

function timestamp(value) {
	if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(value)
		|| !Number.isFinite(Date.parse(value))) throw new Error('Expected a timestamp with an explicit time zone.');
	dateValue(value.slice(0, 10));
	return new Date(value);
}

export function buildSeoCohortReport(manifest, { asOf, gscObservedThrough, indexationUpdatedOn }) {
	dateValue(asOf);
	dateValue(gscObservedThrough);
	dateValue(indexationUpdatedOn);
	if (gscObservedThrough > asOf || indexationUpdatedOn > asOf) throw new Error('An observation cutoff cannot be after the review date.');
	if (manifest?.schemaVersion !== 1 || !Array.isArray(manifest.batches)
		|| !/^[a-f0-9]{40}$/.test(manifest.gitSha) || !/^[a-f0-9]{40}$/.test(manifest.baselineSha)) throw new Error('Invalid public indexation manifest.');
	const builtAt = timestamp(manifest.builtAt);
	if (indexationDay(builtAt) > asOf) throw new Error('The manifest was built after the review date.');
	const paths = new Set();
	const publicationDays = new Set();
	let previousOpenedAt = 0;
	const cohorts = manifest.batches.map(batch => {
		const openedAt = timestamp(batch?.openedAt);
		const publicationDay = indexationDay(openedAt);
		if (batch.publicationDay !== undefined && batch.publicationDay !== publicationDay) throw new Error('Publication date disagrees with Europe/Paris.');
		if (openedAt.getTime() < previousOpenedAt || openedAt > builtAt || publicationDays.has(publicationDay)) throw new Error('Unordered, duplicate or future publication batch.');
		previousOpenedAt = openedAt.getTime();
		publicationDays.add(publicationDay);
		if (!Array.isArray(batch.paths) || batch.paths.length === 0) throw new Error('Empty or invalid publication batch.');
		const byFamily = Object.fromEntries(groups.map(group => [group, []]));
		for (const path of batch.paths) {
			validatePath(path);
			const group = candidateQuotaGroup(path);
			if (!group || paths.has(path)) throw new Error('Duplicate path or unsupported publication family.');
			paths.add(path);
			byFamily[group].push(path);
		}
		const gscPublicationDay = gscDay.format(openedAt);
		return {
			publicationDay, openedAt: batch.openedAt, admissions: batch.paths.length,
			ageCalendarDays: Math.floor((dateValue(asOf) - dateValue(publicationDay)) / dayMilliseconds),
			families: groups.map(family => ({ family, paths: byFamily[family] })).filter(group => group.paths.length > 0),
			checkpoints: [14, 28].map(days => {
				const reviewOn = shiftDay(publicationDay, days);
				const performanceWindow = { start: shiftDay(gscPublicationDay, 1), end: shiftDay(gscPublicationDay, days), timeZone: gscTimeZone };
				return {
					days, reviewOn, maturity: reviewOn <= asOf ? 'due' : 'not_due',
					performanceWindow,
					performanceDatesObserved: performanceWindow.end <= gscObservedThrough,
					performance: { status: 'not_measurable', reason: 'No cohort-filtered export for this exact window.', clicks: null, impressions: null, ctr: null, averagePosition: null },
					indexation: { status: 'not_measurable', reason: 'The global indexation snapshot is not a dated, URL-level cohort observation.', updatedOn: indexationUpdatedOn, indexedPages: null, inspectedPages: null },
					calculatorUsage: { status: 'not_measurable', reason: 'No dated cohort-level calculator observation.', value: null },
				};
			}),
		};
	});
	return {
		schemaVersion: 1, asOf,
		source: { url: 'https://compatair.fr/data/indexation.json', gitSha: manifest.gitSha, baselineSha: manifest.baselineSha, builtAt: manifest.builtAt },
		publicationTimeZone: INDEXATION_TIME_ZONE, gscTimeZone,
		gscObservedThrough, indexationUpdatedOn,
		summary: { batches: cohorts.length, admissions: paths.size, checkpoints: [14, 28].map(days => {
			const due = cohorts.filter(cohort => cohort.checkpoints.find(checkpoint => checkpoint.days === days).maturity === 'due');
			return { days, dueBatches: due.length, dueAdmissions: due.reduce((sum, cohort) => sum + cohort.admissions, 0), measurableBatches: 0 };
		}) },
		limitations: [
			'This read-only report schedules reviews; it never admits pages or changes quotas, editorial reviews, canonicals or indexation.',
			'Admission timestamps are not first-crawl or first-indexation timestamps; baseline pages have no cohort age here.',
			'J+14 and J+28 are civil-date review milestones in Europe/Paris. Performance windows are the first 14 or 28 complete Pacific dates after openedAt, excluding its partial Pacific date.',
			'An observed GSC date cutoff does not establish final data or cohort completeness. The 92-day page table and site-wide daily data cannot measure these cohort windows.',
			'Historical admission does not establish current indexability; later editorial holds and canonical aliases require separate checks.',
			'A page absent from a partial export has unknown metrics, not zero clicks or zero impressions.',
		],
		cohorts,
	};
}
