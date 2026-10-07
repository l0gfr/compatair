import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-fasco-f1b-a11-16-aut-l-m-11206",
	"slug": "agrafeuse-cloueuse-fasco-f1b-a11-16-aut-l-m-11206",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "FASCO F1B A11-16 AUT. L.M. (réf. 11206)",
	"brand": "FASCO",
	"model": "F1B A11-16 AUT. L.M.",
	"mpn": "11206",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 7
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-fasco-f1b-a11-16-aut-l-m-11206.svg",
		"alt": "Repères techniques : FASCO F1B A11-16 AUT. L.M. (réf. 11206)",
		"sourceUrl": "https://www.beck-fastening.com/en/f1b-a11-16-aut-l-m~p193",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "fasco-f1b-a11-16-aut-l-m",
		"label": "Référence 11206",
		"distinguishingAttributes": {
			"reference": "11206",
			"Type de fixation": "BECK 11",
			"Capacité du chargeur": "230"
		}
	},
	"editorial": {
		"overview": "FASCO F1B A11-16 AUT. L.M. (réf. 11206). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Type de fixation : BECK 11.",
			"Capacité du chargeur : 230.",
			"Longueur des agrafes : 6 - 16 mm | 1/4 - 5/8\".",
			"Hauteur : 167 mm | 6.58\".",
			"Largeur : 42 mm | 1.65\".",
			"Longueur : 376 mm | 14.8\".",
			"Masse déclarée : 1.37 kg | 3.02 lbs.",
			"Plage de service déclarée : 5 - 7 bar | 75 - 100 psi.",
			"Système de déclenchement : Continual Actuation.",
			"Chargement : Bottom Loading."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Le libellé primaire est littéralement «Air consumption per sho», confirmé visuellement. Le dénominateur complet n’est pas restauré silencieusement ; la valeur reste hors calcul.",
			"La fiche exprime le volume en litres et SCF ; elle ne définit pas la température ni l’humidité de référence des SCF. Le chiffre métrique déclaré est conservé sans conversion thermodynamique.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Type de fixation",
			"value": "BECK 11",
			"evidenceIds": [
				"october3d-tools-beck-new-003-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "230",
			"evidenceIds": [
				"october3d-tools-beck-new-003-p1"
			]
		},
		{
			"label": "Longueur des agrafes",
			"value": "6 - 16 mm | 1/4 - 5/8\"",
			"evidenceIds": [
				"october3d-tools-beck-new-003-p1"
			]
		},
		{
			"label": "Hauteur",
			"value": "167 mm | 6.58\"",
			"evidenceIds": [
				"october3d-tools-beck-new-003-p1"
			]
		},
		{
			"label": "Largeur",
			"value": "42 mm | 1.65\"",
			"evidenceIds": [
				"october3d-tools-beck-new-003-p1"
			]
		},
		{
			"label": "Longueur",
			"value": "376 mm | 14.8\"",
			"evidenceIds": [
				"october3d-tools-beck-new-003-p1"
			]
		},
		{
			"label": "Masse déclarée",
			"value": "1.37 kg | 3.02 lbs",
			"evidenceIds": [
				"october3d-tools-beck-new-003-p1"
			]
		},
		{
			"label": "Plage de service déclarée",
			"value": "5 - 7 bar | 75 - 100 psi",
			"evidenceIds": [
				"october3d-tools-beck-new-003-p1"
			]
		},
		{
			"label": "Système de déclenchement",
			"value": "Continual Actuation",
			"evidenceIds": [
				"october3d-tools-beck-new-003-p1"
			]
		},
		{
			"label": "Chargement",
			"value": "Bottom Loading",
			"evidenceIds": [
				"october3d-tools-beck-new-003-p1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "0.17 L/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-003-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per sho\n0.17 L. | 0.006 SCF\nPerformance at 90 psi | 6.2 bar",
			"evidenceIds": [
				"october3d-tools-beck-sheet-003-p2"
			]
		},
		{
			"label": "Volume par tir, unité alternative constructeur",
			"value": "0.006 SCF/cycle",
			"evidenceIds": [
				"october3d-tools-beck-sheet-003-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-beck-new-003-p1",
			"sourceUrl": "https://www.beck-fastening.com/en/f1b-a11-16-aut-l-m~p193",
			"sourceLabel": "FASCO, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 f735a6f01be73cefd0e6da9c04ee9e1c365651b6f308c4bbd42007cb5dca3863. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-beck-sheet-003-p2",
			"sourceUrl": "https://www.beck-fastening.com/Corporate/00_No%20Index/Handouts%20-%20No%20Index/Handout_F1B%20A11-16_COMBI_2503_EN_screen.pdf#page=2",
			"sourceLabel": "FASCO, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 8eaedb7417d3583d92f2d4a1b122583e3ae63f9a65a048feb793980692c62502. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-beck-new-003-p1"
		],
		"workingPressureBar": [
			"october3d-tools-beck-new-003-p1"
		],
		"demandExplanation": [
			"october3d-tools-beck-new-003-p1",
			"october3d-tools-beck-sheet-003-p2"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
