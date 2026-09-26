const product = {
	"id": "ingersoll-rand-182l",
	"slug": "ingersoll-rand-182l",
	"brand": "Ingersoll Rand",
	"model": "182L",
	"mpn": "182L",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Ingersoll Rand 182L",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/ingersoll-rand-182l.webp",
		"alt": "Repères techniques Ingersoll Rand 182L, référence 182L",
		"sourceUrl": "https://powertools.ingersollrand.com/en-gb/asset-library/#page=18",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Ingersoll Rand 182L, référence 182L. Le tableau fabricant publie 368,119 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Masse publiée : 1.9 kg. Cadence de frappe publiée : 4000 coups/min.",
		"verifiedFacts": [
			"Le fabricant donne les performances à 90 psi, avec l’équivalence publiée de 6,2 bar dans les consignes du même catalogue.",
			"Valeur de la colonne CFM : 13. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min.",
			"Référence fabricant : 182L.",
			"Masse publiée : 1.9 kg.",
			"Cadence de frappe publiée : 4000 coups/min."
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
				"ingersoll-rand-182l-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Valeur de la colonne CFM : 13. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min.",
			"evidenceIds": [
				"ingersoll-rand-182l-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.9 kg",
			"evidenceIds": [
				"ingersoll-rand-182l-20260926"
			]
		},
		{
			"label": "Cadence de frappe publiée",
			"value": "4000 coups/min",
			"evidenceIds": [
				"ingersoll-rand-182l-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "ingersoll-rand-182l-20260926",
			"sourceUrl": "https://powertools.ingersollrand.com/en-gb/asset-library/#page=18",
			"sourceLabel": "Ingersoll Rand, IR Industrial Air Surface Preparation Tool Catalog.pdf, bibliothèque officielle, p. 18, réf. 182L",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Valeur de la colonne CFM : 13. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min."
		},
		{
			"id": "ingersoll-rand-182l-20260926-workingpressurebar-1",
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
			"ingersoll-rand-182l-20260926"
		],
		"workingPressureBar": [
			"ingersoll-rand-182l-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"ingersoll-rand-182l-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 368.119,
		"typical": 368.119,
		"max": 368.119
	}
};

export default product;
