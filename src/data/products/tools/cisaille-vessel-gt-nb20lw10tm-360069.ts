import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-vessel-gt-nb20lw10tm-360069",
	"slug": "cisaille-vessel-gt-nb20lw10tm-360069",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "VESSEL GT-NB20LW10TM (réf. 360069)",
	"brand": "VESSEL",
	"model": "GT-NB20LW10TM",
	"mpn": "360069",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-vessel-gt-nb20lw10tm-360069.webp",
		"alt": "Repères techniques : VESSEL GT-NB20LW10TM (réf. 360069)",
		"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360069",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-nb20lw10tm",
		"label": "Référence 360069",
		"distinguishingAttributes": {
			"reference": "360069",
			"Slide range (mm)": "0 to 10",
			"Overall Length (mm)": "157"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-NB20LW10TM (réf. 360069). Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée. Slide range (mm) : 0 to 10. Overall Length (mm) : 157.",
		"verifiedFacts": [
			"Slide range (mm) : 0 to 10.",
			"Overall Length (mm) : 157.",
			"Weight (g) : 795.",
			"Code No. : 360069."
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
				"october2b-tools-oct2b-gt-nb20lw10tm-html-p1"
			]
		},
		{
			"label": "Overall Length (mm)",
			"value": "157",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nb20lw10tm-html-p1"
			]
		},
		{
			"label": "Weight (g)",
			"value": "795",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nb20lw10tm-html-p1"
			]
		},
		{
			"label": "Code No.",
			"value": "360069",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nb20lw10tm-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de pression associé au volume par course n’est établi par la fiche.",
			"evidenceIds": [
				"october2b-tools-oct2b-gt-nb20lw10tm-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-gt-nb20lw10tm-html-p1",
			"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360069",
			"sourceLabel": "VESSEL, fiche constructeur individuelle GT-NB20LW10TM",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 61ef22031c31da09a56be365c9474c5fd510c48ff328d2dd9c963c77754c16d9. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-gt-nb20lw10tm-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-gt-nb20lw10tm-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-gt-nb20lw10tm-html-p1"
		]
	},
	"notes": [
		"Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée."
	]
};

export default product;
