import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-lt-1650",
	"slug": "agrafeuse-cloueuse-apach-lt-1650",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH LT-1650",
	"brand": "APACH",
	"model": "LT-1650",
	"mpn": "LT-1650",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-lt-1650.svg",
		"alt": "Repères techniques : APACH LT-1650",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-lt-1650",
		"label": "Référence LT-1650",
		"distinguishingAttributes": {
			"reference": "LT-1650",
			"Masse déclarée": "2.15 kg",
			"Dimensions L × l × H": "281 x 72 x 272mm"
		}
	},
	"editorial": {
		"overview": "APACH LT-1650. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 2.15 kg.",
			"Dimensions L × l × H : 281 x 72 x 272mm.",
			"Capacité de chargement déclarée : 100 nails.",
			"Pression de service, unité imprimée : 5 - 7 kg / cm2.",
			"Fixations déclarées, extrait constructeur : 15 GA Finish Nails: .069\" / 1.75mm | 16 GA Finish Nails: .063 x .055\" / 1.6 x 1.4mm | 15 GA 1.83 Concrete Nails: .072\" / 1.83mm.",
			"Équipements et options déclarés : Accept 15,16 GA Finish Nails & 1.83mm Concrete Pins | 360° Adjustable Air Deflector | Bolted Release Nose Cover | No Mar Rubber Pad."
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
			"value": "2.15 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p13"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "281 x 72 x 272mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p13"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "100 nails",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p13"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "5 - 7 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p13"
			]
		},
		{
			"label": "Fixations déclarées, extrait constructeur",
			"value": "15 GA Finish Nails: .069\" / 1.75mm | 16 GA Finish Nails: .063 x .055\" / 1.6 x 1.4mm | 15 GA 1.83 Concrete Nails: .072\" / 1.83mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p13"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "Accept 15,16 GA Finish Nails & 1.83mm Concrete Pins | 360° Adjustable Air Deflector | Bolted Release Nose Cover | No Mar Rubber Pad",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p13"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 5 - 7 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p13"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p13",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=13",
			"sourceLabel": "APACH, document technique officiel, page PDF 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p13"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p13"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p13"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
