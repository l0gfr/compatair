import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-lu-7116-1auto",
	"slug": "agrafeuse-cloueuse-apach-lu-7116-1auto",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH LU-7116.1AUTO",
	"brand": "APACH",
	"model": "LU-7116.1AUTO",
	"mpn": "LU-7116.1AUTO",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-lu-7116-1auto.svg",
		"alt": "Repères techniques : APACH LU-7116.1AUTO",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-lu-7116-1auto",
		"label": "Référence LU-7116.1AUTO",
		"distinguishingAttributes": {
			"reference": "LU-7116.1AUTO",
			"Masse déclarée": "1 kg",
			"Dimensions L × l × H": "220 x 45 x 148mm"
		}
	},
	"editorial": {
		"overview": "APACH LU-7116.1AUTO. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 1 kg.",
			"Dimensions L × l × H : 220 x 45 x 148mm.",
			"Capacité de chargement déclarée : 100 staples.",
			"Pression de service, unité imprimée : 6 - 7.7 kg / cm2.",
			"Fixations déclarées, extrait constructeur : 71 Series | Compatible With Complete 71, Atro 7, BeA 71, | Haubold 7100, JK 670, Senco C Series .030 x .024” / 0.75 x 0.61mm.",
			"Équipements et options déclarés : Speed Adjustable. Minimum 27 Staplers/Sec when Adjusted to Highest Speed. | Light Squeeze Trigger to Single Fire, Full Squeeze to Auto-Fire No Adjustment Needed | Hammer Cap | Rear Exhaust | Bottom Load Long Magazine – Quick Load and Easy Jam Clearance | Low Fastener Re-Load Indicator Window."
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
				"october3d-tools-apach-doc-0-p16"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "220 x 45 x 148mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p16"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "100 staples",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p16"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "6 - 7.7 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p16"
			]
		},
		{
			"label": "Fixations déclarées, extrait constructeur",
			"value": "71 Series | Compatible With Complete 71, Atro 7, BeA 71, | Haubold 7100, JK 670, Senco C Series .030 x .024” / 0.75 x 0.61mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p16"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "Speed Adjustable. Minimum 27 Staplers/Sec when Adjusted to Highest Speed. | Light Squeeze Trigger to Single Fire, Full Squeeze to Auto-Fire No Adjustment Needed | Hammer Cap | Rear Exhaust | Bottom Load Long Magazine – Quick Load and Easy Jam Clearance | Low Fastener Re-Load Indicator Window",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p16"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 6 - 7.7 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p16"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p16",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=16",
			"sourceLabel": "APACH, document technique officiel, page PDF 16",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p16"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p16"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p16"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
