import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rr-1800dd",
	"slug": "red-rooster-rr-1800dd",
	"brand": "Red Rooster",
	"model": "RR-1800DD",
	"mpn": "RR-1800DD",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Red Rooster RR-1800DD",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rr-1800dd.webp",
		"alt": "Repères techniques Red Rooster RR-1800DD, référence RR-1800DD",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=41",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RR-1800DD. La RR-1800DD est la version à entraînement direct 1 800 tr/min et 7,5 Nm. La RR-0800DD donne 800 tr/min et 10,5 Nm, avec le même débit publié 9,8 L/s. Une consommation identique ne rend pas leurs vitesses et capacités de serrage équivalentes ; le régime de mesure du débit demeure non précisé.",
		"verifiedFacts": [
			"Entraînement : Hexagonal 1/4 pouce.",
			"Mécanisme : Entraînement direct.",
			"Couple indicatif : 7,5 Nm.",
			"Vitesse à vide : 1 800 tr/min.",
			"Consommation publiée, régime non précisé : 9,8 L/s."
		],
		"limitations": [
			"Consommation conservée avec son unité et son régime non précisé ; aucune mesure maximale/en charge appariée à la pression n’est déduite de la consigne de service.",
			"Catalogue historique identifié ; référence et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Entraînement",
			"value": "Hexagonal 1/4 pouce",
			"evidenceIds": [
				"red-rooster-rr-1800dd-reserved-20261103-1"
			]
		},
		{
			"label": "Mécanisme",
			"value": "Entraînement direct",
			"evidenceIds": [
				"red-rooster-rr-1800dd-reserved-20261103-1"
			]
		},
		{
			"label": "Couple indicatif",
			"value": "7,5 Nm",
			"evidenceIds": [
				"red-rooster-rr-1800dd-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1 800 tr/min",
			"evidenceIds": [
				"red-rooster-rr-1800dd-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation publiée, régime non précisé",
			"value": "9,8 L/s",
			"evidenceIds": [
				"red-rooster-rr-1800dd-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rr-1800dd-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=41",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 41, réf. RR-1800DD",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 9.8 L/s, convertis en 588 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rr-1800dd-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "red-rooster-rr-1800dd-reserved-20261103-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=41",
			"sourceLabel": "Red Rooster : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. La RR-1800DD est la version à entraînement direct 1 800 tr/min et 7,5 Nm. La RR-0800DD donne 800 tr/min et 10,5 Nm, avec le même débit publié 9,8 L/s. Une consommation identique ne rend pas leurs vitesses et capacités de serrage équivalentes ; le régime de mesure du débit demeure non précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rr-1800dd-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rr-1800dd-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rr-1800dd-20260926"
		],
		"recommendedHose": [
			"red-rooster-rr-1800dd-20260926"
		],
		"connectorSize": [
			"red-rooster-rr-1800dd-20260926"
		],
		"airflowBasis": [
			"red-rooster-rr-1800dd-reserved-20261103-1"
		],
		"editorial": [
			"red-rooster-rr-1800dd-reserved-20261103-1"
		],
		"specifications": [
			"red-rooster-rr-1800dd-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 588,
		"typical": 588,
		"max": 588
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;
