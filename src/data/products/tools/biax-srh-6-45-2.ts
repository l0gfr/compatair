import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-srh-6-45-2",
	"slug": "biax-srh-6-45-2",
	"brand": "BIAX",
	"model": "SRH 6-45/2",
	"mpn": "150010760",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "BIAX SRH 6-45/2",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-srh-6-45-2.webp",
		"alt": "Repères techniques BIAX SRH 6-45/2, référence 150010760",
		"sourceUrl": "https://biax.de/en/product/srh-6-45-2-45-000-1-min-hebelventil/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX SRH 6-45/2, référence 150010760. Le tableau fabricant publie 380 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : 260 W. Vitesse de rotation : 45.000 tr/min.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 380 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150010760.",
			"Puissance publiée : 260 W.",
			"Vitesse de rotation : 45.000 tr/min.",
			"Masse publiée : 360 g."
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
				"biax-150010760-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 380 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150010760-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "260 W",
			"evidenceIds": [
				"biax-150010760-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "45.000 tr/min",
			"evidenceIds": [
				"biax-150010760-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "360 g",
			"evidenceIds": [
				"biax-150010760-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "6 mm",
			"evidenceIds": [
				"biax-150010760-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150010760-20260926",
			"sourceUrl": "https://biax.de/en/product/srh-6-45-2-45-000-1-min-hebelventil/",
			"sourceLabel": "BIAX, fiche technique SRH 6-45/2 – 45.000 1/min, lever valve, réf. 150010760",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 380 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150010760-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=18",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 18",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150010760-20260926"
		],
		"workingPressureBar": [
			"biax-150010760-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150010760-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 380,
		"typical": 380,
		"max": 380
	}
};

export default product;
