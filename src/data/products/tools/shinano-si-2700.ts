import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2700",
	"slug": "shinano-si-2700",
	"brand": "Shinano",
	"model": "SI-2700",
	"mpn": "SI-2700",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Shinano SI-2700",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2700.webp",
		"alt": "Repères techniques Shinano SI-2700, référence SI-2700",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=11",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "La SI-2700 est une ponceuse à bande de 10 × 330 mm dont le maximum publié atteint 558 L/min. La SI-2740 conserve cette demande d’air et ce format de bande : un remplacement doit donc être motivé par la géométrie et la prise en main, pas par une baisse de débit supposée.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 19.8 CFM / 9.3 L/s, soit 558 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-2700.",
			"Version et équipement : Bande 10 × 330 mm ; bras orientable ; puissance publiée 317 W.",
			"Vitesse à vide publiée : 15000 tr/min.",
			"Masse publiée : 0.82 kg.",
			"Pour les SI-2700 et SI-2740, le catalogue donne 9,3 L/s au maximum, soit 558 L/min, ainsi que 317 W et 15 000 tr/min à vide. Le bras réglable fait partie des deux descriptions ; la SI-2740 précise une amplitude de 160°.",
			"La masse publiée est de 0,82 kg pour la SI-2700 et de 0,73 kg pour la SI-2740 : différence calculée de 90 g. Cette différence porte sur l’outil déclaré, sans mesure d’effort ni essai ergonomique CompatAir."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"Le débit maximal identique ne prouve pas une durée de travail identique par pièce. Confirmer l’accès, le format 10 × 330 mm et l’abrasif ; ne pas acheter une bande 10 × 460 mm de SI-2700L sur la seule proximité du nom."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-2700-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 19.8 CFM / 9.3 L/s, soit 558 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-2700-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Bande 10 × 330 mm ; bras orientable ; puissance publiée 317 W.",
			"evidenceIds": [
				"shinano-si-2700-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "15000 tr/min",
			"evidenceIds": [
				"shinano-si-2700-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.82 kg",
			"evidenceIds": [
				"shinano-si-2700-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2700-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=11",
			"sourceLabel": "Shinano, catalogue général 2025, p. 11, réf. SI-2700",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 19.8 CFM / 9.3 L/s, soit 558 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2700-20260926-workingpressurebar-1",
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
			"shinano-si-2700-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2700-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-2700-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 558,
		"typical": 558,
		"max": 558
	}
};

export default product;
