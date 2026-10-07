import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "mirka-ros-325db",
	"slug": "mirka-ros-325db",
	"brand": "Mirka",
	"model": "ROS 325DB",
	"mpn": "8993425111",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Mirka ROS 325DB",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/mirka-ros-325db.webp",
		"alt": "Repères techniques Mirka ROS 325DB, référence 8993425111",
		"sourceUrl": "https://cms.mirka.com/globalassets/msc/pdf/mirka-product-catalog-2022-low-res.pdf#page=110",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Mirka ROS 325DB, référence 8993425111. Consommation publiée : 481 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Puissance publiée : 209 W. Vitesse de rotation : 12000 tr/min.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation publiée : 481 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 8993425111.",
			"Puissance publiée : 209 W.",
			"Vitesse de rotation : 12000 tr/min.",
			"Diamètre de plateau publié : 77 mm."
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
				"mirka-8993425111-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 481 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"mirka-8993425111-20260927"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "209 W",
			"evidenceIds": [
				"mirka-8993425111-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "12000 tr/min",
			"evidenceIds": [
				"mirka-8993425111-20260927"
			]
		},
		{
			"label": "Diamètre de plateau publié",
			"value": "77 mm",
			"evidenceIds": [
				"mirka-8993425111-20260927"
			]
		},
		{
			"label": "Orbite",
			"value": "2.5 mm",
			"evidenceIds": [
				"mirka-8993425111-20260927"
			]
		},
		{
			"label": "Collecte des poussières",
			"value": "Sac à poussière",
			"evidenceIds": [
				"mirka-8993425111-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "mirka-8993425111-20260927",
			"sourceUrl": "https://cms.mirka.com/globalassets/msc/pdf/mirka-product-catalog-2022-low-res.pdf#page=110",
			"sourceLabel": "Mirka Scandinavia, catalogue 2022/2023, p. 110, réf. 8993425111",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 481 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"mirka-8993425111-20260927"
		],
		"workingPressureBar": [
			"mirka-8993425111-20260927"
		],
		"airflowLpm": [
			"mirka-8993425111-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 481,
		"typical": 481,
		"max": 481
	}
};

export default product;
