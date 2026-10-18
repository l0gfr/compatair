import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-gmd-3",
	"slug": "biax-gmd-3",
	"brand": "BIAX",
	"model": "GMD 3",
	"mpn": "150800301",
	"categoryId": "graveur",
	"category": "graveur",
	"label": "BIAX GMD 3",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-gmd-3.webp",
		"alt": "Repères techniques BIAX GMD 3, référence 150800301",
		"sourceUrl": "https://biax.de/en/product/gmd-3/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "GMD 3 : micro-burin à mouvement alternatif, queue hexagonale de 3 mm, course de 9 mm et 3 000 coups/min, pour gravure et travaux fins. Le MD 100 voisin utilise une queue de 6 mm et une course de 14 mm. La fiche web donne 80 L/min pour le GMD 3, contre 45 dans le catalogue.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"Référence fabricant : 150800301.",
			"Masse publiée : 100 g.",
			"Queue d’outil publiée : 3 mm hexagonal."
		],
		"limitations": [
			"Les deux consommations constructeur restent contradictoires ; aucun débit concluant n’est retenu.",
			"Les coups/min ne sont pas des tr/min. Les outils de 3 et 6 mm ne sont pas assimilés."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"evidenceIds": [
				"biax-150800301-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "100 g",
			"evidenceIds": [
				"biax-150800301-20260926"
			]
		},
		{
			"label": "Queue d’outil publiée",
			"value": "3 mm hexagonal",
			"evidenceIds": [
				"biax-150800301-20260926"
			]
		},
		{
			"label": "Consommations constructeur non départagées",
			"value": "Fiche web : 80 L/min ; catalogue page 58 : 45 L/min.",
			"evidenceIds": [
				"biax-150800301-20260926",
				"biax-150800301-20260926-workingpressurebar-1"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150800301-20260926",
			"sourceUrl": "https://biax.de/en/product/gmd-3/",
			"sourceLabel": "BIAX, fiche technique GMD 3, réf. 150800301",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 80 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150800301-20260926-workingpressurebar-1",
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
			"biax-150800301-20260926"
		],
		"workingPressureBar": [
			"biax-150800301-20260926-workingpressurebar-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Deux sources constructeur publient des consommations différentes pour cette référence ; aucun débit unique n’est retenu pour le calcul. Consulter les limites détaillées."
};

export default product;
