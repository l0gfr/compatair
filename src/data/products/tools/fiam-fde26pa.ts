import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-fde26pa",
	"slug": "fiam-fde26pa",
	"brand": "Fiam",
	"model": "FDE26PA",
	"mpn": "124611553",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Fiam FDE26PA",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-fde26pa.webp",
		"alt": "Repères techniques Fiam FDE26PA, référence 124611553",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fde26pa/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "FDE26PA 124611553 : perceuse à poignée pistolet, 2 600 tr/min et masse de 1,08 kg. La FZ45C voisine est une exécution droite plus légère et plus rapide. Les débits déclarés sont respectivement 9 et 6 L/s à 6,3 bar ; l’accès et le montage de perçage précèdent cette comparaison.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 124611553.",
			"Vitesse à vide : 2600 tr/min.",
			"Masse publiée : 1.08 kg.",
			"Dimensions publiées : Ø 38 x L 223 x H 155 mm."
		],
		"limitations": [
			"Le régime de consommation n’est pas précisé. Le mandrin, le foret et la matière doivent être qualifiés sans déduire une capacité du débit seul.",
			"Le couple éventuel est indicatif : l’assemblage, l’accessoire et la pression dynamique influencent le résultat.",
			"Consommation déclarée par le fabricant, sans essai indépendant ni garantie d’un maximum à tous les régimes."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"evidenceIds": [
				"fiam-124611553-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-124611553-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2600 tr/min",
			"evidenceIds": [
				"fiam-124611553-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.08 kg",
			"evidenceIds": [
				"fiam-124611553-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 38 x L 223 x H 155 mm",
			"evidenceIds": [
				"fiam-124611553-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push button",
			"evidenceIds": [
				"fiam-124611553-20260926"
			]
		}
	],
	"evidence": [
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
			"fiam-124611553-20260926"
		],
		"workingPressureBar": [
			"fiam-124611553-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-124611553-20260926"
		],
		"airflowBasis": [
			"fiam-124611553-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 540,
		"typical": 540,
		"max": 540
	},
	"airflowBasis": "unqualified"
};

export default product;
