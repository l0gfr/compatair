import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-hbh-200",
	"slug": "biax-hbh-200",
	"brand": "BIAX",
	"model": "HBH 200",
	"mpn": "150123770",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "BIAX HBH 200",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-hbh-200.webp",
		"alt": "Repères techniques BIAX HBH 200, référence 150123770",
		"sourceUrl": "https://biax.de/en/product/hbh-200-bandbreiten-8mm-15mm-20mm/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "HBH 200 150123770 : ponceuse à bande à bras orientable, prévue pour des bandes de 330 mm en largeurs de 8, 15 ou 20 mm selon le bras. La HB 3 voisine reçoit d’autres bras et un moteur différent. La fiche HBH annonce 500 L/min tandis que le catalogue en donne 550, sans régime de mesure qualifié. Cet écart reste visible ; aucune de ces valeurs ne devient un maximum garanti en charge.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150123770.",
			"Puissance publiée : 300 W.",
			"Vitesse de rotation : 20.000 tr/min.",
			"Masse publiée : 870 g."
		],
		"limitations": [
			"Le catalogue indique que le bras n’est pas inclus avec la HBH 200 : vérifier sa référence et la fourniture. La vitesse de 20 000 tr/min ne se confond pas avec les 45 m/s de bande publiés.",
			"Le choix de la fraise, du disque ou de l’accessoire doit respecter la vitesse et les dimensions prescrites par BIAX.",
			"Débit déclaré par le fabricant, sans mesure physique CompatAir."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"evidenceIds": [
				"biax-150123770-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Fiche HTML : 500 L/min ; catalogue PDF : 550 L/min, écart non résolu et régime non précisé.",
			"evidenceIds": [
				"biax-150123770-20260926",
				"biax-150123770-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "300 W",
			"evidenceIds": [
				"biax-150123770-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "20.000 tr/min",
			"evidenceIds": [
				"biax-150123770-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "870 g",
			"evidenceIds": [
				"biax-150123770-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150123770-20260926",
			"sourceUrl": "https://biax.de/en/product/hbh-200-bandbreiten-8mm-15mm-20mm/",
			"sourceLabel": "BIAX, fiche technique HBH 200 – bandwidth 8mm, 15mm, 20mm, réf. 150123770",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150123770-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=37",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 37",
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
			"biax-150123770-20260926"
		],
		"workingPressureBar": [
			"biax-150123770-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150123770-20260926"
		],
		"airflowBasis": [
			"biax-150123770-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 500,
		"typical": 500,
		"max": 500
	},
	"airflowBasis": "unqualified"
};

export default product;
