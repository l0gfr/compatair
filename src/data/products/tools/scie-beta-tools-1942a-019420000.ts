import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-beta-tools-1942a-019420000",
	"slug": "scie-beta-tools-1942a-019420000",
	"categoryId": "scie",
	"category": "scie",
	"label": "Beta Tools 1942A (réf. 019420000)",
	"brand": "Beta Tools",
	"model": "1942A",
	"mpn": "019420000",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-beta-tools-1942a-019420000-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Beta Tools 1942A (réf. 019420000)",
		"sourceUrl": "https://www.beta-tools.com/files/2026/Action_EXPORT_2026.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "beta-tools-1942a",
		"label": "Référence 019420000",
		"distinguishingAttributes": {
			"reference": "019420000",
			"Cadence mécanique par minute": "10.000",
			"Course": "10 mm"
		}
	},
	"editorial": {
		"overview": "La Beta 1942A est une scie alternative à 10 000 courses/min et course 10 mm. Le choix de lame et de matériau reste distinct du cas de l’AF7 et de la SA347, dont les cadences et les corps diffèrent. Les 75 L/min sont moyens, et la pression 6,2 bar est une consigne de service. Aucun débit en charge ni capacité de coupe absente de la source ne sont inventés.",
		"verifiedFacts": [
			"Cadence mécanique par minute : 10.000.",
			"Course : 10 mm.",
			"Filetage d’arrivée d’air : 1/4” GAS.",
			"Pression de service : 6,2 bar.",
			"Diamètre intérieur du flexible : 8 mm.",
			"Consommation moyenne, hors calcul : 75 l/min."
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
			"value": "10.000",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p94"
			]
		},
		{
			"label": "Course",
			"value": "10 mm",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p94"
			]
		},
		{
			"label": "Filetage d’arrivée d’air",
			"value": "1/4” GAS",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p94"
			]
		},
		{
			"label": "Pression de service",
			"value": "6,2 bar",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p94"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "8 mm",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p94"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "75 l/min",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p94"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "75 L/min",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p94"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating pressure 6,2 bar",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p94"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-beta-action-export-2026-p94",
			"sourceUrl": "https://www.beta-tools.com/files/2026/Action_EXPORT_2026.pdf#page=94",
			"sourceLabel": "Beta Tools, document technique officiel, page PDF 94",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 db4a2bce6f421e1aa42ea2eeb8274541ffcd4965b052e6328696a9d61735e85b. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:scie-beta-tools-1942a-019420000:0",
			"sourceUrl": "https://www.beta-tools.com/files/2026/Action_EXPORT_2026.pdf",
			"sourceLabel": "Beta Tools, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La Beta 1942A est une scie alternative à 10 000 courses/min et course 10 mm. Le choix de lame et de matériau reste distinct du cas de l’AF7 et de la SA347, dont les cadences et les corps diffèrent. Les 75 L/min sont moyens, et la pression 6,2 bar est une consigne de service. Aucun débit en charge ni capacité de coupe absente de la source ne sont inventés. GET complet SHA-256 db4a2bce6f421e1aa42ea2eeb8274541ffcd4965b052e6328696a9d61735e85b. Pages PDF lues : 94."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-beta-action-export-2026-p94"
		],
		"workingPressureBar": [
			"october3d-tools-beta-action-export-2026-p94"
		],
		"demandExplanation": [
			"october3d-tools-beta-action-export-2026-p94"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
