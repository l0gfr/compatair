import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-anest-iwata-wra-101-s9n-06p-13060130",
	"slug": "pistolet-peinture-anest-iwata-wra-101-s9n-06p-13060130",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Anest Iwata WRA-101-S9N-06P (réf. 13060130)",
	"brand": "Anest Iwata",
	"model": "WRA-101-S9N-06P",
	"mpn": "13060130",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 1.1,
		"typical": 1.1,
		"max": 1.1
	},
	"airflowLpm": {
		"min": 150,
		"typical": 150,
		"max": 150
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-anest-iwata-wra-101-s9n-06p-13060130.webp",
		"alt": "Repères techniques : Anest Iwata WRA-101-S9N-06P (réf. 13060130)",
		"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "anest-iwata-wra-101-s9n-06p",
		"label": "Référence 13060130",
		"distinguishingAttributes": {
			"reference": "13060130",
			"Buse déclarée": "0.6 mm",
			"Chapeau d’air": "E2"
		}
	},
	"editorial": {
		"overview": "Anest Iwata WRA-101-S9N-06P (réf. 13060130). Consommation de régime non précisé : 150 L/min à 1,1 bar. Buse déclarée : 0.6 mm. Chapeau d’air : E2.",
		"verifiedFacts": [
			"Buse déclarée : 0.6 mm.",
			"Chapeau d’air : E2.",
			"Débit de produit dans le tableau : 20 mL/min.",
			"Largeur du jet publiée : 70 mm.",
			"Réglage publié : Sans microjauge."
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
				"october2-tools-iwata-industry-2023-p36"
			]
		},
		{
			"label": "Chapeau d’air",
			"value": "E2",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p36"
			]
		},
		{
			"label": "Débit de produit dans le tableau",
			"value": "20 mL/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p36"
			]
		},
		{
			"label": "Largeur du jet publiée",
			"value": "70 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p36"
			]
		},
		{
			"label": "Réglage publié",
			"value": "Sans microjauge",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p36"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "1.1 bar, colonne de pression du même tableau technique",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p36"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "150 L/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p36"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-iwata-industry-2023-p36",
			"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf#page=36",
			"sourceLabel": "Anest Iwata, catalogue industriel anglais 2023, page PDF 36",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 302977aaa53c6499ba928666a051209796dd51917555d3072a140af327ff01f1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-iwata-industry-2023-p36"
		],
		"workingPressureBar": [
			"october2-tools-iwata-industry-2023-p36"
		],
		"airflowLpm": [
			"october2-tools-iwata-industry-2023-p36"
		],
		"airflowBasis": [
			"october2-tools-iwata-industry-2023-p36"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 150 L/min à 1,1 bar."
	]
};

export default product;
