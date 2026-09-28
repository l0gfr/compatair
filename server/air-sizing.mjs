// Pure numerical core shared by the browser, static exports and the Node server.
// Callers validate and normalize input at their boundary; no I/O or environment state here.
export const CALCULATION_VERSION = '1.4.3';
export const STANDARD_ATMOSPHERE_BAR = 1.01325;
/** Cross-field invariants shared with the browser and passport schemas. */
export function compressorPressureIssues(compressor) {
	const { maxPressureBar, cutInPressureBar, cutOutPressureBar } = compressor;
	if (cutInPressureBar >= cutOutPressureBar) return [{ field: 'cutInPressureBar', message: 'La pression de réenclenchement doit être inférieure à la pression d’arrêt.' }];
	const field = cutOutPressureBar > maxPressureBar ? 'cutOutPressureBar' : cutInPressureBar > maxPressureBar ? 'cutInPressureBar' : undefined;
	return field ? [{ field, message: 'La pression de régulation dépasse la pression maximale de la machine.' }] : [];
}
function perActionAverageFlow(litersPerAction, actionsPerMinute, quantity) { return litersPerAction * actionsPerMinute * quantity; }
function inflationFreeAirLiters(volumeLiters, initialGaugeBar, targetGaugeBar, quantity) { return volumeLiters * quantity * (targetGaugeBar - initialGaugeBar) / STANDARD_ATMOSPHERE_BAR; }
function usableTankAir(tankLiters, cutInBar, cutOutBar) { return tankLiters < 0 || cutInBar < 0 || cutOutBar <= cutInBar ? 0 : tankLiters * (cutOutBar - cutInBar); }

/** @param {import("../src/domain/sizing").NormalizedSizingInput} value
 * @returns {import("../src/domain/sizing").SizingResult} */
export function calculateSizing(value) {
	if (value.compressor) {
		const issues = compressorPressureIssues(value.compressor);
		if (issues.length) throw new Error(issues[0].message);
	}
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
		value.mode === 'simultaneous' ? 'Outils utilisés simultanément.' : 'Outils utilisés successivement.',
		`Marge de dimensionnement CompatAir : ${Math.round(value.safetyMargin * 100)} %.`,
		'Consommations et fréquences saisies : hypothèses utilisateur.',
		`Session : ${value.sessionMinutes} min. La fréquence ne précise pas la durée des rafales.`,
	];
	const warnings = [];
	if (value.measuredLeakLpm !== undefined) hypotheses.push(`Fuite mesurée ajoutée au besoin : ${value.measuredLeakLpm.toLocaleString('fr-FR', { maximumFractionDigits: 1 })} L/min.`);
	if (value.measuredPressureDropBar !== undefined) hypotheses.push(`Chute mesurée en charge ajoutée au besoin : ${value.measuredPressureDropBar.toLocaleString('fr-FR', { maximumFractionDigits: 2 })} bar.`);
	if (value.supplyPressureBar !== undefined) hypotheses.push(`Pression de sortie réglée ou mesurée : ${value.supplyPressureBar.toLocaleString('fr-FR', { maximumFractionDigits: 2 })} bar, plafonnée au maximum de la machine.`);
	for (const demand of value.demands) {
		if (demand.model === 'per-action') {
			const average = perActionAverageFlow(demand.litersPerAction, demand.actionsPerMinute, demand.quantity);
			hypotheses.push(`${demand.quantity} × ${demand.litersPerAction.toLocaleString('fr-FR')} L/action × ${demand.actionsPerMinute.toLocaleString('fr-FR')} actions/min = ${average.toLocaleString('fr-FR', { maximumFractionDigits: 2 })} L/min en moyenne.`);
			warnings.push('Le débit moyen par action ne décrit pas la pointe. Vérifier flexible, raccords et réserve locale.');
		}
		if (demand.model === 'inflation') {
			const freeAirLiters = inflationFreeAirLiters(demand.volumeLiters, demand.initialPressureBar, demand.targetPressureBar, demand.quantity);
			hypotheses.push(`Gonflage : ${freeAirLiters.toLocaleString('fr-FR', { maximumFractionDigits: 2 })} L d’air libre équivalent pour ${demand.quantity} × ${demand.volumeLiters.toLocaleString('fr-FR')} L, de ${demand.initialPressureBar.toLocaleString('fr-FR')} à ${demand.targetPressureBar.toLocaleString('fr-FR')} bar relatifs.`);
			hypotheses.push(`Atmosphère standard : ${STANDARD_ATMOSPHERE_BAR.toLocaleString('fr-FR')} bar. Gaz parfait à température et volume constants.`);
			warnings.push('Gonflage idéal : échauffement, fuites et pertes de valve, flexible ou détendeur non modélisés.');
		}
	}

	if (value.hoseLengthMeters !== undefined || value.hoseInnerDiameterMm !== undefined) {
		if (value.hoseLengthMeters === undefined || value.hoseInnerDiameterMm === undefined) {
			warnings.push('Renseigner longueur et diamètre intérieur du flexible.');
		} else {
			warnings.push(`Flexible déclaré : ${value.hoseLengthMeters} m, diamètre intérieur ${value.hoseInnerDiameterMm} mm. Perte de charge à mesurer ou à documenter par le fabricant.`);
		}
	}

	const context = {
		peakFlowLpm, averageFlowLpm, recommendedFadLpm, requiredPressureBar, toolPressureBar,
		...(value.measuredLeakLpm !== undefined ? { measuredLeakLpm } : {}),
		...(value.measuredPressureDropBar !== undefined ? { measuredPressureDropBar } : {}),
		hypotheses, flowBasis, calculationVersion: CALCULATION_VERSION,
	};

	if (!value.compressor) {
		return {
			...context,
			verdict: 'insufficient_data',
			limitingFactor: 'data', confidence: 'medium',
			warnings: [...warnings, 'Sans compresseur : seul le besoin en air est calculé.'],
		};
	}

	const compressor = value.compressor;
	const availablePressureBar = Math.min(compressor.maxPressureBar, value.supplyPressureBar ?? compressor.maxPressureBar, compressor.cutOutPressureBar ?? compressor.maxPressureBar);
	if (availablePressureBar < requiredPressureBar) {
		return {
			...context,
			verdict: 'incompatible',
			availablePressureBar,
			usefulPressureBar: availablePressureBar, limitingFactor: 'pressure', confidence: 'high',
			warnings: [...warnings, availablePressureBar < compressor.maxPressureBar ? 'La pression réglée, mesurée ou de coupure est inférieure à la pression requise.' : 'La pression maximale du compresseur est inférieure à la pression requise.'],
		};
	}
	if (compressor.availableFadLpm === undefined) {
		return {
			...context,
			verdict: 'insufficient_data',
			availablePressureBar,
			limitingFactor: 'data', confidence: 'low',
			warnings: [...warnings, 'Le débit restitué à la pression demandée manque. Le débit aspiré ne peut pas le remplacer.'],
		};
	}

	if (compressor.availableFadBasis === 'higher-pressure-bound' && compressor.availableFadLpm * (compressor.dutyCycle ?? 1) < averageFlowLpm) {
		return {
			...context,
			verdict: 'insufficient_data',
			availablePressureBar, usefulPressureBar: requiredPressureBar,
			limitingFactor: 'data', confidence: 'low',
			warnings: [...warnings, 'La borne de FAD ne suffit pas à conclure. Un débit documenté à la pression utile est requis.'],
		};
	}
	if (compressor.availableFadLpm >= averageFlowLpm && compressor.dutyCycle === undefined) {
		if (compressor.availableFadLpm < recommendedFadLpm) warnings.push(`Le débit nominal ne couvre pas la marge recommandée de ${Math.round(value.safetyMargin * 100)} %.`);
		return {
			...context,
			verdict: 'insufficient_data',
			availablePressureBar, usefulPressureBar: requiredPressureBar,
			limitingFactor: 'data', confidence: 'low',
			warnings: [...warnings, 'Le cycle de service du compresseur manque : endurance continue non établie malgré le FAD connu.'],
		};
	}
	// A FAD below the average demand is insufficient even before an endurance limit is applied.
	const effectiveAverageCapacity = compressor.dutyCycle === undefined ? compressor.availableFadLpm : compressor.availableFadLpm * compressor.dutyCycle;
	if (compressor.dutyCycle !== undefined) hypotheses.push(`Cycle maximal déclaré : ${Math.round(compressor.dutyCycle * 100)} %.`);
	let usableTankAirLiters;
	if (compressor.tankLiters !== undefined && compressor.cutInPressureBar !== undefined && compressor.cutOutPressureBar !== undefined) {
		usableTankAirLiters = usableTankAir(compressor.tankLiters, Math.max(compressor.cutInPressureBar, requiredPressureBar), compressor.cutOutPressureBar);
		hypotheses.push('Réserve utile = cuve × (arrêt − max(réenclenchement, pression utile)) / 1 bar. Approximation isotherme à 1 bar absolu ; le débit produit ne change pas.');
	}

	const partialRegulation = (compressor.cutInPressureBar === undefined) !== (compressor.cutOutPressureBar === undefined);
	const pressureFallsBelowNeed = compressor.cutInPressureBar !== undefined && compressor.cutInPressureBar < requiredPressureBar;
	// A known flow deficit remains conclusive. Adequate flow cannot establish maintained
	// pressure when the declared regulation is incomplete or restarts below the need.
	if (effectiveAverageCapacity >= averageFlowLpm && (partialRegulation || pressureFallsBelowNeed)) {
		return {
			...context,
			verdict: 'insufficient_data',
			availablePressureBar, usefulPressureBar: requiredPressureBar, usableTankAirLiters,
			limitingFactor: 'pressure', confidence: 'low',
			warnings: [...warnings, partialRegulation
				? 'Renseigner les deux seuils de régulation pour vérifier le maintien de pression.'
				: 'La pression de réenclenchement est inférieure au besoin, pertes comprises. Vérifier la régulation et la pression en charge.'],
		};
	}

	if (compressor.availableFadLpm >= peakFlowLpm && effectiveAverageCapacity >= averageFlowLpm) {
		if (compressor.availableFadLpm < recommendedFadLpm) warnings.push(`Le débit nominal est couvert, mais la marge recommandée de ${Math.round(value.safetyMargin * 100)} % n’est pas atteinte.`);
		return {
			...context,
			verdict: 'continuous',
			availablePressureBar,
			usefulPressureBar: requiredPressureBar, usableTankAirLiters, confidence: 'high', warnings,
		};
	}

	if (effectiveAverageCapacity < averageFlowLpm) {
		return {
			...context,
			verdict: 'incompatible',
			availablePressureBar,
			usefulPressureBar: requiredPressureBar, usableTankAirLiters,
			limitingFactor: compressor.availableFadLpm < averageFlowLpm ? 'flow' : 'duty_cycle', confidence: 'high',
			warnings: [...warnings, 'La capacité moyenne documentée ne couvre pas la demande moyenne saisie.'],
		};
	}

	if (usableTankAirLiters === undefined || usableTankAirLiters <= 0) {
		return {
			...context,
			verdict: 'insufficient_data',
			availablePressureBar,
			usefulPressureBar: requiredPressureBar, limitingFactor: 'data', confidence: 'low',
			warnings: [...warnings, 'Le débit de pointe dépasse le FAD. Les pressions de coupure et la cuve sont nécessaires pour estimer un fonctionnement intermittent.'],
		};
	}

	// A bounded first-burst scenario, not a product autonomy prediction. Before
	// cut-in there is no production. Neither duty factor nor session length tells
	// us the real burst or pause duration, so recovery cannot be calculated.
	let burstScenario;
	let estimatedWorkMinutes;
	if (flowBasis === 'documented-continuous' && compressor.availableFadBasis !== 'higher-pressure-bound') {
		const stoppedMinutes = compressor.tankLiters * (compressor.cutOutPressureBar - compressor.cutInPressureBar) / peakFlowLpm;
		const loadedMinutes = compressor.tankLiters * (compressor.cutInPressureBar - requiredPressureBar) / (peakFlowLpm - compressor.availableFadLpm);
		estimatedWorkMinutes = stoppedMinutes + loadedMinutes;
		burstScenario = {
			model: 'isothermal-first-burst', control: 'start-stop', initialState: 'stopped',
			referencePressureBar: 1, initialPressureBar: compressor.cutOutPressureBar,
			cutInPressureBar: compressor.cutInPressureBar, usefulPressureBar: requiredPressureBar,
			startDelaySeconds: 0, constantFadLpm: compressor.availableFadLpm, demandLpm: peakFlowLpm,
			stoppedMinutes, loadedMinutes,
		};
		hypotheses.push(`Rafale théorique jusqu’à ${requiredPressureBar} bar : cuve pleine à ${compressor.cutOutPressureBar} bar, compresseur arrêté. Marche/arrêt à ${compressor.cutInPressureBar} bar, délai nul ; FAD constant ${compressor.availableFadLpm} L/min en charge, pointe ${peakFlowLpm} L/min. Hypothèse isotherme, référence 1 bar absolu.`);
		warnings.push('Cette durée est un scénario théorique, pas une autonomie garantie : débit réel sur la plage, délai de démarrage et limites thermiques non modélisés.');
	} else warnings.push('Durée de rafale suspendue : la pointe ou le FAD sur la plage de pression ne sont pas établis.');
	warnings.push('Durées réelles des rafales et pauses inconnues. Récupération et répétition des cycles non calculées ; la fréquence et la session ne les définissent pas.');
	return {
		...context,
		verdict: 'intermittent',
		availablePressureBar,
		usefulPressureBar: requiredPressureBar,
		usableTankAirLiters,
		...(burstScenario ? { estimatedWorkMinutes, burstScenario } : {}),
		limitingFactor: 'flow', confidence: 'medium',
		warnings: [...warnings, 'Fonctionnement intermittent selon les pressions de coupure et le profil d’usage saisis.'],
	};
}
