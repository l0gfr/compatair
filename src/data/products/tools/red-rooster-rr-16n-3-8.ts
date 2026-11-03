import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rr-16n-3-8",
	"slug": "red-rooster-rr-16n-3-8",
	"brand": "Red Rooster",
	"model": "RR-16N 3/8",
	"mpn": "RR-16N 3/8",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Red Rooster RR-16N 3/8",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rr-16n-3-8.svg",
		"alt": "Repères techniques Red Rooster RR-16N 3/8, référence RR-16N 3/8",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RR-16N 3/8. La RR-16N 3/8 donne 340 Nm et 1,3 kg ; la RR-16N 1/2 donne 480 Nm et 1,2 kg, avec le même débit. Le renvoi 6 du catalogue indique explicitement une consommation mesurée en charge. La consigne de pression dynamique 6,3 bar reste distincte de la pression de mesure du débit ; cet appariement précis reste à confirmer.",
		"verifiedFacts": [
			"Carré : 3/8 pouce.",
			"Mécanisme : Twinhammer.",
			"Couple indicatif : 340 Nm.",
			"Vitesse à vide : 11 000 tr/min.",
			"Consommation mesurée en charge : 8,7 L/s (522 L/min), renvoi 6 p.38."
		],
		"limitations": [
			"Consommation en charge explicitement documentée ; pression exacte de cette mesure non établie. La consigne de service seule ne la prouve pas."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "3/8 pouce",
			"evidenceIds": [
				"red-rooster-rr-16n-3-8-reserved-20261103-1"
			]
		},
		{
			"label": "Mécanisme",
			"value": "Twinhammer",
			"evidenceIds": [
				"red-rooster-rr-16n-3-8-reserved-20261103-1"
			]
		},
		{
			"label": "Couple indicatif",
			"value": "340 Nm",
			"evidenceIds": [
				"red-rooster-rr-16n-3-8-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "11 000 tr/min",
			"evidenceIds": [
				"red-rooster-rr-16n-3-8-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation mesurée en charge",
			"value": "8,7 L/s (522 L/min), renvoi 6 p.38",
			"evidenceIds": [
				"red-rooster-rr-16n-3-8-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rr-16n-3-8-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 38, réf. RR-16N 3/8",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 8.7 L/s, convertis en 522 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rr-16n-3-8-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "red-rooster-rr-16n-3-8-reserved-20261103-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
			"sourceLabel": "Red Rooster : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP 200 SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. La RR-16N 3/8 donne 340 Nm et 1,3 kg ; la RR-16N 1/2 donne 480 Nm et 1,2 kg, avec le même débit. Le renvoi 6 du catalogue indique explicitement une consommation mesurée en charge. La consigne de pression dynamique 6,3 bar reste distincte de la pression de mesure du débit ; cet appariement précis reste à confirmer."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rr-16n-3-8-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rr-16n-3-8-reserved-20261103-1"
		],
		"recommendedHose": [
			"red-rooster-rr-16n-3-8-20260926"
		],
		"connectorSize": [
			"red-rooster-rr-16n-3-8-20260926"
		],
		"editorial": [
			"red-rooster-rr-16n-3-8-reserved-20261103-1"
		],
		"specifications": [
			"red-rooster-rr-16n-3-8-reserved-20261103-1"
		],
		"demandModel": [
			"red-rooster-rr-16n-3-8-reserved-20261103-1"
		],
		"demandExplanation": [
			"red-rooster-rr-16n-3-8-reserved-20261103-1"
		],
		"image": [
			"red-rooster-rr-16n-3-8-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\"",
	"demandExplanation": "Consommation en charge connue, pression de mesure non explicitement appariée dans la source."
};

export default product;
