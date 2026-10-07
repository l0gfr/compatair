import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1870",
	"slug": "shinano-si-1870",
	"brand": "Shinano",
	"model": "SI-1870",
	"mpn": "SI-1870",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Shinano SI-1870",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1870.webp",
		"alt": "Repères techniques Shinano SI-1870, référence SI-1870",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=6",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-1870, référence SI-1870. Le tableau fabricant publie 1 950 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 4 400 tr/min. Masse publiée : 10,6 kg.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 69 CFM / 32.5 L/s. Conversion du maximum publié : 32.5 × 60 = 1950 L/min.",
			"Référence fabricant : SI-1870.",
			"Vitesse à vide publiée : 4 400 tr/min.",
			"Masse publiée : 10,6 kg."
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
				"shinano-si-1870-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 69 CFM / 32.5 L/s. Conversion du maximum publié : 32.5 × 60 = 1950 L/min.",
			"evidenceIds": [
				"shinano-si-1870-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "4 400 tr/min",
			"evidenceIds": [
				"shinano-si-1870-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "10,6 kg",
			"evidenceIds": [
				"shinano-si-1870-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1870-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=6",
			"sourceLabel": "Shinano, catalogue général 2025, p. 6, réf. SI-1870",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 69 CFM / 32.5 L/s. Conversion du maximum publié : 32.5 × 60 = 1950 L/min."
		},
		{
			"id": "shinano-si-1870-20260926-workingpressurebar-1",
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
			"shinano-si-1870-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1870-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-1870-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1950,
		"typical": 1950,
		"max": 1950
	}
};

export default product;
