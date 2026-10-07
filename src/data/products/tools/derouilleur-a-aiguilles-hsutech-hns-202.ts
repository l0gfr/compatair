import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-hsutech-hns-202",
	"slug": "derouilleur-a-aiguilles-hsutech-hns-202",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "HsuTech HNS-202",
	"brand": "HsuTech",
	"model": "HNS-202",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-hsutech-hns-202.svg",
		"alt": "Repères techniques : HsuTech HNS-202",
		"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hsutech-hns-202",
		"label": "Modèle HNS-202, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "HNS-202",
			"Blow Per Minute": "4300",
			"Needle (Dia/Length) mm(cm)": "3/18"
		}
	},
	"editorial": {
		"overview": "HsuTech HNS-202. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Blow Per Minute : 4300.",
			"Needle (Dia/Length) mm(cm) : 3/18.",
			"Stroke O Length L (mm) : 20.",
			"verall ength mm : 280.",
			"Air Hose inch (mm) : 3/8”(10).",
			"Bore Dia inch(mm) : 0.91”(23).",
			"Vibration ( M/S ²) : 16.94."
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
			"value": "4300",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p29"
			]
		},
		{
			"label": "Needle (Dia/Length) mm(cm)",
			"value": "3/18",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p29"
			]
		},
		{
			"label": "Stroke O Length L (mm)",
			"value": "20",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p29"
			]
		},
		{
			"label": "verall ength mm",
			"value": "280",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p29"
			]
		},
		{
			"label": "Air Hose inch (mm)",
			"value": "3/8”(10)",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p29"
			]
		},
		{
			"label": "Bore Dia inch(mm)",
			"value": "0.91”(23)",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p29"
			]
		},
		{
			"label": "Vibration ( M/S ²)",
			"value": "16.94",
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
