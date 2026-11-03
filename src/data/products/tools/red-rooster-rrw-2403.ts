import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rrw-2403",
	"slug": "red-rooster-rrw-2403",
	"brand": "Red Rooster",
	"model": "RRW-2403",
	"mpn": "RRW-2403",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Red Rooster RRW-2403",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rrw-2403.webp",
		"alt": "Repères techniques Red Rooster RRW-2403, référence RRW-2403",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=40",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRW-2403. La RRW-2403 donne 68 Nm à 150 tr/min et pèse 1,2 kg ; la RRW-2203 donne 32 Nm à 200 tr/min et 0,5 kg. Le couple et l’encombrement orientent le choix du cliquet. Les 6 L/s restent une consommation de régime non précisé, sans conversion en demande maximale par défaut.",
		"verifiedFacts": [
			"Carré : 3/8 pouce.",
			"Couple indicatif : 68 Nm.",
			"Vitesse : 150 tr/min.",
			"Masse : 1,2 kg.",
			"Consommation publiée, régime non précisé : 6 L/s."
		],
		"limitations": [
			"Consommation conservée avec son unité et son régime non précisé ; aucune mesure maximale/en charge appariée à la pression n’est déduite de la consigne de service.",
			"Catalogue historique identifié ; référence et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "3/8 pouce",
			"evidenceIds": [
				"red-rooster-rrw-2403-reserved-20261103-1"
			]
		},
		{
			"label": "Couple indicatif",
			"value": "68 Nm",
			"evidenceIds": [
				"red-rooster-rrw-2403-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse",
			"value": "150 tr/min",
			"evidenceIds": [
				"red-rooster-rrw-2403-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,2 kg",
			"evidenceIds": [
				"red-rooster-rrw-2403-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation publiée, régime non précisé",
			"value": "6 L/s",
			"evidenceIds": [
				"red-rooster-rrw-2403-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rrw-2403-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=40",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 40, réf. RRW-2403",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 6 L/s, convertis en 360 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rrw-2403-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "red-rooster-rrw-2403-reserved-20261103-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=40",
			"sourceLabel": "Red Rooster : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. La RRW-2403 donne 68 Nm à 150 tr/min et pèse 1,2 kg ; la RRW-2203 donne 32 Nm à 200 tr/min et 0,5 kg. Le couple et l’encombrement orientent le choix du cliquet. Les 6 L/s restent une consommation de régime non précisé, sans conversion en demande maximale par défaut."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rrw-2403-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rrw-2403-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rrw-2403-20260926"
		],
		"recommendedHose": [
			"red-rooster-rrw-2403-20260926"
		],
		"connectorSize": [
			"red-rooster-rrw-2403-20260926"
		],
		"airflowBasis": [
			"red-rooster-rrw-2403-reserved-20261103-1"
		],
		"editorial": [
			"red-rooster-rrw-2403-reserved-20261103-1"
		],
		"specifications": [
			"red-rooster-rrw-2403-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 360,
		"typical": 360,
		"max": 360
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;
