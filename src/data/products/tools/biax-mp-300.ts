import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-mp-300",
	"slug": "biax-mp-300",
	"brand": "BIAX",
	"model": "MP 300",
	"mpn": "150800350",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "BIAX MP 300",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-mp-300.webp",
		"alt": "Repères techniques BIAX MP 300, référence 150800350",
		"sourceUrl": "https://biax.de/en/product/mp-300-en/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "MP 300 150800350 : marteau de 680 g à logement hexagonal S 12,5 × 36, contre 770 g pour le MP 450. Le catalogue prévoit des outils et un contre-appui selon le montage. Les 320 L/min déclarés à 6 bar ne décrivent pas tous les régimes en action.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 320 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150800350.",
			"Masse publiée : 680 g.",
			"Diamètre maximal de queue : S 12,5 x 36 hexagonal mm."
		],
		"limitations": [
			"Le logement ne vaut pas validation d’un outil de frappe quelconque. Vérifier l’accessoire, la retenue et l’usage dans la notice ; aucun cycle de travail n’est supposé.",
			"Le choix de la fraise, du disque ou de l’accessoire doit respecter la vitesse et les dimensions prescrites par BIAX.",
			"Débit déclaré par le fabricant, sans mesure physique CompatAir."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"evidenceIds": [
				"biax-150800350-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 320 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150800350-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "680 g",
			"evidenceIds": [
				"biax-150800350-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "S 12,5 x 36 hexagonal mm",
			"evidenceIds": [
				"biax-150800350-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150800350-20260926",
			"sourceUrl": "https://biax.de/en/product/mp-300-en/",
			"sourceLabel": "BIAX, fiche technique MP 300, réf. 150800350",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 320 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150800350-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=59",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 59",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		},
		{
			"id": "biax-150800360-20260926",
			"sourceUrl": "https://biax.de/en/product/mp-450-en/",
			"sourceLabel": "BIAX, fiche technique MP 450, réf. 150800360",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 320 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150800360-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=59",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 59",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150800350-20260926"
		],
		"workingPressureBar": [
			"biax-150800350-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150800350-20260926"
		],
		"airflowBasis": [
			"biax-150800350-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 320,
		"typical": 320,
		"max": 320
	},
	"airflowBasis": "unqualified"
};

export default product;
