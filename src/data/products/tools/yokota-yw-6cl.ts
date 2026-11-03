import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-yw-6cl",
	"slug": "yokota-yw-6cl",
	"brand": "Yokota",
	"model": "YW-6CL",
	"mpn": "YW-6CL",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Yokota YW-6CL",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yw-6cl.webp",
		"alt": "Repères techniques Yokota YW-6CL, référence YW-6CL",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YW-6CL. La YW-6CL est la clé à chocs d’angle au carré 3/8 pouce, 145 Nm et 1,6 kg. La table distingue les clés pistolet Twinhammer, notamment MI-16M3/8 à 270 Nm et 1,5 kg. Le renvoi 6 qualifie les 4,2 L/s en charge ; l’appariement à une pression exacte reste à confirmer, sans reprendre automatiquement la consigne 6,3 bar.",
		"verifiedFacts": [
			"Carré : 3/8 pouce.",
			"Mécanisme : Un marteau.",
			"Couple indicatif : 145 Nm.",
			"Vitesse à vide : 6 500 tr/min.",
			"Masse : 1,6 kg.",
			"Consommation explicitement en charge : 4,2 L/s (252 L/min)."
		],
		"limitations": [
			"Régime et pression de mesure ne sont pas complétés par hypothèse. Les données non dimensionnantes restent dans les spécifications.",
			"Catalogue constructeur historique ; configuration livrée et disponibilité actuelles à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "3/8 pouce",
			"evidenceIds": [
				"yokota-yw-6cl-reserved-20261103-1"
			]
		},
		{
			"label": "Mécanisme",
			"value": "Un marteau",
			"evidenceIds": [
				"yokota-yw-6cl-reserved-20261103-1"
			]
		},
		{
			"label": "Couple indicatif",
			"value": "145 Nm",
			"evidenceIds": [
				"yokota-yw-6cl-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6 500 tr/min",
			"evidenceIds": [
				"yokota-yw-6cl-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,6 kg",
			"evidenceIds": [
				"yokota-yw-6cl-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation explicitement en charge",
			"value": "4,2 L/s (252 L/min)",
			"evidenceIds": [
				"yokota-yw-6cl-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yw-6cl-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 38, réf. YW-6CL",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 4.2 L/s, convertis en 252 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yw-6cl-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "yokota-yw-6cl-reserved-20261103-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
			"sourceLabel": "Yokota : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. La YW-6CL est la clé à chocs d’angle au carré 3/8 pouce, 145 Nm et 1,6 kg. La table distingue les clés pistolet Twinhammer, notamment MI-16M3/8 à 270 Nm et 1,5 kg. Le renvoi 6 qualifie les 4,2 L/s en charge ; l’appariement à une pression exacte reste à confirmer, sans reprendre automatiquement la consigne 6,3 bar."
		}
	],
	"fieldSources": {
		"mpn": [
			"yokota-yw-6cl-20260926"
		],
		"workingPressureBar": [
			"yokota-yw-6cl-reserved-20261103-1"
		],
		"recommendedHose": [
			"yokota-yw-6cl-20260926"
		],
		"connectorSize": [
			"yokota-yw-6cl-20260926"
		],
		"demandModel": [
			"yokota-yw-6cl-reserved-20261103-1"
		],
		"demandExplanation": [
			"yokota-yw-6cl-reserved-20261103-1"
		],
		"editorial": [
			"yokota-yw-6cl-reserved-20261103-1"
		],
		"specifications": [
			"yokota-yw-6cl-reserved-20261103-1"
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
