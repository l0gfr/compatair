import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rri-5125-2sv",
	"slug": "red-rooster-rri-5125-2sv",
	"brand": "Red Rooster",
	"model": "RRI-5125-2SV",
	"mpn": "RRI-5125-2SV",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Red Rooster RRI-5125-2SV",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-5125-2sv.webp",
		"alt": "Repères techniques Red Rooster RRI-5125-2SV, référence RRI-5125-2SV",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=47",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRI-5125-2SV. La RRI-5125-2SV est la version 125 mm à orbite 2,5 mm, masse 0,7 kg ; la 2NV est donnée pour 0,6 kg et la 5SV a une orbite 5 mm. Le suffixe et l’aspiration se vérifient sur la configuration livrée. La table ne précise pas le régime des 4,9 L/s : le débit reste hors dimensionnement conclusif.",
		"verifiedFacts": [
			"Plateau : 125 mm.",
			"Orbite : 2,5 mm.",
			"Vitesse à vide : 12 000 tr/min.",
			"Puissance : 0,3 kW.",
			"Filetage : 5/16 pouce UNF.",
			"Masse : 0,7 kg.",
			"Consommation publiée, régime non précisé : 4,9 L/s.",
			"Aspiration : Locale avec sac à poussière, SV."
		],
		"limitations": [
			"Consommation conservée avec son unité et son régime non précisé ; aucune mesure maximale/en charge appariée à la pression n’est déduite de la consigne de service.",
			"Catalogue historique identifié ; référence et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Plateau",
			"value": "125 mm",
			"evidenceIds": [
				"red-rooster-rri-5125-2sv-reserved-20261103-1"
			]
		},
		{
			"label": "Orbite",
			"value": "2,5 mm",
			"evidenceIds": [
				"red-rooster-rri-5125-2sv-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"red-rooster-rri-5125-2sv-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "0,3 kW",
			"evidenceIds": [
				"red-rooster-rri-5125-2sv-reserved-20261103-1"
			]
		},
		{
			"label": "Filetage",
			"value": "5/16 pouce UNF",
			"evidenceIds": [
				"red-rooster-rri-5125-2sv-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,7 kg",
			"evidenceIds": [
				"red-rooster-rri-5125-2sv-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation publiée, régime non précisé",
			"value": "4,9 L/s",
			"evidenceIds": [
				"red-rooster-rri-5125-2sv-reserved-20261103-1"
			]
		},
		{
			"label": "Aspiration",
			"value": "Locale avec sac à poussière, SV",
			"evidenceIds": [
				"red-rooster-rri-5125-2sv-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-5125-2sv-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=47",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 47, réf. RRI-5125-2SV",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 4.9 L/s, convertis en 294 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-5125-2sv-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "red-rooster-rri-5125-2sv-reserved-20261103-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=47",
			"sourceLabel": "Red Rooster : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. La RRI-5125-2SV est la version 125 mm à orbite 2,5 mm, masse 0,7 kg ; la 2NV est donnée pour 0,6 kg et la 5SV a une orbite 5 mm. Le suffixe et l’aspiration se vérifient sur la configuration livrée. La table ne précise pas le régime des 4,9 L/s : le débit reste hors dimensionnement conclusif."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rri-5125-2sv-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-5125-2sv-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-5125-2sv-20260926"
		],
		"recommendedHose": [
			"red-rooster-rri-5125-2sv-20260926"
		],
		"connectorSize": [
			"red-rooster-rri-5125-2sv-20260926"
		],
		"airflowBasis": [
			"red-rooster-rri-5125-2sv-reserved-20261103-1"
		],
		"editorial": [
			"red-rooster-rri-5125-2sv-reserved-20261103-1"
		],
		"specifications": [
			"red-rooster-rri-5125-2sv-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 294,
		"typical": 294,
		"max": 294
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;
