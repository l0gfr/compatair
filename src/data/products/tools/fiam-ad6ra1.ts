import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-ad6ra1",
	"slug": "fiam-ad6ra1",
	"brand": "Fiam",
	"model": "AD6RA1",
	"mpn": "114893986",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam AD6RA1",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-ad6ra1.webp",
		"alt": "Repères techniques Fiam AD6RA1, référence 114893986",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/ad6ra1/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam AD6RA1, référence 114893986. Le tableau fabricant publie 600 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 2.5 ÷ 6 Nm. Vitesse à vide : 1150 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 114893986.",
			"Couple de serrage indicatif : 2.5 ÷ 6 Nm.",
			"Vitesse à vide : 1150 tr/min.",
			"Masse publiée : 1.2 kg."
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
				"fiam-114893986-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-114893986-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "2.5 ÷ 6 Nm",
			"evidenceIds": [
				"fiam-114893986-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1150 tr/min",
			"evidenceIds": [
				"fiam-114893986-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.2 kg",
			"evidenceIds": [
				"fiam-114893986-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "ø 40 x L 304.5 mm",
			"evidenceIds": [
				"fiam-114893986-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "MALE SQUARE  DRIVE 3/8\"",
			"evidenceIds": [
				"fiam-114893986-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Lever start",
			"evidenceIds": [
				"fiam-114893986-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-114893986-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/ad6ra1/",
			"sourceLabel": "Fiam, fiche technique AD6RA1, réf. 114893986",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-114893986-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-26.pdf#page=8",
			"sourceLabel": "Fiam, brochure technique en-26, p. 8",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-114893986-20260926"
		],
		"workingPressureBar": [
			"fiam-114893986-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-114893986-20260926"
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
