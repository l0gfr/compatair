import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-be-805-h",
	"slug": "biax-be-805-h",
	"brand": "BIAX",
	"model": "BE 805 H",
	"mpn": "150810915",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "BIAX BE 805 H",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-be-805-h.webp",
		"alt": "Repères techniques BIAX BE 805 H, référence 150810915",
		"sourceUrl": "https://biax.de/en/product/be-805-h-mit-drehrichtungsanderung/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BE 805 H 150810915 : brosseuse à rotation réversible destinée notamment aux alésages, donnée pour 500 tr/min. La BE 805 150810901 voisine possède une autre commande et une vitesse réglable de 0 à 500 tr/min. Le débit de 280 L/min est annoncé à 6 bar sans régime précisé : la réversibilité et la brosse à monter ne se déduisent pas du seul besoin d’air.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 280 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150810915.",
			"Puissance publiée : 80 W.",
			"Vitesse de rotation : 500 tr/min.",
			"Masse publiée : 570 g."
		],
		"limitations": [
			"Les 80 W ne suffisent pas à valider le diamètre, la queue ou la vitesse admissible d’une brosse. La consommation en charge n’est pas établie par cette ligne.",
			"Le choix de la fraise, du disque ou de l’accessoire doit respecter la vitesse et les dimensions prescrites par BIAX.",
			"Débit déclaré par le fabricant, sans mesure physique CompatAir."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"evidenceIds": [
				"biax-150810915-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 280 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150810915-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "80 W",
			"evidenceIds": [
				"biax-150810915-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "500 tr/min",
			"evidenceIds": [
				"biax-150810915-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "570 g",
			"evidenceIds": [
				"biax-150810915-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "8 mm",
			"evidenceIds": [
				"biax-150810915-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150810915-20260926",
			"sourceUrl": "https://biax.de/en/product/be-805-h-mit-drehrichtungsanderung/",
			"sourceLabel": "BIAX, fiche technique BE 805 H – with rotation direction change, réf. 150810915",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 280 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150810915-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=55",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 55",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		},
		{
			"id": "biax-150810901-20260926",
			"sourceUrl": "https://biax.de/en/product/be-805-bis-senk-o-24-mm/",
			"sourceLabel": "BIAX, fiche technique BE 805 – max. hole Ø 24 mm, réf. 150810901",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 280 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150810901-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=42",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 42",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150810915-20260926"
		],
		"workingPressureBar": [
			"biax-150810915-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150810915-20260926"
		],
		"airflowBasis": [
			"biax-150810915-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 280,
		"typical": 280,
		"max": 280
	},
	"airflowBasis": "unqualified"
};

export default product;
