import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-beta-tools-1946-019460001",
	"slug": "riveteuse-beta-tools-1946-019460001",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Beta Tools 1946 (réf. 019460001)",
	"brand": "Beta Tools",
	"model": "1946",
	"mpn": "019460001",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-beta-tools-1946-019460001-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Beta Tools 1946 (réf. 019460001)",
		"sourceUrl": "https://www.beta-tools.com/files/2026/Action_EXPORT_2026.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "beta-tools-1946",
		"label": "Référence 019460001",
		"distinguishingAttributes": {
			"reference": "019460001",
			"Force de traction": "8.000 N",
			"Course": "14 mm"
		}
	},
	"editorial": {
		"overview": "La Beta 1946 est une riveteuse de traction 8 000 N et course 14 mm. La table donne 4,8 mm maximum pour les rivets aluminium ; la 1946C 7,8 porte une traction de 16 900 N et une course 22,5 mm. La capacité par matériau doit être respectée. Les 1,2 L par cycle sont publiés comme moyenne, sans mesure appariée explicitement à 6,2 bar ; aucune cadence n’est supposée.",
		"verifiedFacts": [
			"Force de traction : 8.000 N.",
			"Course : 14 mm.",
			"Capacité maximale du rivet, aluminium : Ø aluminium 4,8 mm.",
			"Filetage d’arrivée d’air : 1/4” GAS.",
			"Pression de service : 6,2 bar.",
			"Diamètre intérieur du flexible : 6 mm.",
			"Consommation moyenne, hors calcul : 1,2 l/cycles."
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
			"value": "8.000 N",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p95"
			]
		},
		{
			"label": "Course",
			"value": "14 mm",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p95"
			]
		},
		{
			"label": "Capacité maximale du rivet, aluminium",
			"value": "Ø aluminium 4,8 mm",
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
			"value": "6 mm",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p95"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "1,2 l/cycles",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p95"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "1.2 L/cycle",
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
		},
		{
			"id": "review:2026-11-16-reviews:riveteuse-beta-tools-1946-019460001:0",
			"sourceUrl": "https://www.beta-tools.com/files/2026/Action_EXPORT_2026.pdf",
			"sourceLabel": "Beta Tools, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La Beta 1946 est une riveteuse de traction 8 000 N et course 14 mm. La table donne 4,8 mm maximum pour les rivets aluminium ; la 1946C 7,8 porte une traction de 16 900 N et une course 22,5 mm. La capacité par matériau doit être respectée. Les 1,2 L par cycle sont publiés comme moyenne, sans mesure appariée explicitement à 6,2 bar ; aucune cadence n’est supposée. GET complet SHA-256 db4a2bce6f421e1aa42ea2eeb8274541ffcd4965b052e6328696a9d61735e85b. Pages PDF lues : 95."
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
