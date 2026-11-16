import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "toku-mi-17mg",
	"slug": "toku-mi-17mg",
	"brand": "Toku",
	"model": "MI-17MG",
	"mpn": "MI-17MG",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Toku MI-17MG",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-mi-17mg-technical-20261116-reviews.svg",
		"alt": "Repères techniques Toku MI-17MG, référence MI-17MG",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "La MI-17MG utilise un carré 1/2 pouce avec jonc d’arrêt, un mécanisme Twinhammer et quatre réglages dans les deux sens. Elle publie 650 Nm à 5 500 tr/min, contre 815 Nm et 8 800 tr/min pour la MI-17C. Les 8,8 L/s sont explicitement mesurés en charge ; la consigne dynamique de 6,3 bar est conservée séparément tant que son appariement documentaire à la mesure n’est pas établi.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation en charge publiée : 8.8 L/s, convertis en 528 L/min par multiplication par 60.",
			"Référence fabricant : MI-17MG.",
			"Vitesse à vide publiée : 5500 tr/min.",
			"Masse publiée : 2,4 kg.",
			"Diamètre intérieur de flexible conseillé : 10 mm."
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
				"toku-mi-17mg-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation en charge publiée : 8.8 L/s, convertis en 528 L/min par multiplication par 60.",
			"evidenceIds": [
				"toku-mi-17mg-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "5500 tr/min",
			"evidenceIds": [
				"toku-mi-17mg-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,4 kg",
			"evidenceIds": [
				"toku-mi-17mg-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"toku-mi-17mg-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"toku-mi-17mg-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-mi-17mg-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 38, réf. MI-17MG",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 8.8 L/s, convertis en 528 L/min par multiplication par 60."
		},
		{
			"id": "toku-mi-17mg-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-16-reviews:toku-mi-17mg:0",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
			"sourceLabel": "Toku, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La MI-17MG utilise un carré 1/2 pouce avec jonc d’arrêt, un mécanisme Twinhammer et quatre réglages dans les deux sens. Elle publie 650 Nm à 5 500 tr/min, contre 815 Nm et 8 800 tr/min pour la MI-17C. Les 8,8 L/s sont explicitement mesurés en charge ; la consigne dynamique de 6,3 bar est conservée séparément tant que son appariement documentaire à la mesure n’est pas établi. GET complet SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Pages PDF lues : 38, 106."
		}
	],
	"fieldSources": {
		"mpn": [
			"toku-mi-17mg-20260926"
		],
		"workingPressureBar": [
			"toku-mi-17mg-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"toku-mi-17mg-20260926"
		],
		"recommendedHose": [
			"toku-mi-17mg-20260926"
		],
		"connectorSize": [
			"toku-mi-17mg-20260926"
		],
		"airflowBasis": [
			"review:2026-11-16-reviews:toku-mi-17mg:0"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 528,
		"typical": 528,
		"max": 528
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;
