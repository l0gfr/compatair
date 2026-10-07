import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-fasco-f20a-gn-50-fs-11594-01",
	"slug": "agrafeuse-cloueuse-fasco-f20a-gn-50-fs-11594-01",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "FASCO F20A GN-50 FS (réf. 11594.01)",
	"brand": "FASCO",
	"model": "F20A GN-50 FS",
	"mpn": "11594.01",
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
		"src": "/images/products/agrafeuse-cloueuse-fasco-f20a-gn-50-fs-11594-01.svg",
		"alt": "Repères techniques : FASCO F20A GN-50 FS (réf. 11594.01)",
		"sourceUrl": "https://www.beck-fastening.com/en/f20a-gn-50-fs~p298",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "fasco-f20a-gn-50-fs",
		"label": "Référence 11594.01",
		"distinguishingAttributes": {
			"reference": "11594.01",
			"Type de fixation": "Brads",
			"Capacité du chargeur": "110"
		}
	},
	"editorial": {
		"overview": "FASCO F20A GN-50 FS (réf. 11594.01). Volume déclaré : 0,53 L par cycle à 6,2 bar. Renseigner la cadence de pose.",
		"verifiedFacts": [
			"Type de fixation : Brads.",
			"Capacité du chargeur : 110.",
			"Longueur des clous : 15 - 50 mm | 5/8 - 2\".",
			"Hauteur : 256 mm | 10.08\".",
			"Largeur : 60 mm | 2.36\".",
			"Longueur : 263 mm | 10.35\".",
			"Masse déclarée : 1.38 kg | 3.04 lbs.",
			"Plage de service déclarée : 5 - 8 bar | 75 - 115 psi.",
			"Système de déclenchement : Full Sequential Actuation.",
			"Chargement : Side Loading."
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
			"value": "Brads",
			"evidenceIds": [
				"october3d-tools-beck-new-102-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "110",
			"evidenceIds": [
				"october3d-tools-beck-new-102-p1"
			]
		},
		{
			"label": "Longueur des clous",
			"value": "15 - 50 mm | 5/8 - 2\"",
			"evidenceIds": [
				"october3d-tools-beck-new-102-p1"
			]
		},
		{
			"label": "Hauteur",
			"value": "256 mm | 10.08\"",
			"evidenceIds": [
				"october3d-tools-beck-new-102-p1"
			]
		},
		{
			"label": "Largeur",
			"value": "60 mm | 2.36\"",
			"evidenceIds": [
				"october3d-tools-beck-new-102-p1"
			]
		},
		{
			"label": "Longueur",
			"value": "263 mm | 10.35\"",
			"evidenceIds": [
				"october3d-tools-beck-new-102-p1"
			]
		},
		{
			"label": "Masse déclarée",
			"value": "1.38 kg | 3.04 lbs",
			"evidenceIds": [
				"october3d-tools-beck-new-102-p1"
			]
		},
		{
			"label": "Plage de service déclarée",
			"value": "5 - 8 bar | 75 - 115 psi",
			"evidenceIds": [
				"october3d-tools-beck-new-102-p1"
			]
		},
		{
			"label": "Système de déclenchement",
			"value": "Full Sequential Actuation",
			"evidenceIds": [
				"october3d-tools-beck-new-102-p1"
			]
		},
		{
			"label": "Chargement",
			"value": "Side Loading",
			"evidenceIds": [
				"october3d-tools-beck-new-102-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "0.53 L/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-142-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per shot\n0.53 L. | 0.019 SCF\nPerformance at 90 psi | 6.2 bar",
			"evidenceIds": [
				"october3d-tools-beck-sheet-142-p2"
			]
		},
		{
			"label": "Volume par tir, unité alternative constructeur",
			"value": "0.019 SCF/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-142-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-beck-new-102-p1",
			"sourceUrl": "https://www.beck-fastening.com/en/f20a-gn-50-fs~p298",
			"sourceLabel": "FASCO, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 a302b020f659ecf889bdd83f9b076ff360c2108066323c7a1dc012a330966bfc. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-beck-sheet-142-p2",
			"sourceUrl": "https://www.beck-fastening.com/Corporate/00_No%20Index/Handouts%20-%20No%20Index/Handout_F20A%20GN-50%20FS%20Lock%20Out%20FS_2105_EN_screen.pdf#page=2",
			"sourceLabel": "FASCO, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 4384283e27ef8e798e25c1b042de2b39d97feee964339292762e0cf7c9e7c97e. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-beck-new-102-p1"
		],
		"workingPressureBar": [
			"october3d-tools-beck-sheet-142-p2"
		],
		"airPerActionLiters": [
			"october3d-tools-beck-sheet-142-p2"
		],
		"actionLabel": [
			"october3d-tools-beck-sheet-142-p2"
		]
	},
	"notes": [
		"Volume déclaré : 0,53 L par cycle à 6,2 bar. Renseigner la cadence de pose."
	]
};

export default product;
