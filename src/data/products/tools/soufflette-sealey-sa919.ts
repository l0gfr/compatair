import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "soufflette-sealey-sa919",
	"slug": "soufflette-sealey-sa919",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "Sealey SA919",
	"brand": "Sealey",
	"model": "SA919",
	"mpn": "SA919",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/soufflette-sealey-sa919.webp",
		"alt": "Repères techniques : Sealey SA919",
		"sourceUrl": "https://www.sealey.co.uk/air-blow-gun-200mm-with-1-4-bsp-air-inlet-sa919/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sealey-sa919",
		"label": "Référence SA919",
		"distinguishingAttributes": {
			"reference": "SA919",
			"Champ fabricant : Inlet Size": "1/4\"BSP",
			"Champ fabricant : Lance Length": "200mm"
		}
	},
	"editorial": {
		"overview": "Sealey SA919. La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué. Champ fabricant : Inlet Size : 1/4\"BSP. Champ fabricant : Lance Length : 200mm.",
		"verifiedFacts": [
			"Champ fabricant : Inlet Size : 1/4\"BSP.",
			"Champ fabricant : Lance Length : 200mm.",
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
				"october2b-tools-oct2b-sealey-sa919-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Lance Length",
			"value": "200mm",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa919-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Nett Weight",
			"value": "0.17kg",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa919-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de mesure associé à la consommation n’est établi par la fiche individuelle.",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa919-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-sealey-sa919-html-p1",
			"sourceUrl": "https://www.sealey.co.uk/air-blow-gun-200mm-with-1-4-bsp-air-inlet-sa919/",
			"sourceLabel": "Sealey, fiche technique constructeur SA919",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 82ffd6850c96bf67baeb45e67ad45de127e27a9c6611658fc7a746f1490fb653. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-sealey-sa919-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-sealey-sa919-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-sealey-sa919-html-p1"
		]
	},
	"notes": [
		"La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué."
	]
};

export default product;
