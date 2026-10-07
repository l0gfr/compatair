import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2210",
	"slug": "shinano-si-2210",
	"brand": "Shinano",
	"model": "SI-2210",
	"mpn": "SI-2210",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Shinano SI-2210",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2210.webp",
		"alt": "Repères techniques Shinano SI-2210, référence SI-2210",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=15",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-2210, référence SI-2210. Le tableau fabricant publie 660 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Version et équipement : Plateau nominal 75 mm ; broche 7/16-20 UNF. Vitesse à vide publiée : 19000 tr/min.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 23.4 CFM / 11 L/s, soit 660 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-2210.",
			"Version et équipement : Plateau nominal 75 mm ; broche 7/16-20 UNF.",
			"Vitesse à vide publiée : 19000 tr/min.",
			"Masse publiée : 0.99 kg."
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
				"shinano-si-2210-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 23.4 CFM / 11 L/s, soit 660 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-2210-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Plateau nominal 75 mm ; broche 7/16-20 UNF.",
			"evidenceIds": [
				"shinano-si-2210-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "19000 tr/min",
			"evidenceIds": [
				"shinano-si-2210-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.99 kg",
			"evidenceIds": [
				"shinano-si-2210-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2210-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=15",
			"sourceLabel": "Shinano, catalogue général 2025, p. 15, réf. SI-2210",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 23.4 CFM / 11 L/s, soit 660 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2210-20260926-workingpressurebar-1",
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
			"shinano-si-2210-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2210-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-2210-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 660,
		"typical": 660,
		"max": 660
	}
};

export default product;
