import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-sbrh-818",
	"slug": "biax-sbrh-818",
	"brand": "BIAX",
	"model": "SBRH 818",
	"mpn": "150021210",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "BIAX SBRH 818",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-sbrh-818.webp",
		"alt": "Repères techniques BIAX SBRH 818, référence 150021210",
		"sourceUrl": "https://biax.de/en/product/sbrh-818-18-000-1-min-zweihandschl/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX SBRH 818, référence 150021210. Le tableau fabricant publie 750 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : 550 W. Vitesse de rotation : 18.000 tr/min.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 750 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150021210.",
			"Puissance publiée : 550 W.",
			"Vitesse de rotation : 18.000 tr/min.",
			"Masse publiée : 1440 g."
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
				"biax-150021210-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 750 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150021210-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "550 W",
			"evidenceIds": [
				"biax-150021210-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "18.000 tr/min",
			"evidenceIds": [
				"biax-150021210-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1440 g",
			"evidenceIds": [
				"biax-150021210-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "8 mm",
			"evidenceIds": [
				"biax-150021210-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150021210-20260926",
			"sourceUrl": "https://biax.de/en/product/sbrh-818-18-000-1-min-zweihandschl/",
			"sourceLabel": "BIAX, fiche technique SBRH 818 – 18.000 1/min, lever valve, réf. 150021210",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 750 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150021210-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=24",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 24",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150021210-20260926"
		],
		"workingPressureBar": [
			"biax-150021210-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150021210-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 750,
		"typical": 750,
		"max": 750
	}
};

export default product;
