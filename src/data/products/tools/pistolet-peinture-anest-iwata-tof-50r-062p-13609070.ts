import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-anest-iwata-tof-50r-062p-13609070",
	"slug": "pistolet-peinture-anest-iwata-tof-50r-062p-13609070",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Anest Iwata TOF-50R-062P (réf. 13609070)",
	"brand": "Anest Iwata",
	"model": "TOF-50R-062P",
	"mpn": "13609070",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 1.5,
		"typical": 1.5,
		"max": 1.5
	},
	"airflowLpm": {
		"min": 70,
		"typical": 70,
		"max": 70
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-anest-iwata-tof-50r-062p-13609070.webp",
		"alt": "Repères techniques : Anest Iwata TOF-50R-062P (réf. 13609070)",
		"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "anest-iwata-tof-50r-062p",
		"label": "Référence 13609070",
		"distinguishingAttributes": {
			"reference": "13609070",
			"Buse déclarée": "0.6 mm",
			"Chapeau d’air": "1"
		}
	},
	"editorial": {
		"overview": "Anest Iwata TOF-50R-062P (réf. 13609070). Consommation de régime non précisé : 70 L/min à 1,5 bar. Buse déclarée : 0.6 mm. Chapeau d’air : 1.",
		"verifiedFacts": [
			"Buse déclarée : 0.6 mm.",
			"Chapeau d’air : 1.",
			"Débit de produit dans le tableau : 180 mL/min.",
			"Largeur du jet publiée : 40 mm.",
			"Forme du jet : Rond."
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
				"october2-tools-iwata-industry-2023-p35"
			]
		},
		{
			"label": "Chapeau d’air",
			"value": "1",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p35"
			]
		},
		{
			"label": "Débit de produit dans le tableau",
			"value": "180 mL/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p35"
			]
		},
		{
			"label": "Largeur du jet publiée",
			"value": "40 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p35"
			]
		},
		{
			"label": "Forme du jet",
			"value": "Rond",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p35"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "1.5 bar, colonne de pression du même tableau technique",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p35"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "70 L/min",
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
		"Consommation de régime non précisé : 70 L/min à 1,5 bar."
	]
};

export default product;
