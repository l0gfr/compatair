import type { Compressor } from './catalog';

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
