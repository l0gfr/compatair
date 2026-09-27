// Pure numerical core shared by the browser, static exports and the Node server.
// Callers validate and normalize input at their boundary; no I/O or environment state here.
export const CALCULATION_VERSION = '1.4.0';
export const STANDARD_ATMOSPHERE_BAR = 1.01325;
function perActionAverageFlow(litersPerAction, actionsPerMinute, quantity) { return litersPerAction * actionsPerMinute * quantity; }
function inflationFreeAirLiters(volumeLiters, initialGaugeBar, targetGaugeBar, quantity) { return volumeLiters * quantity * (targetGaugeBar - initialGaugeBar) / STANDARD_ATMOSPHERE_BAR; }
function usableTankAir(tankLiters, cutInBar, cutOutBar) { return tankLiters < 0 || cutInBar < 0 || cutOutBar <= cutInBar ? 0 : tankLiters * (cutOutBar - cutInBar); }

/** @param {import("../src/domain/sizing").NormalizedSizingInput} value
 * @returns {import("../src/domain/sizing").SizingResult} */
export function calculateSizing(value) {
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
	const flowBasis = expanded.some((demand) => demand.derived) ? 'derived-average' : 'documented-continuous';
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
	const warnings = [];
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
	const availablePressureBar = Math.min(compressor.maxPressureBar, value.supplyPressureBar ?? compressor.maxPressureBar, compressor.cutOutPressureBar ?? compressor.maxPressureBar);
	if (availablePressureBar < requiredPressureBar) {
		return {
			verdict: 'incompatible', peakFlowLpm, averageFlowLpm, recommendedFadLpm, requiredPressureBar,
			toolPressureBar, availablePressureBar, ...(value.measuredLeakLpm !== undefined ? { measuredLeakLpm } : {}), ...(value.measuredPressureDropBar !== undefined ? { measuredPressureDropBar } : {}),
			usefulPressureBar: availablePressureBar, limitingFactor: 'pressure', confidence: 'high', hypotheses,
			warnings: [...warnings, availablePressureBar < compressor.maxPressureBar ? 'La pression réglée, mesurée ou de coupure est inférieure à la pression requise.' : 'La pression maximale du compresseur est inférieure à la pression requise.'],
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

	if (compressor.availableFadBasis === 'higher-pressure-bound' && compressor.availableFadLpm * (compressor.dutyCycle ?? 1) < averageFlowLpm) {
		return {
			verdict: 'insufficient_data', peakFlowLpm, averageFlowLpm, recommendedFadLpm, requiredPressureBar,
			toolPressureBar, availablePressureBar, usefulPressureBar: requiredPressureBar,
			...(value.measuredLeakLpm !== undefined ? { measuredLeakLpm } : {}),
			...(value.measuredPressureDropBar !== undefined ? { measuredPressureDropBar } : {}),
			limitingFactor: 'data', confidence: 'low', hypotheses,
			warnings: [...warnings, 'La borne de FAD ne suffit pas à conclure. Un débit documenté à la pression utile est requis.'],
			flowBasis, calculationVersion: CALCULATION_VERSION,
		};
	}
	if (compressor.availableFadLpm >= averageFlowLpm && compressor.dutyCycle === undefined) {
		if (compressor.availableFadLpm < recommendedFadLpm) warnings.push(`Le débit nominal ne couvre pas la marge recommandée de ${Math.round(value.safetyMargin * 100)} %.`);
		return {
			verdict: 'insufficient_data', peakFlowLpm, averageFlowLpm, recommendedFadLpm, requiredPressureBar,
			toolPressureBar, availablePressureBar, usefulPressureBar: requiredPressureBar,
			...(value.measuredLeakLpm !== undefined ? { measuredLeakLpm } : {}),
			...(value.measuredPressureDropBar !== undefined ? { measuredPressureDropBar } : {}),
			limitingFactor: 'data', confidence: 'low', hypotheses,
			warnings: [...warnings, 'Le cycle de service du compresseur manque : endurance continue non établie malgré le FAD connu.'],
			flowBasis, calculationVersion: CALCULATION_VERSION,
		};
	}
	// A FAD below the average demand is insufficient even before an endurance limit is applied.
	const effectiveAverageCapacity = compressor.dutyCycle === undefined ? compressor.availableFadLpm : compressor.availableFadLpm * compressor.dutyCycle;
	if (compressor.dutyCycle !== undefined) hypotheses.push(`Le cycle maximal déclaré du compresseur est de ${Math.round(compressor.dutyCycle * 100)} %.`);
	let usableTankAirLiters;
	if (compressor.tankLiters !== undefined && compressor.cutInPressureBar !== undefined && compressor.cutOutPressureBar !== undefined) {
		usableTankAirLiters = usableTankAir(compressor.tankLiters, Math.max(compressor.cutInPressureBar, requiredPressureBar), compressor.cutOutPressureBar);
		hypotheses.push('Réserve utile = volume de cuve × (pression d’arrêt − maximum entre réenclenchement et pression utile) / 1 bar. Approximation isotherme, air ramené à 1 bar absolu ; le débit produit ne change pas.');
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
			limitingFactor: compressor.availableFadLpm < averageFlowLpm ? 'flow' : 'duty_cycle', confidence: 'high', hypotheses,
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
