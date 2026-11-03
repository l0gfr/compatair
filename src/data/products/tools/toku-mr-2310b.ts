import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "toku-mr-2310b",
	"slug": "toku-mr-2310b",
	"brand": "Toku",
	"model": "MR-2310B",
	"mpn": "MR-2310B",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Toku MR-2310B",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-mr-2310b.webp",
		"alt": "Repères techniques Toku MR-2310B, référence MR-2310B",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=40",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Toku MR-2310B. La MR-2310B est le cliquet 3/8 pouce à 78 Nm et 175 tr/min. La MR-2410B reçoit le carré 1/2 pouce avec la même vitesse et consommation ; la MR-2209C est plus légère, 0,5 kg, pour 28 Nm et 250 tr/min. Le régime des 6 L/s n’est pas précisé dans la table.",
		"verifiedFacts": [
			"Carré : 3/8 pouce.",
			"Couple indicatif : 78 Nm.",
			"Vitesse : 175 tr/min.",
			"Masse : 1,2 kg.",
			"Consommation publiée : 6 L/s."
		],
		"limitations": [
			"Régime et pression de mesure ne sont pas complétés par hypothèse. Les données non dimensionnantes restent dans les spécifications.",
			"Catalogue constructeur historique ; configuration livrée et disponibilité actuelles à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "3/8 pouce",
			"evidenceIds": [
				"toku-mr-2310b-reserved-20261103-1"
			]
		},
		{
			"label": "Couple indicatif",
			"value": "78 Nm",
			"evidenceIds": [
				"toku-mr-2310b-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse",
			"value": "175 tr/min",
			"evidenceIds": [
				"toku-mr-2310b-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,2 kg",
			"evidenceIds": [
				"toku-mr-2310b-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation publiée",
			"value": "6 L/s",
			"evidenceIds": [
				"toku-mr-2310b-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-mr-2310b-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=40",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 40, réf. MR-2310B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 6 L/s, convertis en 360 L/min par multiplication par 60."
		},
		{
			"id": "toku-mr-2310b-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "toku-mr-2310b-reserved-20261103-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=40",
			"sourceLabel": "Toku : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. La MR-2310B est le cliquet 3/8 pouce à 78 Nm et 175 tr/min. La MR-2410B reçoit le carré 1/2 pouce avec la même vitesse et consommation ; la MR-2209C est plus légère, 0,5 kg, pour 28 Nm et 250 tr/min. Le régime des 6 L/s n’est pas précisé dans la table."
		}
	],
	"fieldSources": {
		"mpn": [
			"toku-mr-2310b-20260926"
		],
		"workingPressureBar": [
			"toku-mr-2310b-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"toku-mr-2310b-20260926"
		],
		"recommendedHose": [
			"toku-mr-2310b-20260926"
		],
		"connectorSize": [
			"toku-mr-2310b-20260926"
		],
		"airflowBasis": [
			"toku-mr-2310b-reserved-20261103-1"
		],
		"editorial": [
			"toku-mr-2310b-reserved-20261103-1"
		],
		"specifications": [
			"toku-mr-2310b-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 360,
		"typical": 360,
		"max": 360
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;
