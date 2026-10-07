import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-gmd-3",
	"slug": "biax-gmd-3",
	"brand": "BIAX",
	"model": "GMD 3",
	"mpn": "150800301",
	"categoryId": "graveur",
	"category": "graveur",
	"label": "BIAX GMD 3",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-gmd-3.webp",
		"alt": "Repères techniques BIAX GMD 3, référence 150800301",
		"sourceUrl": "https://biax.de/en/product/gmd-3/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX GMD 3, référence 150800301. Le tableau fabricant publie 80 L/min et une plage d’utilisation de 6 à 6 bar. Masse publiée : 100 g. Queue d’outil publiée : 3 mm hexagonal.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 80 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150800301.",
			"Masse publiée : 100 g.",
			"Queue d’outil publiée : 3 mm hexagonal."
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
				"biax-150800301-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 80 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150800301-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "100 g",
			"evidenceIds": [
				"biax-150800301-20260926"
			]
		},
		{
			"label": "Queue d’outil publiée",
			"value": "3 mm hexagonal",
			"evidenceIds": [
				"biax-150800301-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150800301-20260926",
			"sourceUrl": "https://biax.de/en/product/gmd-3/",
			"sourceLabel": "BIAX, fiche technique GMD 3, réf. 150800301",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 80 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150800301-20260926-workingpressurebar-1",
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
			"biax-150800301-20260926"
		],
		"workingPressureBar": [
			"biax-150800301-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150800301-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 80,
		"typical": 80,
		"max": 80
	}
};

export default product;
