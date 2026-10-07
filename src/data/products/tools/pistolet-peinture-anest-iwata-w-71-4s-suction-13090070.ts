import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-anest-iwata-w-71-4s-suction-13090070",
	"slug": "pistolet-peinture-anest-iwata-w-71-4s-suction-13090070",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Anest Iwata W-71 4S SUCTION (réf. 13090070)",
	"brand": "Anest Iwata",
	"model": "W-71 4S SUCTION",
	"mpn": "13090070",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 3,
		"typical": 3,
		"max": 3
	},
	"airflowLpm": {
		"min": 230,
		"typical": 230,
		"max": 230
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-anest-iwata-w-71-4s-suction-13090070.webp",
		"alt": "Repères techniques : Anest Iwata W-71 4S SUCTION (réf. 13090070)",
		"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "anest-iwata-w-71-4s-suction",
		"label": "Référence 13090070",
		"distinguishingAttributes": {
			"reference": "13090070",
			"Buse déclarée": "1.8 mm",
			"Chapeau d’air": "4S"
		}
	},
	"editorial": {
		"overview": "Anest Iwata W-71 4S SUCTION (réf. 13090070). Consommation de régime non précisé : 230 L/min à 3 bar. Buse déclarée : 1.8 mm. Chapeau d’air : 4S.",
		"verifiedFacts": [
			"Buse déclarée : 1.8 mm.",
			"Chapeau d’air : 4S.",
			"Débit de produit dans le tableau : 195 mL/min.",
			"Largeur du jet publiée : 200 mm."
		],
		"limitations": [
			"Une consommation moyenne, à vide ou de régime non précisé ne confirme pas le débit maximal en charge ; le verdict reste insufficient_data.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Buse déclarée",
			"value": "1.8 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p22"
			]
		},
		{
			"label": "Chapeau d’air",
			"value": "4S",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p22"
			]
		},
		{
			"label": "Débit de produit dans le tableau",
			"value": "195 mL/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p22"
			]
		},
		{
			"label": "Largeur du jet publiée",
			"value": "200 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p22"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "3.0 bar, colonne de pression du même tableau technique",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p22"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "230 L/min",
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
		"Consommation de régime non précisé : 230 L/min à 3 bar."
	]
};

export default product;
