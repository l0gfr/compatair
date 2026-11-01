import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ingersoll-rand-77a60w107",
	"slug": "ingersoll-rand-77a60w107",
	"brand": "Ingersoll Rand",
	"model": "77A60W107",
	"mpn": "77A60W107",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Ingersoll Rand 77A60W107",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/ingersoll-rand-77a60w107.webp",
		"alt": "Repères techniques Ingersoll Rand 77A60W107, référence 77A60W107",
		"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/bltd89674ca5491ef9a/blt433cc516ed60e011/680a2474db9ccbf630425ff1/80221773_ed3_C.pdf#page=2",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Ingersoll Rand 77A60W107. La notice 80221773 édition 3 distingue 77A60W107,6000 tr/min/7 pouces, de 77A45W109,4500 tr/min/9 pouces. Aucune consommation n’apparaît dans cette notice ; les 37 cfm historiques restent dans l’archive et ne sont pas présentés comme une mesure actuelle. Vitesse à vide : 6 000 tr/min. Plateau de support : 7 pouces (178 mm). Broche : 5/8-11, 7 pouces dans la table.",
		"verifiedFacts": [
			"Vitesse à vide : 6 000 tr/min.",
			"Plateau de support : 7 pouces (178 mm).",
			"Broche : 5/8-11, 7 pouces dans la table."
		],
		"limitations": [
			"Le catalogue est conservé dans la bibliothèque du fabricant ; la disponibilité commerciale du modèle doit être confirmée.",
			"Les valeurs sont déclarées par le fabricant. Les débits en CFM ne sont pas des mesures indépendantes CompatAir.",
			"La notice constructeur alternative est accessible, tandis que l’ancienne bibliothèque reste en réserve d’accès. Elle ne rétablit pas un point débit/pression maximal apparié pour cette configuration ; les anciennes valeurs restent documentaires.",
			"La fiche courante annonce 29 cfm en charge, contre 37 cfm dans la transcription historique ; les régimes et éditions ne sont pas fusionnés.",
			"La bibliothèque historique reste en réserve d’accès. La notice alternative ne rétablit pas ce lien."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "6 000 tr/min",
			"evidenceIds": [
				"ingersoll-rand-77a60w107-reserved-20261101-1"
			]
		},
		{
			"label": "Plateau de support",
			"value": "7 pouces (178 mm)",
			"evidenceIds": [
				"ingersoll-rand-77a60w107-reserved-20261101-1"
			]
		},
		{
			"label": "Broche",
			"value": "5/8-11, 7 pouces dans la table",
			"evidenceIds": [
				"ingersoll-rand-77a60w107-reserved-20261101-1"
			]
		}
	],
	"evidence": [
		{
			"id": "ingersoll-rand-77a60w107-20260926",
			"sourceUrl": "https://powertools.ingersollrand.com/en-gb/asset-library/#page=16",
			"sourceLabel": "Ingersoll Rand, IR Industrial Air Surface Preparation Tool Catalog.pdf, bibliothèque officielle, p. 16, réf. 77A60W107",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Valeur de la colonne CFM : 37. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min."
		},
		{
			"id": "ingersoll-rand-77a60w107-20260926-workingpressurebar-1",
			"sourceUrl": "https://powertools.ingersollrand.com/en-gb/asset-library/#page=26",
			"sourceLabel": "Ingersoll Rand, IR Industrial Air Surface Preparation Tool Catalog.pdf, bibliothèque officielle, p. 26",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 90 psi avec l’équivalence de 6,2 bar, et tableaux de performances à 90 psi."
		},
		{
			"id": "ingersoll-rand-77a60w107-reserved-20261031-1",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/bltd89674ca5491ef9a/blt433cc516ed60e011/680a2474db9ccbf630425ff1/80221773_ed3_C.pdf",
			"sourceLabel": "Ingersoll Rand 77A60W107 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 79bce65a0d457b008e4483ef519ea5a09fcc23eb3463b30e076d2e1216da5542. La notice constructeur alternative est accessible, tandis que l’ancienne bibliothèque reste en réserve d’accès. Elle ne rétablit pas un point débit/pression maximal apparié pour cette configuration ; les anciennes valeurs restent documentaires."
		},
		{
			"id": "ingersoll-rand-77a60w107-reserved-20261101-1",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/bltd89674ca5491ef9a/blt433cc516ed60e011/680a2474db9ccbf630425ff1/80221773_ed3_C.pdf#page=2",
			"sourceLabel": "Ingersoll Rand : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 79bce65a0d457b008e4483ef519ea5a09fcc23eb3463b30e076d2e1216da5542. Passage page=2. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"ingersoll-rand-77a60w107-reserved-20261101-1"
		],
		"workingPressureBar": [
			"ingersoll-rand-77a60w107-reserved-20261101-1"
		],
		"demandModel": [
			"ingersoll-rand-77a60w107-reserved-20261101-1"
		],
		"demandExplanation": [
			"ingersoll-rand-77a60w107-reserved-20261101-1"
		],
		"editorial": [
			"ingersoll-rand-77a60w107-reserved-20261101-1"
		],
		"specifications": [
			"ingersoll-rand-77a60w107-reserved-20261101-1"
		],
		"image": [
			"ingersoll-rand-77a60w107-reserved-20261101-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La notice constructeur alternative est accessible, tandis que l’ancienne bibliothèque reste en réserve d’accès. Elle ne rétablit pas un point débit/pression maximal apparié pour cette configuration ; les anciennes valeurs restent documentaires."
};

export default product;
