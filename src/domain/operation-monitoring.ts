import { z } from 'zod';
import { commissioningRecordSchema, type CommissioningRecord } from './commissioning';
import type { PassportReport } from './passport';

export const OPERATION_LOG_VERSION = '1.0.0' as const;
export const PRESSURE_DRIFT_TOLERANCE_BAR = 0.1;
export const LEAK_DRIFT_TOLERANCE_LPM = 5;

export const operationCheckSchema = z.object({
	id: z.string().min(1).max(100),
	observedOn: z.iso.date(),
	recordedAt: z.iso.datetime(),
	sourcePressureBar: z.number().positive().max(50).optional(),
	toolPressureBar: z.number().positive().max(50).optional(),
	measuredLeakLpm: z.number().nonnegative().max(10_000).optional(),
	operatingHours: z.number().nonnegative().max(10_000_000).optional(),
	representativeUseObserved: z.boolean().default(false),
	configurationUnchanged: z.boolean().default(false),
	maintenanceAction: z.enum(['none', 'drain', 'filter', 'lubrication', 'other']).default('none'),
	note: z.string().trim().max(600).optional(),
}).superRefine((value, context) => {
	if (value.sourcePressureBar !== undefined && value.toolPressureBar !== undefined && value.toolPressureBar > value.sourcePressureBar) {
		context.addIssue({
			code: 'custom',
			message: 'La pression au poste ne peut pas dépasser la pression à la source pour ce contrôle.',
			path: ['toolPressureBar'],
		});
	}
});

export type OperationCheck = z.infer<typeof operationCheckSchema>;

export const operationLogSchema = z.object({
	version: z.literal(OPERATION_LOG_VERSION),
	passportId: z.string().regex(/^[a-f0-9]{64}$/),
	baselineObservedOn: z.iso.date(),
	createdAt: z.iso.datetime(),
	updatedAt: z.iso.datetime(),
	entries: z.array(operationCheckSchema).max(200),
}).superRefine((value, context) => {
	const ids = new Set<string>();
	for (const [index, entry] of value.entries.entries()) {
		if (ids.has(entry.id)) context.addIssue({ code: 'custom', message: 'Un relevé est présent plusieurs fois.', path: ['entries', index, 'id'] });
		ids.add(entry.id);
		if (entry.observedOn < value.baselineObservedOn) context.addIssue({ code: 'custom', message: 'Un relevé de suivi ne peut pas précéder la recette initiale.', path: ['entries', index, 'observedOn'] });
	}
});

export type OperationLog = z.infer<typeof operationLogSchema>;
export type OperationVerdict = 'stable' | 'degradation_observed' | 'insufficient_data';

export type OperationSignal = {
	id: 'required-pressure' | 'source-pressure' | 'pressure-drop' | 'leak-flow';
	level: 'critical' | 'warning';
	label: string;
	finding: string;
};

export type OperationAssessment = {
	version: typeof OPERATION_LOG_VERSION;
	verdict: OperationVerdict;
	primaryFinding: string;
	signals: OperationSignal[];
	actions: string[];
	comparison: {
		requiredToolPressureBar: number;
		baselineSourcePressureBar?: number;
		currentSourcePressureBar?: number;
		sourcePressureDeltaBar?: number;
		baselineToolPressureBar?: number;
		currentToolPressureBar?: number;
		toolPressureDeltaBar?: number;
		baselinePressureDropBar?: number;
		currentPressureDropBar?: number;
		pressureDropDeltaBar?: number;
		baselineLeakLpm?: number;
		currentLeakLpm?: number;
		leakDeltaLpm?: number;
	};
	maintenance: {
		status: 'undocumented';
		label: string;
		finding: string;
		action: string;
	};
};

function round(value: number, digits = 3) {
	const factor = 10 ** digits;
	return Math.round(value * factor) / factor;
}

function pressureDrop(record: Pick<CommissioningRecord | OperationCheck, 'sourcePressureBar' | 'toolPressureBar'>) {
	if (record.sourcePressureBar === undefined || record.toolPressureBar === undefined) return undefined;
	return round(record.sourcePressureBar - record.toolPressureBar);
}

function delta(current: number | undefined, baseline: number | undefined) {
	return current === undefined || baseline === undefined ? undefined : round(current - baseline);
}

function format(value: number, digits = 2) {
	return value.toLocaleString('fr-FR', { maximumFractionDigits: digits });
}

function maintenanceSchedule(report: PassportReport): OperationAssessment['maintenance'] {
	const instructionsLocated = report.configuration.commissioning?.manufacturerInstructionsLocated === true;
	return {
		status: 'undocumented',
		label: 'Échéance constructeur non documentée',
		finding: instructionsLocated
			? 'La notice a été déclarée retrouvée lors de la recette, mais son intervalle d’entretien n’est pas structuré dans le Passeport.'
			: 'Aucune échéance propre à cette référence n’est reliée aux données du Passeport.',
		action: 'Consigner l’échéance exacte depuis la notice du modèle ; CompatAir ne lui substitue aucun intervalle générique.',
	};
}

export function createOperationLog(report: PassportReport, now = new Date().toISOString()): OperationLog {
	const baseline = commissioningRecordSchema.parse(report.configuration.commissioning);
	return operationLogSchema.parse({
		version: OPERATION_LOG_VERSION,
		passportId: report.passportId,
		baselineObservedOn: baseline.observedOn,
		createdAt: now,
		updatedAt: now,
		entries: [],
	});
}

export function appendOperationCheck(logInput: unknown, checkInput: unknown, now = new Date().toISOString()): OperationLog {
	const log = operationLogSchema.parse(logInput);
	const check = operationCheckSchema.parse(checkInput);
	if (check.observedOn < log.baselineObservedOn) throw new Error('Le relevé de suivi ne peut pas précéder la recette initiale.');
	const entries = [...log.entries.filter((entry) => entry.id !== check.id), check]
		.sort((left, right) => left.observedOn.localeCompare(right.observedOn) || left.recordedAt.localeCompare(right.recordedAt));
	return operationLogSchema.parse({ ...log, updatedAt: now, entries });
}

export function removeOperationCheck(logInput: unknown, checkId: string, now = new Date().toISOString()): OperationLog {
	const log = operationLogSchema.parse(logInput);
	return operationLogSchema.parse({ ...log, updatedAt: now, entries: log.entries.filter((entry) => entry.id !== checkId) });
}

export function parseOperationLogJson(value: string) {
	try {
		return operationLogSchema.safeParse(JSON.parse(value));
	} catch {
		return operationLogSchema.safeParse(undefined);
	}
}

export function assessOperationCheck(report: PassportReport, logInput: unknown, checkInput: unknown): OperationAssessment {
	const log = operationLogSchema.parse(logInput);
	const check = operationCheckSchema.parse(checkInput);
	if (log.passportId !== report.passportId) throw new Error('Ce carnet ne correspond pas au Passeport ouvert.');
	const baseline = commissioningRecordSchema.parse(report.configuration.commissioning);
	if (baseline.observedOn !== log.baselineObservedOn) throw new Error('La recette initiale de ce carnet ne correspond plus au Passeport ouvert.');

	const requiredToolPressureBar = report.result.toolPressureBar ?? report.result.requiredPressureBar;
	const baselinePressureDropBar = pressureDrop(baseline);
	const currentPressureDropBar = pressureDrop(check);
	const comparison: OperationAssessment['comparison'] = {
		requiredToolPressureBar,
		baselineSourcePressureBar: baseline.sourcePressureBar,
		currentSourcePressureBar: check.sourcePressureBar,
		sourcePressureDeltaBar: delta(check.sourcePressureBar, baseline.sourcePressureBar),
		baselineToolPressureBar: baseline.toolPressureBar,
		currentToolPressureBar: check.toolPressureBar,
		toolPressureDeltaBar: delta(check.toolPressureBar, baseline.toolPressureBar),
		baselinePressureDropBar,
		currentPressureDropBar,
		pressureDropDeltaBar: delta(currentPressureDropBar, baselinePressureDropBar),
		baselineLeakLpm: baseline.measuredLeakLpm,
		currentLeakLpm: check.measuredLeakLpm,
		leakDeltaLpm: delta(check.measuredLeakLpm, baseline.measuredLeakLpm),
	};
	const baselineComplete = baseline.representativeUseObserved
		&& baseline.sourcePressureBar !== undefined
		&& baseline.toolPressureBar !== undefined
		&& baseline.measuredLeakLpm !== undefined;
	const currentComplete = check.representativeUseObserved
		&& check.configurationUnchanged
		&& check.sourcePressureBar !== undefined
		&& check.toolPressureBar !== undefined
		&& check.measuredLeakLpm !== undefined;
	const maintenance = maintenanceSchedule(report);

	if (!baselineComplete || !currentComplete) {
		const actions: string[] = [];
		if (!baselineComplete) actions.push('Reprendre la recette terrain pour créer une référence complète sous charge.');
		if (!check.configurationUnchanged) actions.push('Le réseau ou le scénario a changé : créer une nouvelle recette initiale avant de comparer les relevés.');
		if (!check.representativeUseObserved) actions.push('Réaliser le contrôle pendant un usage représentatif de l’outil.');
		if (check.sourcePressureBar === undefined || check.toolPressureBar === undefined) actions.push('Relever la pression à la source et au poste pendant la même phase de charge.');
		if (check.measuredLeakLpm === undefined) actions.push('Mesurer ou borner le débit de fuite selon le même protocole que la recette initiale.');
		return {
			version: OPERATION_LOG_VERSION,
			verdict: 'insufficient_data',
			primaryFinding: !check.configurationUnchanged
				? 'La configuration déclarée a changé : la comparaison avec la recette initiale n’est plus valide.'
				: 'Les conditions ou mesures nécessaires ne permettent pas de comparer ce contrôle à la recette initiale.',
			signals: [], actions: [...new Set(actions)], comparison, maintenance,
		};
	}

	const signals: OperationSignal[] = [];
	if (check.toolPressureBar! < requiredToolPressureBar) signals.push({
		id: 'required-pressure', level: 'critical', label: 'Pression utile insuffisante',
		finding: `${format(check.toolPressureBar!)} bar mesurés au poste pour un besoin publié de ${format(requiredToolPressureBar)} bar.`,
	});
	if ((comparison.sourcePressureDeltaBar ?? 0) < -PRESSURE_DRIFT_TOLERANCE_BAR) signals.push({
		id: 'source-pressure', level: 'warning', label: 'Pression source en baisse',
		finding: `Baisse de ${format(Math.abs(comparison.sourcePressureDeltaBar!))} bar par rapport à la recette initiale.`,
	});
	if ((comparison.pressureDropDeltaBar ?? 0) > PRESSURE_DRIFT_TOLERANCE_BAR) signals.push({
		id: 'pressure-drop', level: 'warning', label: 'Chute de pression accrue',
		finding: `Hausse de ${format(comparison.pressureDropDeltaBar!)} bar par rapport à la recette initiale.`,
	});
	if ((comparison.leakDeltaLpm ?? 0) > LEAK_DRIFT_TOLERANCE_LPM) signals.push({
		id: 'leak-flow', level: 'warning', label: 'Fuite accrue',
		finding: `Hausse de ${format(comparison.leakDeltaLpm!, 1)} L/min par rapport à la recette initiale.`,
	});

	const actions: string[] = [];
	if (signals.some((signal) => signal.id === 'required-pressure')) actions.push('Suspendre la conclusion de compatibilité et localiser la perte avant de modifier le réglage ou la machine.');
	if (signals.some((signal) => signal.id === 'source-pressure')) actions.push('Contrôler le réglage, le cycle du compresseur et les conditions de charge au moment du relevé.');
	if (signals.some((signal) => signal.id === 'pressure-drop')) actions.push('Mesurer successivement en amont et en aval du flexible, des raccords, du filtre et du détendeur.');
	if (signals.some((signal) => signal.id === 'leak-flow')) actions.push('Localiser et réparer les fuites, puis répéter le contrôle avec le même protocole.');
	if (!signals.length) actions.push('Conserver ce relevé comme point de suivi et répéter le même protocole après toute intervention ou modification du réseau.');

	return {
		version: OPERATION_LOG_VERSION,
		verdict: signals.length ? 'degradation_observed' : 'stable',
		primaryFinding: signals.length
			? signals[0].finding
			: `Les écarts restent dans les seuils de signalement CompatAir : ${format(PRESSURE_DRIFT_TOLERANCE_BAR)} bar et ${format(LEAK_DRIFT_TOLERANCE_LPM, 0)} L/min.`,
		signals, actions: [...new Set(actions)], comparison, maintenance,
	};
}

export function operationVerdictLabel(verdict: OperationVerdict) {
	if (verdict === 'stable') return 'Installation stable pour le scénario suivi';
	if (verdict === 'degradation_observed') return 'Dégradation observée';
	return 'Comparaison impossible à conclure';
}

export function maintenanceActionLabel(value: OperationCheck['maintenanceAction']) {
	if (value === 'drain') return 'Purge ou vidange déclarée';
	if (value === 'filter') return 'Filtre contrôlé ou remplacé';
	if (value === 'lubrication') return 'Lubrification déclarée';
	if (value === 'other') return 'Autre intervention déclarée';
	return 'Aucune intervention déclarée';
}
