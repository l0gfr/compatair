import { z } from 'zod';
import type { PassportReport } from './passport';
import {
	LEAK_DRIFT_TOLERANCE_LPM,
	PRESSURE_DRIFT_TOLERANCE_BAR,
	assessOperationCheck,
	operationLogSchema,
	type OperationAssessment,
	type OperationSignal,
} from './operation-monitoring';

export const INTERVENTION_LOG_VERSION = '1.0.0' as const;

export const diagnosticCheckIdSchema = z.enum([
	'repeat-load',
	'source-control',
	'section-loss',
	'leak-localization',
	'point-of-use',
]);

export const diagnosticObservationSchema = z.object({
	id: diagnosticCheckIdSchema,
	status: z.enum(['anomaly_measured', 'checked_no_anomaly', 'not_checked']),
	note: z.string().trim().max(400).optional(),
});

export const interventionRecordSchema = z.object({
	id: z.string().min(1).max(100),
	sourceCheckId: z.string().min(1).max(100),
	counterCheckId: z.string().min(1).max(100),
	performedOn: z.iso.date(),
	recordedAt: z.iso.datetime(),
	category: z.enum(['adjustment', 'leak_repair', 'filter_service', 'hose_or_fitting', 'compressor_service', 'configuration_change', 'other']),
	actionDescription: z.string().trim().min(3).max(600),
	diagnosticConclusion: z.string().trim().max(600).optional(),
	diagnostics: z.array(diagnosticObservationSchema).max(5),
}).superRefine((value, context) => {
	if (value.sourceCheckId === value.counterCheckId) context.addIssue({
		code: 'custom', message: 'La contre-mesure doit être un relevé distinct du contrôle à diagnostiquer.', path: ['counterCheckId'],
	});
	const ids = new Set<string>();
	for (const [index, observation] of value.diagnostics.entries()) {
		if (ids.has(observation.id)) context.addIssue({ code: 'custom', message: 'Un contrôle diagnostic est présent plusieurs fois.', path: ['diagnostics', index, 'id'] });
		ids.add(observation.id);
	}
});

export const interventionLogSchema = z.object({
	version: z.literal(INTERVENTION_LOG_VERSION),
	passportId: z.string().regex(/^[a-f0-9]{64}$/),
	createdAt: z.iso.datetime(),
	updatedAt: z.iso.datetime(),
	entries: z.array(interventionRecordSchema).max(100),
}).superRefine((value, context) => {
	const ids = new Set<string>();
	const counterCheckIds = new Set<string>();
	for (const [index, entry] of value.entries.entries()) {
		if (ids.has(entry.id)) context.addIssue({ code: 'custom', message: 'Un dossier d’intervention est présent plusieurs fois.', path: ['entries', index, 'id'] });
		if (counterCheckIds.has(entry.counterCheckId)) context.addIssue({ code: 'custom', message: 'Une contre-mesure est reliée à plusieurs interventions.', path: ['entries', index, 'counterCheckId'] });
		ids.add(entry.id);
		counterCheckIds.add(entry.counterCheckId);
	}
});

export type DiagnosticCheckId = z.infer<typeof diagnosticCheckIdSchema>;
export type DiagnosticObservation = z.infer<typeof diagnosticObservationSchema>;
export type InterventionRecord = z.infer<typeof interventionRecordSchema>;
export type InterventionLog = z.infer<typeof interventionLogSchema>;
export type InterventionOutcome = 'resolved' | 'improved' | 'not_resolved' | 'insufficient_data';

export type DiagnosticStep = {
	id: DiagnosticCheckId;
	label: string;
	why: string;
	action: string;
	guideHref?: string;
};

export type InterventionAssessment = {
	version: typeof INTERVENTION_LOG_VERSION;
	outcome: InterventionOutcome;
	primaryFinding: string;
	sourceAssessment: OperationAssessment;
	counterAssessment: OperationAssessment;
	diagnostic: {
		steps: DiagnosticStep[];
		completedCount: number;
		anomalyCount: number;
		conclusion: string;
	};
	improvedSignals: OperationSignal['id'][];
	remainingSignals: OperationSignal[];
	actions: string[];
};

const diagnosticSteps: Record<DiagnosticCheckId, DiagnosticStep> = {
	'repeat-load': {
		id: 'repeat-load', label: 'Reproduire l’écart sous la même charge',
		why: 'Un relevé isolé ne suffit pas à localiser une cause.',
		action: 'Répéter le scénario d’outil de la recette et relever simultanément les pressions source et poste.',
	},
	'source-control': {
		id: 'source-control', label: 'Contrôler la source et son réglage',
		why: 'Une baisse apparaît déjà à la sortie du compresseur ou du régulateur.',
		action: 'Consigner la pression sous charge, le réglage, le cycle de marche et toute alarme avant de modifier la consigne.',
	},
	'section-loss': {
		id: 'section-loss', label: 'Segmenter la distribution',
		why: 'La chute entre la source et le poste a augmenté.',
		action: 'Mesurer avant et après le détendeur, le filtre, les raccords et le flexible pour isoler le tronçon qui porte la perte.',
		guideHref: '/guides/diagnostiquer-chute-pression-air-comprime/',
	},
	'leak-localization': {
		id: 'leak-localization', label: 'Localiser la fuite mesurée',
		why: 'Le débit de fuite dépasse la référence initiale.',
		action: 'Isoler les tronçons, rechercher la fuite et conserver la méthode de mesure avant toute réparation.',
		guideHref: '/guides/detecter-mesurer-fuites-air-comprime/',
	},
	'point-of-use': {
		id: 'point-of-use', label: 'Confirmer la pression au point d’usage',
		why: 'La décision dépend de la pression réellement disponible pendant l’utilisation.',
		action: 'Relever la pression au raccord de l’outil pendant une phase représentative, sans la remplacer par la pression à vide.',
		guideHref: '/guides/pression-travail-6-3-bar-outils-pneumatiques/',
	},
};

export function diagnosticStepsForAssessment(assessment: OperationAssessment): DiagnosticStep[] {
	const ids = new Set<DiagnosticCheckId>(['repeat-load']);
	const signalIds = new Set(assessment.signals.map((signal) => signal.id));
	if (signalIds.has('source-pressure') || signalIds.has('required-pressure')) ids.add('source-control');
	if (signalIds.has('pressure-drop') || signalIds.has('required-pressure')) ids.add('section-loss');
	if (signalIds.has('leak-flow')) ids.add('leak-localization');
	if (signalIds.has('required-pressure') || signalIds.has('source-pressure') || signalIds.has('pressure-drop')) ids.add('point-of-use');
	return [...ids].map((id) => diagnosticSteps[id]);
}

export function createInterventionLog(report: PassportReport, now = new Date().toISOString()): InterventionLog {
	return interventionLogSchema.parse({ version: INTERVENTION_LOG_VERSION, passportId: report.passportId, createdAt: now, updatedAt: now, entries: [] });
}

export function appendIntervention(logInput: unknown, recordInput: unknown, now = new Date().toISOString()): InterventionLog {
	const log = interventionLogSchema.parse(logInput);
	const record = interventionRecordSchema.parse(recordInput);
	const entries = [...log.entries.filter((entry) => entry.id !== record.id), record]
		.sort((left, right) => left.performedOn.localeCompare(right.performedOn) || left.recordedAt.localeCompare(right.recordedAt));
	return interventionLogSchema.parse({ ...log, updatedAt: now, entries });
}

export function removeIntervention(logInput: unknown, interventionId: string, now = new Date().toISOString()): InterventionLog {
	const log = interventionLogSchema.parse(logInput);
	return interventionLogSchema.parse({ ...log, updatedAt: now, entries: log.entries.filter((entry) => entry.id !== interventionId) });
}

export function parseInterventionLogJson(value: string) {
	try {
		return interventionLogSchema.safeParse(JSON.parse(value));
	} catch {
		return interventionLogSchema.safeParse(undefined);
	}
}

function improvedSignal(signalId: OperationSignal['id'], source: OperationAssessment, counter: OperationAssessment) {
	if (signalId === 'required-pressure') {
		const before = source.comparison.currentToolPressureBar;
		const after = counter.comparison.currentToolPressureBar;
		return before !== undefined && after !== undefined && after - before > PRESSURE_DRIFT_TOLERANCE_BAR;
	}
	if (signalId === 'source-pressure') {
		const before = source.comparison.sourcePressureDeltaBar;
		const after = counter.comparison.sourcePressureDeltaBar;
		return before !== undefined && after !== undefined && after - before > PRESSURE_DRIFT_TOLERANCE_BAR;
	}
	if (signalId === 'pressure-drop') {
		const before = source.comparison.pressureDropDeltaBar;
		const after = counter.comparison.pressureDropDeltaBar;
		return before !== undefined && after !== undefined && before - after > PRESSURE_DRIFT_TOLERANCE_BAR;
	}
	const before = source.comparison.leakDeltaLpm;
	const after = counter.comparison.leakDeltaLpm;
	return before !== undefined && after !== undefined && before - after > LEAK_DRIFT_TOLERANCE_LPM;
}

export function assessIntervention(report: PassportReport, operationLogInput: unknown, recordInput: unknown): InterventionAssessment {
	const operationLog = operationLogSchema.parse(operationLogInput);
	const record = interventionRecordSchema.parse(recordInput);
	if (operationLog.passportId !== report.passportId) throw new Error('Le carnet d’exploitation ne correspond pas au Passeport ouvert.');
	const sourceCheck = operationLog.entries.find((entry) => entry.id === record.sourceCheckId);
	const counterCheck = operationLog.entries.find((entry) => entry.id === record.counterCheckId);
	if (!sourceCheck) throw new Error('Le contrôle à diagnostiquer n’existe plus dans le carnet d’exploitation.');
	if (!counterCheck) throw new Error('La contre-mesure n’existe plus dans le carnet d’exploitation.');
	if (record.performedOn < sourceCheck.observedOn) throw new Error('L’intervention ne peut pas précéder le contrôle qui l’a déclenchée.');
	if (counterCheck.observedOn < record.performedOn) throw new Error('La contre-mesure ne peut pas précéder l’intervention.');

	const sourceAssessment = assessOperationCheck(report, operationLog, sourceCheck);
	if (sourceAssessment.verdict !== 'degradation_observed') throw new Error('Seul un contrôle présentant une dégradation mesurée peut ouvrir ce parcours.');
	const counterAssessment = assessOperationCheck(report, operationLog, counterCheck);
	const expectedSteps = diagnosticStepsForAssessment(sourceAssessment);
	const expectedIds = new Set(expectedSteps.map((step) => step.id));
	const observations = record.diagnostics.filter((observation) => expectedIds.has(observation.id));
	const completedCount = observations.filter((observation) => observation.status !== 'not_checked').length;
	const anomalyCount = observations.filter((observation) => observation.status === 'anomaly_measured').length;
	const improvedSignals = sourceAssessment.signals.filter((signal) => improvedSignal(signal.id, sourceAssessment, counterAssessment)).map((signal) => signal.id);

	let outcome: InterventionOutcome;
	if (counterAssessment.verdict === 'insufficient_data') outcome = 'insufficient_data';
	else if (counterAssessment.verdict === 'stable') outcome = 'resolved';
	else if (improvedSignals.length) outcome = 'improved';
	else outcome = 'not_resolved';

	const primaryFinding = outcome === 'resolved'
		? 'La contre-mesure revient dans les seuils publiés : l’écart peut être clôturé pour ce scénario.'
		: outcome === 'improved'
			? 'Une amélioration est mesurée, mais au moins un signal reste ouvert.'
			: outcome === 'not_resolved'
				? 'La contre-mesure ne montre pas d’amélioration suffisante sur les signaux initiaux.'
				: 'Les conditions ou mesures de la contre-mesure ne permettent pas de clôturer l’écart.';
	const actions: string[] = [];
	if (outcome === 'resolved') actions.push('Conserver ce dossier avec le carnet et reprendre ensuite le rythme de contrôle périodique.');
	if (outcome === 'improved') actions.push('Poursuivre le diagnostic sur les signaux encore présents avant de clôturer l’écart.');
	if (outcome === 'not_resolved') actions.push('Ne pas multiplier les réglages au hasard : reprendre les contrôles non réalisés et isoler un seul tronçon à la fois.');
	if (outcome === 'insufficient_data') actions.push(...counterAssessment.actions);
	if (!completedCount) actions.push('Aucun contrôle diagnostic n’est consigné : la cause reste non établie, même si la contre-mesure évolue.');
	if (!anomalyCount && completedCount) actions.push('Les contrôles réalisés ne localisent pas encore d’anomalie : conserver cette limite dans le dossier.');

	return {
		version: INTERVENTION_LOG_VERSION,
		outcome,
		primaryFinding,
		sourceAssessment,
		counterAssessment,
		diagnostic: {
			steps: expectedSteps,
			completedCount,
			anomalyCount,
			conclusion: record.diagnosticConclusion || (anomalyCount ? 'Une ou plusieurs anomalies ont été déclarées pendant le diagnostic.' : 'Aucune cause n’est établie par les contrôles consignés.'),
		},
		improvedSignals,
		remainingSignals: counterAssessment.signals,
		actions: [...new Set(actions)],
	};
}

export function interventionOutcomeLabel(outcome: InterventionOutcome) {
	if (outcome === 'resolved') return 'Écart clôturé après contre-mesure';
	if (outcome === 'improved') return 'Amélioration mesurée, écart encore ouvert';
	if (outcome === 'not_resolved') return 'Écart toujours présent';
	return 'Clôture impossible avec les données disponibles';
}

export function interventionCategoryLabel(category: InterventionRecord['category']) {
	if (category === 'adjustment') return 'Réglage ou consigne';
	if (category === 'leak_repair') return 'Réparation de fuite';
	if (category === 'filter_service') return 'Filtre ou traitement d’air';
	if (category === 'hose_or_fitting') return 'Flexible ou raccord';
	if (category === 'compressor_service') return 'Intervention sur le compresseur';
	if (category === 'configuration_change') return 'Modification de configuration';
	return 'Autre intervention';
}

export function diagnosticObservationLabel(status: DiagnosticObservation['status']) {
	if (status === 'anomaly_measured') return 'Anomalie mesurée ou localisée';
	if (status === 'checked_no_anomaly') return 'Contrôlé sans anomalie observée';
	return 'Non contrôlé';
}
