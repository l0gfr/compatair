import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-hb-3",
	"slug": "biax-hb-3",
	"brand": "BIAX",
	"model": "HB 3",
	"mpn": "150122200",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "BIAX HB 3",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-hb-3.webp",
		"alt": "Repères techniques BIAX HB 3, référence 150122200",
		"sourceUrl": "https://biax.de/en/product/hb-3-bandbreiten-3mm-6mm-12mm/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "HB 3 150122200 : mini-ponceuse à bande dont les bras acceptent différentes largeurs et longueurs. La fiche HTML donne 152 W et 26 000 tr/min ; le catalogue PDF donne 150 W et 28 000 tr/min. Ces écarts restent visibles. La HB 15-1 voisine utilise d’autres bandes et un autre moteur ; les 340 L/min déclarés du HB 3 ne qualifient pas tous les régimes en charge.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 340 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150122200.",
			"Puissance publiée : Fiche HTML : 152 W ; catalogue PDF : 150 W, écart non résolu.",
			"Vitesse de rotation : Fiche HTML : 26 000 tr/min ; catalogue PDF : 28 000 tr/min, écart non résolu.",
			"Masse publiée : 590 g."
		],
		"limitations": [
			"Aucune puissance ou vitesse unique n’est arbitrée entre ces sources. Commander le bras, les rouleaux et la bande par références évite de déduire le montage du seul nom HB 3.",
			"Le choix de la fraise, du disque ou de l’accessoire doit respecter la vitesse et les dimensions prescrites par BIAX.",
			"Débit déclaré par le fabricant, sans mesure physique CompatAir."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"evidenceIds": [
				"biax-150122200-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 340 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150122200-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "Fiche HTML : 152 W ; catalogue PDF : 150 W, écart non résolu.",
			"evidenceIds": [
				"biax-150122200-20260926",
				"biax-150122200-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "Fiche HTML : 26 000 tr/min ; catalogue PDF : 28 000 tr/min, écart non résolu.",
			"evidenceIds": [
				"biax-150122200-20260926",
				"biax-150122200-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "590 g",
			"evidenceIds": [
				"biax-150122200-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150122200-20260926",
			"sourceUrl": "https://biax.de/en/product/hb-3-bandbreiten-3mm-6mm-12mm/",
			"sourceLabel": "BIAX, fiche technique HB 3 – Belt width 3mm, 6mm, 12mm, réf. 150122200",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 340 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150122200-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=34",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 34",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		},
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
			"biax-150122200-20260926"
		],
		"workingPressureBar": [
			"biax-150122200-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150122200-20260926"
		],
		"airflowBasis": [
			"biax-150122200-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 340,
		"typical": 340,
		"max": 340
	},
	"airflowBasis": "unqualified"
};

export default product;
