import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-yrd-6nbk",
	"slug": "yokota-yrd-6nbk",
	"brand": "Yokota",
	"model": "YRD-6NBK",
	"mpn": "YRD-6NBK",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Yokota YRD-6NBK",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yrd-6nbk.webp",
		"alt": "Repères techniques Yokota YRD-6NBK, référence YRD-6NBK",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YRD-6NBK. La YRD-6NBK est la perceuse capacité acier 6–8 mm, 2 800 tr/min et 0,33 kW. La YRD-8NBK donne 8–10 mm, 1 900 tr/min et 0,38 kW, pour 1,3 kg contre 0,9 kg. La capacité et la vitesse orientent le choix du foret ; le régime des 8,3 L/s reste non précisé.",
		"verifiedFacts": [
			"Capacité acier : 6–8 mm.",
			"Filetage mandrin : 3/8 pouce × 24 UNF.",
			"Vitesse à vide : 2 800 tr/min.",
			"Puissance : 0,33 kW.",
			"Masse : 0,9 kg.",
			"Consommation publiée : 8,3 L/s."
		],
		"limitations": [
			"Régime et pression de mesure ne sont pas complétés par hypothèse. Les données non dimensionnantes restent dans les spécifications.",
			"Catalogue constructeur historique ; configuration livrée et disponibilité actuelles à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Capacité acier",
			"value": "6–8 mm",
			"evidenceIds": [
				"yokota-yrd-6nbk-reserved-20261103-1"
			]
		},
		{
			"label": "Filetage mandrin",
			"value": "3/8 pouce × 24 UNF",
			"evidenceIds": [
				"yokota-yrd-6nbk-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2 800 tr/min",
			"evidenceIds": [
				"yokota-yrd-6nbk-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "0,33 kW",
			"evidenceIds": [
				"yokota-yrd-6nbk-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,9 kg",
			"evidenceIds": [
				"yokota-yrd-6nbk-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation publiée",
			"value": "8,3 L/s",
			"evidenceIds": [
				"yokota-yrd-6nbk-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yrd-6nbk-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 42, réf. YRD-6NBK",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 8.3 L/s, convertis en 498 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yrd-6nbk-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "yokota-yrd-6nbk-reserved-20261103-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
			"sourceLabel": "Yokota : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. La YRD-6NBK est la perceuse capacité acier 6–8 mm, 2 800 tr/min et 0,33 kW. La YRD-8NBK donne 8–10 mm, 1 900 tr/min et 0,38 kW, pour 1,3 kg contre 0,9 kg. La capacité et la vitesse orientent le choix du foret ; le régime des 8,3 L/s reste non précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"yokota-yrd-6nbk-20260926"
		],
		"workingPressureBar": [
			"yokota-yrd-6nbk-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-yrd-6nbk-20260926"
		],
		"recommendedHose": [
			"yokota-yrd-6nbk-20260926"
		],
		"connectorSize": [
			"yokota-yrd-6nbk-20260926"
		],
		"airflowBasis": [
			"yokota-yrd-6nbk-reserved-20261103-1"
		],
		"editorial": [
			"yokota-yrd-6nbk-reserved-20261103-1"
		],
		"specifications": [
			"yokota-yrd-6nbk-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 498,
		"typical": 498,
		"max": 498
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;
