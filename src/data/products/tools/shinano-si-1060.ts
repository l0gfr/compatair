import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1060",
	"slug": "shinano-si-1060",
	"brand": "Shinano",
	"model": "SI-1060",
	"mpn": "SI-1060",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Shinano SI-1060",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1060.webp",
		"alt": "Repères techniques Shinano SI-1060, référence SI-1060",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=7",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "La SI-1060 est une visseuse à chocs droite pour laquelle le choix du compresseur doit être recoupé avec le couple de travail : son maximum de consommation est de 492 L/min à 6,3 bar en fonctionnement. Le même catalogue permet de comparer la SI-1062 avant un remplacement.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 17.4 CFM / 8.2 L/s. Conversion du maximum publié : 8.2 × 60 = 492 L/min.",
			"Référence fabricant : SI-1060.",
			"Couple maximal publié : 65 Nm.",
			"Vitesse à vide publiée : 11 000 tr/min.",
			"Masse publiée : 0,87 kg.",
			"Face à la SI-1062 du même tableau, la SI-1060 demande 8,2 L/s contre 7,9 L/s au maximum, soit 492 contre 474 L/min : 18 L/min de plus par conversion. Son couple de travail publié est pourtant de 0–50 Nm, contre 0–70 Nm pour la SI-1062.",
			"La SI-1060 tourne à vide à 11 000 tr/min et pèse 0,87 kg ; la SI-1062 affiche 10 000 tr/min et 0,79 kg. Le seul débit disponible ne permet donc pas de conclure à leur interchangeabilité."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"La moyenne de catalogue de la SI-1060, 1,4 L/s soit 84 L/min, ne définit pas le cycle réel de vissage. Conserver 492 L/min pour la demande maximale et faire valider le serrage sur l’assemblage avant une substitution."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-1060-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 17.4 CFM / 8.2 L/s. Conversion du maximum publié : 8.2 × 60 = 492 L/min.",
			"evidenceIds": [
				"shinano-si-1060-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "65 Nm",
			"evidenceIds": [
				"shinano-si-1060-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "11 000 tr/min",
			"evidenceIds": [
				"shinano-si-1060-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,87 kg",
			"evidenceIds": [
				"shinano-si-1060-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1060-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=7",
			"sourceLabel": "Shinano, catalogue général 2025, p. 7, réf. SI-1060",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 17.4 CFM / 8.2 L/s. Conversion du maximum publié : 8.2 × 60 = 492 L/min."
		},
		{
			"id": "shinano-si-1060-20260926-workingpressurebar-1",
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
			"shinano-si-1060-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1060-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-1060-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 492,
		"typical": 492,
		"max": 492
	}
};

export default product;
