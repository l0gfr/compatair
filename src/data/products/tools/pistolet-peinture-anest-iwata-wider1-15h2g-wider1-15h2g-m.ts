import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-anest-iwata-wider1-15h2g-wider1-15h2g-m",
	"slug": "pistolet-peinture-anest-iwata-wider1-15h2g-wider1-15h2g-m",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Anest Iwata WIDER1-15H2G (réf. WIDER1-15H2G-M)",
	"brand": "Anest Iwata",
	"model": "WIDER1-15H2G",
	"mpn": "WIDER1-15H2G-M",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 2.5,
		"typical": 2.5,
		"max": 2.5
	},
	"airflowLpm": {
		"min": 225,
		"typical": 225,
		"max": 225
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-anest-iwata-wider1-15h2g-wider1-15h2g-m.webp",
		"alt": "Repères techniques : Anest Iwata WIDER1-15H2G (réf. WIDER1-15H2G-M)",
		"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "anest-iwata-wider1-15h2g",
		"label": "Référence WIDER1-15H2G-M",
		"distinguishingAttributes": {
			"reference": "WIDER1-15H2G-M",
			"Buse déclarée": "1.5 mm",
			"Chapeau d’air": "H2"
		}
	},
	"editorial": {
		"overview": "Anest Iwata WIDER1-15H2G (réf. WIDER1-15H2G-M). Consommation de régime non précisé : 225 L/min à 2,5 bar. Buse déclarée : 1.5 mm. Chapeau d’air : H2.",
		"verifiedFacts": [
			"Buse déclarée : 1.5 mm.",
			"Chapeau d’air : H2.",
			"Débit de produit dans le tableau : 190 mL/min.",
			"Largeur du jet publiée : 190 mm."
		],
		"limitations": [
			"Une consommation moyenne, à vide ou de régime non précisé ne confirme pas le débit maximal en charge ; le verdict reste insufficient_data.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Buse déclarée",
			"value": "1.5 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p18"
			]
		},
		{
			"label": "Chapeau d’air",
			"value": "H2",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p18"
			]
		},
		{
			"label": "Débit de produit dans le tableau",
			"value": "190 mL/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p18"
			]
		},
		{
			"label": "Largeur du jet publiée",
			"value": "190 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p18"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "2.5 bar, colonne de pression du même tableau technique",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p18"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "225 L/min",
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
		"Consommation de régime non précisé : 225 L/min à 2,5 bar."
	]
};

export default product;
