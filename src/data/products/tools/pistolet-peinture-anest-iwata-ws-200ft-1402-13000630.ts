import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-anest-iwata-ws-200ft-1402-13000630",
	"slug": "pistolet-peinture-anest-iwata-ws-200ft-1402-13000630",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Anest Iwata WS-200FT-1402 (réf. 13000630)",
	"brand": "Anest Iwata",
	"model": "WS-200FT-1402",
	"mpn": "13000630",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 3,
		"typical": 3,
		"max": 3
	},
	"airflowLpm": {
		"min": 475,
		"typical": 475,
		"max": 475
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-anest-iwata-ws-200ft-1402-13000630.webp",
		"alt": "Repères techniques : Anest Iwata WS-200FT-1402 (réf. 13000630)",
		"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "anest-iwata-ws-200ft-1402",
		"label": "Référence 13000630",
		"distinguishingAttributes": {
			"reference": "13000630",
			"Buse déclarée": "1.4 mm",
			"Chapeau d’air": "WS-200FT-02"
		}
	},
	"editorial": {
		"overview": "Anest Iwata WS-200FT-1402 (réf. 13000630). Consommation de régime non précisé : 475 L/min à 3 bar. Buse déclarée : 1.4 mm. Chapeau d’air : WS-200FT-02.",
		"verifiedFacts": [
			"Buse déclarée : 1.4 mm.",
			"Chapeau d’air : WS-200FT-02.",
			"Débit de produit dans le tableau : 300 mL/min.",
			"Largeur du jet publiée : 255 mm."
		],
		"limitations": [
			"Une consommation moyenne, à vide ou de régime non précisé ne confirme pas le débit maximal en charge ; le verdict reste insufficient_data.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Buse déclarée",
			"value": "1.4 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p10"
			]
		},
		{
			"label": "Chapeau d’air",
			"value": "WS-200FT-02",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p10"
			]
		},
		{
			"label": "Débit de produit dans le tableau",
			"value": "300 mL/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p10"
			]
		},
		{
			"label": "Largeur du jet publiée",
			"value": "255 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p10"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "3.0 bar, colonne de pression du même tableau technique",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p10"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "475 L/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p10"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-iwata-industry-2023-p10",
			"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf#page=10",
			"sourceLabel": "Anest Iwata, catalogue industriel anglais 2023, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 302977aaa53c6499ba928666a051209796dd51917555d3072a140af327ff01f1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-iwata-industry-2023-p10"
		],
		"workingPressureBar": [
			"october2-tools-iwata-industry-2023-p10"
		],
		"airflowLpm": [
			"october2-tools-iwata-industry-2023-p10"
		],
		"airflowBasis": [
			"october2-tools-iwata-industry-2023-p10"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 475 L/min à 3 bar."
	]
};

export default product;
