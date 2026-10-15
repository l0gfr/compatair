import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2009ex-h",
	"slug": "shinano-si-2009ex-h",
	"brand": "Shinano",
	"model": "SI-2009EX-H",
	"mpn": "SI-2009EX-H",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "Shinano SI-2009EX-H",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2009ex-h.webp",
		"alt": "Repères techniques Shinano SI-2009EX-H, référence SI-2009EX-H",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=18",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Le suffixe H de la SI-2009EX-H désigne ici la version rapide de la polisseuse à rotation simple : 5 000 tr/min à vide et 354 L/min au maximum publié. Il faut identifier cette version avant de reprendre le dimensionnement d’une SI-2009EX.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 12.6 CFM / 5.9 L/s, soit 354 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-2009EX-H.",
			"Version et équipement : Rotation simple ; plateau 75 mm ; broche femelle 5/16-24 UNF ; version rapide.",
			"Vitesse à vide publiée : 5000 tr/min.",
			"Masse publiée : 0.68 kg.",
			"La SI-2009EX sans H affiche 2 600 tr/min et 7,1 L/s au maximum ; la SI-2009EX-H affiche 5 000 tr/min et 5,9 L/s. Les conversions donnent 426 et 354 L/min : 72 L/min d’écart malgré la vitesse plus élevée de la version H.",
			"Les deux versions partagent le plateau publié de 75 mm, la broche femelle 5/16-24 UNF et une masse de 0,68 kg. Ces interfaces communes n’autorisent pas à transférer automatiquement une procédure de polissage ou un accessoire à une autre vitesse."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"Le débit inférieur de la version H ne mesure pas une économie sur une même pièce. Confirmer les limites de vitesse du plateau et du consommable ; les 5 000 tr/min sont une vitesse à vide, pas une vitesse garantie en charge."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-2009ex-h-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 12.6 CFM / 5.9 L/s, soit 354 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-2009ex-h-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Rotation simple ; plateau 75 mm ; broche femelle 5/16-24 UNF ; version rapide.",
			"evidenceIds": [
				"shinano-si-2009ex-h-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "5000 tr/min",
			"evidenceIds": [
				"shinano-si-2009ex-h-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.68 kg",
			"evidenceIds": [
				"shinano-si-2009ex-h-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2009ex-h-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=18",
			"sourceLabel": "Shinano, catalogue général 2025, p. 18, réf. SI-2009EX-H",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 12.6 CFM / 5.9 L/s, soit 354 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2009ex-h-20260926-workingpressurebar-1",
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
			"shinano-si-2009ex-h-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2009ex-h-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-2009ex-h-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 354,
		"typical": 354,
		"max": 354
	}
};

export default product;
