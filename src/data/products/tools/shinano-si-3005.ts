import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-3005",
	"slug": "shinano-si-3005",
	"brand": "Shinano",
	"model": "SI-3005",
	"mpn": "SI-3005",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "Shinano SI-3005",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-3005.webp",
		"alt": "Repères techniques Shinano SI-3005, référence SI-3005",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=13",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-3005, référence SI-3005. Le tableau fabricant publie 390 L/min et une pression de service prescrite de 6,3 bar. Vitesse à vide publiée : 11 000 tr/min. Masse publiée : 1,87 kg.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 13.8 CFM / 6.5 L/s. Conversion du maximum publié : 6.5 × 60 = 390 L/min.",
			"Référence fabricant : SI-3005.",
			"Vitesse à vide publiée : 11 000 tr/min.",
			"Masse publiée : 1,87 kg."
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
				"shinano-si-3005-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 13.8 CFM / 6.5 L/s. Conversion du maximum publié : 6.5 × 60 = 390 L/min.",
			"evidenceIds": [
				"shinano-si-3005-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "11 000 tr/min",
			"evidenceIds": [
				"shinano-si-3005-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,87 kg",
			"evidenceIds": [
				"shinano-si-3005-20260926"
			]
		},
		{
			"label": "Consommation maximale publiée (pression de mesure non appariée)",
			"value": "390 L/min",
			"evidenceIds": [
				"shinano-si-3005-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-3005-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=13",
			"sourceLabel": "Shinano, catalogue général 2025, p. 13, réf. SI-3005",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 13.8 CFM / 6.5 L/s. Conversion du maximum publié : 6.5 × 60 = 390 L/min."
		},
		{
			"id": "shinano-si-3005-20260926-workingpressurebar-1",
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
			"shinano-si-3005-20260926"
		],
		"workingPressureBar": [
			"shinano-si-3005-20260926-workingpressurebar-1"
		],
		"demandExplanation": [
			"shinano-si-3005-20260926",
			"shinano-si-3005-20260926-workingpressurebar-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Consommation maximale publiée : 390 L/min. Pression de service prescrite : 6,3 bar. Les passages fabricants lus ne relient pas explicitement cette consommation à sa pression de mesure ; aucun besoin dimensionnant apparié ne peut être retenu."
};

export default product;
