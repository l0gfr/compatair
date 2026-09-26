const product = {
	"id": "ingersoll-rand-312ac4a",
	"slug": "ingersoll-rand-312ac4a",
	"brand": "Ingersoll Rand",
	"model": "312AC4A",
	"mpn": "312AC4A",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Ingersoll Rand 312AC4A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/ingersoll-rand-312ac4a.webp",
		"alt": "Repères techniques Ingersoll Rand 312AC4A, référence 312AC4A",
		"sourceUrl": "https://powertools.ingersollrand.com/en-gb/asset-library/#page=7",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Ingersoll Rand 312AC4A, référence 312AC4A. Le tableau fabricant publie 906,139 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Puissance publiée : 0.40 hp. Vitesse à vide : 12000 tr/min.",
		"verifiedFacts": [
			"Le fabricant donne les performances à 90 psi, avec l’équivalence publiée de 6,2 bar dans les consignes du même catalogue.",
			"Valeur de la colonne CFM : 32. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min.",
			"Référence fabricant : 312AC4A.",
			"Puissance publiée : 0.40 hp.",
			"Vitesse à vide : 12000 tr/min.",
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
				"ingersoll-rand-312ac4a-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Valeur de la colonne CFM : 32. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min.",
			"evidenceIds": [
				"ingersoll-rand-312ac4a-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0.40 hp",
			"evidenceIds": [
				"ingersoll-rand-312ac4a-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12000 tr/min",
			"evidenceIds": [
				"ingersoll-rand-312ac4a-20260926"
			]
		},
		{
			"label": "Échappement",
			"value": "Arrière",
			"evidenceIds": [
				"ingersoll-rand-312ac4a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "ingersoll-rand-312ac4a-20260926",
			"sourceUrl": "https://powertools.ingersollrand.com/en-gb/asset-library/#page=7",
			"sourceLabel": "Ingersoll Rand, IR Industrial Air Surface Preparation Tool Catalog.pdf, bibliothèque officielle, p. 7, réf. 312AC4A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Valeur de la colonne CFM : 32. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min."
		},
		{
			"id": "ingersoll-rand-312ac4a-20260926-workingpressurebar-1",
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
			"ingersoll-rand-312ac4a-20260926"
		],
		"workingPressureBar": [
			"ingersoll-rand-312ac4a-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"ingersoll-rand-312ac4a-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 906.139,
		"typical": 906.139,
		"max": 906.139
	}
};

export default product;
