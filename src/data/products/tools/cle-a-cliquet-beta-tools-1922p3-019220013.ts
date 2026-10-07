import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-beta-tools-1922p3-019220013",
	"slug": "cle-a-cliquet-beta-tools-1922p3-019220013",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Beta Tools 1922P3 (réf. 019220013)",
	"brand": "Beta Tools",
	"model": "1922P3",
	"mpn": "019220013",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-beta-tools-1922p3-019220013.svg",
		"alt": "Repères techniques : Beta Tools 1922P3 (réf. 019220013)",
		"sourceUrl": "https://www.beta-tools.com/files/2026/Action_EXPORT_2026.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "beta-tools-1922p3",
		"label": "Référence 019220013",
		"distinguishingAttributes": {
			"reference": "019220013",
			"Vitesse à vide": "600 rpm",
			"Couple maximal": "136 Nm"
		}
	},
	"editorial": {
		"overview": "Beta Tools 1922P3 (réf. 019220013). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Vitesse à vide : 600 rpm.",
			"Couple maximal : 136 Nm.",
			"Filetage d’arrivée d’air : 1/4” GAS.",
			"Pression de service : 6,2 bar.",
			"Diamètre intérieur du flexible : 10 mm.",
			"Consommation moyenne, hors calcul : 113 l/min."
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
			"value": "600 rpm",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p93"
			]
		},
		{
			"label": "Couple maximal",
			"value": "136 Nm",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p93"
			]
		},
		{
			"label": "Filetage d’arrivée d’air",
			"value": "1/4” GAS",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p93"
			]
		},
		{
			"label": "Pression de service",
			"value": "6,2 bar",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p93"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "10 mm",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p93"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "113 l/min",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p93"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "113 L/min",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p93"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating pressure 6,2 bar",
			"evidenceIds": [
				"october3d-tools-beta-action-export-2026-p93"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-beta-action-export-2026-p93",
			"sourceUrl": "https://www.beta-tools.com/files/2026/Action_EXPORT_2026.pdf#page=93",
			"sourceLabel": "Beta Tools, document technique officiel, page PDF 93",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 db4a2bce6f421e1aa42ea2eeb8274541ffcd4965b052e6328696a9d61735e85b. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-beta-action-export-2026-p93"
		],
		"workingPressureBar": [
			"october3d-tools-beta-action-export-2026-p93"
		],
		"demandExplanation": [
			"october3d-tools-beta-action-export-2026-p93"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
