import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2741",
	"slug": "shinano-si-2741",
	"brand": "Shinano",
	"model": "SI-2741",
	"mpn": "SI-2741",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Shinano SI-2741",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2741.webp",
		"alt": "Repères techniques Shinano SI-2741, référence SI-2741",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=11",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-2741 : le tableau donne une bande de 12 × 330 mm, contre 10 × 330 mm pour la SI-2740. Les deux publient un bras réglable sur 160°, 15 000 tr/min et 9,3 L/s maximum, soit 558 L/min à 6,3 bar. La largeur de bande distingue l’accès et le consommable ; le besoin d’air reste commun.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 19.8 CFM / 9.3 L/s, soit 558 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-2741.",
			"Version et équipement : Bande 12 × 330 mm ; bras réglable sur 160° ; puissance publiée 317 W.",
			"Vitesse à vide publiée : 15000 tr/min.",
			"Masse publiée : 0.73 kg."
		],
		"limitations": [
			"Le titre de famille porte aussi 10mm : le tableau de référence doit être rapproché de la bande effectivement livrée. Aucun consommable de la SI-2740 n’est déclaré interchangeable par défaut.",
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
				"shinano-si-2741-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 19.8 CFM / 9.3 L/s, soit 558 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-2741-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Bande 12 × 330 mm ; bras réglable sur 160° ; puissance publiée 317 W.",
			"evidenceIds": [
				"shinano-si-2741-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "15000 tr/min",
			"evidenceIds": [
				"shinano-si-2741-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.73 kg",
			"evidenceIds": [
				"shinano-si-2741-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2741-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=11",
			"sourceLabel": "Shinano, catalogue général 2025, p. 11, réf. SI-2741",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 19.8 CFM / 9.3 L/s, soit 558 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2741-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-2740-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=11",
			"sourceLabel": "Shinano, catalogue général 2025, p. 11, réf. SI-2740",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 19.8 CFM / 9.3 L/s, soit 558 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2740-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-2830-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=11",
			"sourceLabel": "Shinano, catalogue général 2025, p. 11, réf. SI-2830",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 31.8 CFM / 15 L/s. Conversion du maximum publié : 15 × 60 = 900 L/min."
		},
		{
			"id": "shinano-si-2830-20260926-workingpressurebar-1",
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
			"shinano-si-2741-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2741-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-2741-20260926"
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
