import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1455sr",
	"slug": "shinano-si-1455sr",
	"brand": "Shinano",
	"model": "SI-1455SR",
	"mpn": "SI-1455SR",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Shinano SI-1455SR",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1455sr.webp",
		"alt": "Repères techniques Shinano SI-1455SR, référence SI-1455SR",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=5",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-1455SR, référence SI-1455SR. Le tableau fabricant publie 816 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple maximal publié : 740 Nm. Longueur publiée : 112 mm.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 28.8 CFM / 13.6 L/s. Conversion du maximum publié : 13.6 × 60 = 816 L/min.",
			"Référence fabricant : SI-1455SR.",
			"Couple maximal publié : 740 Nm.",
			"Longueur publiée : 112 mm.",
			"Masse publiée : 1,17 kg."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-1455sr-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 28.8 CFM / 13.6 L/s. Conversion du maximum publié : 13.6 × 60 = 816 L/min.",
			"evidenceIds": [
				"shinano-si-1455sr-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "740 Nm",
			"evidenceIds": [
				"shinano-si-1455sr-20260926"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "112 mm",
			"evidenceIds": [
				"shinano-si-1455sr-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,17 kg",
			"evidenceIds": [
				"shinano-si-1455sr-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1455sr-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=5",
			"sourceLabel": "Shinano, catalogue général 2025, p. 5, réf. SI-1455SR",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 28.8 CFM / 13.6 L/s. Conversion du maximum publié : 13.6 × 60 = 816 L/min."
		},
		{
			"id": "shinano-si-1455sr-20260926-workingpressurebar-1",
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
			"shinano-si-1455sr-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1455sr-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-1455sr-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 816,
		"typical": 816,
		"max": 816
	}
};

export default product;
