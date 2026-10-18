import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-be-1005",
	"slug": "biax-be-1005",
	"brand": "BIAX",
	"model": "BE 1005",
	"mpn": "150800800",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "BIAX BE 1005",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-be-1005.webp",
		"alt": "Repères techniques BIAX BE 1005, référence 150800800",
		"sourceUrl": "https://biax.de/en/product/be-1005-bis-senk-o-29-mm/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BE 1005 : outil d’ébavurage de trous jusqu’à 29 mm, queue admissible de 10 mm et vitesse réglable jusqu’à 550 tr/min. Le BE 805 voisin vise des dimensions plus petites. Pour le BE 1005, la fiche web donne 450 L/min tandis que le catalogue donne 480 L/min ; aucun débit unique n’est choisi pour conclure à la compatibilité.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"Référence fabricant : 150800800.",
			"Puissance publiée : 200 W.",
			"Vitesse de rotation : 0-550 regelbar tr/min.",
			"Masse publiée : 920 g."
		],
		"limitations": [
			"L’écart de consommation reste non résolu entre deux sources constructeur ; demander la notice de la machine exacte avant dimensionnement.",
			"Le diamètre maximal de trou ébavuré ne désigne pas un diamètre de perçage garanti."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"evidenceIds": [
				"biax-150800800-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "200 W",
			"evidenceIds": [
				"biax-150800800-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "0-550 regelbar tr/min",
			"evidenceIds": [
				"biax-150800800-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "920 g",
			"evidenceIds": [
				"biax-150800800-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "10 mm",
			"evidenceIds": [
				"biax-150800800-20260926"
			]
		},
		{
			"label": "Consommations constructeur non départagées",
			"value": "Fiche web : 450 L/min ; catalogue page 43 : 480 L/min.",
			"evidenceIds": [
				"biax-150800800-20260926",
				"biax-150800800-20260926-workingpressurebar-1"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150800800-20260926",
			"sourceUrl": "https://biax.de/en/product/be-1005-bis-senk-o-29-mm/",
			"sourceLabel": "BIAX, fiche technique BE 1005 – max. hole Ø 29 mm, réf. 150800800",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 450 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150800800-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=43",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150800800-20260926"
		],
		"workingPressureBar": [
			"biax-150800800-20260926-workingpressurebar-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Deux sources constructeur publient des consommations différentes pour cette référence ; aucun débit unique n’est retenu pour le calcul. Consulter les limites détaillées."
};

export default product;
