import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-fasco-f1b-sr3-16-aut-11185",
	"slug": "agrafeuse-cloueuse-fasco-f1b-sr3-16-aut-11185",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "FASCO F1B SR3-16 AUT. (réf. 11185)",
	"brand": "FASCO",
	"model": "F1B SR3-16 AUT.",
	"mpn": "11185",
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
		"src": "/images/products/agrafeuse-cloueuse-fasco-f1b-sr3-16-aut-11185.svg",
		"alt": "Repères techniques : FASCO F1B SR3-16 AUT. (réf. 11185)",
		"sourceUrl": "https://www.beck-fastening.com/en/f1b-sr3-16-aut~p182",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "fasco-f1b-sr3-16-aut",
		"label": "Référence 11185",
		"distinguishingAttributes": {
			"reference": "11185",
			"Type de fixation": "BECK 3",
			"Capacité du chargeur": "180"
		}
	},
	"editorial": {
		"overview": "FASCO F1B SR3-16 AUT. (réf. 11185). Volume déclaré : 0,17 L par cycle à 6,2 bar. Renseigner la cadence de pose.",
		"verifiedFacts": [
			"Type de fixation : BECK 3.",
			"Capacité du chargeur : 180.",
			"Longueur des agrafes : 6 - 16 mm | 1/4 - 5/8\".",
			"Hauteur : 167 mm | 6.58\".",
			"Largeur : 42 mm | 1.65\".",
			"Longueur : 218 mm | 8.58\".",
			"Masse déclarée : 1.12 kg | 2.47 lbs.",
			"Plage de service déclarée : 5 - 7 bar | 75 - 100 psi.",
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
			"value": "BECK 3",
			"evidenceIds": [
				"october3d-tools-beck-new-006-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "180",
			"evidenceIds": [
				"october3d-tools-beck-new-006-p1"
			]
		},
		{
			"label": "Longueur des agrafes",
			"value": "6 - 16 mm | 1/4 - 5/8\"",
			"evidenceIds": [
				"october3d-tools-beck-new-006-p1"
			]
		},
		{
			"label": "Hauteur",
			"value": "167 mm | 6.58\"",
			"evidenceIds": [
				"october3d-tools-beck-new-006-p1"
			]
		},
		{
			"label": "Largeur",
			"value": "42 mm | 1.65\"",
			"evidenceIds": [
				"october3d-tools-beck-new-006-p1"
			]
		},
		{
			"label": "Longueur",
			"value": "218 mm | 8.58\"",
			"evidenceIds": [
				"october3d-tools-beck-new-006-p1"
			]
		},
		{
			"label": "Masse déclarée",
			"value": "1.12 kg | 2.47 lbs",
			"evidenceIds": [
				"october3d-tools-beck-new-006-p1"
			]
		},
		{
			"label": "Plage de service déclarée",
			"value": "5 - 7 bar | 75 - 100 psi",
			"evidenceIds": [
				"october3d-tools-beck-new-006-p1"
			]
		},
		{
			"label": "Système de déclenchement",
			"value": "Continual Actuation",
			"evidenceIds": [
				"october3d-tools-beck-new-006-p1"
			]
		},
		{
			"label": "Chargement",
			"value": "Bottom Loading",
			"evidenceIds": [
				"october3d-tools-beck-new-006-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "0.17 L/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-012-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per shot\n0.17 L. | 0.006 SCF\nPerformance at 90 psi | 6.2 bar",
			"evidenceIds": [
				"october3d-tools-beck-sheet-012-p2"
			]
		},
		{
			"label": "Volume par tir, unité alternative constructeur",
			"value": "0.006 SCF/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-012-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-beck-new-006-p1",
			"sourceUrl": "https://www.beck-fastening.com/en/f1b-sr3-16-aut~p182",
			"sourceLabel": "FASCO, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 875db700381abe1da21b98575f3ff98518713c74c5b32f198a9545e07ed05370. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-beck-sheet-012-p2",
			"sourceUrl": "https://www.beck-fastening.com/Corporate/00_No%20Index/Handouts%20-%20No%20Index/Handout_F1B%20SR3-16%20COMBI_COMBI_2602_EN_screen.pdf#page=2",
			"sourceLabel": "FASCO, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 1e62ea65e94874f2dff4a2061ef7925b719069f61c7f8d898d6bd5c93243e8c3. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-beck-new-006-p1"
		],
		"workingPressureBar": [
			"october3d-tools-beck-sheet-012-p2"
		],
		"airPerActionLiters": [
			"october3d-tools-beck-sheet-012-p2"
		],
		"actionLabel": [
			"october3d-tools-beck-sheet-012-p2"
		]
	},
	"notes": [
		"Volume déclaré : 0,17 L par cycle à 6,2 bar. Renseigner la cadence de pose."
	]
};

export default product;
