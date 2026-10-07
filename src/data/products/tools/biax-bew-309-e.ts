import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-bew-309-e",
	"slug": "biax-bew-309-e",
	"brand": "BIAX",
	"model": "BEW 309 E",
	"mpn": "150800726",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "BIAX BEW 309 E",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-bew-309-e.webp",
		"alt": "Repères techniques BIAX BEW 309 E, référence 150800726",
		"sourceUrl": "https://biax.de/en/product/bew-309-e-bis-senk-o-11-mm/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX BEW 309 E, référence 150800726. Le tableau fabricant publie 150 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : 20 W. Vitesse de rotation : adjustable 0-900 tr/min.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 150 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150800726.",
			"Puissance publiée : 20 W.",
			"Vitesse de rotation : adjustable 0-900 tr/min.",
			"Masse publiée : 240 g."
		],
		"limitations": [
			"Le choix de la fraise, du disque ou de l’accessoire doit respecter la vitesse et les dimensions prescrites par BIAX.",
			"Débit déclaré par le fabricant, sans mesure physique CompatAir."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"evidenceIds": [
				"biax-150800726-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 150 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150800726-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "20 W",
			"evidenceIds": [
				"biax-150800726-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "adjustable 0-900 tr/min",
			"evidenceIds": [
				"biax-150800726-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "240 g",
			"evidenceIds": [
				"biax-150800726-20260926"
			]
		},
		{
			"label": "Queue d’outil publiée",
			"value": "3 mm hexagonal",
			"evidenceIds": [
				"biax-150800726-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150800726-20260926",
			"sourceUrl": "https://biax.de/en/product/bew-309-e-bis-senk-o-11-mm/",
			"sourceLabel": "BIAX, fiche technique BEW 309 E – up to sink-Ø 11 mm, réf. 150800726",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 150 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150800726-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=40",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 40",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150800726-20260926"
		],
		"workingPressureBar": [
			"biax-150800726-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150800726-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 150,
		"typical": 150,
		"max": 150
	}
};

export default product;
