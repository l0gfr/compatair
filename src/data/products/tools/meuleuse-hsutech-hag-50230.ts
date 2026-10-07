import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-hsutech-hag-50230",
	"slug": "meuleuse-hsutech-hag-50230",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "HsuTech HAG-50230",
	"brand": "HsuTech",
	"model": "HAG-50230",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-hsutech-hag-50230.svg",
		"alt": "Repères techniques : HsuTech HAG-50230",
		"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hsutech-hag-50230",
		"label": "Modèle HAG-50230, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "HAG-50230",
			"Grinding Wheel inch(mm)": "2”(51)",
			"acity Motor HP inum (W)": "0.5(373)"
		}
	},
	"editorial": {
		"overview": "HsuTech HAG-50230. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Grinding Wheel inch(mm) : 2”(51).",
			"acity Motor HP inum (W) : 0.5(373).",
			"Free Speed : 15000.",
			"Overall Length : 180.",
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
			"label": "Grinding Wheel inch(mm)",
			"value": "2”(51)",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p19"
			]
		},
		{
			"label": "acity Motor HP inum (W)",
			"value": "0.5(373)",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p19"
			]
		},
		{
			"label": "Free Speed",
			"value": "15000",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p19"
			]
		},
		{
			"label": "Overall Length",
			"value": "180",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p19"
			]
		},
		{
			"label": "Air Hose I.D inch (mm)",
			"value": "3/8”(10)",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p19"
			]
		},
		{
			"label": "Noise Level (dBA)",
			"value": "81",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p19"
			]
		},
		{
			"label": "Vibration ( M/S ²)",
			"value": "0.6",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p19"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-hsutech-catalog-2024-p19",
			"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf#page=19",
			"sourceLabel": "HsuTech, catalogue officiel2024, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 13caec587725c0a38a9e9f3bb7dd49d62d1a6b80cc1c0b1144f143875df2827f. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-hsutech-catalog-2024-p19"
		],
		"workingPressureBar": [
			"october5-tools-hsutech-catalog-2024-p19"
		],
		"demandExplanation": [
			"october5-tools-hsutech-catalog-2024-p19"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
