import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-fasco-f20a-92-32-fs-11644",
	"slug": "agrafeuse-cloueuse-fasco-f20a-92-32-fs-11644",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "FASCO F20A 92-32 FS (réf. 11644)",
	"brand": "FASCO",
	"model": "F20A 92-32 FS",
	"mpn": "11644",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airPerActionLiters": 0.53,
	"actionLabel": "cycle de pose",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-fasco-f20a-92-32-fs-11644.svg",
		"alt": "Repères techniques : FASCO F20A 92-32 FS (réf. 11644)",
		"sourceUrl": "https://www.beck-fastening.com/en/f20a-92-32-fs~p331",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "fasco-f20a-92-32-fs",
		"label": "Référence 11644",
		"distinguishingAttributes": {
			"reference": "11644",
			"Type de fixation": "BECK 92, BECK A 92, BECK SL 5035, BECK 5800, BECK 7 M",
			"Capacité du chargeur": "135"
		}
	},
	"editorial": {
		"overview": "FASCO F20A 92-32 FS (réf. 11644). Volume déclaré : 0,53 L par cycle à 6,2 bar. Renseigner la cadence de pose.",
		"verifiedFacts": [
			"Type de fixation : BECK 92, BECK A 92, BECK SL 5035, BECK 5800, BECK 7 M.",
			"Capacité du chargeur : 135.",
			"Longueur des agrafes : 10 - 32 mm | 3/8 - 1 1/4\".",
			"Hauteur : 220 mm | 8.66\".",
			"Largeur : 60 mm | 2.36\".",
			"Longueur : 266 mm | 10.47\".",
			"Masse déclarée : 1.24 kg | 2.73 lbs.",
			"Plage de service déclarée : 5 - 8 bar | 75 - 115 psi.",
			"Système de déclenchement : Full Sequential Actuation.",
			"Chargement : Top Loading."
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
			"value": "BECK 92, BECK A 92, BECK SL 5035, BECK 5800, BECK 7 M",
			"evidenceIds": [
				"october3d-tools-beck-new-010-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "135",
			"evidenceIds": [
				"october3d-tools-beck-new-010-p1"
			]
		},
		{
			"label": "Longueur des agrafes",
			"value": "10 - 32 mm | 3/8 - 1 1/4\"",
			"evidenceIds": [
				"october3d-tools-beck-new-010-p1"
			]
		},
		{
			"label": "Hauteur",
			"value": "220 mm | 8.66\"",
			"evidenceIds": [
				"october3d-tools-beck-new-010-p1"
			]
		},
		{
			"label": "Largeur",
			"value": "60 mm | 2.36\"",
			"evidenceIds": [
				"october3d-tools-beck-new-010-p1"
			]
		},
		{
			"label": "Longueur",
			"value": "266 mm | 10.47\"",
			"evidenceIds": [
				"october3d-tools-beck-new-010-p1"
			]
		},
		{
			"label": "Masse déclarée",
			"value": "1.24 kg | 2.73 lbs",
			"evidenceIds": [
				"october3d-tools-beck-new-010-p1"
			]
		},
		{
			"label": "Plage de service déclarée",
			"value": "5 - 8 bar | 75 - 115 psi",
			"evidenceIds": [
				"october3d-tools-beck-new-010-p1"
			]
		},
		{
			"label": "Système de déclenchement",
			"value": "Full Sequential Actuation",
			"evidenceIds": [
				"october3d-tools-beck-new-010-p1"
			]
		},
		{
			"label": "Chargement",
			"value": "Top Loading",
			"evidenceIds": [
				"october3d-tools-beck-new-010-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "0.53 L/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-019-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per shot\n0.53 L. | 0.019 SCF\nPerformance at 90 psi | 6.2 bar",
			"evidenceIds": [
				"october3d-tools-beck-sheet-019-p2"
			]
		},
		{
			"label": "Volume par tir, unité alternative constructeur",
			"value": "0.019 SCF/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-019-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-beck-new-010-p1",
			"sourceUrl": "https://www.beck-fastening.com/en/f20a-92-32-fs~p331",
			"sourceLabel": "FASCO, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 26b859ac3388ff7f2cf229c1e34ef973bc676670daac3cfc5091a3b4d487ce20. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-beck-sheet-019-p2",
			"sourceUrl": "https://www.beck-fastening.com/Corporate/00_No%20Index/Handouts%20-%20No%20Index/Handout_F20A%2092-32%20FS_2104_EN_screen.pdf#page=2",
			"sourceLabel": "FASCO, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 c6bae1275efaeacf8d7e215b73d55f6292ba18bba0173cde02e684c5fa4c99e2. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-beck-new-010-p1"
		],
		"workingPressureBar": [
			"october3d-tools-beck-sheet-019-p2"
		],
		"airPerActionLiters": [
			"october3d-tools-beck-sheet-019-p2"
		],
		"actionLabel": [
			"october3d-tools-beck-sheet-019-p2"
		]
	},
	"notes": [
		"Volume déclaré : 0,53 L par cycle à 6,2 bar. Renseigner la cadence de pose."
	]
};

export default product;
