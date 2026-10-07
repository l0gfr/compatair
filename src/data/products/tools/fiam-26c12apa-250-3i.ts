import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-26c12apa-250-3i",
	"slug": "fiam-26c12apa-250-3i",
	"brand": "Fiam",
	"model": "26C12APA-250-3I",
	"mpn": "114807603",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam 26C12APA-250-3I",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-26c12apa-250-3i.webp",
		"alt": "Repères techniques Fiam 26C12APA-250-3I, référence 114807603",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/26c12apa-250-3i/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam 26C12APA-250-3I, référence 114807603. Le tableau fabricant publie 420 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 3.5 ÷ 12 Nm. Vitesse à vide : 250 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 7 L/s, soit 420 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 114807603.",
			"Couple de serrage indicatif : 3.5 ÷ 12 Nm.",
			"Vitesse à vide : 250 tr/min.",
			"Masse publiée : 1.16 kg."
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
				"fiam-114807603-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 7 L/s, soit 420 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-114807603-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "3.5 ÷ 12 Nm",
			"evidenceIds": [
				"fiam-114807603-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "250 tr/min",
			"evidenceIds": [
				"fiam-114807603-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.16 kg",
			"evidenceIds": [
				"fiam-114807603-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 37 x L 247 x H 155 mm",
			"evidenceIds": [
				"fiam-114807603-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "FEMALE HEXAGONAL DRIVE 1/4\"",
			"evidenceIds": [
				"fiam-114807603-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push button",
			"evidenceIds": [
				"fiam-114807603-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-114807603-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/26c12apa-250-3i/",
			"sourceLabel": "Fiam, fiche technique 26C12APA-250-3I, réf. 114807603",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 7 L/s, soit 420 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-114807603-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-98.pdf#page=4",
			"sourceLabel": "Fiam, brochure technique en-98, p. 4",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-114807603-20260926"
		],
		"workingPressureBar": [
			"fiam-114807603-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-114807603-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 420,
		"typical": 420,
		"max": 420
	}
};

export default product;
