import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-fasco-f21t-gn-40a-g-s-11166-a2",
	"slug": "agrafeuse-cloueuse-fasco-f21t-gn-40a-g-s-11166-a2",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "FASCO F21T GN-40A G.S. (réf. 11166.A2)",
	"brand": "FASCO",
	"model": "F21T GN-40A G.S.",
	"mpn": "11166.A2",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airPerActionLiters": 0.43,
	"actionLabel": "cycle de pose",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-fasco-f21t-gn-40a-g-s-11166-a2.svg",
		"alt": "Repères techniques : FASCO F21T GN-40A G.S. (réf. 11166.A2)",
		"sourceUrl": "https://www.beck-fastening.com/en/f21t-gn-40a-g-s~p173",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "fasco-f21t-gn-40a-g-s",
		"label": "Référence 11166.A2",
		"distinguishingAttributes": {
			"reference": "11166.A2",
			"Type de fixation": "Brads",
			"Capacité du chargeur": "105"
		}
	},
	"editorial": {
		"overview": "FASCO F21T GN-40A G.S. (réf. 11166.A2). Volume déclaré : 0,43 L par cycle à 6,2 bar. Renseigner la cadence de pose.",
		"verifiedFacts": [
			"Type de fixation : Brads.",
			"Capacité du chargeur : 105.",
			"Longueur des fixations : 15 - 40 mm | 5/8 - 1 9/16\".",
			"Hauteur : 222 mm | 8.74\".",
			"Largeur : 68 mm | 2.68\".",
			"Longueur : 285 mm | 11.22\".",
			"Masse déclarée : 1.28 kg | 2.82 lbs.",
			"Plage de service déclarée : 5 - 7 bar | 75 - 100 psi.",
			"Système de déclenchement : Single Sequential Actuation.",
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
				"october3d-tools-beck-new-101-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "105",
			"evidenceIds": [
				"october3d-tools-beck-new-101-p1"
			]
		},
		{
			"label": "Longueur des fixations",
			"value": "15 - 40 mm | 5/8 - 1 9/16\"",
			"evidenceIds": [
				"october3d-tools-beck-new-101-p1"
			]
		},
		{
			"label": "Hauteur",
			"value": "222 mm | 8.74\"",
			"evidenceIds": [
				"october3d-tools-beck-new-101-p1"
			]
		},
		{
			"label": "Largeur",
			"value": "68 mm | 2.68\"",
			"evidenceIds": [
				"october3d-tools-beck-new-101-p1"
			]
		},
		{
			"label": "Longueur",
			"value": "285 mm | 11.22\"",
			"evidenceIds": [
				"october3d-tools-beck-new-101-p1"
			]
		},
		{
			"label": "Masse déclarée",
			"value": "1.28 kg | 2.82 lbs",
			"evidenceIds": [
				"october3d-tools-beck-new-101-p1"
			]
		},
		{
			"label": "Plage de service déclarée",
			"value": "5 - 7 bar | 75 - 100 psi",
			"evidenceIds": [
				"october3d-tools-beck-new-101-p1"
			]
		},
		{
			"label": "Système de déclenchement",
			"value": "Single Sequential Actuation",
			"evidenceIds": [
				"october3d-tools-beck-new-101-p1"
			]
		},
		{
			"label": "Chargement",
			"value": "Side Loading",
			"evidenceIds": [
				"october3d-tools-beck-new-101-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "0.43 L/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-141-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per shot\n0.43 L. | 0.015 SCF\nLeistung bei 90 psi | 6.2 bar",
			"evidenceIds": [
				"october3d-tools-beck-sheet-141-p2"
			]
		},
		{
			"label": "Volume par tir, unité alternative constructeur",
			"value": "0.015 SCF/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-141-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-beck-new-101-p1",
			"sourceUrl": "https://www.beck-fastening.com/en/f21t-gn-40a-g-s~p173",
			"sourceLabel": "FASCO, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 0d4bc268f5b57c72661ec1898e839f18fd078056706b10654d5183686cac727e. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-beck-sheet-141-p2",
			"sourceUrl": "https://www.beck-fastening.com/Corporate/Attachments%20Artikel/Ger%C3%A4te%20-%20Tools/Pinner%20and%20Bradders/Bradders/F21T%20GN-40A%20G.S/Handout_F21T%20GN-40A%20GS_2602_EN_screen.pdf#page=2",
			"sourceLabel": "FASCO, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 02509ba2e1e8ab5046675368fe656fca0a66fba9112aaba32198cd9912cd40c1. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-beck-new-101-p1"
		],
		"workingPressureBar": [
			"october3d-tools-beck-sheet-141-p2"
		],
		"airPerActionLiters": [
			"october3d-tools-beck-sheet-141-p2"
		],
		"actionLabel": [
			"october3d-tools-beck-sheet-141-p2"
		]
	},
	"notes": [
		"Volume déclaré : 0,43 L par cycle à 6,2 bar. Renseigner la cadence de pose."
	]
};

export default product;
