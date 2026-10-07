import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-pacific-pneumatic-864",
	"slug": "ponceuse-orbitale-pacific-pneumatic-864",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Pacific Pneumatic 864",
	"brand": "Pacific Pneumatic",
	"model": "864",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-pacific-pneumatic-864.svg",
		"alt": "Repères techniques : Pacific Pneumatic 864",
		"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pacific-pneumatic-864",
		"label": "Modèle 864, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "864",
			"Length (inch)": "3 1/2",
			"Weight (lb)": "4.00"
		}
	},
	"editorial": {
		"overview": "Pacific Pneumatic 864. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Length (inch) : 3 1/2.",
			"Weight (lb) : 4.00.",
			"Air Inlet NPT (inch) : 1/4."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Le catalogue ancien ne constitue pas une preuve de disponibilité actuelle.",
			"Les tableaux sélectionnés ne documentent pas un couple consommation, pression et régime permettant un verdict calculé.",
			"Les options HT, manches B/G et accessoires ne produisent aucune combinaison de références supplémentaire.",
			"Les fractions en pouces sont conservées comme nombres mixtes d’après l’espacement des glyphes du PDF ; elles ne sont pas transformées en nombre décimal.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Length (inch)",
			"value": "3 1/2",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p9"
			]
		},
		{
			"label": "Weight (lb)",
			"value": "4.00",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p9"
			]
		},
		{
			"label": "Air Inlet NPT (inch)",
			"value": "1/4",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p9"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pacific-catalog-p9",
			"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf#page=9",
			"sourceLabel": "Pacific Pneumatic, catalogue officiel cat99, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 9cd7362e8a9535da77c3c2d97b1c4dc891fa64dcef58bfe5f21055c6706232dd. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-pacific-catalog-p9"
		],
		"workingPressureBar": [
			"october5-tools-pacific-catalog-p9"
		],
		"demandExplanation": [
			"october5-tools-pacific-catalog-p9"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
