import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-yd-40pz",
	"slug": "yokota-yd-40pz",
	"brand": "Yokota",
	"model": "YD-40PZ",
	"mpn": "YD-40PZ",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Yokota YD-40PZ",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yd-40pz.webp",
		"alt": "Repères techniques Yokota YD-40PZ, référence YD-40PZ",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=41",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YD-40PZ. La YD-40PZ est la visseuse pistolet 0,5 kg à 14 000 tr/min et 15 Nm. La YD-600SZ est droite, 1 kg, 7 500 tr/min et 37 Nm. Vitesse, forme et couple différencient les applications ; les 1,6 L/s restent sans régime explicite, sans extrapolation à un maximum.",
		"verifiedFacts": [
			"Entraînement : Hexagonal 1/4 pouce.",
			"Modèle : Pistolet.",
			"Couple indicatif : 15 Nm.",
			"Vitesse à vide : 14 000 tr/min.",
			"Masse : 0,5 kg.",
			"Consommation publiée : 1,6 L/s."
		],
		"limitations": [
			"Régime et pression de mesure ne sont pas complétés par hypothèse. Les données non dimensionnantes restent dans les spécifications.",
			"Catalogue constructeur historique ; configuration livrée et disponibilité actuelles à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Entraînement",
			"value": "Hexagonal 1/4 pouce",
			"evidenceIds": [
				"yokota-yd-40pz-reserved-20261103-1"
			]
		},
		{
			"label": "Modèle",
			"value": "Pistolet",
			"evidenceIds": [
				"yokota-yd-40pz-reserved-20261103-1"
			]
		},
		{
			"label": "Couple indicatif",
			"value": "15 Nm",
			"evidenceIds": [
				"yokota-yd-40pz-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "14 000 tr/min",
			"evidenceIds": [
				"yokota-yd-40pz-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,5 kg",
			"evidenceIds": [
				"yokota-yd-40pz-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation publiée",
			"value": "1,6 L/s",
			"evidenceIds": [
				"yokota-yd-40pz-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yd-40pz-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=41",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 41, réf. YD-40PZ",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 1.6 L/s, convertis en 96 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yd-40pz-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "yokota-yd-40pz-reserved-20261103-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=41",
			"sourceLabel": "Yokota : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. La YD-40PZ est la visseuse pistolet 0,5 kg à 14 000 tr/min et 15 Nm. La YD-600SZ est droite, 1 kg, 7 500 tr/min et 37 Nm. Vitesse, forme et couple différencient les applications ; les 1,6 L/s restent sans régime explicite, sans extrapolation à un maximum."
		}
	],
	"fieldSources": {
		"mpn": [
			"yokota-yd-40pz-20260926"
		],
		"workingPressureBar": [
			"yokota-yd-40pz-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-yd-40pz-20260926"
		],
		"recommendedHose": [
			"yokota-yd-40pz-20260926"
		],
		"connectorSize": [
			"yokota-yd-40pz-20260926"
		],
		"airflowBasis": [
			"yokota-yd-40pz-reserved-20261103-1"
		],
		"editorial": [
			"yokota-yd-40pz-reserved-20261103-1"
		],
		"specifications": [
			"yokota-yd-40pz-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 96,
		"typical": 96,
		"max": 96
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;
