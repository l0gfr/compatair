import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-3103-6a",
	"slug": "shinano-si-3103-6a",
	"brand": "Shinano",
	"model": "SI-3103-6A",
	"mpn": "SI-3103-6A",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Shinano SI-3103-6A",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-3103-6a.webp",
		"alt": "Repères techniques Shinano SI-3103-6A, référence SI-3103-6A",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=12",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-3103-6A. La SI-3103-6A est en plateau Leather de 150 mm ; la -6AM utilise le Velcro et la SI-3103A le format 125 mm. La SI-3113-6A ajoute une aspiration autonome, contrairement à cette configuration. La consigne de pression de service ne documente pas la pression de mesure de la colonne Max Air Consumption.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 16.8 CFM / 7.9 L/s, soit 474 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-3103-6A.",
			"Version et équipement : Plateau 150 mm, revêtement Leather selon Shinano ; orbite 5 mm ; sans aspiration intégrée.",
			"Vitesse à vide publiée : 9000 tr/min.",
			"Masse publiée : 1.2 kg.",
			"Plateau : 150 mm, Leather.",
			"Orbite : 5 mm.",
			"Vitesse à vide : 9 000 tr/min.",
			"Puissance publiée : 134 W.",
			"Masse : 1,20 kg.",
			"Consommation maximale publiée, pression de mesure non appariée : 7,9 L/s.",
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
				"shinano-si-3103-6a-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 16.8 CFM / 7.9 L/s, soit 474 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-3103-6a-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Plateau 150 mm, revêtement Leather selon Shinano ; orbite 5 mm ; sans aspiration intégrée.",
			"evidenceIds": [
				"shinano-si-3103-6a-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "9000 tr/min",
			"evidenceIds": [
				"shinano-si-3103-6a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.2 kg",
			"evidenceIds": [
				"shinano-si-3103-6a-20260926"
			]
		},
		{
			"label": "Plateau",
			"value": "150 mm, Leather",
			"evidenceIds": [
				"shinano-si-3103-6a-reserved-20261103-1"
			]
		},
		{
			"label": "Orbite",
			"value": "5 mm",
			"evidenceIds": [
				"shinano-si-3103-6a-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "9 000 tr/min",
			"evidenceIds": [
				"shinano-si-3103-6a-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "134 W",
			"evidenceIds": [
				"shinano-si-3103-6a-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,20 kg",
			"evidenceIds": [
				"shinano-si-3103-6a-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation maximale publiée, pression de mesure non appariée",
			"value": "7,9 L/s",
			"evidenceIds": [
				"shinano-si-3103-6a-reserved-20261103-1"
			]
		},
		{
			"label": "Consigne d’alimentation en fonctionnement",
			"value": "0,63 MPa (6,3 bar), gâchette entièrement actionnée",
			"evidenceIds": [
				"shinano-si-3103-6a-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-3103-6a-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=12",
			"sourceLabel": "Shinano, catalogue général 2025, p. 12, réf. SI-3103-6A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 16.8 CFM / 7.9 L/s, soit 474 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-3103-6a-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-3103-6a-reserved-20261103-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=12",
			"sourceLabel": "Shinano : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. La SI-3103-6A est en plateau Leather de 150 mm ; la -6AM utilise le Velcro et la SI-3103A le format 125 mm. La SI-3113-6A ajoute une aspiration autonome, contrairement à cette configuration. La consigne de pression de service ne documente pas la pression de mesure de la colonne Max Air Consumption."
		},
		{
			"id": "shinano-si-3103-6a-reserved-20261103-1-3",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. La SI-3103-6A est en plateau Leather de 150 mm ; la -6AM utilise le Velcro et la SI-3103A le format 125 mm. La SI-3113-6A ajoute une aspiration autonome, contrairement à cette configuration. La consigne de pression de service ne documente pas la pression de mesure de la colonne Max Air Consumption."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-3103-6a-20260926"
		],
		"workingPressureBar": [
			"shinano-si-3103-6a-20260926-workingpressurebar-1"
		],
		"demandModel": [
			"shinano-si-3103-6a-reserved-20261103-1"
		],
		"demandExplanation": [
			"shinano-si-3103-6a-reserved-20261103-1"
		],
		"editorial": [
			"shinano-si-3103-6a-reserved-20261103-1"
		],
		"specifications": [
			"shinano-si-3103-6a-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Le catalogue donne une consommation maximale et une consigne d’alimentation de 0,63 MPa en fonctionnement, sans apparier explicitement la pression de mesure au débit. Ce point manque pour dimensionner."
};

export default product;
