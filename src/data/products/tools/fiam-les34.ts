import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-les34",
	"slug": "fiam-les34",
	"brand": "Fiam",
	"model": "LES34",
	"mpn": "144695300",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Fiam LES34",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-les34.webp",
		"alt": "Repères techniques Fiam LES34, référence 144695300",
		"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/les34/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "LES34 : ponceuse d’angle de 300 W, sortie M14 et accessoire maximal de 75 mm, à 3 400 tr/min. La LES45 conserve ces dimensions et les 9 L/s publiés, à 4 500 tr/min. La brochure prescrit une alimentation 1/4 pouce gas femelle et un flexible de 9,5 mm intérieur.",
		"verifiedFacts": [
			"LES34 et LES45 : même disque maximal de 75 mm, sortie M14, 300 W, 1 kg et 9 L/s ; vitesses respectives de 3 400 et 4 500 tr/min. Le besoin d’air déclaré n’est pas réduit parce que la version tourne moins vite.",
			"Le régime de la consommation publiée n’est pas précisé ; cette valeur n’est pas assimilée à un maximum de travail."
		],
		"limitations": [
			"La note de mesure à 6,3 bar ne qualifie pas le régime de consommation.",
			"Le tableau ne promet pas le même résultat avec tous les abrasifs ; respecter la vitesse admissible de l’accessoire."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"evidenceIds": [
				"fiam-144695300-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-144695300-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3400 tr/min",
			"evidenceIds": [
				"fiam-144695300-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1 kg",
			"evidenceIds": [
				"fiam-144695300-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 40 x L 245 x H 44 mm",
			"evidenceIds": [
				"fiam-144695300-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "With lever with safety device",
			"evidenceIds": [
				"fiam-144695300-20260926"
			]
		},
		{
			"label": "Puissance",
			"value": "300 W",
			"evidenceIds": [
				"fiam-144695300-20260926"
			]
		}
	],
	"evidence": [
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
		},
		{
			"id": "review-20261025-fiam-les34-s055",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/les34/",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s055, section technique de la référence",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:37.746552+00:00, SHA-256 a97c674c4d97a178f739bff463b8d18d08c081831e9acb7eb0d0ca9a28077284. LES34 et LES45 : même disque maximal de 75 mm, sortie M14, 300 W, 1 kg et 9 L/s ; vitesses respectives de 3 400 et 4 500 tr/min. Le besoin d’air déclaré n’est pas réduit parce que la version tourne moins vite. Limite : La note de mesure à 6,3 bar ne qualifie pas le régime de consommation ; ajouter unqualified."
		},
		{
			"id": "review-20261025-fiam-les34-s054",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-44.pdf#page=13",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s054, pages PDF 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:37.715254+00:00, SHA-256 01b152f269aeae367daa8a9524f083a1679707b0a3eff4daa59bcec83635f6de. LES34 et LES45 : même disque maximal de 75 mm, sortie M14, 300 W, 1 kg et 9 L/s ; vitesses respectives de 3 400 et 4 500 tr/min. Le besoin d’air déclaré n’est pas réduit parce que la version tourne moins vite. Limite : La note de mesure à 6,3 bar ne qualifie pas le régime de consommation ; ajouter unqualified."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-144695300-20260926"
		],
		"workingPressureBar": [
			"fiam-144695300-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-144695300-20260926",
			"review-20261025-fiam-les34-s055",
			"review-20261025-fiam-les34-s054"
		],
		"airflowBasis": [
			"review-20261025-fiam-les34-s055",
			"review-20261025-fiam-les34-s054"
		],
		"connectorSize": [
			"review-20261025-fiam-les34-s055",
			"review-20261025-fiam-les34-s054"
		],
		"recommendedHose": [
			"review-20261025-fiam-les34-s055",
			"review-20261025-fiam-les34-s054"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : La note de mesure à 6,3 bar ne qualifie pas le régime de consommation ; ajouter unqualified."
	],
	"airflowLpm": {
		"min": 540,
		"typical": 540,
		"max": 540
	},
	"airflowBasis": "unqualified",
	"connectorSize": "1/4\" gas F",
	"recommendedHose": {
		"innerDiameterMm": 9.5
	}
};

export default product;
