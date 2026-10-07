import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "graveur-beta-tools-1948-019480001",
	"slug": "graveur-beta-tools-1948-019480001",
	"categoryId": "graveur",
	"category": "graveur",
	"label": "Beta Tools 1948 (réf. 019480001)",
	"brand": "Beta Tools",
	"model": "1948",
	"mpn": "019480001",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/graveur-beta-tools-1948-019480001.svg",
		"alt": "Repères techniques : Beta Tools 1948 (réf. 019480001)",
		"sourceUrl": "https://www.beta-tools.com/files/2026/Action_EXPORT_2026.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "beta-tools-1948",
		"label": "Référence 019480001",
		"distinguishingAttributes": {
			"reference": "019480001",
			"Cadence mécanique par minute": "3.500 ÷ 3.800",
			"Dureté maximale du matériau": "60 HRC"
		}
	},
	"editorial": {
		"overview": "Beta Tools 1948 (réf. 019480001). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Cadence mécanique par minute : 3.500 ÷ 3.800.",
			"Dureté maximale du matériau : 60 HRC.",
			"Filetage d’arrivée d’air : 1/4” GAS.",
			"Pression de travail : 6,2 bar.",
			"Consommation moyenne, hors calcul : 50 l/min.",
			"Masse : 150 g."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Le tableau emploie Mean air consumption et une pression de service ; il ne documente pas une consommation en charge à une pression de mesure établie.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Cadence mécanique par minute",
			"value": "3.500 ÷ 3.800",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p95"
			]
		},
		{
			"label": "Dureté maximale du matériau",
			"value": "60 HRC",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p95"
			]
		},
		{
			"label": "Filetage d’arrivée d’air",
			"value": "1/4” GAS",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p95"
			]
		},
		{
			"label": "Pression de travail",
			"value": "6,2 bar",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p95"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "50 l/min",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p95"
			]
		},
		{
			"label": "Masse",
			"value": "150 g",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p95"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "50 L/min",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p95"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working pressure 6,2 bar",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p95"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-beta-action-export-2026-p95",
			"sourceUrl": "https://www.beta-tools.com/files/2026/Action_EXPORT_2026.pdf#page=95",
			"sourceLabel": "Beta Tools, document technique officiel, page PDF 95",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 db4a2bce6f421e1aa42ea2eeb8274541ffcd4965b052e6328696a9d61735e85b. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-beta-action-export-2026-p95"
		],
		"workingPressureBar": [
			"october3d-tools-beta-action-export-2026-p95"
		],
		"demandExplanation": [
			"october3d-tools-beta-action-export-2026-p95"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
