import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-md-100",
	"slug": "biax-md-100",
	"brand": "BIAX",
	"model": "MD 100",
	"mpn": "150800310",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "BIAX MD 100",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-md-100.webp",
		"alt": "Repères techniques BIAX MD 100, référence 150800310",
		"sourceUrl": "https://biax.de/en/product/md-100/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "MD 100 : burin alternatif à queue hexagonale de 6 mm, course de 14 mm et 3 000 coups/min, masse publiée de 530 g. Le GMD 3 voisin est un micro-burin à queue de 3 mm et course de 9 mm. La fiche MD 100 annonce 130 L/min, contre 140 dans le catalogue.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"Référence fabricant : 150800310.",
			"Masse publiée : 530 g.",
			"Diamètre maximal de queue : 6 mm hexagonal."
		],
		"limitations": [
			"Les deux consommations restent non départagées ; le dimensionnement est indéterminé.",
			"Le mouvement est alternatif. La queue hexagonale de 6 mm ne désigne pas une pince de meuleuse ni une capacité de perçage."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"evidenceIds": [
				"biax-150800310-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "530 g",
			"evidenceIds": [
				"biax-150800310-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "6 mm hexagonal",
			"evidenceIds": [
				"biax-150800310-20260926"
			]
		},
		{
			"label": "Consommations constructeur non départagées",
			"value": "Fiche web : 130 L/min ; catalogue page 58 : 140 L/min.",
			"evidenceIds": [
				"biax-150800310-20260926",
				"biax-150800310-20260926-workingpressurebar-1"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150800310-20260926",
			"sourceUrl": "https://biax.de/en/product/md-100/",
			"sourceLabel": "BIAX, fiche technique MD 100, réf. 150800310",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 130 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150800310-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=58",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 58",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150800310-20260926"
		],
		"workingPressureBar": [
			"biax-150800310-20260926-workingpressurebar-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Deux sources constructeur publient des consommations différentes pour cette référence ; aucun débit unique n’est retenu pour le calcul. Consulter les limites détaillées."
};

export default product;
