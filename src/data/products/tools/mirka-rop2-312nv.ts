import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "mirka-rop2-312nv",
	"slug": "mirka-rop2-312nv",
	"brand": "Mirka",
	"model": "ROP2 312NV",
	"mpn": "8994210311",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "Mirka ROP2 312NV",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/mirka-rop2-312nv.webp",
		"alt": "Repères techniques Mirka ROP2 312NV, référence 8994210311",
		"sourceUrl": "https://cms.mirka.com/globalassets/msc/pdf/mirka-product-catalog-2022-low-res.pdf#page=118",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Mirka ROP2 312NV. La ROP2 312NV est la polisseuse orbitale sans aspiration à plateau 77 mm et orbite 12 mm. La ROP2 512NV reçoit 125 mm et publie 594 L/min contre 538 ici. Le diamètre change, tandis que l’orbite reste 12 mm. Le catalogue ne précise pas le régime de consommation : la valeur est conservée sans demande maximale par défaut.",
		"verifiedFacts": [
			"Plateau : 77 mm.",
			"Orbite : 12 mm.",
			"Aspiration : Sans aspiration, NV.",
			"Puissance : 276 W.",
			"Vitesse : 10 000 tr/min.",
			"Consommation, régime non précisé : 538 L/min."
		],
		"limitations": [
			"Régime du débit non précisé dans ce catalogue ; la pression de travail ne suffit pas à définir une mesure maximale/en charge.",
			"Catalogue 2022/2023 identifié ; équipement et disponibilité actuels à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Plateau",
			"value": "77 mm",
			"evidenceIds": [
				"mirka-rop2-312nv-reserved-20261103-1"
			]
		},
		{
			"label": "Orbite",
			"value": "12 mm",
			"evidenceIds": [
				"mirka-rop2-312nv-reserved-20261103-1"
			]
		},
		{
			"label": "Aspiration",
			"value": "Sans aspiration, NV",
			"evidenceIds": [
				"mirka-rop2-312nv-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "276 W",
			"evidenceIds": [
				"mirka-rop2-312nv-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse",
			"value": "10 000 tr/min",
			"evidenceIds": [
				"mirka-rop2-312nv-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "538 L/min",
			"evidenceIds": [
				"mirka-rop2-312nv-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "mirka-8994210311-20260927",
			"sourceUrl": "https://cms.mirka.com/globalassets/msc/pdf/mirka-product-catalog-2022-low-res.pdf#page=118",
			"sourceLabel": "Mirka Scandinavia, catalogue 2022/2023, p. 118, réf. 8994210311",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 538 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		},
		{
			"id": "mirka-rop2-312nv-reserved-20261103-1",
			"sourceUrl": "https://cms.mirka.com/globalassets/msc/pdf/mirka-product-catalog-2022-low-res.pdf#page=118",
			"sourceLabel": "Mirka : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 2ced0651411b4d8c2cd50ec1e250c15d9fda73d452ffd72b2a9cbe8910647fc2. La ROP2 312NV est la polisseuse orbitale sans aspiration à plateau 77 mm et orbite 12 mm. La ROP2 512NV reçoit 125 mm et publie 594 L/min contre 538 ici. Le diamètre change, tandis que l’orbite reste 12 mm. Le catalogue ne précise pas le régime de consommation : la valeur est conservée sans demande maximale par défaut."
		}
	],
	"fieldSources": {
		"mpn": [
			"mirka-8994210311-20260927"
		],
		"workingPressureBar": [
			"mirka-8994210311-20260927"
		],
		"airflowLpm": [
			"mirka-8994210311-20260927"
		],
		"airflowBasis": [
			"mirka-rop2-312nv-reserved-20261103-1"
		],
		"editorial": [
			"mirka-rop2-312nv-reserved-20261103-1"
		],
		"specifications": [
			"mirka-rop2-312nv-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 538,
		"typical": 538,
		"max": 538
	},
	"airflowBasis": "unqualified"
};

export default product;
