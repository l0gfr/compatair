const LITERS_PER_CUBIC_FOOT = 28.316_846_592;

export function barToPsi(bar: number): number {
	return bar * 14.503_773_8;
}

export function psiToBar(psi: number): number {
	return psi / 14.503_773_8;
}

export function litersPerMinuteToCfm(litersPerMinute: number): number {
	return litersPerMinute / LITERS_PER_CUBIC_FOOT;
}

export function cfmToLitersPerMinute(cfm: number): number {
	return cfm * LITERS_PER_CUBIC_FOOT;
}
