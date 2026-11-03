import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-g-40ef",
	"slug": "yokota-g-40ef",
	"brand": "Yokota",
	"model": "G-40EF",
	"mpn": "G-40EF",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Yokota G-40EF",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-g-40ef.webp",
		"alt": "Repères techniques Yokota G-40EF, référence G-40EF",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota G-40EF. La G-40EF est le modèle 115 mm à 13 000 tr/min, 0,60 kW et 1,4 kg. La G-50EF passe à 125 mm, 12 000 tr/min et 1,5 kg, avec la même consommation. Le diamètre admissible change malgré un débit identique ; le régime des 10,8 L/s n’est pas précisé.",
		"verifiedFacts": [
			"Disque : 115 × (0,8–7) × 22,2 mm.",
			"Broche publiée : 7/16 pouce.",
			"Puissance : 0,60 kW.",
			"Vitesse à vide : 13 000 tr/min.",
			"Masse : 1,4 kg.",
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
			"value": "115 × (0,8–7) × 22,2 mm",
			"evidenceIds": [
				"yokota-g-40ef-reserved-20261103-1"
			]
		},
		{
			"label": "Broche publiée",
			"value": "7/16 pouce",
			"evidenceIds": [
				"yokota-g-40ef-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "0,60 kW",
			"evidenceIds": [
				"yokota-g-40ef-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "13 000 tr/min",
			"evidenceIds": [
				"yokota-g-40ef-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,4 kg",
			"evidenceIds": [
				"yokota-g-40ef-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation publiée",
			"value": "10,8 L/s",
			"evidenceIds": [
				"yokota-g-40ef-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-g-40ef-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 45, réf. G-40EF",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 10.8 L/s, convertis en 648 L/min par multiplication par 60."
		},
		{
			"id": "yokota-g-40ef-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "yokota-g-40ef-reserved-20261103-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
			"sourceLabel": "Yokota : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. La G-40EF est le modèle 115 mm à 13 000 tr/min, 0,60 kW et 1,4 kg. La G-50EF passe à 125 mm, 12 000 tr/min et 1,5 kg, avec la même consommation. Le diamètre admissible change malgré un débit identique ; le régime des 10,8 L/s n’est pas précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"yokota-g-40ef-20260926"
		],
		"workingPressureBar": [
			"yokota-g-40ef-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-g-40ef-20260926"
		],
		"recommendedHose": [
			"yokota-g-40ef-20260926"
		],
		"connectorSize": [
			"yokota-g-40ef-20260926"
		],
		"airflowBasis": [
			"yokota-g-40ef-reserved-20261103-1"
		],
		"editorial": [
			"yokota-g-40ef-reserved-20261103-1"
		],
		"specifications": [
			"yokota-g-40ef-reserved-20261103-1"
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
		"innerDiameterMm": 13
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;
