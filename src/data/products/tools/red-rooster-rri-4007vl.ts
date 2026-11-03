import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rri-4007vl",
	"slug": "red-rooster-rri-4007vl",
	"brand": "Red Rooster",
	"model": "RRI-4007VL",
	"mpn": "RRI-4007VL",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Red Rooster RRI-4007VL",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-4007vl.webp",
		"alt": "Repères techniques Red Rooster RRI-4007VL, référence RRI-4007VL",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=55",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRI-4007VL. La RRI-4007VL est le dérouilleur à vibrations réduites de 3,4 kg, 3 000 coups/min et 28 aiguilles standard de 3 mm. La RRI-4006VL pèse 2,7 kg et donne 2 400 coups/min avec 19 aiguilles de 3 mm. Les kits de conversion en marteau restent des accessoires distincts. Le régime des 2,6 L/s n’est pas précisé.",
		"verifiedFacts": [
			"Cadence : 3 000 coups/min.",
			"Piston : 34,4 mm.",
			"Course : 30,5 mm.",
			"Masse : 3,4 kg.",
			"Aiguilles standard : 28 de diamètre 3 mm.",
			"Consommation publiée, régime non précisé : 2,6 L/s."
		],
		"limitations": [
			"Consommation conservée avec son unité et son régime non précisé ; aucune mesure maximale/en charge appariée à la pression n’est déduite de la consigne de service.",
			"Catalogue historique identifié ; référence et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "3 000 coups/min",
			"evidenceIds": [
				"red-rooster-rri-4007vl-reserved-20261103-1"
			]
		},
		{
			"label": "Piston",
			"value": "34,4 mm",
			"evidenceIds": [
				"red-rooster-rri-4007vl-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "30,5 mm",
			"evidenceIds": [
				"red-rooster-rri-4007vl-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "3,4 kg",
			"evidenceIds": [
				"red-rooster-rri-4007vl-reserved-20261103-1"
			]
		},
		{
			"label": "Aiguilles standard",
			"value": "28 de diamètre 3 mm",
			"evidenceIds": [
				"red-rooster-rri-4007vl-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation publiée, régime non précisé",
			"value": "2,6 L/s",
			"evidenceIds": [
				"red-rooster-rri-4007vl-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-4007vl-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=55",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 55, réf. RRI-4007VL",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 2.6 L/s, convertis en 156 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-4007vl-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "red-rooster-rri-4007vl-reserved-20261103-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=55",
			"sourceLabel": "Red Rooster : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. La RRI-4007VL est le dérouilleur à vibrations réduites de 3,4 kg, 3 000 coups/min et 28 aiguilles standard de 3 mm. La RRI-4006VL pèse 2,7 kg et donne 2 400 coups/min avec 19 aiguilles de 3 mm. Les kits de conversion en marteau restent des accessoires distincts. Le régime des 2,6 L/s n’est pas précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rri-4007vl-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-4007vl-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-4007vl-20260926"
		],
		"recommendedHose": [
			"red-rooster-rri-4007vl-20260926"
		],
		"connectorSize": [
			"red-rooster-rri-4007vl-20260926"
		],
		"airflowBasis": [
			"red-rooster-rri-4007vl-reserved-20261103-1"
		],
		"editorial": [
			"red-rooster-rri-4007vl-reserved-20261103-1"
		],
		"specifications": [
			"red-rooster-rri-4007vl-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 156,
		"typical": 156,
		"max": 156
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;
