import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-hsutech-had-35115",
	"slug": "meuleuse-hsutech-had-35115",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "HsuTech HAD-35115",
	"brand": "HsuTech",
	"model": "HAD-35115",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-hsutech-had-35115.svg",
		"alt": "Repères techniques : HsuTech HAD-35115",
		"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hsutech-had-35115",
		"label": "Modèle HAD-35115, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "HAD-35115",
			"COLLET SIZE inch(mm)": "1/4” (6)",
			"Free Speed": "22000"
		}
	},
	"editorial": {
		"overview": "HsuTech HAD-35115. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"COLLET SIZE inch(mm) : 1/4” (6).",
			"Free Speed : 22000.",
			"Overall Length : 178.",
			"Air Hose I.D inch (mm) : 3/8”(10).",
			"Vibration ( M/S ²) : 0.4.",
			"Noise Level (dBA) : 85."
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
			"value": "1/4” (6)",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p15"
			]
		},
		{
			"label": "Free Speed",
			"value": "22000",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p15"
			]
		},
		{
			"label": "Overall Length",
			"value": "178",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p15"
			]
		},
		{
			"label": "Air Hose I.D inch (mm)",
			"value": "3/8”(10)",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p15"
			]
		},
		{
			"label": "Vibration ( M/S ²)",
			"value": "0.4",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p15"
			]
		},
		{
			"label": "Noise Level (dBA)",
			"value": "85",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p15"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-hsutech-catalog-2024-p15",
			"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf#page=15",
			"sourceLabel": "HsuTech, catalogue officiel2024, page PDF 15",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 13caec587725c0a38a9e9f3bb7dd49d62d1a6b80cc1c0b1144f143875df2827f. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-hsutech-catalog-2024-p15"
		],
		"workingPressureBar": [
			"october5-tools-hsutech-catalog-2024-p15"
		],
		"demandExplanation": [
			"october5-tools-hsutech-catalog-2024-p15"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
