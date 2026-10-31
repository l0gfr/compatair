import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ingersoll-rand-g1a120rs812",
	"slug": "ingersoll-rand-g1a120rs812",
	"brand": "Ingersoll Rand",
	"model": "G1A120RS812",
	"mpn": "G1A120RS812",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Ingersoll Rand G1A120RS812",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/ingersoll-rand-g1a120rs812.webp",
		"alt": "Repères techniques Ingersoll Rand G1A120RS812, référence G1A120RS812",
		"sourceUrl": "https://powertools.ingersollrand.com/en-gb/asset-library/#page=5",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Ingersoll Rand G1A120RS812. Ponceuse à bande 13 × 305 mm, vitesse à vide 12 000 tr/min et puissance 0,3 kW. La table constructeur ne publie pas de consommation ; le calcul attend une donnée appariée à sa pression de mesure.",
		"verifiedFacts": [
			"Le fabricant donne les performances à 90 psi, avec l’équivalence publiée de 6,2 bar dans les consignes du même catalogue.",
			"Valeur de la colonne CFM : 19. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min.",
			"Référence fabricant : G1A120RS812.",
			"Puissance publiée : 0.4 hp.",
			"Vitesse à vide : 12000 tr/min.",
			"Échappement : Arrière.",
			"Valeur documentaire conservée : 538.02 L/min. La fiche G1 donne la référence exacte et sa bande 13 × 305 mm, sans consommation. La notice générique liée ne couvre pas cette référence ; le débit reste non dimensionnant."
		],
		"limitations": [
			"Le catalogue est conservé dans la bibliothèque du fabricant ; la disponibilité commerciale du modèle doit être confirmée.",
			"Les valeurs sont déclarées par le fabricant. Les débits en CFM ne sont pas des mesures indépendantes CompatAir.",
			"La fiche G1 donne la référence exacte et sa bande 13 × 305 mm, sans consommation. La notice générique liée ne couvre pas cette référence ; le débit reste non dimensionnant."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le fabricant donne les performances à 90 psi, avec l’équivalence publiée de 6,2 bar dans les consignes du même catalogue.",
			"evidenceIds": [
				"ingersoll-rand-g1a120rs812-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Valeur documentaire conservée : 538.02 L/min. La fiche G1 donne la référence exacte et sa bande 13 × 305 mm, sans consommation. La notice générique liée ne couvre pas cette référence ; le débit reste non dimensionnant.",
			"evidenceIds": [
				"ingersoll-rand-g1a120rs812-reserved-20261031-1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0.4 hp",
			"evidenceIds": [
				"ingersoll-rand-g1a120rs812-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12000 tr/min",
			"evidenceIds": [
				"ingersoll-rand-g1a120rs812-20260926"
			]
		},
		{
			"label": "Échappement",
			"value": "Arrière",
			"evidenceIds": [
				"ingersoll-rand-g1a120rs812-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":538.02,\"typical\":538.02,\"max\":538.02},\"workingPressureBar\":{\"min\":6.2,\"typical\":6.2,\"max\":6.2}}",
			"evidenceIds": [
				"ingersoll-rand-g1a120rs812-20260926",
				"ingersoll-rand-g1a120rs812-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "ingersoll-rand-g1a120rs812-20260926",
			"sourceUrl": "https://powertools.ingersollrand.com/en-gb/asset-library/#page=5",
			"sourceLabel": "Ingersoll Rand, IR Industrial Air Surface Preparation Tool Catalog.pdf, bibliothèque officielle, p. 5, réf. G1A120RS812",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Valeur de la colonne CFM : 19. Conversion en L/min par le facteur 28,316846592 ; arrondi à 0,001 L/min."
		},
		{
			"id": "ingersoll-rand-g1a120rs812-20260926-workingpressurebar-1",
			"sourceUrl": "https://powertools.ingersollrand.com/en-gb/asset-library/#page=26",
			"sourceLabel": "Ingersoll Rand, IR Industrial Air Surface Preparation Tool Catalog.pdf, bibliothèque officielle, p. 26",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 90 psi avec l’équivalence de 6,2 bar, et tableaux de performances à 90 psi."
		},
		{
			"id": "ingersoll-rand-g1a120rs812-reserved-20261031-1",
			"sourceUrl": "https://powertools.ingersollrand.com/en/surface-preparation-finishing-tools/sanders-polishers-buffers/g1-angle-sander/",
			"sourceLabel": "Ingersoll Rand G1, tableau de la référence G1A120RS812",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 d2eabbaceb8257d5566a700d778f995a262219911922cb69ae6f1d850e1808b5 du texte Markdown restitué par Firecrawl, réponse 200 sans cache. Tableau G1A120RS812 : bande 13 × 305 mm, 12 000 tr/min, puissance 0,3 kW. Aucune consommation n’est donnée dans cette table. La notice générique G1 liée couvre d’autres références et ne valide pas le débit de ce modèle. L’échec de lecture HTML directe demeure consigné."
		}
	],
	"fieldSources": {
		"mpn": [
			"ingersoll-rand-g1a120rs812-20260926"
		],
		"workingPressureBar": [
			"ingersoll-rand-g1a120rs812-20260926-workingpressurebar-1"
		],
		"demandModel": [
			"ingersoll-rand-g1a120rs812-reserved-20261031-1"
		],
		"demandExplanation": [
			"ingersoll-rand-g1a120rs812-reserved-20261031-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La fiche G1 donne la référence exacte et sa bande 13 × 305 mm, sans consommation. La notice générique liée ne couvre pas cette référence ; le débit reste non dimensionnant."
};

export default product;
