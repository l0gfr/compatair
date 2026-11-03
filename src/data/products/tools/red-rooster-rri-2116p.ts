import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rri-2116p",
	"slug": "red-rooster-rri-2116p",
	"brand": "Red Rooster",
	"model": "RRI-2116P",
	"mpn": "RRI-2116P",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Red Rooster RRI-2116P",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-2116p.webp",
		"alt": "Repères techniques Red Rooster RRI-2116P, référence RRI-2116P",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRI-2116P. La RRI-2116P est la perceuse de capacité acier 16 mm, 0,50 kW et 2,4 kg. La RRI-2006 est donnée pour 6,5 mm, 5 000 tr/min, 0,21 kW et 0,7 kg. Le mandrin et la capacité différencient les usages ; le débit 11 L/s reste sans régime explicite dans la table.",
		"verifiedFacts": [
			"Capacité acier : 16 mm.",
			"Filetage mandrin : 1/2 pouce × 20 UNF.",
			"Vitesse à vide publiée : 950 tr/min, renvoi 2 du catalogue.",
			"Puissance : 0,50 kW.",
			"Masse : 2,4 kg.",
			"Consommation publiée, régime non précisé : 11 L/s."
		],
		"limitations": [
			"Consommation conservée avec son unité et son régime non précisé ; aucune mesure maximale/en charge appariée à la pression n’est déduite de la consigne de service.",
			"Catalogue historique identifié ; référence et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Capacité acier",
			"value": "16 mm",
			"evidenceIds": [
				"red-rooster-rri-2116p-reserved-20261103-1"
			]
		},
		{
			"label": "Filetage mandrin",
			"value": "1/2 pouce × 20 UNF",
			"evidenceIds": [
				"red-rooster-rri-2116p-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "950 tr/min, renvoi 2 du catalogue",
			"evidenceIds": [
				"red-rooster-rri-2116p-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "0,50 kW",
			"evidenceIds": [
				"red-rooster-rri-2116p-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "2,4 kg",
			"evidenceIds": [
				"red-rooster-rri-2116p-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation publiée, régime non précisé",
			"value": "11 L/s",
			"evidenceIds": [
				"red-rooster-rri-2116p-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-2116p-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 42, réf. RRI-2116P",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 11 L/s, convertis en 660 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-2116p-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "red-rooster-rri-2116p-reserved-20261103-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
			"sourceLabel": "Red Rooster : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. La RRI-2116P est la perceuse de capacité acier 16 mm, 0,50 kW et 2,4 kg. La RRI-2006 est donnée pour 6,5 mm, 5 000 tr/min, 0,21 kW et 0,7 kg. Le mandrin et la capacité différencient les usages ; le débit 11 L/s reste sans régime explicite dans la table."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rri-2116p-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-2116p-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-2116p-20260926"
		],
		"recommendedHose": [
			"red-rooster-rri-2116p-20260926"
		],
		"connectorSize": [
			"red-rooster-rri-2116p-20260926"
		],
		"airflowBasis": [
			"red-rooster-rri-2116p-reserved-20261103-1"
		],
		"editorial": [
			"red-rooster-rri-2116p-reserved-20261103-1"
		],
		"specifications": [
			"red-rooster-rri-2116p-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 660,
		"typical": 660,
		"max": 660
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;
