import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-hb-12-s",
	"slug": "biax-hb-12-s",
	"brand": "BIAX",
	"model": "HB 12 S",
	"mpn": "150123105",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "BIAX HB 12 S",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-hb-12-s.webp",
		"alt": "Repères techniques BIAX HB 12 S, référence 150123105",
		"sourceUrl": "https://biax.de/en/product/hb-12-s-bandbreiten-6-mm-12-mm/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "HB 12 S : ponceuse à bandes de 6 ou 12 mm de largeur et de 610 mm de longueur, avec bras de contact orientable. Ce montage diffère d’une meuleuse à pince comme la SARD 820. La fiche web annonce 300 W et le catalogue 250 W : aucune puissance unique n’est arbitrée.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150123105.",
			"Vitesse de rotation : 20.000 tr/min.",
			"Masse publiée : 1470 g."
		],
		"limitations": [
			"Les 500 L/min à 6 bar restent sans régime de charge qualifié et ne valident pas une alimentation continue.",
			"La bande, le bras et le réglage doivent être prévus pour l’opération ; le chiffre de puissance contradictoire ne sert pas à comparer les capacités."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"evidenceIds": [
				"biax-150123105-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150123105-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "20.000 tr/min",
			"evidenceIds": [
				"biax-150123105-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1470 g",
			"evidenceIds": [
				"biax-150123105-20260926"
			]
		},
		{
			"label": "Puissances constructeur non départagées",
			"value": "Fiche web : 300 W ; catalogue page 36 : 250 W.",
			"evidenceIds": [
				"biax-150123105-20260926",
				"biax-150123105-20260926-workingpressurebar-1"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150123105-20260926",
			"sourceUrl": "https://biax.de/en/product/hb-12-s-bandbreiten-6-mm-12-mm/",
			"sourceLabel": "BIAX, fiche technique HB 12 S – bandwidth 6 mm, 12 mm, réf. 150123105",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150123105-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=36",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 36",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150123105-20260926"
		],
		"workingPressureBar": [
			"biax-150123105-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150123105-20260926"
		],
		"airflowBasis": [
			"biax-150123105-20260926"
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
