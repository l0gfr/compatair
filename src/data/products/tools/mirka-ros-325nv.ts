import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "mirka-ros-325nv",
	"slug": "mirka-ros-325nv",
	"brand": "Mirka",
	"model": "ROS 325NV",
	"mpn": "8993320111",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Mirka ROS 325NV",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/mirka-ros-325nv-technical-20261116-reviews.svg",
		"alt": "Repères techniques Mirka ROS 325NV, référence 8993320111",
		"sourceUrl": "https://cms.mirka.com/globalassets/msc/pdf/mirka-product-catalog-2022-low-res.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "Mirka ROS 325NV 8993320111 : ponceuse 77 mm sans aspiration, orbite 2,5 mm, 209 W et 12 000 tr/min. La 325CV conserve diamètre et orbite avec aspiration centrale ; la ROS 150NV utilise un autre petit plateau et une orbite de 5 mm. Les 481 L/min publiés restent de régime non précisé.",
		"verifiedFacts": [
			"Plateau / orbite : 77 / 2,5 mm.",
			"Aspiration : Sans aspiration, NV.",
			"Puissance / vitesse : 209 W / 12 000 tr/min.",
			"Masse, catalogue 2022/2023 : 510 g.",
			"Consommation, régime non précisé : 481 L/min.",
			"Pression de travail : 6,2 bar."
		],
		"limitations": [
			"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Plateau / orbite",
			"value": "77 / 2,5 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:mirka-ros-325nv:0"
			]
		},
		{
			"label": "Aspiration",
			"value": "Sans aspiration, NV",
			"evidenceIds": [
				"review:2026-11-16-reviews:mirka-ros-325nv:0"
			]
		},
		{
			"label": "Puissance / vitesse",
			"value": "209 W / 12 000 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:mirka-ros-325nv:0"
			]
		},
		{
			"label": "Masse, catalogue 2022/2023",
			"value": "510 g",
			"evidenceIds": [
				"review:2026-11-16-reviews:mirka-ros-325nv:0"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "481 L/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:mirka-ros-325nv:0"
			]
		},
		{
			"label": "Pression de travail",
			"value": "6,2 bar",
			"evidenceIds": [
				"review:2026-11-16-reviews:mirka-ros-325nv:0"
			]
		}
	],
	"evidence": [
		{
			"id": "mirka-8993320111-20260927",
			"sourceUrl": "https://cms.mirka.com/globalassets/msc/pdf/mirka-product-catalog-2022-low-res.pdf#page=110",
			"sourceLabel": "Mirka Scandinavia, catalogue 2022/2023, p. 110, réf. 8993320111",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 481 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		},
		{
			"id": "review:2026-11-16-reviews:mirka-ros-325nv:0",
			"sourceUrl": "https://cms.mirka.com/globalassets/msc/pdf/mirka-product-catalog-2022-low-res.pdf",
			"sourceLabel": "Mirka, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Mirka ROS 325NV 8993320111 : ponceuse 77 mm sans aspiration, orbite 2,5 mm, 209 W et 12 000 tr/min. La 325CV conserve diamètre et orbite avec aspiration centrale ; la ROS 150NV utilise un autre petit plateau et une orbite de 5 mm. Les 481 L/min publiés restent de régime non précisé. GET complet SHA-256 2ced0651411b4d8c2cd50ec1e250c15d9fda73d452ffd72b2a9cbe8910647fc2. Pages PDF lues : 110."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:mirka-ros-325nv:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:mirka-ros-325nv:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:mirka-ros-325nv:0"
		]
	},
	"notes": [
		"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
	],
	"demandExplanation": "La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
};

export default product;
