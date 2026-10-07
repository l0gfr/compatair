import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2050ag",
	"slug": "shinano-si-2050ag",
	"brand": "Shinano",
	"model": "SI-2050AG",
	"mpn": "SI-2050AG",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Shinano SI-2050AG",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2050ag.webp",
		"alt": "Repères techniques Shinano SI-2050AG, référence SI-2050AG",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=21",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-2050AG, référence SI-2050AG. Le tableau fabricant publie 186 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 21 000 tr/min. Disque publié : 30 mm.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 6.6 CFM / 3.1 L/s. Conversion du maximum publié : 3.1 × 60 = 186 L/min.",
			"Référence fabricant : SI-2050AG.",
			"Vitesse à vide publiée : 21 000 tr/min.",
			"Disque publié : 30 mm.",
			"Broche : M7 × 0,75."
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
				"shinano-si-2050ag-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 6.6 CFM / 3.1 L/s. Conversion du maximum publié : 3.1 × 60 = 186 L/min.",
			"evidenceIds": [
				"shinano-si-2050ag-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "21 000 tr/min",
			"evidenceIds": [
				"shinano-si-2050ag-20260926"
			]
		},
		{
			"label": "Disque publié",
			"value": "30 mm",
			"evidenceIds": [
				"shinano-si-2050ag-20260926"
			]
		},
		{
			"label": "Broche",
			"value": "M7 × 0,75",
			"evidenceIds": [
				"shinano-si-2050ag-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,23 kg",
			"evidenceIds": [
				"shinano-si-2050ag-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2050ag-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=21",
			"sourceLabel": "Shinano, catalogue général 2025, p. 21, réf. SI-2050AG",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 6.6 CFM / 3.1 L/s. Conversion du maximum publié : 3.1 × 60 = 186 L/min."
		},
		{
			"id": "shinano-si-2050ag-20260926-workingpressurebar-1",
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
			"shinano-si-2050ag-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2050ag-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-2050ag-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 186,
		"typical": 186,
		"max": 186
	}
};

export default product;
