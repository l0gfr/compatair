import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-vessel-gt-ny03g-360741",
	"slug": "cisaille-vessel-gt-ny03g-360741",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "VESSEL GT-NY03G (réf. 360741)",
	"brand": "VESSEL",
	"model": "GT-NY03G",
	"mpn": "360741",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4,
		"max": 5
	},
	"demandExplanation": "Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-vessel-gt-ny03g-360741.webp",
		"alt": "Repères techniques : VESSEL GT-NY03G (réf. 360741)",
		"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360741",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-ny03g",
		"label": "Référence 360741",
		"distinguishingAttributes": {
			"reference": "360741",
			"Capacity O/D (mm) Soft Plastic": "2",
			"Capacity O/D (mm) Hard Plastic": "1.3"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-NY03G (réf. 360741). Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée. Capacity O/D (mm) Soft Plastic : 2. Capacity O/D (mm) Hard Plastic : 1.3.",
		"verifiedFacts": [
			"Capacity O/D (mm) Soft Plastic : 2.",
			"Capacity O/D (mm) Hard Plastic : 1.3.",
			"Slide range (mm) : 0 to 3.",
			"Air consumption (cm3 /str.) : 37.",
			"Air pressure (MPa) : 0.4 to 0.5.",
			"Hose I/D (mm) : I/D 2.5.",
			"Overall Length (mm) : 74.5.",
			"Weight (g) : 160.",
			"Code No. : 360741."
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
			"value": "2",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-ny03g-html-p1"
			]
		},
		{
			"label": "Capacity O/D (mm) Hard Plastic",
			"value": "1.3",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-ny03g-html-p1"
			]
		},
		{
			"label": "Slide range (mm)",
			"value": "0 to 3",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-ny03g-html-p1"
			]
		},
		{
			"label": "Air consumption (cm3 /str.)",
			"value": "37",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-ny03g-html-p1"
			]
		},
		{
			"label": "Air pressure (MPa)",
			"value": "0.4 to 0.5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-ny03g-html-p1"
			]
		},
		{
			"label": "Hose I/D (mm)",
			"value": "I/D 2.5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-ny03g-html-p1"
			]
		},
		{
			"label": "Overall Length (mm)",
			"value": "74.5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-ny03g-html-p1"
			]
		},
		{
			"label": "Weight (g)",
			"value": "160",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-ny03g-html-p1"
			]
		},
		{
			"label": "Code No.",
			"value": "360741",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-ny03g-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Hose I/D (mm)",
			"value": "I/D 2.5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-ny03g-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air pressure (MPa): 0.4 to 0.5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-ny03g-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-gt-ny03g-html-p1",
			"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360741",
			"sourceLabel": "VESSEL, fiche constructeur individuelle GT-NY03G",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 019e50e9ee17cac7c353769ef1999eede223bff3985509c961fd661999f18180. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-gt-ny03g-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-gt-ny03g-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-gt-ny03g-html-p1"
		]
	},
	"notes": [
		"Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée."
	]
};

export default product;
