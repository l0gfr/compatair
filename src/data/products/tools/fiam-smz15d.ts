import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-smz15d",
	"slug": "fiam-smz15d",
	"brand": "Fiam",
	"model": "SMZ15D",
	"mpn": "142313001",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Fiam SMZ15D",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-smz15d.webp",
		"alt": "Repères techniques Fiam SMZ15D, référence 142313001",
		"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/smz15d/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam SMZ15D, référence 142313001. Le tableau fabricant publie 360 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 22000 tr/min. Masse publiée : 0.37 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 6 L/s, soit 360 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 142313001.",
			"Vitesse à vide : 22000 tr/min.",
			"Masse publiée : 0.37 kg.",
			"Dimensions publiées : Ø 32 x L 155 mm."
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
				"fiam-142313001-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 6 L/s, soit 360 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-142313001-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "22000 tr/min",
			"evidenceIds": [
				"fiam-142313001-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.37 kg",
			"evidenceIds": [
				"fiam-142313001-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 32 x L 155 mm",
			"evidenceIds": [
				"fiam-142313001-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "With lever with safety device",
			"evidenceIds": [
				"fiam-142313001-20260926"
			]
		},
		{
			"label": "Puissance",
			"value": "130 W",
			"evidenceIds": [
				"fiam-142313001-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-142313001-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/smz15d/",
			"sourceLabel": "Fiam, fiche technique SMZ15D, réf. 142313001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 6 L/s, soit 360 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-142313001-20260926-workingpressurebar-1",
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
			"fiam-142313001-20260926"
		],
		"workingPressureBar": [
			"fiam-142313001-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-142313001-20260926"
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
