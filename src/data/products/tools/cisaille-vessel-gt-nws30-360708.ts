import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-vessel-gt-nws30-360708",
	"slug": "cisaille-vessel-gt-nws30-360708",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "VESSEL GT-NWS30 (réf. 360708)",
	"brand": "VESSEL",
	"model": "GT-NWS30",
	"mpn": "360708",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 6
	},
	"demandExplanation": "Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-vessel-gt-nws30-360708.webp",
		"alt": "Repères techniques : VESSEL GT-NWS30 (réf. 360708)",
		"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360708",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-nws30",
		"label": "Référence 360708",
		"distinguishingAttributes": {
			"reference": "360708",
			"Capacity O/D (mm) Copper": "3.3",
			"Capacity O/D (mm) Steel": "2.8"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-NWS30 (réf. 360708). Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée. Capacity O/D (mm) Copper : 3.3. Capacity O/D (mm) Steel : 2.8.",
		"verifiedFacts": [
			"Capacity O/D (mm) Copper : 3.3.",
			"Capacity O/D (mm) Steel : 2.8.",
			"Capacity O/D (mm) ABS Plastic : 7.5.",
			"Air consumption (cm3 /str.) : 584.",
			"Air pressure (MPa) : 0.5 to 0.6.",
			"Applired pressure (N) : 2744.",
			"Overall Length (mm) : 230.5.",
			"Weight (g) : 1115.",
			"Code No. : 360708."
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
			"value": "3.3",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws30-html-p1"
			]
		},
		{
			"label": "Capacity O/D (mm) Steel",
			"value": "2.8",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws30-html-p1"
			]
		},
		{
			"label": "Capacity O/D (mm) ABS Plastic",
			"value": "7.5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws30-html-p1"
			]
		},
		{
			"label": "Air consumption (cm3 /str.)",
			"value": "584",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws30-html-p1"
			]
		},
		{
			"label": "Air pressure (MPa)",
			"value": "0.5 to 0.6",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws30-html-p1"
			]
		},
		{
			"label": "Applired pressure (N)",
			"value": "2744",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws30-html-p1"
			]
		},
		{
			"label": "Overall Length (mm)",
			"value": "230.5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws30-html-p1"
			]
		},
		{
			"label": "Weight (g)",
			"value": "1115",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws30-html-p1"
			]
		},
		{
			"label": "Code No.",
			"value": "360708",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws30-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air pressure (MPa): 0.5 to 0.6",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws30-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-gt-nws30-html-p1",
			"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360708",
			"sourceLabel": "VESSEL, fiche constructeur individuelle GT-NWS30",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : bc07b0437d31c0af274ff3921198085f130d4805695f9896f6916cabf676afc7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-gt-nws30-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-gt-nws30-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-gt-nws30-html-p1"
		]
	},
	"notes": [
		"Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée."
	]
};

export default product;
