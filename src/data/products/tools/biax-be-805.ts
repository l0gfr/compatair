import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-be-805",
	"slug": "biax-be-805",
	"brand": "BIAX",
	"model": "BE 805",
	"mpn": "150810901",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "BIAX BE 805",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-be-805.webp",
		"alt": "Repères techniques BIAX BE 805, référence 150810901",
		"sourceUrl": "https://biax.de/en/product/be-805-bis-senk-o-24-mm/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BE 805 150810901 : ébavureur de trous à démarrage par poussée et vitesse réglable de 0 à 500 tr/min, livré avec pince de 8 mm. Le BE 805 H voisin possède une commande et une rotation réversible différentes. Le catalogue propose pour le BE 805 des fraises à chanfreiner de 15 ou 25 mm, suivant la plage de trou. Les 280 L/min à 6 bar restent sans régime précisé ; la fonction et la fraise doivent être choisies avant le compresseur.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 280 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150810901.",
			"Puissance publiée : 80 W.",
			"Vitesse de rotation : adjustable 0-500 tr/min.",
			"Masse publiée : 520 g."
		],
		"limitations": [
			"Le diamètre de queue maximal ne valide pas toute fraise ni toute vitesse. La consommation sans régime ne démontre pas la suffisance en charge.",
			"Le choix de la fraise, du disque ou de l’accessoire doit respecter la vitesse et les dimensions prescrites par BIAX.",
			"Débit déclaré par le fabricant, sans mesure physique CompatAir."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"evidenceIds": [
				"biax-150810901-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 280 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150810901-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "80 W",
			"evidenceIds": [
				"biax-150810901-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "adjustable 0-500 tr/min",
			"evidenceIds": [
				"biax-150810901-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "520 g",
			"evidenceIds": [
				"biax-150810901-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "8 mm",
			"evidenceIds": [
				"biax-150810901-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150810901-20260926",
			"sourceUrl": "https://biax.de/en/product/be-805-bis-senk-o-24-mm/",
			"sourceLabel": "BIAX, fiche technique BE 805 – max. hole Ø 24 mm, réf. 150810901",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 280 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150810901-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=42",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 42",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		},
		{
			"id": "biax-150810915-20260926",
			"sourceUrl": "https://biax.de/en/product/be-805-h-mit-drehrichtungsanderung/",
			"sourceLabel": "BIAX, fiche technique BE 805 H – with rotation direction change, réf. 150810915",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 280 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150810915-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=55",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 55",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150810901-20260926"
		],
		"workingPressureBar": [
			"biax-150810901-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150810901-20260926"
		],
		"airflowBasis": [
			"biax-150810901-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 280,
		"typical": 280,
		"max": 280
	},
	"airflowBasis": "unqualified"
};

export default product;
