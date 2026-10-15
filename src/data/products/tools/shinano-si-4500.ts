import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-4500",
	"slug": "shinano-si-4500",
	"brand": "Shinano",
	"model": "SI-4500",
	"mpn": "SI-4500",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "Shinano SI-4500",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-4500.webp",
		"alt": "Repères techniques Shinano SI-4500, référence SI-4500",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=25",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "La SI-4500 est une cisaille à comparer à la grignoteuse SI-4600 selon la coupe à réaliser. Sa consommation maximale de 594 L/min et sa largeur de coupe publiée de 5,4 mm décrivent une autre configuration que les 558 L/min et 4,5 mm de la SI-4600.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 21 CFM / 9.9 L/s, soit 594 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-4500.",
			"Version et équipement : Largeur de coupe 5,4 mm ; capacité publiée 1,6 mm ; vitesse à vide publiée 2 000 tr/min.",
			"Masse publiée : 1.26 kg.",
			"Pour la SI-4500 et la SI-4600, le tableau publie une capacité de coupe acier de 1,6 mm. Il distingue une cisaille de 1,26 kg et une grignoteuse de 1,00 kg ; cette capacité commune ne démontre pas le même accès ni le même résultat.",
			"Les maxima sont de 9,9 L/s pour la SI-4500 et de 9,3 L/s pour la SI-4600, soit 594 et 558 L/min : écart calculé de 36 L/min. Les largeurs de coupe publiées sont respectivement de 5,4 et 4,5 mm."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"La capacité acier publiée ne vaut pas capacité universelle sur tous les alliages. Pour le remplacement d’une grignoteuse, faire confirmer le matériau, le tracé et l’accès ; un débit disponible supérieur ne valide pas l’opération."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-4500-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 21 CFM / 9.9 L/s, soit 594 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-4500-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Largeur de coupe 5,4 mm ; capacité publiée 1,6 mm ; vitesse à vide publiée 2 000 tr/min.",
			"evidenceIds": [
				"shinano-si-4500-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.26 kg",
			"evidenceIds": [
				"shinano-si-4500-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-4500-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=25",
			"sourceLabel": "Shinano, catalogue général 2025, p. 25, réf. SI-4500",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 21 CFM / 9.9 L/s, soit 594 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-4500-20260926-workingpressurebar-1",
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
			"shinano-si-4500-20260926"
		],
		"workingPressureBar": [
			"shinano-si-4500-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-4500-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 594,
		"typical": 594,
		"max": 594
	}
};

export default product;
