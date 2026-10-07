import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-sealey-sa52",
	"slug": "derouilleur-a-aiguilles-sealey-sa52",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Sealey SA52",
	"brand": "Sealey",
	"model": "SA52",
	"mpn": "SA52",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.205
	},
	"demandExplanation": "La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-sealey-sa52.webp",
		"alt": "Repères techniques : Sealey SA52",
		"sourceUrl": "https://www.sealey.co.uk/air-needle-scaler-air-hammer-sa52/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sealey-sa52",
		"label": "Référence SA52",
		"distinguishingAttributes": {
			"reference": "SA52",
			"Champ fabricant : Air Consumption": "3cfm",
			"Champ fabricant : Free Speed": "4800bpm"
		}
	},
	"editorial": {
		"overview": "Sealey SA52. La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué. Champ fabricant : Air Consumption : 3cfm. Champ fabricant : Free Speed : 4800bpm.",
		"verifiedFacts": [
			"Champ fabricant : Air Consumption : 3cfm.",
			"Champ fabricant : Free Speed : 4800bpm.",
			"Champ fabricant : Inlet Size : 1/4\"BSP.",
			"Champ fabricant : Noise Power/Pressure : 105/94dB(A).",
			"Champ fabricant : Operating Pressure : 90psi.",
			"Champ fabricant : Stroke : 32mm.",
			"Champ fabricant : Vibration/Uncertainty : 8.56/1.34m/s².",
			"Champ fabricant : Nett Weight : 1.2kg."
		],
		"limitations": [
			"La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué.",
			"Fiche produit constructeur, caractéristiques déclaratives ; aucun essai physique CompatAir.",
			"Les pressions recommandées ou limites d’alimentation restent distinctes des points de mesure de consommation.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Champ fabricant : Air Consumption",
			"value": "3cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa52-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Free Speed",
			"value": "4800bpm",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa52-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Inlet Size",
			"value": "1/4\"BSP",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa52-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Noise Power/Pressure",
			"value": "105/94dB(A)",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa52-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Operating Pressure",
			"value": "90psi",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa52-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Stroke",
			"value": "32mm",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa52-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Vibration/Uncertainty",
			"value": "8.56/1.34m/s²",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa52-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Nett Weight",
			"value": "1.2kg",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa52-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 90psi",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa52-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-sealey-sa52-html-p1",
			"sourceUrl": "https://www.sealey.co.uk/air-needle-scaler-air-hammer-sa52/",
			"sourceLabel": "Sealey, fiche technique constructeur SA52",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 1cf8d5202932cfc20e7f17bc732a071c894e9e91b37c8025a53df02e8cd70d70. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-sealey-sa52-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-sealey-sa52-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-sealey-sa52-html-p1"
		]
	},
	"notes": [
		"La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué."
	]
};

export default product;
