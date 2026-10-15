import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2107a",
	"slug": "shinano-si-2107a",
	"brand": "Shinano",
	"model": "SI-2107A",
	"mpn": "SI-2107A",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Shinano SI-2107A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2107a.webp",
		"alt": "Repères techniques Shinano SI-2107A, référence SI-2107A",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=15",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "La SI-2107A associe un plateau de 50 mm à une double action avec orbite de 3 mm. Pour un poste de finition, son maximum de 390 L/min à 6,3 bar doit être examiné avec le mouvement demandé et l’accessoire, pas avec le seul diamètre du plateau.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 13.8 CFM / 6.5 L/s, soit 390 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-2107A.",
			"Version et équipement : Plateau 50 mm ; orbite 3 mm ; broche M6 × 1.",
			"Vitesse à vide publiée : 14000 tr/min.",
			"Masse publiée : 0.55 kg.",
			"Le catalogue place la SI-2107A et la SI-2008EX dans le même tableau : broche M6 × 1 et plateau de 50 mm pour les deux, mais double action avec orbite de 3 mm pour la première et rotation simple pour la seconde.",
			"La SI-2107A affiche 6,5 L/s au maximum, soit 390 L/min, contre 7,9 L/s, soit 474 L/min pour la SI-2008EX. L’écart calculé de 84 L/min porte sur le débit maximal publié, sans présumer le temps de travail nécessaire."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"Une alimentation suffisante pour 390 L/min ne valide pas un remplacement de la SI-2008EX : le mouvement et le résultat de finition sont différents. Vérifier aussi l’accessoire exact et la pression à l’outil pendant l’action."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-2107a-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 13.8 CFM / 6.5 L/s, soit 390 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-2107a-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Plateau 50 mm ; orbite 3 mm ; broche M6 × 1.",
			"evidenceIds": [
				"shinano-si-2107a-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "14000 tr/min",
			"evidenceIds": [
				"shinano-si-2107a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.55 kg",
			"evidenceIds": [
				"shinano-si-2107a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2107a-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=15",
			"sourceLabel": "Shinano, catalogue général 2025, p. 15, réf. SI-2107A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 13.8 CFM / 6.5 L/s, soit 390 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2107a-20260926-workingpressurebar-1",
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
			"shinano-si-2107a-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2107a-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-2107a-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 390,
		"typical": 390,
		"max": 390
	}
};

export default product;
