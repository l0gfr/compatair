import type { Compressor } from './catalog';

export function compressorInstallationForm(compressor: Compressor): 'cuve horizontale' | 'cuve verticale' | undefined {
	const familyId = compressor.variant?.familyId ?? '';
	const tankAttribute = compressor.variant?.distinguishingAttributes.cuve?.toLocaleLowerCase('fr-FR') ?? '';
	if (familyId.includes('vertical') || tankAttribute.includes('vertical')) return 'cuve verticale';
	if (familyId === 'kaeser-eurocomp-horizontal' || tankAttribute.includes('horizontal')) return 'cuve horizontale';
	return undefined;
}

export function compressorDisplayName(compressor: Compressor) {
	const base = `${compressor.brand} ${compressor.model}`;
	const installationForm = compressorInstallationForm(compressor);
	return installationForm ? `${base} à ${installationForm}` : base;
}
