import { CALCULATION_VERSION } from './sizing';

export type CompatibilityVerdict = 'continuous' | 'intermittent' | 'incompatible' | 'insufficient_data';
export type FadResolutionBasis = 'exact' | 'interpolated' | 'higher-pressure-bound';

export type FadResolution = {
	litersPerMinute: number;
	basis: FadResolutionBasis;
	referencePressureBar?: number;
};

export type CompatibilityResult = {
	verdict: CompatibilityVerdict;
	confidence: 'high' | 'medium' | 'low';
	limitingFactor?: 'flow' | 'pressure' | 'tank' | 'duty_cycle' | 'data';
	requiredFadLpm?: number;
	averageDemandLpm?: number;
	availableFadLpm?: number;
	availableFadBasis?: FadResolutionBasis;
	availableFadReferencePressureBar?: number;
	marginPercent?: number;
	warnings: string[];
	calculationVersion: typeof CALCULATION_VERSION;
};

export { interpolateFad, resolveAvailableFad, evaluateCompatibility } from '../../server/air-compatibility.mjs';

export function compatibilityFadLabel(result: Pick<CompatibilityResult, 'availableFadLpm' | 'availableFadBasis' | 'availableFadReferencePressureBar'>, requestedPressureBar: number): string {
	if (result.availableFadLpm === undefined) return `Débit non vérifiable à ${requestedPressureBar.toLocaleString('fr-FR')} bar`;
	const flow = result.availableFadLpm.toLocaleString('fr-FR', { maximumFractionDigits: 2 });
	if (result.availableFadBasis === 'higher-pressure-bound') return `${flow} L/min mesurés à ${result.availableFadReferencePressureBar?.toLocaleString('fr-FR')} bar, borne conservatrice pour ${requestedPressureBar.toLocaleString('fr-FR')} bar`;
	if (result.availableFadBasis === 'interpolated') return `${flow} L/min interpolés à ${requestedPressureBar.toLocaleString('fr-FR')} bar`;
	return `${flow} L/min documentés à ${requestedPressureBar.toLocaleString('fr-FR')} bar`;
}
