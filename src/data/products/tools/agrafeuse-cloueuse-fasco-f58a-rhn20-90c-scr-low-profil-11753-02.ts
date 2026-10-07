import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-fasco-f58a-rhn20-90c-scr-low-profil-11753-02",
	"slug": "agrafeuse-cloueuse-fasco-f58a-rhn20-90c-scr-low-profil-11753-02",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "FASCO F58A RHN20-90C SCR LOW PROFIL (réf. 11753.02)",
	"brand": "FASCO",
	"model": "F58A RHN20-90C SCR LOW PROFIL",
	"mpn": "11753.02",
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
		"src": "/images/products/agrafeuse-cloueuse-fasco-f58a-rhn20-90c-scr-low-profil-11753-02.svg",
		"alt": "Repères techniques : FASCO F58A RHN20-90C SCR LOW PROFIL (réf. 11753.02)",
		"sourceUrl": "https://www.beck-fastening.com/en/f58a-rhn20-90c-scrail~p379",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "fasco-f58a-rhn20-90c-scr-low-profil",
		"label": "Référence 11753.02",
		"distinguishingAttributes": {
			"reference": "11753.02",
			"Type de fixation": "20° Plastic strip SCRAIL® , 17° Plastic strip SCRAIL®, 20° Plastic strip nails, 17° Plastic strip nails",
			"Capacité du chargeur": "62"
		}
	},
	"editorial": {
		"overview": "FASCO F58A RHN20-90C SCR LOW PROFIL (réf. 11753.02). Volume déclaré : 1,86 L par cycle à 6,2 bar. Renseigner la cadence de pose.",
		"verifiedFacts": [
			"Type de fixation : 20° Plastic strip SCRAIL® , 17° Plastic strip SCRAIL®, 20° Plastic strip nails, 17° Plastic strip nails.",
			"Capacité du chargeur : 62.",
			"Longueur des clous : 50 - 90 mm | 2 - 3 1/2\".",
			"Longueur des fixations Scrail : 50 - 75 mm | 2 - 3\".",
			"Masse déclarée : 3.75 kg | 8.27 lbs.",
			"Plage de service déclarée : 5 - 8 bar | 75 - 115 psi.",
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
			"value": "20° Plastic strip SCRAIL® , 17° Plastic strip SCRAIL®, 20° Plastic strip nails, 17° Plastic strip nails",
			"evidenceIds": [
				"october3d-tools-beck-new-065-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "62",
			"evidenceIds": [
				"october3d-tools-beck-new-065-p1"
			]
		},
		{
			"label": "Longueur des clous",
			"value": "50 - 90 mm | 2 - 3 1/2\"",
			"evidenceIds": [
				"october3d-tools-beck-new-065-p1"
			]
		},
		{
			"label": "Longueur des fixations Scrail",
			"value": "50 - 75 mm | 2 - 3\"",
			"evidenceIds": [
				"october3d-tools-beck-new-065-p1"
			]
		},
		{
			"label": "Masse déclarée",
			"value": "3.75 kg | 8.27 lbs",
			"evidenceIds": [
				"october3d-tools-beck-new-065-p1"
			]
		},
		{
			"label": "Plage de service déclarée",
			"value": "5 - 8 bar | 75 - 115 psi",
			"evidenceIds": [
				"october3d-tools-beck-new-065-p1"
			]
		},
		{
			"label": "Système de déclenchement",
			"value": "Full Sequential Actuation, Contact Actuation",
			"evidenceIds": [
				"october3d-tools-beck-new-065-p1"
			]
		},
		{
			"label": "Chargement",
			"value": "Top Loading",
			"evidenceIds": [
				"october3d-tools-beck-new-065-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "1.86 L/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-096-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per shot\n1.86 L. | 0.066 SCF\nPerformance at 90 psi | 6.2 bar",
			"evidenceIds": [
				"october3d-tools-beck-sheet-096-p2"
			]
		},
		{
			"label": "Volume par tir, unité alternative constructeur",
			"value": "0.066 SCF/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-096-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-beck-new-065-p1",
			"sourceUrl": "https://www.beck-fastening.com/en/f58a-rhn20-90c-scrail~p379",
			"sourceLabel": "FASCO, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 b56417c48967915d27d692e5e0c284285ed1cf504b3930590b8c8e709f47148c. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-beck-sheet-096-p2",
			"sourceUrl": "https://www.beck-fastening.com/Corporate/00_No%20Index/Handouts%20-%20No%20Index/Handout_F58A%20RHN20-90C%20SCR_2403_EN_screen.pdf#page=2",
			"sourceLabel": "FASCO, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 38435f242416af392873c443f365e43ad3f3f394f32daa6d60b99cfae79a0e4a. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-beck-new-065-p1"
		],
		"workingPressureBar": [
			"october3d-tools-beck-sheet-096-p2"
		],
		"airPerActionLiters": [
			"october3d-tools-beck-sheet-096-p2"
		],
		"actionLabel": [
			"october3d-tools-beck-sheet-096-p2"
		]
	},
	"notes": [
		"Volume déclaré : 1,86 L par cycle à 6,2 bar. Renseigner la cadence de pose."
	]
};

export default product;
