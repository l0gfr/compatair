import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-anest-iwata-wa-101-101p-13610031",
	"slug": "pistolet-peinture-anest-iwata-wa-101-101p-13610031",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Anest Iwata WA-101-101P (réf. 13610031)",
	"brand": "Anest Iwata",
	"model": "WA-101-101P",
	"mpn": "13610031",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 3,
		"typical": 3,
		"max": 3
	},
	"airflowLpm": {
		"min": 90,
		"typical": 90,
		"max": 90
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-anest-iwata-wa-101-101p-13610031.webp",
		"alt": "Repères techniques : Anest Iwata WA-101-101P (réf. 13610031)",
		"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "anest-iwata-wa-101-101p",
		"label": "Référence 13610031",
		"distinguishingAttributes": {
			"reference": "13610031",
			"Buse déclarée": "1.0 mm",
			"Chapeau d’air": "E1"
		}
	},
	"editorial": {
		"overview": "Anest Iwata WA-101-101P (réf. 13610031). Consommation de régime non précisé : 90 L/min à 3 bar. Buse déclarée : 1.0 mm. Chapeau d’air : E1.",
		"verifiedFacts": [
			"Buse déclarée : 1.0 mm.",
			"Chapeau d’air : E1.",
			"Débit de produit dans le tableau : 100 mL/min.",
			"Largeur du jet publiée : 140 mm."
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
				"october2-tools-iwata-industry-2023-p31"
			]
		},
		{
			"label": "Chapeau d’air",
			"value": "E1",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p31"
			]
		},
		{
			"label": "Débit de produit dans le tableau",
			"value": "100 mL/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p31"
			]
		},
		{
			"label": "Largeur du jet publiée",
			"value": "140 mm",
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
			"value": "90 L/min",
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
		"Consommation de régime non précisé : 90 L/min à 3 bar."
	]
};

export default product;
