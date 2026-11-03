import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1288",
	"slug": "shinano-si-1288",
	"brand": "Shinano",
	"model": "SI-1288",
	"mpn": "SI-1288",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Shinano SI-1288",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1288.webp",
		"alt": "Repères techniques Shinano SI-1288, référence SI-1288",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=10",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-1288. La SI-1288 reçoit des douilles internes interchangeables ; les SI-1261 et SI-1262 utilisent des carrés 3/8\" et 1/2\". Le passage traversant est le critère de choix, au-delà du débit publié. La consigne de pression de service ne documente pas la pression de mesure de la colonne Max Air Consumption.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 11.4 CFM / 5.4 L/s. Conversion du maximum publié : 5.4 × 60 = 324 L/min.",
			"Référence fabricant : SI-1288.",
			"Couple maximal publié : 45 Nm.",
			"Vitesse à vide publiée : 180 tr/min.",
			"Masse publiée : 0,54 kg.",
			"Entraînement : Hexagone traversant de 17 mm.",
			"Couple maximal : 45 Nm.",
			"Vitesse à vide : 180 tr/min.",
			"Masse : 0,54 kg.",
			"Consommation maximale publiée, pression de mesure non appariée : 5,4 L/s.",
			"Consigne d’alimentation en fonctionnement : 0,63 MPa (6,3 bar), gâchette entièrement actionnée."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"Débit conservé dans les spécifications ; compatibilité indéterminée jusqu’à confirmation du point de mesure par Shinano."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-1288-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 11.4 CFM / 5.4 L/s. Conversion du maximum publié : 5.4 × 60 = 324 L/min.",
			"evidenceIds": [
				"shinano-si-1288-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "45 Nm",
			"evidenceIds": [
				"shinano-si-1288-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "180 tr/min",
			"evidenceIds": [
				"shinano-si-1288-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,54 kg",
			"evidenceIds": [
				"shinano-si-1288-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Hexagone traversant de 17 mm",
			"evidenceIds": [
				"shinano-si-1288-reserved-20261103-1"
			]
		},
		{
			"label": "Couple maximal",
			"value": "45 Nm",
			"evidenceIds": [
				"shinano-si-1288-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "180 tr/min",
			"evidenceIds": [
				"shinano-si-1288-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,54 kg",
			"evidenceIds": [
				"shinano-si-1288-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation maximale publiée, pression de mesure non appariée",
			"value": "5,4 L/s",
			"evidenceIds": [
				"shinano-si-1288-reserved-20261103-1"
			]
		},
		{
			"label": "Consigne d’alimentation en fonctionnement",
			"value": "0,63 MPa (6,3 bar), gâchette entièrement actionnée",
			"evidenceIds": [
				"shinano-si-1288-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1288-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=10",
			"sourceLabel": "Shinano, catalogue général 2025, p. 10, réf. SI-1288",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 11.4 CFM / 5.4 L/s. Conversion du maximum publié : 5.4 × 60 = 324 L/min."
		},
		{
			"id": "shinano-si-1288-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-1288-reserved-20261103-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=10",
			"sourceLabel": "Shinano : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. La SI-1288 reçoit des douilles internes interchangeables ; les SI-1261 et SI-1262 utilisent des carrés 3/8\" et 1/2\". Le passage traversant est le critère de choix, au-delà du débit publié. La consigne de pression de service ne documente pas la pression de mesure de la colonne Max Air Consumption."
		},
		{
			"id": "shinano-si-1288-reserved-20261103-1-3",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. La SI-1288 reçoit des douilles internes interchangeables ; les SI-1261 et SI-1262 utilisent des carrés 3/8\" et 1/2\". Le passage traversant est le critère de choix, au-delà du débit publié. La consigne de pression de service ne documente pas la pression de mesure de la colonne Max Air Consumption."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-1288-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1288-20260926-workingpressurebar-1"
		],
		"demandModel": [
			"shinano-si-1288-reserved-20261103-1"
		],
		"demandExplanation": [
			"shinano-si-1288-reserved-20261103-1"
		],
		"editorial": [
			"shinano-si-1288-reserved-20261103-1"
		],
		"specifications": [
			"shinano-si-1288-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Le catalogue donne une consommation maximale et une consigne d’alimentation de 0,63 MPa en fonctionnement, sans apparier explicitement la pression de mesure au débit. Ce point manque pour dimensionner."
};

export default product;
