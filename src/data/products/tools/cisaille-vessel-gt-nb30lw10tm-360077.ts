import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-vessel-gt-nb30lw10tm-360077",
	"slug": "cisaille-vessel-gt-nb30lw10tm-360077",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "VESSEL GT-NB30LW10TM (réf. 360077)",
	"brand": "VESSEL",
	"model": "GT-NB30LW10TM",
	"mpn": "360077",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-vessel-gt-nb30lw10tm-360077.webp",
		"alt": "Repères techniques : VESSEL GT-NB30LW10TM (réf. 360077)",
		"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360077",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-nb30lw10tm",
		"label": "Référence 360077",
		"distinguishingAttributes": {
			"reference": "360077",
			"Slide range (mm)": "0 to 10",
			"Overall Length (mm)": "200"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-NB30LW10TM (réf. 360077). Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée. Slide range (mm) : 0 to 10. Overall Length (mm) : 200.",
		"verifiedFacts": [
			"Slide range (mm) : 0 to 10.",
			"Overall Length (mm) : 200.",
			"Weight (g) : 1315.",
			"Code No. : 360077."
		],
		"limitations": [
			"Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée.",
			"Corps de pince pneumatique ; lame à choisir selon le matériau et la configuration fabricant. La page ne constitue pas un essai CompatAir.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Slide range (mm)",
			"value": "0 to 10",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nb30lw10tm-html-p1"
			]
		},
		{
			"label": "Overall Length (mm)",
			"value": "200",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nb30lw10tm-html-p1"
			]
		},
		{
			"label": "Weight (g)",
			"value": "1315",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nb30lw10tm-html-p1"
			]
		},
		{
			"label": "Code No.",
			"value": "360077",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nb30lw10tm-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de pression associé au volume par course n’est établi par la fiche.",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nb30lw10tm-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-gt-nb30lw10tm-html-p1",
			"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360077",
			"sourceLabel": "VESSEL, fiche constructeur individuelle GT-NB30LW10TM",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 36f6a0d822966f1c4469aed1db056715b170c7d56b511a7e35c5bc24e894e72a. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-gt-nb30lw10tm-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-gt-nb30lw10tm-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-gt-nb30lw10tm-html-p1"
		]
	},
	"notes": [
		"Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée."
	]
};

export default product;
