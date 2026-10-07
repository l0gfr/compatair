import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-hsutech-hmd-868",
	"slug": "meuleuse-hsutech-hmd-868",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "HsuTech HMD-868",
	"brand": "HsuTech",
	"model": "HMD-868",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-hsutech-hmd-868.svg",
		"alt": "Repères techniques : HsuTech HMD-868",
		"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hsutech-hmd-868",
		"label": "Modèle HMD-868, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "HMD-868",
			"Free Speed": "70000",
			"Motor HP": "0.6"
		}
	},
	"editorial": {
		"overview": "HsuTech HMD-868. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 70000.",
			"Motor HP : 0.6.",
			"Overall Length : 150.",
			"Collet Size inch (mm) : 1/8”(3).",
			"Air Hose Size (inch) : 3/8”.",
			"Vibration ( M/S ²) : 2.",
			"Noise Level (dBA) : 72."
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
			"value": "70000",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p31"
			]
		},
		{
			"label": "Motor HP",
			"value": "0.6",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p31"
			]
		},
		{
			"label": "Overall Length",
			"value": "150",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p31"
			]
		},
		{
			"label": "Collet Size inch (mm)",
			"value": "1/8”(3)",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p31"
			]
		},
		{
			"label": "Air Hose Size (inch)",
			"value": "3/8”",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p31"
			]
		},
		{
			"label": "Vibration ( M/S ²)",
			"value": "2",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p31"
			]
		},
		{
			"label": "Noise Level (dBA)",
			"value": "72",
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
