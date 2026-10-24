import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1420t",
	"slug": "shinano-si-1420t",
	"brand": "Shinano",
	"model": "SI-1420T",
	"mpn": "SI-1420T",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Shinano SI-1420T",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1420t.webp",
		"alt": "Repères techniques Shinano SI-1420T, référence SI-1420T",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=4",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-1420T, référence SI-1420T. Le tableau fabricant publie 678 L/min et une pression de service prescrite de 6,3 bar. Couple maximal publié : 500 Nm. Vitesse à vide publiée : 6 000 tr/min.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 24 CFM / 11.3 L/s. Conversion du maximum publié : 11.3 × 60 = 678 L/min.",
			"Référence fabricant : SI-1420T.",
			"Couple maximal publié : 500 Nm.",
			"Vitesse à vide publiée : 6 000 tr/min.",
			"Masse publiée : 2,55 kg."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"La pression de service de 6,3 bar ne qualifie pas explicitement la pression de mesure de cette consommation. Celle-ci reste documentaire et ne produit aucun verdict de débit."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-1420t-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 24 CFM / 11.3 L/s. Conversion du maximum publié : 11.3 × 60 = 678 L/min.",
			"evidenceIds": [
				"shinano-si-1420t-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "500 Nm",
			"evidenceIds": [
				"shinano-si-1420t-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "6 000 tr/min",
			"evidenceIds": [
				"shinano-si-1420t-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,55 kg",
			"evidenceIds": [
				"shinano-si-1420t-20260926"
			]
		},
		{
			"label": "Consommation maximale publiée (pression de mesure non appariée)",
			"value": "678 L/min",
			"evidenceIds": [
				"shinano-si-1420t-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1420t-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=4",
			"sourceLabel": "Shinano, catalogue général 2025, p. 4, réf. SI-1420T",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 24 CFM / 11.3 L/s. Conversion du maximum publié : 11.3 × 60 = 678 L/min."
		},
		{
			"id": "shinano-si-1420t-20260926-workingpressurebar-1",
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
			"shinano-si-1420t-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1420t-20260926-workingpressurebar-1"
		],
		"demandExplanation": [
			"shinano-si-1420t-20260926",
			"shinano-si-1420t-20260926-workingpressurebar-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Consommation maximale publiée : 678 L/min. Pression de service prescrite : 6,3 bar. Les passages fabricants lus ne relient pas explicitement cette consommation à sa pression de mesure ; aucun besoin dimensionnant apparié ne peut être retenu."
};

export default product;
