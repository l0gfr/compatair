import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-bande-hsutech-has-bs7076",
	"slug": "ponceuse-bande-hsutech-has-bs7076",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "HsuTech HAS-BS7076",
	"brand": "HsuTech",
	"model": "HAS-BS7076",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-bande-hsutech-has-bs7076.svg",
		"alt": "Repères techniques : HsuTech HAS-BS7076",
		"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hsutech-has-bs7076",
		"label": "Modèle HAS-BS7076, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "HAS-BS7076",
			"Free Speed": "18000",
			"Overall Length": "325"
		}
	},
	"editorial": {
		"overview": "HsuTech HAS-BS7076. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 18000.",
			"Overall Length : 325.",
			"Air Hose I.D inch (mm) : 3/8”(10).",
			"Vibration ( M/S ²) : 0.98.",
			"Noise Level (dBA) : 82."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"La valeur Avg. Air Consumption est une consommation moyenne ; le catalogue ne fournit pas de cycle permettant de la convertir en débit continu en charge.",
			"La pression Recommended Air Pressure est une prescription de fonctionnement et n’est pas présentée comme une pression d’essai de consommation.",
			"Les cellules et unités sont conservées telles qu’imprimées. Des intitulés mixtes ou valeurs incompatibles restent inconnus pour le moteur.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Free Speed",
			"value": "18000",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p23"
			]
		},
		{
			"label": "Overall Length",
			"value": "325",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p23"
			]
		},
		{
			"label": "Air Hose I.D inch (mm)",
			"value": "3/8”(10)",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p23"
			]
		},
		{
			"label": "Vibration ( M/S ²)",
			"value": "0.98",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p23"
			]
		},
		{
			"label": "Noise Level (dBA)",
			"value": "82",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p23"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-hsutech-catalog-2024-p23",
			"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf#page=23",
			"sourceLabel": "HsuTech, catalogue officiel2024, page PDF 23",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 13caec587725c0a38a9e9f3bb7dd49d62d1a6b80cc1c0b1144f143875df2827f. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-hsutech-catalog-2024-p23"
		],
		"workingPressureBar": [
			"october5-tools-hsutech-catalog-2024-p23"
		],
		"demandExplanation": [
			"october5-tools-hsutech-catalog-2024-p23"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
