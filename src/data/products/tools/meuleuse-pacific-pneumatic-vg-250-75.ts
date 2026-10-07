import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-pacific-pneumatic-vg-250-75",
	"slug": "meuleuse-pacific-pneumatic-vg-250-75",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Pacific Pneumatic VG-250-75",
	"brand": "Pacific Pneumatic",
	"model": "VG-250-75",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-pacific-pneumatic-vg-250-75.svg",
		"alt": "Repères techniques : Pacific Pneumatic VG-250-75",
		"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pacific-pneumatic-vg-250-75",
		"label": "Modèle VG-250-75, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "VG-250-75",
			"RPM": "7500",
			"Height (inch)": "6 7/8"
		}
	},
	"editorial": {
		"overview": "Pacific Pneumatic VG-250-75. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"RPM : 7500.",
			"Height (inch) : 6 7/8.",
			"Weight (lb) : 8.50.",
			"Air Inlet NPT (inch) : 1/2."
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
			"value": "7500",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p8"
			]
		},
		{
			"label": "Height (inch)",
			"value": "6 7/8",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p8"
			]
		},
		{
			"label": "Weight (lb)",
			"value": "8.50",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p8"
			]
		},
		{
			"label": "Air Inlet NPT (inch)",
			"value": "1/2",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p8"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pacific-catalog-p8",
			"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf#page=8",
			"sourceLabel": "Pacific Pneumatic, catalogue officiel cat99, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 9cd7362e8a9535da77c3c2d97b1c4dc891fa64dcef58bfe5f21055c6706232dd. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-pacific-catalog-p8"
		],
		"workingPressureBar": [
			"october5-tools-pacific-catalog-p8"
		],
		"demandExplanation": [
			"october5-tools-pacific-catalog-p8"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
