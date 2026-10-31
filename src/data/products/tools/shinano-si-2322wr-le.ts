import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2322wr-le",
	"slug": "shinano-si-2322wr-le",
	"brand": "Shinano",
	"model": "SI-2322WR-LE",
	"mpn": "SI-2322WR-LE",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Shinano SI-2322WR-LE",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2322wr-le.webp",
		"alt": "Repères techniques Shinano SI-2322WR-LE, référence SI-2322WR-LE",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=16",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-2322WR-LE. Le catalogue Shinano publie une consommation maximale en L/s, tandis que la page 43 prescrit 6,3 bar en fonctionnement. Les passages cités n’apparient pas explicitement la pression de mesure au maximum ; les deux informations restent séparées. Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée. Référence fabricant : SI-2322WR-LE. Version et équipement : Ponçage à eau ; plateau 80 mm ; commande par levier ; plusieurs broches proposées, version livrée à confirmer. Vitesse à vide publiée : 5500 tr/min. Masse publiée : 1.32 kg.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Référence fabricant : SI-2322WR-LE.",
			"Version et équipement : Ponçage à eau ; plateau 80 mm ; commande par levier ; plusieurs broches proposées, version livrée à confirmer.",
			"Vitesse à vide publiée : 5500 tr/min.",
			"Masse publiée : 1.32 kg.",
			"Valeur documentaire conservée : 678 L/min. Le catalogue Shinano publie une consommation maximale en L/s, tandis que la page 43 prescrit 6,3 bar en fonctionnement. Les passages cités n’apparient pas explicitement la pression de mesure au maximum ; les deux informations restent séparées."
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
				"shinano-si-2322wr-le-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Valeur documentaire conservée : 678 L/min. Le catalogue Shinano publie une consommation maximale en L/s, tandis que la page 43 prescrit 6,3 bar en fonctionnement. Les passages cités n’apparient pas explicitement la pression de mesure au maximum ; les deux informations restent séparées.",
			"evidenceIds": [
				"shinano-si-2322wr-le-reserved-20261031-1",
				"shinano-si-2322wr-le-reserved-20261031-2"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Ponçage à eau ; plateau 80 mm ; commande par levier ; plusieurs broches proposées, version livrée à confirmer.",
			"evidenceIds": [
				"shinano-si-2322wr-le-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "5500 tr/min",
			"evidenceIds": [
				"shinano-si-2322wr-le-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.32 kg",
			"evidenceIds": [
				"shinano-si-2322wr-le-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":678,\"typical\":678,\"max\":678},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"shinano-si-2322wr-le-20260926",
				"shinano-si-2322wr-le-reserved-20261031-1",
				"shinano-si-2322wr-le-reserved-20261031-2"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2322wr-le-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=16",
			"sourceLabel": "Shinano, catalogue général 2025, p. 16, réf. SI-2322WR-LE",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 24 CFM / 11.3 L/s, soit 678 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2322wr-le-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-2322wr-le-reserved-20261031-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=16",
			"sourceLabel": "Shinano SI-2322WR-LE : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. Le catalogue Shinano publie une consommation maximale en L/s, tandis que la page 43 prescrit 6,3 bar en fonctionnement. Les passages cités n’apparient pas explicitement la pression de mesure au maximum ; les deux informations restent séparées."
		},
		{
			"id": "shinano-si-2322wr-le-reserved-20261031-2",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano SI-2322WR-LE : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. Le catalogue Shinano publie une consommation maximale en L/s, tandis que la page 43 prescrit 6,3 bar en fonctionnement. Les passages cités n’apparient pas explicitement la pression de mesure au maximum ; les deux informations restent séparées."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-2322wr-le-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2322wr-le-20260926-workingpressurebar-1"
		],
		"demandModel": [
			"shinano-si-2322wr-le-reserved-20261031-1",
			"shinano-si-2322wr-le-reserved-20261031-2"
		],
		"demandExplanation": [
			"shinano-si-2322wr-le-reserved-20261031-1",
			"shinano-si-2322wr-le-reserved-20261031-2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Le catalogue Shinano publie une consommation maximale en L/s, tandis que la page 43 prescrit 6,3 bar en fonctionnement. Les passages cités n’apparient pas explicitement la pression de mesure au maximum ; les deux informations restent séparées."
};

export default product;
