import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-hsutech-hmd-35000",
	"slug": "meuleuse-hsutech-hmd-35000",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "HsuTech HMD-35000",
	"brand": "HsuTech",
	"model": "HMD-35000",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-hsutech-hmd-35000.svg",
		"alt": "Repères techniques : HsuTech HMD-35000",
		"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hsutech-hmd-35000",
		"label": "Modèle HMD-35000, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "HMD-35000",
			"COLLET SIZE inch(mm)": "3+6",
			"Free Speed": "30000"
		}
	},
	"editorial": {
		"overview": "HsuTech HMD-35000. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"COLLET SIZE inch(mm) : 3+6.",
			"Free Speed : 30000.",
			"Dia (mm) : 425.",
			"Air Hose Dia (mm) : min.5.",
			"Air Hose I.D (mm) : 1500.",
			"Vibration ( M/S ²) : 1.8.",
			"Noise Level (dBA) : 78.7."
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
			"label": "COLLET SIZE inch(mm)",
			"value": "3+6",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p31"
			]
		},
		{
			"label": "Free Speed",
			"value": "30000",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p31"
			]
		},
		{
			"label": "Dia (mm)",
			"value": "425",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p31"
			]
		},
		{
			"label": "Air Hose Dia (mm)",
			"value": "min.5",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p31"
			]
		},
		{
			"label": "Air Hose I.D (mm)",
			"value": "1500",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p31"
			]
		},
		{
			"label": "Vibration ( M/S ²)",
			"value": "1.8",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p31"
			]
		},
		{
			"label": "Noise Level (dBA)",
			"value": "78.7",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p31"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-hsutech-catalog-2024-p31",
			"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf#page=31",
			"sourceLabel": "HsuTech, catalogue officiel2024, page PDF 31",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 13caec587725c0a38a9e9f3bb7dd49d62d1a6b80cc1c0b1144f143875df2827f. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-hsutech-catalog-2024-p31"
		],
		"workingPressureBar": [
			"october5-tools-hsutech-catalog-2024-p31"
		],
		"demandExplanation": [
			"october5-tools-hsutech-catalog-2024-p31"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
