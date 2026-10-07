import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-ag4-a2r",
	"slug": "shinano-si-ag4-a2r",
	"brand": "Shinano",
	"model": "SI-AG4-A2R",
	"mpn": "SI-AG4-A2R",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Shinano SI-AG4-A2R",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-ag4-a2r.webp",
		"alt": "Repères techniques Shinano SI-AG4-A2R, référence SI-AG4-A2R",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_Industrial-Air-Tools_2025.pdf#page=4",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-AG4-A2R, référence SI-AG4-A2R. Le tableau fabricant publie 600 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 13500 tr/min. Puissance moteur publiée : 600 W.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation fabricant publiée : 10 L/s, soit 600 L/min. Le tableau industriel ne précise pas s’il s’agit d’un maximum.",
			"Référence fabricant : SI-AG4-A2R.",
			"Vitesse à vide publiée : 13500 tr/min.",
			"Puissance moteur publiée : 600 W.",
			"Montage et commande : Disque de 100 mm ; interface publiée : 15,8 mm, M8 × 1,25."
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
				"shinano-si-ag4-a2r-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation fabricant publiée : 10 L/s, soit 600 L/min. Le tableau industriel ne précise pas s’il s’agit d’un maximum.",
			"evidenceIds": [
				"shinano-si-ag4-a2r-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "13500 tr/min",
			"evidenceIds": [
				"shinano-si-ag4-a2r-20260926"
			]
		},
		{
			"label": "Puissance moteur publiée",
			"value": "600 W",
			"evidenceIds": [
				"shinano-si-ag4-a2r-20260926"
			]
		},
		{
			"label": "Montage et commande",
			"value": "Disque de 100 mm ; interface publiée : 15,8 mm, M8 × 1,25.",
			"evidenceIds": [
				"shinano-si-ag4-a2r-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1750 g",
			"evidenceIds": [
				"shinano-si-ag4-a2r-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-ag4-a2r-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_Industrial-Air-Tools_2025.pdf#page=4",
			"sourceLabel": "Shinano, Industrial Air Tools 2025, p. 4, réf. SI-AG4-A2R",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation fabricant publiée : 10 L/s, soit 600 L/min. Le tableau industriel ne précise pas s’il s’agit d’un maximum."
		},
		{
			"id": "shinano-si-ag4-a2r-20260926-workingpressurebar-1",
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
			"shinano-si-ag4-a2r-20260926"
		],
		"workingPressureBar": [
			"shinano-si-ag4-a2r-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-ag4-a2r-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	}
};

export default product;
