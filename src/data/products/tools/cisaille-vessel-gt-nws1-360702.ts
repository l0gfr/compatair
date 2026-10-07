import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-vessel-gt-nws1-360702",
	"slug": "cisaille-vessel-gt-nws1-360702",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "VESSEL GT-NWS1 (réf. 360702)",
	"brand": "VESSEL",
	"model": "GT-NWS1",
	"mpn": "360702",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4,
		"max": 5
	},
	"demandExplanation": "Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-vessel-gt-nws1-360702.webp",
		"alt": "Repères techniques : VESSEL GT-NWS1 (réf. 360702)",
		"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360702",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-nws1",
		"label": "Référence 360702",
		"distinguishingAttributes": {
			"reference": "360702",
			"Capacity O/D (mm) Copper": "1",
			"Capacity O/D (mm) Steel": "0.5"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-NWS1 (réf. 360702). Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée. Capacity O/D (mm) Copper : 1. Capacity O/D (mm) Steel : 0.5.",
		"verifiedFacts": [
			"Capacity O/D (mm) Copper : 1.",
			"Capacity O/D (mm) Steel : 0.5.",
			"Capacity O/D (mm) ABS Plastic : 2.",
			"Air consumption (cm3 /str.) : 45.",
			"Air pressure (MPa) : 0.4 to 0.5.",
			"Applired pressure (N) : 294.",
			"Overall Length (mm) : 95.",
			"Weight (g) : 116.",
			"Code No. : 360702."
		],
		"limitations": [
			"Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée.",
			"Corps de pince pneumatique ; lame à choisir selon le matériau et la configuration fabricant. La page ne constitue pas un essai CompatAir.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacity O/D (mm) Copper",
			"value": "1",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws1-html-p1"
			]
		},
		{
			"label": "Capacity O/D (mm) Steel",
			"value": "0.5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws1-html-p1"
			]
		},
		{
			"label": "Capacity O/D (mm) ABS Plastic",
			"value": "2",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws1-html-p1"
			]
		},
		{
			"label": "Air consumption (cm3 /str.)",
			"value": "45",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws1-html-p1"
			]
		},
		{
			"label": "Air pressure (MPa)",
			"value": "0.4 to 0.5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws1-html-p1"
			]
		},
		{
			"label": "Applired pressure (N)",
			"value": "294",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws1-html-p1"
			]
		},
		{
			"label": "Overall Length (mm)",
			"value": "95",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws1-html-p1"
			]
		},
		{
			"label": "Weight (g)",
			"value": "116",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws1-html-p1"
			]
		},
		{
			"label": "Code No.",
			"value": "360702",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws1-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air pressure (MPa): 0.4 to 0.5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws1-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-gt-nws1-html-p1",
			"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360702",
			"sourceLabel": "VESSEL, fiche constructeur individuelle GT-NWS1",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 1374503b26bb397721594f067602322dd42a9cb25e2d68607806b088bc5a2879. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-gt-nws1-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-gt-nws1-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-gt-nws1-html-p1"
		]
	},
	"notes": [
		"Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée."
	]
};

export default product;
