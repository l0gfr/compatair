import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "graveur-hsutech-hep-c01",
	"slug": "graveur-hsutech-hep-c01",
	"categoryId": "graveur",
	"category": "graveur",
	"label": "HsuTech HEP-C01",
	"brand": "HsuTech",
	"model": "HEP-C01",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/graveur-hsutech-hep-c01.svg",
		"alt": "Repères techniques : HsuTech HEP-C01",
		"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hsutech-hep-c01",
		"label": "Modèle HEP-C01, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "HEP-C01",
			"Blow Per Minute": "13000",
			"Overall Length (mm)": "140"
		}
	},
	"editorial": {
		"overview": "HsuTech HEP-C01. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Blow Per Minute : 13000.",
			"Overall Length (mm) : 140.",
			"Hose Assy Length(mm) : 1420.",
			"Air Hose I.D inch (mm) : 3/8”(10).",
			"Vibration ( M/S ²) : 2.5.",
			"Noise Level (dBA) : 78."
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
			"label": "Blow Per Minute",
			"value": "13000",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p31"
			]
		},
		{
			"label": "Overall Length (mm)",
			"value": "140",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p31"
			]
		},
		{
			"label": "Hose Assy Length(mm)",
			"value": "1420",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p31"
			]
		},
		{
			"label": "Air Hose I.D inch (mm)",
			"value": "3/8”(10)",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p31"
			]
		},
		{
			"label": "Vibration ( M/S ²)",
			"value": "2.5",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p31"
			]
		},
		{
			"label": "Noise Level (dBA)",
			"value": "78",
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
