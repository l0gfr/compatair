import { z } from 'zod';
import type { Compressor, ToolProfile } from './catalog';
import { resolveAvailableFad } from './compatibility';
import { CALCULATION_VERSION, sizeConfiguration, sizingInputSchema, type SizingResult } from './sizing';

function isHttpsUrl(value: string) { try { return new URL(value).protocol === 'https:'; } catch { return false; } }
const httpsUrlSchema = z.url().max(4_096).refine(isHttpsUrl, 'URL HTTPS obligatoire');

export const PASSPORT_SCHEMA_VERSION = '1.0.0' as const;
export const PASSPORT_ENVELOPE_SCHEMA_VERSION = '2.0.0' as const;

const customCompressorSchema = z.object({
	maxPressureBar: z.number().positive().max(50).optional(),
	availableFadLpm: z.number().positive().max(20_000).optional(),
	tankLiters: z.number().nonnegative().max(20_000).optional(),
	dutyCycle: z.number().min(0.01).max(1).optional(),
	cutInPressureBar: z.number().nonnegative().max(50).optional(),
	cutOutPressureBar: z.number().positive().max(50).optional(),
}).default({});

export const passportConfigurationSchema = z.object({
	demands: sizingInputSchema.shape.demands,
	mode: z.enum(['simultaneous', 'successive']).default('successive'),
	safetyMargin: z.number().min(0).max(0.5).default(0.25),
	sessionMinutes: z.number().positive().max(1_440).default(30),
	hoseLengthMeters: z.number().nonnegative().max(500).optional(),
	hoseInnerDiameterMm: z.number().positive().max(100).optional(),
	measuredLeakLpm: z.number().nonnegative().max(10_000).optional(),
	measuredPressureDropBar: z.number().nonnegative().max(50).optional(),
	supplyPressureBar: z.number().positive().max(50).optional(),
	networkDistanceMeters: z.number().nonnegative().max(2_000).optional(),
	fittingStandard: z.enum(['unknown', 'euro-7.2', 'iso-6150-b', 'other']).default('unknown'),
	fittingCount: z.number().int().nonnegative().max(200).optional(),
	filtration: z.enum(['unknown', 'none', 'particle', 'water-separator', 'coalescing', 'dryer']).default('unknown'),
	usageProfile: z.enum(['occasional', 'intermittent', 'sustained', 'mixed']).default('mixed'),
	selectedCompressor: z.string().max(160).default(''),
	custom: customCompressorSchema,
}).superRefine((value, context) => {
	if (value.selectedCompressor === 'custom' && value.custom.maxPressureBar === undefined) context.addIssue({ code: 'custom', message: 'La pression maximale du compresseur personnalisé est obligatoire.', path: ['custom', 'maxPressureBar'] });
	if (value.custom.cutInPressureBar !== undefined && value.custom.cutOutPressureBar !== undefined && value.custom.cutInPressureBar >= value.custom.cutOutPressureBar) context.addIssue({ code: 'custom', message: 'La pression de réenclenchement doit être inférieure à la pression d’arrêt.', path: ['custom', 'cutInPressureBar'] });
	const toolPressureBar = Math.max(...value.demands.map((demand) => demand.model === 'inflation' ? demand.targetPressureBar : demand.pressureBar));
	if (toolPressureBar + (value.measuredPressureDropBar ?? 0) > 50) context.addIssue({ code: 'custom', message: 'La pression outil et la chute mesurée dépassent ensemble la limite de calcul de 50 bar.', path: ['measuredPressureDropBar'] });
});

export type PassportConfiguration = z.infer<typeof passportConfigurationSchema>;

export type PassportSource = {
	id: string;
	productId: string;
	productLabel: string;
	label: string;
	url: string;
	retrievedAt: string;
	confidence: 'A' | 'B' | 'C' | 'D';
};

export type PassportReport = {
	schemaVersion: typeof PASSPORT_SCHEMA_VERSION | typeof PASSPORT_ENVELOPE_SCHEMA_VERSION;
	calculationVersion: typeof CALCULATION_VERSION;
	catalogVerifiedAt: string;
	passportId: string;
	generatedAt: string;
	configuration: PassportConfiguration;
	result: SizingResult;
	compressorLabel: string;
	toolLabels: string[];
	availableFadLpm?: number;
	nominalMarginPercent?: number;
	compatAirMarginCovered?: boolean;
	sources: PassportSource[];
	warnings: string[];
	missingData: string[];
	possibleUpgrades: string[];
};

const passportSourceSchema = z.object({
	id: z.string().min(1).max(160), productId: z.string().min(1).max(160), productLabel: z.string().min(1).max(240),
	label: z.string().min(1).max(500), url: httpsUrlSchema, retrievedAt: z.iso.date(), confidence: z.enum(['A', 'B', 'C', 'D']),
});

const sizingResultSnapshotSchema = z.object({
	verdict: z.enum(['continuous', 'intermittent', 'incompatible', 'insufficient_data']),
	peakFlowLpm: z.number().nonnegative().max(200_000), averageFlowLpm: z.number().nonnegative().max(200_000),
	recommendedFadLpm: z.number().nonnegative().max(200_000), recommendedTankLiters: z.number().nonnegative().max(200_000).optional(),
	requiredPressureBar: z.number().nonnegative().max(50), toolPressureBar: z.number().nonnegative().max(50).optional(),
	measuredLeakLpm: z.number().nonnegative().max(10_000).optional(), measuredPressureDropBar: z.number().nonnegative().max(50).optional(),
	availablePressureBar: z.number().nonnegative().max(50).optional(), usefulPressureBar: z.number().nonnegative().max(50).optional(),
	usableTankAirLiters: z.number().nonnegative().max(2_000_000).optional(), estimatedWorkMinutes: z.number().nonnegative().max(1_000_000).optional(),
	estimatedRecoveryMinutes: z.number().nonnegative().max(1_000_000).optional(), limitingFactor: z.enum(['flow', 'pressure', 'duty_cycle', 'data']).optional(),
	confidence: z.enum(['high', 'medium', 'low']), hypotheses: z.array(z.string().max(2_000)).max(100), warnings: z.array(z.string().max(2_000)).max(100),
	flowBasis: z.enum(['documented-continuous', 'derived-average']), calculationVersion: z.string().regex(/^\d+\.\d+\.\d+$/),
});

const passportInputSnapshotSchema = z.object({
	compressorLabel: z.string().min(1).max(240), toolLabels: z.array(z.string().min(1).max(240)).max(20),
	availableFadLpm: z.number().positive().max(20_000).optional(), nominalMarginPercent: z.number().optional(), compatAirMarginCovered: z.boolean().optional(),
	sources: z.array(passportSourceSchema).max(100), warnings: z.array(z.string().max(2_000)).max(100), missingData: z.array(z.string().max(2_000)).max(100), possibleUpgrades: z.array(z.string().max(2_000)).max(100),
});

export const passportEnvelopeSchema = z.object({
	passportSchemaVersion: z.literal(PASSPORT_ENVELOPE_SCHEMA_VERSION), createdAt: z.iso.datetime(), catalogVersion: z.string().min(1).max(160),
	calculationVersion: z.string().regex(/^\d+\.\d+\.\d+$/), configuration: passportConfigurationSchema,
	inputSnapshot: passportInputSnapshotSchema, resultSnapshot: sizingResultSnapshotSchema,
	evidenceFingerprints: z.array(z.object({ id: z.string().min(1).max(400), fingerprint: z.string().regex(/^[a-f0-9]{64}$/) })).max(100),
	reportDigest: z.string().regex(/^[a-f0-9]{64}$/),
});

export type PassportEnvelope = z.infer<typeof passportEnvelopeSchema>;

type PassportCatalogEvidence = Pick<Compressor['evidence'][number], 'id' | 'sourceUrl' | 'sourceLabel' | 'retrievedAt' | 'confidence'>;
type PassportCompressor = Pick<Compressor, 'id' | 'brand' | 'model' | 'maxPressureBar' | 'fadCurve' | 'tankLiters' | 'dutyCycle'> & { evidence: PassportCatalogEvidence[] };
type PassportTool = Pick<ToolProfile, 'id' | 'brand' | 'model' | 'label' | 'connectorSize' | 'filtrationRequirement'> & { evidence: PassportCatalogEvidence[] };

function encodeUrlPayload(value: unknown) {
	const bytes = new TextEncoder().encode(JSON.stringify(value));
	let binary = '';
	for (const byte of bytes) binary += String.fromCharCode(byte);
	return btoa(binary).replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '');
}

function decodeUrlPayload(encoded: string) {
	if (!/^[A-Za-z0-9_-]{1,64000}$/.test(encoded)) return undefined;
	try {
		const base64 = encoded.replaceAll('-', '+').replaceAll('_', '/');
		const binary = atob(base64);
		const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
		return JSON.parse(new TextDecoder().decode(bytes)) as unknown;
	} catch { return undefined; }
}

async function sha256(value: unknown) {
	const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(JSON.stringify(value)));
	return [...new Uint8Array(digest)].map((item) => item.toString(16).padStart(2, '0')).join('');
}

export function parsePassportConfiguration(input: unknown, compressorIds?: Set<string>, toolIds?: Set<string>) {
	const value = passportConfigurationSchema.parse(input);
	if (compressorIds && value.selectedCompressor && value.selectedCompressor !== 'custom' && !compressorIds.has(value.selectedCompressor)) throw new Error('Le compresseur du Passeport n’existe pas dans le catalogue actuel.');
	if (toolIds && value.demands.some((demand) => !toolIds.has(demand.id))) throw new Error('Un outil du Passeport n’existe pas dans le catalogue actuel.');
	return value;
}

export function encodePassportConfiguration(input: unknown) {
	const value = passportConfigurationSchema.parse(input);
	return encodeUrlPayload(value);
}

export function decodePassportConfiguration(encoded: string) {
	const decoded = decodeUrlPayload(encoded);
	const parsed = passportConfigurationSchema.safeParse(decoded);
	return parsed.success ? parsed.data : undefined;
}

export function encodePassportEnvelope(input: PassportEnvelope) { return encodeUrlPayload(passportEnvelopeSchema.parse(input)); }

export function decodePassportEnvelope(encoded: string) {
	const parsed = passportEnvelopeSchema.safeParse(decodeUrlPayload(encoded));
	return parsed.success ? parsed.data : undefined;
}

export async function verifyPassportEnvelope(envelope: PassportEnvelope) {
	const { reportDigest: _reportDigest, ...unsigned } = passportEnvelopeSchema.parse(envelope);
	return envelope.reportDigest === await sha256(unsigned);
}

export async function passportId(configuration: PassportConfiguration, catalogVerifiedAt: string) {
	const canonical = JSON.stringify({ schemaVersion: PASSPORT_SCHEMA_VERSION, calculationVersion: CALCULATION_VERSION, catalogVerifiedAt, configuration });
	return sha256(canonical);
}

function inputSnapshotFromReport(report: PassportReport) {
	return {
		compressorLabel: report.compressorLabel, toolLabels: report.toolLabels, availableFadLpm: report.availableFadLpm,
		nominalMarginPercent: report.nominalMarginPercent, compatAirMarginCovered: report.compatAirMarginCovered,
		sources: report.sources, warnings: report.warnings, missingData: report.missingData, possibleUpgrades: report.possibleUpgrades,
	};
}

export async function createPassportEnvelope(input: unknown, compressors: PassportCompressor[], tools: PassportTool[], catalogVersion: string, createdAt = new Date().toISOString()) {
	const report = await createPassportReport(input, compressors, tools, catalogVersion, createdAt);
	const inputSnapshot = inputSnapshotFromReport(report);
	const evidenceFingerprints = await Promise.all(report.sources.map(async (source) => ({ id: `${source.productId}:${source.id}`, fingerprint: await sha256(source) })));
	const unsigned = {
		passportSchemaVersion: PASSPORT_ENVELOPE_SCHEMA_VERSION, createdAt, catalogVersion, calculationVersion: report.calculationVersion,
		configuration: report.configuration, inputSnapshot, resultSnapshot: report.result, evidenceFingerprints,
	};
	return passportEnvelopeSchema.parse({ ...unsigned, reportDigest: await sha256(unsigned) });
}

export async function reportFromPassportEnvelope(input: PassportEnvelope): Promise<PassportReport> {
	const envelope = passportEnvelopeSchema.parse(input);
	if (!await verifyPassportEnvelope(envelope)) throw new Error('L’empreinte du Passeport ne correspond pas à son contenu.');
	return {
		schemaVersion: envelope.passportSchemaVersion, calculationVersion: envelope.calculationVersion as typeof CALCULATION_VERSION,
		catalogVerifiedAt: envelope.catalogVersion, passportId: envelope.reportDigest, generatedAt: envelope.createdAt,
		configuration: envelope.configuration, result: envelope.resultSnapshot as SizingResult, ...envelope.inputSnapshot,
	};
}

export function passportVerdictLabel(result: SizingResult) {
	if (result.verdict === 'continuous') return result.flowBasis === 'documented-continuous' ? 'Compatible en continu' : 'Besoin moyen couvert';
	if (result.verdict === 'intermittent') return 'Compatible par intermittence';
	if (result.verdict === 'incompatible') return 'Incompatible';
	return 'Données insuffisantes';
}

export async function createPassportReport(input: unknown, compressors: PassportCompressor[], tools: PassportTool[], catalogVerifiedAt: string, generatedAt = new Date().toISOString()): Promise<PassportReport> {
	const configuration = parsePassportConfiguration(input, new Set(compressors.map((item) => item.id)), new Set(tools.map((item) => item.id)));
	const base = sizeConfiguration(configuration);
	const selected = compressors.find((item) => item.id === configuration.selectedCompressor);
	const selectedFadResolution = selected ? resolveAvailableFad(selected, base.requiredPressureBar) : undefined;
	const compressorInput = configuration.selectedCompressor === 'custom'
		? configuration.custom.maxPressureBar !== undefined ? { ...configuration.custom, maxPressureBar: configuration.custom.maxPressureBar } : undefined
		: selected ? {
			maxPressureBar: selected.maxPressureBar,
			availableFadLpm: selectedFadResolution?.litersPerMinute,
			tankLiters: selected.tankLiters,
			dutyCycle: selected.dutyCycle,
		} : undefined;
	const result = sizeConfiguration({ ...configuration, compressor: compressorInput });
	const selectedTools = configuration.demands.map((demand) => tools.find((item) => item.id === demand.id)!);
	const availableFadLpm = compressorInput?.availableFadLpm;
	const nominalMarginPercent = availableFadLpm === undefined ? undefined : (availableFadLpm - result.peakFlowLpm) / result.peakFlowLpm * 100;
	const sourceProducts = [
		...(selected ? [{ id: selected.id, label: `${selected.brand} ${selected.model}`, evidence: selected.evidence }] : []),
		...selectedTools.map((tool) => ({ id: tool.id, label: `${tool.brand} ${tool.model}`, evidence: tool.evidence })),
	];
	const sources = [...new Map(sourceProducts.flatMap((product) => product.evidence.map((evidence) => [`${product.id}:${evidence.id}`, {
		id: evidence.id, productId: product.id, productLabel: product.label, label: evidence.sourceLabel, url: evidence.sourceUrl,
		retrievedAt: evidence.retrievedAt, confidence: evidence.confidence,
	}]))).values()];
	const missingData: string[] = [];
	if (!configuration.selectedCompressor) missingData.push('Compresseur non sélectionné.');
	if (configuration.selectedCompressor === 'custom') missingData.push('Le compresseur personnalisé ne possède pas de source constructeur liée.');
	if (configuration.selectedCompressor && availableFadLpm === undefined) missingData.push(`FAD du compresseur à ${result.requiredPressureBar.toLocaleString('fr-FR')} bar non documenté.`);
	if (configuration.hoseLengthMeters === undefined) missingData.push('Longueur du flexible non renseignée.');
	if (configuration.hoseInnerDiameterMm === undefined) missingData.push('Diamètre intérieur du flexible non renseigné.');
	if (configuration.measuredPressureDropBar === undefined) missingData.push('Chute de pression en charge non mesurée : le scénario flexible reste non testable.');
	if (configuration.measuredLeakLpm === undefined) missingData.push('Débit de fuite non mesuré : le scénario de réparation des fuites reste non testable.');
	if (configuration.supplyPressureBar === undefined) missingData.push('Pression réellement réglée ou mesurée non renseignée : le scénario de réglage reste non testable.');
	if (configuration.networkDistanceMeters === undefined) missingData.push('Distance totale entre compresseur et point d’usage non renseignée.');
	if (configuration.fittingStandard === 'unknown') missingData.push('Standard des raccords non renseigné.');
	if (configuration.fittingCount === undefined) missingData.push('Nombre de raccords et restrictions non renseigné.');
	if (configuration.filtration === 'unknown') missingData.push('Chaîne de filtration ou de séchage non renseignée.');
	for (const tool of selectedTools) {
		if (!tool.connectorSize) missingData.push(`Raccord de ${tool.label} non documenté.`);
		if (!tool.filtrationRequirement) missingData.push(`Exigence de filtration de ${tool.label} non documentée.`);
	}
	const warnings = [...new Set([
		...result.warnings,
		...(selectedFadResolution?.basis === 'higher-pressure-bound'
			? [`Borne conservatrice : ${selectedFadResolution.litersPerMinute.toLocaleString('fr-FR')} L/min mesurés à ${selectedFadResolution.referencePressureBar?.toLocaleString('fr-FR')} bar sont retenus pour le besoin à ${base.requiredPressureBar.toLocaleString('fr-FR')} bar.`]
			: []),
		'Les pertes du tuyau, des raccords, du filtre et du détendeur ne sont pas soustraites sans courbe fabricant ou mesure en charge.',
		'Le Passeport décrit la configuration déclarée. Il ne certifie ni l’installation, ni la conformité réglementaire, ni l’état réel du matériel.',
	])];
	const possibleUpgrades: string[] = [];
	if (result.verdict === 'incompatible' && result.limitingFactor === 'pressure') possibleUpgrades.push('Choisir un compresseur dont la pression et le FAD sont documentés à la pression requise par les outils.');
	if (result.verdict === 'incompatible' && result.limitingFactor !== 'pressure') possibleUpgrades.push(`Rechercher un FAD documenté d’au moins ${result.recommendedFadLpm.toLocaleString('fr-FR', { maximumFractionDigits: 1 })} L/min à ${result.requiredPressureBar.toLocaleString('fr-FR')} bar.`);
	if (configuration.mode === 'simultaneous') possibleUpgrades.push('Évaluer une organisation successive si la simultanéité n’est pas indispensable au procédé.');
	if (configuration.hoseInnerDiameterMm === undefined || configuration.networkDistanceMeters === undefined) possibleUpgrades.push('Mesurer le diamètre intérieur et la distance réelle avant de modifier le réglage de pression.');
	if (configuration.fittingStandard === 'unknown' || configuration.fittingCount === undefined) possibleUpgrades.push('Inventorier les raccords, coupleurs, vannes et détendeurs puis mesurer la pression en charge de part et d’autre des restrictions.');
	if (configuration.filtration === 'unknown') possibleUpgrades.push('Définir la qualité d’air requise par chaque usage avant de choisir filtre ou sécheur.');
	if (!possibleUpgrades.length) possibleUpgrades.push('Conserver une mesure périodique de la pression en charge et réviser le Passeport lorsque le réseau ou les outils changent.');
	return {
		schemaVersion: PASSPORT_SCHEMA_VERSION,
		calculationVersion: CALCULATION_VERSION,
		catalogVerifiedAt,
		passportId: await passportId(configuration, catalogVerifiedAt),
		generatedAt,
		configuration,
		result,
		compressorLabel: selected ? `${selected.brand} ${selected.model}` : configuration.selectedCompressor === 'custom' ? 'Compresseur personnalisé' : 'Non sélectionné',
		toolLabels: selectedTools.map((tool) => tool.label),
		availableFadLpm,
		nominalMarginPercent,
		compatAirMarginCovered: availableFadLpm === undefined ? undefined : availableFadLpm >= result.recommendedFadLpm,
		sources,
		warnings,
		missingData: [...new Set(missingData)],
		possibleUpgrades: [...new Set(possibleUpgrades)],
	};
}
