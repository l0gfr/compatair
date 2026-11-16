import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rri-4596-1",
	"slug": "red-rooster-rri-4596-1",
	"brand": "Red Rooster",
	"model": "RRI-4596/1",
	"mpn": "RRI-4596/1",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Red Rooster RRI-4596/1",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-4596-1-technical-20261116-reviews.svg",
		"alt": "Repères techniques Red Rooster RRI-4596/1, référence RRI-4596/1",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "Le RRI-4596/1 possède un emmanchement de 22 × 82 mm et une course de 114 mm. Le RRI-4596R remplace l’emmanchement par du 25 × 75 mm, avec les mêmes 1 590 coups/min et 51,6 J déclarés ; le 4612K VL passe à 170 mm de course. Le régime des 15 L/s publiés n’est pas indiqué, ce qui maintient un résultat non conclusif pour le compresseur.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 15 L/s, convertis en 900 L/min par multiplication par 60.",
			"Référence fabricant : RRI-4596/1.",
			"Masse publiée : 10,7 kg.",
			"Diamètre intérieur de flexible conseillé : 13 mm.",
			"Raccord pneumatique : PT 3/4\"."
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
				"red-rooster-rri-4596-1-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 15 L/s, convertis en 900 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rri-4596-1-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "10,7 kg",
			"evidenceIds": [
				"red-rooster-rri-4596-1-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "13 mm",
			"evidenceIds": [
				"red-rooster-rri-4596-1-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 3/4\"",
			"evidenceIds": [
				"red-rooster-rri-4596-1-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-4596-1-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=50",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 50, réf. RRI-4596/1",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 15 L/s, convertis en 900 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-4596-1-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-16-reviews:red-rooster-rri-4596-1:0",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
			"sourceLabel": "Red Rooster, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le RRI-4596/1 possède un emmanchement de 22 × 82 mm et une course de 114 mm. Le RRI-4596R remplace l’emmanchement par du 25 × 75 mm, avec les mêmes 1 590 coups/min et 51,6 J déclarés ; le 4612K VL passe à 170 mm de course. Le régime des 15 L/s publiés n’est pas indiqué, ce qui maintient un résultat non conclusif pour le compresseur. GET complet SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Pages PDF lues : 50, 106."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rri-4596-1-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-4596-1-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-4596-1-20260926"
		],
		"recommendedHose": [
			"red-rooster-rri-4596-1-20260926"
		],
		"connectorSize": [
			"red-rooster-rri-4596-1-20260926"
		],
		"airflowBasis": [
			"review:2026-11-16-reviews:red-rooster-rri-4596-1:0"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 900,
		"typical": 900,
		"max": 900
	},
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"connectorSize": "PT 3/4\"",
	"airflowBasis": "unqualified"
};

export default product;
