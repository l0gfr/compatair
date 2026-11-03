import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "mirka-ros-325cv",
	"slug": "mirka-ros-325cv",
	"brand": "Mirka",
	"model": "ROS 325CV",
	"mpn": "8993325111",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Mirka ROS 325CV",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/mirka-ros-325cv.webp",
		"alt": "Repères techniques Mirka ROS 325CV, référence 8993325111",
		"sourceUrl": "https://cms.mirka.com/globalassets/msc/pdf/mirka-product-catalog-2022-low-res.pdf#page=110",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Mirka ROS 325CV. La ROS 325CV est la ponceuse 77 mm à aspiration centrale et orbite 2,5 mm. La ROS 325NV conserve le diamètre et l’orbite sans aspiration ; les ROS 525CV et 625CV reçoivent 125 et 150 mm. Le débit commun publié ne distingue pas à lui seul ces usages. Son régime reste non précisé.",
		"verifiedFacts": [
			"Plateau : 77 mm.",
			"Orbite : 2,5 mm.",
			"Aspiration : Centrale, CV.",
			"Puissance : 209 W.",
			"Vitesse : 12 000 tr/min.",
			"Consommation, régime non précisé : 481 L/min."
		],
		"limitations": [
			"Régime du débit non précisé dans ce catalogue ; la pression de travail ne suffit pas à définir une mesure maximale/en charge.",
			"Catalogue 2022/2023 identifié ; équipement et disponibilité actuels à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Plateau",
			"value": "77 mm",
			"evidenceIds": [
				"mirka-ros-325cv-reserved-20261103-1"
			]
		},
		{
			"label": "Orbite",
			"value": "2,5 mm",
			"evidenceIds": [
				"mirka-ros-325cv-reserved-20261103-1"
			]
		},
		{
			"label": "Aspiration",
			"value": "Centrale, CV",
			"evidenceIds": [
				"mirka-ros-325cv-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "209 W",
			"evidenceIds": [
				"mirka-ros-325cv-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"mirka-ros-325cv-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "481 L/min",
			"evidenceIds": [
				"mirka-ros-325cv-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "mirka-8993325111-20260927",
			"sourceUrl": "https://cms.mirka.com/globalassets/msc/pdf/mirka-product-catalog-2022-low-res.pdf#page=110",
			"sourceLabel": "Mirka Scandinavia, catalogue 2022/2023, p. 110, réf. 8993325111",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 481 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		},
		{
			"id": "mirka-ros-325cv-reserved-20261103-1",
			"sourceUrl": "https://cms.mirka.com/globalassets/msc/pdf/mirka-product-catalog-2022-low-res.pdf#page=110",
			"sourceLabel": "Mirka : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 2ced0651411b4d8c2cd50ec1e250c15d9fda73d452ffd72b2a9cbe8910647fc2. La ROS 325CV est la ponceuse 77 mm à aspiration centrale et orbite 2,5 mm. La ROS 325NV conserve le diamètre et l’orbite sans aspiration ; les ROS 525CV et 625CV reçoivent 125 et 150 mm. Le débit commun publié ne distingue pas à lui seul ces usages. Son régime reste non précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"mirka-8993325111-20260927"
		],
		"workingPressureBar": [
			"mirka-8993325111-20260927"
		],
		"airflowLpm": [
			"mirka-8993325111-20260927"
		],
		"airflowBasis": [
			"mirka-ros-325cv-reserved-20261103-1"
		],
		"editorial": [
			"mirka-ros-325cv-reserved-20261103-1"
		],
		"specifications": [
			"mirka-ros-325cv-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 481,
		"typical": 481,
		"max": 481
	},
	"airflowBasis": "unqualified"
};

export default product;
