import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-sard-820",
	"slug": "biax-sard-820",
	"brand": "BIAX",
	"model": "SARD 820",
	"mpn": "150021105",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "BIAX SARD 820",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-sard-820.webp",
		"alt": "Repères techniques BIAX SARD 820, référence 150021105",
		"sourceUrl": "https://biax.de/en/product/sard-820-20-000-1-min-extra-robust/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SARD 820 : meuleuse robuste à double roulement avant, 20 000 tr/min, queue maximale de 8 mm et pince de 6 mm fournie. La SARD 830 voisine doit être distinguée par son code et ses dimensions, sans transférer ses performances à la 820. Pour la 820, la fiche web annonce 300 W et le catalogue 310 W ; aucune puissance unique n’est choisie.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150021105.",
			"Vitesse de rotation : 20.000 tr/min.",
			"Masse publiée : 770 g."
		],
		"limitations": [
			"Les 500 L/min à 6 bar n’ont pas de régime de charge qualifié ; le calcul ne valide pas un fonctionnement continu.",
			"La queue maximale admissible n’est pas le diamètre de toute pince livrée. Respecter les dimensions et vitesses du consommable."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"evidenceIds": [
				"biax-150021105-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150021105-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "20.000 tr/min",
			"evidenceIds": [
				"biax-150021105-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "770 g",
			"evidenceIds": [
				"biax-150021105-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "8 mm",
			"evidenceIds": [
				"biax-150021105-20260926"
			]
		},
		{
			"label": "Puissances constructeur non départagées",
			"value": "Fiche web : 300 W ; catalogue page 23 : 310 W.",
			"evidenceIds": [
				"biax-150021105-20260926",
				"biax-150021105-20260926-workingpressurebar-1"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150021105-20260926",
			"sourceUrl": "https://biax.de/en/product/sard-820-20-000-1-min-extra-robust/",
			"sourceLabel": "BIAX, fiche technique SARD 820 – 20.000 1/min, extra strong, réf. 150021105",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150021105-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=23",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 23",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150021105-20260926"
		],
		"workingPressureBar": [
			"biax-150021105-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150021105-20260926"
		],
		"airflowBasis": [
			"biax-150021105-20260926"
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
