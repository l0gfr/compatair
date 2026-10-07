import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-fasco-f1b-sjk-19-11579-01",
	"slug": "agrafeuse-cloueuse-fasco-f1b-sjk-19-11579-01",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "FASCO F1B SJK-19 (réf. 11579.01)",
	"brand": "FASCO",
	"model": "F1B SJK-19",
	"mpn": "11579.01",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airPerActionLiters": 0.37,
	"actionLabel": "cycle de pose",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-fasco-f1b-sjk-19-11579-01.svg",
		"alt": "Repères techniques : FASCO F1B SJK-19 (réf. 11579.01)",
		"sourceUrl": "https://www.beck-fastening.com/en/f1b-sjk-19~p60750",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "fasco-f1b-sjk-19",
		"label": "Référence 11579.01",
		"distinguishingAttributes": {
			"reference": "11579.01",
			"Type de fixation": "BECK SJK",
			"Capacité du chargeur": "180"
		}
	},
	"editorial": {
		"overview": "FASCO F1B SJK-19 (réf. 11579.01). Volume déclaré : 0,37 L par cycle à 6,2 bar. Renseigner la cadence de pose.",
		"verifiedFacts": [
			"Type de fixation : BECK SJK.",
			"Capacité du chargeur : 180.",
			"Longueur des clous : 6 - 19 mm | 1/4 - 3/4\".",
			"Hauteur : 157 mm | 6.18\".",
			"Largeur : 42 mm | 1.65\".",
			"Longueur : 218 mm | 8.58\".",
			"Masse déclarée : 0.93 kg | 2.05 lbs.",
			"Plage de service déclarée : 4 - 7 bar | 60 - 100 psi.",
			"Système de déclenchement : Single Actuation.",
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
			"value": "BECK SJK",
			"evidenceIds": [
				"october3d-tools-beck-new-055-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "180",
			"evidenceIds": [
				"october3d-tools-beck-new-055-p1"
			]
		},
		{
			"label": "Longueur des clous",
			"value": "6 - 19 mm | 1/4 - 3/4\"",
			"evidenceIds": [
				"october3d-tools-beck-new-055-p1"
			]
		},
		{
			"label": "Hauteur",
			"value": "157 mm | 6.18\"",
			"evidenceIds": [
				"october3d-tools-beck-new-055-p1"
			]
		},
		{
			"label": "Largeur",
			"value": "42 mm | 1.65\"",
			"evidenceIds": [
				"october3d-tools-beck-new-055-p1"
			]
		},
		{
			"label": "Longueur",
			"value": "218 mm | 8.58\"",
			"evidenceIds": [
				"october3d-tools-beck-new-055-p1"
			]
		},
		{
			"label": "Masse déclarée",
			"value": "0.93 kg | 2.05 lbs",
			"evidenceIds": [
				"october3d-tools-beck-new-055-p1"
			]
		},
		{
			"label": "Plage de service déclarée",
			"value": "4 - 7 bar | 60 - 100 psi",
			"evidenceIds": [
				"october3d-tools-beck-new-055-p1"
			]
		},
		{
			"label": "Système de déclenchement",
			"value": "Single Actuation",
			"evidenceIds": [
				"october3d-tools-beck-new-055-p1"
			]
		},
		{
			"label": "Chargement",
			"value": "Bottom Loading",
			"evidenceIds": [
				"october3d-tools-beck-new-055-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "0.37 L/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-081-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per shot Staple BECK SJK, AACUTSULÖATSIEONN & & L LAODAEDNING\n0.37 L. | 0.013 SCF\nPerformance at 90 psi | 6.2 bar",
			"evidenceIds": [
				"october3d-tools-beck-sheet-081-p2"
			]
		},
		{
			"label": "Volume par tir, unité alternative constructeur",
			"value": "0.013 SCF/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-081-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-beck-new-055-p1",
			"sourceUrl": "https://www.beck-fastening.com/en/f1b-sjk-19~p60750",
			"sourceLabel": "FASCO, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 f4e6c6281fbe1e45c7564c6911c72749fc3b9312fb96904a05d9e7f34bca671b. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-beck-sheet-081-p2",
			"sourceUrl": "https://www.beck-fastening.com/Corporate/00_No%20Index/Handouts%20-%20No%20Index/Handout_F1B%20SJK-19_2605_EN_screen.pdf#page=2",
			"sourceLabel": "FASCO, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 783be847ccddcf70bfb51c9e6aa696bb970a318c95090c90e80b86ee50f5054b. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-beck-new-055-p1"
		],
		"workingPressureBar": [
			"october3d-tools-beck-sheet-081-p2"
		],
		"airPerActionLiters": [
			"october3d-tools-beck-sheet-081-p2"
		],
		"actionLabel": [
			"october3d-tools-beck-sheet-081-p2"
		]
	},
	"notes": [
		"Volume déclaré : 0,37 L par cycle à 6,2 bar. Renseigner la cadence de pose."
	]
};

export default product;
