import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-lt-50llac",
	"slug": "agrafeuse-cloueuse-apach-lt-50llac",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH LT-50LLAC",
	"brand": "APACH",
	"model": "LT-50LLAC",
	"mpn": "LT-50LLAC",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-lt-50llac.svg",
		"alt": "Repères techniques : APACH LT-50LLAC",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-lt-50llac",
		"label": "Référence LT-50LLAC",
		"distinguishingAttributes": {
			"reference": "LT-50LLAC",
			"Masse déclarée": "1.4 kg",
			"Dimensions L × l × H": "250 x 58 x 250mm"
		}
	},
	"editorial": {
		"overview": "APACH LT-50LLAC. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 1.4 kg.",
			"Dimensions L × l × H : 250 x 58 x 250mm.",
			"Capacité de chargement déclarée : 80 - 100 nails.",
			"Pression de service, unité imprimée : 5 -7 kg / cm2.",
			"Fixations déclarées, extrait constructeur : 15 GA Finish Nails: .069\" / 1.75mm | 16 GA Finish Nails: .063 x .055\" / 1.6 x 1.4mm | 15 GA 1.83 Concrete Nails: .072\" / 1.83mm.",
			"Équipements et options déclarés : Accepts Both 16 GA Finish Nails & .072\" (1.83 mm) Concrete Nails | 360° Adjustable Air Deflector | Removable No-Mar Rubber Pad (#22903801) | Long Magazine | Holds 2 Strips of 16 GA Finish Nails."
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
			"value": "1.4 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p13"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "250 x 58 x 250mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p13"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "80 - 100 nails",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p13"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "5 -7 kg / cm2",
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
			"value": "Accepts Both 16 GA Finish Nails & .072\" (1.83 mm) Concrete Nails | 360° Adjustable Air Deflector | Removable No-Mar Rubber Pad (#22903801) | Long Magazine | Holds 2 Strips of 16 GA Finish Nails",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p13"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 5 -7 kg / cm2 ; service uniquement, aucun point de consommation établi.",
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
