import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2015ad",
	"slug": "shinano-si-2015ad",
	"brand": "Shinano",
	"model": "SI-2015AD",
	"mpn": "SI-2015AD",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Shinano SI-2015AD",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2015ad.webp",
		"alt": "Repères techniques Shinano SI-2015AD, référence SI-2015AD",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=22",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "La SI-2015AD est une perceuse droite à mandrin de 10 mm et 6 000 tr/min à vide. Sa proximité de nom avec la meuleuse SI-2015A ne doit pas conduire à reprendre ses accessoires, même si leurs maxima d’air publiés sont identiques.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 25.2 CFM / 11.9 L/s. Conversion du maximum publié : 11.9 × 60 = 714 L/min.",
			"Référence fabricant : SI-2015AD.",
			"Vitesse à vide publiée : 6 000 tr/min.",
			"Capacité du mandrin : 10 mm.",
			"Couple maximal publié : 2.62 Nm.",
			"La SI-2015AD et la perceuse à poignée pistolet SI-5100A ont un mandrin de 10 mm, mais les vitesses à vide sont de 6 000 et 5 000 tr/min et les couples maximaux de 2,62 et 3,06 Nm. Leurs maxima d’air sont de 11,9 et 9,3 L/s, soit 714 et 558 L/min : 156 L/min d’écart.",
			"La SI-2015A sans D est une meuleuse à pince 1/4 pouce, annoncée à 5 500 tr/min et 714 L/min. Une demande d’air identique ne transforme pas sa pince en mandrin de perceuse."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"Le mandrin de 10 mm n’est pas une capacité de perçage universelle. Le tableau donne séparément une capacité de perçage de 6 mm pour la SI-2015AD ; matériau, foret et opération restent à valider avec la notice."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-2015ad-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 25.2 CFM / 11.9 L/s. Conversion du maximum publié : 11.9 × 60 = 714 L/min.",
			"evidenceIds": [
				"shinano-si-2015ad-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "6 000 tr/min",
			"evidenceIds": [
				"shinano-si-2015ad-20260926"
			]
		},
		{
			"label": "Capacité du mandrin",
			"value": "10 mm",
			"evidenceIds": [
				"shinano-si-2015ad-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "2.62 Nm",
			"evidenceIds": [
				"shinano-si-2015ad-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,06 kg",
			"evidenceIds": [
				"shinano-si-2015ad-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2015ad-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=22",
			"sourceLabel": "Shinano, catalogue général 2025, p. 22, réf. SI-2015AD",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 25.2 CFM / 11.9 L/s. Conversion du maximum publié : 11.9 × 60 = 714 L/min."
		},
		{
			"id": "shinano-si-2015ad-20260926-workingpressurebar-1",
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
			"shinano-si-2015ad-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2015ad-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-2015ad-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 714,
		"typical": 714,
		"max": 714
	}
};

export default product;
