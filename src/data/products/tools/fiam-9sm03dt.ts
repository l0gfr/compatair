import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-9sm03dt",
	"slug": "fiam-9sm03dt",
	"brand": "Fiam",
	"model": "9SM03DT",
	"mpn": "149561016",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Fiam 9SM03DT",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-9sm03dt.webp",
		"alt": "Repères techniques Fiam 9SM03DT, référence 149561016",
		"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/9sm03dt/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "9SM03DT 149561016 : meuleuse droite à commande rotative, 100 000 tr/min et pince de 3,175 mm. La SMZ15D voisine tourne à 22 000 tr/min sur une autre capacité de pince. Les 3,3 L/s déclarés correspondent à 198 L/min à 6,3 bar, sans qualification de régime.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 3.3 L/s, soit 198 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 149561016.",
			"Vitesse à vide : 100.000 tr/min.",
			"Masse publiée : 0.3 kg.",
			"Dimensions publiées : Ø 30 x L 160 mm."
		],
		"limitations": [
			"La vitesse maximale de l’accessoire et ses dimensions sont décisives. Un débit plus faible ne rend pas les fraises des deux outils interchangeables.",
			"Le couple éventuel est indicatif : l’assemblage, l’accessoire et la pression dynamique influencent le résultat.",
			"Consommation déclarée par le fabricant, sans essai indépendant ni garantie d’un maximum à tous les régimes."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"evidenceIds": [
				"fiam-149561016-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 3.3 L/s, soit 198 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-149561016-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "100.000 tr/min",
			"evidenceIds": [
				"fiam-149561016-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.3 kg",
			"evidenceIds": [
				"fiam-149561016-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 30 x L 160 mm",
			"evidenceIds": [
				"fiam-149561016-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "With rotary valve",
			"evidenceIds": [
				"fiam-149561016-20260926"
			]
		},
		{
			"label": "Puissance",
			"value": "90 W",
			"evidenceIds": [
				"fiam-149561016-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-149561016-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/9sm03dt/",
			"sourceLabel": "Fiam, fiche technique 9SM03DT, réf. 149561016",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 3.3 L/s, soit 198 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-149561016-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-44.pdf#page=7",
			"sourceLabel": "Fiam, brochure technique en-44, p. 7",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
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
			"fiam-149561016-20260926"
		],
		"workingPressureBar": [
			"fiam-149561016-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-149561016-20260926"
		],
		"airflowBasis": [
			"fiam-149561016-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 198,
		"typical": 198,
		"max": 198
	},
	"airflowBasis": "unqualified"
};

export default product;
