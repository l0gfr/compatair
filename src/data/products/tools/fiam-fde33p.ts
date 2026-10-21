import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-fde33p",
	"slug": "fiam-fde33p",
	"brand": "Fiam",
	"model": "FDE33P",
	"mpn": "124610552",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Fiam FDE33P",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-fde33p.webp",
		"alt": "Repères techniques Fiam FDE33P, référence 124610552",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fde33p/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "FDE33P 124610552 : perceuse pistolet sans mandrin, sortie 3/8-24 UNF et 3 300 tr/min. La FDE26PC voisine est livrée avec mandrin à clé et tourne à 2 600 tr/min. Les deux annoncent 10 L/s à 6,3 bar, soit 600 L/min, mais la masse de 0,72 kg de la FDE33P n’inclut pas un mandrin qui n’est pas fourni. La capacité annoncée 1–10 mm ne modifie pas cette fourniture.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 124610552.",
			"Vitesse à vide : 3300 tr/min.",
			"Masse publiée : 0.72 kg.",
			"Dimensions publiées : Ø 38 x L 165 x H 155 mm."
		],
		"limitations": [
			"Le mandrin, le foret et la matière doivent être qualifiés. La consommation ne précise pas le régime et ne constitue pas un maximum en charge.",
			"Le couple éventuel est indicatif : l’assemblage, l’accessoire et la pression dynamique influencent le résultat.",
			"Consommation déclarée par le fabricant, sans essai indépendant ni garantie d’un maximum à tous les régimes."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"evidenceIds": [
				"fiam-124610552-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-124610552-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3300 tr/min",
			"evidenceIds": [
				"fiam-124610552-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.72 kg",
			"evidenceIds": [
				"fiam-124610552-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 38 x L 165 x H 155 mm",
			"evidenceIds": [
				"fiam-124610552-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push button",
			"evidenceIds": [
				"fiam-124610552-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-124610552-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fde33p/",
			"sourceLabel": "Fiam, fiche technique FDE33P, réf. 124610552",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-124610552-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-34.pdf#page=13",
			"sourceLabel": "Fiam, brochure technique en-34, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "fiam-124611563-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fde26pc/",
			"sourceLabel": "Fiam, fiche technique FDE26PC, réf. 124611563",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-124611563-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-34.pdf#page=13",
			"sourceLabel": "Fiam, brochure technique en-34, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "fiam-124611553-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fde26pa/",
			"sourceLabel": "Fiam, fiche technique FDE26PA, réf. 124611553",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-124611553-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-34.pdf#page=13",
			"sourceLabel": "Fiam, brochure technique en-34, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "fiam-122311145-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fz45c/",
			"sourceLabel": "Fiam, fiche technique FZ45C, réf. 122311145",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 6 L/s, soit 360 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-122311145-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-34.pdf#page=9",
			"sourceLabel": "Fiam, brochure technique en-34, p. 9",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-124610552-20260926"
		],
		"workingPressureBar": [
			"fiam-124610552-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-124610552-20260926"
		],
		"airflowBasis": [
			"fiam-124610552-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	},
	"airflowBasis": "unqualified"
};

export default product;
