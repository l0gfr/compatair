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
		"overview": "HB 15-1 150123645 : ponceuse pour bandes de 8 ou 15 mm, bras au choix et vitesse publiée de 20 000 tr/min. La HB 3 voisine vise un autre montage de bande. La fiche HTML annonce 300 W alors que le catalogue indique 250 W pour le même code ; cet écart reste à confirmer auprès du fabricant.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 420 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150123645.",
			"Puissance de la fiche HTML : 300 W ; catalogue PDF : 250 W, écart non résolu.",
			"Vitesse de rotation : 20.000 tr/min.",
			"Masse publiée : 960 g."
		],
		"limitations": [
			"Les 420 L/min ne sont pas qualifiés en charge ; aucun verdict continu n’en est tiré. Le bras et la longueur de bande doivent être vérifiés, sans arbitrage entre les deux puissances.",
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
			"value": "Fiche HTML : 300 W ; catalogue PDF : 250 W, écart non résolu.",
			"evidenceIds": [
				"biax-150123645-20260926",
				"biax-150123645-20260926-workingpressurebar-1"
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
		},
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
		],
		"airflowBasis": [
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
	},
	"airflowBasis": "unqualified"
};

export default product;
