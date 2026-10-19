import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-len17",
	"slug": "fiam-len17",
	"brand": "Fiam",
	"model": "LEN17",
	"mpn": "146095100",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Fiam LEN17",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-len17.webp",
		"alt": "Repères techniques Fiam LEN17, référence 146095100",
		"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/len17/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "LEN17 146095100 : ponceuse à 1 700 tr/min et sortie filetée 5/8 W, livrée avec poignée latérale et écrou de maintien. La LES45 voisine tourne à 4 500 tr/min avec une autre sortie. Les 10 L/s du LEN17, soit 600 L/min à 6,3 bar, ne qualifient pas tous les régimes de charge.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 146095100.",
			"Vitesse à vide : 1700 tr/min.",
			"Masse publiée : 2.1 kg.",
			"Dimensions publiées : Ø 51 x L 280 x H 112 mm."
		],
		"limitations": [
			"Le LEN17U est une version distincte avec arrivée d’eau. Le suffixe et l’accessoire doivent être confirmés, sans assimiler un filetage à une pince.",
			"Le couple éventuel est indicatif : l’assemblage, l’accessoire et la pression dynamique influencent le résultat.",
			"Consommation déclarée par le fabricant, sans essai indépendant ni garantie d’un maximum à tous les régimes."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"evidenceIds": [
				"fiam-146095100-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-146095100-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1700 tr/min",
			"evidenceIds": [
				"fiam-146095100-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.1 kg",
			"evidenceIds": [
				"fiam-146095100-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 51 x L 280 x H 112 mm",
			"evidenceIds": [
				"fiam-146095100-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "With lever with safety device",
			"evidenceIds": [
				"fiam-146095100-20260926"
			]
		},
		{
			"label": "Puissance",
			"value": "375 W",
			"evidenceIds": [
				"fiam-146095100-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-146095100-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/len17/",
			"sourceLabel": "Fiam, fiche technique LEN17, réf. 146095100",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-146095100-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-44.pdf#page=13",
			"sourceLabel": "Fiam, brochure technique en-44, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "fiam-144695400-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/les45/",
			"sourceLabel": "Fiam, fiche technique LES45, réf. 144695400",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-144695400-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-44.pdf#page=13",
			"sourceLabel": "Fiam, brochure technique en-44, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-146095100-20260926"
		],
		"workingPressureBar": [
			"fiam-146095100-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-146095100-20260926"
		],
		"airflowBasis": [
			"fiam-146095100-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	},
	"airflowBasis": "unqualified"
};

export default product;
