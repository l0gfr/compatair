import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rrg-3617k",
	"slug": "red-rooster-rrg-3617k",
	"brand": "Red Rooster",
	"model": "RRG-3617K",
	"mpn": "RRG-3617K",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Red Rooster RRG-3617K",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rrg-3617k.webp",
		"alt": "Repères techniques Red Rooster RRG-3617K, référence RRG-3617K",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=48",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RRG-3617K : même ponceuse que la RRG-3611 avec deux bras de 6 et 10 × 330 mm. La consommation publiée de 6,7 L/s, soit 402 L/min, n’a pas de régime de mesure précisé ; elle ne fournit pas une demande dimensionnante en charge.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 6.7 L/s, convertis en 402 L/min par multiplication par 60.",
			"Référence fabricant : RRG-3617K.",
			"Vitesse à vide publiée : 20000 tr/min.",
			"Masse publiée : 0,8 kg.",
			"Diamètre intérieur de flexible conseillé : 10 mm."
		],
		"limitations": [
			"Les couples indiqués sont des valeurs indicatives, sensibles à l’assemblage et à l’accessoire.",
			"La pression doit être vérifiée pendant le fonctionnement ; la pression statique du réservoir ne suffit pas.",
			"La relecture du voisin retire toute conclusion de dimensionnement fondée sur une unité normalisée, une pression de service ou un régime non qualifiés."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"red-rooster-rrg-3617k-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 6.7 L/s, convertis en 402 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rrg-3617k-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "20000 tr/min",
			"evidenceIds": [
				"red-rooster-rrg-3617k-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,8 kg",
			"evidenceIds": [
				"red-rooster-rrg-3617k-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"red-rooster-rrg-3617k-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rrg-3617k-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rrg-3617k-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=48",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 48, réf. RRG-3617K",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 6.7 L/s, convertis en 402 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rrg-3617k-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "reserved-neighbor-20261025-red-rooster-rrg-3617k",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=48",
			"sourceLabel": "Relecture du voisin pendant la correction des pages réservées, 25 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Lecture ciblée, SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Les données de régime, d’unité ou de pression non qualifiées ne sont pas promues en point de dimensionnement."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rrg-3617k-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rrg-3617k-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rrg-3617k-20260926"
		],
		"recommendedHose": [
			"red-rooster-rrg-3617k-20260926"
		],
		"connectorSize": [
			"red-rooster-rrg-3617k-20260926"
		],
		"editorial": [
			"reserved-neighbor-20261025-red-rooster-rrg-3617k"
		],
		"airflowBasis": [
			"reserved-neighbor-20261025-red-rooster-rrg-3617k"
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
