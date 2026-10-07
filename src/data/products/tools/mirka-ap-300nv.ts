import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "mirka-ap-300nv",
	"slug": "mirka-ap-300nv",
	"brand": "Mirka",
	"model": "AP 300NV",
	"mpn": "8992340311",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "Mirka AP 300NV",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/mirka-ap-300nv.webp",
		"alt": "Repères techniques Mirka AP 300NV, référence 8992340311",
		"sourceUrl": "https://cms.mirka.com/globalassets/msc/pdf/mirka-product-catalog-2022-low-res.pdf#page=118",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Mirka AP 300NV, référence 8992340311. Consommation publiée : 626 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Puissance publiée : 298 W. Vitesse de rotation : 3200 tr/min.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation publiée : 626 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 8992340311.",
			"Puissance publiée : 298 W.",
			"Vitesse de rotation : 3200 tr/min.",
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
				"mirka-8992340311-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 626 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"mirka-8992340311-20260927"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "298 W",
			"evidenceIds": [
				"mirka-8992340311-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "3200 tr/min",
			"evidenceIds": [
				"mirka-8992340311-20260927"
			]
		},
		{
			"label": "Diamètre de plateau publié",
			"value": "77 mm",
			"evidenceIds": [
				"mirka-8992340311-20260927"
			]
		},
		{
			"label": "Orbite",
			"value": "0 mm",
			"evidenceIds": [
				"mirka-8992340311-20260927"
			]
		},
		{
			"label": "Collecte des poussières",
			"value": "Sans aspiration",
			"evidenceIds": [
				"mirka-8992340311-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "mirka-8992340311-20260927",
			"sourceUrl": "https://cms.mirka.com/globalassets/msc/pdf/mirka-product-catalog-2022-low-res.pdf#page=118",
			"sourceLabel": "Mirka Scandinavia, catalogue 2022/2023, p. 118, réf. 8992340311",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 626 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"mirka-8992340311-20260927"
		],
		"workingPressureBar": [
			"mirka-8992340311-20260927"
		],
		"airflowLpm": [
			"mirka-8992340311-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 626,
		"typical": 626,
		"max": 626
	}
};

export default product;
