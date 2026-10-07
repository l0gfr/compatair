import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-smles135",
	"slug": "fiam-smles135",
	"brand": "Fiam",
	"model": "SMLES135",
	"mpn": "144693001",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Fiam SMLES135",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-smles135.webp",
		"alt": "Repères techniques Fiam SMLES135, référence 144693001",
		"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/smles135/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam SMLES135, référence 144693001. Le tableau fabricant publie 540 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 13500 tr/min. Masse publiée : 0.86 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 144693001.",
			"Vitesse à vide : 13500 tr/min.",
			"Masse publiée : 0.86 kg.",
			"Dimensions publiées : Ø 40 x L 185 x H 71 mm."
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
				"fiam-144693001-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-144693001-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "13500 tr/min",
			"evidenceIds": [
				"fiam-144693001-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.86 kg",
			"evidenceIds": [
				"fiam-144693001-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 40 x L 185 x H 71 mm",
			"evidenceIds": [
				"fiam-144693001-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "With lever with safety device",
			"evidenceIds": [
				"fiam-144693001-20260926"
			]
		},
		{
			"label": "Puissance",
			"value": "300 W",
			"evidenceIds": [
				"fiam-144693001-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-144693001-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/smles135/",
			"sourceLabel": "Fiam, fiche technique SMLES135, réf. 144693001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-144693001-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-44.pdf#page=9",
			"sourceLabel": "Fiam, brochure technique en-44, p. 9",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-144693001-20260926"
		],
		"workingPressureBar": [
			"fiam-144693001-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-144693001-20260926"
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
