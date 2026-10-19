import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1205b",
	"slug": "shinano-si-1205b",
	"brand": "Shinano",
	"model": "SI-1205B",
	"mpn": "SI-1205B",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Shinano SI-1205B",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1205b.webp",
		"alt": "Repères techniques Shinano SI-1205B, référence SI-1205B",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=9",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-1205B : mini-cliquet à carré de 3/8 pouce, contre 1/4 pouce pour le SI-1200B. Le tableau commun donne 40 Nm, 220 tr/min et 4,5 L/s maximum, soit 270 L/min, à 6,3 bar. Le débit identique ne rend pas les interfaces de douille équivalentes.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 9.6 CFM / 4.5 L/s. Conversion du maximum publié : 4.5 × 60 = 270 L/min.",
			"Référence fabricant : SI-1205B.",
			"Couple maximal publié : 40 Nm.",
			"Vitesse à vide publiée : 220 tr/min.",
			"Masse publiée : 0,51 kg."
		],
		"limitations": [
			"Le couple maximal publié n’est pas une consigne de serrage final. Vérifier la douille et la référence effectivement livrée.",
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
				"shinano-si-1205b-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 9.6 CFM / 4.5 L/s. Conversion du maximum publié : 4.5 × 60 = 270 L/min.",
			"evidenceIds": [
				"shinano-si-1205b-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "40 Nm",
			"evidenceIds": [
				"shinano-si-1205b-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "220 tr/min",
			"evidenceIds": [
				"shinano-si-1205b-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,51 kg",
			"evidenceIds": [
				"shinano-si-1205b-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1205b-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=9",
			"sourceLabel": "Shinano, catalogue général 2025, p. 9, réf. SI-1205B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 9.6 CFM / 4.5 L/s. Conversion du maximum publié : 4.5 × 60 = 270 L/min."
		},
		{
			"id": "shinano-si-1205b-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-1200b-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=9",
			"sourceLabel": "Shinano, catalogue général 2025, p. 9, réf. SI-1200B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 9.6 CFM / 4.5 L/s. Conversion du maximum publié : 4.5 × 60 = 270 L/min."
		},
		{
			"id": "shinano-si-1200b-20260926-workingpressurebar-1",
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
			"shinano-si-1205b-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1205b-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-1205b-20260926"
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
