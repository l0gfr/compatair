import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-hsutech-hct-av105",
	"slug": "scie-hsutech-hct-av105",
	"categoryId": "scie",
	"category": "scie",
	"label": "HsuTech HCT-AV105",
	"brand": "HsuTech",
	"model": "HCT-AV105",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-hsutech-hct-av105.svg",
		"alt": "Repères techniques : HsuTech HCT-AV105",
		"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hsutech-hct-av105",
		"label": "Modèle HCT-AV105, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "HCT-AV105",
			"mm Cuttin Stroke Length St (mm)": "10",
			"g Capacity eel Plate (mm)": "3"
		}
	},
	"editorial": {
		"overview": "HsuTech HCT-AV105. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"mm Cuttin Stroke Length St (mm) : 10.",
			"g Capacity eel Plate (mm) : 3.",
			"mm Stroke Per Min. S.P.M : 9500.",
			"Overall Length (inch) : 160.",
			"Air Hose I.D inch (mm) : 3/8”(10).",
			"Noise Level (dBA) : 88.",
			"Vibration ( M/S ²) : 3."
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
			"label": "mm Cuttin Stroke Length St (mm)",
			"value": "10",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p23"
			]
		},
		{
			"label": "g Capacity eel Plate (mm)",
			"value": "3",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p23"
			]
		},
		{
			"label": "mm Stroke Per Min. S.P.M",
			"value": "9500",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p23"
			]
		},
		{
			"label": "Overall Length (inch)",
			"value": "160",
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
			"label": "Noise Level (dBA)",
			"value": "88",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p23"
			]
		},
		{
			"label": "Vibration ( M/S ²)",
			"value": "3",
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
