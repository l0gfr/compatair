import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-sealey-sa44",
	"slug": "meuleuse-sealey-sa44",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sealey SA44",
	"brand": "Sealey",
	"model": "SA44",
	"mpn": "SA44",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.205
	},
	"demandExplanation": "La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-sealey-sa44.webp",
		"alt": "Repères techniques : Sealey SA44",
		"sourceUrl": "https://www.sealey.co.uk/air-angle-grinder-100mm-sa44/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sealey-sa44",
		"label": "Référence SA44",
		"distinguishingAttributes": {
			"reference": "SA44",
			"Champ fabricant : Air Consumption": "4cfm",
			"Champ fabricant : Disc Size": "Ø100mm"
		}
	},
	"editorial": {
		"overview": "Sealey SA44. La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué. Champ fabricant : Air Consumption : 4cfm. Champ fabricant : Disc Size : Ø100mm.",
		"verifiedFacts": [
			"Champ fabricant : Air Consumption : 4cfm.",
			"Champ fabricant : Disc Size : Ø100mm.",
			"Champ fabricant : Free Speed : 10000rpm.",
			"Champ fabricant : Inlet Size : 1/4\"BSP.",
			"Champ fabricant : Noise Power/Pressure : 94/83dB(A).",
			"Champ fabricant : Operating Pressure : 90psi.",
			"Champ fabricant : Spindle Size : 3/8\" x 24 UNF.",
			"Champ fabricant : Vibration/Uncertainty : 2.09/1.5m/s².",
			"Champ fabricant : Nett Weight : 1.9kg."
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
				"october2b-tools-oct2b-sealey-sa44-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Disc Size",
			"value": "Ø100mm",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa44-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Free Speed",
			"value": "10000rpm",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa44-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Inlet Size",
			"value": "1/4\"BSP",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa44-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Noise Power/Pressure",
			"value": "94/83dB(A)",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa44-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Operating Pressure",
			"value": "90psi",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa44-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Spindle Size",
			"value": "3/8\" x 24 UNF",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa44-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Vibration/Uncertainty",
			"value": "2.09/1.5m/s²",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa44-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Nett Weight",
			"value": "1.9kg",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa44-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 90psi",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa44-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-sealey-sa44-html-p1",
			"sourceUrl": "https://www.sealey.co.uk/air-angle-grinder-100mm-sa44/",
			"sourceLabel": "Sealey, fiche technique constructeur SA44",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : cdf2de3dcccb738976cc0141353a3b42d9e77110d984bfa6f11791bf14389bea. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-sealey-sa44-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-sealey-sa44-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-sealey-sa44-html-p1"
		]
	},
	"notes": [
		"La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué."
	]
};

export default product;
