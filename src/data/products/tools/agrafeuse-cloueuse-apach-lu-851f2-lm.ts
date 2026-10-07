import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-lu-851f2-lm",
	"slug": "agrafeuse-cloueuse-apach-lu-851f2-lm",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH LU-851F2-LM",
	"brand": "APACH",
	"model": "LU-851F2-LM",
	"mpn": "LU-851F2-LM",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-lu-851f2-lm.svg",
		"alt": "Repères techniques : APACH LU-851F2-LM",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-lu-851f2-lm",
		"label": "Référence LU-851F2-LM",
		"distinguishingAttributes": {
			"reference": "LU-851F2-LM",
			"Masse déclarée": "3.5 kg",
			"Dimensions L × l × H": "726 x 97 x 300mm"
		}
	},
	"editorial": {
		"overview": "APACH LU-851F2-LM. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 3.5 kg.",
			"Dimensions L × l × H : 726 x 97 x 300mm.",
			"Capacité de chargement déclarée : 350 staples.",
			"Pression de service, unité imprimée : 6 - 8 kg / cm2.",
			"Fixations déclarées, extrait constructeur : Compatible with Hitachi 11200, Omer M2, Senco N Serie | .063 x .055\" / 1.6 x 1.4mm.",
			"Équipements et options déclarés : Patented Quick Release Nose Cover | 360° Adjustable Air Deflector | Remote Fire Trigger Available (#15104407A) | Long Magazine for 5 strips staples(70 staples/strip)."
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
			"value": "3.5 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p25"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "726 x 97 x 300mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p25"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "350 staples",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p25"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "6 - 8 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p25"
			]
		},
		{
			"label": "Fixations déclarées, extrait constructeur",
			"value": "Compatible with Hitachi 11200, Omer M2, Senco N Serie | .063 x .055\" / 1.6 x 1.4mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p25"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "Patented Quick Release Nose Cover | 360° Adjustable Air Deflector | Remote Fire Trigger Available (#15104407A) | Long Magazine for 5 strips staples(70 staples/strip)",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p25"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 6 - 8 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p25"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p25",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=25",
			"sourceLabel": "APACH, document technique officiel, page PDF 25",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p25"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p25"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p25"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
