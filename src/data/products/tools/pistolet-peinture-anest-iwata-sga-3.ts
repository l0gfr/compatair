import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-anest-iwata-sga-3",
	"slug": "pistolet-peinture-anest-iwata-sga-3",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Anest Iwata SGA-3",
	"brand": "Anest Iwata",
	"model": "SGA-3",
	"mpn": "SGA-3",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 2.5,
		"typical": 2.5,
		"max": 2.5
	},
	"airflowLpm": {
		"min": 80,
		"typical": 80,
		"max": 80
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-anest-iwata-sga-3.webp",
		"alt": "Repères techniques : Anest Iwata SGA-3",
		"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "anest-iwata-sga-3",
		"label": "Référence SGA-3",
		"distinguishingAttributes": {
			"reference": "SGA-3",
			"Buse déclarée": "1.0 mm",
			"Chapeau d’air": "E1"
		}
	},
	"editorial": {
		"overview": "Anest Iwata SGA-3. Consommation de régime non précisé : 80 L/min à 2,5 bar. Buse déclarée : 1.0 mm. Chapeau d’air : E1.",
		"verifiedFacts": [
			"Buse déclarée : 1.0 mm.",
			"Chapeau d’air : E1.",
			"Débit de produit dans le tableau : 95 mL/min.",
			"Largeur du jet publiée : 250 mm."
		],
		"limitations": [
			"Une consommation moyenne, à vide ou de régime non précisé ne confirme pas le débit maximal en charge ; le verdict reste insufficient_data.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Buse déclarée",
			"value": "1.0 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p41"
			]
		},
		{
			"label": "Chapeau d’air",
			"value": "E1",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p41"
			]
		},
		{
			"label": "Débit de produit dans le tableau",
			"value": "95 mL/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p41"
			]
		},
		{
			"label": "Largeur du jet publiée",
			"value": "250 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p41"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "2.5 bar, colonne de pression du même tableau technique",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p41"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "80 L/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p41"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-iwata-industry-2023-p41",
			"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf#page=41",
			"sourceLabel": "Anest Iwata, catalogue industriel anglais 2023, page PDF 41",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 302977aaa53c6499ba928666a051209796dd51917555d3072a140af327ff01f1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-iwata-industry-2023-p41"
		],
		"workingPressureBar": [
			"october2-tools-iwata-industry-2023-p41"
		],
		"airflowLpm": [
			"october2-tools-iwata-industry-2023-p41"
		],
		"airflowBasis": [
			"october2-tools-iwata-industry-2023-p41"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 80 L/min à 2,5 bar."
	]
};

export default product;
