import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-fasco-f1b-50-16-l-m-11210-02",
	"slug": "agrafeuse-cloueuse-fasco-f1b-50-16-l-m-11210-02",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "FASCO F1B 50-16 L.M. (réf. 11210.02)",
	"brand": "FASCO",
	"model": "F1B 50-16 L.M.",
	"mpn": "11210.02",
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
		"src": "/images/products/agrafeuse-cloueuse-fasco-f1b-50-16-l-m-11210-02.svg",
		"alt": "Repères techniques : FASCO F1B 50-16 L.M. (réf. 11210.02)",
		"sourceUrl": "https://www.beck-fastening.com/en/f1b-50-16-l-m~p59199",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "fasco-f1b-50-16-l-m",
		"label": "Référence 11210.02",
		"distinguishingAttributes": {
			"reference": "11210.02",
			"Type de fixation": "BECK 50",
			"Capacité du chargeur": "230"
		}
	},
	"editorial": {
		"overview": "FASCO F1B 50-16 L.M. (réf. 11210.02). Volume déclaré : 0,37 L par cycle à 6,2 bar. Renseigner la cadence de pose.",
		"verifiedFacts": [
			"Type de fixation : BECK 50.",
			"Capacité du chargeur : 230.",
			"Longueur des clous : 6 - 16 mm | 1/4 - 5/8\".",
			"Hauteur : 157 mm | 6.18\".",
			"Largeur : 42 mm | 1.65\".",
			"Longueur : 376 mm | 14.8\".",
			"Masse déclarée : 1.2 kg | 2.65 lbs.",
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
			"value": "BECK 50",
			"evidenceIds": [
				"october3d-tools-beck-new-043-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "230",
			"evidenceIds": [
				"october3d-tools-beck-new-043-p1"
			]
		},
		{
			"label": "Longueur des clous",
			"value": "6 - 16 mm | 1/4 - 5/8\"",
			"evidenceIds": [
				"october3d-tools-beck-new-043-p1"
			]
		},
		{
			"label": "Hauteur",
			"value": "157 mm | 6.18\"",
			"evidenceIds": [
				"october3d-tools-beck-new-043-p1"
			]
		},
		{
			"label": "Largeur",
			"value": "42 mm | 1.65\"",
			"evidenceIds": [
				"october3d-tools-beck-new-043-p1"
			]
		},
		{
			"label": "Longueur",
			"value": "376 mm | 14.8\"",
			"evidenceIds": [
				"october3d-tools-beck-new-043-p1"
			]
		},
		{
			"label": "Masse déclarée",
			"value": "1.2 kg | 2.65 lbs",
			"evidenceIds": [
				"october3d-tools-beck-new-043-p1"
			]
		},
		{
			"label": "Plage de service déclarée",
			"value": "4 - 7 bar | 60 - 100 psi",
			"evidenceIds": [
				"october3d-tools-beck-new-043-p1"
			]
		},
		{
			"label": "Système de déclenchement",
			"value": "Single Actuation",
			"evidenceIds": [
				"october3d-tools-beck-new-043-p1"
			]
		},
		{
			"label": "Chargement",
			"value": "Bottom Loading",
			"evidenceIds": [
				"october3d-tools-beck-new-043-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "0.37 L/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-046-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per shot\n0.37 L. | 0.013 SCF\nPerformance at 90 psi | 6.2 bar",
			"evidenceIds": [
				"october3d-tools-beck-sheet-046-p2"
			]
		},
		{
			"label": "Volume par tir, unité alternative constructeur",
			"value": "0.013 SCF/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-046-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-beck-new-043-p1",
			"sourceUrl": "https://www.beck-fastening.com/en/f1b-50-16-l-m~p59199",
			"sourceLabel": "FASCO, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 ca9b3fd6a509384f6e89609bb139674c7bdc553b0ec5377495b5ec48b71cc544. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-beck-sheet-046-p2",
			"sourceUrl": "https://www.beck-fastening.com/Corporate/00_No%20Index/Handouts%20-%20No%20Index/Handout_F1B50-16_COMBI_2209_EN_screen.pdf#page=2",
			"sourceLabel": "FASCO, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 c8f467446b604f1c9f6877bd878a8517783087d1d4363a5ac42eac2ae6ff3f75. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-beck-new-043-p1"
		],
		"workingPressureBar": [
			"october3d-tools-beck-sheet-046-p2"
		],
		"airPerActionLiters": [
			"october3d-tools-beck-sheet-046-p2"
		],
		"actionLabel": [
			"october3d-tools-beck-sheet-046-p2"
		]
	},
	"notes": [
		"Volume déclaré : 0,37 L par cycle à 6,2 bar. Renseigner la cadence de pose."
	]
};

export default product;
