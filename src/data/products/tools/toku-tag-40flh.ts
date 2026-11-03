import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "toku-tag-40flh",
	"slug": "toku-tag-40flh",
	"brand": "Toku",
	"model": "TAG-40FLH",
	"mpn": "TAG-40FLH",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Toku TAG-40FLH",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-tag-40flh.webp",
		"alt": "Repères techniques Toku TAG-40FLH, référence TAG-40FLH",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Toku TAG-40FLH. La TAG-40FLH est la version 100 mm à broche M8 et puissance 0,55 kW. Les TAG-45MLH et TAG-50MLH utilisent M14 × 2, pour 115 et 125 mm, et 0,67 kW. Le même débit publié ne rend pas leurs disques interchangeables. Le régime de consommation reste non précisé.",
		"verifiedFacts": [
			"Disque : 100 × (0,8–6) × 16 mm.",
			"Broche : M8.",
			"Puissance : 0,55 kW.",
			"Vitesse à vide : 13 000 tr/min.",
			"Masse : 1,7 kg.",
			"Consommation publiée : 10,8 L/s."
		],
		"limitations": [
			"Régime et pression de mesure ne sont pas complétés par hypothèse. Les données non dimensionnantes restent dans les spécifications.",
			"Catalogue constructeur historique ; configuration livrée et disponibilité actuelles à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Disque",
			"value": "100 × (0,8–6) × 16 mm",
			"evidenceIds": [
				"toku-tag-40flh-reserved-20261103-1"
			]
		},
		{
			"label": "Broche",
			"value": "M8",
			"evidenceIds": [
				"toku-tag-40flh-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "0,55 kW",
			"evidenceIds": [
				"toku-tag-40flh-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "13 000 tr/min",
			"evidenceIds": [
				"toku-tag-40flh-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,7 kg",
			"evidenceIds": [
				"toku-tag-40flh-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation publiée",
			"value": "10,8 L/s",
			"evidenceIds": [
				"toku-tag-40flh-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-tag-40flh-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 45, réf. TAG-40FLH",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 10.8 L/s, convertis en 648 L/min par multiplication par 60."
		},
		{
			"id": "toku-tag-40flh-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "toku-tag-40flh-reserved-20261103-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
			"sourceLabel": "Toku : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. La TAG-40FLH est la version 100 mm à broche M8 et puissance 0,55 kW. Les TAG-45MLH et TAG-50MLH utilisent M14 × 2, pour 115 et 125 mm, et 0,67 kW. Le même débit publié ne rend pas leurs disques interchangeables. Le régime de consommation reste non précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"toku-tag-40flh-20260926"
		],
		"workingPressureBar": [
			"toku-tag-40flh-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"toku-tag-40flh-20260926"
		],
		"recommendedHose": [
			"toku-tag-40flh-20260926"
		],
		"connectorSize": [
			"toku-tag-40flh-20260926"
		],
		"airflowBasis": [
			"toku-tag-40flh-reserved-20261103-1"
		],
		"editorial": [
			"toku-tag-40flh-reserved-20261103-1"
		],
		"specifications": [
			"toku-tag-40flh-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 648,
		"typical": 648,
		"max": 648
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 3/8\"",
	"airflowBasis": "unqualified"
};

export default product;
