import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-sealey-sa31",
	"slug": "riveteuse-sealey-sa31",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Sealey SA31",
	"brand": "Sealey",
	"model": "SA31",
	"mpn": "SA31",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.205
	},
	"demandExplanation": "La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-sealey-sa31.webp",
		"alt": "Repères techniques : Sealey SA31",
		"sourceUrl": "https://www.sealey.co.uk/air-hydraulic-riveter-sa31/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sealey-sa31",
		"label": "Référence SA31",
		"distinguishingAttributes": {
			"reference": "SA31",
			"Champ fabricant : Air Consumption": "4cfm",
			"Champ fabricant : Air Inlet Size": "1/4\"BSP"
		}
	},
	"editorial": {
		"overview": "Sealey SA31. La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué. Champ fabricant : Air Consumption : 4cfm. Champ fabricant : Air Inlet Size : 1/4\"BSP.",
		"verifiedFacts": [
			"Champ fabricant : Air Consumption : 4cfm.",
			"Champ fabricant : Air Inlet Size : 1/4\"BSP.",
			"Champ fabricant : Blind Rivet Type : Aluminium.",
			"Champ fabricant : Noise Power/Pressure : 80/72dB(A).",
			"Champ fabricant : Nozzle Size(s) : 3/32\"(2.4mm), 1/8\"(3.2mm), 5/32\"(4mm), 3/16\"(4.8mm).",
			"Champ fabricant : Operating Pressure : 90psi.",
			"Champ fabricant : Nett Weight : 1.3kg."
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
			"value": "4cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa31-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet Size",
			"value": "1/4\"BSP",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa31-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Blind Rivet Type",
			"value": "Aluminium",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa31-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Noise Power/Pressure",
			"value": "80/72dB(A)",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa31-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Nozzle Size(s)",
			"value": "3/32\"(2.4mm), 1/8\"(3.2mm), 5/32\"(4mm), 3/16\"(4.8mm)",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa31-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Operating Pressure",
			"value": "90psi",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa31-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Nett Weight",
			"value": "1.3kg",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa31-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 90psi",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa31-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-sealey-sa31-html-p1",
			"sourceUrl": "https://www.sealey.co.uk/air-hydraulic-riveter-sa31/",
			"sourceLabel": "Sealey, fiche technique constructeur SA31",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 116da1ee307bb56b31cc5e9dfbcd428f51898207cc77268093d8e108fb61dc83. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-sealey-sa31-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-sealey-sa31-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-sealey-sa31-html-p1"
		]
	},
	"notes": [
		"La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué."
	]
};

export default product;
