import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-fde49pa",
	"slug": "fiam-fde49pa",
	"brand": "Fiam",
	"model": "FDE49PA",
	"mpn": "124611551",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Fiam FDE49PA",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-fde49pa.webp",
		"alt": "Repères techniques Fiam FDE49PA, référence 124611551",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fde49pa/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam FDE49PA, référence 124611551. Le tableau fabricant publie 600 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 4900 tr/min. Masse publiée : 1.08 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 124611551.",
			"Vitesse à vide : 4900 tr/min.",
			"Masse publiée : 1.08 kg.",
			"Dimensions publiées : Ø 38 x L 223 x H 155 mm."
		],
		"limitations": [
			"Le couple éventuel est indicatif : l’assemblage, l’accessoire et la pression dynamique influencent le résultat.",
			"Consommation déclarée par le fabricant, sans essai indépendant ni garantie d’un maximum à tous les régimes."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"evidenceIds": [
				"fiam-124611551-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-124611551-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4900 tr/min",
			"evidenceIds": [
				"fiam-124611551-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.08 kg",
			"evidenceIds": [
				"fiam-124611551-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 38 x L 223 x H 155 mm",
			"evidenceIds": [
				"fiam-124611551-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push button",
			"evidenceIds": [
				"fiam-124611551-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-124611551-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fde49pa/",
			"sourceLabel": "Fiam, fiche technique FDE49PA, réf. 124611551",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-124611551-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-34.pdf#page=13",
			"sourceLabel": "Fiam, brochure technique en-34, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-124611551-20260926"
		],
		"workingPressureBar": [
			"fiam-124611551-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-124611551-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	}
};

export default product;
