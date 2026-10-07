import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-4700b",
	"slug": "shinano-si-4700b",
	"brand": "Shinano",
	"model": "SI-4700B",
	"mpn": "SI-4700B",
	"categoryId": "scie",
	"category": "scie",
	"label": "Shinano SI-4700B",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-4700b.webp",
		"alt": "Repères techniques Shinano SI-4700B, référence SI-4700B",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=24",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-4700B, référence SI-4700B. Le tableau fabricant publie 204 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Version et équipement : Scie alternative : course 10 mm ; cadence 10 000 coups/min ; capacité acier publiée 3 mm. Masse publiée : 0.58 kg.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 7.2 CFM / 3.4 L/s, soit 204 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-4700B.",
			"Version et équipement : Scie alternative : course 10 mm ; cadence 10 000 coups/min ; capacité acier publiée 3 mm.",
			"Masse publiée : 0.58 kg."
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
				"shinano-si-4700b-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 7.2 CFM / 3.4 L/s, soit 204 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-4700b-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Scie alternative : course 10 mm ; cadence 10 000 coups/min ; capacité acier publiée 3 mm.",
			"evidenceIds": [
				"shinano-si-4700b-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.58 kg",
			"evidenceIds": [
				"shinano-si-4700b-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-4700b-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=24",
			"sourceLabel": "Shinano, catalogue général 2025, p. 24, réf. SI-4700B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 7.2 CFM / 3.4 L/s, soit 204 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-4700b-20260926-workingpressurebar-1",
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
			"shinano-si-4700b-20260926"
		],
		"workingPressureBar": [
			"shinano-si-4700b-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-4700b-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 204,
		"typical": 204,
		"max": 204
	}
};

export default product;
