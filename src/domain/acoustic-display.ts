type AcousticProduct = {
	noiseDb?: number;
	specifications?: Array<{ label: string; value: string; evidenceIds: string[] }>;
};

// Keep the manufacturer's indicator and measurement conditions together.
// A bare number never supplies its own LpA/LwA classification or distance.
export function acousticDisplay(product: AcousticProduct): string {
	const qualified = product.specifications?.filter(item =>
		item.evidenceIds.length > 0 && /\bL[wp]A\b|pression acoustique|puissance acoustique/i.test(item.label),
	) ?? [];
	if (qualified.length) return qualified.map(item => `${item.label} : ${item.value}`).join(' · ');
	return product.noiseDb === undefined ? 'Non documenté' : `${product.noiseDb} dB : indicateur et conditions non qualifiés dans les champs structurés. Consulter la source avant comparaison.`;
}
