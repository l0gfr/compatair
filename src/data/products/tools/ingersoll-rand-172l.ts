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
		"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/bltd89674ca5491ef9a/blt4b8115c084109f9c/6968c806fa1f6657ebab2bee/16574121_ed6_F.pdf#page=2",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Ingersoll Rand 172L. La notice 16574121 édition 6 distingue 172L,course 14 mm et 5500 coups/min, de 182L,course 27 mm et 4000 coups/min. Elle ne publie pas le débit historique 12 cfm. Ce débit est retiré de la synthèse courante et conservé dans la transcription historique, sans le transférer de la bibliothèque inaccessible. Commande : Par levier. Cadence de frappe : 5 500 coups/min. Course de piston : 9/16 pouce (14 mm publiés).",
		"verifiedFacts": [
			"Commande : Par levier.",
			"Cadence de frappe : 5 500 coups/min.",
			"Course de piston : 9/16 pouce (14 mm publiés)."
		],
		"limitations": [
			"Le catalogue est conservé dans la bibliothèque du fabricant ; la disponibilité commerciale du modèle doit être confirmée.",
			"Les valeurs sont déclarées par le fabricant. Les débits en CFM ne sont pas des mesures indépendantes CompatAir.",
			"La notice constructeur alternative est accessible, tandis que l’ancienne bibliothèque reste en réserve d’accès. Elle ne rétablit pas un point débit/pression maximal apparié pour cette configuration ; les anciennes valeurs restent documentaires.",
			"La bibliothèque historique reste en réserve d’accès. La notice alternative ne rétablit pas ce lien."
		]
	},
	"specifications": [
		{
			"label": "Commande",
			"value": "Par levier",
			"evidenceIds": [
				"ingersoll-rand-172l-reserved-20261101-1"
			]
		},
		{
			"label": "Cadence de frappe",
			"value": "5 500 coups/min",
			"evidenceIds": [
				"ingersoll-rand-172l-reserved-20261101-1"
			]
		},
		{
			"label": "Course de piston",
			"value": "9/16 pouce (14 mm publiés)",
			"evidenceIds": [
				"ingersoll-rand-172l-reserved-20261101-1"
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
		},
		{
			"id": "ingersoll-rand-172l-reserved-20261101-1",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/bltd89674ca5491ef9a/blt4b8115c084109f9c/6968c806fa1f6657ebab2bee/16574121_ed6_F.pdf#page=2",
			"sourceLabel": "Ingersoll Rand : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 6d85d6deeca96e70861f4e86d98e30b2cf0476f84ab28c3cf1065a28a72942c2. Passage page=2. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"ingersoll-rand-172l-reserved-20261101-1"
		],
		"workingPressureBar": [
			"ingersoll-rand-172l-reserved-20261101-1"
		],
		"demandModel": [
			"ingersoll-rand-172l-reserved-20261101-1"
		],
		"demandExplanation": [
			"ingersoll-rand-172l-reserved-20261101-1"
		],
		"editorial": [
			"ingersoll-rand-172l-reserved-20261101-1"
		],
		"specifications": [
			"ingersoll-rand-172l-reserved-20261101-1"
		],
		"image": [
			"ingersoll-rand-172l-reserved-20261101-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La notice constructeur alternative est accessible, tandis que l’ancienne bibliothèque reste en réserve d’accès. Elle ne rétablit pas un point débit/pression maximal apparié pour cette configuration ; les anciennes valeurs restent documentaires."
};

export default product;
