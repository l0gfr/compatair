import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-srd-8-30-2-sl",
	"slug": "biax-srd-8-30-2-sl",
	"brand": "BIAX",
	"model": "SRD 8-30/2 SL",
	"mpn": "150010922",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "BIAX SRD 8-30/2 SL",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-srd-8-30-2-sl.webp",
		"alt": "Repères techniques BIAX SRD 8-30/2 SL, référence 150010922",
		"sourceUrl": "https://biax.de/en/product/srd-8-30-2-sl-vibration-dampened/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX SRD 8-30/2 SL, référence 150010922. Le tableau fabricant publie 450 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : 240 W. Vitesse de rotation : 30.000 tr/min.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 450 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150010922.",
			"Puissance publiée : 240 W.",
			"Vitesse de rotation : 30.000 tr/min.",
			"Masse publiée : 500 g."
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
				"biax-150010922-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 450 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150010922-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "240 W",
			"evidenceIds": [
				"biax-150010922-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "30.000 tr/min",
			"evidenceIds": [
				"biax-150010922-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "500 g",
			"evidenceIds": [
				"biax-150010922-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "8 mm",
			"evidenceIds": [
				"biax-150010922-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150010922-20260926",
			"sourceUrl": "https://biax.de/en/product/srd-8-30-2-sl-vibration-dampened/",
			"sourceLabel": "BIAX, fiche technique SRD 8-30/2 SL – Vibration dampened, réf. 150010922",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 450 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150010922-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=20",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 20",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150010922-20260926"
		],
		"workingPressureBar": [
			"biax-150010922-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150010922-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 450,
		"typical": 450,
		"max": 450
	}
};

export default product;
