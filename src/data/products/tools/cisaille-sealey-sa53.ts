import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-sealey-sa53",
	"slug": "cisaille-sealey-sa53",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "Sealey SA53",
	"brand": "Sealey",
	"model": "SA53",
	"mpn": "SA53",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.205
	},
	"demandExplanation": "La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-sealey-sa53.webp",
		"alt": "Repères techniques : Sealey SA53",
		"sourceUrl": "https://www.sealey.co.uk/air-power-shears-sa53/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sealey-sa53",
		"label": "Référence SA53",
		"distinguishingAttributes": {
			"reference": "SA53",
			"Champ fabricant : Air Consumption": "4cfm",
			"Champ fabricant : Inlet Size": "1/4\"BSP"
		}
	},
	"editorial": {
		"overview": "Sealey SA53. La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué. Champ fabricant : Air Consumption : 4cfm. Champ fabricant : Inlet Size : 1/4\"BSP.",
		"verifiedFacts": [
			"Champ fabricant : Air Consumption : 4cfm.",
			"Champ fabricant : Inlet Size : 1/4\"BSP.",
			"Champ fabricant : Maximum Cutting Capacity : 1.2mm (Steel).",
			"Champ fabricant : Noise Power/Pressure : 99/88dB(A).",
			"Champ fabricant : Operating Pressure : 90psi.",
			"Champ fabricant : Vibration/Uncertainty : 6.4/0.38m/s².",
			"Champ fabricant : Nett Weight : 1.00kg."
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
				"october2b-tools-oct2b-sealey-sa53-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Inlet Size",
			"value": "1/4\"BSP",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa53-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Maximum Cutting Capacity",
			"value": "1.2mm (Steel)",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa53-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Noise Power/Pressure",
			"value": "99/88dB(A)",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa53-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Operating Pressure",
			"value": "90psi",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa53-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Vibration/Uncertainty",
			"value": "6.4/0.38m/s²",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa53-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Nett Weight",
			"value": "1.00kg",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa53-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 90psi",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa53-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-sealey-sa53-html-p1",
			"sourceUrl": "https://www.sealey.co.uk/air-power-shears-sa53/",
			"sourceLabel": "Sealey, fiche technique constructeur SA53",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : e607318d603aedb2279b7e3fe9b8b6f0c948bef02f02f60e9eb26f4ce8596084. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-sealey-sa53-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-sealey-sa53-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-sealey-sa53-html-p1"
		]
	},
	"notes": [
		"La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué."
	]
};

export default product;
