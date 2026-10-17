import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2108ex-2",
	"slug": "shinano-si-2108ex-2",
	"brand": "Shinano",
	"model": "SI-2108EX-2",
	"mpn": "SI-2108EX-2",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Shinano SI-2108EX-2",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2108ex-2.webp",
		"alt": "Repères techniques Shinano SI-2108EX-2, référence SI-2108EX-2",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=15",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Le suffixe -2 de la SI-2108EX-2 identifie le plateau de 50 mm, contre 75 mm pour la SI-2108EX. Les deux ponceuses à double action publient 408 L/min au maximum à 6,3 bar, une orbite de 3 mm et 15 500 tr/min à vide : le petit plateau n’abaisse pas ici la demande d’air.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 14.4 CFM / 6.8 L/s, soit 408 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-2108EX-2.",
			"Version et équipement : Plateau 50 mm ; orbite 3 mm ; broche M6 × 1.",
			"Vitesse à vide publiée : 15500 tr/min.",
			"Masse publiée : 0.62 kg.",
			"Les deux versions indiquent une broche M6 × 1 et une masse de 0,62 kg. Le choix du format porte sur l’accès et la surface à travailler, sans modification automatique du besoin maximal du poste."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"Confirmer le plateau et l’abrasif prévus pour la version. Une interface commune et un même débit ne garantissent pas la même surface traitée par minute."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-2108ex-2-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 14.4 CFM / 6.8 L/s, soit 408 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-2108ex-2-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Plateau 50 mm ; orbite 3 mm ; broche M6 × 1.",
			"evidenceIds": [
				"shinano-si-2108ex-2-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "15500 tr/min",
			"evidenceIds": [
				"shinano-si-2108ex-2-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.62 kg",
			"evidenceIds": [
				"shinano-si-2108ex-2-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2108ex-2-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=15",
			"sourceLabel": "Shinano, catalogue général 2025, p. 15, réf. SI-2108EX-2",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 14.4 CFM / 6.8 L/s, soit 408 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2108ex-2-20260926-workingpressurebar-1",
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
			"shinano-si-2108ex-2-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2108ex-2-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-2108ex-2-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 408,
		"typical": 408,
		"max": 408
	}
};

export default product;
