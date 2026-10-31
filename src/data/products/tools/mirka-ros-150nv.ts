import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "mirka-ros-150nv",
	"slug": "mirka-ros-150nv",
	"brand": "Mirka",
	"model": "ROS 150NV",
	"mpn": "8992450111",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Mirka ROS 150NV",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/mirka-ros-150nv.webp",
		"alt": "Repères techniques Mirka ROS 150NV, référence 8992450111",
		"sourceUrl": "https://cms.mirka.com/globalassets/msc/pdf/mirka-product-catalog-2022-low-res.pdf#page=110",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Mirka ROS 150NV. La table donne la consommation et la pression de travail, sans qualifier le débit de maximum, de moyenne ni de débit en charge. Le moteur conserve un résultat indéterminé pour ce point. Référence fabricant : 8992450111. Puissance publiée : 112 W. Vitesse de rotation : 8000 tr/min. Diamètre de plateau publié : 34 mm.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Référence fabricant : 8992450111.",
			"Puissance publiée : 112 W.",
			"Vitesse de rotation : 8000 tr/min.",
			"Diamètre de plateau publié : 34 mm.",
			"Consommation de régime non précisé publiée : 425 L/min."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Catalogue 2022/2023 : vérifier la disponibilité actuelle et la référence de plateau avant commande.",
			"La désignation commerciale mentionne 32 mm, tandis que le tableau technique indique un plateau de 34 mm. Ne pas confondre le diamètre du consommable et celui du plateau.",
			"La table donne la consommation et la pression de travail, sans qualifier le débit de maximum, de moyenne ni de débit en charge. Le moteur conserve un résultat indéterminé pour ce point."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"mirka-8992450111-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 425 L/min.",
			"evidenceIds": [
				"mirka-ros-150nv-reserved-20261031-1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "112 W",
			"evidenceIds": [
				"mirka-8992450111-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "8000 tr/min",
			"evidenceIds": [
				"mirka-8992450111-20260927"
			]
		},
		{
			"label": "Diamètre de plateau publié",
			"value": "34 mm",
			"evidenceIds": [
				"mirka-8992450111-20260927"
			]
		},
		{
			"label": "Orbite",
			"value": "5 mm",
			"evidenceIds": [
				"mirka-8992450111-20260927"
			]
		},
		{
			"label": "Collecte des poussières",
			"value": "Sans aspiration",
			"evidenceIds": [
				"mirka-8992450111-20260927"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":425,\"typical\":425,\"max\":425},\"workingPressureBar\":{\"min\":6.2,\"typical\":6.2,\"max\":6.2}}",
			"evidenceIds": [
				"mirka-8992450111-20260927",
				"mirka-ros-150nv-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "mirka-8992450111-20260927",
			"sourceUrl": "https://cms.mirka.com/globalassets/msc/pdf/mirka-product-catalog-2022-low-res.pdf#page=110",
			"sourceLabel": "Mirka Scandinavia, catalogue 2022/2023, p. 110, réf. 8992450111",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 425 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		},
		{
			"id": "mirka-ros-150nv-reserved-20261031-1",
			"sourceUrl": "https://cms.mirka.com/globalassets/msc/pdf/mirka-product-catalog-2022-low-res.pdf#page=110",
			"sourceLabel": "Mirka ROS 150NV : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 2ced0651411b4d8c2cd50ec1e250c15d9fda73d452ffd72b2a9cbe8910647fc2. La table donne la consommation et la pression de travail, sans qualifier le débit de maximum, de moyenne ni de débit en charge. Le moteur conserve un résultat indéterminé pour ce point."
		}
	],
	"fieldSources": {
		"mpn": [
			"mirka-8992450111-20260927"
		],
		"workingPressureBar": [
			"mirka-8992450111-20260927"
		],
		"airflowLpm": [
			"mirka-8992450111-20260927"
		],
		"airflowBasis": [
			"mirka-ros-150nv-reserved-20261031-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 425,
		"typical": 425,
		"max": 425
	},
	"airflowBasis": "unqualified"
};

export default product;
