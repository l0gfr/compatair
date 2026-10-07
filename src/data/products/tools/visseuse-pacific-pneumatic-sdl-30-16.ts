import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-pacific-pneumatic-sdl-30-16",
	"slug": "visseuse-pacific-pneumatic-sdl-30-16",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Pacific Pneumatic SDL-30-16",
	"brand": "Pacific Pneumatic",
	"model": "SDL-30-16",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-pacific-pneumatic-sdl-30-16.svg",
		"alt": "Repères techniques : Pacific Pneumatic SDL-30-16",
		"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pacific-pneumatic-sdl-30-16",
		"label": "Modèle SDL-30-16, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "SDL-30-16",
			"RPM": "1600",
			"Length (inch)": "8 7/8"
		}
	},
	"editorial": {
		"overview": "Pacific Pneumatic SDL-30-16. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"RPM : 1600.",
			"Length (inch) : 8 7/8.",
			"Weight (lb) : 1.25.",
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
			"value": "1600",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p14"
			]
		},
		{
			"label": "Length (inch)",
			"value": "8 7/8",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p14"
			]
		},
		{
			"label": "Weight (lb)",
			"value": "1.25",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p14"
			]
		},
		{
			"label": "Air Inlet NPT (inch)",
			"value": "1/4",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p14"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pacific-catalog-p14",
			"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf#page=14",
			"sourceLabel": "Pacific Pneumatic, catalogue officiel cat99, page PDF 14",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 9cd7362e8a9535da77c3c2d97b1c4dc891fa64dcef58bfe5f21055c6706232dd. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-pacific-catalog-p14"
		],
		"workingPressureBar": [
			"october5-tools-pacific-catalog-p14"
		],
		"demandExplanation": [
			"october5-tools-pacific-catalog-p14"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
