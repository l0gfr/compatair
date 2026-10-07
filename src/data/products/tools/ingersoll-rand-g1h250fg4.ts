import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ingersoll-rand-g1h250fg4",
	"slug": "ingersoll-rand-g1h250fg4",
	"brand": "Ingersoll Rand",
	"model": "G1H250FG4",
	"mpn": "G1H250FG4",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Ingersoll Rand G1H250FG4",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/ingersoll-rand-g1h250fg4.webp",
		"alt": "Repères techniques Ingersoll Rand G1H250FG4, référence G1H250FG4",
		"sourceUrl": "https://powertools.ingersollrand.com/en-gb/asset-library/#page=5",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Ingersoll Rand G1H250FG4, référence G1H250FG4. Le tableau fabricant publie 566,337 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Puissance publiée : 0.4 hp. Vitesse à vide : 25000 tr/min.",
		"verifiedFacts": [
			"Le fabricant donne les performances à 90 psi, avec l’équivalence publiée de 6,2 bar dans les consignes du même catalogue.",
			"Valeur de la colonne CFM : 20. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min.",
			"Référence fabricant : G1H250FG4.",
			"Puissance publiée : 0.4 hp.",
			"Vitesse à vide : 25000 tr/min.",
			"Échappement : Avant."
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
				"ingersoll-rand-g1h250fg4-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Valeur de la colonne CFM : 20. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min.",
			"evidenceIds": [
				"ingersoll-rand-g1h250fg4-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0.4 hp",
			"evidenceIds": [
				"ingersoll-rand-g1h250fg4-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "25000 tr/min",
			"evidenceIds": [
				"ingersoll-rand-g1h250fg4-20260926"
			]
		},
		{
			"label": "Échappement",
			"value": "Avant",
			"evidenceIds": [
				"ingersoll-rand-g1h250fg4-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "ingersoll-rand-g1h250fg4-20260926",
			"sourceUrl": "https://powertools.ingersollrand.com/en-gb/asset-library/#page=5",
			"sourceLabel": "Ingersoll Rand, IR Industrial Air Surface Preparation Tool Catalog.pdf, bibliothèque officielle, p. 5, réf. G1H250FG4",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Valeur de la colonne CFM : 20. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min."
		},
		{
			"id": "ingersoll-rand-g1h250fg4-20260926-workingpressurebar-1",
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
			"ingersoll-rand-g1h250fg4-20260926"
		],
		"workingPressureBar": [
			"ingersoll-rand-g1h250fg4-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"ingersoll-rand-g1h250fg4-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 566.337,
		"typical": 566.337,
		"max": 566.337
	}
};

export default product;
