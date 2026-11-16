import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-3103b",
	"slug": "shinano-si-3103b",
	"brand": "Shinano",
	"model": "SI-3103B",
	"mpn": "SI-3103B",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Shinano SI-3103B",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-3103b-technical-20261116-reviews.svg",
		"alt": "Repères techniques Shinano SI-3103B, référence SI-3103B",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "La SI-3103B utilise un plateau Leather de 125 mm avec une orbite de 5 mm, à 9 000 tr/min. La SI-3103BM conserve le mécanisme avec un plateau autoagrippant ; la version de 150 mm change la surface de travail. Le catalogue publie 7,9 L/s maximum et 1,3 L/s moyens, deux régimes distincts. Leur pression de mesure n’étant pas attestée par la consigne d’alimentation, ils restent hors dimensionnement.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 16.8 CFM / 7.9 L/s, soit 474 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-3103B.",
			"Version et équipement : Plateau 125 mm, revêtement Leather selon Shinano ; orbite 5 mm ; version Heavy Duty.",
			"Vitesse à vide publiée : 9000 tr/min.",
			"Masse publiée : 1.18 kg."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"La pression de service n’atteste pas la pression de mesure de consommation. Le régime ou l’appariement documentaire reste non qualifié ; aucune consommation dimensionnante n’est conservée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-3103b-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 16.8 CFM / 7.9 L/s, soit 474 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-3103b-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Plateau 125 mm, revêtement Leather selon Shinano ; orbite 5 mm ; version Heavy Duty.",
			"evidenceIds": [
				"shinano-si-3103b-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "9000 tr/min",
			"evidenceIds": [
				"shinano-si-3103b-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.18 kg",
			"evidenceIds": [
				"shinano-si-3103b-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-3103b-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=11",
			"sourceLabel": "Shinano, catalogue général 2025, p. 11, réf. SI-3103B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 16.8 CFM / 7.9 L/s, soit 474 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-3103b-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "review:2026-11-16-reviews:shinano-si-3103b:0",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf",
			"sourceLabel": "Shinano, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La SI-3103B utilise un plateau Leather de 125 mm avec une orbite de 5 mm, à 9 000 tr/min. La SI-3103BM conserve le mécanisme avec un plateau autoagrippant ; la version de 150 mm change la surface de travail. Le catalogue publie 7,9 L/s maximum et 1,3 L/s moyens, deux régimes distincts. Leur pression de mesure n’étant pas attestée par la consigne d’alimentation, ils restent hors dimensionnement. GET complet SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. Pages PDF lues : 11, 43."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-3103b-20260926"
		],
		"workingPressureBar": [
			"shinano-si-3103b-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-3103b-20260926"
		],
		"airflowBasis": [
			"review:2026-11-16-reviews:shinano-si-3103b:0"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 474,
		"typical": 474,
		"max": 474
	},
	"airflowBasis": "unqualified"
};

export default product;
