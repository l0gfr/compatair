import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-anest-iwata-wa-200-066p-ft-13650360",
	"slug": "pistolet-peinture-anest-iwata-wa-200-066p-ft-13650360",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Anest Iwata WA-200-066P FT (réf. 13650360)",
	"brand": "Anest Iwata",
	"model": "WA-200-066P FT",
	"mpn": "13650360",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 1.8,
		"typical": 1.8,
		"max": 1.8
	},
	"airflowLpm": {
		"min": 170,
		"typical": 170,
		"max": 170
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-anest-iwata-wa-200-066p-ft-13650360.webp",
		"alt": "Repères techniques : Anest Iwata WA-200-066P FT (réf. 13650360)",
		"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "anest-iwata-wa-200-066p-ft",
		"label": "Référence 13650360",
		"distinguishingAttributes": {
			"reference": "13650360",
			"Buse déclarée": "0.6 mm",
			"Chapeau d’air": "FT6"
		}
	},
	"editorial": {
		"overview": "Anest Iwata WA-200-066P FT (réf. 13650360). Consommation de régime non précisé : 170 L/min à 1,8 bar. Buse déclarée : 0.6 mm. Chapeau d’air : FT6.",
		"verifiedFacts": [
			"Buse déclarée : 0.6 mm.",
			"Chapeau d’air : FT6.",
			"Débit de produit dans le tableau : 80 mL/min.",
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
			"value": "0.6 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p31"
			]
		},
		{
			"label": "Chapeau d’air",
			"value": "FT6",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p31"
			]
		},
		{
			"label": "Débit de produit dans le tableau",
			"value": "80 mL/min",
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
			"value": "1.8 bar, colonne de pression du même tableau technique",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p31"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "170 L/min",
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
		"Consommation de régime non précisé : 170 L/min à 1,8 bar."
	]
};

export default product;
