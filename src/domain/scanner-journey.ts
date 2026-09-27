import type { Compressor, ToolProfile } from './catalog';
import {
	decodePassportConfiguration,
	encodePassportConfiguration,
	parsePassportConfiguration,
	type PassportConfiguration,
} from './passport';

const MAX_REFERENCE_LENGTH = 160;

// No tool has been selected here. Explain only facts about this compressor,
// never a warning taken from an arbitrary tool in the results preview.
export function scannerCompressorDataGap(compressor: Pick<Compressor, 'fadCurve' | 'confidence' | 'dutyCycle'>) {
	if (!compressor.fadCurve.length) return {
		title: 'Débit restitué non documenté',
		detail: 'Aucun débit réellement restitué exploitable n’est publié pour ce compresseur. Le débit aspiré et la puissance moteur ne le remplacent pas.',
	};
	if (compressor.confidence === 'C' || compressor.confidence === 'D') return {
		title: 'Source insuffisante pour confirmer une compatibilité',
		detail: 'Les valeurs présentes restent consultables, mais la qualité de leur source ne permet pas de valider ce compresseur.',
	};
	if (compressor.dutyCycle === undefined) return {
		title: 'Endurance du compresseur non établie',
		detail: 'Le débit documenté reste comparable. Le cycle de service constructeur manque : un fonctionnement continu ne peut donc pas être confirmé.',
	};
	return {
		title: 'Précisez l’outil et son usage',
		detail: 'Les résultats incomplets peuvent dépendre de la pression, de la cadence ou du volume demandé par chaque outil. Sans outil choisi, aucune de ces limites ne décrit à elle seule le compresseur.',
	};
}

export function scannerConfigurationForTool(tool: ToolProfile): PassportConfiguration | undefined {
	if (tool.demandModel !== 'fixed-flow' || tool.airflowBasis === 'average') return undefined;
	return parsePassportConfiguration({
		demands: [{
			model: 'fixed-flow',
			id: tool.id,
			flowLpm: tool.airflowLpm.typical,
			pressureBar: tool.workingPressureBar.typical,
			quantity: 1,
			dutyFactor: 1,
		}],
		selectedCompressor: '',
	});
}

export function scannerComparisonHref(compressorIds: string[], configuration: PassportConfiguration) {
	const ids = compressorIds.filter((id, index) => id && compressorIds.indexOf(id) === index).slice(0, 3);
	if (ids.length < 2) throw new Error('Deux compresseurs au moins sont nécessaires pour comparer.');
	const fragment = new URLSearchParams({ ids: ids.join(','), config: encodePassportConfiguration(configuration) });
	return `/comparateur/#${fragment.toString()}`;
}

export function scannerReferenceFromHash(hash: string) {
	const reference = new URLSearchParams(hash.replace(/^#/, '')).get('reference')?.trim();
	return reference && reference.length <= MAX_REFERENCE_LENGTH ? reference : undefined;
}

export function scannerReferenceUrl(pathname: string, reference: string) {
	const normalized = reference.trim();
	if (!normalized || normalized.length > MAX_REFERENCE_LENGTH) throw new Error('Référence scanner invalide.');
	return `${pathname}#${new URLSearchParams({ reference: normalized }).toString()}`;
}

export function scannerConfigurationFromComparisonHref(href: string) {
	const hash = href.split('#', 2)[1] ?? '';
	const encoded = new URLSearchParams(hash).get('config');
	return encoded ? decodePassportConfiguration(encoded) : undefined;
}
