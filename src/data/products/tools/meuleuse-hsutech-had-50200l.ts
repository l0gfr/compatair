import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-hsutech-had-50200l",
	"slug": "meuleuse-hsutech-had-50200l",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "HsuTech HAD-50200L",
	"brand": "HsuTech",
	"model": "HAD-50200L",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-hsutech-had-50200l.svg",
		"alt": "Repères techniques : HsuTech HAD-50200L",
		"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hsutech-had-50200l",
		"label": "Modèle HAD-50200L, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "HAD-50200L",
			"Collet Size inch(mm)": "1/4”(6)",
			"Motor HP (W)": "0.5(373)"
		}
	},
	"editorial": {
		"overview": "HsuTech HAD-50200L. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Collet Size inch(mm) : 1/4”(6).",
			"Motor HP (W) : 0.5(373).",
			"Free Speed : 22000.",
			"Overall Length : 285.",
			"Air Hose I.D inch (mm) : 3/8”(10).",
			"Noise Level (dBA) : 80.",
			"Vibration ( M/S ²) : 0.6."
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
			"label": "Collet Size inch(mm)",
			"value": "1/4”(6)",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p17"
			]
		},
		{
			"label": "Motor HP (W)",
			"value": "0.5(373)",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p17"
			]
		},
		{
			"label": "Free Speed",
			"value": "22000",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p17"
			]
		},
		{
			"label": "Overall Length",
			"value": "285",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p17"
			]
		},
		{
			"label": "Air Hose I.D inch (mm)",
			"value": "3/8”(10)",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p17"
			]
		},
		{
			"label": "Noise Level (dBA)",
			"value": "80",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p17"
			]
		},
		{
			"label": "Vibration ( M/S ²)",
			"value": "0.6",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p17"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-hsutech-catalog-2024-p17",
			"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf#page=17",
			"sourceLabel": "HsuTech, catalogue officiel2024, page PDF 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 13caec587725c0a38a9e9f3bb7dd49d62d1a6b80cc1c0b1144f143875df2827f. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-hsutech-catalog-2024-p17"
		],
		"workingPressureBar": [
			"october5-tools-hsutech-catalog-2024-p17"
		],
		"demandExplanation": [
			"october5-tools-hsutech-catalog-2024-p17"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
