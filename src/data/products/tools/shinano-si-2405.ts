import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2405",
	"slug": "shinano-si-2405",
	"brand": "Shinano",
	"model": "SI-2405",
	"mpn": "SI-2405",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "Shinano SI-2405",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2405.webp",
		"alt": "Repères techniques Shinano SI-2405, référence SI-2405",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=18",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-2405 : polisseuse à rotation simple, plateau de 150 mm et broche femelle 5/16-24 UNF. La SI-2400 voisine reçoit 180 mm sur une broche mâle 5/8-11 UNC. Le SI-2405 donne 1 800 tr/min et 7,9 L/s maximum à 6,3 bar, soit 474 L/min, contre 2 000 tr/min et 678 L/min. Le tampon et la liaison mécanique distinguent le travail avant le seul débit.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 16.8 CFM / 7.9 L/s, soit 474 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-2405.",
			"Version et équipement : Rotation simple ; plateau 150 mm ; broche femelle 5/16-24 UNF.",
			"Vitesse à vide publiée : 1800 tr/min.",
			"Masse publiée : 1.17 kg."
		],
		"limitations": [
			"Un adaptateur n’est pas validé par ces tableaux. Le débit plus faible ne démontre ni la même productivité ni le même échauffement de surface.",
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
				"shinano-si-2405-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 16.8 CFM / 7.9 L/s, soit 474 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-2405-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Rotation simple ; plateau 150 mm ; broche femelle 5/16-24 UNF.",
			"evidenceIds": [
				"shinano-si-2405-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "1800 tr/min",
			"evidenceIds": [
				"shinano-si-2405-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.17 kg",
			"evidenceIds": [
				"shinano-si-2405-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2405-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=18",
			"sourceLabel": "Shinano, catalogue général 2025, p. 18, réf. SI-2405",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 16.8 CFM / 7.9 L/s, soit 474 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2405-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-2400-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=18",
			"sourceLabel": "Shinano, catalogue général 2025, p. 18, réf. SI-2400",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 24 CFM / 11.3 L/s, soit 678 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2400-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-3100p-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=18",
			"sourceLabel": "Shinano, catalogue général 2025, p. 18, réf. SI-3100P",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 13.8 CFM / 6.5 L/s, soit 390 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-3100p-20260926-workingpressurebar-1",
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
			"shinano-si-2405-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2405-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-2405-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 474,
		"typical": 474,
		"max": 474
	}
};

export default product;
