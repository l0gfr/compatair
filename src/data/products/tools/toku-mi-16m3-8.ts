import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "toku-mi-16m3-8",
	"slug": "toku-mi-16m3-8",
	"brand": "Toku",
	"model": "MI-16M3/8",
	"mpn": "MI-16M3/8",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Toku MI-16M3/8",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-mi-16m3-8-20261106.svg",
		"alt": "Repères techniques Toku MI-16M3/8, référence MI-16M3/8",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Toku MI-16M3/8, référence MI-16M3/8. Le tableau fabricant publie 558 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 6200 tr/min. Masse publiée : 1,5 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation en charge publiée : 9.3 L/s, convertis en 558 L/min par multiplication par 60.",
			"Référence fabricant : MI-16M3/8.",
			"Vitesse à vide publiée : 6200 tr/min.",
			"Masse publiée : 1,5 kg.",
			"Diamètre intérieur de flexible conseillé : 6,5 mm."
		],
		"limitations": [
			"Les couples indiqués sont des valeurs indicatives, sensibles à l’assemblage et à l’accessoire.",
			"La pression doit être vérifiée pendant le fonctionnement ; la pression statique du réservoir ne suffit pas.",
			"Le régime de consommation publié reste documentaire : la pression de service ne prouve pas sa pression de mesure. Compatibilité indéterminée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"toku-mi-16m3-8-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation en charge publiée : 9.3 L/s, convertis en 558 L/min par multiplication par 60.",
			"evidenceIds": [
				"toku-mi-16m3-8-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "6200 tr/min",
			"evidenceIds": [
				"toku-mi-16m3-8-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,5 kg",
			"evidenceIds": [
				"toku-mi-16m3-8-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"toku-mi-16m3-8-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"toku-mi-16m3-8-20260926"
			]
		},
		{
			"label": "Consommation publiée, hors dimensionnement",
			"value": "558 L/min ; Le régime de consommation publié reste documentaire : la pression de service ne prouve pas sa pression de mesure. Compatibilité indéterminée.",
			"evidenceIds": [
				"review:2026-11-06-followup:toku-mi-16m3-8:1",
				"review:2026-11-06-followup:toku-mi-16m3-8:2"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-mi-16m3-8-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 38, réf. MI-16M3/8",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 9.3 L/s, convertis en 558 L/min par multiplication par 60."
		},
		{
			"id": "toku-mi-16m3-8-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-06-followup:toku-mi-16m3-8:1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
			"sourceLabel": "Toku, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P38 :MI16M3/8,carré3/8,6200rpm/270Nm/9,3Ls/1,5kg,distinctMI12à9500rpm. Mesure encharge annoncée pour leschocs mais pression6,3bar uniquement prescrite globalement;558Lmin non dimensionnants avant confirmation. SHA-256 du document complet : f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e."
		},
		{
			"id": "review:2026-11-06-followup:toku-mi-16m3-8:2",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Toku, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P38 :MI16M3/8,carré3/8,6200rpm/270Nm/9,3Ls/1,5kg,distinctMI12à9500rpm. Mesure encharge annoncée pour leschocs mais pression6,3bar uniquement prescrite globalement;558Lmin non dimensionnants avant confirmation. SHA-256 du document complet : f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e."
		}
	],
	"fieldSources": {
		"mpn": [
			"toku-mi-16m3-8-20260926"
		],
		"workingPressureBar": [
			"toku-mi-16m3-8-20260926-workingpressurebar-1"
		],
		"recommendedHose": [
			"toku-mi-16m3-8-20260926"
		],
		"connectorSize": [
			"toku-mi-16m3-8-20260926"
		],
		"demandExplanation": [
			"review:2026-11-06-followup:toku-mi-16m3-8:1",
			"review:2026-11-06-followup:toku-mi-16m3-8:2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\"",
	"demandExplanation": "Le régime de consommation publié reste documentaire : la pression de service ne prouve pas sa pression de mesure. Compatibilité indéterminée."
};

export default product;
