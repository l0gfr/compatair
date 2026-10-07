import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-anest-iwata-tof-50-102p-13608980",
	"slug": "pistolet-peinture-anest-iwata-tof-50-102p-13608980",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Anest Iwata TOF-50-102P (réf. 13608980)",
	"brand": "Anest Iwata",
	"model": "TOF-50-102P",
	"mpn": "13608980",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 1,
		"typical": 1,
		"max": 1
	},
	"airflowLpm": {
		"min": 50,
		"typical": 50,
		"max": 50
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-anest-iwata-tof-50-102p-13608980.webp",
		"alt": "Repères techniques : Anest Iwata TOF-50-102P (réf. 13608980)",
		"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "anest-iwata-tof-50-102p",
		"label": "Référence 13608980",
		"distinguishingAttributes": {
			"reference": "13608980",
			"Buse déclarée": "1.0 mm",
			"Chapeau d’air": "E2"
		}
	},
	"editorial": {
		"overview": "Anest Iwata TOF-50-102P (réf. 13608980). Consommation de régime non précisé : 50 L/min à 1 bar. Buse déclarée : 1.0 mm. Chapeau d’air : E2.",
		"verifiedFacts": [
			"Buse déclarée : 1.0 mm.",
			"Chapeau d’air : E2.",
			"Débit de produit dans le tableau : 280 mL/min.",
			"Largeur du jet publiée : 180 mm.",
			"Forme du jet : Plat."
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
				"october2-tools-iwata-industry-2023-p35"
			]
		},
		{
			"label": "Chapeau d’air",
			"value": "E2",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p35"
			]
		},
		{
			"label": "Débit de produit dans le tableau",
			"value": "280 mL/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p35"
			]
		},
		{
			"label": "Largeur du jet publiée",
			"value": "180 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p35"
			]
		},
		{
			"label": "Forme du jet",
			"value": "Plat",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p35"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "1.0 bar, colonne de pression du même tableau technique",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p35"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "50 L/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p35"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-iwata-industry-2023-p35",
			"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf#page=35",
			"sourceLabel": "Anest Iwata, catalogue industriel anglais 2023, page PDF 35",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 302977aaa53c6499ba928666a051209796dd51917555d3072a140af327ff01f1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-iwata-industry-2023-p35"
		],
		"workingPressureBar": [
			"october2-tools-iwata-industry-2023-p35"
		],
		"airflowLpm": [
			"october2-tools-iwata-industry-2023-p35"
		],
		"airflowBasis": [
			"october2-tools-iwata-industry-2023-p35"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 50 L/min à 1 bar."
	]
};

export default product;
