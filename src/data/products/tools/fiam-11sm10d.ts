import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-11sm10d",
	"slug": "fiam-11sm10d",
	"brand": "Fiam",
	"model": "11SM10D",
	"mpn": "149561006",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Fiam 11SM10D",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-11sm10d.webp",
		"alt": "Repères techniques Fiam 11SM10D, référence 149561006",
		"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/11sm10d/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "11SM10D 149561006 : micro-meuleuse droite à pince de 3 mm, 55 000 tr/min et corps de 19,5 mm de diamètre sur 120 mm. Le catalogue donne 0,125 kg, arrondi à 0,13 kg sur le web. Le choix doit respecter l’accessoire prévu à cette vitesse élevée, indépendamment du diamètre compact.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 2.5 L/s, soit 150 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 149561006.",
			"Vitesse à vide : 55.000 tr/min.",
			"Masse publiée : 0.13 kg.",
			"Dimensions publiées : Ø 19,5 x L 120 mm."
		],
		"limitations": [
			"Les 2,5 L/s, soit 150 L/min à 6,3 bar, ne sont pas accompagnés d’un régime de charge : le besoin continu reste indéterminé.",
			"Une consommation identique publiée pour un autre modèle ne démontre pas la même vitesse admissible ou la même interface."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"evidenceIds": [
				"fiam-149561006-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 2.5 L/s, soit 150 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-149561006-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "55.000 tr/min",
			"evidenceIds": [
				"fiam-149561006-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.13 kg",
			"evidenceIds": [
				"fiam-149561006-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 19,5 x L 120 mm",
			"evidenceIds": [
				"fiam-149561006-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "With sliding valve",
			"evidenceIds": [
				"fiam-149561006-20260926"
			]
		},
		{
			"label": "Puissance",
			"value": "110 W",
			"evidenceIds": [
				"fiam-149561006-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-149561006-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/11sm10d/",
			"sourceLabel": "Fiam, fiche technique 11SM10D, réf. 149561006",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 2.5 L/s, soit 150 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-149561006-20260926-workingpressurebar-1",
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
			"fiam-149561006-20260926"
		],
		"workingPressureBar": [
			"fiam-149561006-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-149561006-20260926"
		],
		"airflowBasis": [
			"fiam-149561006-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 150,
		"typical": 150,
		"max": 150
	},
	"airflowBasis": "unqualified"
};

export default product;
