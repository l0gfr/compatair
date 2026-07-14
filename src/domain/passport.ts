import { z } from 'zod';
import type { Compressor, ToolProfile } from './catalog';
import { interpolateFad } from './compatibility';
import { CALCULATION_VERSION, sizeConfiguration, sizingInputSchema, type SizingResult } from './sizing';

export const PASSPORT_SCHEMA_VERSION = '1.0.0' as const;

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
	schemaVersion: typeof PASSPORT_SCHEMA_VERSION;
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

export function parsePassportConfiguration(input: unknown, compressorIds?: Set<string>, toolIds?: Set<string>) {
	const value = passportConfigurationSchema.parse(input);
	if (compressorIds && value.selectedCompressor && value.selectedCompressor !== 'custom' && !compressorIds.has(value.selectedCompressor)) throw new Error('Le compresseur du Passeport n’existe pas dans le catalogue actuel.');
	if (toolIds && value.demands.some((demand) => !toolIds.has(demand.id))) throw new Error('Un outil du Passeport n’existe pas dans le catalogue actuel.');
	return value;
}

export function encodePassportConfiguration(input: unknown) {
	const value = passportConfigurationSchema.parse(input);
	const bytes = new TextEncoder().encode(JSON.stringify(value));
	let binary = '';
	for (const byte of bytes) binary += String.fromCharCode(byte);
	return btoa(binary).replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '');
}

export function decodePassportConfiguration(encoded: string) {
	if (!/^[A-Za-z0-9_-]{1,24000}$/.test(encoded)) return undefined;
	try {
		const base64 = encoded.replaceAll('-', '+').replaceAll('_', '/');
		const binary = atob(base64);
		const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
		return passportConfigurationSchema.parse(JSON.parse(new TextDecoder().decode(bytes)));
	} catch {
		return undefined;
	}
}

export async function passportId(configuration: PassportConfiguration, catalogVerifiedAt: string) {
	const canonical = JSON.stringify({ schemaVersion: PASSPORT_SCHEMA_VERSION, calculationVersion: CALCULATION_VERSION, catalogVerifiedAt, configuration });
	const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(canonical));
	return [...new Uint8Array(digest)].map((value) => value.toString(16).padStart(2, '0')).join('');
}

export function passportVerdictLabel(result: SizingResult) {
	if (result.verdict === 'continuous') return result.flowBasis === 'documented-continuous' ? 'Compatible en continu' : 'Besoin moyen couvert';
	if (result.verdict === 'intermittent') return 'Compatible par intermittence';
	if (result.verdict === 'incompatible') return 'Incompatible';
	return 'Données insuffisantes';
}

export async function createPassportReport(input: unknown, compressors: Compressor[], tools: ToolProfile[], catalogVerifiedAt: string, generatedAt = new Date().toISOString()): Promise<PassportReport> {
	const configuration = parsePassportConfiguration(input, new Set(compressors.map((item) => item.id)), new Set(tools.map((item) => item.id)));
	const base = sizeConfiguration(configuration);
	const selected = compressors.find((item) => item.id === configuration.selectedCompressor);
	const compressorInput = configuration.selectedCompressor === 'custom'
		? configuration.custom.maxPressureBar !== undefined ? { ...configuration.custom, maxPressureBar: configuration.custom.maxPressureBar } : undefined
		: selected ? {
			maxPressureBar: selected.maxPressureBar,
			availableFadLpm: interpolateFad(selected, base.requiredPressureBar),
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
