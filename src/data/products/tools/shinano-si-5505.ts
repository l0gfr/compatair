import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-5505",
	"slug": "shinano-si-5505",
	"brand": "Shinano",
	"model": "SI-5505",
	"mpn": "SI-5505",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Shinano SI-5505",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-5505.webp",
		"alt": "Repères techniques Shinano SI-5505, référence SI-5505",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=23",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-5505. La SI-5505 est une perceuse réversible avec mandrin sans clé de 10 mm et 1 900 tr/min. La SI-5506 de la page est donnée pour 1 700 tr/min et 0,60 kg ; la SI-5355 possède une tête d’angle et 1 200 tr/min. La consigne de pression de service ne documente pas la pression de mesure de la colonne Max Air Consumption.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 15.6 CFM / 7.4 L/s. Conversion du maximum publié : 7.4 × 60 = 444 L/min.",
			"Référence fabricant : SI-5505.",
			"Vitesse à vide publiée : 1 900 tr/min.",
			"Capacité du mandrin : 10 mm.",
			"Masse publiée : 0,75 kg.",
			"Mandrin : 10 mm, sans clé.",
			"Vitesse à vide : 1 900 tr/min.",
			"Puissance publiée : 158 W.",
			"Masse : 0,75 kg.",
			"Longueur : 153 mm.",
			"Consommation maximale publiée, pression de mesure non appariée : 7,4 L/s.",
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
				"shinano-si-5505-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 15.6 CFM / 7.4 L/s. Conversion du maximum publié : 7.4 × 60 = 444 L/min.",
			"evidenceIds": [
				"shinano-si-5505-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "1 900 tr/min",
			"evidenceIds": [
				"shinano-si-5505-20260926"
			]
		},
		{
			"label": "Capacité du mandrin",
			"value": "10 mm",
			"evidenceIds": [
				"shinano-si-5505-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,75 kg",
			"evidenceIds": [
				"shinano-si-5505-20260926"
			]
		},
		{
			"label": "Mandrin",
			"value": "10 mm, sans clé",
			"evidenceIds": [
				"shinano-si-5505-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1 900 tr/min",
			"evidenceIds": [
				"shinano-si-5505-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "158 W",
			"evidenceIds": [
				"shinano-si-5505-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,75 kg",
			"evidenceIds": [
				"shinano-si-5505-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "153 mm",
			"evidenceIds": [
				"shinano-si-5505-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation maximale publiée, pression de mesure non appariée",
			"value": "7,4 L/s",
			"evidenceIds": [
				"shinano-si-5505-reserved-20261103-1"
			]
		},
		{
			"label": "Consigne d’alimentation en fonctionnement",
			"value": "0,63 MPa (6,3 bar), gâchette entièrement actionnée",
			"evidenceIds": [
				"shinano-si-5505-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-5505-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=23",
			"sourceLabel": "Shinano, catalogue général 2025, p. 23, réf. SI-5505",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 15.6 CFM / 7.4 L/s. Conversion du maximum publié : 7.4 × 60 = 444 L/min."
		},
		{
			"id": "shinano-si-5505-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-5505-reserved-20261103-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=23",
			"sourceLabel": "Shinano : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. La SI-5505 est une perceuse réversible avec mandrin sans clé de 10 mm et 1 900 tr/min. La SI-5506 de la page est donnée pour 1 700 tr/min et 0,60 kg ; la SI-5355 possède une tête d’angle et 1 200 tr/min. La consigne de pression de service ne documente pas la pression de mesure de la colonne Max Air Consumption."
		},
		{
			"id": "shinano-si-5505-reserved-20261103-1-3",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. La SI-5505 est une perceuse réversible avec mandrin sans clé de 10 mm et 1 900 tr/min. La SI-5506 de la page est donnée pour 1 700 tr/min et 0,60 kg ; la SI-5355 possède une tête d’angle et 1 200 tr/min. La consigne de pression de service ne documente pas la pression de mesure de la colonne Max Air Consumption."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-5505-20260926"
		],
		"workingPressureBar": [
			"shinano-si-5505-20260926-workingpressurebar-1"
		],
		"demandModel": [
			"shinano-si-5505-reserved-20261103-1"
		],
		"demandExplanation": [
			"shinano-si-5505-reserved-20261103-1"
		],
		"editorial": [
			"shinano-si-5505-reserved-20261103-1"
		],
		"specifications": [
			"shinano-si-5505-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Le catalogue donne une consommation maximale et une consigne d’alimentation de 0,63 MPa en fonctionnement, sans apparier explicitement la pression de mesure au débit. Ce point manque pour dimensionner."
};

export default product;
