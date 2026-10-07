import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-wrh-6-20-2-zl-45",
	"slug": "biax-wrh-6-20-2-zl-45",
	"brand": "BIAX",
	"model": "WRH 6-20/2 ZL 45",
	"mpn": "150123500",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "BIAX WRH 6-20/2 ZL 45",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-wrh-6-20-2-zl-45.webp",
		"alt": "Repères techniques BIAX WRH 6-20/2 ZL 45, référence 150123500",
		"sourceUrl": "https://biax.de/en/product/wrh-6-20-2-zl-45-verlangerter-hals-45/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX WRH 6-20/2 ZL 45, référence 150123500. Le tableau fabricant publie 500 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : 300 W. Vitesse de rotation : 20.000 tr/min.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150123500.",
			"Puissance publiée : 300 W.",
			"Vitesse de rotation : 20.000 tr/min.",
			"Masse publiée : 980 g."
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
				"biax-150123500-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150123500-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "300 W",
			"evidenceIds": [
				"biax-150123500-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "20.000 tr/min",
			"evidenceIds": [
				"biax-150123500-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "980 g",
			"evidenceIds": [
				"biax-150123500-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "6 mm",
			"evidenceIds": [
				"biax-150123500-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150123500-20260926",
			"sourceUrl": "https://biax.de/en/product/wrh-6-20-2-zl-45-verlangerter-hals-45/",
			"sourceLabel": "BIAX, fiche technique WRH 6-20/2 ZL 45 – elongated neck 45 °, réf. 150123500",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150123500-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=30",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 30",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150123500-20260926"
		],
		"workingPressureBar": [
			"biax-150123500-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150123500-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 500,
		"typical": 500,
		"max": 500
	}
};

export default product;
