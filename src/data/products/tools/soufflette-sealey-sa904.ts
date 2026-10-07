import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "soufflette-sealey-sa904",
	"slug": "soufflette-sealey-sa904",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "Sealey SA904",
	"brand": "Sealey",
	"model": "SA904",
	"mpn": "SA904",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/soufflette-sealey-sa904.webp",
		"alt": "Repères techniques : Sealey SA904",
		"sourceUrl": "https://www.sealey.co.uk/mini-air-blow-gun-with-venturi-tip-sa904/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sealey-sa904",
		"label": "Référence SA904",
		"distinguishingAttributes": {
			"reference": "SA904",
			"Champ fabricant : Inlet Size": "1/4\"BSP",
			"Champ fabricant : Nett Weight": "0.07kg"
		}
	},
	"editorial": {
		"overview": "Sealey SA904. La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué. Champ fabricant : Inlet Size : 1/4\"BSP. Champ fabricant : Nett Weight : 0.07kg.",
		"verifiedFacts": [
			"Champ fabricant : Inlet Size : 1/4\"BSP.",
			"Champ fabricant : Nett Weight : 0.07kg."
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
				"october2b-tools-oct2b-sealey-sa904-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Nett Weight",
			"value": "0.07kg",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa904-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de mesure associé à la consommation n’est établi par la fiche individuelle.",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa904-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-sealey-sa904-html-p1",
			"sourceUrl": "https://www.sealey.co.uk/mini-air-blow-gun-with-venturi-tip-sa904/",
			"sourceLabel": "Sealey, fiche technique constructeur SA904",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 891394a7ef34802b4d899f18f99d6738675bc497cd754e01ccce90736b78756c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-sealey-sa904-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-sealey-sa904-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-sealey-sa904-html-p1"
		]
	},
	"notes": [
		"La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué."
	]
};

export default product;
