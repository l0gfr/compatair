import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-fasco-f44ac-g-50-tl-11464",
	"slug": "agrafeuse-cloueuse-fasco-f44ac-g-50-tl-11464",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "FASCO F44AC G-50 TL (réf. 11464)",
	"brand": "FASCO",
	"model": "F44AC G-50 TL",
	"mpn": "11464",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airPerActionLiters": 1.16,
	"actionLabel": "cycle de pose",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-fasco-f44ac-g-50-tl-11464.svg",
		"alt": "Repères techniques : FASCO F44AC G-50 TL (réf. 11464)",
		"sourceUrl": "https://www.beck-fastening.com/en/f44ac-g-50-tl~p273",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "fasco-f44ac-g-50-tl",
		"label": "Référence 11464",
		"distinguishingAttributes": {
			"reference": "11464",
			"Type de fixation": "BECK G 5562, BECK KG 700, BECK 6600",
			"Capacité du chargeur": "155"
		}
	},
	"editorial": {
		"overview": "FASCO F44AC G-50 TL (réf. 11464). Volume déclaré : 1,16 L par cycle à 6,2 bar. Renseigner la cadence de pose.",
		"verifiedFacts": [
			"Type de fixation : BECK G 5562, BECK KG 700, BECK 6600.",
			"Capacité du chargeur : 155.",
			"Longueur des agrafes : 25 - 50 mm | 1 - 2\".",
			"Hauteur : 310 mm | 12.2\".",
			"Largeur : 92 mm | 3.62\".",
			"Longueur : 345 mm | 13.58\".",
			"Masse déclarée : 2.25 kg | 4.96 lbs.",
			"Plage de service déclarée : 5 - 7 bar | 75 - 100 psi.",
			"Système de déclenchement : Full Sequential Actuation, Contact Actuation.",
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
			"value": "BECK G 5562, BECK KG 700, BECK 6600",
			"evidenceIds": [
				"october3d-tools-beck-new-017-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "155",
			"evidenceIds": [
				"october3d-tools-beck-new-017-p1"
			]
		},
		{
			"label": "Longueur des agrafes",
			"value": "25 - 50 mm | 1 - 2\"",
			"evidenceIds": [
				"october3d-tools-beck-new-017-p1"
			]
		},
		{
			"label": "Hauteur",
			"value": "310 mm | 12.2\"",
			"evidenceIds": [
				"october3d-tools-beck-new-017-p1"
			]
		},
		{
			"label": "Largeur",
			"value": "92 mm | 3.62\"",
			"evidenceIds": [
				"october3d-tools-beck-new-017-p1"
			]
		},
		{
			"label": "Longueur",
			"value": "345 mm | 13.58\"",
			"evidenceIds": [
				"october3d-tools-beck-new-017-p1"
			]
		},
		{
			"label": "Masse déclarée",
			"value": "2.25 kg | 4.96 lbs",
			"evidenceIds": [
				"october3d-tools-beck-new-017-p1"
			]
		},
		{
			"label": "Plage de service déclarée",
			"value": "5 - 7 bar | 75 - 100 psi",
			"evidenceIds": [
				"october3d-tools-beck-new-017-p1"
			]
		},
		{
			"label": "Système de déclenchement",
			"value": "Full Sequential Actuation, Contact Actuation",
			"evidenceIds": [
				"october3d-tools-beck-new-017-p1"
			]
		},
		{
			"label": "Chargement",
			"value": "Top Loading",
			"evidenceIds": [
				"october3d-tools-beck-new-017-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "1.16 L/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-031-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per shot\n1.16 L. | 0.041 SCF\nPerformance at 90 psi | 6.2 bar",
			"evidenceIds": [
				"october3d-tools-beck-sheet-031-p2"
			]
		},
		{
			"label": "Volume par tir, unité alternative constructeur",
			"value": "0.041 SCF/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-031-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-beck-new-017-p1",
			"sourceUrl": "https://www.beck-fastening.com/en/f44ac-g-50-tl~p273",
			"sourceLabel": "FASCO, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 182acb1f506be4b1512a51e07fc17b9e28010b93d931f0464da592a34a32828d. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-beck-sheet-031-p2",
			"sourceUrl": "https://www.beck-fastening.com/Corporate/00_No%20Index/Handouts%20-%20No%20Index/Handout_F44AC%20G-50%20TL_2002_EN_screen.pdf#page=2",
			"sourceLabel": "FASCO, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 00d5863d3acdd82ad80164bf221a6371b7b4a5d60b2a4d5adf5004afdb61cbb0. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-beck-new-017-p1"
		],
		"workingPressureBar": [
			"october3d-tools-beck-sheet-031-p2"
		],
		"airPerActionLiters": [
			"october3d-tools-beck-sheet-031-p2"
		],
		"actionLabel": [
			"october3d-tools-beck-sheet-031-p2"
		]
	},
	"notes": [
		"Volume déclaré : 1,16 L par cycle à 6,2 bar. Renseigner la cadence de pose."
	]
};

export default product;
