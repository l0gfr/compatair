import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "mirka-ros2-650cv",
	"slug": "mirka-ros2-650cv",
	"brand": "Mirka",
	"model": "ROS2 650CV",
	"mpn": "8994650111",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Mirka ROS2 650CV",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/mirka-ros2-650cv.webp",
		"alt": "Repères techniques Mirka ROS2 650CV, référence 8994650111",
		"sourceUrl": "https://cms.mirka.com/globalassets/msc/pdf/mirka-product-catalog-2022-low-res.pdf#page=116",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Mirka ROS2 650CV, référence 8994650111. Consommation publiée : 594 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Puissance publiée : 343 W. Vitesse de rotation : 12000 tr/min.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation publiée : 594 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 8994650111.",
			"Puissance publiée : 343 W.",
			"Vitesse de rotation : 12000 tr/min.",
			"Diamètre de plateau publié : 150 mm."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Catalogue 2022/2023 : vérifier la disponibilité actuelle et la référence de plateau avant commande."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"mirka-8994650111-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 594 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"mirka-8994650111-20260927"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "343 W",
			"evidenceIds": [
				"mirka-8994650111-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "12000 tr/min",
			"evidenceIds": [
				"mirka-8994650111-20260927"
			]
		},
		{
			"label": "Diamètre de plateau publié",
			"value": "150 mm",
			"evidenceIds": [
				"mirka-8994650111-20260927"
			]
		},
		{
			"label": "Orbite",
			"value": "5 mm",
			"evidenceIds": [
				"mirka-8994650111-20260927"
			]
		},
		{
			"label": "Collecte des poussières",
			"value": "Aspiration centralisée",
			"evidenceIds": [
				"mirka-8994650111-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "mirka-8994650111-20260927",
			"sourceUrl": "https://cms.mirka.com/globalassets/msc/pdf/mirka-product-catalog-2022-low-res.pdf#page=116",
			"sourceLabel": "Mirka Scandinavia, catalogue 2022/2023, p. 116, réf. 8994650111",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 594 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"mirka-8994650111-20260927"
		],
		"workingPressureBar": [
			"mirka-8994650111-20260927"
		],
		"airflowLpm": [
			"mirka-8994650111-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 594,
		"typical": 594,
		"max": 594
	}
};

export default product;
