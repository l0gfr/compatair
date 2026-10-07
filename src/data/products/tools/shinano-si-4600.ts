import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-4600",
	"slug": "shinano-si-4600",
	"brand": "Shinano",
	"model": "SI-4600",
	"mpn": "SI-4600",
	"categoryId": "grignoteuse",
	"category": "grignoteuse",
	"label": "Shinano SI-4600",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-4600.webp",
		"alt": "Repères techniques Shinano SI-4600, référence SI-4600",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=25",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-4600, référence SI-4600. Le tableau fabricant publie 558 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Version et équipement : Largeur de coupe 4,5 mm ; capacité publiée 1,6 mm ; vitesse à vide publiée 2 600 tr/min. Masse publiée : 1 kg.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 19.8 CFM / 9.3 L/s, soit 558 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-4600.",
			"Version et équipement : Largeur de coupe 4,5 mm ; capacité publiée 1,6 mm ; vitesse à vide publiée 2 600 tr/min.",
			"Masse publiée : 1 kg."
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
				"shinano-si-4600-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 19.8 CFM / 9.3 L/s, soit 558 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-4600-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Largeur de coupe 4,5 mm ; capacité publiée 1,6 mm ; vitesse à vide publiée 2 600 tr/min.",
			"evidenceIds": [
				"shinano-si-4600-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1 kg",
			"evidenceIds": [
				"shinano-si-4600-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-4600-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=25",
			"sourceLabel": "Shinano, catalogue général 2025, p. 25, réf. SI-4600",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 19.8 CFM / 9.3 L/s, soit 558 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-4600-20260926-workingpressurebar-1",
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
			"shinano-si-4600-20260926"
		],
		"workingPressureBar": [
			"shinano-si-4600-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-4600-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 558,
		"typical": 558,
		"max": 558
	}
};

export default product;
