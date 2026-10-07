import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-lu-851kgf2",
	"slug": "agrafeuse-cloueuse-apach-lu-851kgf2",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH LU-851KGF2",
	"brand": "APACH",
	"model": "LU-851KGF2",
	"mpn": "LU-851KGF2",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-lu-851kgf2.svg",
		"alt": "Repères techniques : APACH LU-851KGF2",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-lu-851kgf2",
		"label": "Référence LU-851KGF2",
		"distinguishingAttributes": {
			"reference": "LU-851KGF2",
			"Masse déclarée": "2.9 kg",
			"Dimensions L × l × H": "343 x 97 x 307mm"
		}
	},
	"editorial": {
		"overview": "APACH LU-851KGF2. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 2.9 kg.",
			"Dimensions L × l × H : 343 x 97 x 307mm.",
			"Capacité de chargement déclarée : 140 staples.",
			"Pression de service, unité imprimée : 6 - 8 kg / cm2.",
			"Fixations déclarées, extrait constructeur : Compatible with Duo-Fast 7600, Haubold KG 700, Omer 700 Series | .063 x 0.55\" / 1.6 x 1.4mm.",
			"Équipements et options déclarés : Patented Quick Release Nose Cover | 360° Adjustable Air Deflector | Sequential Fire Trigger Available (#25205301A)."
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
			"value": "2.9 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p26"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "343 x 97 x 307mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p26"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "140 staples",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p26"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "6 - 8 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p26"
			]
		},
		{
			"label": "Fixations déclarées, extrait constructeur",
			"value": "Compatible with Duo-Fast 7600, Haubold KG 700, Omer 700 Series | .063 x 0.55\" / 1.6 x 1.4mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p26"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "Patented Quick Release Nose Cover | 360° Adjustable Air Deflector | Sequential Fire Trigger Available (#25205301A)",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p26"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 6 - 8 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p26"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p26",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=26",
			"sourceLabel": "APACH, document technique officiel, page PDF 26",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p26"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p26"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p26"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
