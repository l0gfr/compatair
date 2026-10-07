import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-pacific-pneumatic-da-30-150",
	"slug": "perceuse-pacific-pneumatic-da-30-150",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Pacific Pneumatic DA-30-150",
	"brand": "Pacific Pneumatic",
	"model": "DA-30-150",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-pacific-pneumatic-da-30-150.svg",
		"alt": "Repères techniques : Pacific Pneumatic DA-30-150",
		"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pacific-pneumatic-da-30-150",
		"label": "Modèle DA-30-150, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "DA-30-150",
			"RPM": "15000",
			"Length (inch)": "5 3/4"
		}
	},
	"editorial": {
		"overview": "Pacific Pneumatic DA-30-150. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"RPM : 15000.",
			"Length (inch) : 5 3/4.",
			"Weight (lb) : 1.40.",
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
			"value": "15000",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p5"
			]
		},
		{
			"label": "Length (inch)",
			"value": "5 3/4",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p5"
			]
		},
		{
			"label": "Weight (lb)",
			"value": "1.40",
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
