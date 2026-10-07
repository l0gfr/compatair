import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-fz31-90p",
	"slug": "fiam-fz31-90p",
	"brand": "Fiam",
	"model": "FZ31/90P",
	"mpn": "122395132",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Fiam FZ31/90P",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-fz31-90p.webp",
		"alt": "Repères techniques Fiam FZ31/90P, référence 122395132",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fz31-90p/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam FZ31/90P, référence 122395132. Le tableau fabricant publie 360 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 3100 tr/min. Masse publiée : 0.50 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 6 L/s, soit 360 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 122395132.",
			"Vitesse à vide : 3100 tr/min.",
			"Masse publiée : 0.50 kg.",
			"Dimensions publiées : Ø 31 x L 228 x H 47 mm."
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
				"fiam-122395132-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 6 L/s, soit 360 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-122395132-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3100 tr/min",
			"evidenceIds": [
				"fiam-122395132-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.50 kg",
			"evidenceIds": [
				"fiam-122395132-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 31 x L 228 x H 47 mm",
			"evidenceIds": [
				"fiam-122395132-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Lever start",
			"evidenceIds": [
				"fiam-122395132-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-122395132-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fz31-90p/",
			"sourceLabel": "Fiam, fiche technique FZ31/90P, réf. 122395132",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 6 L/s, soit 360 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-122395132-20260926-workingpressurebar-1",
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
			"fiam-122395132-20260926"
		],
		"workingPressureBar": [
			"fiam-122395132-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-122395132-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 360,
		"typical": 360,
		"max": 360
	}
};

export default product;
