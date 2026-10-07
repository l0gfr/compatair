import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-sealey-sa120",
	"slug": "burineur-sealey-sa120",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Sealey SA120",
	"brand": "Sealey",
	"model": "SA120",
	"mpn": "SA120",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.205
	},
	"demandExplanation": "La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-sealey-sa120.webp",
		"alt": "Repères techniques : Sealey SA120",
		"sourceUrl": "https://www.sealey.co.uk/industrial-air-hammer-sa120/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sealey-sa120",
		"label": "Référence SA120",
		"distinguishingAttributes": {
			"reference": "SA120",
			"Champ fabricant : Air Consumption": "4cfm",
			"Champ fabricant : Chisel Shank Size": "12.7 x 47mm"
		}
	},
	"editorial": {
		"overview": "Sealey SA120. La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué. Champ fabricant : Air Consumption : 4cfm. Champ fabricant : Chisel Shank Size : 12.7 x 47mm.",
		"verifiedFacts": [
			"Champ fabricant : Air Consumption : 4cfm.",
			"Champ fabricant : Chisel Shank Size : 12.7 x 47mm.",
			"Champ fabricant : Free Speed : 3000bpm.",
			"Champ fabricant : Inlet Size : 1/4\"BSP.",
			"Champ fabricant : Noise Power/Pressure : 114/103dB(A).",
			"Champ fabricant : Operating Pressure : 90psi.",
			"Champ fabricant : Stroke : 20mm.",
			"Champ fabricant : Vibration/Uncertainty : 20.88/3.06m/s².",
			"Champ fabricant : Nett Weight : 1.7kg."
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
				"october2b-tools-oct2b-sealey-sa120-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Chisel Shank Size",
			"value": "12.7 x 47mm",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa120-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Free Speed",
			"value": "3000bpm",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa120-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Inlet Size",
			"value": "1/4\"BSP",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa120-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Noise Power/Pressure",
			"value": "114/103dB(A)",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa120-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Operating Pressure",
			"value": "90psi",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa120-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Stroke",
			"value": "20mm",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa120-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Vibration/Uncertainty",
			"value": "20.88/3.06m/s²",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa120-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Nett Weight",
			"value": "1.7kg",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa120-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 90psi",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa120-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-sealey-sa120-html-p1",
			"sourceUrl": "https://www.sealey.co.uk/industrial-air-hammer-sa120/",
			"sourceLabel": "Sealey, fiche technique constructeur SA120",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b8f9f33d7ab6806ecde98f76887a5f17f8a01b2e780a97983279ecbf285a82bc. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-sealey-sa120-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-sealey-sa120-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-sealey-sa120-html-p1"
		]
	},
	"notes": [
		"La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué."
	]
};

export default product;
