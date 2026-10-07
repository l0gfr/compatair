import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-pts-8400",
	"slug": "agrafeuse-cloueuse-apach-pts-8400",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH PTS-8400",
	"brand": "APACH",
	"model": "PTS-8400",
	"mpn": "PTS-8400",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-pts-8400.svg",
		"alt": "Repères techniques : APACH PTS-8400",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-pts-8400",
		"label": "Référence PTS-8400",
		"distinguishingAttributes": {
			"reference": "PTS-8400",
			"Masse déclarée": "1 kg",
			"Dimensions L × l × H": "124 x 86 x 134mm"
		}
	},
	"editorial": {
		"overview": "APACH PTS-8400. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 1 kg.",
			"Dimensions L × l × H : 124 x 86 x 134mm.",
			"Capacité de chargement déclarée : 1.",
			"Pression de service, unité imprimée : 3.5 - 8 kg / cm2."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"La consommation d’air n’est pas documentée dans le tableau propre à cette référence ; aucun volume par tir ni débit n’est estimé.",
			"Les pressions de service publiées ne sont pas des pressions de mesure d’une consommation.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Masse déclarée",
			"value": "1 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p34"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "124 x 86 x 134mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p34"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "1",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p34"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "3.5 - 8 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p34"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 3.5 - 8 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p34"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p34",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=34",
			"sourceLabel": "APACH, document technique officiel, page PDF 34",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p34"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p34"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p34"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
