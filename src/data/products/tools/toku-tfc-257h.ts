import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "toku-tfc-257h",
	"slug": "toku-tfc-257h",
	"brand": "Toku",
	"model": "TFC-257H",
	"mpn": "TFC-257H",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Toku TFC-257H",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-tfc-257h.webp",
		"alt": "Repères techniques Toku TFC-257H, référence TFC-257H",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=49",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Toku TFC-257H. Le TFC-257H est le burineur 1,7 kg à course 34 mm, 4 000 coups/min et 7,9 J. La table du RR-0315 voisin donne 32 mm, 7,4 J et 2,6 kg : la cadence seule ne résume pas l’énergie ni l’encombrement. Les 6,7 L/s ne sont pas convertis en litres par coup ; leur régime de mesure reste non précisé.",
		"verifiedFacts": [
			"Emmanchement publié : 12,7 mm.",
			"Piston : 25 mm.",
			"Course : 34 mm.",
			"Cadence : 4 000 coups/min.",
			"Énergie par coup : 7,9 J.",
			"Masse : 1,7 kg.",
			"Consommation publiée : 6,7 L/s."
		],
		"limitations": [
			"Régime et pression de mesure ne sont pas complétés par hypothèse. Les données non dimensionnantes restent dans les spécifications.",
			"Catalogue constructeur historique ; configuration livrée et disponibilité actuelles à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Emmanchement publié",
			"value": "12,7 mm",
			"evidenceIds": [
				"toku-tfc-257h-reserved-20261103-1"
			]
		},
		{
			"label": "Piston",
			"value": "25 mm",
			"evidenceIds": [
				"toku-tfc-257h-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "34 mm",
			"evidenceIds": [
				"toku-tfc-257h-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "4 000 coups/min",
			"evidenceIds": [
				"toku-tfc-257h-reserved-20261103-1"
			]
		},
		{
			"label": "Énergie par coup",
			"value": "7,9 J",
			"evidenceIds": [
				"toku-tfc-257h-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,7 kg",
			"evidenceIds": [
				"toku-tfc-257h-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation publiée",
			"value": "6,7 L/s",
			"evidenceIds": [
				"toku-tfc-257h-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-tfc-257h-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=49",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 49, réf. TFC-257H",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 6.7 L/s, convertis en 402 L/min par multiplication par 60."
		},
		{
			"id": "toku-tfc-257h-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "toku-tfc-257h-reserved-20261103-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=53",
			"sourceLabel": "Toku : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Le TFC-257H est le burineur 1,7 kg à course 34 mm, 4 000 coups/min et 7,9 J. La table du RR-0315 voisin donne 32 mm, 7,4 J et 2,6 kg : la cadence seule ne résume pas l’énergie ni l’encombrement. Les 6,7 L/s ne sont pas convertis en litres par coup ; leur régime de mesure reste non précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"toku-tfc-257h-20260926"
		],
		"workingPressureBar": [
			"toku-tfc-257h-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"toku-tfc-257h-20260926"
		],
		"recommendedHose": [
			"toku-tfc-257h-20260926"
		],
		"connectorSize": [
			"toku-tfc-257h-20260926"
		],
		"airflowBasis": [
			"toku-tfc-257h-reserved-20261103-1"
		],
		"editorial": [
			"toku-tfc-257h-reserved-20261103-1"
		],
		"specifications": [
			"toku-tfc-257h-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 402,
		"typical": 402,
		"max": 402
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;
