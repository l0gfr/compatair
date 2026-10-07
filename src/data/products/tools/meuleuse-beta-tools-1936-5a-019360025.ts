import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-beta-tools-1936-5a-019360025",
	"slug": "meuleuse-beta-tools-1936-5a-019360025",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Beta Tools 1936/5A (réf. 019360025)",
	"brand": "Beta Tools",
	"model": "1936/5A",
	"mpn": "019360025",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-beta-tools-1936-5a-019360025.svg",
		"alt": "Repères techniques : Beta Tools 1936/5A (réf. 019360025)",
		"sourceUrl": "https://www.beta-tools.com/files/2026/Action_EXPORT_2026.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "beta-tools-1936-5a",
		"label": "Référence 019360025",
		"distinguishingAttributes": {
			"reference": "019360025",
			"Vitesse à vide": "10.000 rpm",
			"Diamètre de disque": "125 mm"
		}
	},
	"editorial": {
		"overview": "Beta Tools 1936/5A (réf. 019360025). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Vitesse à vide : 10.000 rpm.",
			"Diamètre de disque : 125 mm.",
			"Puissance : 0,66 kW.",
			"Filetage de broche : M 14.",
			"Filetage d’arrivée d’air : 1/4” GAS.",
			"Pression de travail : 6,2 bar.",
			"Diamètre intérieur du flexible : 10 mm.",
			"Consommation moyenne, hors calcul : 390 l/min."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Le tableau emploie Mean air consumption et une pression de service ; il ne documente pas une consommation en charge à une pression de mesure établie.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "10.000 rpm",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p94"
			]
		},
		{
			"label": "Diamètre de disque",
			"value": "125 mm",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p94"
			]
		},
		{
			"label": "Puissance",
			"value": "0,66 kW",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p94"
			]
		},
		{
			"label": "Filetage de broche",
			"value": "M 14",
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
			"label": "Pression de travail",
			"value": "6,2 bar",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p94"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "10 mm",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p94"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "390 l/min",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p94"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "390 L/min",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p94"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working pressure 6,2 bar",
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
