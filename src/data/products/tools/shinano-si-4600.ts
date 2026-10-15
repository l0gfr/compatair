import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-4600",
	"slug": "shinano-si-4600",
	"brand": "Shinano",
	"model": "SI-4600",
	"mpn": "SI-4600",
	"categoryId": "grignoteuse",
	"category": "grignoteuse",
	"label": "Shinano SI-4600",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-4600.webp",
		"alt": "Repères techniques Shinano SI-4600, référence SI-4600",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=25",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "La grignoteuse SI-4600 et la cisaille SI-4500 affichent toutes deux une capacité acier de 1,6 mm, mais leurs masses, largeurs de coupe et demandes d’air diffèrent. Pour la SI-4600, conserver le maximum de 558 L/min à 6,3 bar pendant l’action.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 19.8 CFM / 9.3 L/s, soit 558 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-4600.",
			"Version et équipement : Largeur de coupe 4,5 mm ; capacité publiée 1,6 mm ; vitesse à vide publiée 2 600 tr/min.",
			"Masse publiée : 1 kg.",
			"La SI-4600 affiche 4,5 mm de largeur de coupe et 1,00 kg, contre 5,4 mm et 1,26 kg pour la cisaille SI-4500. Le type d’outil et le parcours de coupe doivent donc accompagner la comparaison de débit.",
			"Les 9,3 L/s maximaux de la SI-4600 deviennent 558 L/min ; les 9,9 L/s de la SI-4500 deviennent 594 L/min. Les 36 L/min d’écart ne démontrent ni un temps de coupe plus court ni une économie par pièce."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"La valeur de 1,6 mm concerne l’acier dans le tableau fabricant. Faire préciser l’alliage, l’épaisseur et le tracé avant de choisir les outils de coupe ; la moyenne de consommation ne remplace pas le maximum pour l’alimentation."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-4600-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 19.8 CFM / 9.3 L/s, soit 558 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-4600-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Largeur de coupe 4,5 mm ; capacité publiée 1,6 mm ; vitesse à vide publiée 2 600 tr/min.",
			"evidenceIds": [
				"shinano-si-4600-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1 kg",
			"evidenceIds": [
				"shinano-si-4600-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-4600-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=25",
			"sourceLabel": "Shinano, catalogue général 2025, p. 25, réf. SI-4600",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 19.8 CFM / 9.3 L/s, soit 558 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-4600-20260926-workingpressurebar-1",
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
			"shinano-si-4600-20260926"
		],
		"workingPressureBar": [
			"shinano-si-4600-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-4600-20260926"
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
