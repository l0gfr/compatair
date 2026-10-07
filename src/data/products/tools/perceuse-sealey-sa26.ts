import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-sealey-sa26",
	"slug": "perceuse-sealey-sa26",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Sealey SA26",
	"brand": "Sealey",
	"model": "SA26",
	"mpn": "SA26",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.205
	},
	"demandExplanation": "La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-sealey-sa26.webp",
		"alt": "Repères techniques : Sealey SA26",
		"sourceUrl": "https://www.sealey.co.uk/reversible-air-angle-drill-10mm-sa26/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sealey-sa26",
		"label": "Référence SA26",
		"distinguishingAttributes": {
			"reference": "SA26",
			"Champ fabricant : Air Consumption": "6cfm",
			"Champ fabricant : Air Inlet Size": "1/4\"BSP"
		}
	},
	"editorial": {
		"overview": "Sealey SA26. La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué. Champ fabricant : Air Consumption : 6cfm. Champ fabricant : Air Inlet Size : 1/4\"BSP.",
		"verifiedFacts": [
			"Champ fabricant : Air Consumption : 6cfm.",
			"Champ fabricant : Air Inlet Size : 1/4\"BSP.",
			"Champ fabricant : Chuck Size : Ø10mm.",
			"Champ fabricant : Free Speed : 1500rpm.",
			"Champ fabricant : Noise Power/Pressure : 101/90dB(A).",
			"Champ fabricant : Operating Pressure : 90psi.",
			"Champ fabricant : Vibration/Uncertainty : 0.86/1.5m/s².",
			"Champ fabricant : Nett Weight : 1.1kg."
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
			"value": "6cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa26-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet Size",
			"value": "1/4\"BSP",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa26-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Chuck Size",
			"value": "Ø10mm",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa26-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Free Speed",
			"value": "1500rpm",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa26-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Noise Power/Pressure",
			"value": "101/90dB(A)",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa26-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Operating Pressure",
			"value": "90psi",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa26-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Vibration/Uncertainty",
			"value": "0.86/1.5m/s²",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa26-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Nett Weight",
			"value": "1.1kg",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa26-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 90psi",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa26-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-sealey-sa26-html-p1",
			"sourceUrl": "https://www.sealey.co.uk/reversible-air-angle-drill-10mm-sa26/",
			"sourceLabel": "Sealey, fiche technique constructeur SA26",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 6172ee7fccfa34e5d1191735671e7b7ef908470d5ff487b1797c16745fe9044e. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-sealey-sa26-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-sealey-sa26-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-sealey-sa26-html-p1"
		]
	},
	"notes": [
		"La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué."
	]
};

export default product;
