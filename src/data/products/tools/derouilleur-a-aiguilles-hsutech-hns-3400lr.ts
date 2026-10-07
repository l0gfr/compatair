import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-hsutech-hns-3400lr",
	"slug": "derouilleur-a-aiguilles-hsutech-hns-3400lr",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "HsuTech HNS-3400LR",
	"brand": "HsuTech",
	"model": "HNS-3400LR",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-hsutech-hns-3400lr.svg",
		"alt": "Repères techniques : HsuTech HNS-3400LR",
		"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hsutech-hns-3400lr",
		"label": "Modèle HNS-3400LR, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "HNS-3400LR",
			"Blow Per Min": "3400",
			"Piston Stroke": "20mm"
		}
	},
	"editorial": {
		"overview": "HsuTech HNS-3400LR. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Blow Per Min : 3400.",
			"Piston Stroke : 20mm.",
			"Needle (Dia/Length) mm(cm) : 3/11.5.",
			"Air Hose inch(mm) : 1/4”.",
			"Overall Length (mm) : 214.",
			"Noise Level (dBA) : 92."
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
			"value": "3400",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p29"
			]
		},
		{
			"label": "Piston Stroke",
			"value": "20mm",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p29"
			]
		},
		{
			"label": "Needle (Dia/Length) mm(cm)",
			"value": "3/11.5",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p29"
			]
		},
		{
			"label": "Air Hose inch(mm)",
			"value": "1/4”",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p29"
			]
		},
		{
			"label": "Overall Length (mm)",
			"value": "214",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p29"
			]
		},
		{
			"label": "Noise Level (dBA)",
			"value": "92",
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
