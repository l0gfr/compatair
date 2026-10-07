import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-fasco-f21p-gn-31a-11132-a",
	"slug": "agrafeuse-cloueuse-fasco-f21p-gn-31a-11132-a",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "FASCO F21P GN-31A (réf. 11132.A)",
	"brand": "FASCO",
	"model": "F21P GN-31A",
	"mpn": "11132.A",
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
		"src": "/images/products/agrafeuse-cloueuse-fasco-f21p-gn-31a-11132-a.svg",
		"alt": "Repères techniques : FASCO F21P GN-31A (réf. 11132.A)",
		"sourceUrl": "https://www.beck-fastening.com/en/f21p-gn-31a~p164",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "fasco-f21p-gn-31a",
		"label": "Référence 11132.A",
		"distinguishingAttributes": {
			"reference": "11132.A",
			"Type de fixation": "Brads",
			"Capacité du chargeur": "105"
		}
	},
	"editorial": {
		"overview": "FASCO F21P GN-31A (réf. 11132.A). Volume déclaré : 0,37 L par cycle à 6,2 bar. Renseigner la cadence de pose.",
		"verifiedFacts": [
			"Type de fixation : Brads.",
			"Capacité du chargeur : 105.",
			"Longueur des fixations : 12 - 31 mm | 1/2 - 1 1/4\".",
			"Hauteur : 187 mm | 7.36\".",
			"Largeur : 49 mm | 1.93\".",
			"Longueur : 257 mm | 10.12\".",
			"Masse déclarée : 1.15 kg | 2.54 lbs.",
			"Plage de service déclarée : 4 - 7 bar | 60 - 100 psi.",
			"Système de déclenchement : Contact Actuation.",
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
				"october3d-tools-beck-new-100-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "105",
			"evidenceIds": [
				"october3d-tools-beck-new-100-p1"
			]
		},
		{
			"label": "Longueur des fixations",
			"value": "12 - 31 mm | 1/2 - 1 1/4\"",
			"evidenceIds": [
				"october3d-tools-beck-new-100-p1"
			]
		},
		{
			"label": "Hauteur",
			"value": "187 mm | 7.36\"",
			"evidenceIds": [
				"october3d-tools-beck-new-100-p1"
			]
		},
		{
			"label": "Largeur",
			"value": "49 mm | 1.93\"",
			"evidenceIds": [
				"october3d-tools-beck-new-100-p1"
			]
		},
		{
			"label": "Longueur",
			"value": "257 mm | 10.12\"",
			"evidenceIds": [
				"october3d-tools-beck-new-100-p1"
			]
		},
		{
			"label": "Masse déclarée",
			"value": "1.15 kg | 2.54 lbs",
			"evidenceIds": [
				"october3d-tools-beck-new-100-p1"
			]
		},
		{
			"label": "Plage de service déclarée",
			"value": "4 - 7 bar | 60 - 100 psi",
			"evidenceIds": [
				"october3d-tools-beck-new-100-p1"
			]
		},
		{
			"label": "Système de déclenchement",
			"value": "Contact Actuation",
			"evidenceIds": [
				"october3d-tools-beck-new-100-p1"
			]
		},
		{
			"label": "Chargement",
			"value": "Side Loading",
			"evidenceIds": [
				"october3d-tools-beck-new-100-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "0.37 L/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-139-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per shot\n0.37 L. | 0.013 SCF\nLeistung bei 90 psi | 6.2 bar",
			"evidenceIds": [
				"october3d-tools-beck-sheet-139-p2"
			]
		},
		{
			"label": "Volume par tir, unité alternative constructeur",
			"value": "0.013 SCF/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-139-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-beck-new-100-p1",
			"sourceUrl": "https://www.beck-fastening.com/en/f21p-gn-31a~p164",
			"sourceLabel": "FASCO, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 e87e8ae4e1812dabe169a74801a2f5bf7a91ad264829407ff073d1badaf1c33c. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-beck-sheet-139-p2",
			"sourceUrl": "https://www.beck-fastening.com/Corporate/Attachments%20Artikel/Ger%C3%A4te%20-%20Tools/Pinner%20and%20Bradders/Bradders/F21P%20GN-31A/Handout_F21P%20GN-31A_2602_EN_screen.pdf#page=2",
			"sourceLabel": "FASCO, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 4950a65eac46724bd3c2b27d5923ef398d906f8032bd458bc2de8fa8b4af5838. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-beck-new-100-p1"
		],
		"workingPressureBar": [
			"october3d-tools-beck-sheet-139-p2"
		],
		"airPerActionLiters": [
			"october3d-tools-beck-sheet-139-p2"
		],
		"actionLabel": [
			"october3d-tools-beck-sheet-139-p2"
		]
	},
	"notes": [
		"Volume déclaré : 0,37 L par cycle à 6,2 bar. Renseigner la cadence de pose."
	]
};

export default product;
