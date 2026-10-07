import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-pacific-pneumatic-ldg-40-220",
	"slug": "meuleuse-pacific-pneumatic-ldg-40-220",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Pacific Pneumatic LDG-40-220",
	"brand": "Pacific Pneumatic",
	"model": "LDG-40-220",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-pacific-pneumatic-ldg-40-220.svg",
		"alt": "Repères techniques : Pacific Pneumatic LDG-40-220",
		"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pacific-pneumatic-ldg-40-220",
		"label": "Modèle LDG-40-220, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "LDG-40-220",
			"RPM": "REAR",
			"Length (inch)": "7 5/8"
		}
	},
	"editorial": {
		"overview": "Pacific Pneumatic LDG-40-220. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"RPM : REAR.",
			"Length (inch) : 7 5/8.",
			"Weight (lb) : 1.30.",
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
			"value": "REAR",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p6"
			]
		},
		{
			"label": "Length (inch)",
			"value": "7 5/8",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p6"
			]
		},
		{
			"label": "Weight (lb)",
			"value": "1.30",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p6"
			]
		},
		{
			"label": "Air Inlet NPT (inch)",
			"value": "1/4",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p6"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pacific-catalog-p6",
			"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf#page=6",
			"sourceLabel": "Pacific Pneumatic, catalogue officiel cat99, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 9cd7362e8a9535da77c3c2d97b1c4dc891fa64dcef58bfe5f21055c6706232dd. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-pacific-catalog-p6"
		],
		"workingPressureBar": [
			"october5-tools-pacific-catalog-p6"
		],
		"demandExplanation": [
			"october5-tools-pacific-catalog-p6"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
