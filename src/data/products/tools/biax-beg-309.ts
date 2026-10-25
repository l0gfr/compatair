import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-beg-309",
	"slug": "biax-beg-309",
	"brand": "BIAX",
	"model": "BEG 309",
	"mpn": "150800745",
	"categoryId": "ebavureuse",
	"category": "ebavureuse",
	"label": "BIAX BEG 309",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-beg-309.webp",
		"alt": "Repères techniques BIAX BEG 309, référence 150800745",
		"sourceUrl": "https://biax.de/en/product/beg-309-bis-senk-o-55-mm/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BEG 309, référence 150800745 : ébavureur de trous à commande au levier. Le BE 309 voisin, référence 150800710, démarre par appui ; BIAX recommande la commande au levier lorsque le positionnement de la fraise à chanfreiner ne permet pas cet appui. Les deux règlent leur vitesse de 0 à 900 tr/min et acceptent une queue de 3 mm. Il s’agit d’ébavurer ou de chanfreiner un trou existant. Les 150 L/min sont publiés sans régime de mesure et la consigne de 6 bar ne les qualifie pas pour un calcul.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 150 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150800745.",
			"Puissance publiée : 20 W.",
			"Vitesse de rotation : adjustable 0-900 tr/min.",
			"Masse publiée : 250 g."
		],
		"limitations": [
			"Le choix de la fraise, du disque ou de l’accessoire doit respecter la vitesse et les dimensions prescrites par BIAX.",
			"Débit déclaré par le fabricant, sans mesure physique CompatAir.",
			"Outil pour ébavurer un trou déjà usiné ; aucun diamètre de queue ou de trou ne constitue ici une capacité de perçage."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"evidenceIds": [
				"biax-150800745-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 150 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150800745-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "20 W",
			"evidenceIds": [
				"biax-150800745-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "adjustable 0-900 tr/min",
			"evidenceIds": [
				"biax-150800745-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "250 g",
			"evidenceIds": [
				"biax-150800745-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "3 mm",
			"evidenceIds": [
				"biax-150800745-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150800745-20260926",
			"sourceUrl": "https://biax.de/en/product/beg-309-bis-senk-o-55-mm/",
			"sourceLabel": "BIAX, fiche technique BEG 309 – max. hole Ø 5,5 mm, réf. 150800745",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 150 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150800745-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=42",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 42",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		},
		{
			"id": "biax-150800710-20260926",
			"sourceUrl": "https://biax.de/en/product/be-309-bis-senk-o-55-mm/",
			"sourceLabel": "BIAX, fiche technique BE 309 – max. hole Ø 5,5 mm, réf. 150800710",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 150 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150800710-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=42",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 42",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150800745-20260926"
		],
		"workingPressureBar": [
			"biax-150800745-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150800745-20260926"
		],
		"airflowBasis": [
			"biax-150800745-20260926"
		],
		"category": [
			"biax-150800745-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 150,
		"typical": 150,
		"max": 150
	},
	"airflowBasis": "unqualified"
};

export default product;
