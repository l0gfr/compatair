import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-fasco-f1b-10f-16-11088",
	"slug": "agrafeuse-cloueuse-fasco-f1b-10f-16-11088",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "FASCO F1B 10F-16 (réf. 11088)",
	"brand": "FASCO",
	"model": "F1B 10F-16",
	"mpn": "11088",
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
		"src": "/images/products/agrafeuse-cloueuse-fasco-f1b-10f-16-11088.svg",
		"alt": "Repères techniques : FASCO F1B 10F-16 (réf. 11088)",
		"sourceUrl": "https://www.beck-fastening.com/en/f1b-10f-16~p139",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "fasco-f1b-10f-16",
		"label": "Référence 11088",
		"distinguishingAttributes": {
			"reference": "11088",
			"Type de fixation": "BECK M 1000",
			"Capacité du chargeur": "180"
		}
	},
	"editorial": {
		"overview": "FASCO F1B 10F-16 (réf. 11088). Volume déclaré : 0,37 L par cycle à 6,2 bar. Renseigner la cadence de pose.",
		"verifiedFacts": [
			"Type de fixation : BECK M 1000.",
			"Capacité du chargeur : 180.",
			"Longueur des agrafes : 6 - 16 mm | 1/4 - 5/8\".",
			"Hauteur : 57 mm | 2.24\".",
			"Largeur : 42 mm | 1.65\".",
			"Longueur : 218 mm | 8.58\".",
			"Masse déclarée : 0.78 kg | 1.72 lbs.",
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
			"value": "BECK M 1000",
			"evidenceIds": [
				"october3d-tools-beck-new-087-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "180",
			"evidenceIds": [
				"october3d-tools-beck-new-087-p1"
			]
		},
		{
			"label": "Longueur des agrafes",
			"value": "6 - 16 mm | 1/4 - 5/8\"",
			"evidenceIds": [
				"october3d-tools-beck-new-087-p1"
			]
		},
		{
			"label": "Hauteur",
			"value": "57 mm | 2.24\"",
			"evidenceIds": [
				"october3d-tools-beck-new-087-p1"
			]
		},
		{
			"label": "Largeur",
			"value": "42 mm | 1.65\"",
			"evidenceIds": [
				"october3d-tools-beck-new-087-p1"
			]
		},
		{
			"label": "Longueur",
			"value": "218 mm | 8.58\"",
			"evidenceIds": [
				"october3d-tools-beck-new-087-p1"
			]
		},
		{
			"label": "Masse déclarée",
			"value": "0.78 kg | 1.72 lbs",
			"evidenceIds": [
				"october3d-tools-beck-new-087-p1"
			]
		},
		{
			"label": "Plage de service déclarée",
			"value": "4 - 7 bar | 60 - 100 psi",
			"evidenceIds": [
				"october3d-tools-beck-new-087-p1"
			]
		},
		{
			"label": "Système de déclenchement",
			"value": "Single Actuation",
			"evidenceIds": [
				"october3d-tools-beck-new-087-p1"
			]
		},
		{
			"label": "Chargement",
			"value": "Bottom Loading",
			"evidenceIds": [
				"october3d-tools-beck-new-087-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "0.37 L/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-120-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per shot\n0.37 L. | 0.013 SCF\nLeistung bei 90 psi | 6.2 bar",
			"evidenceIds": [
				"october3d-tools-beck-sheet-120-p2"
			]
		},
		{
			"label": "Volume par tir, unité alternative constructeur",
			"value": "0.013 SCF/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-120-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-beck-new-087-p1",
			"sourceUrl": "https://www.beck-fastening.com/en/f1b-10f-16~p139",
			"sourceLabel": "FASCO, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 ff71c2ced19d12fd0c0d47f7d0a0ace3f57eb25bc6d4023bbeb786d87c89e4e9. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-beck-sheet-120-p2",
			"sourceUrl": "https://www.beck-fastening.com/Corporate/00_No%20Index/Handouts%20-%20No%20Index/Handout_F1B%2010F-16%20und%20F1B%2010J-16%20COMBI_2602_EN_screen.pdf#page=2",
			"sourceLabel": "FASCO, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 df2c49a11d1a4d5465281436727728736d480af00b0e34048dd9e95e40562a07. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-beck-new-087-p1"
		],
		"workingPressureBar": [
			"october3d-tools-beck-sheet-120-p2"
		],
		"airPerActionLiters": [
			"october3d-tools-beck-sheet-120-p2"
		],
		"actionLabel": [
			"october3d-tools-beck-sheet-120-p2"
		]
	},
	"notes": [
		"Volume déclaré : 0,37 L par cycle à 6,2 bar. Renseigner la cadence de pose."
	]
};

export default product;
