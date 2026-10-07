import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-hsutech-hct-03252",
	"slug": "tronconneuse-hsutech-hct-03252",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "HsuTech HCT-03252",
	"brand": "HsuTech",
	"model": "HCT-03252",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-hsutech-hct-03252.svg",
		"alt": "Repères techniques : HsuTech HCT-03252",
		"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hsutech-hct-03252",
		"label": "Modèle HCT-03252, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "HCT-03252",
			"Cutting Wheel Fr Size (inch)": "3” 1",
			"ee Speed R.P.M": "6000"
		}
	},
	"editorial": {
		"overview": "HsuTech HCT-03252. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Cutting Wheel Fr Size (inch) : 3” 1.",
			"ee Speed R.P.M : 6000.",
			"Spindle Thread Ove inch(mm) : M10x1.5.",
			"rall Length (mm) : 250.",
			"Air Hose I.D inch (mm) : 3/8”(10).",
			"Noise Level (dBA) : 85.",
			"Vibration ( M/S ²) : 0.8."
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
			"label": "Cutting Wheel Fr Size (inch)",
			"value": "3” 1",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p22"
			]
		},
		{
			"label": "ee Speed R.P.M",
			"value": "6000",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p22"
			]
		},
		{
			"label": "Spindle Thread Ove inch(mm)",
			"value": "M10x1.5",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p22"
			]
		},
		{
			"label": "rall Length (mm)",
			"value": "250",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p22"
			]
		},
		{
			"label": "Air Hose I.D inch (mm)",
			"value": "3/8”(10)",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p22"
			]
		},
		{
			"label": "Noise Level (dBA)",
			"value": "85",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p22"
			]
		},
		{
			"label": "Vibration ( M/S ²)",
			"value": "0.8",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p22"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-hsutech-catalog-2024-p22",
			"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf#page=22",
			"sourceLabel": "HsuTech, catalogue officiel2024, page PDF 22",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 13caec587725c0a38a9e9f3bb7dd49d62d1a6b80cc1c0b1144f143875df2827f. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-hsutech-catalog-2024-p22"
		],
		"workingPressureBar": [
			"october5-tools-hsutech-catalog-2024-p22"
		],
		"demandExplanation": [
			"october5-tools-hsutech-catalog-2024-p22"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
