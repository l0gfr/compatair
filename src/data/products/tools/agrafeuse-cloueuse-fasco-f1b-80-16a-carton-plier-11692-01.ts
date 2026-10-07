import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-fasco-f1b-80-16a-carton-plier-11692-01",
	"slug": "agrafeuse-cloueuse-fasco-f1b-80-16a-carton-plier-11692-01",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "FASCO F1B 80-16A CARTON PLIER (réf. 11692.01)",
	"brand": "FASCO",
	"model": "F1B 80-16A CARTON PLIER",
	"mpn": "11692.01",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airPerActionLiters": 0.44,
	"actionLabel": "cycle de pose",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-fasco-f1b-80-16a-carton-plier-11692-01.svg",
		"alt": "Repères techniques : FASCO F1B 80-16A CARTON PLIER (réf. 11692.01)",
		"sourceUrl": "https://www.beck-fastening.com/en/f1b-80-16a-carton-plier~p59192",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "fasco-f1b-80-16a-carton-plier",
		"label": "Référence 11692.01",
		"distinguishingAttributes": {
			"reference": "11692.01",
			"Type de fixation": "BECK 80, BECK 8, BECK KOA",
			"Capacité du chargeur": "310"
		}
	},
	"editorial": {
		"overview": "FASCO F1B 80-16A CARTON PLIER (réf. 11692.01). Volume déclaré : 0,44 L par cycle à 6,2 bar. Renseigner la cadence de pose.",
		"verifiedFacts": [
			"Type de fixation : BECK 80, BECK 8, BECK KOA.",
			"Capacité du chargeur : 310.",
			"Longueur des clous : 8 - 16 mm | 5/16 - 5/8\".",
			"Hauteur : 327 mm | 12.87\".",
			"Largeur : 75 mm | 2.95\".",
			"Longueur : 380 mm | 14.96\".",
			"Masse déclarée : 2.26 kg | 4.98 lbs.",
			"Plage de service déclarée : 5 - 7 bar | 70 - 100 psi.",
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
			"value": "BECK 80, BECK 8, BECK KOA",
			"evidenceIds": [
				"october3d-tools-beck-new-052-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "310",
			"evidenceIds": [
				"october3d-tools-beck-new-052-p1"
			]
		},
		{
			"label": "Longueur des clous",
			"value": "8 - 16 mm | 5/16 - 5/8\"",
			"evidenceIds": [
				"october3d-tools-beck-new-052-p1"
			]
		},
		{
			"label": "Hauteur",
			"value": "327 mm | 12.87\"",
			"evidenceIds": [
				"october3d-tools-beck-new-052-p1"
			]
		},
		{
			"label": "Largeur",
			"value": "75 mm | 2.95\"",
			"evidenceIds": [
				"october3d-tools-beck-new-052-p1"
			]
		},
		{
			"label": "Longueur",
			"value": "380 mm | 14.96\"",
			"evidenceIds": [
				"october3d-tools-beck-new-052-p1"
			]
		},
		{
			"label": "Masse déclarée",
			"value": "2.26 kg | 4.98 lbs",
			"evidenceIds": [
				"october3d-tools-beck-new-052-p1"
			]
		},
		{
			"label": "Plage de service déclarée",
			"value": "5 - 7 bar | 70 - 100 psi",
			"evidenceIds": [
				"october3d-tools-beck-new-052-p1"
			]
		},
		{
			"label": "Système de déclenchement",
			"value": "Single Actuation",
			"evidenceIds": [
				"october3d-tools-beck-new-052-p1"
			]
		},
		{
			"label": "Chargement",
			"value": "Bottom Loading",
			"evidenceIds": [
				"october3d-tools-beck-new-052-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "0.44 L/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-044-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per shot\n0.44 L. | 0.016 SCF\nPerformance at 90 psi | 6.2 bar",
			"evidenceIds": [
				"october3d-tools-beck-sheet-044-p2"
			]
		},
		{
			"label": "Volume par tir, unité alternative constructeur",
			"value": "0.016 SCF/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-044-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-beck-new-052-p1",
			"sourceUrl": "https://www.beck-fastening.com/en/f1b-80-16a-carton-plier~p59192",
			"sourceLabel": "FASCO, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 131b44f9f83aaebfdbe6c579773322c32d59ed43ca24d107f7389f232aa719cf. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-beck-sheet-044-p2",
			"sourceUrl": "https://www.beck-fastening.com/Corporate/00_No%20Index/Handouts%20-%20No%20Index/Handout_F1B%20CARTON%20PLIER_COMBI_2209_EN_screen.pdf#page=2",
			"sourceLabel": "FASCO, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 0fa1683db267cffea215ab59178ccd40c58156ff30ef94440ba4cba3388a1543. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-beck-new-052-p1"
		],
		"workingPressureBar": [
			"october3d-tools-beck-sheet-044-p2"
		],
		"airPerActionLiters": [
			"october3d-tools-beck-sheet-044-p2"
		],
		"actionLabel": [
			"october3d-tools-beck-sheet-044-p2"
		]
	},
	"notes": [
		"Volume déclaré : 0,44 L par cycle à 6,2 bar. Renseigner la cadence de pose."
	]
};

export default product;
