import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-anest-iwata-w-77-0-pressure-13100000",
	"slug": "pistolet-peinture-anest-iwata-w-77-0-pressure-13100000",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Anest Iwata W-77 0 PRESSURE (réf. 13100000)",
	"brand": "Anest Iwata",
	"model": "W-77 0 PRESSURE",
	"mpn": "13100000",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 3.5,
		"typical": 3.5,
		"max": 3.5
	},
	"airflowLpm": {
		"min": 430,
		"typical": 430,
		"max": 430
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-anest-iwata-w-77-0-pressure-13100000.webp",
		"alt": "Repères techniques : Anest Iwata W-77 0 PRESSURE (réf. 13100000)",
		"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "anest-iwata-w-77-0-pressure",
		"label": "Référence 13100000",
		"distinguishingAttributes": {
			"reference": "13100000",
			"Buse déclarée": "1.2 mm",
			"Chapeau d’air": "0"
		}
	},
	"editorial": {
		"overview": "Anest Iwata W-77 0 PRESSURE (réf. 13100000). Consommation de régime non précisé : 430 L/min à 3,5 bar. Buse déclarée : 1.2 mm. Chapeau d’air : 0.",
		"verifiedFacts": [
			"Buse déclarée : 1.2 mm.",
			"Chapeau d’air : 0.",
			"Débit de produit dans le tableau : 480 mL/min.",
			"Largeur du jet publiée : 445 mm."
		],
		"limitations": [
			"Une consommation moyenne, à vide ou de régime non précisé ne confirme pas le débit maximal en charge ; le verdict reste insufficient_data.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Buse déclarée",
			"value": "1.2 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p22"
			]
		},
		{
			"label": "Chapeau d’air",
			"value": "0",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p22"
			]
		},
		{
			"label": "Débit de produit dans le tableau",
			"value": "480 mL/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p22"
			]
		},
		{
			"label": "Largeur du jet publiée",
			"value": "445 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p22"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "3.5 bar, colonne de pression du même tableau technique",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p22"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "430 L/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p22"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-iwata-industry-2023-p22",
			"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf#page=22",
			"sourceLabel": "Anest Iwata, catalogue industriel anglais 2023, page PDF 22",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 302977aaa53c6499ba928666a051209796dd51917555d3072a140af327ff01f1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-iwata-industry-2023-p22"
		],
		"workingPressureBar": [
			"october2-tools-iwata-industry-2023-p22"
		],
		"airflowLpm": [
			"october2-tools-iwata-industry-2023-p22"
		],
		"airflowBasis": [
			"october2-tools-iwata-industry-2023-p22"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 430 L/min à 3,5 bar."
	]
};

export default product;
