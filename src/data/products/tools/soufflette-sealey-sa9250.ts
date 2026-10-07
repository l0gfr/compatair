import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "soufflette-sealey-sa9250",
	"slug": "soufflette-sealey-sa9250",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "Sealey SA9250",
	"brand": "Sealey",
	"model": "SA9250",
	"mpn": "SA9250",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/soufflette-sealey-sa9250.webp",
		"alt": "Repères techniques : Sealey SA9250",
		"sourceUrl": "https://www.sealey.co.uk/air-blow-gun-110mm-with-1-4-bsp-air-inlet-sa9250/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sealey-sa9250",
		"label": "Référence SA9250",
		"distinguishingAttributes": {
			"reference": "SA9250",
			"Champ fabricant : Inlet Size": "1/4\"BSP",
			"Champ fabricant : Nett Weight": "0.25kg"
		}
	},
	"editorial": {
		"overview": "Sealey SA9250. La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué. Champ fabricant : Inlet Size : 1/4\"BSP. Champ fabricant : Nett Weight : 0.25kg.",
		"verifiedFacts": [
			"Champ fabricant : Inlet Size : 1/4\"BSP.",
			"Champ fabricant : Nett Weight : 0.25kg."
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
			"label": "Champ fabricant : Inlet Size",
			"value": "1/4\"BSP",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa9250-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Nett Weight",
			"value": "0.25kg",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa9250-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de mesure associé à la consommation n’est établi par la fiche individuelle.",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa9250-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-sealey-sa9250-html-p1",
			"sourceUrl": "https://www.sealey.co.uk/air-blow-gun-110mm-with-1-4-bsp-air-inlet-sa9250/",
			"sourceLabel": "Sealey, fiche technique constructeur SA9250",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : ecd3f0d29eb266ec1469d024d063a92d7e848ef4831a49a2a96b65a64c1525d1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-sealey-sa9250-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-sealey-sa9250-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-sealey-sa9250-html-p1"
		]
	},
	"notes": [
		"La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué."
	]
};

export default product;
