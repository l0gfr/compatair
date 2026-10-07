import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-fasco-f1b-97b-19-11086",
	"slug": "agrafeuse-cloueuse-fasco-f1b-97b-19-11086",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "FASCO F1B 97B-19 (réf. 11086)",
	"brand": "FASCO",
	"model": "F1B 97B-19",
	"mpn": "11086",
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
		"src": "/images/products/agrafeuse-cloueuse-fasco-f1b-97b-19-11086.svg",
		"alt": "Repères techniques : FASCO F1B 97B-19 (réf. 11086)",
		"sourceUrl": "https://www.beck-fastening.com/en/f1b-97b-19~p137",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "fasco-f1b-97b-19",
		"label": "Référence 11086",
		"distinguishingAttributes": {
			"reference": "11086",
			"Type de fixation": "BECK 97",
			"Capacité du chargeur": "150"
		}
	},
	"editorial": {
		"overview": "FASCO F1B 97B-19 (réf. 11086). Volume déclaré : 0,37 L par cycle à 6,2 bar. Renseigner la cadence de pose.",
		"verifiedFacts": [
			"Type de fixation : BECK 97.",
			"Capacité du chargeur : 150.",
			"Longueur des agrafes : 6 - 19 mm | 1/4 - 3/4\".",
			"Hauteur : 157 mm | 6.18\".",
			"Largeur : 42 mm | 1.65\".",
			"Longueur : 218 mm | 8.58\".",
			"Masse déclarée : 0.84 kg | 1.84 lbs.",
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
			"value": "BECK 97",
			"evidenceIds": [
				"october3d-tools-beck-new-094-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "150",
			"evidenceIds": [
				"october3d-tools-beck-new-094-p1"
			]
		},
		{
			"label": "Longueur des agrafes",
			"value": "6 - 19 mm | 1/4 - 3/4\"",
			"evidenceIds": [
				"october3d-tools-beck-new-094-p1"
			]
		},
		{
			"label": "Hauteur",
			"value": "157 mm | 6.18\"",
			"evidenceIds": [
				"october3d-tools-beck-new-094-p1"
			]
		},
		{
			"label": "Largeur",
			"value": "42 mm | 1.65\"",
			"evidenceIds": [
				"october3d-tools-beck-new-094-p1"
			]
		},
		{
			"label": "Longueur",
			"value": "218 mm | 8.58\"",
			"evidenceIds": [
				"october3d-tools-beck-new-094-p1"
			]
		},
		{
			"label": "Masse déclarée",
			"value": "0.84 kg | 1.84 lbs",
			"evidenceIds": [
				"october3d-tools-beck-new-094-p1"
			]
		},
		{
			"label": "Plage de service déclarée",
			"value": "4 - 7 bar | 60 - 100 psi",
			"evidenceIds": [
				"october3d-tools-beck-new-094-p1"
			]
		},
		{
			"label": "Système de déclenchement",
			"value": "Single Actuation",
			"evidenceIds": [
				"october3d-tools-beck-new-094-p1"
			]
		},
		{
			"label": "Chargement",
			"value": "Bottom Loading",
			"evidenceIds": [
				"october3d-tools-beck-new-094-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "0.37 L/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-130-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per shot\n0.37 L. | 0.013 SCF\nPerformance at 90 psi | 6.2 bar",
			"evidenceIds": [
				"october3d-tools-beck-sheet-130-p2"
			]
		},
		{
			"label": "Volume par tir, unité alternative constructeur",
			"value": "0.013 SCF/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-130-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-beck-new-094-p1",
			"sourceUrl": "https://www.beck-fastening.com/en/f1b-97b-19~p137",
			"sourceLabel": "FASCO, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 a93a4856316cec8ecab1c96f840056c82a480733bdb1ea8422d0df9e79369ea1. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-beck-sheet-130-p2",
			"sourceUrl": "https://www.beck-fastening.com/Corporate/00_No%20Index/Handouts%20-%20No%20Index/Handout_F1B%2097B-19-25%20COMBI_2602_EN_screen.pdf#page=2",
			"sourceLabel": "FASCO, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 5f2d6442b0c923878c977cdc7c70629530bd62717f3bcf8905f58e73d437882d. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-beck-new-094-p1"
		],
		"workingPressureBar": [
			"october3d-tools-beck-sheet-130-p2"
		],
		"airPerActionLiters": [
			"october3d-tools-beck-sheet-130-p2"
		],
		"actionLabel": [
			"october3d-tools-beck-sheet-130-p2"
		]
	},
	"notes": [
		"Volume déclaré : 0,37 L par cycle à 6,2 bar. Renseigner la cadence de pose."
	]
};

export default product;
