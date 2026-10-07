import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-pacific-pneumatic-ldl-40-200",
	"slug": "perceuse-pacific-pneumatic-ldl-40-200",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Pacific Pneumatic LDL-40-200",
	"brand": "Pacific Pneumatic",
	"model": "LDL-40-200",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-pacific-pneumatic-ldl-40-200.svg",
		"alt": "Repères techniques : Pacific Pneumatic LDL-40-200",
		"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pacific-pneumatic-ldl-40-200",
		"label": "Modèle LDL-40-200, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "LDL-40-200",
			"RPM": "20000",
			"Length (inch)": "8 1/8"
		}
	},
	"editorial": {
		"overview": "Pacific Pneumatic LDL-40-200. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"RPM : 20000.",
			"Length (inch) : 8 1/8.",
			"Weight (lb) : 1.50.",
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
			"value": "20000",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p5"
			]
		},
		{
			"label": "Length (inch)",
			"value": "8 1/8",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p5"
			]
		},
		{
			"label": "Weight (lb)",
			"value": "1.50",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p5"
			]
		},
		{
			"label": "Air Inlet NPT (inch)",
			"value": "1/4",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p5"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pacific-catalog-p5",
			"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf#page=5",
			"sourceLabel": "Pacific Pneumatic, catalogue officiel cat99, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 9cd7362e8a9535da77c3c2d97b1c4dc891fa64dcef58bfe5f21055c6706232dd. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-pacific-catalog-p5"
		],
		"workingPressureBar": [
			"october5-tools-pacific-catalog-p5"
		],
		"demandExplanation": [
			"october5-tools-pacific-catalog-p5"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
