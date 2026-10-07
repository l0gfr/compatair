import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-pacific-pneumatic-788r-25",
	"slug": "perceuse-pacific-pneumatic-788r-25",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Pacific Pneumatic 788R-25",
	"brand": "Pacific Pneumatic",
	"model": "788R-25",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-pacific-pneumatic-788r-25.svg",
		"alt": "Repères techniques : Pacific Pneumatic 788R-25",
		"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pacific-pneumatic-788r-25",
		"label": "Modèle 788R-25, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "788R-25",
			"RPM": "2500",
			"Length (inch)": "7 1/2"
		}
	},
	"editorial": {
		"overview": "Pacific Pneumatic 788R-25. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"RPM : 2500.",
			"Length (inch) : 7 1/2.",
			"Weight (lb) : 2.60.",
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
			"label": "RPM",
			"value": "2500",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p4"
			]
		},
		{
			"label": "Length (inch)",
			"value": "7 1/2",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p4"
			]
		},
		{
			"label": "Weight (lb)",
			"value": "2.60",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p4"
			]
		},
		{
			"label": "Air Inlet NPT (inch)",
			"value": "1/4",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pacific-catalog-p4",
			"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf#page=4",
			"sourceLabel": "Pacific Pneumatic, catalogue officiel cat99, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 9cd7362e8a9535da77c3c2d97b1c4dc891fa64dcef58bfe5f21055c6706232dd. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-pacific-catalog-p4"
		],
		"workingPressureBar": [
			"october5-tools-pacific-catalog-p4"
		],
		"demandExplanation": [
			"october5-tools-pacific-catalog-p4"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
