import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-3007m",
	"slug": "shinano-si-3007m",
	"brand": "Shinano",
	"model": "SI-3007M",
	"mpn": "SI-3007M",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "Shinano SI-3007M",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-3007m.webp",
		"alt": "Repères techniques Shinano SI-3007M, référence SI-3007M",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=13",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-3007M : ponceuse rectangulaire avec plateau Velcro M-3007 de 95 × 175 mm. Le maximum publié de 7,9 L/s reste documentaire ; la pression d’essai de ce maximum n’est pas établie par la seule consigne d’alimentation de 6,3 bar.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 16.8 CFM / 7.9 L/s, soit 474 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-3007M.",
			"Version et équipement : Plateau 95 × 175 mm autoagrippant ; orbite 5 mm.",
			"Vitesse à vide publiée : 11000 tr/min.",
			"Masse publiée : 1.82 kg."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"La relecture du voisin retire toute conclusion de dimensionnement fondée sur une unité normalisée, une pression de service ou un régime non qualifiés."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-3007m-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 16.8 CFM / 7.9 L/s, soit 474 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-3007m-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Plateau 95 × 175 mm autoagrippant ; orbite 5 mm.",
			"evidenceIds": [
				"shinano-si-3007m-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "11000 tr/min",
			"evidenceIds": [
				"shinano-si-3007m-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.82 kg",
			"evidenceIds": [
				"shinano-si-3007m-20260926"
			]
		},
		{
			"label": "Consommation documentaire, hors calcul",
			"value": "7,9 L/s, soit 474 L/min, pression de mesure non appariée",
			"evidenceIds": [
				"reserved-neighbor-20261025-shinano-si-3007m"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-3007m-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=13",
			"sourceLabel": "Shinano, catalogue général 2025, p. 13, réf. SI-3007M",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 16.8 CFM / 7.9 L/s, soit 474 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-3007m-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "reserved-neighbor-20261025-shinano-si-3007m",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=13",
			"sourceLabel": "Relecture du voisin pendant la correction des pages réservées, 25 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Lecture ciblée, SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. Les données de régime, d’unité ou de pression non qualifiées ne sont pas promues en point de dimensionnement."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-3007m-20260926"
		],
		"workingPressureBar": [
			"shinano-si-3007m-20260926-workingpressurebar-1"
		],
		"editorial": [
			"reserved-neighbor-20261025-shinano-si-3007m"
		],
		"demandExplanation": [
			"reserved-neighbor-20261025-shinano-si-3007m"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Consommation maximale publiée de 7,9 L/s, soit 474 L/min, sans pression de mesure explicitement appariée. La consigne générale de 6,3 bar n’est pas assimilée à un point de mesure du maximum."
};

export default product;
