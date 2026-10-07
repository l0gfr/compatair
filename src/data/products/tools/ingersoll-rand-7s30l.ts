import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ingersoll-rand-7s30l",
	"slug": "ingersoll-rand-7s30l",
	"brand": "Ingersoll Rand",
	"model": "7S30L",
	"mpn": "7S30L",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Ingersoll Rand 7S30L",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/ingersoll-rand-7s30l.webp",
		"alt": "Repères techniques Ingersoll Rand 7S30L, référence 7S30L",
		"sourceUrl": "https://powertools.ingersollrand.com/en-gb/asset-library/#page=16",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Ingersoll Rand 7S30L, référence 7S30L. Le tableau fabricant publie 622,971 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Puissance publiée : 0.8 hp. Vitesse à vide : 3000 tr/min.",
		"verifiedFacts": [
			"Le fabricant donne les performances à 90 psi, avec l’équivalence publiée de 6,2 bar dans les consignes du même catalogue.",
			"Valeur de la colonne CFM : 22. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min.",
			"Référence fabricant : 7S30L.",
			"Puissance publiée : 0.8 hp.",
			"Vitesse à vide : 3000 tr/min.",
			"Échappement : Latéral."
		],
		"limitations": [
			"Le catalogue est conservé dans la bibliothèque du fabricant ; la disponibilité commerciale du modèle doit être confirmée.",
			"Les valeurs sont déclarées par le fabricant. Les débits en CFM ne sont pas des mesures indépendantes CompatAir."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le fabricant donne les performances à 90 psi, avec l’équivalence publiée de 6,2 bar dans les consignes du même catalogue.",
			"evidenceIds": [
				"ingersoll-rand-7s30l-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Valeur de la colonne CFM : 22. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min.",
			"evidenceIds": [
				"ingersoll-rand-7s30l-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0.8 hp",
			"evidenceIds": [
				"ingersoll-rand-7s30l-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3000 tr/min",
			"evidenceIds": [
				"ingersoll-rand-7s30l-20260926"
			]
		},
		{
			"label": "Échappement",
			"value": "Latéral",
			"evidenceIds": [
				"ingersoll-rand-7s30l-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "ingersoll-rand-7s30l-20260926",
			"sourceUrl": "https://powertools.ingersollrand.com/en-gb/asset-library/#page=16",
			"sourceLabel": "Ingersoll Rand, IR Industrial Air Surface Preparation Tool Catalog.pdf, bibliothèque officielle, p. 16, réf. 7S30L",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Valeur de la colonne CFM : 22. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min."
		},
		{
			"id": "ingersoll-rand-7s30l-20260926-workingpressurebar-1",
			"sourceUrl": "https://powertools.ingersollrand.com/en-gb/asset-library/#page=26",
			"sourceLabel": "Ingersoll Rand, IR Industrial Air Surface Preparation Tool Catalog.pdf, bibliothèque officielle, p. 26",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 90 psi avec l’équivalence de 6,2 bar, et tableaux de performances à 90 psi."
		}
	],
	"fieldSources": {
		"mpn": [
			"ingersoll-rand-7s30l-20260926"
		],
		"workingPressureBar": [
			"ingersoll-rand-7s30l-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"ingersoll-rand-7s30l-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 622.971,
		"typical": 622.971,
		"max": 622.971
	}
};

export default product;
