import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-anest-iwata-w-200-zp2-h-20-zp2-h20",
	"slug": "pistolet-peinture-anest-iwata-w-200-zp2-h-20-zp2-h20",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Anest Iwata W-200 ZP2 H-20 (réf. ZP2-H20)",
	"brand": "Anest Iwata",
	"model": "W-200 ZP2 H-20",
	"mpn": "ZP2-H20",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 3.5,
		"typical": 3.5,
		"max": 3.5
	},
	"airflowLpm": {
		"min": 760,
		"typical": 760,
		"max": 760
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-anest-iwata-w-200-zp2-h-20-zp2-h20.webp",
		"alt": "Repères techniques : Anest Iwata W-200 ZP2 H-20 (réf. ZP2-H20)",
		"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "anest-iwata-w-200-zp2-h-20",
		"label": "Référence ZP2-H20",
		"distinguishingAttributes": {
			"reference": "ZP2-H20",
			"Buse déclarée": "2.0 mm",
			"Chapeau d’air": "ZP2"
		}
	},
	"editorial": {
		"overview": "Anest Iwata W-200 ZP2 H-20 (réf. ZP2-H20). Consommation en charge : 760 L/min à 3,5 bar. Buse déclarée : 2.0 mm. Chapeau d’air : ZP2.",
		"verifiedFacts": [
			"Buse déclarée : 2.0 mm.",
			"Chapeau d’air : ZP2.",
			"Débit de produit dans le tableau : 500 mL/min.",
			"Largeur du jet publiée : 370 mm.",
			"Matériau de la buse et de l’aiguille : Carbure de tungstène ; application de produits abrasifs, notamment glaçure céramique."
		],
		"limitations": [
			"Le débit en charge est associé au point de pression documenté ; aucun facteur de marche supposé ne le réduit.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Buse déclarée",
			"value": "2.0 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p16"
			]
		},
		{
			"label": "Chapeau d’air",
			"value": "ZP2",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p16"
			]
		},
		{
			"label": "Débit de produit dans le tableau",
			"value": "500 mL/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p16"
			]
		},
		{
			"label": "Largeur du jet publiée",
			"value": "370 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p16"
			]
		},
		{
			"label": "Matériau de la buse et de l’aiguille",
			"value": "Carbure de tungstène ; application de produits abrasifs, notamment glaçure céramique",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p16"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "3.5 bar, Suggested gun inlet pressure during spraying, note du tableau PDF 16.",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p16"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "760 L/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p16"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-iwata-industry-2023-p16",
			"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf#page=16",
			"sourceLabel": "Anest Iwata, catalogue industriel anglais 2023, page PDF 16",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 302977aaa53c6499ba928666a051209796dd51917555d3072a140af327ff01f1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-iwata-industry-2023-p16"
		],
		"workingPressureBar": [
			"october2-tools-iwata-industry-2023-p16"
		],
		"airflowLpm": [
			"october2-tools-iwata-industry-2023-p16"
		]
	},
	"notes": [
		"Consommation en charge : 760 L/min à 3,5 bar."
	]
};

export default product;
