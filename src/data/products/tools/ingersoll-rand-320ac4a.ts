import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ingersoll-rand-320ac4a",
	"slug": "ingersoll-rand-320ac4a",
	"brand": "Ingersoll Rand",
	"model": "320AC4A",
	"mpn": "320AC4A",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Ingersoll Rand 320AC4A",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/ingersoll-rand-320ac4a.webp",
		"alt": "Repères techniques Ingersoll Rand 320AC4A, référence 320AC4A",
		"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/bltd89674ca5491ef9a/bltaba456f61496c230/680a25bef42c4c5c743e73c4/45760899_ed7_G.pdf#page=2",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Ingersoll Rand 320AC4A. La notice 45760899 édition 7 distingue 320AC4A à 20000 tr/min de 312AC4A à 12000 et 314AC4A à 14000. Elle ne publie pas le débit historique 32 cfm ; aucune consommation maximale ne lui est attribuée par déduction. Pince de la famille : 1/4 pouce (6 mm publiés comme équivalence dans la notice). Vitesse à vide : 20 000 tr/min. Puissance publiée : 0,40 hp (0,30 kW).",
		"verifiedFacts": [
			"Pince de la famille : 1/4 pouce (6 mm publiés comme équivalence dans la notice).",
			"Vitesse à vide : 20 000 tr/min.",
			"Puissance publiée : 0,40 hp (0,30 kW)."
		],
		"limitations": [
			"Le catalogue est conservé dans la bibliothèque du fabricant ; la disponibilité commerciale du modèle doit être confirmée.",
			"Les valeurs sont déclarées par le fabricant. Les débits en CFM ne sont pas des mesures indépendantes CompatAir.",
			"La notice constructeur alternative est accessible, tandis que l’ancienne bibliothèque reste en réserve d’accès. Elle ne rétablit pas un point débit/pression maximal apparié pour cette configuration ; les anciennes valeurs restent documentaires.",
			"La bibliothèque historique reste en réserve d’accès. La notice alternative ne rétablit pas ce lien."
		]
	},
	"specifications": [
		{
			"label": "Pince de la famille",
			"value": "1/4 pouce (6 mm publiés comme équivalence dans la notice)",
			"evidenceIds": [
				"ingersoll-rand-320ac4a-reserved-20261101-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"ingersoll-rand-320ac4a-reserved-20261101-1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0,40 hp (0,30 kW)",
			"evidenceIds": [
				"ingersoll-rand-320ac4a-reserved-20261101-1"
			]
		}
	],
	"evidence": [
		{
			"id": "ingersoll-rand-320ac4a-20260926",
			"sourceUrl": "https://powertools.ingersollrand.com/en-gb/asset-library/#page=7",
			"sourceLabel": "Ingersoll Rand, IR Industrial Air Surface Preparation Tool Catalog.pdf, bibliothèque officielle, p. 7, réf. 320AC4A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Valeur de la colonne CFM : 32. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min."
		},
		{
			"id": "ingersoll-rand-320ac4a-20260926-workingpressurebar-1",
			"sourceUrl": "https://powertools.ingersollrand.com/en-gb/asset-library/#page=26",
			"sourceLabel": "Ingersoll Rand, IR Industrial Air Surface Preparation Tool Catalog.pdf, bibliothèque officielle, p. 26",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 90 psi avec l’équivalence de 6,2 bar, et tableaux de performances à 90 psi."
		},
		{
			"id": "ingersoll-rand-320ac4a-reserved-20261031-1",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/bltd89674ca5491ef9a/bltaba456f61496c230/680a25bef42c4c5c743e73c4/45760899_ed7_G.pdf",
			"sourceLabel": "Ingersoll Rand 320AC4A : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 5b41360138aa346aa1b09a2be05db75c15cc72b82cfe642f186fc903f8e2d1ae. La notice constructeur alternative est accessible, tandis que l’ancienne bibliothèque reste en réserve d’accès. Elle ne rétablit pas un point débit/pression maximal apparié pour cette configuration ; les anciennes valeurs restent documentaires."
		},
		{
			"id": "ingersoll-rand-320ac4a-reserved-20261101-1",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/bltd89674ca5491ef9a/bltaba456f61496c230/680a25bef42c4c5c743e73c4/45760899_ed7_G.pdf#page=2",
			"sourceLabel": "Ingersoll Rand : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 5b41360138aa346aa1b09a2be05db75c15cc72b82cfe642f186fc903f8e2d1ae. Passage page=2. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"ingersoll-rand-320ac4a-reserved-20261101-1"
		],
		"workingPressureBar": [
			"ingersoll-rand-320ac4a-reserved-20261101-1"
		],
		"demandModel": [
			"ingersoll-rand-320ac4a-reserved-20261101-1"
		],
		"demandExplanation": [
			"ingersoll-rand-320ac4a-reserved-20261101-1"
		],
		"editorial": [
			"ingersoll-rand-320ac4a-reserved-20261101-1"
		],
		"specifications": [
			"ingersoll-rand-320ac4a-reserved-20261101-1"
		],
		"image": [
			"ingersoll-rand-320ac4a-reserved-20261101-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La notice constructeur alternative est accessible, tandis que l’ancienne bibliothèque reste en réserve d’accès. Elle ne rétablit pas un point débit/pression maximal apparié pour cette configuration ; les anciennes valeurs restent documentaires."
};

export default product;
