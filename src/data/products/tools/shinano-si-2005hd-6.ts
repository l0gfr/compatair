import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2005hd-6",
	"slug": "shinano-si-2005hd-6",
	"brand": "Shinano",
	"model": "SI-2005HD-6",
	"mpn": "SI-2005HD-6",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Shinano SI-2005HD-6",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2005hd-6.webp",
		"alt": "Repères techniques Shinano SI-2005HD-6, référence SI-2005HD-6",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=20",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-2005HD-6 : meuleuse à pince de 6 mm, contre 1/4 pouce pour le SI-2005HD. Le tableau commun conserve 200 W, 20 000 tr/min et 6,8 L/s maximum, soit 408 L/min à 6,3 bar. La différence de pince doit être vérifiée sur la queue de l’accessoire : un besoin d’air identique ne rend pas les deux interfaces équivalentes.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 14.4 CFM / 6.8 L/s, soit 408 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-2005HD-6.",
			"Version et équipement : Pince 6 mm ; puissance publiée 200 W.",
			"Vitesse à vide publiée : 20000 tr/min.",
			"Masse publiée : 0.56 kg."
		],
		"limitations": [
			"La vitesse et le diamètre admissibles de l’accessoire restent ceux du montage réel. Aucun équivalent de pince n’est déduit d’un diamètre arrondi.",
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
				"shinano-si-2005hd-6-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 14.4 CFM / 6.8 L/s, soit 408 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-2005hd-6-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Pince 6 mm ; puissance publiée 200 W.",
			"evidenceIds": [
				"shinano-si-2005hd-6-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "20000 tr/min",
			"evidenceIds": [
				"shinano-si-2005hd-6-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.56 kg",
			"evidenceIds": [
				"shinano-si-2005hd-6-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2005hd-6-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=20",
			"sourceLabel": "Shinano, catalogue général 2025, p. 20, réf. SI-2005HD-6",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 14.4 CFM / 6.8 L/s, soit 408 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2005hd-6-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-2005hd-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=20",
			"sourceLabel": "Shinano, catalogue général 2025, p. 20, réf. SI-2005HD",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 14.4 CFM / 6.8 L/s, soit 408 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2005hd-20260926-workingpressurebar-1",
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
			"shinano-si-2005hd-6-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2005hd-6-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-2005hd-6-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 408,
		"typical": 408,
		"max": 408
	}
};

export default product;
