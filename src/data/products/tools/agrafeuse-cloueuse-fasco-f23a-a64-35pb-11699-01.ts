import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-fasco-f23a-a64-35pb-11699-01",
	"slug": "agrafeuse-cloueuse-fasco-f23a-a64-35pb-11699-01",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "FASCO F23A A64-35PB (réf. 11699.01)",
	"brand": "FASCO",
	"model": "F23A A64-35PB",
	"mpn": "11699.01",
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
		"src": "/images/products/agrafeuse-cloueuse-fasco-f23a-a64-35pb-11699-01.svg",
		"alt": "Repères techniques : FASCO F23A A64-35PB (réf. 11699.01)",
		"sourceUrl": "https://www.beck-fastening.com/en/f23a-a64-35pb~p366",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "fasco-f23a-a64-35pb",
		"label": "Référence 11699.01",
		"distinguishingAttributes": {
			"reference": "11699.01",
			"Type de fixation": "Brads, Pins",
			"Capacité du chargeur": "120"
		}
	},
	"editorial": {
		"overview": "FASCO F23A A64-35PB (réf. 11699.01). Volume déclaré : 0,44 L par cycle à 6,2 bar. Renseigner la cadence de pose.",
		"verifiedFacts": [
			"Type de fixation : Brads, Pins.",
			"Capacité du chargeur : 120.",
			"Longueur des fixations : 12 - 35 mm | 1/2 - 1 3/8\".",
			"Hauteur : 200 mm | 7.87\".",
			"Largeur : 62 mm | 2.44\".",
			"Longueur : 220 mm | 8.66\".",
			"Masse déclarée : 1.15 kg | 2.54 lbs.",
			"Plage de service déclarée : 5 - 7 bar | 75 - 100 psi.",
			"Système de déclenchement : Single Actuation.",
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
			"value": "Brads, Pins",
			"evidenceIds": [
				"october3d-tools-beck-new-097-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "120",
			"evidenceIds": [
				"october3d-tools-beck-new-097-p1"
			]
		},
		{
			"label": "Longueur des fixations",
			"value": "12 - 35 mm | 1/2 - 1 3/8\"",
			"evidenceIds": [
				"october3d-tools-beck-new-097-p1"
			]
		},
		{
			"label": "Hauteur",
			"value": "200 mm | 7.87\"",
			"evidenceIds": [
				"october3d-tools-beck-new-097-p1"
			]
		},
		{
			"label": "Largeur",
			"value": "62 mm | 2.44\"",
			"evidenceIds": [
				"october3d-tools-beck-new-097-p1"
			]
		},
		{
			"label": "Longueur",
			"value": "220 mm | 8.66\"",
			"evidenceIds": [
				"october3d-tools-beck-new-097-p1"
			]
		},
		{
			"label": "Masse déclarée",
			"value": "1.15 kg | 2.54 lbs",
			"evidenceIds": [
				"october3d-tools-beck-new-097-p1"
			]
		},
		{
			"label": "Plage de service déclarée",
			"value": "5 - 7 bar | 75 - 100 psi",
			"evidenceIds": [
				"october3d-tools-beck-new-097-p1"
			]
		},
		{
			"label": "Système de déclenchement",
			"value": "Single Actuation",
			"evidenceIds": [
				"october3d-tools-beck-new-097-p1"
			]
		},
		{
			"label": "Chargement",
			"value": "Side Loading",
			"evidenceIds": [
				"october3d-tools-beck-new-097-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "0.44 L/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-135-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per shot 120 pins / brads\n0.44 L. | 0.016 SCF\nPerformance at 90 psi | 6.2 bar",
			"evidenceIds": [
				"october3d-tools-beck-sheet-135-p2"
			]
		},
		{
			"label": "Volume par tir, unité alternative constructeur",
			"value": "0.016 SCF/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-135-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-beck-new-097-p1",
			"sourceUrl": "https://www.beck-fastening.com/en/f23a-a64-35pb~p366",
			"sourceLabel": "FASCO, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 08252641e0b72e2b1a7ff4ec4f40e32a07307bbfc13fdd759a8c78cf61a44a48. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-beck-sheet-135-p2",
			"sourceUrl": "https://www.beck-fastening.com/Corporate/00_No%20Index/Handouts%20-%20No%20Index/Handout_F23A%20A64-35PB_F23A%20A64-50PB_2105_EN_screen.pdf#page=2",
			"sourceLabel": "FASCO, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 106eb8ade2fcd59319e21497c7cf19e0cf6e2235085ebfd1215c4e31e1735f7f. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-beck-new-097-p1"
		],
		"workingPressureBar": [
			"october3d-tools-beck-sheet-135-p2"
		],
		"airPerActionLiters": [
			"october3d-tools-beck-sheet-135-p2"
		],
		"actionLabel": [
			"october3d-tools-beck-sheet-135-p2"
		]
	},
	"notes": [
		"Volume déclaré : 0,44 L par cycle à 6,2 bar. Renseigner la cadence de pose."
	]
};

export default product;
