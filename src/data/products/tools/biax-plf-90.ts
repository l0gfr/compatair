import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-plf-90",
	"slug": "biax-plf-90",
	"brand": "BIAX",
	"model": "PLF 90",
	"mpn": "150322890",
	"categoryId": "scie",
	"category": "scie",
	"label": "BIAX PLF 90",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-plf-90.webp",
		"alt": "Repères techniques BIAX PLF 90, référence 150322890",
		"sourceUrl": "https://biax.de/en/product/plf-90-robust-und-schlank/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX PLF 90, référence 150322890. Le tableau fabricant publie 250 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : 300 W. Masse publiée : 760 g.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 250 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150322890.",
			"Puissance publiée : 300 W.",
			"Masse publiée : 760 g.",
			"Diamètre maximal de queue : 6 mm."
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
				"biax-150322890-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 250 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150322890-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "300 W",
			"evidenceIds": [
				"biax-150322890-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "760 g",
			"evidenceIds": [
				"biax-150322890-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "6 mm",
			"evidenceIds": [
				"biax-150322890-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150322890-20260926",
			"sourceUrl": "https://biax.de/en/product/plf-90-robust-und-schlank/",
			"sourceLabel": "BIAX, fiche technique PLF 90 – robust and slim, réf. 150322890",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 250 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150322890-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=61",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 61",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150322890-20260926"
		],
		"workingPressureBar": [
			"biax-150322890-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150322890-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 250,
		"typical": 250,
		"max": 250
	}
};

export default product;
