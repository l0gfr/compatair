import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1218ex",
	"slug": "shinano-si-1218ex",
	"brand": "Shinano",
	"model": "SI-1218EX",
	"mpn": "SI-1218EX",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Shinano SI-1218EX",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1218ex.webp",
		"alt": "Repères techniques Shinano SI-1218EX, référence SI-1218EX",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=9",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-1218EX, référence SI-1218EX. Le tableau fabricant publie 270 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple maximal publié : 45 Nm. Vitesse à vide publiée : 300 tr/min.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 9.6 CFM / 4.5 L/s. Conversion du maximum publié : 4.5 × 60 = 270 L/min.",
			"Référence fabricant : SI-1218EX.",
			"Couple maximal publié : 45 Nm.",
			"Vitesse à vide publiée : 300 tr/min.",
			"Masse publiée : 0,54 kg."
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
				"shinano-si-1218ex-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 9.6 CFM / 4.5 L/s. Conversion du maximum publié : 4.5 × 60 = 270 L/min.",
			"evidenceIds": [
				"shinano-si-1218ex-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "45 Nm",
			"evidenceIds": [
				"shinano-si-1218ex-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "300 tr/min",
			"evidenceIds": [
				"shinano-si-1218ex-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,54 kg",
			"evidenceIds": [
				"shinano-si-1218ex-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1218ex-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=9",
			"sourceLabel": "Shinano, catalogue général 2025, p. 9, réf. SI-1218EX",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 9.6 CFM / 4.5 L/s. Conversion du maximum publié : 4.5 × 60 = 270 L/min."
		},
		{
			"id": "shinano-si-1218ex-20260926-workingpressurebar-1",
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
			"shinano-si-1218ex-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1218ex-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-1218ex-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 270,
		"typical": 270,
		"max": 270
	}
};

export default product;
