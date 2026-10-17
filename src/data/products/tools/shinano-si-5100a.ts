import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-5100a",
	"slug": "shinano-si-5100a",
	"brand": "Shinano",
	"model": "SI-5100A",
	"mpn": "SI-5100A",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Shinano SI-5100A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-5100a.webp",
		"alt": "Repères techniques Shinano SI-5100A, référence SI-5100A",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=22",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "La SI-5100A est la perceuse à poignée pistolet rapide de cette paire à mandrin de 10 mm : 5 000 tr/min à vide, contre 2 000 pour la SI-5300A. Elle publie 558 L/min au maximum à 6,3 bar, soit 54 L/min de moins que la SI-5300A, malgré la vitesse plus élevée.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 19.8 CFM / 9.3 L/s. Conversion du maximum publié : 9.3 × 60 = 558 L/min.",
			"Référence fabricant : SI-5100A.",
			"Vitesse à vide publiée : 5 000 tr/min.",
			"Capacité du mandrin : 10 mm.",
			"Couple maximal publié : 3.06 Nm.",
			"Le couple maximal publié est de 3,06 Nm pour la SI-5100A contre 6,32 Nm pour la SI-5300A. Les capacités de perçage indiquées sont de 6 et 10 mm : la capacité de serrage du mandrin ne doit pas être confondue avec la capacité de perçage."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"Le catalogue destine la SI-5100A au métal tendre. Confirmer le foret, le matériau et la vitesse de coupe ; ne pas déduire le choix du seul débit ni des 10 mm du mandrin."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-5100a-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 19.8 CFM / 9.3 L/s. Conversion du maximum publié : 9.3 × 60 = 558 L/min.",
			"evidenceIds": [
				"shinano-si-5100a-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "5 000 tr/min",
			"evidenceIds": [
				"shinano-si-5100a-20260926"
			]
		},
		{
			"label": "Capacité du mandrin",
			"value": "10 mm",
			"evidenceIds": [
				"shinano-si-5100a-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "3.06 Nm",
			"evidenceIds": [
				"shinano-si-5100a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,90 kg",
			"evidenceIds": [
				"shinano-si-5100a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-5100a-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=22",
			"sourceLabel": "Shinano, catalogue général 2025, p. 22, réf. SI-5100A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 19.8 CFM / 9.3 L/s. Conversion du maximum publié : 9.3 × 60 = 558 L/min."
		},
		{
			"id": "shinano-si-5100a-20260926-workingpressurebar-1",
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
			"shinano-si-5100a-20260926"
		],
		"workingPressureBar": [
			"shinano-si-5100a-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-5100a-20260926"
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
