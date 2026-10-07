import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-vessel-gt-ny25-360680",
	"slug": "cisaille-vessel-gt-ny25-360680",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "VESSEL GT-NY25 (réf. 360680)",
	"brand": "VESSEL",
	"model": "GT-NY25",
	"mpn": "360680",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4,
		"max": 5
	},
	"demandExplanation": "Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-vessel-gt-ny25-360680.webp",
		"alt": "Repères techniques : VESSEL GT-NY25 (réf. 360680)",
		"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360680",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-ny25",
		"label": "Référence 360680",
		"distinguishingAttributes": {
			"reference": "360680",
			"Capacity O/D (mm) Soft Plastic": "5",
			"Capacity O/D (mm) Hard Plastic": "3.4"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-NY25 (réf. 360680). Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée. Capacity O/D (mm) Soft Plastic : 5. Capacity O/D (mm) Hard Plastic : 3.4.",
		"verifiedFacts": [
			"Capacity O/D (mm) Soft Plastic : 5.",
			"Capacity O/D (mm) Hard Plastic : 3.4.",
			"Slide range (mm) : 0 to 5.",
			"Air consumption (cm3 /str.) : 184.",
			"Air pressure (MPa) : 0.4 to 0.5.",
			"Hose I/D (mm) : I/D 4.",
			"Overall Length (mm) : 108.5.",
			"Weight (g) : 580.",
			"Code No. : 360680."
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
				"october2b-tools-oct2b-gt-ny25-html-p1"
			]
		},
		{
			"label": "Capacity O/D (mm) Hard Plastic",
			"value": "3.4",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-ny25-html-p1"
			]
		},
		{
			"label": "Slide range (mm)",
			"value": "0 to 5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-ny25-html-p1"
			]
		},
		{
			"label": "Air consumption (cm3 /str.)",
			"value": "184",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-ny25-html-p1"
			]
		},
		{
			"label": "Air pressure (MPa)",
			"value": "0.4 to 0.5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-ny25-html-p1"
			]
		},
		{
			"label": "Hose I/D (mm)",
			"value": "I/D 4",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-ny25-html-p1"
			]
		},
		{
			"label": "Overall Length (mm)",
			"value": "108.5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-ny25-html-p1"
			]
		},
		{
			"label": "Weight (g)",
			"value": "580",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-ny25-html-p1"
			]
		},
		{
			"label": "Code No.",
			"value": "360680",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-ny25-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Hose I/D (mm)",
			"value": "I/D 4",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-ny25-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air pressure (MPa): 0.4 to 0.5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-ny25-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-gt-ny25-html-p1",
			"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360680",
			"sourceLabel": "VESSEL, fiche constructeur individuelle GT-NY25",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b90af138f28fa4593d00607eb2d049e5e0a3553948cb39a10b280d8042f74b4e. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-gt-ny25-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-gt-ny25-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-gt-ny25-html-p1"
		]
	},
	"notes": [
		"Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée."
	]
};

export default product;
