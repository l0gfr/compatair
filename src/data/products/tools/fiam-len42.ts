import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-len42",
	"slug": "fiam-len42",
	"brand": "Fiam",
	"model": "LEN42",
	"mpn": "146095400",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Fiam LEN42",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-len42.webp",
		"alt": "Repères techniques Fiam LEN42, référence 146095400",
		"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/len42/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "LEN42 146095400 : ponceuse d’angle à sortie 5/8 W, 4 200 tr/min et accessoire jusqu’à 180 mm dans la table. La LEN22 voisine tourne à 2 200 tr/min ; les deux donnent 375 W, 2,1 kg et 10 L/s à 6,3 bar, soit 600 L/min. La vitesse admissible du plateau et de l’abrasif doit être vérifiée avec la référence choisie, même si la consommation est identique.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 146095400.",
			"Vitesse à vide : 4200 tr/min.",
			"Masse publiée : 2.1 kg.",
			"Dimensions publiées : Ø 51 x L 280 x H 112 mm."
		],
		"limitations": [
			"Le régime d’air n’est pas qualifié. Le filetage commun ne valide pas tout plateau, et le modèle LEN42 n’est pas présenté comme la variante à arrivée d’eau LEN17U.",
			"Le couple éventuel est indicatif : l’assemblage, l’accessoire et la pression dynamique influencent le résultat.",
			"Consommation déclarée par le fabricant, sans essai indépendant ni garantie d’un maximum à tous les régimes."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"evidenceIds": [
				"fiam-146095400-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-146095400-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4200 tr/min",
			"evidenceIds": [
				"fiam-146095400-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.1 kg",
			"evidenceIds": [
				"fiam-146095400-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 51 x L 280 x H 112 mm",
			"evidenceIds": [
				"fiam-146095400-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "With lever with safety device",
			"evidenceIds": [
				"fiam-146095400-20260926"
			]
		},
		{
			"label": "Puissance",
			"value": "375 W",
			"evidenceIds": [
				"fiam-146095400-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-146095400-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/len42/",
			"sourceLabel": "Fiam, fiche technique LEN42, réf. 146095400",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-146095400-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-44.pdf#page=13",
			"sourceLabel": "Fiam, brochure technique en-44, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "fiam-146095200-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/len22/",
			"sourceLabel": "Fiam, fiche technique LEN22, réf. 146095200",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-146095200-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-44.pdf#page=13",
			"sourceLabel": "Fiam, brochure technique en-44, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
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
			"fiam-146095400-20260926"
		],
		"workingPressureBar": [
			"fiam-146095400-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-146095400-20260926"
		],
		"airflowBasis": [
			"fiam-146095400-20260926"
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
