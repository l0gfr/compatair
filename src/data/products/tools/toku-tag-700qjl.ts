import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "toku-tag-700qjl",
	"slug": "toku-tag-700qjl",
	"brand": "Toku",
	"model": "TAG-700QJL",
	"mpn": "TAG-700QJL",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Toku TAG-700QJL",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-tag-700qjl-technical-20261116-reviews.svg",
		"alt": "Repères techniques Toku TAG-700QJL, référence TAG-700QJL",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "La TAG-700QJL reçoit un disque de 180 mm à 8 500 tr/min ; la TAG-900QJL utilise un diamètre supérieur et une vitesse différente. Le tableau distingue le raccordement et la puissance de la G-70EF voisine. Les 16,6 L/s restent documentaires, faute de régime de consommation explicite. Le diamètre du disque et la vitesse maximale se vérifient ensemble avant choix d’un accessoire.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 16.6 L/s, convertis en 996 L/min par multiplication par 60.",
			"Référence fabricant : TAG-700QJL.",
			"Vitesse à vide publiée : 8500 tr/min.",
			"Masse publiée : 3,1 kg.",
			"Diamètre intérieur de flexible conseillé : 13 mm."
		],
		"limitations": [
			"Les couples indiqués sont des valeurs indicatives, sensibles à l’assemblage et à l’accessoire.",
			"La pression doit être vérifiée pendant le fonctionnement ; la pression statique du réservoir ne suffit pas.",
			"La pression de service n’atteste pas la pression de mesure de consommation. Le régime ou l’appariement documentaire reste non qualifié ; aucune consommation dimensionnante n’est conservée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"toku-tag-700qjl-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 16.6 L/s, convertis en 996 L/min par multiplication par 60.",
			"evidenceIds": [
				"toku-tag-700qjl-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "8500 tr/min",
			"evidenceIds": [
				"toku-tag-700qjl-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "3,1 kg",
			"evidenceIds": [
				"toku-tag-700qjl-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "13 mm",
			"evidenceIds": [
				"toku-tag-700qjl-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 3/8\"",
			"evidenceIds": [
				"toku-tag-700qjl-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-tag-700qjl-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 45, réf. TAG-700QJL",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 16.6 L/s, convertis en 996 L/min par multiplication par 60."
		},
		{
			"id": "toku-tag-700qjl-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-16-reviews:toku-tag-700qjl:0",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
			"sourceLabel": "Toku, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La TAG-700QJL reçoit un disque de 180 mm à 8 500 tr/min ; la TAG-900QJL utilise un diamètre supérieur et une vitesse différente. Le tableau distingue le raccordement et la puissance de la G-70EF voisine. Les 16,6 L/s restent documentaires, faute de régime de consommation explicite. Le diamètre du disque et la vitesse maximale se vérifient ensemble avant choix d’un accessoire. GET complet SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Pages PDF lues : 45, 106."
		}
	],
	"fieldSources": {
		"mpn": [
			"toku-tag-700qjl-20260926"
		],
		"workingPressureBar": [
			"toku-tag-700qjl-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"toku-tag-700qjl-20260926"
		],
		"recommendedHose": [
			"toku-tag-700qjl-20260926"
		],
		"connectorSize": [
			"toku-tag-700qjl-20260926"
		],
		"airflowBasis": [
			"review:2026-11-16-reviews:toku-tag-700qjl:0"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 996,
		"typical": 996,
		"max": 996
	},
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"connectorSize": "PT 3/8\"",
	"airflowBasis": "unqualified"
};

export default product;
