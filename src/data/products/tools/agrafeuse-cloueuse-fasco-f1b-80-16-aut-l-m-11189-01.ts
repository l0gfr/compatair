import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-fasco-f1b-80-16-aut-l-m-11189-01",
	"slug": "agrafeuse-cloueuse-fasco-f1b-80-16-aut-l-m-11189-01",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "FASCO F1B 80-16 AUT L.M. (réf. 11189.01)",
	"brand": "FASCO",
	"model": "F1B 80-16 AUT L.M.",
	"mpn": "11189.01",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airPerActionLiters": 0.17,
	"actionLabel": "cycle de pose",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-fasco-f1b-80-16-aut-l-m-11189-01.svg",
		"alt": "Repères techniques : FASCO F1B 80-16 AUT L.M. (réf. 11189.01)",
		"sourceUrl": "https://www.beck-fastening.com/en/f1b-80-16-aut-l-m~p59193",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "fasco-f1b-80-16-aut-l-m",
		"label": "Référence 11189.01",
		"distinguishingAttributes": {
			"reference": "11189.01",
			"Type de fixation": "BECK 80, BECK 8, BECK KOA",
			"Capacité du chargeur": "310"
		}
	},
	"editorial": {
		"overview": "FASCO F1B 80-16 AUT L.M. (réf. 11189.01). Volume déclaré : 0,17 L par cycle à 6,2 bar. Renseigner la cadence de pose.",
		"verifiedFacts": [
			"Type de fixation : BECK 80, BECK 8, BECK KOA.",
			"Capacité du chargeur : 310.",
			"Longueur des clous : 8 - 16 mm | 5/16 - 5/8\".",
			"Hauteur : 167 mm | 6.58\".",
			"Largeur : 42 mm | 1.65\".",
			"Longueur : 376 mm | 14.8\".",
			"Masse déclarée : 1.37 kg | 3.02 lbs.",
			"Plage de service déclarée : 5 - 7 bar | 70 - 100 psi.",
			"Système de déclenchement : Continual Actuation.",
			"Chargement : Bottom Loading."
		],
		"limitations": [
			"La cadence réelle est indispensable au calcul moyen ; aucun rythme de travail ni besoin instantané de tir n’est supposé.",
			"La fiche exprime le volume en litres et SCF ; elle ne définit pas la température ni l’humidité de référence des SCF. Le chiffre métrique déclaré est conservé sans conversion thermodynamique.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Type de fixation",
			"value": "BECK 80, BECK 8, BECK KOA",
			"evidenceIds": [
				"october3d-tools-beck-new-048-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "310",
			"evidenceIds": [
				"october3d-tools-beck-new-048-p1"
			]
		},
		{
			"label": "Longueur des clous",
			"value": "8 - 16 mm | 5/16 - 5/8\"",
			"evidenceIds": [
				"october3d-tools-beck-new-048-p1"
			]
		},
		{
			"label": "Hauteur",
			"value": "167 mm | 6.58\"",
			"evidenceIds": [
				"october3d-tools-beck-new-048-p1"
			]
		},
		{
			"label": "Largeur",
			"value": "42 mm | 1.65\"",
			"evidenceIds": [
				"october3d-tools-beck-new-048-p1"
			]
		},
		{
			"label": "Longueur",
			"value": "376 mm | 14.8\"",
			"evidenceIds": [
				"october3d-tools-beck-new-048-p1"
			]
		},
		{
			"label": "Masse déclarée",
			"value": "1.37 kg | 3.02 lbs",
			"evidenceIds": [
				"october3d-tools-beck-new-048-p1"
			]
		},
		{
			"label": "Plage de service déclarée",
			"value": "5 - 7 bar | 70 - 100 psi",
			"evidenceIds": [
				"october3d-tools-beck-new-048-p1"
			]
		},
		{
			"label": "Système de déclenchement",
			"value": "Continual Actuation",
			"evidenceIds": [
				"october3d-tools-beck-new-048-p1"
			]
		},
		{
			"label": "Chargement",
			"value": "Bottom Loading",
			"evidenceIds": [
				"october3d-tools-beck-new-048-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "0.17 L/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-071-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per shot\n0.17 L. | 0.006 SCF\nPerformance at 90 psi | 6.2 bar",
			"evidenceIds": [
				"october3d-tools-beck-sheet-071-p2"
			]
		},
		{
			"label": "Volume par tir, unité alternative constructeur",
			"value": "0.006 SCF/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-071-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-beck-new-048-p1",
			"sourceUrl": "https://www.beck-fastening.com/en/f1b-80-16-aut-l-m~p59193",
			"sourceLabel": "FASCO, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 8d959566b4b327eb14c74d656d31993ad8b569b05c79ceac74ecfb84ebd327d7. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-beck-sheet-071-p2",
			"sourceUrl": "https://www.beck-fastening.com/Corporate/00_No%20Index/Handouts%20-%20No%20Index/Handout_F1B80-16_COMBI_2209_EN_screen.pdf#page=2",
			"sourceLabel": "FASCO, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 8d51f18a97eb077d3f1e125db4ba2db031ca44684cca69b1f21fbbacfcf46568. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-beck-new-048-p1"
		],
		"workingPressureBar": [
			"october3d-tools-beck-sheet-071-p2"
		],
		"airPerActionLiters": [
			"october3d-tools-beck-sheet-071-p2"
		],
		"actionLabel": [
			"october3d-tools-beck-sheet-071-p2"
		]
	},
	"notes": [
		"Volume déclaré : 0,17 L par cycle à 6,2 bar. Renseigner la cadence de pose."
	]
};

export default product;
