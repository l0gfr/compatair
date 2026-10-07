import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-srd-8-20-2-l200",
	"slug": "biax-srd-8-20-2-l200",
	"brand": "BIAX",
	"model": "SRD 8-20/2 L200",
	"mpn": "150020720",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "BIAX SRD 8-20/2 L200",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-srd-8-20-2-l200.webp",
		"alt": "Repères techniques BIAX SRD 8-20/2 L200, référence 150020720",
		"sourceUrl": "https://biax.de/en/product/srd-8-20-2-l200-verl-spindel-200-mm/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX SRD 8-20/2 L200, référence 150020720. Le tableau fabricant publie 500 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : 300 W. Vitesse de rotation : 20.000 tr/min.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150020720.",
			"Puissance publiée : 300 W.",
			"Vitesse de rotation : 20.000 tr/min.",
			"Masse publiée : 940 g."
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
				"biax-150020720-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150020720-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "300 W",
			"evidenceIds": [
				"biax-150020720-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "20.000 tr/min",
			"evidenceIds": [
				"biax-150020720-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "940 g",
			"evidenceIds": [
				"biax-150020720-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "8 mm",
			"evidenceIds": [
				"biax-150020720-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150020720-20260926",
			"sourceUrl": "https://biax.de/en/product/srd-8-20-2-l200-verl-spindel-200-mm/",
			"sourceLabel": "BIAX, fiche technique SRD 8-20/2 L200 – ext. Spindel 200 mm, réf. 150020720",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150020720-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=22",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 22",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150020720-20260926"
		],
		"workingPressureBar": [
			"biax-150020720-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150020720-20260926"
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
