import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2015a",
	"slug": "shinano-si-2015a",
	"brand": "Shinano",
	"model": "SI-2015A",
	"mpn": "SI-2015A",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Shinano SI-2015A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2015a-technical-20261116-reviews.svg",
		"alt": "Repères techniques Shinano SI-2015A, référence SI-2015A",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "La SI-2015A est une meuleuse à réduction planétaire, pince 1/4 pouce et vitesse de 5 500 tr/min pour 457 W. La SI-2015A-6 remplace la pince par du 6 mm ; la SI-2010-6 monte à 23 000 tr/min avec 247 W. Le maximum publié de 11,9 L/s reste documentaire, séparé de la moyenne et de la consigne d’alimentation générale. Le raccordement du compresseur demande un point de consommation réellement mesuré.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 25.2 CFM / 11.9 L/s, soit 714 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-2015A.",
			"Version et équipement : Pince 1/4 pouce ; puissance publiée 457 W.",
			"Vitesse à vide publiée : 5500 tr/min.",
			"Masse publiée : 0.91 kg."
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
				"shinano-si-2015a-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 25.2 CFM / 11.9 L/s, soit 714 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-2015a-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Pince 1/4 pouce ; puissance publiée 457 W.",
			"evidenceIds": [
				"shinano-si-2015a-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "5500 tr/min",
			"evidenceIds": [
				"shinano-si-2015a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.91 kg",
			"evidenceIds": [
				"shinano-si-2015a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2015a-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=19",
			"sourceLabel": "Shinano, catalogue général 2025, p. 19, réf. SI-2015A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 25.2 CFM / 11.9 L/s, soit 714 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2015a-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "review:2026-11-16-reviews:shinano-si-2015a:0",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf",
			"sourceLabel": "Shinano, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La SI-2015A est une meuleuse à réduction planétaire, pince 1/4 pouce et vitesse de 5 500 tr/min pour 457 W. La SI-2015A-6 remplace la pince par du 6 mm ; la SI-2010-6 monte à 23 000 tr/min avec 247 W. Le maximum publié de 11,9 L/s reste documentaire, séparé de la moyenne et de la consigne d’alimentation générale. Le raccordement du compresseur demande un point de consommation réellement mesuré. GET complet SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. Pages PDF lues : 19, 43."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-2015a-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2015a-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-2015a-20260926"
		],
		"airflowBasis": [
			"review:2026-11-16-reviews:shinano-si-2015a:0"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 714,
		"typical": 714,
		"max": 714
	},
	"airflowBasis": "unqualified"
};

export default product;
