import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-pacific-pneumatic-rh-20",
	"slug": "marteau-a-river-pacific-pneumatic-rh-20",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "Pacific Pneumatic RH-20",
	"brand": "Pacific Pneumatic",
	"model": "RH-20",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-pacific-pneumatic-rh-20.svg",
		"alt": "Repères techniques : Pacific Pneumatic RH-20",
		"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pacific-pneumatic-rh-20",
		"label": "Modèle RH-20, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "RH-20",
			"Length (inch)": "8 3/8",
			"Weight (lb)": "2.00"
		}
	},
	"editorial": {
		"overview": "Pacific Pneumatic RH-20. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Length (inch) : 8 3/8.",
			"Weight (lb) : 2.00.",
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
			"value": "8 3/8",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p15"
			]
		},
		{
			"label": "Weight (lb)",
			"value": "2.00",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p15"
			]
		},
		{
			"label": "Air Inlet NPT (inch)",
			"value": "1/4",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p15"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pacific-catalog-p15",
			"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf#page=15",
			"sourceLabel": "Pacific Pneumatic, catalogue officiel cat99, page PDF 15",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 9cd7362e8a9535da77c3c2d97b1c4dc891fa64dcef58bfe5f21055c6706232dd. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-pacific-catalog-p15"
		],
		"workingPressureBar": [
			"october5-tools-pacific-catalog-p15"
		],
		"demandExplanation": [
			"october5-tools-pacific-catalog-p15"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
