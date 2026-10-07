import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "soufflette-sealey-sa304",
	"slug": "soufflette-sealey-sa304",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "Sealey SA304",
	"brand": "Sealey",
	"model": "SA304",
	"mpn": "SA304",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/soufflette-sealey-sa304.webp",
		"alt": "Repères techniques : Sealey SA304",
		"sourceUrl": "https://www.sealey.co.uk/air-blow-gun-with-quick-release-connector-sa304/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sealey-sa304",
		"label": "Référence SA304",
		"distinguishingAttributes": {
			"reference": "SA304",
			"Champ fabricant : Inlet Size": "1/4\"BSP",
			"Champ fabricant : Nett Weight": "0.17kg"
		}
	},
	"editorial": {
		"overview": "Sealey SA304. La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué. Champ fabricant : Inlet Size : 1/4\"BSP. Champ fabricant : Nett Weight : 0.17kg.",
		"verifiedFacts": [
			"Champ fabricant : Inlet Size : 1/4\"BSP.",
			"Champ fabricant : Nett Weight : 0.17kg."
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
				"october2b-tools-oct2b-sealey-sa304-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Nett Weight",
			"value": "0.17kg",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa304-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de mesure associé à la consommation n’est établi par la fiche individuelle.",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa304-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-sealey-sa304-html-p1",
			"sourceUrl": "https://www.sealey.co.uk/air-blow-gun-with-quick-release-connector-sa304/",
			"sourceLabel": "Sealey, fiche technique constructeur SA304",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : bcba695dd0379048b855330ccb793b88aaacd905e9c5e1775090765e3d79a526. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-sealey-sa304-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-sealey-sa304-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-sealey-sa304-html-p1"
		]
	},
	"notes": [
		"La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué."
	]
};

export default product;
