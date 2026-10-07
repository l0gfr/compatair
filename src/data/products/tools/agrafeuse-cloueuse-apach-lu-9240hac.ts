import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-lu-9240hac",
	"slug": "agrafeuse-cloueuse-apach-lu-9240hac",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH LU-9240HAC",
	"brand": "APACH",
	"model": "LU-9240HAC",
	"mpn": "LU-9240HAC",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-lu-9240hac.svg",
		"alt": "Repères techniques : APACH LU-9240HAC",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-lu-9240hac",
		"label": "Référence LU-9240HAC",
		"distinguishingAttributes": {
			"reference": "LU-9240HAC",
			"Masse déclarée": "1.75 kg",
			"Dimensions L × l × H": "272 x 72 x 271mm"
		}
	},
	"editorial": {
		"overview": "APACH LU-9240HAC. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 1.75 kg.",
			"Dimensions L × l × H : 272 x 72 x 271mm.",
			"Capacité de chargement déclarée : 100 staples.",
			"Pression de service, unité imprimée : 5 - 7 kg / cm2.",
			"Fixations déclarées, extrait constructeur : 92 Series Staples | Compatible with Atro 92, BeA 92, Bostitch SL5035, JK 664, Nikema 92, Prebena H Series | .050 x .040\" / 1.25 x 1.0mm.",
			"Équipements et options déclarés : Heavy Duty Version for Hardwood Applications | 360° Rotatable Air Deflector | Bottom Load, Durable Aluminum Magazine | Bump Fire Trigger."
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
			"value": "1.75 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p23"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "272 x 72 x 271mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p23"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "100 staples",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p23"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "5 - 7 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p23"
			]
		},
		{
			"label": "Fixations déclarées, extrait constructeur",
			"value": "92 Series Staples | Compatible with Atro 92, BeA 92, Bostitch SL5035, JK 664, Nikema 92, Prebena H Series | .050 x .040\" / 1.25 x 1.0mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p23"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "Heavy Duty Version for Hardwood Applications | 360° Rotatable Air Deflector | Bottom Load, Durable Aluminum Magazine | Bump Fire Trigger",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p23"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 5 - 7 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p23"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p23",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=23",
			"sourceLabel": "APACH, document technique officiel, page PDF 23",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p23"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p23"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p23"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
