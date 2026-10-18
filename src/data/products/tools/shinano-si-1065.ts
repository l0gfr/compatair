import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1065",
	"slug": "shinano-si-1065",
	"brand": "Shinano",
	"model": "SI-1065",
	"mpn": "SI-1065",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Shinano SI-1065",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1065.webp",
		"alt": "Repères techniques Shinano SI-1065, référence SI-1065",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=7",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-1065 : visseuse à chocs à corps pistolet, 65 Nm au maximum et besoin maximal de 576 L/min à 6,3 bar. La SI-1062 voisine est une construction droite de 80 Nm avec 474 L/min au maximum. La forme change l’accès et la demande d’air ne suit pas le seul couple.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 20.4 CFM / 9.6 L/s. Conversion du maximum publié : 9.6 × 60 = 576 L/min.",
			"Référence fabricant : SI-1065.",
			"Couple maximal publié : 65 Nm.",
			"Vitesse à vide publiée : 11 000 tr/min.",
			"Masse publiée : 0,98 kg."
		],
		"limitations": [
			"Le couple maximal n’est pas un réglage étalonné de l’assemblage.",
			"Le maximum est retenu sans réduction arbitraire à la moyenne du catalogue."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-1065-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 20.4 CFM / 9.6 L/s. Conversion du maximum publié : 9.6 × 60 = 576 L/min.",
			"evidenceIds": [
				"shinano-si-1065-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "65 Nm",
			"evidenceIds": [
				"shinano-si-1065-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "11 000 tr/min",
			"evidenceIds": [
				"shinano-si-1065-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,98 kg",
			"evidenceIds": [
				"shinano-si-1065-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1065-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=7",
			"sourceLabel": "Shinano, catalogue général 2025, p. 7, réf. SI-1065",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 20.4 CFM / 9.6 L/s. Conversion du maximum publié : 9.6 × 60 = 576 L/min."
		},
		{
			"id": "shinano-si-1065-20260926-workingpressurebar-1",
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
			"shinano-si-1065-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1065-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-1065-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 576,
		"typical": 576,
		"max": 576
	}
};

export default product;
