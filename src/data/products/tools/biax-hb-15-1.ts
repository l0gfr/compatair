import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-hb-15-1",
	"slug": "biax-hb-15-1",
	"brand": "BIAX",
	"model": "HB 15-1",
	"mpn": "150123645",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "BIAX HB 15-1",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-hb-15-1.webp",
		"alt": "Repères techniques BIAX HB 15-1, référence 150123645",
		"sourceUrl": "https://biax.de/en/product/hb-15-1-bandbreiten-8-mm-15-mm/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX HB 15-1, référence 150123645. Le tableau fabricant publie 420 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : 300 W. Vitesse de rotation : 20.000 tr/min.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 420 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150123645.",
			"Puissance publiée : 300 W.",
			"Vitesse de rotation : 20.000 tr/min.",
			"Masse publiée : 960 g."
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
				"biax-150123645-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 420 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150123645-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "300 W",
			"evidenceIds": [
				"biax-150123645-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "20.000 tr/min",
			"evidenceIds": [
				"biax-150123645-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "960 g",
			"evidenceIds": [
				"biax-150123645-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150123645-20260926",
			"sourceUrl": "https://biax.de/en/product/hb-15-1-bandbreiten-8-mm-15-mm/",
			"sourceLabel": "BIAX, fiche technique HB 15-1 – bandwidth 8 mm, 15 mm, réf. 150123645",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 420 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150123645-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=35",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 35",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150123645-20260926"
		],
		"workingPressureBar": [
			"biax-150123645-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150123645-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 420,
		"typical": 420,
		"max": 420
	}
};

export default product;
