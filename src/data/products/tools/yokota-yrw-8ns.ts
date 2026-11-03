import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-yrw-8ns",
	"slug": "yokota-yrw-8ns",
	"brand": "Yokota",
	"model": "YRW-8NS",
	"mpn": "YRW-8NS",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Yokota YRW-8NS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yrw-8ns.webp",
		"alt": "Repères techniques Yokota YRW-8NS, référence YRW-8NS",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=40",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YRW-8NS. La YRW-8NS publie les tailles de douilles 10, 12, 13 et 14 mm, 30 Nm et 250 tr/min. La YRW-10N donne les tailles 14 et 17 mm, 45 Nm et 140 tr/min pour 2,7 kg. Ces tailles ne sont pas transcrites en un carré standard non documenté. Les 8,3 L/s demeurent une consommation de régime non précisé.",
		"verifiedFacts": [
			"Douilles, tailles publiées : 10 / 12 / 13 / 14 mm, renvoi du catalogue.",
			"Couple indicatif : 30 Nm.",
			"Vitesse : 250 tr/min.",
			"Masse : 2 kg.",
			"Consommation publiée : 8,3 L/s."
		],
		"limitations": [
			"Régime et pression de mesure ne sont pas complétés par hypothèse. Les données non dimensionnantes restent dans les spécifications.",
			"Catalogue constructeur historique ; configuration livrée et disponibilité actuelles à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Douilles, tailles publiées",
			"value": "10 / 12 / 13 / 14 mm, renvoi du catalogue",
			"evidenceIds": [
				"yokota-yrw-8ns-reserved-20261103-1"
			]
		},
		{
			"label": "Couple indicatif",
			"value": "30 Nm",
			"evidenceIds": [
				"yokota-yrw-8ns-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse",
			"value": "250 tr/min",
			"evidenceIds": [
				"yokota-yrw-8ns-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "2 kg",
			"evidenceIds": [
				"yokota-yrw-8ns-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation publiée",
			"value": "8,3 L/s",
			"evidenceIds": [
				"yokota-yrw-8ns-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yrw-8ns-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=40",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 40, réf. YRW-8NS",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 8.3 L/s, convertis en 498 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yrw-8ns-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "yokota-yrw-8ns-reserved-20261103-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=40",
			"sourceLabel": "Yokota : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. La YRW-8NS publie les tailles de douilles 10, 12, 13 et 14 mm, 30 Nm et 250 tr/min. La YRW-10N donne les tailles 14 et 17 mm, 45 Nm et 140 tr/min pour 2,7 kg. Ces tailles ne sont pas transcrites en un carré standard non documenté. Les 8,3 L/s demeurent une consommation de régime non précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"yokota-yrw-8ns-20260926"
		],
		"workingPressureBar": [
			"yokota-yrw-8ns-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-yrw-8ns-20260926"
		],
		"recommendedHose": [
			"yokota-yrw-8ns-20260926"
		],
		"connectorSize": [
			"yokota-yrw-8ns-20260926"
		],
		"airflowBasis": [
			"yokota-yrw-8ns-reserved-20261103-1"
		],
		"editorial": [
			"yokota-yrw-8ns-reserved-20261103-1"
		],
		"specifications": [
			"yokota-yrw-8ns-reserved-20261103-1"
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
