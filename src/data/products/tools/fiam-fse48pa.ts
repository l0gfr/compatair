import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-fse48pa",
	"slug": "fiam-fse48pa",
	"brand": "Fiam",
	"model": "FSE48PA",
	"mpn": "124611542",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Fiam FSE48PA",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-fse48pa.webp",
		"alt": "Repères techniques Fiam FSE48PA, référence 124611542",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fse48pa/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam FSE48PA, référence 124611542. Le tableau fabricant publie 540 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 5400 tr/min. Masse publiée : 0.94 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 124611542.",
			"Vitesse à vide : 5400 tr/min.",
			"Masse publiée : 0.94 kg.",
			"Dimensions publiées : Ø 38 x L 196 x H 155 mm."
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
				"fiam-124611542-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-124611542-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5400 tr/min",
			"evidenceIds": [
				"fiam-124611542-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.94 kg",
			"evidenceIds": [
				"fiam-124611542-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 38 x L 196 x H 155 mm",
			"evidenceIds": [
				"fiam-124611542-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push button",
			"evidenceIds": [
				"fiam-124611542-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-124611542-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fse48pa/",
			"sourceLabel": "Fiam, fiche technique FSE48PA, réf. 124611542",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-124611542-20260926-workingpressurebar-1",
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
			"fiam-124611542-20260926"
		],
		"workingPressureBar": [
			"fiam-124611542-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-124611542-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 540,
		"typical": 540,
		"max": 540
	}
};

export default product;
