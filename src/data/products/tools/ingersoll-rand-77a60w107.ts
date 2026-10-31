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
		"sourceUrl": "https://powertools.ingersollrand.com/en-gb/asset-library/#page=16",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Ingersoll Rand 77A60W107. La notice constructeur alternative est accessible, tandis que l’ancienne bibliothèque reste en réserve d’accès. Elle ne rétablit pas un point débit/pression maximal apparié pour cette configuration ; les anciennes valeurs restent documentaires. Le fabricant donne les performances à 90 psi, avec l’équivalence publiée de 6,2 bar dans les consignes du même catalogue. Valeur de la colonne CFM : 37. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min. Référence fabricant : 77A60W107. Puissance publiée : 1.5 hp. Vitesse à vide : 6000 tr/min. Échappement : Latéral.",
		"verifiedFacts": [
			"Le fabricant donne les performances à 90 psi, avec l’équivalence publiée de 6,2 bar dans les consignes du même catalogue.",
			"Valeur de la colonne CFM : 37. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min.",
			"Référence fabricant : 77A60W107.",
			"Puissance publiée : 1.5 hp.",
			"Vitesse à vide : 6000 tr/min.",
			"Échappement : Latéral.",
			"Valeur documentaire conservée : 1047.72 L/min. La notice constructeur alternative est accessible, tandis que l’ancienne bibliothèque reste en réserve d’accès. Elle ne rétablit pas un point débit/pression maximal apparié pour cette configuration ; les anciennes valeurs restent documentaires."
		],
		"limitations": [
			"Le catalogue est conservé dans la bibliothèque du fabricant ; la disponibilité commerciale du modèle doit être confirmée.",
			"Les valeurs sont déclarées par le fabricant. Les débits en CFM ne sont pas des mesures indépendantes CompatAir.",
			"La notice constructeur alternative est accessible, tandis que l’ancienne bibliothèque reste en réserve d’accès. Elle ne rétablit pas un point débit/pression maximal apparié pour cette configuration ; les anciennes valeurs restent documentaires.",
			"La fiche courante annonce 29 cfm en charge, contre 37 cfm dans la transcription historique ; les régimes et éditions ne sont pas fusionnés."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le fabricant donne les performances à 90 psi, avec l’équivalence publiée de 6,2 bar dans les consignes du même catalogue.",
			"evidenceIds": [
				"ingersoll-rand-77a60w107-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Valeur documentaire conservée : 1047.72 L/min. La notice constructeur alternative est accessible, tandis que l’ancienne bibliothèque reste en réserve d’accès. Elle ne rétablit pas un point débit/pression maximal apparié pour cette configuration ; les anciennes valeurs restent documentaires.",
			"evidenceIds": [
				"ingersoll-rand-77a60w107-reserved-20261031-1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "1.5 hp",
			"evidenceIds": [
				"ingersoll-rand-77a60w107-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6000 tr/min",
			"evidenceIds": [
				"ingersoll-rand-77a60w107-20260926"
			]
		},
		{
			"label": "Échappement",
			"value": "Latéral",
			"evidenceIds": [
				"ingersoll-rand-77a60w107-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":1047.723,\"typical\":1047.723,\"max\":1047.723},\"workingPressureBar\":{\"min\":6.2,\"typical\":6.2,\"max\":6.2}}",
			"evidenceIds": [
				"ingersoll-rand-77a60w107-20260926",
				"ingersoll-rand-77a60w107-reserved-20261031-1"
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
		}
	],
	"fieldSources": {
		"mpn": [
			"ingersoll-rand-77a60w107-20260926"
		],
		"workingPressureBar": [
			"ingersoll-rand-77a60w107-20260926-workingpressurebar-1"
		],
		"demandModel": [
			"ingersoll-rand-77a60w107-reserved-20261031-1"
		],
		"demandExplanation": [
			"ingersoll-rand-77a60w107-reserved-20261031-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La notice constructeur alternative est accessible, tandis que l’ancienne bibliothèque reste en réserve d’accès. Elle ne rétablit pas un point débit/pression maximal apparié pour cette configuration ; les anciennes valeurs restent documentaires."
};

export default product;
