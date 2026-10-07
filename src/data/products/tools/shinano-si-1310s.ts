import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1310s",
	"slug": "shinano-si-1310s",
	"brand": "Shinano",
	"model": "SI-1310S",
	"mpn": "SI-1310S",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Shinano SI-1310S",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1310s.webp",
		"alt": "Repères techniques Shinano SI-1310S, référence SI-1310S",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=4",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-1310S, référence SI-1310S. Le tableau fabricant publie 354 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple maximal publié : 40 Nm. Vitesse à vide publiée : 10 000 tr/min.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 12.6 CFM / 5.9 L/s. Conversion du maximum publié : 5.9 × 60 = 354 L/min.",
			"Référence fabricant : SI-1310S.",
			"Couple maximal publié : 40 Nm.",
			"Vitesse à vide publiée : 10 000 tr/min.",
			"Masse publiée : 0,63 kg."
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
				"shinano-si-1310s-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 12.6 CFM / 5.9 L/s. Conversion du maximum publié : 5.9 × 60 = 354 L/min.",
			"evidenceIds": [
				"shinano-si-1310s-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "40 Nm",
			"evidenceIds": [
				"shinano-si-1310s-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "10 000 tr/min",
			"evidenceIds": [
				"shinano-si-1310s-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,63 kg",
			"evidenceIds": [
				"shinano-si-1310s-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1310s-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=4",
			"sourceLabel": "Shinano, catalogue général 2025, p. 4, réf. SI-1310S",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 12.6 CFM / 5.9 L/s. Conversion du maximum publié : 5.9 × 60 = 354 L/min."
		},
		{
			"id": "shinano-si-1310s-20260926-workingpressurebar-1",
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
			"shinano-si-1310s-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1310s-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-1310s-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 354,
		"typical": 354,
		"max": 354
	}
};

export default product;
