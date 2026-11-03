import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2011s",
	"slug": "shinano-si-2011s",
	"brand": "Shinano",
	"model": "SI-2011S",
	"mpn": "SI-2011S",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Shinano SI-2011S",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2011s.webp",
		"alt": "Repères techniques Shinano SI-2011S, référence SI-2011S",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=19",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-2011S. La SI-2011S reçoit la pince 1/4\" et la SI-2011S-6 la pince 6 mm. La SI-2001S plus courte est donnée pour 173 W et 0,37 kg, contre 422 W et 0,60 kg ici. La consigne de pression de service ne documente pas la pression de mesure de la colonne Max Air Consumption.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 24 CFM / 11.3 L/s, soit 678 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-2011S.",
			"Version et équipement : Pince 1/4 pouce ; puissance publiée 422 W.",
			"Vitesse à vide publiée : 25000 tr/min.",
			"Masse publiée : 0.6 kg.",
			"Pince : 1/4\" ; version SI-2011S-6 en 6 mm.",
			"Vitesse à vide maximale : 25 000 tr/min.",
			"Puissance publiée : 422 W.",
			"Masse : 0,60 kg.",
			"Consommation maximale publiée, pression de mesure non appariée : 11,3 L/s.",
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
				"shinano-si-2011s-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 24 CFM / 11.3 L/s, soit 678 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-2011s-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Pince 1/4 pouce ; puissance publiée 422 W.",
			"evidenceIds": [
				"shinano-si-2011s-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "25000 tr/min",
			"evidenceIds": [
				"shinano-si-2011s-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.6 kg",
			"evidenceIds": [
				"shinano-si-2011s-20260926"
			]
		},
		{
			"label": "Pince",
			"value": "1/4\" ; version SI-2011S-6 en 6 mm",
			"evidenceIds": [
				"shinano-si-2011s-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide maximale",
			"value": "25 000 tr/min",
			"evidenceIds": [
				"shinano-si-2011s-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "422 W",
			"evidenceIds": [
				"shinano-si-2011s-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,60 kg",
			"evidenceIds": [
				"shinano-si-2011s-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation maximale publiée, pression de mesure non appariée",
			"value": "11,3 L/s",
			"evidenceIds": [
				"shinano-si-2011s-reserved-20261103-1"
			]
		},
		{
			"label": "Consigne d’alimentation en fonctionnement",
			"value": "0,63 MPa (6,3 bar), gâchette entièrement actionnée",
			"evidenceIds": [
				"shinano-si-2011s-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2011s-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=19",
			"sourceLabel": "Shinano, catalogue général 2025, p. 19, réf. SI-2011S",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 24 CFM / 11.3 L/s, soit 678 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2011s-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-2011s-reserved-20261103-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=19",
			"sourceLabel": "Shinano : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. La SI-2011S reçoit la pince 1/4\" et la SI-2011S-6 la pince 6 mm. La SI-2001S plus courte est donnée pour 173 W et 0,37 kg, contre 422 W et 0,60 kg ici. La consigne de pression de service ne documente pas la pression de mesure de la colonne Max Air Consumption."
		},
		{
			"id": "shinano-si-2011s-reserved-20261103-1-3",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. La SI-2011S reçoit la pince 1/4\" et la SI-2011S-6 la pince 6 mm. La SI-2001S plus courte est donnée pour 173 W et 0,37 kg, contre 422 W et 0,60 kg ici. La consigne de pression de service ne documente pas la pression de mesure de la colonne Max Air Consumption."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-2011s-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2011s-20260926-workingpressurebar-1"
		],
		"demandModel": [
			"shinano-si-2011s-reserved-20261103-1"
		],
		"demandExplanation": [
			"shinano-si-2011s-reserved-20261103-1"
		],
		"editorial": [
			"shinano-si-2011s-reserved-20261103-1"
		],
		"specifications": [
			"shinano-si-2011s-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Le catalogue donne une consommation maximale et une consigne d’alimentation de 0,63 MPa en fonctionnement, sans apparier explicitement la pression de mesure au débit. Ce point manque pour dimensionner."
};

export default product;
