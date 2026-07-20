import type { ToolProfile } from './catalog';
import {
	decodePassportConfiguration,
	encodePassportConfiguration,
	parsePassportConfiguration,
	type PassportConfiguration,
} from './passport';

const MAX_REFERENCE_LENGTH = 160;

export function scannerConfigurationForTool(tool: ToolProfile): PassportConfiguration | undefined {
	if (tool.demandModel !== 'fixed-flow') return undefined;
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
