import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-srd-3-30-2",
	"slug": "biax-srd-3-30-2",
	"brand": "BIAX",
	"model": "SRD 3-30/2",
	"mpn": "150011522",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "BIAX SRD 3-30/2",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-srd-3-30-2.webp",
		"alt": "Repères techniques BIAX SRD 3-30/2, référence 150011522",
		"sourceUrl": "https://biax.de/en/product/srd-3-30-2-30-000-1-min-verl-spindel/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX SRD 3-30/2, référence 150011522. Le tableau fabricant publie 370 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : 150 W. Vitesse de rotation : 30.000 tr/min.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 370 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150011522.",
			"Puissance publiée : 150 W.",
			"Vitesse de rotation : 30.000 tr/min.",
			"Masse publiée : 345 g."
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
				"biax-150011522-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 370 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150011522-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "150 W",
			"evidenceIds": [
				"biax-150011522-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "30.000 tr/min",
			"evidenceIds": [
				"biax-150011522-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "345 g",
			"evidenceIds": [
				"biax-150011522-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "3 mm",
			"evidenceIds": [
				"biax-150011522-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150011522-20260926",
			"sourceUrl": "https://biax.de/en/product/srd-3-30-2-30-000-1-min-verl-spindel/",
			"sourceLabel": "BIAX, fiche technique SRD 3-30/2 – 30.000 1/min, ext. spindle, réf. 150011522",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 370 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150011522-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=21",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 21",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150011522-20260926"
		],
		"workingPressureBar": [
			"biax-150011522-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150011522-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 370,
		"typical": 370,
		"max": 370
	}
};

export default product;
