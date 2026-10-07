import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-hsutech-hdr-38225a",
	"slug": "perceuse-hsutech-hdr-38225a",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "HsuTech HDR-38225A",
	"brand": "HsuTech",
	"model": "HDR-38225A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-hsutech-hdr-38225a.svg",
		"alt": "Repères techniques : HsuTech HDR-38225A",
		"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hsutech-hdr-38225a",
		"label": "Modèle HDR-38225A, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "HDR-38225A",
			"Spindle Thread inch(mm)": "3/8”-24",
			"Chuck Size inch(mm)": "3/8”(10)"
		}
	},
	"editorial": {
		"overview": "HsuTech HDR-38225A. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Spindle Thread inch(mm) : 3/8”-24.",
			"Chuck Size inch(mm) : 3/8”(10).",
			"Motor HP (W) : 0.5(373).",
			"Free Speed : 1800.",
			"Overall Length : 205.",
			"Air Hose I.D inch (mm) : 3/8”(10).",
			"Noise Level (dBA) : 81.",
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
			"label": "Spindle Thread inch(mm)",
			"value": "3/8”-24",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p18"
			]
		},
		{
			"label": "Chuck Size inch(mm)",
			"value": "3/8”(10)",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p18"
			]
		},
		{
			"label": "Motor HP (W)",
			"value": "0.5(373)",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p18"
			]
		},
		{
			"label": "Free Speed",
			"value": "1800",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p18"
			]
		},
		{
			"label": "Overall Length",
			"value": "205",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p18"
			]
		},
		{
			"label": "Air Hose I.D inch (mm)",
			"value": "3/8”(10)",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p18"
			]
		},
		{
			"label": "Noise Level (dBA)",
			"value": "81",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p18"
			]
		},
		{
			"label": "Vibration ( M/S ²)",
			"value": "0.6",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p18"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-hsutech-catalog-2024-p18",
			"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf#page=18",
			"sourceLabel": "HsuTech, catalogue officiel2024, page PDF 18",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 13caec587725c0a38a9e9f3bb7dd49d62d1a6b80cc1c0b1144f143875df2827f. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-hsutech-catalog-2024-p18"
		],
		"workingPressureBar": [
			"october5-tools-hsutech-catalog-2024-p18"
		],
		"demandExplanation": [
			"october5-tools-hsutech-catalog-2024-p18"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
