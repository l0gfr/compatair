import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-vessel-gt-hs30-360212",
	"slug": "cisaille-vessel-gt-hs30-360212",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "VESSEL GT-HS30 (réf. 360212)",
	"brand": "VESSEL",
	"model": "GT-HS30",
	"mpn": "360212",
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
		"src": "/images/products/cisaille-vessel-gt-hs30-360212.webp",
		"alt": "Repères techniques : VESSEL GT-HS30 (réf. 360212)",
		"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360212",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-hs30",
		"label": "Référence 360212",
		"distinguishingAttributes": {
			"reference": "360212",
			"Capacity (max) (mm) Kevlar": "1",
			"Air consumption (cm3 /str.)": "584"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-HS30 (réf. 360212). Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée. Capacity (max) (mm) Kevlar : 1. Air consumption (cm3 /str.) : 584.",
		"verifiedFacts": [
			"Capacity (max) (mm) Kevlar : 1.",
			"Air consumption (cm3 /str.) : 584.",
			"Air pressure (MPa) : 0.3.",
			"Hose I/D (mm) : R1/4(Body Rc1/8).",
			"Hose Coupling I/D (mm) : 5.",
			"Overall Length (mm) : 260.",
			"Weight (g) : 970.",
			"Code No. : 360212."
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
				"october2b-tools-oct2b-gt-hs30-html-p1"
			]
		},
		{
			"label": "Air consumption (cm3 /str.)",
			"value": "584",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-hs30-html-p1"
			]
		},
		{
			"label": "Air pressure (MPa)",
			"value": "0.3",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-hs30-html-p1"
			]
		},
		{
			"label": "Hose I/D (mm)",
			"value": "R1/4(Body Rc1/8)",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-hs30-html-p1"
			]
		},
		{
			"label": "Hose Coupling I/D (mm)",
			"value": "5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-hs30-html-p1"
			]
		},
		{
			"label": "Overall Length (mm)",
			"value": "260",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-hs30-html-p1"
			]
		},
		{
			"label": "Weight (g)",
			"value": "970",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-hs30-html-p1"
			]
		},
		{
			"label": "Code No.",
			"value": "360212",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-hs30-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Hose I/D (mm)",
			"value": "R1/4(Body Rc1/8)",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-hs30-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Hose Coupling I/D (mm)",
			"value": "5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-hs30-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air pressure (MPa): 0.3",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-hs30-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-gt-hs30-html-p1",
			"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360212",
			"sourceLabel": "VESSEL, fiche constructeur individuelle GT-HS30",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : d8d90e79ec24ed6ca4e77838265b79b3108523c550a7a4fe4f616672d2ce165e. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"recommendedHose": [
			"october2b-tools-oct2b-gt-hs30-html-p1"
		],
		"mpn": [
			"october2b-tools-oct2b-gt-hs30-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-gt-hs30-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-gt-hs30-html-p1"
		]
	},
	"notes": [
		"Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée."
	]
};

export default product;
