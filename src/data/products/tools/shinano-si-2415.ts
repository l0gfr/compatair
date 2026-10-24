import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2415",
	"slug": "shinano-si-2415",
	"brand": "Shinano",
	"model": "SI-2415",
	"mpn": "SI-2415",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "Shinano SI-2415",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2415.webp",
		"alt": "Repères techniques Shinano SI-2415, référence SI-2415",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=18",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-2415, référence SI-2415. Le tableau fabricant publie 576 L/min et une pression de service prescrite de 6,3 bar. Version et équipement : Double action entraînée par engrenage ; orbite 4,4 mm. Le tableau associe 140 mm à 6 pouces : diamètre de plateau à confirmer, sans conversion forcée. Vitesse à vide publiée : 1200 tr/min.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 20.4 CFM / 9.6 L/s, soit 576 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-2415.",
			"Version et équipement : Double action entraînée par engrenage ; orbite 4,4 mm. Le tableau associe 140 mm à 6 pouces : diamètre de plateau à confirmer, sans conversion forcée.",
			"Vitesse à vide publiée : 1200 tr/min.",
			"Masse publiée : 1.45 kg."
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
				"shinano-si-2415-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 20.4 CFM / 9.6 L/s, soit 576 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-2415-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Double action entraînée par engrenage ; orbite 4,4 mm. Le tableau associe 140 mm à 6 pouces : diamètre de plateau à confirmer, sans conversion forcée.",
			"evidenceIds": [
				"shinano-si-2415-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "1200 tr/min",
			"evidenceIds": [
				"shinano-si-2415-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.45 kg",
			"evidenceIds": [
				"shinano-si-2415-20260926"
			]
		},
		{
			"label": "Consommation maximale publiée (pression de mesure non appariée)",
			"value": "576 L/min",
			"evidenceIds": [
				"shinano-si-2415-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2415-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=18",
			"sourceLabel": "Shinano, catalogue général 2025, p. 18, réf. SI-2415",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 20.4 CFM / 9.6 L/s, soit 576 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2415-20260926-workingpressurebar-1",
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
			"shinano-si-2415-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2415-20260926-workingpressurebar-1"
		],
		"demandExplanation": [
			"shinano-si-2415-20260926",
			"shinano-si-2415-20260926-workingpressurebar-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Consommation maximale publiée : 576 L/min. Pression de service prescrite : 6,3 bar. Les passages fabricants lus ne relient pas explicitement cette consommation à sa pression de mesure ; aucun besoin dimensionnant apparié ne peut être retenu."
};

export default product;
