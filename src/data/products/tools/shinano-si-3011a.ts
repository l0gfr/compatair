import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-3011a",
	"slug": "shinano-si-3011a",
	"brand": "Shinano",
	"model": "SI-3011A",
	"mpn": "SI-3011A",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "Shinano SI-3011A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-3011a.webp",
		"alt": "Repères techniques Shinano SI-3011A, référence SI-3011A",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=13",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-3011A, référence SI-3011A. Le tableau fabricant publie 426 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Version et équipement : Plateau rectangulaire 75 × 100 mm, revêtement Leather selon Shinano ; orbite 4 mm ; aspiration autonome. Vitesse à vide publiée : 10000 tr/min.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 15 CFM / 7.1 L/s, soit 426 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-3011A.",
			"Version et équipement : Plateau rectangulaire 75 × 100 mm, revêtement Leather selon Shinano ; orbite 4 mm ; aspiration autonome.",
			"Vitesse à vide publiée : 10000 tr/min.",
			"Masse publiée : 1.15 kg."
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
				"shinano-si-3011a-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 15 CFM / 7.1 L/s, soit 426 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-3011a-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Plateau rectangulaire 75 × 100 mm, revêtement Leather selon Shinano ; orbite 4 mm ; aspiration autonome.",
			"evidenceIds": [
				"shinano-si-3011a-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "10000 tr/min",
			"evidenceIds": [
				"shinano-si-3011a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.15 kg",
			"evidenceIds": [
				"shinano-si-3011a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-3011a-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=13",
			"sourceLabel": "Shinano, catalogue général 2025, p. 13, réf. SI-3011A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 15 CFM / 7.1 L/s, soit 426 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-3011a-20260926-workingpressurebar-1",
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
			"shinano-si-3011a-20260926"
		],
		"workingPressureBar": [
			"shinano-si-3011a-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-3011a-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 426,
		"typical": 426,
		"max": 426
	}
};

export default product;
