import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rri-4007lr4-lite",
	"slug": "red-rooster-rri-4007lr4-lite",
	"brand": "Red Rooster",
	"model": "RRI-4007LR4-LITE",
	"mpn": "RRI-4007LR4-LITE",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Red Rooster RRI-4007LR4-LITE",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-4007lr4-lite.webp",
		"alt": "Repères techniques Red Rooster RRI-4007LR4-LITE, référence RRI-4007LR4-LITE",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=56",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRI-4007LR4-LITE. La RRI-4007LR4-LITE mesure 122 cm et pèse 3,7 kg ; les LR5 et LR6 pèsent 6,3 et 6,9 kg. Elles partagent la course 39 mm, 2 200 coups/min et 15,55 J. Les 2,1 L/s ne sont ni un volume par frappe ni une mesure explicitement en charge.",
		"verifiedFacts": [
			"Longueur : 122 cm.",
			"Emmanchement : 15,88 mm.",
			"Piston : 28,6 mm.",
			"Course : 39 mm.",
			"Cadence : 2 200 coups/min.",
			"Énergie par coup : 15,55 J.",
			"Masse : 3,7 kg.",
			"Consommation publiée, régime non précisé : 2,1 L/s."
		],
		"limitations": [
			"Consommation conservée avec son unité et son régime non précisé ; aucune mesure maximale/en charge appariée à la pression n’est déduite de la consigne de service.",
			"Catalogue historique identifié ; référence et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Longueur",
			"value": "122 cm",
			"evidenceIds": [
				"red-rooster-rri-4007lr4-lite-reserved-20261103-1"
			]
		},
		{
			"label": "Emmanchement",
			"value": "15,88 mm",
			"evidenceIds": [
				"red-rooster-rri-4007lr4-lite-reserved-20261103-1"
			]
		},
		{
			"label": "Piston",
			"value": "28,6 mm",
			"evidenceIds": [
				"red-rooster-rri-4007lr4-lite-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "39 mm",
			"evidenceIds": [
				"red-rooster-rri-4007lr4-lite-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "2 200 coups/min",
			"evidenceIds": [
				"red-rooster-rri-4007lr4-lite-reserved-20261103-1"
			]
		},
		{
			"label": "Énergie par coup",
			"value": "15,55 J",
			"evidenceIds": [
				"red-rooster-rri-4007lr4-lite-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "3,7 kg",
			"evidenceIds": [
				"red-rooster-rri-4007lr4-lite-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation publiée, régime non précisé",
			"value": "2,1 L/s",
			"evidenceIds": [
				"red-rooster-rri-4007lr4-lite-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-4007lr4-lite-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=56",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 56, réf. RRI-4007LR4-LITE",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 2.1 L/s, convertis en 126 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-4007lr4-lite-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "red-rooster-rri-4007lr4-lite-reserved-20261103-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=56",
			"sourceLabel": "Red Rooster : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. La RRI-4007LR4-LITE mesure 122 cm et pèse 3,7 kg ; les LR5 et LR6 pèsent 6,3 et 6,9 kg. Elles partagent la course 39 mm, 2 200 coups/min et 15,55 J. Les 2,1 L/s ne sont ni un volume par frappe ni une mesure explicitement en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rri-4007lr4-lite-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-4007lr4-lite-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-4007lr4-lite-20260926"
		],
		"recommendedHose": [
			"red-rooster-rri-4007lr4-lite-20260926"
		],
		"connectorSize": [
			"red-rooster-rri-4007lr4-lite-20260926"
		],
		"airflowBasis": [
			"red-rooster-rri-4007lr4-lite-reserved-20261103-1"
		],
		"editorial": [
			"red-rooster-rri-4007lr4-lite-reserved-20261103-1"
		],
		"specifications": [
			"red-rooster-rri-4007lr4-lite-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 126,
		"typical": 126,
		"max": 126
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;
