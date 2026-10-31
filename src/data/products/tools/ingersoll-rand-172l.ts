import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ingersoll-rand-172l",
	"slug": "ingersoll-rand-172l",
	"brand": "Ingersoll Rand",
	"model": "172L",
	"mpn": "172L",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Ingersoll Rand 172L",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/ingersoll-rand-172l.webp",
		"alt": "Repères techniques Ingersoll Rand 172L, référence 172L",
		"sourceUrl": "https://powertools.ingersollrand.com/en-gb/asset-library/#page=18",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Ingersoll Rand 172L. La notice constructeur alternative est accessible, tandis que l’ancienne bibliothèque reste en réserve d’accès. Elle ne rétablit pas un point débit/pression maximal apparié pour cette configuration ; les anciennes valeurs restent documentaires. Le fabricant donne les performances à 90 psi, avec l’équivalence publiée de 6,2 bar dans les consignes du même catalogue. Valeur de la colonne CFM : 12. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min. Référence fabricant : 172L. Masse publiée : 1.7 kg. Cadence de frappe publiée : 5500 coups/min.",
		"verifiedFacts": [
			"Le fabricant donne les performances à 90 psi, avec l’équivalence publiée de 6,2 bar dans les consignes du même catalogue.",
			"Valeur de la colonne CFM : 12. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min.",
			"Référence fabricant : 172L.",
			"Masse publiée : 1.7 kg.",
			"Cadence de frappe publiée : 5500 coups/min.",
			"Valeur documentaire conservée : 339.802 L/min. La notice constructeur alternative est accessible, tandis que l’ancienne bibliothèque reste en réserve d’accès. Elle ne rétablit pas un point débit/pression maximal apparié pour cette configuration ; les anciennes valeurs restent documentaires."
		],
		"limitations": [
			"Le catalogue est conservé dans la bibliothèque du fabricant ; la disponibilité commerciale du modèle doit être confirmée.",
			"Les valeurs sont déclarées par le fabricant. Les débits en CFM ne sont pas des mesures indépendantes CompatAir.",
			"La notice constructeur alternative est accessible, tandis que l’ancienne bibliothèque reste en réserve d’accès. Elle ne rétablit pas un point débit/pression maximal apparié pour cette configuration ; les anciennes valeurs restent documentaires."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le fabricant donne les performances à 90 psi, avec l’équivalence publiée de 6,2 bar dans les consignes du même catalogue.",
			"evidenceIds": [
				"ingersoll-rand-172l-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Valeur documentaire conservée : 339.802 L/min. La notice constructeur alternative est accessible, tandis que l’ancienne bibliothèque reste en réserve d’accès. Elle ne rétablit pas un point débit/pression maximal apparié pour cette configuration ; les anciennes valeurs restent documentaires.",
			"evidenceIds": [
				"ingersoll-rand-172l-reserved-20261031-1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.7 kg",
			"evidenceIds": [
				"ingersoll-rand-172l-20260926"
			]
		},
		{
			"label": "Cadence de frappe publiée",
			"value": "5500 coups/min",
			"evidenceIds": [
				"ingersoll-rand-172l-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":339.802,\"typical\":339.802,\"max\":339.802},\"workingPressureBar\":{\"min\":6.2,\"typical\":6.2,\"max\":6.2}}",
			"evidenceIds": [
				"ingersoll-rand-172l-20260926",
				"ingersoll-rand-172l-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "ingersoll-rand-172l-20260926",
			"sourceUrl": "https://powertools.ingersollrand.com/en-gb/asset-library/#page=18",
			"sourceLabel": "Ingersoll Rand, IR Industrial Air Surface Preparation Tool Catalog.pdf, bibliothèque officielle, p. 18, réf. 172L",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Valeur de la colonne CFM : 12. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min."
		},
		{
			"id": "ingersoll-rand-172l-20260926-workingpressurebar-1",
			"sourceUrl": "https://powertools.ingersollrand.com/en-gb/asset-library/#page=26",
			"sourceLabel": "Ingersoll Rand, IR Industrial Air Surface Preparation Tool Catalog.pdf, bibliothèque officielle, p. 26",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 90 psi avec l’équivalence de 6,2 bar, et tableaux de performances à 90 psi."
		},
		{
			"id": "ingersoll-rand-172l-reserved-20261031-1",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/bltd89674ca5491ef9a/blt4b8115c084109f9c/6968c806fa1f6657ebab2bee/16574121_ed6_F.pdf",
			"sourceLabel": "Ingersoll Rand 172L : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 6d85d6deeca96e70861f4e86d98e30b2cf0476f84ab28c3cf1065a28a72942c2. La notice constructeur alternative est accessible, tandis que l’ancienne bibliothèque reste en réserve d’accès. Elle ne rétablit pas un point débit/pression maximal apparié pour cette configuration ; les anciennes valeurs restent documentaires."
		}
	],
	"fieldSources": {
		"mpn": [
			"ingersoll-rand-172l-20260926"
		],
		"workingPressureBar": [
			"ingersoll-rand-172l-20260926-workingpressurebar-1"
		],
		"demandModel": [
			"ingersoll-rand-172l-reserved-20261031-1"
		],
		"demandExplanation": [
			"ingersoll-rand-172l-reserved-20261031-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La notice constructeur alternative est accessible, tandis que l’ancienne bibliothèque reste en réserve d’accès. Elle ne rétablit pas un point débit/pression maximal apparié pour cette configuration ; les anciennes valeurs restent documentaires."
};

export default product;
