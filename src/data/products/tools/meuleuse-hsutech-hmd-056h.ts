import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-hsutech-hmd-056h",
	"slug": "meuleuse-hsutech-hmd-056h",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "HsuTech HMD-056H",
	"brand": "HsuTech",
	"model": "HMD-056H",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-hsutech-hmd-056h.svg",
		"alt": "Repères techniques : HsuTech HMD-056H",
		"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hsutech-hmd-056h",
		"label": "Modèle HMD-056H, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "HMD-056H",
			"COLLET SIZE inch(mm)": "3",
			"Free Speed": "60000"
		}
	},
	"editorial": {
		"overview": "HsuTech HMD-056H. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"COLLET SIZE inch(mm) : 3.",
			"Free Speed : 60000.",
			"Dia (mm) : 325.",
			"Air Hose Dia (mm) : min.5.",
			"Air Hose I.D (mm) : 1500.",
			"Vibration ( M/S ²) : 0.8.",
			"Noise Level (dBA) : 80.4."
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
			"value": "3",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p31"
			]
		},
		{
			"label": "Free Speed",
			"value": "60000",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p31"
			]
		},
		{
			"label": "Dia (mm)",
			"value": "325",
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
			"value": "0.8",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p31"
			]
		},
		{
			"label": "Noise Level (dBA)",
			"value": "80.4",
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
