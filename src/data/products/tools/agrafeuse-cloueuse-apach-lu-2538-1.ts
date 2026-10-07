import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-lu-2538-1",
	"slug": "agrafeuse-cloueuse-apach-lu-2538-1",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH LU-2538.1",
	"brand": "APACH",
	"model": "LU-2538.1",
	"mpn": "LU-2538.1",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-lu-2538-1.svg",
		"alt": "Repères techniques : APACH LU-2538.1",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-lu-2538-1",
		"label": "Référence LU-2538.1",
		"distinguishingAttributes": {
			"reference": "LU-2538.1",
			"Masse déclarée": "2.6 kg",
			"Dimensions L × l × H": "373 x 70 x 260mm"
		}
	},
	"editorial": {
		"overview": "APACH LU-2538.1. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 2.6 kg.",
			"Dimensions L × l × H : 373 x 70 x 260mm.",
			"Capacité de chargement déclarée : 140 staples.",
			"Pression de service, unité imprimée : 6 - 8 kg / cm2.",
			"Fixations déclarées, extrait constructeur : 16 Gauge Staples | Compatible with BOSTITCH BCS(16S2), Complete 16S2 Series | Ø. 063 x .055” / 1.6 x 1.4 mm.",
			"Équipements et options déclarés : Patented Quick Release Nose Cover | 360° Adjustable Metal Exhaust | Sequential Fire Trigger Available (#34903501A)."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"La consommation d’air n’est pas documentée dans le tableau propre à cette référence ; aucun volume par tir ni débit n’est estimé.",
			"Les pressions de service publiées ne sont pas des pressions de mesure d’une consommation.",
			"Le tableau imprime 2,6 kg avec 5,2 lbs ; les deux unités de masse sont discordantes, sans poids corrigé par conversion.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Masse déclarée",
			"value": "2.6 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p28"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "373 x 70 x 260mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p28"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "140 staples",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p28"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "6 - 8 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p28"
			]
		},
		{
			"label": "Fixations déclarées, extrait constructeur",
			"value": "16 Gauge Staples | Compatible with BOSTITCH BCS(16S2), Complete 16S2 Series | Ø. 063 x .055” / 1.6 x 1.4 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p28"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "Patented Quick Release Nose Cover | 360° Adjustable Metal Exhaust | Sequential Fire Trigger Available (#34903501A)",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p28"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 6 - 8 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p28"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p28",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=28",
			"sourceLabel": "APACH, document technique officiel, page PDF 28",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p28"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p28"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p28"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
