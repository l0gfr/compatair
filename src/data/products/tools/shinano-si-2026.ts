import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2026",
	"slug": "shinano-si-2026",
	"brand": "Shinano",
	"model": "SI-2026",
	"mpn": "SI-2026",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Shinano SI-2026",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2026.webp",
		"alt": "Repères techniques Shinano SI-2026, référence SI-2026",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=13",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "La SI-2026 utilise un plateau de 125 mm et annonce 750 L/min au maximum à 6,3 bar. La SI-2351 à plateau de 180 mm publie 696 L/min : le plus petit plateau ne garantit donc pas le plus petit besoin d’air. La différence calculée est de 54 L/min.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 26.4 CFM / 12.5 L/s. Conversion du maximum publié : 12.5 × 60 = 750 L/min.",
			"Référence fabricant : SI-2026.",
			"Plateau publié : 125 mm.",
			"Vitesse à vide publiée : 5 500 tr/min.",
			"Broche : 5/8-11 UNC.",
			"La SI-2026 publie 5 500 tr/min à vide et une masse de 1,50 kg, contre 4 500 tr/min et 2,13 kg pour la SI-2351. Les deux tableaux indiquent une broche mâle 5/8-11 UNC."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"La broche commune ne valide pas un changement de diamètre. Respecter le plateau, le consommable et sa vitesse admissible ; aucune équivalence de rendement ou de finition n’est déduite."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-2026-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 26.4 CFM / 12.5 L/s. Conversion du maximum publié : 12.5 × 60 = 750 L/min.",
			"evidenceIds": [
				"shinano-si-2026-20260926"
			]
		},
		{
			"label": "Plateau publié",
			"value": "125 mm",
			"evidenceIds": [
				"shinano-si-2026-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "5 500 tr/min",
			"evidenceIds": [
				"shinano-si-2026-20260926"
			]
		},
		{
			"label": "Broche",
			"value": "5/8-11 UNC",
			"evidenceIds": [
				"shinano-si-2026-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2026-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=13",
			"sourceLabel": "Shinano, catalogue général 2025, p. 13, réf. SI-2026",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 26.4 CFM / 12.5 L/s. Conversion du maximum publié : 12.5 × 60 = 750 L/min."
		},
		{
			"id": "shinano-si-2026-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-2026-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2026-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-2026-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 750,
		"typical": 750,
		"max": 750
	}
};

export default product;
