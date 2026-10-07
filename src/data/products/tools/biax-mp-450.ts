import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-mp-450",
	"slug": "biax-mp-450",
	"brand": "BIAX",
	"model": "MP 450",
	"mpn": "150800360",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "BIAX MP 450",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-mp-450.webp",
		"alt": "Repères techniques BIAX MP 450, référence 150800360",
		"sourceUrl": "https://biax.de/en/product/mp-450-en/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX MP 450, référence 150800360. Le tableau fabricant publie 320 L/min et une plage d’utilisation de 6 à 6 bar. Masse publiée : 770 g. Diamètre maximal de queue : S 12,5 x 36 hexagonal mm.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 320 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150800360.",
			"Masse publiée : 770 g.",
			"Diamètre maximal de queue : S 12,5 x 36 hexagonal mm."
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
				"biax-150800360-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 320 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150800360-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "770 g",
			"evidenceIds": [
				"biax-150800360-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "S 12,5 x 36 hexagonal mm",
			"evidenceIds": [
				"biax-150800360-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150800360-20260926",
			"sourceUrl": "https://biax.de/en/product/mp-450-en/",
			"sourceLabel": "BIAX, fiche technique MP 450, réf. 150800360",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 320 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150800360-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=59",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 59",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150800360-20260926"
		],
		"workingPressureBar": [
			"biax-150800360-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150800360-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 320,
		"typical": 320,
		"max": 320
	}
};

export default product;
