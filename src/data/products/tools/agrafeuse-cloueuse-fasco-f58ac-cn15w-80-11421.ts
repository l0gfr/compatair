import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-fasco-f58ac-cn15w-80-11421",
	"slug": "agrafeuse-cloueuse-fasco-f58ac-cn15w-80-11421",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "FASCO F58AC CN15W-80 (réf. 11421)",
	"brand": "FASCO",
	"model": "F58AC CN15W-80",
	"mpn": "11421",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airPerActionLiters": 1.86,
	"actionLabel": "cycle de pose",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-fasco-f58ac-cn15w-80-11421.svg",
		"alt": "Repères techniques : FASCO F58AC CN15W-80 (réf. 11421)",
		"sourceUrl": "https://www.beck-fastening.com/en/f58ac-cn15w-80~p259",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "fasco-f58ac-cn15w-80",
		"label": "Référence 11421",
		"distinguishingAttributes": {
			"reference": "11421",
			"Type de fixation": "15° Wire coil nails",
			"Capacité du chargeur": "200 - 300"
		}
	},
	"editorial": {
		"overview": "FASCO F58AC CN15W-80 (réf. 11421). Volume déclaré : 1,86 L par cycle à 6,2 bar. Renseigner la cadence de pose.",
		"verifiedFacts": [
			"Type de fixation : 15° Wire coil nails.",
			"Capacité du chargeur : 200 - 300.",
			"Longueur des clous : 50 - 83 mm | 2 - 3 1/4\".",
			"Hauteur : 365 mm | 14.37\".",
			"Largeur : 130 mm | 5.12\".",
			"Longueur : 310 mm | 12.2\".",
			"Masse déclarée : 3.85 kg | 8.49 lbs.",
			"Plage de service déclarée : 5 - 8 bar | 75 - 115 psi.",
			"Système de déclenchement : Contact Actuation.",
			"Chargement : Coil."
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
			"value": "15° Wire coil nails",
			"evidenceIds": [
				"october3d-tools-beck-new-062-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "200 - 300",
			"evidenceIds": [
				"october3d-tools-beck-new-062-p1"
			]
		},
		{
			"label": "Longueur des clous",
			"value": "50 - 83 mm | 2 - 3 1/4\"",
			"evidenceIds": [
				"october3d-tools-beck-new-062-p1"
			]
		},
		{
			"label": "Hauteur",
			"value": "365 mm | 14.37\"",
			"evidenceIds": [
				"october3d-tools-beck-new-062-p1"
			]
		},
		{
			"label": "Largeur",
			"value": "130 mm | 5.12\"",
			"evidenceIds": [
				"october3d-tools-beck-new-062-p1"
			]
		},
		{
			"label": "Longueur",
			"value": "310 mm | 12.2\"",
			"evidenceIds": [
				"october3d-tools-beck-new-062-p1"
			]
		},
		{
			"label": "Masse déclarée",
			"value": "3.85 kg | 8.49 lbs",
			"evidenceIds": [
				"october3d-tools-beck-new-062-p1"
			]
		},
		{
			"label": "Plage de service déclarée",
			"value": "5 - 8 bar | 75 - 115 psi",
			"evidenceIds": [
				"october3d-tools-beck-new-062-p1"
			]
		},
		{
			"label": "Système de déclenchement",
			"value": "Contact Actuation",
			"evidenceIds": [
				"october3d-tools-beck-new-062-p1"
			]
		},
		{
			"label": "Chargement",
			"value": "Coil",
			"evidenceIds": [
				"october3d-tools-beck-new-062-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "1.86 L/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-090-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per shot\n1.86 L. | 0.066 SCF\nPerformance at 90 psi | 6.2 bar",
			"evidenceIds": [
				"october3d-tools-beck-sheet-090-p2"
			]
		},
		{
			"label": "Volume par tir, unité alternative constructeur",
			"value": "0.066 SCF/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-090-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-beck-new-062-p1",
			"sourceUrl": "https://www.beck-fastening.com/en/f58ac-cn15w-80~p259",
			"sourceLabel": "FASCO, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 61a894369607de13164adb48c8f4b7be61a9c59e3be996bfb0664d62c4bfda15. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-beck-sheet-090-p2",
			"sourceUrl": "https://www.beck-fastening.com/Corporate/00_No%20Index/Handouts%20-%20No%20Index/Handout_F58AC%20CN15W-80_2007_EN_screen.pdf#page=2",
			"sourceLabel": "FASCO, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 b9744811a8d647b51a3be1ee12cf087dd8c933c831a3a9054d7f38230a8b8e23. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-beck-new-062-p1"
		],
		"workingPressureBar": [
			"october3d-tools-beck-sheet-090-p2"
		],
		"airPerActionLiters": [
			"october3d-tools-beck-sheet-090-p2"
		],
		"actionLabel": [
			"october3d-tools-beck-sheet-090-p2"
		]
	},
	"notes": [
		"Volume déclaré : 1,86 L par cycle à 6,2 bar. Renseigner la cadence de pose."
	]
};

export default product;
