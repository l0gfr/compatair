import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-vessel-gt-h30-360211",
	"slug": "cisaille-vessel-gt-h30-360211",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "VESSEL GT-H30 (réf. 360211)",
	"brand": "VESSEL",
	"model": "GT-H30",
	"mpn": "360211",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 3
	},
	"demandExplanation": "Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée.",
	"recommendedHose": {
		"innerDiameterMm": 5
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-vessel-gt-h30-360211.webp",
		"alt": "Repères techniques : VESSEL GT-H30 (réf. 360211)",
		"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360211",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-h30",
		"label": "Référence 360211",
		"distinguishingAttributes": {
			"reference": "360211",
			"Capacity (max) (mm) Kevlar": "1",
			"Air consumption (cm3 /str.)": "584"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-H30 (réf. 360211). Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée. Capacity (max) (mm) Kevlar : 1. Air consumption (cm3 /str.) : 584.",
		"verifiedFacts": [
			"Capacity (max) (mm) Kevlar : 1.",
			"Air consumption (cm3 /str.) : 584.",
			"Air pressure (MPa) : 0.3.",
			"Hose I/D (mm) : R1/4(Body Rc1/8).",
			"Hose Coupling I/D (mm) : 5.",
			"Overall Length (mm) : 280.",
			"Weight (g) : 1030.",
			"Code No. : 360211."
		],
		"limitations": [
			"Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée.",
			"Corps de pince pneumatique ; lame à choisir selon le matériau et la configuration fabricant. La page ne constitue pas un essai CompatAir.",
			"Le diamètre intérieur publié « R1/4(Body Rc1/8) » (Hose I/D (mm)) n’est pas converti en une valeur de calcul.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacity (max) (mm) Kevlar",
			"value": "1",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-h30-html-p1"
			]
		},
		{
			"label": "Air consumption (cm3 /str.)",
			"value": "584",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-h30-html-p1"
			]
		},
		{
			"label": "Air pressure (MPa)",
			"value": "0.3",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-h30-html-p1"
			]
		},
		{
			"label": "Hose I/D (mm)",
			"value": "R1/4(Body Rc1/8)",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-h30-html-p1"
			]
		},
		{
			"label": "Hose Coupling I/D (mm)",
			"value": "5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-h30-html-p1"
			]
		},
		{
			"label": "Overall Length (mm)",
			"value": "280",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-h30-html-p1"
			]
		},
		{
			"label": "Weight (g)",
			"value": "1030",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-h30-html-p1"
			]
		},
		{
			"label": "Code No.",
			"value": "360211",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-h30-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Hose I/D (mm)",
			"value": "R1/4(Body Rc1/8)",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-h30-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Hose Coupling I/D (mm)",
			"value": "5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-h30-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air pressure (MPa): 0.3",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-h30-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-gt-h30-html-p1",
			"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360211",
			"sourceLabel": "VESSEL, fiche constructeur individuelle GT-H30",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0aa05fb2dff6e3c0ec06dd7787e4f07b8d641cdcd66bf97eef6bb9ffabcfb754. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"recommendedHose": [
			"october2b-tools-oct2b-gt-h30-html-p1"
		],
		"mpn": [
			"october2b-tools-oct2b-gt-h30-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-gt-h30-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-gt-h30-html-p1"
		]
	},
	"notes": [
		"Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée."
	]
};

export default product;
