import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rr-24n-1",
	"slug": "red-rooster-rr-24n-1",
	"brand": "Red Rooster",
	"model": "RR-24N 1",
	"mpn": "RR-24N 1",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Red Rooster RR-24N 1",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rr-24n-1-technical-20261116-reviews.svg",
		"alt": "Repères techniques Red Rooster RR-24N 1, référence RR-24N 1",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "La RR-24N 1 utilise un carré 1 pouce, contre 3/4 pouce pour la RR-24N. Le tableau publie 1 900 Nm et 5 500 tr/min, avec trois positions de serrage documentées par la notice du catalogue. Les 16 L/s sont explicitement relevés en charge. La consigne dynamique générale de 6,3 bar reste distinguée d’une attestation du point de mesure de consommation.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation en charge publiée : 16 L/s, convertis en 960 L/min par multiplication par 60.",
			"Référence fabricant : RR-24N 1.",
			"Vitesse à vide publiée : 5500 tr/min.",
			"Masse publiée : 3,7 kg.",
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
				"red-rooster-rr-24n-1-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation en charge publiée : 16 L/s, convertis en 960 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rr-24n-1-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "5500 tr/min",
			"evidenceIds": [
				"red-rooster-rr-24n-1-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "3,7 kg",
			"evidenceIds": [
				"red-rooster-rr-24n-1-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"red-rooster-rr-24n-1-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 3/8\"",
			"evidenceIds": [
				"red-rooster-rr-24n-1-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rr-24n-1-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 38, réf. RR-24N 1",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 16 L/s, convertis en 960 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rr-24n-1-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-16-reviews:red-rooster-rr-24n-1:0",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
			"sourceLabel": "Red Rooster, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La RR-24N 1 utilise un carré 1 pouce, contre 3/4 pouce pour la RR-24N. Le tableau publie 1 900 Nm et 5 500 tr/min, avec trois positions de serrage documentées par la notice du catalogue. Les 16 L/s sont explicitement relevés en charge. La consigne dynamique générale de 6,3 bar reste distinguée d’une attestation du point de mesure de consommation. GET complet SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Pages PDF lues : 38, 106."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rr-24n-1-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rr-24n-1-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rr-24n-1-20260926"
		],
		"recommendedHose": [
			"red-rooster-rr-24n-1-20260926"
		],
		"connectorSize": [
			"red-rooster-rr-24n-1-20260926"
		],
		"airflowBasis": [
			"review:2026-11-16-reviews:red-rooster-rr-24n-1:0"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 960,
		"typical": 960,
		"max": 960
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 3/8\"",
	"airflowBasis": "unqualified"
};

export default product;
