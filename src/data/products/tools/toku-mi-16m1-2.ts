import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "toku-mi-16m1-2",
	"slug": "toku-mi-16m1-2",
	"brand": "Toku",
	"model": "MI-16M1/2",
	"mpn": "MI-16M1/2",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Toku MI-16M1/2",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-mi-16m1-2.webp",
		"alt": "Repères techniques Toku MI-16M1/2, référence MI-16M1/2",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Toku MI-16M1/2. La MI-16M1/2 possède le carré 1/2 pouce et donne 330 Nm ; la MI-16M3/8 donne 270 Nm avec le carré 3/8 pouce, à la même vitesse et consommation. Le renvoi 6 indique une consommation mesurée en charge. La consigne dynamique 6,3 bar ne suffit pas à prouver sa pression de mesure exacte.",
		"verifiedFacts": [
			"Carré : 1/2 pouce.",
			"Mécanisme : Twinhammer.",
			"Couple indicatif : 330 Nm.",
			"Vitesse à vide : 6 200 tr/min.",
			"Masse : 1,5 kg.",
			"Consommation explicitement en charge : 9,3 L/s (558 L/min)."
		],
		"limitations": [
			"Régime et pression de mesure ne sont pas complétés par hypothèse. Les données non dimensionnantes restent dans les spécifications.",
			"Catalogue constructeur historique ; configuration livrée et disponibilité actuelles à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "1/2 pouce",
			"evidenceIds": [
				"toku-mi-16m1-2-reserved-20261103-1"
			]
		},
		{
			"label": "Mécanisme",
			"value": "Twinhammer",
			"evidenceIds": [
				"toku-mi-16m1-2-reserved-20261103-1"
			]
		},
		{
			"label": "Couple indicatif",
			"value": "330 Nm",
			"evidenceIds": [
				"toku-mi-16m1-2-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6 200 tr/min",
			"evidenceIds": [
				"toku-mi-16m1-2-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,5 kg",
			"evidenceIds": [
				"toku-mi-16m1-2-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation explicitement en charge",
			"value": "9,3 L/s (558 L/min)",
			"evidenceIds": [
				"toku-mi-16m1-2-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-mi-16m1-2-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 38, réf. MI-16M1/2",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 9.3 L/s, convertis en 558 L/min par multiplication par 60."
		},
		{
			"id": "toku-mi-16m1-2-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "toku-mi-16m1-2-reserved-20261103-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
			"sourceLabel": "Toku : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. La MI-16M1/2 possède le carré 1/2 pouce et donne 330 Nm ; la MI-16M3/8 donne 270 Nm avec le carré 3/8 pouce, à la même vitesse et consommation. Le renvoi 6 indique une consommation mesurée en charge. La consigne dynamique 6,3 bar ne suffit pas à prouver sa pression de mesure exacte."
		}
	],
	"fieldSources": {
		"mpn": [
			"toku-mi-16m1-2-20260926"
		],
		"workingPressureBar": [
			"toku-mi-16m1-2-reserved-20261103-1"
		],
		"recommendedHose": [
			"toku-mi-16m1-2-20260926"
		],
		"connectorSize": [
			"toku-mi-16m1-2-20260926"
		],
		"demandModel": [
			"toku-mi-16m1-2-reserved-20261103-1"
		],
		"demandExplanation": [
			"toku-mi-16m1-2-reserved-20261103-1"
		],
		"editorial": [
			"toku-mi-16m1-2-reserved-20261103-1"
		],
		"specifications": [
			"toku-mi-16m1-2-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\"",
	"demandExplanation": "Consommations et régimes conservés dans les spécifications ; pression de mesure exacte non appariée par le document."
};

export default product;
