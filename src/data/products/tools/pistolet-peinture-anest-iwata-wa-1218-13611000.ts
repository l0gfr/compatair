import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-anest-iwata-wa-1218-13611000",
	"slug": "pistolet-peinture-anest-iwata-wa-1218-13611000",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Anest Iwata WA-1218 (réf. 13611000)",
	"brand": "Anest Iwata",
	"model": "WA-1218",
	"mpn": "13611000",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 3,
		"typical": 3,
		"max": 3
	},
	"airflowLpm": {
		"min": 73,
		"typical": 73,
		"max": 73
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-anest-iwata-wa-1218-13611000.webp",
		"alt": "Repères techniques : Anest Iwata WA-1218 (réf. 13611000)",
		"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "anest-iwata-wa-1218",
		"label": "Référence 13611000",
		"distinguishingAttributes": {
			"reference": "13611000",
			"Buse déclarée": "0.6 mm",
			"Chapeau d’air": "Non numéroté dans le tableau"
		}
	},
	"editorial": {
		"overview": "Anest Iwata WA-1218 (réf. 13611000). Consommation de régime non précisé : 73 L/min à 3 bar. Buse déclarée : 0.6 mm. Chapeau d’air : Non numéroté dans le tableau.",
		"verifiedFacts": [
			"Buse déclarée : 0.6 mm.",
			"Chapeau d’air : Non numéroté dans le tableau.",
			"Débit de produit dans le tableau : 17 mL/min.",
			"Largeur du jet publiée : 48 mm.",
			"Longueur du tube de rallonge : 180 mm.",
			"Diamètre du tube de rallonge : 12 mm."
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
				"october2-tools-iwata-industry-2023-p34"
			]
		},
		{
			"label": "Chapeau d’air",
			"value": "Non numéroté dans le tableau",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p34"
			]
		},
		{
			"label": "Débit de produit dans le tableau",
			"value": "17 mL/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p34"
			]
		},
		{
			"label": "Largeur du jet publiée",
			"value": "48 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p34"
			]
		},
		{
			"label": "Longueur du tube de rallonge",
			"value": "180 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p34"
			]
		},
		{
			"label": "Diamètre du tube de rallonge",
			"value": "12 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p34"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "3.0 bar, colonne de pression du même tableau technique",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p34"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "73 L/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p34"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-iwata-industry-2023-p34",
			"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf#page=34",
			"sourceLabel": "Anest Iwata, catalogue industriel anglais 2023, page PDF 34",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 302977aaa53c6499ba928666a051209796dd51917555d3072a140af327ff01f1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-iwata-industry-2023-p34"
		],
		"workingPressureBar": [
			"october2-tools-iwata-industry-2023-p34"
		],
		"airflowLpm": [
			"october2-tools-iwata-industry-2023-p34"
		],
		"airflowBasis": [
			"october2-tools-iwata-industry-2023-p34"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 73 L/min à 3 bar."
	]
};

export default product;
