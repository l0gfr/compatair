import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2001s",
	"slug": "shinano-si-2001s",
	"brand": "Shinano",
	"model": "SI-2001S",
	"mpn": "SI-2001S",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Shinano SI-2001S",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2001s.webp",
		"alt": "Repères techniques Shinano SI-2001S, référence SI-2001S",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=19",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "La SI-2001S reçoit une pince de 1/4 pouce, soit 6,35 mm. La SI-2001S-6 est la version à pince de 6 mm. Les 456 L/min au maximum à 6,3 bar sont communs aux deux références ; l’incertitude à lever avant achat porte d’abord sur la queue du consommable.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 16.2 CFM / 7.6 L/s, soit 456 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-2001S.",
			"Version et équipement : Pince 1/4 pouce ; puissance publiée 173 W.",
			"Vitesse à vide publiée : 25000 tr/min.",
			"Masse publiée : 0.37 kg.",
			"Le tableau commun annonce 173 W, 25 000 tr/min à vide et 0,37 kg. L’écart de diamètre calculé entre les pinces est de 0,35 mm : leurs queues ne sont pas interchangeables par simple proximité de taille."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"Vérifier la pince livrée, le serrage de la queue et la vitesse admissible de la meule. Le besoin d’air ne valide ni le montage ni une opération de meulage."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-2001s-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 16.2 CFM / 7.6 L/s, soit 456 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-2001s-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Pince 1/4 pouce ; puissance publiée 173 W.",
			"evidenceIds": [
				"shinano-si-2001s-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "25000 tr/min",
			"evidenceIds": [
				"shinano-si-2001s-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.37 kg",
			"evidenceIds": [
				"shinano-si-2001s-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2001s-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=19",
			"sourceLabel": "Shinano, catalogue général 2025, p. 19, réf. SI-2001S",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 16.2 CFM / 7.6 L/s, soit 456 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2001s-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-2001s-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2001s-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-2001s-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 456,
		"typical": 456,
		"max": 456
	}
};

export default product;
