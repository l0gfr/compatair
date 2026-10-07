import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-fasco-f81c-bsp-160-11800",
	"slug": "agrafeuse-cloueuse-fasco-f81c-bsp-160-11800",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "FASCO F81C BSP 160 (réf. 11800)",
	"brand": "FASCO",
	"model": "F81C BSP 160",
	"mpn": "11800",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6,
		"max": 8
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-fasco-f81c-bsp-160-11800.svg",
		"alt": "Repères techniques : FASCO F81C BSP 160 (réf. 11800)",
		"sourceUrl": "https://www.beck-fastening.com/en/f81c-bsp-160~p397",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "fasco-f81c-bsp-160",
		"label": "Référence 11800",
		"distinguishingAttributes": {
			"reference": "11800",
			"Type de fixation": "BECK BS 29",
			"Capacité du chargeur": "125"
		}
	},
	"editorial": {
		"overview": "FASCO F81C BSP 160 (réf. 11800). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Type de fixation : BECK BS 29.",
			"Capacité du chargeur : 125.",
			"Longueur des agrafes : 65 - 160 mm | 2 9/16 - 6 3/8\".",
			"Hauteur : 470 mm | 18.5\".",
			"Largeur : 138 mm | 5.43\".",
			"Longueur : 400 mm | 15.75\".",
			"Masse déclarée : 6.25 kg | 13.78 lbs.",
			"Plage de service déclarée : 6 - 8 bar | 85 - 115 psi.",
			"Système de déclenchement : Full Sequential Actuation.",
			"Chargement : Top Loading."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"La page produit documente la référence et ses caractéristiques ; aucun volume par tir avec conditions utilisables n’a encore été trouvé pour cette version exacte.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Type de fixation",
			"value": "BECK BS 29",
			"evidenceIds": [
				"october3d-tools-beck-new-036-p1"
			]
		},
		{
			"label": "Capacité du chargeur",
			"value": "125",
			"evidenceIds": [
				"october3d-tools-beck-new-036-p1"
			]
		},
		{
			"label": "Longueur des agrafes",
			"value": "65 - 160 mm | 2 9/16 - 6 3/8\"",
			"evidenceIds": [
				"october3d-tools-beck-new-036-p1"
			]
		},
		{
			"label": "Hauteur",
			"value": "470 mm | 18.5\"",
			"evidenceIds": [
				"october3d-tools-beck-new-036-p1"
			]
		},
		{
			"label": "Largeur",
			"value": "138 mm | 5.43\"",
			"evidenceIds": [
				"october3d-tools-beck-new-036-p1"
			]
		},
		{
			"label": "Longueur",
			"value": "400 mm | 15.75\"",
			"evidenceIds": [
				"october3d-tools-beck-new-036-p1"
			]
		},
		{
			"label": "Masse déclarée",
			"value": "6.25 kg | 13.78 lbs",
			"evidenceIds": [
				"october3d-tools-beck-new-036-p1"
			]
		},
		{
			"label": "Plage de service déclarée",
			"value": "6 - 8 bar | 85 - 115 psi",
			"evidenceIds": [
				"october3d-tools-beck-new-036-p1"
			]
		},
		{
			"label": "Système de déclenchement",
			"value": "Full Sequential Actuation",
			"evidenceIds": [
				"october3d-tools-beck-new-036-p1"
			]
		},
		{
			"label": "Chargement",
			"value": "Top Loading",
			"evidenceIds": [
				"october3d-tools-beck-new-036-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "6 - 8 bar | 85 - 115 psi",
			"evidenceIds": [
				"october3d-tools-beck-new-036-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-beck-new-036-p1",
			"sourceUrl": "https://www.beck-fastening.com/en/f81c-bsp-160~p397",
			"sourceLabel": "FASCO, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 e3ad03e90d26d24364cb423599afd97f7323be25fd146ba8711745e50f3d5136. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-beck-new-036-p1"
		],
		"workingPressureBar": [
			"october3d-tools-beck-new-036-p1"
		],
		"demandExplanation": [
			"october3d-tools-beck-new-036-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
