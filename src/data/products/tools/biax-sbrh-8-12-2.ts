import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-sbrh-8-12-2",
	"slug": "biax-sbrh-8-12-2",
	"brand": "BIAX",
	"model": "SBRH 8-12/2",
	"mpn": "150020770",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "BIAX SBRH 8-12/2",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-sbrh-8-12-2.webp",
		"alt": "Repères techniques BIAX SBRH 8-12/2, référence 150020770",
		"sourceUrl": "https://biax.de/en/product/sbrh-8-12-2-12-000-1-min-zweihandschl/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX SBRH 8-12/2, référence 150020770. Le tableau fabricant publie 850 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : 400 W. Vitesse de rotation : 12.000 tr/min.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 850 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150020770.",
			"Puissance publiée : 400 W.",
			"Vitesse de rotation : 12.000 tr/min.",
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
				"biax-150020770-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 850 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150020770-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "400 W",
			"evidenceIds": [
				"biax-150020770-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "12.000 tr/min",
			"evidenceIds": [
				"biax-150020770-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1440 g",
			"evidenceIds": [
				"biax-150020770-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "8 mm",
			"evidenceIds": [
				"biax-150020770-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150020770-20260926",
			"sourceUrl": "https://biax.de/en/product/sbrh-8-12-2-12-000-1-min-zweihandschl/",
			"sourceLabel": "BIAX, fiche technique SBRH 8-12/2 – 12.000 1/min – two hands, réf. 150020770",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 850 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150020770-20260926-workingpressurebar-1",
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
			"biax-150020770-20260926"
		],
		"workingPressureBar": [
			"biax-150020770-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150020770-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 850,
		"typical": 850,
		"max": 850
	}
};

export default product;
