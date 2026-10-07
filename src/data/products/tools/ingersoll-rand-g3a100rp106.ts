import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ingersoll-rand-g3a100rp106",
	"slug": "ingersoll-rand-g3a100rp106",
	"brand": "Ingersoll Rand",
	"model": "G3A100RP106",
	"mpn": "G3A100RP106",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Ingersoll Rand G3A100RP106",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/ingersoll-rand-g3a100rp106.webp",
		"alt": "Repères techniques Ingersoll Rand G3A100RP106, référence G3A100RP106",
		"sourceUrl": "https://powertools.ingersollrand.com/en-gb/asset-library/#page=6",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Ingersoll Rand G3A100RP106, référence G3A100RP106. Le tableau fabricant publie 934,456 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Puissance publiée : 1.35 hp. Vitesse à vide : 10000 tr/min.",
		"verifiedFacts": [
			"Le fabricant donne les performances à 90 psi, avec l’équivalence publiée de 6,2 bar dans les consignes du même catalogue.",
			"Valeur de la colonne CFM : 33. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min.",
			"Référence fabricant : G3A100RP106.",
			"Puissance publiée : 1.35 hp.",
			"Vitesse à vide : 10000 tr/min.",
			"Échappement : Arrière."
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
				"ingersoll-rand-g3a100rp106-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Valeur de la colonne CFM : 33. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min.",
			"evidenceIds": [
				"ingersoll-rand-g3a100rp106-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "1.35 hp",
			"evidenceIds": [
				"ingersoll-rand-g3a100rp106-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "10000 tr/min",
			"evidenceIds": [
				"ingersoll-rand-g3a100rp106-20260926"
			]
		},
		{
			"label": "Échappement",
			"value": "Arrière",
			"evidenceIds": [
				"ingersoll-rand-g3a100rp106-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "ingersoll-rand-g3a100rp106-20260926",
			"sourceUrl": "https://powertools.ingersollrand.com/en-gb/asset-library/#page=6",
			"sourceLabel": "Ingersoll Rand, IR Industrial Air Surface Preparation Tool Catalog.pdf, bibliothèque officielle, p. 6, réf. G3A100RP106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Valeur de la colonne CFM : 33. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min."
		},
		{
			"id": "ingersoll-rand-g3a100rp106-20260926-workingpressurebar-1",
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
			"ingersoll-rand-g3a100rp106-20260926"
		],
		"workingPressureBar": [
			"ingersoll-rand-g3a100rp106-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"ingersoll-rand-g3a100rp106-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 934.456,
		"typical": 934.456,
		"max": 934.456
	}
};

export default product;
