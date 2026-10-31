import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1457",
	"slug": "shinano-si-1457",
	"brand": "Shinano",
	"model": "SI-1457",
	"mpn": "SI-1457",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Shinano SI-1457",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1457.webp",
		"alt": "Repères techniques Shinano SI-1457, référence SI-1457",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=5",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-1457. Le catalogue Shinano publie une consommation maximale en L/s, tandis que la page 43 prescrit 6,3 bar en fonctionnement. Les passages cités n’apparient pas explicitement la pression de mesure au maximum ; les deux informations restent séparées. Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée. Colonne Max Air Consumption : 21.6 CFM / 10.2 L/s. Conversion du maximum publié : 10.2 × 60 = 612 L/min. Référence fabricant : SI-1457. Masse publiée : 1,1 kg. Carré de sortie : 1/2 pouce. Couple maximal publié : 350 Nm.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 21.6 CFM / 10.2 L/s. Conversion du maximum publié : 10.2 × 60 = 612 L/min.",
			"Référence fabricant : SI-1457.",
			"Masse publiée : 1,1 kg.",
			"Carré de sortie : 1/2 pouce.",
			"Couple maximal publié : 350 Nm.",
			"Valeur documentaire conservée : 612 L/min. Le catalogue Shinano publie une consommation maximale en L/s, tandis que la page 43 prescrit 6,3 bar en fonctionnement. Les passages cités n’apparient pas explicitement la pression de mesure au maximum ; les deux informations restent séparées."
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
				"shinano-si-1457-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Valeur documentaire conservée : 612 L/min. Le catalogue Shinano publie une consommation maximale en L/s, tandis que la page 43 prescrit 6,3 bar en fonctionnement. Les passages cités n’apparient pas explicitement la pression de mesure au maximum ; les deux informations restent séparées.",
			"evidenceIds": [
				"shinano-si-1457-reserved-20261031-1",
				"shinano-si-1457-reserved-20261031-2"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,1 kg",
			"evidenceIds": [
				"shinano-si-1457-20260926"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1/2 pouce",
			"evidenceIds": [
				"shinano-si-1457-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "350 Nm",
			"evidenceIds": [
				"shinano-si-1457-20260926"
			]
		},
		{
			"label": "Vitesses à vide",
			"value": "8 000 tr/min avant ; 9 000 tr/min arrière",
			"evidenceIds": [
				"shinano-si-1457-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":612,\"typical\":612,\"max\":612},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"shinano-si-1457-20260926",
				"shinano-si-1457-reserved-20261031-1",
				"shinano-si-1457-reserved-20261031-2"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1457-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=5",
			"sourceLabel": "Shinano, catalogue général 2025, p. 5, réf. SI-1457",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 21.6 CFM / 10.2 L/s. Conversion du maximum publié : 10.2 × 60 = 612 L/min."
		},
		{
			"id": "shinano-si-1457-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-1457-reserved-20261031-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=5",
			"sourceLabel": "Shinano SI-1457 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. Le catalogue Shinano publie une consommation maximale en L/s, tandis que la page 43 prescrit 6,3 bar en fonctionnement. Les passages cités n’apparient pas explicitement la pression de mesure au maximum ; les deux informations restent séparées."
		},
		{
			"id": "shinano-si-1457-reserved-20261031-2",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano SI-1457 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. Le catalogue Shinano publie une consommation maximale en L/s, tandis que la page 43 prescrit 6,3 bar en fonctionnement. Les passages cités n’apparient pas explicitement la pression de mesure au maximum ; les deux informations restent séparées."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-1457-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1457-20260926-workingpressurebar-1"
		],
		"demandModel": [
			"shinano-si-1457-reserved-20261031-1",
			"shinano-si-1457-reserved-20261031-2"
		],
		"demandExplanation": [
			"shinano-si-1457-reserved-20261031-1",
			"shinano-si-1457-reserved-20261031-2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Le catalogue Shinano publie une consommation maximale en L/s, tandis que la page 43 prescrit 6,3 bar en fonctionnement. Les passages cités n’apparient pas explicitement la pression de mesure au maximum ; les deux informations restent séparées."
};

export default product;
