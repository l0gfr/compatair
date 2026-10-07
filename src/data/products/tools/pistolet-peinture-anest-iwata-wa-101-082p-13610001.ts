import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-anest-iwata-wa-101-082p-13610001",
	"slug": "pistolet-peinture-anest-iwata-wa-101-082p-13610001",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Anest Iwata WA-101-082P (réf. 13610001)",
	"brand": "Anest Iwata",
	"model": "WA-101-082P",
	"mpn": "13610001",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 3,
		"typical": 3,
		"max": 3
	},
	"airflowLpm": {
		"min": 270,
		"typical": 270,
		"max": 270
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-anest-iwata-wa-101-082p-13610001.webp",
		"alt": "Repères techniques : Anest Iwata WA-101-082P (réf. 13610001)",
		"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "anest-iwata-wa-101-082p",
		"label": "Référence 13610001",
		"distinguishingAttributes": {
			"reference": "13610001",
			"Buse déclarée": "0.8 mm",
			"Chapeau d’air": "E2P"
		}
	},
	"editorial": {
		"overview": "Anest Iwata WA-101-082P (réf. 13610001). Consommation de régime non précisé : 270 L/min à 3 bar. Buse déclarée : 0.8 mm. Chapeau d’air : E2P.",
		"verifiedFacts": [
			"Buse déclarée : 0.8 mm.",
			"Chapeau d’air : E2P.",
			"Débit de produit dans le tableau : 150 mL/min.",
			"Largeur du jet publiée : 190 mm."
		],
		"limitations": [
			"Une consommation moyenne, à vide ou de régime non précisé ne confirme pas le débit maximal en charge ; le verdict reste insufficient_data.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Buse déclarée",
			"value": "0.8 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p31"
			]
		},
		{
			"label": "Chapeau d’air",
			"value": "E2P",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p31"
			]
		},
		{
			"label": "Débit de produit dans le tableau",
			"value": "150 mL/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p31"
			]
		},
		{
			"label": "Largeur du jet publiée",
			"value": "190 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p31"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "3.0 bar, colonne de pression du même tableau technique",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p31"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "270 L/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p31"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-iwata-industry-2023-p31",
			"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf#page=31",
			"sourceLabel": "Anest Iwata, catalogue industriel anglais 2023, page PDF 31",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 302977aaa53c6499ba928666a051209796dd51917555d3072a140af327ff01f1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-iwata-industry-2023-p31"
		],
		"workingPressureBar": [
			"october2-tools-iwata-industry-2023-p31"
		],
		"airflowLpm": [
			"october2-tools-iwata-industry-2023-p31"
		],
		"airflowBasis": [
			"october2-tools-iwata-industry-2023-p31"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 270 L/min à 3 bar."
	]
};

export default product;
