import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-vessel-gt-nws10-360706",
	"slug": "cisaille-vessel-gt-nws10-360706",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "VESSEL GT-NWS10 (réf. 360706)",
	"brand": "VESSEL",
	"model": "GT-NWS10",
	"mpn": "360706",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4,
		"max": 5
	},
	"demandExplanation": "Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-vessel-gt-nws10-360706.webp",
		"alt": "Repères techniques : VESSEL GT-NWS10 (réf. 360706)",
		"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360706",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-nws10",
		"label": "Référence 360706",
		"distinguishingAttributes": {
			"reference": "360706",
			"Capacity O/D (mm) Copper": "1.8",
			"Capacity O/D (mm) Steel": "1.2"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-NWS10 (réf. 360706). Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée. Capacity O/D (mm) Copper : 1.8. Capacity O/D (mm) Steel : 1.2.",
		"verifiedFacts": [
			"Capacity O/D (mm) Copper : 1.8.",
			"Capacity O/D (mm) Steel : 1.2.",
			"Capacity O/D (mm) ABS Plastic : 4.",
			"Air consumption (cm3 /str.) : 116.",
			"Air pressure (MPa) : 0.4 to 0.5.",
			"Applired pressure (N) : 588.",
			"Overall Length (mm) : 146.",
			"Weight (g) : 356.",
			"Code No. : 360706."
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
			"value": "1.8",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws10-html-p1"
			]
		},
		{
			"label": "Capacity O/D (mm) Steel",
			"value": "1.2",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws10-html-p1"
			]
		},
		{
			"label": "Capacity O/D (mm) ABS Plastic",
			"value": "4",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws10-html-p1"
			]
		},
		{
			"label": "Air consumption (cm3 /str.)",
			"value": "116",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws10-html-p1"
			]
		},
		{
			"label": "Air pressure (MPa)",
			"value": "0.4 to 0.5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws10-html-p1"
			]
		},
		{
			"label": "Applired pressure (N)",
			"value": "588",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws10-html-p1"
			]
		},
		{
			"label": "Overall Length (mm)",
			"value": "146",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws10-html-p1"
			]
		},
		{
			"label": "Weight (g)",
			"value": "356",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws10-html-p1"
			]
		},
		{
			"label": "Code No.",
			"value": "360706",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws10-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air pressure (MPa): 0.4 to 0.5",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nws10-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-gt-nws10-html-p1",
			"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360706",
			"sourceLabel": "VESSEL, fiche constructeur individuelle GT-NWS10",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 760d1a83cd05e2ea8d42a70dc42175116b36ecd12f2ebab72cb5304c0c1ee491. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-gt-nws10-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-gt-nws10-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-gt-nws10-html-p1"
		]
	},
	"notes": [
		"Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée."
	]
};

export default product;
