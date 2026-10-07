import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-beta-tools-1933l-019330015",
	"slug": "meuleuse-beta-tools-1933l-019330015",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Beta Tools 1933L (réf. 019330015)",
	"brand": "Beta Tools",
	"model": "1933L",
	"mpn": "019330015",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-beta-tools-1933l-019330015.svg",
		"alt": "Repères techniques : Beta Tools 1933L (réf. 019330015)",
		"sourceUrl": "https://www.beta-tools.com/files/2026/Action_EXPORT_2026.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "beta-tools-1933l",
		"label": "Référence 019330015",
		"distinguishingAttributes": {
			"reference": "019330015",
			"Vitesse à vide": "25.000 rpm",
			"Capacité de pince": "3-6 mm"
		}
	},
	"editorial": {
		"overview": "Beta Tools 1933L (réf. 019330015). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Vitesse à vide : 25.000 rpm.",
			"Capacité de pince : 3-6 mm.",
			"Puissance : 0,20 kW.",
			"Filetage d’arrivée d’air : 1/4” GAS.",
			"Pression de service : 6,2 bar.",
			"Diamètre intérieur du flexible : 10 mm.",
			"Consommation moyenne, hors calcul : 370 l/min."
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
			"value": "25.000 rpm",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p94"
			]
		},
		{
			"label": "Capacité de pince",
			"value": "3-6 mm",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p94"
			]
		},
		{
			"label": "Puissance",
			"value": "0,20 kW",
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
			"value": "10 mm",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p94"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "370 l/min",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p94"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "370 L/min",
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
