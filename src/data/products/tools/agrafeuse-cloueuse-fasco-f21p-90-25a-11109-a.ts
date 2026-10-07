import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-fasco-f21p-90-25a-11109-a",
	"slug": "agrafeuse-cloueuse-fasco-f21p-90-25a-11109-a",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "FASCO F21P 90-25A (réf. 11109.A)",
	"brand": "FASCO",
	"model": "F21P 90-25A",
	"mpn": "11109.A",
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
		"src": "/images/products/agrafeuse-cloueuse-fasco-f21p-90-25a-11109-a.svg",
		"alt": "Repères techniques : FASCO F21P 90-25A (réf. 11109.A)",
		"sourceUrl": "https://www.beck-fastening.com/en/f21p-90-25a~p150",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "fasco-f21p-90-25a",
		"label": "Référence 11109.A",
		"distinguishingAttributes": {
			"reference": "11109.A",
			"Type de fixation": "BECK 90, BECK 781",
			"Capacité du chargeur": "110"
		}
	},
	"editorial": {
		"overview": "FASCO F21P 90-25A (réf. 11109.A). Volume déclaré : 0,37 L par cycle à 6,2 bar. Renseigner la cadence de pose.",
		"verifiedFacts": [
			"Type de fixation : BECK 90, BECK 781.",
			"Capacité du chargeur : 110.",
			"Longueur des agrafes : 12 - 25 mm | 1/2 - 1\".",
			"Hauteur : 182 mm | 7.16\".",
			"Largeur : 49 mm | 1.93\".",
			"Longueur : 226 mm | 8.9\".",
			"Masse déclarée : 1.02 kg | 2.25 lbs.",
			"Plage de service déclarée : 4 - 7 bar | 60 - 100 psi.",
			"Système de déclenchement : Contact Actuation.",
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
			"value": "BECK 90, BECK 781",
			"evidenceIds": [
				"october3d-tools-beck-new-014-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "110",
			"evidenceIds": [
				"october3d-tools-beck-new-014-p1"
			]
		},
		{
			"label": "Longueur des agrafes",
			"value": "12 - 25 mm | 1/2 - 1\"",
			"evidenceIds": [
				"october3d-tools-beck-new-014-p1"
			]
		},
		{
			"label": "Hauteur",
			"value": "182 mm | 7.16\"",
			"evidenceIds": [
				"october3d-tools-beck-new-014-p1"
			]
		},
		{
			"label": "Largeur",
			"value": "49 mm | 1.93\"",
			"evidenceIds": [
				"october3d-tools-beck-new-014-p1"
			]
		},
		{
			"label": "Longueur",
			"value": "226 mm | 8.9\"",
			"evidenceIds": [
				"october3d-tools-beck-new-014-p1"
			]
		},
		{
			"label": "Masse déclarée",
			"value": "1.02 kg | 2.25 lbs",
			"evidenceIds": [
				"october3d-tools-beck-new-014-p1"
			]
		},
		{
			"label": "Plage de service déclarée",
			"value": "4 - 7 bar | 60 - 100 psi",
			"evidenceIds": [
				"october3d-tools-beck-new-014-p1"
			]
		},
		{
			"label": "Système de déclenchement",
			"value": "Contact Actuation",
			"evidenceIds": [
				"october3d-tools-beck-new-014-p1"
			]
		},
		{
			"label": "Chargement",
			"value": "Bottom Loading",
			"evidenceIds": [
				"october3d-tools-beck-new-014-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "0.37 L/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-028-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per shot\n0.37 L. | 0.013 SCF\nPerformance at 90 psi | 6.2 bar",
			"evidenceIds": [
				"october3d-tools-beck-sheet-028-p2"
			]
		},
		{
			"label": "Volume par tir, unité alternative constructeur",
			"value": "0.013 SCF/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-028-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-beck-new-014-p1",
			"sourceUrl": "https://www.beck-fastening.com/en/f21p-90-25a~p150",
			"sourceLabel": "FASCO, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 0fb91ac02cd003bf670e38b00025b06a774fe8fe87b00ab6fe7e636e374ce72b. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-beck-sheet-028-p2",
			"sourceUrl": "https://www.beck-fastening.com/Corporate/00_No%20Index/Handouts%20-%20No%20Index/Handout_F21P%2090-25A_KOMBI_2506_EN_screen.pdf#page=2",
			"sourceLabel": "FASCO, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 2e3e962cd640a095e3be226dc542e88b12d21a86243ddd670bfa97309ec69695. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-beck-new-014-p1"
		],
		"workingPressureBar": [
			"october3d-tools-beck-sheet-028-p2"
		],
		"airPerActionLiters": [
			"october3d-tools-beck-sheet-028-p2"
		],
		"actionLabel": [
			"october3d-tools-beck-sheet-028-p2"
		]
	},
	"notes": [
		"Volume déclaré : 0,37 L par cycle à 6,2 bar. Renseigner la cadence de pose."
	]
};

export default product;
