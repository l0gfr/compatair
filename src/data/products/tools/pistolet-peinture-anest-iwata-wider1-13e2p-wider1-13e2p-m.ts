import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-anest-iwata-wider1-13e2p-wider1-13e2p-m",
	"slug": "pistolet-peinture-anest-iwata-wider1-13e2p-wider1-13e2p-m",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Anest Iwata WIDER1-13E2P (réf. WIDER1-13E2P-M)",
	"brand": "Anest Iwata",
	"model": "WIDER1-13E2P",
	"mpn": "WIDER1-13E2P-M",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 2.5,
		"typical": 2.5,
		"max": 2.5
	},
	"airflowLpm": {
		"min": 220,
		"typical": 220,
		"max": 220
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-anest-iwata-wider1-13e2p-wider1-13e2p-m.webp",
		"alt": "Repères techniques : Anest Iwata WIDER1-13E2P (réf. WIDER1-13E2P-M)",
		"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "anest-iwata-wider1-13e2p",
		"label": "Référence WIDER1-13E2P-M",
		"distinguishingAttributes": {
			"reference": "WIDER1-13E2P-M",
			"Buse déclarée": "1.3 mm",
			"Chapeau d’air": "E2P"
		}
	},
	"editorial": {
		"overview": "Anest Iwata WIDER1-13E2P (réf. WIDER1-13E2P-M). Consommation de régime non précisé : 220 L/min à 2,5 bar. Buse déclarée : 1.3 mm. Chapeau d’air : E2P.",
		"verifiedFacts": [
			"Buse déclarée : 1.3 mm.",
			"Chapeau d’air : E2P.",
			"Débit de produit dans le tableau : 200 mL/min.",
			"Largeur du jet publiée : 210 mm."
		],
		"limitations": [
			"Une consommation moyenne, à vide ou de régime non précisé ne confirme pas le débit maximal en charge ; le verdict reste insufficient_data.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Buse déclarée",
			"value": "1.3 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p18"
			]
		},
		{
			"label": "Chapeau d’air",
			"value": "E2P",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p18"
			]
		},
		{
			"label": "Débit de produit dans le tableau",
			"value": "200 mL/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p18"
			]
		},
		{
			"label": "Largeur du jet publiée",
			"value": "210 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p18"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "2.5 bar, colonne de pression du même tableau",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p18"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "220 L/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p18"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-iwata-industry-2023-p18",
			"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf#page=18",
			"sourceLabel": "Anest Iwata, catalogue industriel anglais 2023, page PDF 18",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 302977aaa53c6499ba928666a051209796dd51917555d3072a140af327ff01f1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-iwata-industry-2023-p18"
		],
		"workingPressureBar": [
			"october2-tools-iwata-industry-2023-p18"
		],
		"airflowLpm": [
			"october2-tools-iwata-industry-2023-p18"
		],
		"airflowBasis": [
			"october2-tools-iwata-industry-2023-p18"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 220 L/min à 2,5 bar."
	]
};

export default product;
