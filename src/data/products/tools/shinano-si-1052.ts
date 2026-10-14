import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1052",
	"slug": "shinano-si-1052",
	"brand": "Shinano",
	"model": "SI-1052",
	"mpn": "SI-1052",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Shinano SI-1052",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1052.webp",
		"alt": "Repères techniques Shinano SI-1052, référence SI-1052",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=7",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "La Shinano SI-1052 est une visseuse à chocs droite compacte : 0,56 kg, régulateur intégré et 390 L/min de consommation maximale publiée. Son choix doit associer le besoin de serrage au débit disponible à 6,3 bar pendant l’action, sans confondre sa moyenne de catalogue avec le besoin instantané.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 13.8 CFM / 6.5 L/s. Conversion du maximum publié : 6.5 × 60 = 390 L/min.",
			"Référence fabricant : SI-1052.",
			"Couple maximal publié : 70 Nm.",
			"Vitesse à vide publiée : 13 000 tr/min.",
			"Masse publiée : 0,56 kg.",
			"Comparaison du même tableau constructeur : la SI-1062 demande au maximum 7,9 L/s, soit 474 L/min, contre 6,5 L/s, soit 390 L/min pour la SI-1052. L’écart calculé est de 84 L/min ; il ne mesure pas une économie par assemblage.",
			"La SI-1052 pèse 0,56 kg et tourne à vide à 13 000 tr/min ; la SI-1062 pèse 0,79 kg et tourne à 10 000 tr/min. Le couple de travail publié est respectivement 0–60 et 0–70 Nm. Ces repères permettent de demander un essai de serrage adapté, sans substituer le couple maximal à un couple garanti sur l’assemblage."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"La moyenne publiée de 1,1 L/s vaut 66 L/min par conversion, mais le catalogue ne définit pas ici le cycle auquel l’appliquer. Le dimensionnement conserve donc le maximum de 390 L/min ; la durée réelle de vissage et les autres outils simultanés restent à renseigner.",
			"Avant remplacement d’une SI-1062, vérifier le couple requis et le contrôle final de l’assemblage : le débit moindre de la SI-1052 ne démontre pas une équivalence mécanique."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-1052-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 13.8 CFM / 6.5 L/s. Conversion du maximum publié : 6.5 × 60 = 390 L/min.",
			"evidenceIds": [
				"shinano-si-1052-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "70 Nm",
			"evidenceIds": [
				"shinano-si-1052-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "13 000 tr/min",
			"evidenceIds": [
				"shinano-si-1052-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,56 kg",
			"evidenceIds": [
				"shinano-si-1052-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1052-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=7",
			"sourceLabel": "Shinano, catalogue général 2025, p. 7, réf. SI-1052",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 13.8 CFM / 6.5 L/s. Conversion du maximum publié : 6.5 × 60 = 390 L/min."
		},
		{
			"id": "shinano-si-1052-20260926-workingpressurebar-1",
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
			"shinano-si-1052-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1052-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-1052-20260926"
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
