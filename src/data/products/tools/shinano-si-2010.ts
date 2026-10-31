import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2010",
	"slug": "shinano-si-2010",
	"brand": "Shinano",
	"model": "SI-2010",
	"mpn": "SI-2010",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Shinano SI-2010",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2010.webp",
		"alt": "Repères techniques Shinano SI-2010, référence SI-2010",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=19",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-2010. Le catalogue Shinano publie une consommation maximale en L/s, tandis que la page 43 prescrit 6,3 bar en fonctionnement. Les passages cités n’apparient pas explicitement la pression de mesure au maximum ; les deux informations restent séparées. Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée. Colonne Max Air Consumption : 10.8 CFM / 5.1 L/s. Conversion du maximum publié : 5.1 × 60 = 306 L/min. Référence fabricant : SI-2010. Vitesse à vide publiée : 23 000 tr/min. Masse publiée : 0,52 kg.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 10.8 CFM / 5.1 L/s. Conversion du maximum publié : 5.1 × 60 = 306 L/min.",
			"Référence fabricant : SI-2010.",
			"Vitesse à vide publiée : 23 000 tr/min.",
			"Masse publiée : 0,52 kg.",
			"Valeur documentaire conservée : 306 L/min. Le catalogue Shinano publie une consommation maximale en L/s, tandis que la page 43 prescrit 6,3 bar en fonctionnement. Les passages cités n’apparient pas explicitement la pression de mesure au maximum ; les deux informations restent séparées."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"Le catalogue Shinano publie une consommation maximale en L/s, tandis que la page 43 prescrit 6,3 bar en fonctionnement. Les passages cités n’apparient pas explicitement la pression de mesure au maximum ; les deux informations restent séparées."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-2010-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Valeur documentaire conservée : 306 L/min. Le catalogue Shinano publie une consommation maximale en L/s, tandis que la page 43 prescrit 6,3 bar en fonctionnement. Les passages cités n’apparient pas explicitement la pression de mesure au maximum ; les deux informations restent séparées.",
			"evidenceIds": [
				"shinano-si-2010-reserved-20261031-1",
				"shinano-si-2010-reserved-20261031-2"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "23 000 tr/min",
			"evidenceIds": [
				"shinano-si-2010-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,52 kg",
			"evidenceIds": [
				"shinano-si-2010-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":306,\"typical\":306,\"max\":306},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"shinano-si-2010-20260926",
				"shinano-si-2010-reserved-20261031-1",
				"shinano-si-2010-reserved-20261031-2"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2010-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=19",
			"sourceLabel": "Shinano, catalogue général 2025, p. 19, réf. SI-2010",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 10.8 CFM / 5.1 L/s. Conversion du maximum publié : 5.1 × 60 = 306 L/min."
		},
		{
			"id": "shinano-si-2010-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-2010-reserved-20261031-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=19",
			"sourceLabel": "Shinano SI-2010 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. Le catalogue Shinano publie une consommation maximale en L/s, tandis que la page 43 prescrit 6,3 bar en fonctionnement. Les passages cités n’apparient pas explicitement la pression de mesure au maximum ; les deux informations restent séparées."
		},
		{
			"id": "shinano-si-2010-reserved-20261031-2",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano SI-2010 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. Le catalogue Shinano publie une consommation maximale en L/s, tandis que la page 43 prescrit 6,3 bar en fonctionnement. Les passages cités n’apparient pas explicitement la pression de mesure au maximum ; les deux informations restent séparées."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-2010-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2010-20260926-workingpressurebar-1"
		],
		"demandModel": [
			"shinano-si-2010-reserved-20261031-1",
			"shinano-si-2010-reserved-20261031-2"
		],
		"demandExplanation": [
			"shinano-si-2010-reserved-20261031-1",
			"shinano-si-2010-reserved-20261031-2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Le catalogue Shinano publie une consommation maximale en L/s, tandis que la page 43 prescrit 6,3 bar en fonctionnement. Les passages cités n’apparient pas explicitement la pression de mesure au maximum ; les deux informations restent séparées."
};

export default product;
