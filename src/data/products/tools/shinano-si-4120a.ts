import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-4120a",
	"slug": "shinano-si-4120a",
	"brand": "Shinano",
	"model": "SI-4120A",
	"mpn": "SI-4120A",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Shinano SI-4120A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-4120a.webp",
		"alt": "Repères techniques Shinano SI-4120A, référence SI-4120A",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=27",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-4120A, référence SI-4120A. Le tableau fabricant publie 510 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Masse publiée : 1,60 kg. Emmanchement : 0,401 pouce / 10,2 mm.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 18 CFM / 8.5 L/s. Conversion du maximum publié : 8.5 × 60 = 510 L/min.",
			"Référence fabricant : SI-4120A.",
			"Masse publiée : 1,60 kg.",
			"Emmanchement : 0,401 pouce / 10,2 mm.",
			"Cadence à vide : 2 600 coups/min."
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
				"shinano-si-4120a-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 18 CFM / 8.5 L/s. Conversion du maximum publié : 8.5 × 60 = 510 L/min.",
			"evidenceIds": [
				"shinano-si-4120a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,60 kg",
			"evidenceIds": [
				"shinano-si-4120a-20260926"
			]
		},
		{
			"label": "Emmanchement",
			"value": "0,401 pouce / 10,2 mm",
			"evidenceIds": [
				"shinano-si-4120a-20260926"
			]
		},
		{
			"label": "Cadence à vide",
			"value": "2 600 coups/min",
			"evidenceIds": [
				"shinano-si-4120a-20260926"
			]
		},
		{
			"label": "Course maximale publiée",
			"value": "10 mm",
			"evidenceIds": [
				"shinano-si-4120a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-4120a-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=27",
			"sourceLabel": "Shinano, catalogue général 2025, p. 27, réf. SI-4120A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 18 CFM / 8.5 L/s. Conversion du maximum publié : 8.5 × 60 = 510 L/min."
		},
		{
			"id": "shinano-si-4120a-20260926-workingpressurebar-1",
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
			"shinano-si-4120a-20260926"
		],
		"workingPressureBar": [
			"shinano-si-4120a-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-4120a-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 510,
		"typical": 510,
		"max": 510
	}
};

export default product;
