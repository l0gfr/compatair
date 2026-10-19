import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1070",
	"slug": "shinano-si-1070",
	"brand": "Shinano",
	"model": "SI-1070",
	"mpn": "SI-1070",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Shinano SI-1070",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1070.webp",
		"alt": "Repères techniques Shinano SI-1070, référence SI-1070",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=8",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-1070 : visseuse à chocs pour capacité annoncée de 6 mm, à distinguer de la SI-1170 à réglage par bague. Le catalogue publie 5,9 L/s maximum, soit 354 L/min, à 6,3 bar en fonctionnement. La fonction de vissage et la commande doivent être choisies avant de comparer le débit seul.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 12.6 CFM / 5.9 L/s. Conversion du maximum publié : 5.9 × 60 = 354 L/min.",
			"Référence fabricant : SI-1070.",
			"Couple maximal publié : 35 Nm.",
			"Vitesse à vide publiée : 11 000 tr/min.",
			"Masse publiée : 0,65 kg."
		],
		"limitations": [
			"Le maximum d’air ne fournit pas un couple de serrage garanti sur toute fixation. La douille, l’embout et la procédure d’assemblage restent à définir.",
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
				"shinano-si-1070-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 12.6 CFM / 5.9 L/s. Conversion du maximum publié : 5.9 × 60 = 354 L/min.",
			"evidenceIds": [
				"shinano-si-1070-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "35 Nm",
			"evidenceIds": [
				"shinano-si-1070-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "11 000 tr/min",
			"evidenceIds": [
				"shinano-si-1070-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,65 kg",
			"evidenceIds": [
				"shinano-si-1070-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1070-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=8",
			"sourceLabel": "Shinano, catalogue général 2025, p. 8, réf. SI-1070",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 12.6 CFM / 5.9 L/s. Conversion du maximum publié : 5.9 × 60 = 354 L/min."
		},
		{
			"id": "shinano-si-1070-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-1365d-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=7",
			"sourceLabel": "Shinano, catalogue général 2025, p. 7, réf. SI-1365D",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 19.8 CFM / 9.3 L/s. Conversion du maximum publié : 9.3 × 60 = 558 L/min."
		},
		{
			"id": "shinano-si-1365d-20260926-workingpressurebar-1",
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
			"shinano-si-1070-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1070-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-1070-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 354,
		"typical": 354,
		"max": 354
	}
};

export default product;
