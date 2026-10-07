import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-wrh-14-13-2",
	"slug": "biax-wrh-14-13-2",
	"brand": "BIAX",
	"model": "WRH 14-13/2",
	"mpn": "150912010",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "BIAX WRH 14-13/2",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-wrh-14-13-2.webp",
		"alt": "Repères techniques BIAX WRH 14-13/2, référence 150912010",
		"sourceUrl": "https://biax.de/en/product/wrh-14-13-2-mit-aufnahme-m-14/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX WRH 14-13/2, référence 150912010. Le tableau fabricant publie 700 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : 600 W. Vitesse de rotation : 13.000 tr/min.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 700 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150912010.",
			"Puissance publiée : 600 W.",
			"Vitesse de rotation : 13.000 tr/min.",
			"Masse publiée : 1760 g."
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
				"biax-150912010-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 700 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150912010-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "600 W",
			"evidenceIds": [
				"biax-150912010-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "13.000 tr/min",
			"evidenceIds": [
				"biax-150912010-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1760 g",
			"evidenceIds": [
				"biax-150912010-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "M 14 mm",
			"evidenceIds": [
				"biax-150912010-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150912010-20260926",
			"sourceUrl": "https://biax.de/en/product/wrh-14-13-2-mit-aufnahme-m-14/",
			"sourceLabel": "BIAX, fiche technique WRH 14-13/2 – with M 14 mounting, réf. 150912010",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 700 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150912010-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=31",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 31",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150912010-20260926"
		],
		"workingPressureBar": [
			"biax-150912010-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150912010-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 700,
		"typical": 700,
		"max": 700
	}
};

export default product;
