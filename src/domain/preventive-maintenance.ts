import { z } from 'zod';
import { assessIntervention, interventionLogSchema, type InterventionLog, type InterventionOutcome } from './intervention';
import { assessOperationCheck, operationLogSchema, type OperationLog, type OperationSignal, type OperationVerdict } from './operation-monitoring';
import type { PassportReport } from './passport';

export const MAINTENANCE_LOG_VERSION = '1.0.0' as const;
export const MAINTENANCE_PORTFOLIO_VERSION = '1.0.0' as const;

export const maintenanceCategorySchema = z.enum([
	'inspection',
	'drain',
	'filter',
	'lubrication',
	'leak_control',
	'hose_or_fitting',
	'compressor_service',
	'other',
]);

export const maintenanceTaskSchema = z.object({
	id: z.string().min(1).max(100),
	label: z.string().trim().min(3).max(160),
	category: maintenanceCategorySchema,
	scheduleSource: z.enum(['manufacturer', 'site_rule']),
	sourceReference: z.string().trim().min(3).max(400),
	dueOn: z.iso.date().optional(),
	dueOperatingHours: z.number().nonnegative().max(10_000_000).optional(),
	note: z.string().trim().max(600).optional(),
	createdAt: z.iso.datetime(),
	active: z.boolean().default(true),
}).superRefine((value, context) => {
	if (value.dueOn === undefined && value.dueOperatingHours === undefined) context.addIssue({
		code: 'custom',
		message: 'Renseignez une date exacte ou un compteur d’heures issu de la source déclarée.',
		path: ['dueOn'],
	});
});

export const maintenanceRecordSchema = z.object({
	id: z.string().min(1).max(100),
	taskId: z.string().min(1).max(100).optional(),
	taskLabel: z.string().trim().min(3).max(160),
	category: maintenanceCategorySchema,
	performedOn: z.iso.date(),
	recordedAt: z.iso.datetime(),
	operatingHours: z.number().nonnegative().max(10_000_000).optional(),
	result: z.enum(['completed', 'partial', 'no_action_required']),
	actionDescription: z.string().trim().min(3).max(800),
	evidenceNote: z.string().trim().max(600).optional(),
});

export const maintenanceLogSchema = z.object({
	version: z.literal(MAINTENANCE_LOG_VERSION),
	passportId: z.string().regex(/^[a-f0-9]{64}$/),
	createdAt: z.iso.datetime(),
	updatedAt: z.iso.datetime(),
	tasks: z.array(maintenanceTaskSchema).max(100),
	records: z.array(maintenanceRecordSchema).max(300),
}).superRefine((value, context) => {
	const taskIds = new Set<string>();
	for (const [index, task] of value.tasks.entries()) {
		if (taskIds.has(task.id)) context.addIssue({ code: 'custom', message: 'Une échéance est présente plusieurs fois.', path: ['tasks', index, 'id'] });
		taskIds.add(task.id);
	}
	const recordIds = new Set<string>();
	for (const [index, record] of value.records.entries()) {
		if (recordIds.has(record.id)) context.addIssue({ code: 'custom', message: 'Une action de maintenance est présente plusieurs fois.', path: ['records', index, 'id'] });
		recordIds.add(record.id);
	}
});

export const maintenanceCompletionSchema = z.object({
	record: maintenanceRecordSchema,
	nextDueOn: z.iso.date().optional(),
	nextDueOperatingHours: z.number().nonnegative().max(10_000_000).optional(),
	closeTask: z.boolean().default(false),
}).superRefine((value, context) => {
	if (!value.record.taskId && (value.nextDueOn !== undefined || value.nextDueOperatingHours !== undefined || value.closeTask)) context.addIssue({
		code: 'custom', message: 'Une action non planifiée ne peut pas modifier une échéance.', path: ['record', 'taskId'],
	});
	if (value.record.taskId && !value.closeTask && value.record.result !== 'partial' && value.nextDueOn === undefined && value.nextDueOperatingHours === undefined) context.addIssue({
		code: 'custom', message: 'Après une action terminée, indiquez la prochaine échéance exacte ou clôturez la tâche.', path: ['nextDueOn'],
	});
});

export type MaintenanceCategory = z.infer<typeof maintenanceCategorySchema>;
export type MaintenanceTask = z.infer<typeof maintenanceTaskSchema>;
export type MaintenanceRecord = z.infer<typeof maintenanceRecordSchema>;
export type MaintenanceLog = z.infer<typeof maintenanceLogSchema>;
export type MaintenanceCompletion = z.infer<typeof maintenanceCompletionSchema>;
export type MaintenanceTaskStatus = 'overdue' | 'due' | 'scheduled' | 'hours_unknown';
export type MaintenanceStatus = 'action_required' | 'schedule_due' | 'stable' | 'insufficient_data';

export type AssessedMaintenanceTask = MaintenanceTask & {
	status: MaintenanceTaskStatus;
	statusLabel: string;
	statusFinding: string;
};

export type RecurringSignal = {
	id: OperationSignal['id'];
	label: string;
	count: number;
	firstObservedOn: string;
	lastObservedOn: string;
};

export type MaintenanceRecommendation = {
	id: string;
	priority: 'critical' | 'attention' | 'planned';
	basis: 'measurement' | 'declared_schedule' | 'data_gap';
	label: string;
	finding: string;
	action: string;
	href?: string;
};

export type MaintenanceTimelineEntry = {
	id: string;
	type: 'commissioning' | 'operation_check' | 'intervention' | 'maintenance';
	date: string;
	label: string;
	detail: string;
	status: OperationVerdict | InterventionOutcome | MaintenanceRecord['result'] | 'baseline';
	operatingHours?: number;
};

export type MaintenanceAssessment = {
	version: typeof MAINTENANCE_LOG_VERSION;
	status: MaintenanceStatus;
	primaryFinding: string;
	currentOperatingHours?: number;
	latestOperation?: { checkId: string; observedOn: string; verdict: OperationVerdict };
	openInterventions: number;
	tasks: AssessedMaintenanceTask[];
	recurringSignals: RecurringSignal[];
	recommendations: MaintenanceRecommendation[];
	timeline: MaintenanceTimelineEntry[];
	counts: {
		overdue: number;
		due: number;
		scheduled: number;
		recurringSignals: number;
		maintenanceRecords: number;
	};
};

export const maintenancePortfolioEntrySchema = z.object({
	passportId: z.string().regex(/^[a-f0-9]{64}$/),
	encodedPassport: z.string().min(1).max(100_000),
	alias: z.string().trim().max(100).optional(),
	addedAt: z.iso.datetime(),
	lastOpenedAt: z.iso.datetime(),
});

export const maintenancePortfolioSchema = z.object({
	version: z.literal(MAINTENANCE_PORTFOLIO_VERSION),
	updatedAt: z.iso.datetime(),
	entries: z.array(maintenancePortfolioEntrySchema).max(20),
}).superRefine((value, context) => {
	const ids = new Set<string>();
	for (const [index, entry] of value.entries.entries()) {
		if (ids.has(entry.passportId)) context.addIssue({ code: 'custom', message: 'Un équipement est présent plusieurs fois dans le parc local.', path: ['entries', index, 'passportId'] });
		ids.add(entry.passportId);
	}
});

export type MaintenancePortfolio = z.infer<typeof maintenancePortfolioSchema>;
export type MaintenancePortfolioEntry = z.infer<typeof maintenancePortfolioEntrySchema>;

function dateLabel(value: string) {
	return new Date(`${value}T12:00:00Z`).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

function format(value: number, digits = 1) {
	return value.toLocaleString('fr-FR', { maximumFractionDigits: digits });
}

export function createMaintenanceLog(report: PassportReport, now = new Date().toISOString()): MaintenanceLog {
	return maintenanceLogSchema.parse({ version: MAINTENANCE_LOG_VERSION, passportId: report.passportId, createdAt: now, updatedAt: now, tasks: [], records: [] });
}

export function appendMaintenanceTask(logInput: unknown, taskInput: unknown, now = new Date().toISOString()): MaintenanceLog {
	const log = maintenanceLogSchema.parse(logInput);
	const task = maintenanceTaskSchema.parse(taskInput);
	const tasks = [...log.tasks.filter((entry) => entry.id !== task.id), task]
		.sort((left, right) => (left.dueOn ?? '9999-12-31').localeCompare(right.dueOn ?? '9999-12-31') || (left.dueOperatingHours ?? Number.MAX_SAFE_INTEGER) - (right.dueOperatingHours ?? Number.MAX_SAFE_INTEGER));
	return maintenanceLogSchema.parse({ ...log, updatedAt: now, tasks });
}

export function removeMaintenanceTask(logInput: unknown, taskId: string, now = new Date().toISOString()): MaintenanceLog {
	const log = maintenanceLogSchema.parse(logInput);
	return maintenanceLogSchema.parse({ ...log, updatedAt: now, tasks: log.tasks.filter((task) => task.id !== taskId) });
}

export function appendMaintenanceRecord(logInput: unknown, completionInput: unknown, now = new Date().toISOString()): MaintenanceLog {
	const log = maintenanceLogSchema.parse(logInput);
	const completion = maintenanceCompletionSchema.parse(completionInput);
	const { record } = completion;
	const task = record.taskId ? log.tasks.find((candidate) => candidate.id === record.taskId) : undefined;
	if (record.taskId && !task) throw new Error('L’échéance liée à cette action n’existe plus dans le plan.');
	if (task && (task.label !== record.taskLabel || task.category !== record.category)) throw new Error('L’action ne correspond pas à l’échéance sélectionnée.');
	const records = [...log.records.filter((entry) => entry.id !== record.id), record]
		.sort((left, right) => left.performedOn.localeCompare(right.performedOn) || left.recordedAt.localeCompare(right.recordedAt));
	const tasks = log.tasks.map((candidate) => {
		if (!task || candidate.id !== task.id) return candidate;
		if (completion.closeTask) return { ...candidate, active: false };
		if (record.result === 'partial') return candidate;
		return { ...candidate, dueOn: completion.nextDueOn, dueOperatingHours: completion.nextDueOperatingHours, active: true };
	});
	return maintenanceLogSchema.parse({ ...log, updatedAt: now, tasks, records });
}

export function removeMaintenanceRecord(logInput: unknown, recordId: string, now = new Date().toISOString()): MaintenanceLog {
	const log = maintenanceLogSchema.parse(logInput);
	return maintenanceLogSchema.parse({ ...log, updatedAt: now, records: log.records.filter((record) => record.id !== recordId) });
}

export function parseMaintenanceLogJson(value: string) {
	try {
		return maintenanceLogSchema.safeParse(JSON.parse(value));
	} catch {
		return maintenanceLogSchema.safeParse(undefined);
	}
}

export function assessMaintenanceTask(task: MaintenanceTask, today: string, currentOperatingHours?: number): AssessedMaintenanceTask {
	const dateDelta = task.dueOn ? task.dueOn.localeCompare(today) : undefined;
	const hoursDelta = task.dueOperatingHours !== undefined && currentOperatingHours !== undefined ? task.dueOperatingHours - currentOperatingHours : undefined;
	let status: MaintenanceTaskStatus;
	if ((dateDelta !== undefined && dateDelta < 0) || (hoursDelta !== undefined && hoursDelta < 0)) status = 'overdue';
	else if (dateDelta === 0 || (hoursDelta !== undefined && hoursDelta === 0)) status = 'due';
	else if (task.dueOperatingHours !== undefined && currentOperatingHours === undefined && task.dueOn === undefined) status = 'hours_unknown';
	else status = 'scheduled';
	const thresholds: string[] = [];
	if (task.dueOn) thresholds.push(`date déclarée : ${dateLabel(task.dueOn)}`);
	if (task.dueOperatingHours !== undefined) thresholds.push(`compteur déclaré : ${format(task.dueOperatingHours)} h`);
	const statusLabel = status === 'overdue' ? 'Échéance dépassée' : status === 'due' ? 'Échéance atteinte' : status === 'hours_unknown' ? 'Compteur requis' : 'Échéance à venir';
	const statusFinding = status === 'hours_unknown'
		? `${thresholds.join(' · ')}. Le dernier compteur d’heures n’est pas renseigné.`
		: `${thresholds.join(' · ')}${currentOperatingHours !== undefined && task.dueOperatingHours !== undefined ? ` · dernier relevé : ${format(currentOperatingHours)} h` : ''}.`;
	return { ...task, status, statusLabel, statusFinding };
}

function currentHours(operationLog: OperationLog, maintenanceLog: MaintenanceLog) {
	const values = [
		...operationLog.entries.map((entry) => entry.operatingHours),
		...maintenanceLog.records.map((entry) => entry.operatingHours),
	].filter((value): value is number => value !== undefined);
	return values.length ? Math.max(...values) : undefined;
}

function recurringSignals(report: PassportReport, operationLog: OperationLog): RecurringSignal[] {
	const observations = new Map<OperationSignal['id'], { label: string; dates: string[] }>();
	for (const check of operationLog.entries) {
		const assessment = assessOperationCheck(report, operationLog, check);
		for (const signal of assessment.signals) {
			const current = observations.get(signal.id) ?? { label: signal.label, dates: [] };
			current.dates.push(check.observedOn);
			observations.set(signal.id, current);
		}
	}
	return [...observations.entries()]
		.filter(([, value]) => value.dates.length >= 2)
		.map(([id, value]) => ({ id, label: value.label, count: value.dates.length, firstObservedOn: value.dates[0], lastObservedOn: value.dates.at(-1)! }))
		.sort((left, right) => right.count - left.count || right.lastObservedOn.localeCompare(left.lastObservedOn));
}

function buildTimeline(report: PassportReport, operationLog: OperationLog, interventionLog: InterventionLog, maintenanceLog: MaintenanceLog): MaintenanceTimelineEntry[] {
	const baseline = report.configuration.commissioning!;
	const entries: MaintenanceTimelineEntry[] = [{
		id: `baseline-${report.passportId}`,
		type: 'commissioning',
		date: baseline.observedOn,
		label: 'Recette terrain initiale',
		detail: 'Point zéro retenu pour les comparaisons de pression et de fuite.',
		status: 'baseline',
	}];
	for (const check of operationLog.entries) {
		const assessment = assessOperationCheck(report, operationLog, check);
		entries.push({ id: check.id, type: 'operation_check', date: check.observedOn, label: operationVerdictSummary(assessment.verdict), detail: assessment.primaryFinding, status: assessment.verdict, operatingHours: check.operatingHours });
	}
	for (const record of interventionLog.entries) {
		try {
			const assessment = assessIntervention(report, operationLog, record);
			entries.push({ id: record.id, type: 'intervention', date: record.performedOn, label: 'Intervention et contre-mesure', detail: `${record.actionDescription} ${assessment.primaryFinding}`, status: assessment.outcome });
		} catch { /* Un dossier orphelin n’alimente pas la décision de maintenance. */ }
	}
	for (const record of maintenanceLog.records) entries.push({
		id: record.id, type: 'maintenance', date: record.performedOn, label: record.taskLabel,
		detail: record.actionDescription, status: record.result, operatingHours: record.operatingHours,
	});
	return entries.sort((left, right) => right.date.localeCompare(left.date) || right.id.localeCompare(left.id));
}

function operationVerdictSummary(verdict: OperationVerdict) {
	if (verdict === 'stable') return 'Contrôle comparable stable';
	if (verdict === 'degradation_observed') return 'Contrôle avec dérive mesurée';
	return 'Contrôle non concluant';
}

export function assessPreventiveMaintenance(
	report: PassportReport,
	operationLogInput: unknown,
	interventionLogInput: unknown,
	maintenanceLogInput: unknown,
	today: string,
): MaintenanceAssessment {
	const operationLog = operationLogSchema.parse(operationLogInput);
	const interventionLog = interventionLogSchema.parse(interventionLogInput);
	const maintenanceLog = maintenanceLogSchema.parse(maintenanceLogInput);
	if (operationLog.passportId !== report.passportId || interventionLog.passportId !== report.passportId || maintenanceLog.passportId !== report.passportId) throw new Error('Les carnets ouverts ne correspondent pas au même Passeport.');
	const hours = currentHours(operationLog, maintenanceLog);
	const tasks = maintenanceLog.tasks.filter((task) => task.active).map((task) => assessMaintenanceTask(task, today, hours));
	const operationAssessments = operationLog.entries.map((check) => ({ check, assessment: assessOperationCheck(report, operationLog, check) }));
	const latest = operationAssessments.at(-1);
	const lastInterventionBySource = new Map<string, InterventionOutcome>();
	for (const record of interventionLog.entries) {
		try { lastInterventionBySource.set(record.sourceCheckId, assessIntervention(report, operationLog, record).outcome); }
		catch { /* Les dossiers orphelins sont exclus du statut courant. */ }
	}
	const openInterventions = [...lastInterventionBySource.values()].filter((outcome) => outcome !== 'resolved').length;
	const recurring = recurringSignals(report, operationLog);
	const overdue = tasks.filter((task) => task.status === 'overdue');
	const due = tasks.filter((task) => task.status === 'due');
	const recommendations: MaintenanceRecommendation[] = [];

	if (latest?.assessment.verdict === 'degradation_observed') recommendations.push({
		id: `diagnose-${latest.check.id}`, priority: 'critical', basis: 'measurement', label: 'Diagnostiquer le dernier écart mesuré',
		finding: latest.assessment.primaryFinding, action: 'Ouvrir le diagnostic, consigner l’action et répéter la contre-mesure.',
		href: `/diagnostic-intervention/#passport={passport}&check=${encodeURIComponent(latest.check.id)}`,
	});
	if (openInterventions) recommendations.push({
		id: 'open-interventions', priority: 'critical', basis: 'measurement', label: `${openInterventions} intervention${openInterventions > 1 ? 's' : ''} encore ouverte${openInterventions > 1 ? 's' : ''}`,
		finding: 'La dernière contre-mesure liée ne clôt pas tous les signaux.', action: 'Reprendre le diagnostic depuis le dossier concerné avant de classer l’écart.',
	});
	for (const task of [...overdue, ...due]) recommendations.push({
		id: `schedule-${task.id}`, priority: task.status === 'overdue' ? 'critical' : 'attention', basis: 'declared_schedule', label: task.label,
		finding: `${task.statusLabel}. ${task.statusFinding}`, action: `Appliquer la consigne déclarée dans « ${task.sourceReference} », puis consigner le résultat.`,
	});
	for (const signal of recurring) recommendations.push({
		id: `recurrence-${signal.id}`, priority: 'attention', basis: 'measurement', label: `Récurrence : ${signal.label}`,
		finding: `${signal.count} contrôles ont porté ce signal entre le ${dateLabel(signal.firstObservedOn)} et le ${dateLabel(signal.lastObservedOn)}.`,
		action: 'Comparer les contextes et les dossiers d’intervention avant de qualifier le problème de structurel.',
	});
	if (!tasks.length) recommendations.push({
		id: 'missing-schedule', priority: 'attention', basis: 'data_gap', label: 'Plan constructeur ou règle de site non renseigné',
		finding: 'Aucune date ni valeur de compteur n’est structurée pour cette installation.',
		action: 'Recopier la prochaine échéance exacte depuis la notice du modèle ou une règle de site identifiée.',
	});
	if (!operationLog.entries.length) recommendations.push({
		id: 'missing-follow-up', priority: 'attention', basis: 'data_gap', label: 'Aucun contrôle périodique',
		finding: 'La recette initiale existe, mais aucune mesure ultérieure ne permet d’observer une dérive.',
		action: 'Réaliser un premier contrôle avec le même scénario et le même protocole.',
	});
	else if (latest?.assessment.verdict === 'insufficient_data') recommendations.push({
		id: 'incomplete-latest-check', priority: 'attention', basis: 'data_gap', label: 'Dernier contrôle non comparable',
		finding: latest.assessment.primaryFinding, action: latest.assessment.actions[0] ?? 'Reprendre les mesures manquantes.',
	});
	if (!recommendations.length) recommendations.push({
		id: 'continue-plan', priority: 'planned', basis: 'declared_schedule', label: 'Aucune action immédiate calculée',
		finding: 'Le dernier contrôle est stable et aucune échéance déclarée n’est atteinte.',
		action: 'Conserver les prochaines échéances et reproduire le protocole après toute modification.',
	});

	let status: MaintenanceStatus;
	if (latest?.assessment.verdict === 'degradation_observed' || openInterventions || overdue.length) status = 'action_required';
	else if (due.length) status = 'schedule_due';
	else if (!operationLog.entries.length || latest?.assessment.verdict === 'insufficient_data' || !tasks.length) status = 'insufficient_data';
	else status = 'stable';
	const primaryFinding = status === 'action_required'
		? 'Une dérive, une intervention ouverte ou une échéance dépassée demande une action.'
		: status === 'schedule_due'
			? 'Une échéance déclarée est atteinte ; son exécution doit être consignée.'
			: status === 'stable'
				? 'Le dernier contrôle est stable et les échéances déclarées restent à venir.'
				: 'Le suivi ou le plan d’entretien ne contient pas encore assez d’informations pour conclure.';

	return {
		version: MAINTENANCE_LOG_VERSION,
		status, primaryFinding, currentOperatingHours: hours,
		latestOperation: latest ? { checkId: latest.check.id, observedOn: latest.check.observedOn, verdict: latest.assessment.verdict } : undefined,
		openInterventions, tasks, recurringSignals: recurring, recommendations,
		timeline: buildTimeline(report, operationLog, interventionLog, maintenanceLog),
		counts: { overdue: overdue.length, due: due.length, scheduled: tasks.filter((task) => task.status === 'scheduled').length, recurringSignals: recurring.length, maintenanceRecords: maintenanceLog.records.length },
	};
}

export function maintenanceStatusLabel(status: MaintenanceStatus) {
	if (status === 'action_required') return 'Action prioritaire requise';
	if (status === 'schedule_due') return 'Échéance déclarée atteinte';
	if (status === 'stable') return 'Installation suivie, plan à jour';
	return 'Plan ou mesures à compléter';
}

export function maintenanceCategoryLabel(category: MaintenanceCategory) {
	if (category === 'inspection') return 'Inspection';
	if (category === 'drain') return 'Purge ou vidange';
	if (category === 'filter') return 'Filtre ou traitement d’air';
	if (category === 'lubrication') return 'Lubrification';
	if (category === 'leak_control') return 'Contrôle des fuites';
	if (category === 'hose_or_fitting') return 'Flexible ou raccord';
	if (category === 'compressor_service') return 'Entretien du compresseur';
	return 'Autre action';
}

export function maintenanceRecordResultLabel(result: MaintenanceRecord['result']) {
	if (result === 'completed') return 'Action terminée';
	if (result === 'partial') return 'Action partielle';
	return 'Contrôle réalisé, aucune action nécessaire';
}

export function createMaintenancePortfolio(now = new Date().toISOString()): MaintenancePortfolio {
	return maintenancePortfolioSchema.parse({ version: MAINTENANCE_PORTFOLIO_VERSION, updatedAt: now, entries: [] });
}

export function upsertMaintenancePortfolioEntry(portfolioInput: unknown, entryInput: unknown, now = new Date().toISOString()): MaintenancePortfolio {
	const portfolio = maintenancePortfolioSchema.parse(portfolioInput);
	const entry = maintenancePortfolioEntrySchema.parse(entryInput);
	const entries = [entry, ...portfolio.entries.filter((candidate) => candidate.passportId !== entry.passportId)]
		.sort((left, right) => right.lastOpenedAt.localeCompare(left.lastOpenedAt))
		.slice(0, 20);
	return maintenancePortfolioSchema.parse({ ...portfolio, updatedAt: now, entries });
}

export function removeMaintenancePortfolioEntry(portfolioInput: unknown, passportId: string, now = new Date().toISOString()): MaintenancePortfolio {
	const portfolio = maintenancePortfolioSchema.parse(portfolioInput);
	return maintenancePortfolioSchema.parse({ ...portfolio, updatedAt: now, entries: portfolio.entries.filter((entry) => entry.passportId !== passportId) });
}

export function parseMaintenancePortfolioJson(value: string) {
	try {
		return maintenancePortfolioSchema.safeParse(JSON.parse(value));
	} catch {
		return maintenancePortfolioSchema.safeParse(undefined);
	}
}
