import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-hsutech-hns-3000lrn",
	"slug": "derouilleur-a-aiguilles-hsutech-hns-3000lrn",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "HsuTech HNS-3000LRN",
	"brand": "HsuTech",
	"model": "HNS-3000LRN",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-hsutech-hns-3000lrn.svg",
		"alt": "Repères techniques : HsuTech HNS-3000LRN",
		"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hsutech-hns-3000lrn",
		"label": "Modèle HNS-3000LRN, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "HNS-3000LRN",
			"Blow Per Min": "3000",
			"Piston Stroke": "24mm"
		}
	},
	"editorial": {
		"overview": "HsuTech HNS-3000LRN. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Blow Per Min : 3000.",
			"Piston Stroke : 24mm.",
			"Needle (Dia/Length) mm(cm) : 1.4/6.",
			"Air Hose I.D inch (mm) : 3/8”(10).",
			"Overall Length (mm) : 235.6.",
			"Noise Level (dBA) : 89."
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
			"label": "Blow Per Min",
			"value": "3000",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p29"
			]
		},
		{
			"label": "Piston Stroke",
			"value": "24mm",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p29"
			]
		},
		{
			"label": "Needle (Dia/Length) mm(cm)",
			"value": "1.4/6",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p29"
			]
		},
		{
			"label": "Air Hose I.D inch (mm)",
			"value": "3/8”(10)",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p29"
			]
		},
		{
			"label": "Overall Length (mm)",
			"value": "235.6",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p29"
			]
		},
		{
			"label": "Noise Level (dBA)",
			"value": "89",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p29"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-hsutech-catalog-2024-p29",
			"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf#page=29",
			"sourceLabel": "HsuTech, catalogue officiel2024, page PDF 29",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 13caec587725c0a38a9e9f3bb7dd49d62d1a6b80cc1c0b1144f143875df2827f. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-hsutech-catalog-2024-p29"
		],
		"workingPressureBar": [
			"october5-tools-hsutech-catalog-2024-p29"
		],
		"demandExplanation": [
			"october5-tools-hsutech-catalog-2024-p29"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
