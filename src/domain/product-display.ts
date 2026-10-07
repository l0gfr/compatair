import type { Compressor } from './catalog';

export function compressorTankLabel(compressor: Pick<Compressor, 'tankLiters'>) {
	return compressor.tankLiters === undefined ? 'Non documentée' : `${compressor.tankLiters} L`;
}

export function compressorPressureLabel(compressor: Pick<Compressor, 'maxPressureBar' | 'maxPressureBasis'>) {
	return `${compressor.maxPressureBar} bar ${compressor.maxPressureBasis === 'selected-working-pressure-ceiling' ? 'au point documenté' : 'maximum'}`;
}

export function compareDocumentedTankVolumes(a: number | undefined, b: number | undefined) {
	if (a === undefined) return b === undefined ? 0 : 1;
	if (b === undefined) return -1;
	return a - b;
}

export function compressorOilLabel(oilType: Compressor['oilType']) {
	return oilType === 'oil-free' ? 'Sans huile' : oilType === 'oil' ? 'Lubrifié' : 'Lubrification non documentée';
}

export function compressorInstallationForm(compressor: Compressor): 'cuve horizontale' | 'cuve verticale' | undefined {
	const familyId = compressor.variant?.familyId ?? '';
	const tankAttribute = compressor.variant?.distinguishingAttributes.cuve?.toLocaleLowerCase('fr-FR') ?? '';
	if (familyId.includes('vertical') || tankAttribute.includes('vertical')) return 'cuve verticale';
	if (familyId === 'kaeser-eurocomp-horizontal' || tankAttribute.includes('horizontal')) return 'cuve horizontale';
	return undefined;
}

export function compressorDisplayName(compressor: Compressor) {
	const base = `${compressor.brand} ${compressor.model}`;
	const reference = compressor.variant?.distinguishingAttributes.reference;
	if (reference) return `${base} (réf. ${reference})`;
	const installationForm = compressorInstallationForm(compressor);
	if (installationForm) return `${base} à ${installationForm}`;
	return compressor.variant?.label ? `${base} (${compressor.variant.label})` : base;
}
