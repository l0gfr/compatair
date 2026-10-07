import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-sms30dz",
	"slug": "fiam-sms30dz",
	"brand": "Fiam",
	"model": "SMS30DZ",
	"mpn": "144613003",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Fiam SMS30DZ",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-sms30dz.webp",
		"alt": "Repères techniques Fiam SMS30DZ, référence 144613003",
		"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/sms30dz/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam SMS30DZ, référence 144613003. Le tableau fabricant publie 540 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 22000 tr/min. Masse publiée : 0.83 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 144613003.",
			"Vitesse à vide : 22000 tr/min.",
			"Masse publiée : 0.83 kg.",
			"Dimensions publiées : Ø 40 x L 245 mm."
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
				"fiam-144613003-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-144613003-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "22000 tr/min",
			"evidenceIds": [
				"fiam-144613003-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.83 kg",
			"evidenceIds": [
				"fiam-144613003-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 40 x L 245 mm",
			"evidenceIds": [
				"fiam-144613003-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "With lever with safety device",
			"evidenceIds": [
				"fiam-144613003-20260926"
			]
		},
		{
			"label": "Puissance",
			"value": "300 W",
			"evidenceIds": [
				"fiam-144613003-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-144613003-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/sms30dz/",
			"sourceLabel": "Fiam, fiche technique SMS30DZ, réf. 144613003",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-144613003-20260926-workingpressurebar-1",
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
			"fiam-144613003-20260926"
		],
		"workingPressureBar": [
			"fiam-144613003-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-144613003-20260926"
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
