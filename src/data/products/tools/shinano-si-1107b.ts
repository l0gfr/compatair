import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1107b",
	"slug": "shinano-si-1107b",
	"brand": "Shinano",
	"model": "SI-1107B",
	"mpn": "SI-1107B",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Shinano SI-1107B",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1107b.webp",
		"alt": "Repères techniques Shinano SI-1107B, référence SI-1107B",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=9",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-1107B, référence SI-1107B. Le tableau fabricant publie 306 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple maximal publié : 30 Nm. Vitesse à vide publiée : 300 tr/min.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 10.8 CFM / 5.1 L/s. Conversion du maximum publié : 5.1 × 60 = 306 L/min.",
			"Référence fabricant : SI-1107B.",
			"Couple maximal publié : 30 Nm.",
			"Vitesse à vide publiée : 300 tr/min.",
			"Masse publiée : 0,39 kg."
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
				"shinano-si-1107b-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 10.8 CFM / 5.1 L/s. Conversion du maximum publié : 5.1 × 60 = 306 L/min.",
			"evidenceIds": [
				"shinano-si-1107b-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "30 Nm",
			"evidenceIds": [
				"shinano-si-1107b-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "300 tr/min",
			"evidenceIds": [
				"shinano-si-1107b-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,39 kg",
			"evidenceIds": [
				"shinano-si-1107b-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1107b-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=9",
			"sourceLabel": "Shinano, catalogue général 2025, p. 9, réf. SI-1107B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 10.8 CFM / 5.1 L/s. Conversion du maximum publié : 5.1 × 60 = 306 L/min."
		},
		{
			"id": "shinano-si-1107b-20260926-workingpressurebar-1",
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
			"shinano-si-1107b-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1107b-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-1107b-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 306,
		"typical": 306,
		"max": 306
	}
};

export default product;
