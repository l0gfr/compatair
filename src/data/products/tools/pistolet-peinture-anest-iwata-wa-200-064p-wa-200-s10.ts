import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-anest-iwata-wa-200-064p-wa-200-s10",
	"slug": "pistolet-peinture-anest-iwata-wa-200-064p-wa-200-s10",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Anest Iwata WA-200 - 064P (réf. WA-200-S10)",
	"brand": "Anest Iwata",
	"model": "WA-200 - 064P",
	"mpn": "WA-200-S10",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 2,
		"typical": 2,
		"max": 2
	},
	"airflowLpm": {
		"min": 270,
		"typical": 270,
		"max": 270
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-anest-iwata-wa-200-064p-wa-200-s10.webp",
		"alt": "Repères techniques : Anest Iwata WA-200 - 064P (réf. WA-200-S10)",
		"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "anest-iwata-wa-200-064p",
		"label": "Référence WA-200-S10",
		"distinguishingAttributes": {
			"reference": "WA-200-S10",
			"Buse déclarée": "0.6 mm",
			"Chapeau d’air": "LV2"
		}
	},
	"editorial": {
		"overview": "Anest Iwata WA-200 - 064P (réf. WA-200-S10). Consommation de régime non précisé : 270 L/min à 2 bar. Buse déclarée : 0.6 mm. Chapeau d’air : LV2.",
		"verifiedFacts": [
			"Buse déclarée : 0.6 mm.",
			"Chapeau d’air : LV2.",
			"Débit de produit dans le tableau : 255 mL/min.",
			"Largeur du jet publiée : 280 mm."
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
				"october2-tools-iwata-industry-2023-p30"
			]
		},
		{
			"label": "Chapeau d’air",
			"value": "LV2",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p30"
			]
		},
		{
			"label": "Débit de produit dans le tableau",
			"value": "255 mL/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p30"
			]
		},
		{
			"label": "Largeur du jet publiée",
			"value": "280 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p30"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "2.0 bar, colonne de pression du même tableau technique",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p30"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "270 L/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p30"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-iwata-industry-2023-p30",
			"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf#page=30",
			"sourceLabel": "Anest Iwata, catalogue industriel anglais 2023, page PDF 30",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 302977aaa53c6499ba928666a051209796dd51917555d3072a140af327ff01f1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-iwata-industry-2023-p30"
		],
		"workingPressureBar": [
			"october2-tools-iwata-industry-2023-p30"
		],
		"airflowLpm": [
			"october2-tools-iwata-industry-2023-p30"
		],
		"airflowBasis": [
			"october2-tools-iwata-industry-2023-p30"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 270 L/min à 2 bar."
	]
};

export default product;
