import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-fo12p",
	"slug": "fiam-fo12p",
	"brand": "Fiam",
	"model": "FO12P",
	"mpn": "127011512",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Fiam FO12P",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-fo12p-technical-20261116-reviews.svg",
		"alt": "Repères techniques Fiam FO12P, référence 127011512",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fo12p/",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "La FO12P 127011512 est une perceuse pistolet de 745 W à 2 000 tr/min et sortie conique n°2. Les FO16P et FO20P ralentissent à 950 et 600 tr/min tout en restant à 14 L/s dans le tableau. Le choix porte donc sur la vitesse, la sortie et l’encombrement ; ce débit sans régime de mesure ne dimensionne pas le besoin en charge.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 14 L/s, soit 840 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 127011512.",
			"Vitesse à vide : 2000 tr/min.",
			"Masse publiée : 3.05 kg.",
			"Dimensions publiées : Ø 65 x L 200 x H 360 mm."
		],
		"limitations": [
			"Le couple éventuel est indicatif : l’assemblage, l’accessoire et la pression dynamique influencent le résultat.",
			"Consommation déclarée par le fabricant, sans essai indépendant ni garantie d’un maximum à tous les régimes.",
			"Le régime de mesure de la consommation publiée reste non précisé. Cette valeur documentaire ne permet pas de conclure au débit requis en charge."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"evidenceIds": [
				"fiam-127011512-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 14 L/s, soit 840 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-127011512-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2000 tr/min",
			"evidenceIds": [
				"fiam-127011512-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "3.05 kg",
			"evidenceIds": [
				"fiam-127011512-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 65 x L 200 x H 360 mm",
			"evidenceIds": [
				"fiam-127011512-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push button",
			"evidenceIds": [
				"fiam-127011512-20260926"
			]
		},
		{
			"label": "Puissance",
			"value": "745 W",
			"evidenceIds": [
				"fiam-127011512-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-127011512-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fo12p/",
			"sourceLabel": "Fiam, fiche technique FO12P, réf. 127011512",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 14 L/s, soit 840 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-127011512-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-34.pdf#page=13",
			"sourceLabel": "Fiam, brochure technique en-34, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "review:2026-11-16-reviews:fiam-fo12p:0",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fo12p/",
			"sourceLabel": "Fiam, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La FO12P 127011512 est une perceuse pistolet de 745 W à 2 000 tr/min et sortie conique n°2. Les FO16P et FO20P ralentissent à 950 et 600 tr/min tout en restant à 14 L/s dans le tableau. Le choix porte donc sur la vitesse, la sortie et l’encombrement ; ce débit sans régime de mesure ne dimensionne pas le besoin en charge. GET complet SHA-256 d89d9d33b3e057f9b7a21f1eaec04e9b199b7711f1eac0b72cfdc66dc132647b. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		},
		{
			"id": "review:2026-11-16-reviews:fiam-fo12p:1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-34.pdf",
			"sourceLabel": "Fiam, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La FO12P 127011512 est une perceuse pistolet de 745 W à 2 000 tr/min et sortie conique n°2. Les FO16P et FO20P ralentissent à 950 et 600 tr/min tout en restant à 14 L/s dans le tableau. Le choix porte donc sur la vitesse, la sortie et l’encombrement ; ce débit sans régime de mesure ne dimensionne pas le besoin en charge. GET complet SHA-256 4bc7b8a199880ed886511848f97c3d61ae9b8a50dbb5f0f0318dddc819dcbf62. Pages PDF lues : 13."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-127011512-20260926"
		],
		"workingPressureBar": [
			"fiam-127011512-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-127011512-20260926"
		],
		"airflowBasis": [
			"review:2026-11-16-reviews:fiam-fo12p:0",
			"review:2026-11-16-reviews:fiam-fo12p:1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 840,
		"typical": 840,
		"max": 840
	},
	"airflowBasis": "unqualified"
};

export default product;
