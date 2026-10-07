import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-3104",
	"slug": "shinano-si-3104",
	"brand": "Shinano",
	"model": "SI-3104",
	"mpn": "SI-3104",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Shinano SI-3104",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-3104.webp",
		"alt": "Repères techniques Shinano SI-3104, référence SI-3104",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=11",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-3104, référence SI-3104. Le tableau fabricant publie 450 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Version et équipement : Plateau 125 mm, revêtement Leather selon Shinano ; orbite 5 mm ; sans aspiration intégrée. Vitesse à vide publiée : 10000 tr/min.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 15.9 CFM / 7.5 L/s, soit 450 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-3104.",
			"Version et équipement : Plateau 125 mm, revêtement Leather selon Shinano ; orbite 5 mm ; sans aspiration intégrée.",
			"Vitesse à vide publiée : 10000 tr/min.",
			"Masse publiée : 0.87 kg."
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
				"shinano-si-3104-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 15.9 CFM / 7.5 L/s, soit 450 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-3104-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Plateau 125 mm, revêtement Leather selon Shinano ; orbite 5 mm ; sans aspiration intégrée.",
			"evidenceIds": [
				"shinano-si-3104-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "10000 tr/min",
			"evidenceIds": [
				"shinano-si-3104-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.87 kg",
			"evidenceIds": [
				"shinano-si-3104-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-3104-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=11",
			"sourceLabel": "Shinano, catalogue général 2025, p. 11, réf. SI-3104",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 15.9 CFM / 7.5 L/s, soit 450 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-3104-20260926-workingpressurebar-1",
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
			"shinano-si-3104-20260926"
		],
		"workingPressureBar": [
			"shinano-si-3104-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-3104-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 450,
		"typical": 450,
		"max": 450
	}
};

export default product;
