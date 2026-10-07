import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "soufflette-beta-tools-1949f2-019490028",
	"slug": "soufflette-beta-tools-1949f2-019490028",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "Beta Tools 1949F2 (réf. 019490028)",
	"brand": "Beta Tools",
	"model": "1949F2",
	"mpn": "019490028",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4,
		"max": 8
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/soufflette-beta-tools-1949f2-019490028.svg",
		"alt": "Repères techniques : Beta Tools 1949F2 (réf. 019490028)",
		"sourceUrl": "https://www.beta-tools.com/files/2026/Action_EXPORT_2026.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "beta-tools-1949f2",
		"label": "Référence 019490028",
		"distinguishingAttributes": {
			"reference": "019490028",
			"Filetage du raccord en laiton": "1/4” GAS",
			"Pression de service": "4-8 bar"
		}
	},
	"editorial": {
		"overview": "Beta Tools 1949F2 (réf. 019490028). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Filetage du raccord en laiton : 1/4” GAS.",
			"Pression de service : 4-8 bar.",
			"Pression maximale de service : 12 bar.",
			"Température de service : -20÷70 °C."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Le tableau emploie Mean air consumption et une pression de service ; il ne documente pas une consommation en charge à une pression de mesure établie.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Filetage du raccord en laiton",
			"value": "1/4” GAS",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p95"
			]
		},
		{
			"label": "Pression de service",
			"value": "4-8 bar",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p95"
			]
		},
		{
			"label": "Pression maximale de service",
			"value": "12 bar",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p95"
			]
		},
		{
			"label": "Température de service",
			"value": "-20÷70 °C",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p95"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating pressure 4-8 bar",
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
