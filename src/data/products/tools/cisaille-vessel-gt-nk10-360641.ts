import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-vessel-gt-nk10-360641",
	"slug": "cisaille-vessel-gt-nk10-360641",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "VESSEL GT-NK10 (réf. 360641)",
	"brand": "VESSEL",
	"model": "GT-NK10",
	"mpn": "360641",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 6
	},
	"demandExplanation": "Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-vessel-gt-nk10-360641.webp",
		"alt": "Repères techniques : VESSEL GT-NK10 (réf. 360641)",
		"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360641",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-nk10",
		"label": "Référence 360641",
		"distinguishingAttributes": {
			"reference": "360641",
			"Capacity O/D (mm) ABS Plastic": "5",
			"Air consumption (cm3 /str.)": "110"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-NK10 (réf. 360641). Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée. Capacity O/D (mm) ABS Plastic : 5. Air consumption (cm3 /str.) : 110.",
		"verifiedFacts": [
			"Capacity O/D (mm) ABS Plastic : 5.",
			"Air consumption (cm3 /str.) : 110.",
			"Air pressure (MPa) : 0.5 to 0.6.",
			"Applired pressure (N) : 735.",
			"Hose I/D (mm) : I/D 2.5 x O/D 4.",
			"Position Accuracy (mm) : 12.",
			"Overall Length (mm) : 230.5.",
			"Weight (g) : 800.",
			"Code No. : 360641."
		],
		"limitations": [
			"Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée.",
			"Corps de pince pneumatique ; lame à choisir selon le matériau et la configuration fabricant. La page ne constitue pas un essai CompatAir.",
			"Le diamètre intérieur publié « I/D 2.5 x O/D 4 » (Hose I/D (mm)) n’est pas converti en une valeur de calcul.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacity O/D (mm) ABS Plastic",
			"value": "5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nk10-html-p1"
			]
		},
		{
			"label": "Air consumption (cm3 /str.)",
			"value": "110",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nk10-html-p1"
			]
		},
		{
			"label": "Air pressure (MPa)",
			"value": "0.5 to 0.6",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nk10-html-p1"
			]
		},
		{
			"label": "Applired pressure (N)",
			"value": "735",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nk10-html-p1"
			]
		},
		{
			"label": "Hose I/D (mm)",
			"value": "I/D 2.5 x O/D 4",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nk10-html-p1"
			]
		},
		{
			"label": "Position Accuracy (mm)",
			"value": "12",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nk10-html-p1"
			]
		},
		{
			"label": "Overall Length (mm)",
			"value": "230.5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nk10-html-p1"
			]
		},
		{
			"label": "Weight (g)",
			"value": "800",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nk10-html-p1"
			]
		},
		{
			"label": "Code No.",
			"value": "360641",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nk10-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Hose I/D (mm)",
			"value": "I/D 2.5 x O/D 4",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nk10-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air pressure (MPa): 0.5 to 0.6",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nk10-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-gt-nk10-html-p1",
			"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360641",
			"sourceLabel": "VESSEL, fiche constructeur individuelle GT-NK10",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 2561263e36b813b4194f1202490fd407bbfa0bd0f3a0730d4d41c31e927aabe6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-gt-nk10-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-gt-nk10-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-gt-nk10-html-p1"
		]
	},
	"notes": [
		"Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée."
	]
};

export default product;
