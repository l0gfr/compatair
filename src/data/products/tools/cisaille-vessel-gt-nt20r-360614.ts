import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-vessel-gt-nt20r-360614",
	"slug": "cisaille-vessel-gt-nt20r-360614",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "VESSEL GT-NT20R (réf. 360614)",
	"brand": "VESSEL",
	"model": "GT-NT20R",
	"mpn": "360614",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 6
	},
	"demandExplanation": "Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-vessel-gt-nt20r-360614.webp",
		"alt": "Repères techniques : VESSEL GT-NT20R (réf. 360614)",
		"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360614",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-nt20r",
		"label": "Référence 360614",
		"distinguishingAttributes": {
			"reference": "360614",
			"Capacity O/D (mm) Soft Plastic": "5",
			"Capacity O/D (mm) Hard Plastic": "3.4"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-NT20R (réf. 360614). Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée. Capacity O/D (mm) Soft Plastic : 5. Capacity O/D (mm) Hard Plastic : 3.4.",
		"verifiedFacts": [
			"Capacity O/D (mm) Soft Plastic : 5.",
			"Capacity O/D (mm) Hard Plastic : 3.4.",
			"Slide range (mm) : 0 to 8.",
			"Air consumption (cm3 /str.) : 203.",
			"Air pressure (MPa) : 0.5 to 0.6.",
			"Hose I/D (mm) : I/D 4.",
			"Overall Length (mm) : 103.",
			"Weight (g) : 930.",
			"Code No. : 360614."
		],
		"limitations": [
			"Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée.",
			"Corps de pince pneumatique ; lame à choisir selon le matériau et la configuration fabricant. La page ne constitue pas un essai CompatAir.",
			"Le diamètre intérieur publié « I/D 4 » (Hose I/D (mm)) n’est pas converti en une valeur de calcul.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacity O/D (mm) Soft Plastic",
			"value": "5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nt20r-html-p1"
			]
		},
		{
			"label": "Capacity O/D (mm) Hard Plastic",
			"value": "3.4",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nt20r-html-p1"
			]
		},
		{
			"label": "Slide range (mm)",
			"value": "0 to 8",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nt20r-html-p1"
			]
		},
		{
			"label": "Air consumption (cm3 /str.)",
			"value": "203",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nt20r-html-p1"
			]
		},
		{
			"label": "Air pressure (MPa)",
			"value": "0.5 to 0.6",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nt20r-html-p1"
			]
		},
		{
			"label": "Hose I/D (mm)",
			"value": "I/D 4",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nt20r-html-p1"
			]
		},
		{
			"label": "Overall Length (mm)",
			"value": "103",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nt20r-html-p1"
			]
		},
		{
			"label": "Weight (g)",
			"value": "930",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nt20r-html-p1"
			]
		},
		{
			"label": "Code No.",
			"value": "360614",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nt20r-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Hose I/D (mm)",
			"value": "I/D 4",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nt20r-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air pressure (MPa): 0.5 to 0.6",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nt20r-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-gt-nt20r-html-p1",
			"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360614",
			"sourceLabel": "VESSEL, fiche constructeur individuelle GT-NT20R",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 642eaa79457a8c563faea6d0979c242742c49286e6a2d7afa946da65e61bffd4. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-gt-nt20r-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-gt-nt20r-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-gt-nt20r-html-p1"
		]
	},
	"notes": [
		"Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée."
	]
};

export default product;
