import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rodcraft-rc5150",
	"slug": "rodcraft-rc5150",
	"brand": "Rodcraft",
	"model": "RC5150",
	"mpn": "8951171023",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Rodcraft RC5150",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rodcraft-rc5150.webp",
		"alt": "Repères techniques Rodcraft RC5150, référence 8951171023",
		"sourceUrl": "https://www.rodcraft.com/en/products/8951171023",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Rodcraft RC5150. La RC5150 est le marteau à emmanchement hexagonal 11 mm, course 60 mm et 6 J. La fiche distingue 6,7 L/s en charge de 3,3 L/s à vide. Elle publie séparément un maximum dynamique de 6,3 bar : ce maximum n’établit pas la pression exacte de la mesure de consommation.",
		"verifiedFacts": [
			"Emmanchement : Hexagonal 11 mm.",
			"Cadence : 3 000 coups/min.",
			"Course : 60 mm.",
			"Énergie : 6 J.",
			"Masse : 1,5 kg.",
			"Débit en charge publié : 6,7 L/s (402 L/min).",
			"Débit à vide distinct : 3,3 L/s."
		],
		"limitations": [
			"Pression de mesure de consommation non explicitement appariée au débit en charge. Le calcul demeure indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Emmanchement",
			"value": "Hexagonal 11 mm",
			"evidenceIds": [
				"rodcraft-rc5150-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "3 000 coups/min",
			"evidenceIds": [
				"rodcraft-rc5150-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "60 mm",
			"evidenceIds": [
				"rodcraft-rc5150-reserved-20261103-1"
			]
		},
		{
			"label": "Énergie",
			"value": "6 J",
			"evidenceIds": [
				"rodcraft-rc5150-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,5 kg",
			"evidenceIds": [
				"rodcraft-rc5150-reserved-20261103-1"
			]
		},
		{
			"label": "Débit en charge publié",
			"value": "6,7 L/s (402 L/min)",
			"evidenceIds": [
				"rodcraft-rc5150-reserved-20261103-1"
			]
		},
		{
			"label": "Débit à vide distinct",
			"value": "3,3 L/s",
			"evidenceIds": [
				"rodcraft-rc5150-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "rodcraft-8951171023-20260927",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951171023",
			"sourceLabel": "Rodcraft, fiche technique officielle RC5150, réf. 8951171023",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 6.7 L/s. Consommation à vide publiée : 3.3 L/s. Valeur retenue : 402 L/min (maximum des régimes documentés, L/s × 60)."
		},
		{
			"id": "rodcraft-rc5150-reserved-20261103-1",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951171023",
			"sourceLabel": "Rodcraft : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 33c6016376cfc4301a729b97b3b5549845fa2fd76dd9204481e5ea25cc46e2ec. La RC5150 est le marteau à emmanchement hexagonal 11 mm, course 60 mm et 6 J. La fiche distingue 6,7 L/s en charge de 3,3 L/s à vide. Elle publie séparément un maximum dynamique de 6,3 bar : ce maximum n’établit pas la pression exacte de la mesure de consommation."
		}
	],
	"fieldSources": {
		"mpn": [
			"rodcraft-8951171023-20260927"
		],
		"workingPressureBar": [
			"rodcraft-rc5150-reserved-20261103-1"
		],
		"demandModel": [
			"rodcraft-rc5150-reserved-20261103-1"
		],
		"demandExplanation": [
			"rodcraft-rc5150-reserved-20261103-1"
		],
		"editorial": [
			"rodcraft-rc5150-reserved-20261103-1"
		],
		"specifications": [
			"rodcraft-rc5150-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Le débit en charge est conservé dans les spécifications ; la fiche indique séparément le plafond de pression, sans appariement explicite de la mesure."
};

export default product;
