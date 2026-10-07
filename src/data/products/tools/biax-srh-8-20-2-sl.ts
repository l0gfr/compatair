import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-srh-8-20-2-sl",
	"slug": "biax-srh-8-20-2-sl",
	"brand": "BIAX",
	"model": "SRH 8-20/2 SL",
	"mpn": "150020805",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "BIAX SRH 8-20/2 SL",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-srh-8-20-2-sl.webp",
		"alt": "Repères techniques BIAX SRH 8-20/2 SL, référence 150020805",
		"sourceUrl": "https://biax.de/en/product/srh-8-20-2-sl-vibrationsgedampft/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX SRH 8-20/2 SL, référence 150020805. Le tableau fabricant publie 500 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : 300 W. Vitesse de rotation : 20.000 tr/min.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150020805.",
			"Puissance publiée : 300 W.",
			"Vitesse de rotation : 20.000 tr/min.",
			"Masse publiée : 680 g."
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
				"biax-150020805-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150020805-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "300 W",
			"evidenceIds": [
				"biax-150020805-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "20.000 tr/min",
			"evidenceIds": [
				"biax-150020805-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "680 g",
			"evidenceIds": [
				"biax-150020805-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "8 mm",
			"evidenceIds": [
				"biax-150020805-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150020805-20260926",
			"sourceUrl": "https://biax.de/en/product/srh-8-20-2-sl-vibrationsgedampft/",
			"sourceLabel": "BIAX, fiche technique SRH 8-20/2 SL – Vibration dampened, réf. 150020805",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150020805-20260926-workingpressurebar-1",
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
			"biax-150020805-20260926"
		],
		"workingPressureBar": [
			"biax-150020805-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150020805-20260926"
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
