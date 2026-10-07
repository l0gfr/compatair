import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-smy50dc2",
	"slug": "fiam-smy50dc2",
	"brand": "Fiam",
	"model": "SMY50DC2",
	"mpn": "146313006",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Fiam SMY50DC2",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-smy50dc2.webp",
		"alt": "Repères techniques Fiam SMY50DC2, référence 146313006",
		"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/smy50dc2/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam SMY50DC2, référence 146313006. Le tableau fabricant publie 600 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 15000 tr/min. Masse publiée : 1.06 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 146313006.",
			"Vitesse à vide : 15000 tr/min.",
			"Masse publiée : 1.06 kg.",
			"Dimensions publiées : Ø 48 x L 235 mm."
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
				"fiam-146313006-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-146313006-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "15000 tr/min",
			"evidenceIds": [
				"fiam-146313006-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.06 kg",
			"evidenceIds": [
				"fiam-146313006-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 48 x L 235 mm",
			"evidenceIds": [
				"fiam-146313006-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "With lever with safety device",
			"evidenceIds": [
				"fiam-146313006-20260926"
			]
		},
		{
			"label": "Puissance",
			"value": "400 W",
			"evidenceIds": [
				"fiam-146313006-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-146313006-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/smy50dc2/",
			"sourceLabel": "Fiam, fiche technique SMY50DC2, réf. 146313006",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-146313006-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-44.pdf#page=7",
			"sourceLabel": "Fiam, brochure technique en-44, p. 7",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-146313006-20260926"
		],
		"workingPressureBar": [
			"fiam-146313006-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-146313006-20260926"
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
