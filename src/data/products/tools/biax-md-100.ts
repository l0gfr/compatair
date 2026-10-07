import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-md-100",
	"slug": "biax-md-100",
	"brand": "BIAX",
	"model": "MD 100",
	"mpn": "150800310",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "BIAX MD 100",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-md-100.webp",
		"alt": "Repères techniques BIAX MD 100, référence 150800310",
		"sourceUrl": "https://biax.de/en/product/md-100/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX MD 100, référence 150800310. Le tableau fabricant publie 130 L/min et une plage d’utilisation de 6 à 6 bar. Masse publiée : 530 g. Diamètre maximal de queue : 6 mm hexagonal mm.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 130 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150800310.",
			"Masse publiée : 530 g.",
			"Diamètre maximal de queue : 6 mm hexagonal mm."
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
				"biax-150800310-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 130 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150800310-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "530 g",
			"evidenceIds": [
				"biax-150800310-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "6 mm hexagonal mm",
			"evidenceIds": [
				"biax-150800310-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150800310-20260926",
			"sourceUrl": "https://biax.de/en/product/md-100/",
			"sourceLabel": "BIAX, fiche technique MD 100, réf. 150800310",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 130 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150800310-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=58",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 58",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150800310-20260926"
		],
		"workingPressureBar": [
			"biax-150800310-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150800310-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 130,
		"typical": 130,
		"max": 130
	}
};

export default product;
