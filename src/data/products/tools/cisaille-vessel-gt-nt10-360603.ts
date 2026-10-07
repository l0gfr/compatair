import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-vessel-gt-nt10-360603",
	"slug": "cisaille-vessel-gt-nt10-360603",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "VESSEL GT-NT10 (réf. 360603)",
	"brand": "VESSEL",
	"model": "GT-NT10",
	"mpn": "360603",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4,
		"max": 5
	},
	"demandExplanation": "Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-vessel-gt-nt10-360603.webp",
		"alt": "Repères techniques : VESSEL GT-NT10 (réf. 360603)",
		"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360603",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-nt10",
		"label": "Référence 360603",
		"distinguishingAttributes": {
			"reference": "360603",
			"Capacity O/D (mm) Soft Plastic": "3.5",
			"Capacity O/D (mm) Hard Plastic": "2.3"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-NT10 (réf. 360603). Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée. Capacity O/D (mm) Soft Plastic : 3.5. Capacity O/D (mm) Hard Plastic : 2.3.",
		"verifiedFacts": [
			"Capacity O/D (mm) Soft Plastic : 3.5.",
			"Capacity O/D (mm) Hard Plastic : 2.3.",
			"Slide range (mm) : 0 to 3.",
			"Air consumption (cm3 /str.) : 82.",
			"Air pressure (MPa) : 0.4 to 0.5.",
			"Hose I/D (mm) : I/D 2.5.",
			"Overall Length (mm) : 73.",
			"Weight (g) : 515.",
			"Code No. : 360603."
		],
		"limitations": [
			"Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée.",
			"Corps de pince pneumatique ; lame à choisir selon le matériau et la configuration fabricant. La page ne constitue pas un essai CompatAir.",
			"Le diamètre intérieur publié « I/D 2.5 » (Hose I/D (mm)) n’est pas converti en une valeur de calcul.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacity O/D (mm) Soft Plastic",
			"value": "3.5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nt10-html-p1"
			]
		},
		{
			"label": "Capacity O/D (mm) Hard Plastic",
			"value": "2.3",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nt10-html-p1"
			]
		},
		{
			"label": "Slide range (mm)",
			"value": "0 to 3",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nt10-html-p1"
			]
		},
		{
			"label": "Air consumption (cm3 /str.)",
			"value": "82",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nt10-html-p1"
			]
		},
		{
			"label": "Air pressure (MPa)",
			"value": "0.4 to 0.5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nt10-html-p1"
			]
		},
		{
			"label": "Hose I/D (mm)",
			"value": "I/D 2.5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nt10-html-p1"
			]
		},
		{
			"label": "Overall Length (mm)",
			"value": "73",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nt10-html-p1"
			]
		},
		{
			"label": "Weight (g)",
			"value": "515",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nt10-html-p1"
			]
		},
		{
			"label": "Code No.",
			"value": "360603",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nt10-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Hose I/D (mm)",
			"value": "I/D 2.5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nt10-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air pressure (MPa): 0.4 to 0.5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nt10-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-gt-nt10-html-p1",
			"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360603",
			"sourceLabel": "VESSEL, fiche constructeur individuelle GT-NT10",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 941885416232e0d360efa4362ca6438b7283832375b47e5d9db7ca00371dc446. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-gt-nt10-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-gt-nt10-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-gt-nt10-html-p1"
		]
	},
	"notes": [
		"Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée."
	]
};

export default product;
