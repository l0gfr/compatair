import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-sarh-820",
	"slug": "biax-sarh-820",
	"brand": "BIAX",
	"model": "SARH 820",
	"mpn": "150021125",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "BIAX SARH 820",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-sarh-820.webp",
		"alt": "Repères techniques BIAX SARH 820, référence 150021125",
		"sourceUrl": "https://biax.de/en/product/sarh-820-20-000-1-min-extra-robust/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SARH 820 150021125 : meuleuse à levier avec double palier avant et 20 000 tr/min. La SBRH 820 voisine utilise une autre construction de nez. La fiche HTML de la SARH donne 300 W, tandis que le catalogue donne 310 W ; les 500 L/min à 6 bar sont conservés sans qualification de régime.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150021125.",
			"Puissance publiée : Fiche HTML : 300 W ; catalogue PDF : 310 W, écart non résolu.",
			"Vitesse de rotation : 20.000 tr/min.",
			"Masse publiée : 830 g."
		],
		"limitations": [
			"La puissance contradictoire n’est pas utilisée pour choisir le compresseur. La pince, la fraise et leurs vitesses admissibles doivent être vérifiées avec la référence livrée.",
			"Le choix de la fraise, du disque ou de l’accessoire doit respecter la vitesse et les dimensions prescrites par BIAX.",
			"Débit déclaré par le fabricant, sans mesure physique CompatAir."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"evidenceIds": [
				"biax-150021125-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150021125-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "Fiche HTML : 300 W ; catalogue PDF : 310 W, écart non résolu.",
			"evidenceIds": [
				"biax-150021125-20260926",
				"biax-150021125-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "20.000 tr/min",
			"evidenceIds": [
				"biax-150021125-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "830 g",
			"evidenceIds": [
				"biax-150021125-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "8 mm",
			"evidenceIds": [
				"biax-150021125-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150021125-20260926",
			"sourceUrl": "https://biax.de/en/product/sarh-820-20-000-1-min-extra-robust/",
			"sourceLabel": "BIAX, fiche technique SARH 820 – 20.000 1/min, extra strong, réf. 150021125",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150021125-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=23",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 23",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		},
		{
			"id": "biax-150021115-20260926",
			"sourceUrl": "https://biax.de/en/product/sbrh-820-20-000-1-min-zweihandschl/",
			"sourceLabel": "BIAX, fiche technique SBRH 820 – Two hand grinder, réf. 150021115",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150021115-20260926-workingpressurebar-1",
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
			"biax-150021125-20260926"
		],
		"workingPressureBar": [
			"biax-150021125-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150021125-20260926"
		],
		"airflowBasis": [
			"biax-150021125-20260926"
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
