import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-sealey-sa27",
	"slug": "perceuse-sealey-sa27",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Sealey SA27",
	"brand": "Sealey",
	"model": "SA27",
	"mpn": "SA27",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.205
	},
	"demandExplanation": "La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-sealey-sa27.webp",
		"alt": "Repères techniques : Sealey SA27",
		"sourceUrl": "https://www.sealey.co.uk/reversible-air-drill-13mm-with-keyless-chuck-sa27/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sealey-sa27",
		"label": "Référence SA27",
		"distinguishingAttributes": {
			"reference": "SA27",
			"Champ fabricant : Air Consumption": "7cfm",
			"Champ fabricant : Air Inlet Size": "1/4\"BSP"
		}
	},
	"editorial": {
		"overview": "Sealey SA27. La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué. Champ fabricant : Air Consumption : 7cfm. Champ fabricant : Air Inlet Size : 1/4\"BSP.",
		"verifiedFacts": [
			"Champ fabricant : Air Consumption : 7cfm.",
			"Champ fabricant : Air Inlet Size : 1/4\"BSP.",
			"Champ fabricant : Chuck Size : Ø13mm.",
			"Champ fabricant : Free Speed : 700rpm.",
			"Champ fabricant : Noise Power/Pressure : 100/91dB(A).",
			"Champ fabricant : Operating Pressure : 90psi.",
			"Champ fabricant : Vibration/Uncertainty : 0.89/1.5m/s².",
			"Champ fabricant : Nett Weight : 1.4kg."
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
			"value": "7cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa27-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet Size",
			"value": "1/4\"BSP",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa27-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Chuck Size",
			"value": "Ø13mm",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa27-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Free Speed",
			"value": "700rpm",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa27-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Noise Power/Pressure",
			"value": "100/91dB(A)",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa27-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Operating Pressure",
			"value": "90psi",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa27-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Vibration/Uncertainty",
			"value": "0.89/1.5m/s²",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa27-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Nett Weight",
			"value": "1.4kg",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa27-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 90psi",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa27-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-sealey-sa27-html-p1",
			"sourceUrl": "https://www.sealey.co.uk/reversible-air-drill-13mm-with-keyless-chuck-sa27/",
			"sourceLabel": "Sealey, fiche technique constructeur SA27",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 65649e81dea05682a58e63a003b46f97f74d3f8c6a1daa6b6d7b7ea075a65f1f. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-sealey-sa27-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-sealey-sa27-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-sealey-sa27-html-p1"
		]
	},
	"notes": [
		"La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué."
	]
};

export default product;
