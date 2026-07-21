import { z } from 'zod';

export const CALCULATION_VERSION = '1.3.0' as const;
export const STANDARD_ATMOSPHERE_BAR = 1.01325 as const;

const fixedFlowDemandSchema = z.object({
	model: z.literal('fixed-flow').default('fixed-flow'),
	id: z.string().min(1),
	flowLpm: z.number().positive().max(10_000),
	pressureBar: z.number().positive().max(50),
	quantity: z.number().int().min(1).max(20).default(1),
	dutyFactor: z.number().min(0.01).max(1).default(1),
});

const perActionDemandSchema = z.object({
	model: z.literal('per-action'),
	id: z.string().min(1),
	litersPerAction: z.number().positive().max(1_000),
	actionsPerMinute: z.number().positive().max(10_000),
	pressureBar: z.number().positive().max(50),
	quantity: z.number().int().min(1).max(20).default(1),
});

const inflationDemandSchema = z.object({
	model: z.literal('inflation'),
	id: z.string().min(1),
	volumeLiters: z.number().positive().max(100_000),
	initialPressureBar: z.number().nonnegative().max(50),
	targetPressureBar: z.number().positive().max(50),
	targetMinutes: z.number().positive().max(1_440),
	quantity: z.number().int().min(1).max(20).default(1),
}).refine((value) => value.targetPressureBar > value.initialPressureBar, {
	message: 'La pression cible doit être supérieure à la pression initiale.',
	path: ['targetPressureBar'],
});

const demandSchema = z.union([fixedFlowDemandSchema, perActionDemandSchema, inflationDemandSchema]);

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
	measuredLeakLpm: z.number().nonnegative().max(10_000).optional(),
	measuredPressureDropBar: z.number().nonnegative().max(50).optional(),
	supplyPressureBar: z.number().positive().max(50).optional(),
	compressor: compressorInputSchema.optional(),
});

export type SizingInput = z.input<typeof sizingInputSchema>;
export type NormalizedSizingInput = z.output<typeof sizingInputSchema>;
export type SizingVerdict = 'continuous' | 'intermittent' | 'incompatible' | 'insufficient_data';
export type FlowBasis = 'documented-continuous' | 'derived-average';

export type SizingResult = {
	verdict: SizingVerdict;
	peakFlowLpm: number;
	averageFlowLpm: number;
	recommendedFadLpm: number;
	recommendedTankLiters?: number;
	requiredPressureBar: number;
	toolPressureBar?: number;
	measuredLeakLpm?: number;
	measuredPressureDropBar?: number;
	availablePressureBar?: number;
	usefulPressureBar?: number;
	usableTankAirLiters?: number;
	estimatedWorkMinutes?: number;
	estimatedRecoveryMinutes?: number;
	limitingFactor?: 'flow' | 'pressure' | 'duty_cycle' | 'data';
	confidence: 'high' | 'medium' | 'low';
	hypotheses: string[];
	warnings: string[];
	flowBasis: FlowBasis;
	calculationVersion: typeof CALCULATION_VERSION;
};

export function perActionAverageFlow(litersPerAction: number, actionsPerMinute: number, quantity = 1): number {
	return z.number().positive().max(1_000).parse(litersPerAction)
		* z.number().positive().max(10_000).parse(actionsPerMinute)
		* z.number().int().min(1).max(20).parse(quantity);
}

/**
 * Equivalent free-air volume under an ideal-gas, constant-temperature and fixed-volume model.
 * Input pressures are gauge pressures. Their difference is converted at one standard atmosphere.
 */
export function inflationFreeAirLiters(volumeLiters: number, initialGaugeBar: number, targetGaugeBar: number, quantity = 1): number {
	const value = z.object({
		volumeLiters: z.number().positive().max(100_000),
		initialPressureBar: z.number().nonnegative().max(50),
		targetPressureBar: z.number().positive().max(50),
		quantity: z.number().int().min(1).max(20),
	}).refine((item) => item.targetPressureBar > item.initialPressureBar).parse({
		volumeLiters, initialPressureBar: initialGaugeBar, targetPressureBar: targetGaugeBar, quantity,
	});
	return value.volumeLiters * value.quantity * (value.targetPressureBar - value.initialPressureBar) / STANDARD_ATMOSPHERE_BAR;
}

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
	const expanded = value.demands.map((demand) => {
		if (demand.model === 'per-action') {
			const average = perActionAverageFlow(demand.litersPerAction, demand.actionsPerMinute, demand.quantity);
			return { pressureBar: demand.pressureBar, peak: average, average, derived: true };
		}
		if (demand.model === 'inflation') {
			const freeAirLiters = inflationFreeAirLiters(demand.volumeLiters, demand.initialPressureBar, demand.targetPressureBar, demand.quantity);
			const average = freeAirLiters / demand.targetMinutes;
			return { pressureBar: demand.targetPressureBar, peak: average, average, derived: true };
		}
		return {
			pressureBar: demand.pressureBar,
			peak: demand.flowLpm * demand.quantity,
			average: demand.flowLpm * demand.quantity * demand.dutyFactor,
			derived: false,
		};
	});
	const flowBasis: FlowBasis = expanded.some((demand) => demand.derived) ? 'derived-average' : 'documented-continuous';
	const demandPeakFlowLpm = value.mode === 'simultaneous'
		? expanded.reduce((sum, demand) => sum + demand.peak, 0)
		: Math.max(...expanded.map((demand) => demand.peak));
	const measuredLeakLpm = value.measuredLeakLpm ?? 0;
	const peakFlowLpm = demandPeakFlowLpm + measuredLeakLpm;
	const averageFlowLpm = Math.min(
		peakFlowLpm,
		expanded.reduce((sum, demand) => sum + demand.average, 0) + measuredLeakLpm,
	);
	const toolPressureBar = Math.max(...expanded.map((demand) => demand.pressureBar));
	const measuredPressureDropBar = value.measuredPressureDropBar ?? 0;
	const requiredPressureBar = toolPressureBar + measuredPressureDropBar;
	if (requiredPressureBar > 50) throw new Error('La pression outil et la chute mesurée dépassent ensemble la limite de calcul de 50 bar.');
	const recommendedFadLpm = peakFlowLpm * (1 + value.safetyMargin);
	const hypotheses = [
		value.mode === 'simultaneous' ? 'Les outils sélectionnés peuvent fonctionner simultanément.' : 'Les outils sélectionnés fonctionnent successivement.',
		`La marge de dimensionnement CompatAir est fixée à ${Math.round(value.safetyMargin * 100)} %.`,
		'Les consommations et fréquences saisies sont traitées comme des hypothèses utilisateur.',
		`La session déclarée dure ${value.sessionMinutes} minutes. Une fréquence ne décrit pas à elle seule la durée de chaque rafale.`,
	];
	const warnings: string[] = [];
	if (value.measuredLeakLpm !== undefined) hypotheses.push(`Le débit de fuite mesuré ajouté à la demande est de ${value.measuredLeakLpm.toLocaleString('fr-FR', { maximumFractionDigits: 1 })} L/min.`);
	if (value.measuredPressureDropBar !== undefined) hypotheses.push(`La chute de pression mesurée en charge ajoutée au besoin outil est de ${value.measuredPressureDropBar.toLocaleString('fr-FR', { maximumFractionDigits: 2 })} bar.`);
	if (value.supplyPressureBar !== undefined) hypotheses.push(`La pression réglée ou mesurée disponible en sortie est de ${value.supplyPressureBar.toLocaleString('fr-FR', { maximumFractionDigits: 2 })} bar, sans pouvoir dépasser la pression maximale de la machine.`);
	for (const demand of value.demands) {
		if (demand.model === 'per-action') {
			const average = perActionAverageFlow(demand.litersPerAction, demand.actionsPerMinute, demand.quantity);
			hypotheses.push(`Besoin de l’outil : ${demand.quantity} × ${demand.litersPerAction.toLocaleString('fr-FR')} L par action, à ${demand.actionsPerMinute.toLocaleString('fr-FR')} action(s)/min, donnent ${average.toLocaleString('fr-FR', { maximumFractionDigits: 2 })} L/min en moyenne.`);
			warnings.push('Le calcul par action ne décrit pas le débit instantané au déclenchement. Le flexible, les raccords et la réserve locale doivent être vérifiés séparément.');
		}
		if (demand.model === 'inflation') {
			const freeAirLiters = inflationFreeAirLiters(demand.volumeLiters, demand.initialPressureBar, demand.targetPressureBar, demand.quantity);
			hypotheses.push(`Le gonflage utilise ${freeAirLiters.toLocaleString('fr-FR', { maximumFractionDigits: 2 })} L d’air libre équivalent pour ${demand.quantity} volume(s) de ${demand.volumeLiters.toLocaleString('fr-FR')} L, de ${demand.initialPressureBar.toLocaleString('fr-FR')} à ${demand.targetPressureBar.toLocaleString('fr-FR')} bar relatifs.`);
			hypotheses.push(`La conversion retient une atmosphère standard de ${STANDARD_ATMOSPHERE_BAR.toLocaleString('fr-FR')} bar et une approximation de gaz parfait à température et volume constants.`);
			warnings.push('Le temps de gonflage calculé est un objectif moyen idéalisé. Il ne modélise ni échauffement, ni fuite, ni restriction de valve, ni perte du flexible ou du détendeur.');
		}
	}

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
			toolPressureBar, ...(value.measuredLeakLpm !== undefined ? { measuredLeakLpm } : {}), ...(value.measuredPressureDropBar !== undefined ? { measuredPressureDropBar } : {}),
			limitingFactor: 'data', confidence: 'medium', hypotheses,
			warnings: [...warnings, 'Aucun compresseur n’a été renseigné. Le résultat décrit uniquement le besoin en air.'],
			flowBasis, calculationVersion: CALCULATION_VERSION,
		};
	}

	const compressor = value.compressor;
	const availablePressureBar = Math.min(compressor.maxPressureBar, value.supplyPressureBar ?? compressor.maxPressureBar);
	if (availablePressureBar < requiredPressureBar) {
		return {
			verdict: 'incompatible', peakFlowLpm, averageFlowLpm, recommendedFadLpm, requiredPressureBar,
			toolPressureBar, availablePressureBar, ...(value.measuredLeakLpm !== undefined ? { measuredLeakLpm } : {}), ...(value.measuredPressureDropBar !== undefined ? { measuredPressureDropBar } : {}),
			usefulPressureBar: availablePressureBar, limitingFactor: 'pressure', confidence: 'high', hypotheses,
			warnings: [...warnings, value.supplyPressureBar !== undefined && value.supplyPressureBar < compressor.maxPressureBar ? 'La pression réglée ou mesurée est inférieure à la pression requise.' : 'La pression maximale du compresseur est inférieure à la pression requise.'],
			flowBasis, calculationVersion: CALCULATION_VERSION,
		};
	}
	if (compressor.availableFadLpm === undefined) {
		return {
			verdict: 'insufficient_data', peakFlowLpm, averageFlowLpm, recommendedFadLpm, requiredPressureBar,
			toolPressureBar, availablePressureBar, ...(value.measuredLeakLpm !== undefined ? { measuredLeakLpm } : {}), ...(value.measuredPressureDropBar !== undefined ? { measuredPressureDropBar } : {}),
			limitingFactor: 'data', confidence: 'low', hypotheses,
			warnings: [...warnings, 'Le débit restitué à la pression demandée manque. Le débit aspiré ne peut pas le remplacer.'],
			flowBasis, calculationVersion: CALCULATION_VERSION,
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
		if (compressor.availableFadLpm < recommendedFadLpm) warnings.push(`Le débit nominal est couvert, mais la marge recommandée de ${Math.round(value.safetyMargin * 100)} % n’est pas atteinte.`);
		return {
			verdict: 'continuous', peakFlowLpm, averageFlowLpm, recommendedFadLpm, requiredPressureBar,
			toolPressureBar, availablePressureBar, ...(value.measuredLeakLpm !== undefined ? { measuredLeakLpm } : {}), ...(value.measuredPressureDropBar !== undefined ? { measuredPressureDropBar } : {}),
			usefulPressureBar: requiredPressureBar, usableTankAirLiters, confidence: 'high', hypotheses, warnings,
			flowBasis, calculationVersion: CALCULATION_VERSION,
		};
	}

	if (effectiveAverageCapacity < averageFlowLpm) {
		return {
			verdict: 'incompatible', peakFlowLpm, averageFlowLpm, recommendedFadLpm, requiredPressureBar,
			toolPressureBar, availablePressureBar, ...(value.measuredLeakLpm !== undefined ? { measuredLeakLpm } : {}), ...(value.measuredPressureDropBar !== undefined ? { measuredPressureDropBar } : {}),
			usefulPressureBar: requiredPressureBar, usableTankAirLiters,
			limitingFactor: compressor.dutyCycle ? 'duty_cycle' : 'flow', confidence: 'high', hypotheses,
			warnings: [...warnings, 'La capacité moyenne documentée ne couvre pas la demande moyenne saisie.'],
			flowBasis, calculationVersion: CALCULATION_VERSION,
		};
	}

	if (usableTankAirLiters === undefined || usableTankAirLiters <= 0) {
		return {
			verdict: 'insufficient_data', peakFlowLpm, averageFlowLpm, recommendedFadLpm, requiredPressureBar,
			toolPressureBar, availablePressureBar, ...(value.measuredLeakLpm !== undefined ? { measuredLeakLpm } : {}), ...(value.measuredPressureDropBar !== undefined ? { measuredPressureDropBar } : {}),
			usefulPressureBar: requiredPressureBar, limitingFactor: 'data', confidence: 'low', hypotheses,
			warnings: [...warnings, 'Le débit de pointe dépasse le FAD. Les pressions de coupure et la cuve sont nécessaires pour estimer un fonctionnement intermittent.'],
			flowBasis, calculationVersion: CALCULATION_VERSION,
		};
	}

	const deficitLpm = peakFlowLpm - compressor.availableFadLpm;
	const recoverySurplusLpm = effectiveAverageCapacity - averageFlowLpm;
	const estimatedWorkMinutes = deficitLpm > 0 ? usableTankAirLiters / deficitLpm : undefined;
	if (estimatedWorkMinutes !== undefined && estimatedWorkMinutes < value.sessionMinutes) warnings.push('La réserve calculée ne peut pas soutenir la demande de pointe pendant toute la session déclarée. Cela ne prédit pas le rythme réel des pauses.');
	return {
		verdict: 'intermittent', peakFlowLpm, averageFlowLpm, recommendedFadLpm, requiredPressureBar,
		toolPressureBar, availablePressureBar, ...(value.measuredLeakLpm !== undefined ? { measuredLeakLpm } : {}), ...(value.measuredPressureDropBar !== undefined ? { measuredPressureDropBar } : {}),
		usefulPressureBar: requiredPressureBar,
		usableTankAirLiters,
		estimatedWorkMinutes,
		estimatedRecoveryMinutes: recoverySurplusLpm > 0 ? usableTankAirLiters / recoverySurplusLpm : undefined,
		limitingFactor: 'flow', confidence: 'medium', hypotheses,
		warnings: [...warnings, 'Le fonctionnement intermittent dépend des pressions de coupure réellement réglées et du profil d’usage saisi.'],
		flowBasis, calculationVersion: CALCULATION_VERSION,
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
