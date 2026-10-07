import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-pacific-pneumatic-740-2",
	"slug": "cle-a-chocs-pacific-pneumatic-740-2",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Pacific Pneumatic 740-2",
	"brand": "Pacific Pneumatic",
	"model": "740-2",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-pacific-pneumatic-740-2.svg",
		"alt": "Repères techniques : Pacific Pneumatic 740-2",
		"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pacific-pneumatic-740-2",
		"label": "Modèle 740-2, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "740-2",
			"Length (inch)": "8 1/8",
			"Weight (lb)": "5.60"
		}
	},
	"editorial": {
		"overview": "Pacific Pneumatic 740-2. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Length (inch) : 8 1/8.",
			"Weight (lb) : 5.60.",
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
			"value": "8 1/8",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p3"
			]
		},
		{
			"label": "Weight (lb)",
			"value": "5.60",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p3"
			]
		},
		{
			"label": "Air Inlet NPT (inch)",
			"value": "1/4",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p3"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pacific-catalog-p3",
			"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf#page=3",
			"sourceLabel": "Pacific Pneumatic, catalogue officiel cat99, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 9cd7362e8a9535da77c3c2d97b1c4dc891fa64dcef58bfe5f21055c6706232dd. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-pacific-catalog-p3"
		],
		"workingPressureBar": [
			"october5-tools-pacific-catalog-p3"
		],
		"demandExplanation": [
			"october5-tools-pacific-catalog-p3"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
