import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-anest-iwata-tof-50r-142p-13609110",
	"slug": "pistolet-peinture-anest-iwata-tof-50r-142p-13609110",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Anest Iwata TOF-50R-142P (réf. 13609110)",
	"brand": "Anest Iwata",
	"model": "TOF-50R-142P",
	"mpn": "13609110",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 3.5,
		"typical": 3.5,
		"max": 3.5
	},
	"airflowLpm": {
		"min": 80,
		"typical": 80,
		"max": 80
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-anest-iwata-tof-50r-142p-13609110.webp",
		"alt": "Repères techniques : Anest Iwata TOF-50R-142P (réf. 13609110)",
		"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "anest-iwata-tof-50r-142p",
		"label": "Référence 13609110",
		"distinguishingAttributes": {
			"reference": "13609110",
			"Buse déclarée": "1.4 mm",
			"Chapeau d’air": "2"
		}
	},
	"editorial": {
		"overview": "Anest Iwata TOF-50R-142P (réf. 13609110). Consommation de régime non précisé : 80 L/min à 3,5 bar. Buse déclarée : 1.4 mm. Chapeau d’air : 2.",
		"verifiedFacts": [
			"Buse déclarée : 1.4 mm.",
			"Chapeau d’air : 2.",
			"Débit de produit dans le tableau : 500 mL/min.",
			"Largeur du jet publiée : 75 mm.",
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
			"value": "1.4 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p35"
			]
		},
		{
			"label": "Chapeau d’air",
			"value": "2",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p35"
			]
		},
		{
			"label": "Débit de produit dans le tableau",
			"value": "500 mL/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p35"
			]
		},
		{
			"label": "Largeur du jet publiée",
			"value": "75 mm",
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
			"value": "3.5 bar, colonne de pression du même tableau technique",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p35"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "80 L/min",
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
		"Consommation de régime non précisé : 80 L/min à 3,5 bar."
	]
};

export default product;
