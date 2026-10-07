import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-lu-2638-1-ws",
	"slug": "agrafeuse-cloueuse-apach-lu-2638-1-ws",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH LU-2638.1-WS",
	"brand": "APACH",
	"model": "LU-2638.1-WS",
	"mpn": "LU-2638.1-WS",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-lu-2638-1-ws.svg",
		"alt": "Repères techniques : APACH LU-2638.1-WS",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-lu-2638-1-ws",
		"label": "Référence LU-2638.1-WS",
		"distinguishingAttributes": {
			"reference": "LU-2638.1-WS",
			"Masse déclarée": "3.4 kg",
			"Dimensions L × l × H": "370 x 84 x 880mm"
		}
	},
	"editorial": {
		"overview": "APACH LU-2638.1-WS. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 3.4 kg.",
			"Dimensions L × l × H : 370 x 84 x 880mm.",
			"Capacité de chargement déclarée : 140 staples.",
			"Pression de service, unité imprimée : 6 - 8 kg / cm2.",
			"Fixations déclarées, extrait constructeur : 16 Gauge Staples | Compatible with Complete P, Senco PW150R/P, Hitachi N5024A/11300, Duo-Fast RNS-17481/1716 cgr Series | Ø.063x.055”/ 1.6 x 1.4 mm.",
			"Équipements et options déclarés : Patented Quick Release Nose Cover | 360° Adjustable Metal Exhaust | Swivel Air-nlet for Less Hose Tangling | Air Trigger Available | Depth-of-Drive Adjustable."
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
			"value": "3.4 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p29"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "370 x 84 x 880mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p29"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "140 staples",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p29"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "6 - 8 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p29"
			]
		},
		{
			"label": "Fixations déclarées, extrait constructeur",
			"value": "16 Gauge Staples | Compatible with Complete P, Senco PW150R/P, Hitachi N5024A/11300, Duo-Fast RNS-17481/1716 cgr Series | Ø.063x.055”/ 1.6 x 1.4 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p29"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "Patented Quick Release Nose Cover | 360° Adjustable Metal Exhaust | Swivel Air-nlet for Less Hose Tangling | Air Trigger Available | Depth-of-Drive Adjustable",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p29"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 6 - 8 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p29"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p29",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=29",
			"sourceLabel": "APACH, document technique officiel, page PDF 29",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p29"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p29"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p29"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
