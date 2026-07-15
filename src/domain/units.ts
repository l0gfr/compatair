const LITERS_PER_CUBIC_FOOT = 28.316_846_592;
const AIRFLOW_DECIMAL_PRECISION = 1_000_000;

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

export function litersPerSecondToLitersPerMinute(litersPerSecond: number): number {
	return Math.round(litersPerSecond * 60 * AIRFLOW_DECIMAL_PRECISION) / AIRFLOW_DECIMAL_PRECISION;
}
