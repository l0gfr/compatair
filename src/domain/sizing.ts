import { z } from 'zod';

export const CALCULATION_VERSION = '1.0.0' as const;

const demandSchema = z.object({
	id: z.string().min(1),
	flowLpm: z.number().positive().max(10_000),
	pressureBar: z.number().positive().max(50),
	quantity: z.number().int().min(1).max(20).default(1),
	dutyFactor: z.number().min(0.01).max(1).default(1),
});

const compressorInputSchema = z.object({
	maxPressureBar: z.number().positive().max(50),
	availableFadLpm: z.number().positive().max(20_000).optional(),
	tankLiters: z.number().nonnegative().max(20_000).optional(),
	cutInPressureBar: z.number().nonnegative().max(50).optional(),
	cutOutPressureBar: z.number().positive().max(50).optional(),
	dutyCycle: z.number().min(0.01).max(1).optional(),
});

export const sizingInputSchema = z.object({
	demands: z.array(demandSchema).min(1).max(20),
	mode: z.enum(['simultaneous', 'successive']).default('successive'),
	safetyMargin: z.number().min(0).max(1).default(0.25),
	sessionMinutes: z.number().positive().max(1_440).default(30),
	hoseLengthMeters: z.number().nonnegative().max(500).optional(),
	hoseInnerDiameterMm: z.number().positive().max(100).optional(),
	compressor: compressorInputSchema.optional(),
});

export type SizingInput = z.input<typeof sizingInputSchema>;
export type NormalizedSizingInput = z.output<typeof sizingInputSchema>;
export type SizingVerdict = 'continuous' | 'intermittent' | 'incompatible' | 'insufficient_data';

export type SizingResult = {
	verdict: SizingVerdict;
	peakFlowLpm: number;
	averageFlowLpm: number;
	recommendedFadLpm: number;
	recommendedTankLiters?: number;
	requiredPressureBar: number;
	usefulPressureBar?: number;
	usableTankAirLiters?: number;
	estimatedWorkMinutes?: number;
	estimatedRecoveryMinutes?: number;
	limitingFactor?: 'flow' | 'pressure' | 'duty_cycle' | 'data';
	confidence: 'high' | 'medium' | 'low';
	hypotheses: string[];
	warnings: string[];
	calculationVersion: typeof CALCULATION_VERSION;
};

/**
 * Free-air reserve from receiver volume and two gauge pressures.
 * The calculation follows the ideal-gas pressure ratio at unchanged temperature.
 */
export function usableTankAir(tankLiters: number, cutInBar: number, cutOutBar: number): number {
	if (tankLiters < 0 || cutInBar < 0 || cutOutBar <= cutInBar) return 0;
	return tankLiters * (cutOutBar - cutInBar);
}

export function sizeConfiguration(input: SizingInput): SizingResult {
	const value = sizingInputSchema.parse(input);
	const expanded = value.demands.map((demand) => ({
		...demand,
		peak: demand.flowLpm * demand.quantity,
		average: demand.flowLpm * demand.quantity * demand.dutyFactor,
	}));
	const peakFlowLpm = value.mode === 'simultaneous'
		? expanded.reduce((sum, demand) => sum + demand.peak, 0)
		: Math.max(...expanded.map((demand) => demand.peak));
	const averageFlowLpm = Math.min(
		peakFlowLpm,
		expanded.reduce((sum, demand) => sum + demand.average, 0),
	);
	const requiredPressureBar = Math.max(...expanded.map((demand) => demand.pressureBar));
	const recommendedFadLpm = peakFlowLpm * (1 + value.safetyMargin);
	const hypotheses = [
		value.mode === 'simultaneous' ? 'Les outils sélectionnés peuvent fonctionner simultanément.' : 'Les outils sélectionnés fonctionnent successivement.',
		`La marge de dimensionnement CompatAir est fixée à ${Math.round(value.safetyMargin * 100)} %.`,
		'Les consommations et fréquences saisies sont traitées comme des hypothèses utilisateur.',
		`La session déclarée dure ${value.sessionMinutes} minutes. Une fréquence ne décrit pas à elle seule la durée de chaque rafale.`,
	];
	const warnings: string[] = [];

	if (value.hoseLengthMeters !== undefined || value.hoseInnerDiameterMm !== undefined) {
		if (value.hoseLengthMeters === undefined || value.hoseInnerDiameterMm === undefined) {
			warnings.push('La longueur et le diamètre intérieur du flexible sont tous deux nécessaires pour documenter le réseau.');
		} else {
			warnings.push(`Flexible déclaré : ${value.hoseLengthMeters} m, diamètre intérieur ${value.hoseInnerDiameterMm} mm. La perte de charge n’est pas chiffrée sans courbe fabricant ou mesure sur installation.`);
		}
	}

	if (!value.compressor) {
		return {
			verdict: 'insufficient_data', peakFlowLpm, averageFlowLpm, recommendedFadLpm, requiredPressureBar,
			limitingFactor: 'data', confidence: 'medium', hypotheses,
			warnings: [...warnings, 'Aucun compresseur n’a été renseigné. Le résultat décrit uniquement le besoin en air.'],
			calculationVersion: CALCULATION_VERSION,
		};
	}

	const compressor = value.compressor;
	if (compressor.maxPressureBar < requiredPressureBar) {
		return {
			verdict: 'incompatible', peakFlowLpm, averageFlowLpm, recommendedFadLpm, requiredPressureBar,
			usefulPressureBar: compressor.maxPressureBar, limitingFactor: 'pressure', confidence: 'high', hypotheses, warnings,
			calculationVersion: CALCULATION_VERSION,
		};
	}
	if (compressor.availableFadLpm === undefined) {
		return {
			verdict: 'insufficient_data', peakFlowLpm, averageFlowLpm, recommendedFadLpm, requiredPressureBar,
			limitingFactor: 'data', confidence: 'low', hypotheses,
			warnings: [...warnings, 'Le débit restitué à la pression demandée manque. Le débit aspiré ne peut pas le remplacer.'],
			calculationVersion: CALCULATION_VERSION,
		};
	}

	const effectiveAverageCapacity = compressor.availableFadLpm * (compressor.dutyCycle ?? 1);
	if (compressor.dutyCycle !== undefined) hypotheses.push(`Le cycle maximal déclaré du compresseur est de ${Math.round(compressor.dutyCycle * 100)} %.`);
	let usableTankAirLiters: number | undefined;
	if (compressor.tankLiters !== undefined && compressor.cutInPressureBar !== undefined && compressor.cutOutPressureBar !== undefined) {
		usableTankAirLiters = usableTankAir(compressor.tankLiters, compressor.cutInPressureBar, compressor.cutOutPressureBar);
		hypotheses.push('La réserve utile de cuve utilise une approximation isotherme entre les pressions de coupure saisies.');
	}

	if (compressor.availableFadLpm >= peakFlowLpm && effectiveAverageCapacity >= averageFlowLpm) {
		if (compressor.availableFadLpm < recommendedFadLpm) warnings.push('Le débit de pointe est couvert, mais pas la marge de dimensionnement CompatAir.');
		return {
			verdict: 'continuous', peakFlowLpm, averageFlowLpm, recommendedFadLpm, requiredPressureBar,
			usefulPressureBar: requiredPressureBar, usableTankAirLiters, confidence: 'high', hypotheses, warnings,
			calculationVersion: CALCULATION_VERSION,
		};
	}

	if (effectiveAverageCapacity < averageFlowLpm) {
		return {
			verdict: 'incompatible', peakFlowLpm, averageFlowLpm, recommendedFadLpm, requiredPressureBar,
			usefulPressureBar: requiredPressureBar, usableTankAirLiters,
			limitingFactor: compressor.dutyCycle ? 'duty_cycle' : 'flow', confidence: 'high', hypotheses,
			warnings: [...warnings, 'La capacité moyenne documentée ne couvre pas la demande moyenne saisie.'],
			calculationVersion: CALCULATION_VERSION,
		};
	}

	if (usableTankAirLiters === undefined || usableTankAirLiters <= 0) {
		return {
			verdict: 'insufficient_data', peakFlowLpm, averageFlowLpm, recommendedFadLpm, requiredPressureBar,
			usefulPressureBar: requiredPressureBar, limitingFactor: 'data', confidence: 'low', hypotheses,
			warnings: [...warnings, 'Le débit de pointe dépasse le FAD. Les pressions de coupure et la cuve sont nécessaires pour estimer un fonctionnement intermittent.'],
			calculationVersion: CALCULATION_VERSION,
		};
	}

	const deficitLpm = peakFlowLpm - compressor.availableFadLpm;
	const recoverySurplusLpm = effectiveAverageCapacity - averageFlowLpm;
	const estimatedWorkMinutes = deficitLpm > 0 ? usableTankAirLiters / deficitLpm : undefined;
	if (estimatedWorkMinutes !== undefined && estimatedWorkMinutes < value.sessionMinutes) warnings.push('La réserve calculée ne peut pas soutenir la demande de pointe pendant toute la session déclarée. Cela ne prédit pas le rythme réel des pauses.');
	return {
		verdict: 'intermittent', peakFlowLpm, averageFlowLpm, recommendedFadLpm, requiredPressureBar,
		usefulPressureBar: requiredPressureBar,
		usableTankAirLiters,
		estimatedWorkMinutes,
		estimatedRecoveryMinutes: recoverySurplusLpm > 0 ? usableTankAirLiters / recoverySurplusLpm : undefined,
		limitingFactor: 'flow', confidence: 'medium', hypotheses,
		warnings: [...warnings, 'Le fonctionnement intermittent dépend des pressions de coupure réellement réglées et du profil d’usage saisi.'],
		calculationVersion: CALCULATION_VERSION,
	};
}

/** Backward-compatible single-demand helper used by existing integrations. */
export function sizeAirDemand(input: { toolFlowLpm: number; safetyMargin?: number }) {
	const safetyMargin = input.safetyMargin ?? 0.25;
	const value = z.object({ toolFlowLpm: z.number().positive().max(10_000), safetyMargin: z.number().min(0).max(1) }).parse({ ...input, safetyMargin });
	return {
		peakFlowLpm: value.toolFlowLpm,
		recommendedFadLpm: value.toolFlowLpm * (1 + value.safetyMargin),
		calculationVersion: CALCULATION_VERSION,
	};
}
