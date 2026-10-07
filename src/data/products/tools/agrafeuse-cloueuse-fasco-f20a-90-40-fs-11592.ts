import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-fasco-f20a-90-40-fs-11592",
	"slug": "agrafeuse-cloueuse-fasco-f20a-90-40-fs-11592",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "FASCO F20A 90-40 FS (réf. 11592)",
	"brand": "FASCO",
	"model": "F20A 90-40 FS",
	"mpn": "11592",
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
		"src": "/images/products/agrafeuse-cloueuse-fasco-f20a-90-40-fs-11592.svg",
		"alt": "Repères techniques : FASCO F20A 90-40 FS (réf. 11592)",
		"sourceUrl": "https://www.beck-fastening.com/en/f20a-90-40-fs~p297",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "fasco-f20a-90-40-fs",
		"label": "Référence 11592",
		"distinguishingAttributes": {
			"reference": "11592",
			"Type de fixation": "BECK 90, BECK 781",
			"Capacité du chargeur": "135"
		}
	},
	"editorial": {
		"overview": "FASCO F20A 90-40 FS (réf. 11592). Volume déclaré : 0,53 L par cycle à 6,2 bar. Renseigner la cadence de pose.",
		"verifiedFacts": [
			"Type de fixation : BECK 90, BECK 781.",
			"Capacité du chargeur : 135.",
			"Longueur des agrafes : 12 - 40 mm | 1/2 - 1 9/16\".",
			"Hauteur : 253 mm | 9.96\".",
			"Largeur : 60 mm | 2.36\".",
			"Longueur : 266 mm | 10.47\".",
			"Masse déclarée : 1.3 kg | 2.87 lbs.",
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
			"value": "BECK 90, BECK 781",
			"evidenceIds": [
				"october3d-tools-beck-new-009-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "135",
			"evidenceIds": [
				"october3d-tools-beck-new-009-p1"
			]
		},
		{
			"label": "Longueur des agrafes",
			"value": "12 - 40 mm | 1/2 - 1 9/16\"",
			"evidenceIds": [
				"october3d-tools-beck-new-009-p1"
			]
		},
		{
			"label": "Hauteur",
			"value": "253 mm | 9.96\"",
			"evidenceIds": [
				"october3d-tools-beck-new-009-p1"
			]
		},
		{
			"label": "Largeur",
			"value": "60 mm | 2.36\"",
			"evidenceIds": [
				"october3d-tools-beck-new-009-p1"
			]
		},
		{
			"label": "Longueur",
			"value": "266 mm | 10.47\"",
			"evidenceIds": [
				"october3d-tools-beck-new-009-p1"
			]
		},
		{
			"label": "Masse déclarée",
			"value": "1.3 kg | 2.87 lbs",
			"evidenceIds": [
				"october3d-tools-beck-new-009-p1"
			]
		},
		{
			"label": "Plage de service déclarée",
			"value": "5 - 8 bar | 75 - 115 psi",
			"evidenceIds": [
				"october3d-tools-beck-new-009-p1"
			]
		},
		{
			"label": "Système de déclenchement",
			"value": "Full Sequential Actuation",
			"evidenceIds": [
				"october3d-tools-beck-new-009-p1"
			]
		},
		{
			"label": "Chargement",
			"value": "Top Loading",
			"evidenceIds": [
				"october3d-tools-beck-new-009-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "0.53 L/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-017-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per shot Air consumption per shot\n0.53 L. | 0.019 SCF\nPerformance at 90 psi | 6.2 bar",
			"evidenceIds": [
				"october3d-tools-beck-sheet-017-p2"
			]
		},
		{
			"label": "Volume par tir, unité alternative constructeur",
			"value": "0.019 SCF/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-017-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-beck-new-009-p1",
			"sourceUrl": "https://www.beck-fastening.com/en/f20a-90-40-fs~p297",
			"sourceLabel": "FASCO, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d54a864877dbd703b4006517afbbc653fbd571b79b6cf288cd24c29488e4916b. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-beck-sheet-017-p2",
			"sourceUrl": "https://www.beck-fastening.com/Corporate/00_No%20Index/Handouts%20-%20No%20Index/Handout_F20A%2090-40%20FS_Kombi%20LM_2103_EN_screen.pdf#page=2",
			"sourceLabel": "FASCO, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 95227ee7c313ee4857e39eadf5e3c2d0d17eeca73be497806dc9c1578c90fccc. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-beck-new-009-p1"
		],
		"workingPressureBar": [
			"october3d-tools-beck-sheet-017-p2"
		],
		"airPerActionLiters": [
			"october3d-tools-beck-sheet-017-p2"
		],
		"actionLabel": [
			"october3d-tools-beck-sheet-017-p2"
		]
	},
	"notes": [
		"Volume déclaré : 0,53 L par cycle à 6,2 bar. Renseigner la cadence de pose."
	]
};

export default product;
