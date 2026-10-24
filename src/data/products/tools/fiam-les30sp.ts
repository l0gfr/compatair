import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-les30sp",
	"slug": "fiam-les30sp",
	"brand": "Fiam",
	"model": "LES30SP",
	"mpn": "144631101",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Fiam LES30SP",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-les30sp.webp",
		"alt": "Repères techniques Fiam LES30SP, référence 144631101",
		"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/les30sp/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "LES30SP, référence 144631101, est une ponceuse droite à sortie femelle M8 × 1,25 pour accessoire de 80 mm ; la LES34 voisine est une ponceuse d’angle à sortie M14 pour accessoire de 75 mm. Le montage du plateau doit respecter la forme et le filetage de chaque outil. La LES30SP tourne à 3 000 tr/min et pèse 0,70 kg, contre 3 400 tr/min et 1,00 kg pour LES34. Les deux publient 300 W et 9 l/s, soit 540 l/min, à la pression de mesure de 6,3 bar, sans maximum de consommation garanti à tous les régimes.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 144631101.",
			"Vitesse à vide : 3000 tr/min.",
			"Masse publiée : 0.7 kg.",
			"Dimensions publiées : Ø 40 x L 175 mm."
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
				"fiam-144631101-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-144631101-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3000 tr/min",
			"evidenceIds": [
				"fiam-144631101-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.7 kg",
			"evidenceIds": [
				"fiam-144631101-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 40 x L 175 mm",
			"evidenceIds": [
				"fiam-144631101-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "With lever with safety device",
			"evidenceIds": [
				"fiam-144631101-20260926"
			]
		},
		{
			"label": "Puissance",
			"value": "300 W",
			"evidenceIds": [
				"fiam-144631101-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-144631101-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/les30sp/",
			"sourceLabel": "Fiam, fiche technique LES30SP, réf. 144631101",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-144631101-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-44.pdf#page=13",
			"sourceLabel": "Fiam, brochure technique en-44, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "fiam-144695300-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/les34/",
			"sourceLabel": "Fiam, fiche technique LES34, réf. 144695300",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-144695300-20260926-workingpressurebar-1",
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
			"fiam-144631101-20260926"
		],
		"workingPressureBar": [
			"fiam-144631101-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-144631101-20260926"
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
