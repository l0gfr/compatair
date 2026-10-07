import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-beta-tools-1946c-7-8-019460008",
	"slug": "riveteuse-beta-tools-1946c-7-8-019460008",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Beta Tools 1946C 7,8 (réf. 019460008)",
	"brand": "Beta Tools",
	"model": "1946C 7,8",
	"mpn": "019460008",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-beta-tools-1946c-7-8-019460008.svg",
		"alt": "Repères techniques : Beta Tools 1946C 7,8 (réf. 019460008)",
		"sourceUrl": "https://www.beta-tools.com/files/2026/Action_EXPORT_2026.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "beta-tools-1946c-7-8",
		"label": "Référence 019460008",
		"distinguishingAttributes": {
			"reference": "019460008",
			"Force de traction": "16.900 N",
			"Course": "22,5 mm"
		}
	},
	"editorial": {
		"overview": "Beta Tools 1946C 7,8 (réf. 019460008). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Force de traction : 16.900 N.",
			"Course : 22,5 mm.",
			"Capacité maximale du rivet, aluminium : Ø aluminium 7,8 mm.",
			"Filetage d’arrivée d’air : 1/4” GAS.",
			"Pression de service : 6,2 bar.",
			"Diamètre intérieur du flexible : 10 mm.",
			"Consommation moyenne, hors calcul : 4,9 l/cycles."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Le tableau emploie Mean air consumption et une pression de service ; il ne documente pas une consommation en charge à une pression de mesure établie.",
			"Le volume par cycle n’est pas défini en litres normaux ou en air libre dans cet extrait ; il reste documentaire et n’est pas multiplié par une cadence.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Force de traction",
			"value": "16.900 N",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p95"
			]
		},
		{
			"label": "Course",
			"value": "22,5 mm",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p95"
			]
		},
		{
			"label": "Capacité maximale du rivet, aluminium",
			"value": "Ø aluminium 7,8 mm",
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
			"label": "Pression de service",
			"value": "6,2 bar",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p95"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "10 mm",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p95"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4,9 l/cycles",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p95"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "4.9 L/cycle",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p95"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating pressure 6,2 bar",
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
