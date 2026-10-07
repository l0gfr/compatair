import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-3018am",
	"slug": "shinano-si-3018am",
	"brand": "Shinano",
	"model": "SI-3018AM",
	"mpn": "SI-3018AM",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "Shinano SI-3018AM",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-3018am.webp",
		"alt": "Repères techniques Shinano SI-3018AM, référence SI-3018AM",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=13",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-3018AM, référence SI-3018AM. Le tableau fabricant publie 528 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Version et équipement : Plateau rectangulaire 95 × 175 mm, autoagrippant (Velcro) ; orbite 5 mm ; aspiration autonome. Vitesse à vide publiée : 7000 tr/min.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 18.6 CFM / 8.8 L/s, soit 528 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-3018AM.",
			"Version et équipement : Plateau rectangulaire 95 × 175 mm, autoagrippant (Velcro) ; orbite 5 mm ; aspiration autonome.",
			"Vitesse à vide publiée : 7000 tr/min.",
			"Masse publiée : 2.31 kg."
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
				"shinano-si-3018am-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 18.6 CFM / 8.8 L/s, soit 528 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-3018am-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Plateau rectangulaire 95 × 175 mm, autoagrippant (Velcro) ; orbite 5 mm ; aspiration autonome.",
			"evidenceIds": [
				"shinano-si-3018am-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "7000 tr/min",
			"evidenceIds": [
				"shinano-si-3018am-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.31 kg",
			"evidenceIds": [
				"shinano-si-3018am-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-3018am-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=13",
			"sourceLabel": "Shinano, catalogue général 2025, p. 13, réf. SI-3018AM",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 18.6 CFM / 8.8 L/s, soit 528 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-3018am-20260926-workingpressurebar-1",
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
			"shinano-si-3018am-20260926"
		],
		"workingPressureBar": [
			"shinano-si-3018am-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-3018am-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 528,
		"typical": 528,
		"max": 528
	}
};

export default product;
