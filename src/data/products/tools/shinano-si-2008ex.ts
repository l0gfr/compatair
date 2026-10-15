import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2008ex",
	"slug": "shinano-si-2008ex",
	"brand": "Shinano",
	"model": "SI-2008EX",
	"mpn": "SI-2008EX",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Shinano SI-2008EX",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2008ex.webp",
		"alt": "Repères techniques Shinano SI-2008EX, référence SI-2008EX",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=15",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "La SI-2008EX est une mini-ponceuse à rotation simple avec plateau de 50 mm et broche M6 × 1. Son besoin maximal de 474 L/min permet de préparer l’alimentation, mais son mouvement doit aussi être distingué de la double action de la SI-2107A.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 16.8 CFM / 7.9 L/s, soit 474 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-2008EX.",
			"Version et équipement : Plateau 50 mm ; broche M6 × 1 ; rotation simple.",
			"Vitesse à vide publiée : 14500 tr/min.",
			"Masse publiée : 0.57 kg.",
			"La SI-2107A du même tableau utilise également un plateau de 50 mm et une broche M6 × 1, avec une orbite de 3 mm ; la SI-2008EX est à rotation simple. Le filetage et le diamètre communs ne prouvent donc pas une finition équivalente.",
			"Les maxima publiés sont de 7,9 L/s pour la SI-2008EX et de 6,5 L/s pour la SI-2107A, soit 474 et 390 L/min : écart calculé de 84 L/min. Les vitesses à vide sont respectivement de 14 500 et 14 000 tr/min."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"La comparaison de consommation maximale ne mesure ni le temps nécessaire à la même finition ni une économie d’énergie par pièce. Faire valider l’abrasif, le mouvement et le résultat attendu ; ne pas dimensionner sur la seule moyenne de catalogue."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-2008ex-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 16.8 CFM / 7.9 L/s, soit 474 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-2008ex-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Plateau 50 mm ; broche M6 × 1 ; rotation simple.",
			"evidenceIds": [
				"shinano-si-2008ex-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "14500 tr/min",
			"evidenceIds": [
				"shinano-si-2008ex-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.57 kg",
			"evidenceIds": [
				"shinano-si-2008ex-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2008ex-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=15",
			"sourceLabel": "Shinano, catalogue général 2025, p. 15, réf. SI-2008EX",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 16.8 CFM / 7.9 L/s, soit 474 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2008ex-20260926-workingpressurebar-1",
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
			"shinano-si-2008ex-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2008ex-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-2008ex-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 474,
		"typical": 474,
		"max": 474
	}
};

export default product;
