import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rri-130t",
	"slug": "red-rooster-rri-130t",
	"brand": "Red Rooster",
	"model": "RRI-130T",
	"mpn": "RRI-130T",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Red Rooster RRI-130T",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-130t.webp",
		"alt": "Repères techniques Red Rooster RRI-130T, référence RRI-130T",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=21",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRI-130T. La RRI-130T donne 123–148 Nm, 2,3 kg et un carré 1/2 pouce ; la RRI-150T passe à 165–210 Nm, 3,1 kg et 3/4 pouce, avec le même débit publié. La pression de 0,63 MPa citée pour les mesures de couple ne qualifie pas le régime du débit. Les 11,6 L/s restent documentaires.",
		"verifiedFacts": [
			"Carré : 1/2 pouce.",
			"Couple indicatif : 123–148 Nm.",
			"Vitesse à vide : 3 600 tr/min.",
			"Masse : 2,3 kg.",
			"Consommation publiée, régime non précisé : 11,6 L/s."
		],
		"limitations": [
			"Consommation conservée avec son unité et son régime non précisé ; aucune mesure maximale/en charge appariée à la pression n’est déduite de la consigne de service.",
			"Catalogue historique identifié ; référence et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "1/2 pouce",
			"evidenceIds": [
				"red-rooster-rri-130t-reserved-20261103-1"
			]
		},
		{
			"label": "Couple indicatif",
			"value": "123–148 Nm",
			"evidenceIds": [
				"red-rooster-rri-130t-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3 600 tr/min",
			"evidenceIds": [
				"red-rooster-rri-130t-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "2,3 kg",
			"evidenceIds": [
				"red-rooster-rri-130t-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation publiée, régime non précisé",
			"value": "11,6 L/s",
			"evidenceIds": [
				"red-rooster-rri-130t-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-130t-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=21",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 21, réf. RRI-130T",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 11.6 L/s, convertis en 696 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-130t-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "red-rooster-rri-130t-reserved-20261103-1",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=21",
			"sourceLabel": "Red Rooster : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 6b7dca4923bfef1dbe2c7f6691e91e07f92fec5c1fa3b8d56f211ecbdb5e4845. La RRI-130T donne 123–148 Nm, 2,3 kg et un carré 1/2 pouce ; la RRI-150T passe à 165–210 Nm, 3,1 kg et 3/4 pouce, avec le même débit publié. La pression de 0,63 MPa citée pour les mesures de couple ne qualifie pas le régime du débit. Les 11,6 L/s restent documentaires."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rri-130t-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-130t-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-130t-20260926"
		],
		"recommendedHose": [
			"red-rooster-rri-130t-20260926"
		],
		"airflowBasis": [
			"red-rooster-rri-130t-reserved-20261103-1"
		],
		"editorial": [
			"red-rooster-rri-130t-reserved-20261103-1"
		],
		"specifications": [
			"red-rooster-rri-130t-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 696,
		"typical": 696,
		"max": 696
	},
	"recommendedHose": {
		"innerDiameterMm": 11
	},
	"airflowBasis": "unqualified"
};

export default product;
