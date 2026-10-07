import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-an9034-1",
	"slug": "agrafeuse-cloueuse-apach-an9034-1",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH AN9034-1",
	"brand": "APACH",
	"model": "AN9034-1",
	"mpn": "AN9034-1",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-an9034-1.svg",
		"alt": "Repères techniques : APACH AN9034-1",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-an9034-1",
		"label": "Référence AN9034-1",
		"distinguishingAttributes": {
			"reference": "AN9034-1",
			"Masse déclarée": "3.5 kg",
			"Dimensions L × l × H": "450 x 150 x 350mm"
		}
	},
	"editorial": {
		"overview": "APACH AN9034-1. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 3.5 kg.",
			"Dimensions L × l × H : 450 x 150 x 350mm.",
			"Capacité de chargement déclarée : 75 nails.",
			"Pression de service, unité imprimée : 5 - 7 kg / cm2.",
			"Fixations déclarées, extrait constructeur : 34° D Head Paper Tape Collated Strip Nails | Ø.113 - .161\" / 2.87 – 4.1mm.",
			"Équipements et options déclarés : Aggressive Toe-Nailing Teeth for slip-free Grip when Fastening | Depth-of-Drive Adjustment | Special Design No-Mar Rubber Pad | Dedicated Sequential trigger or Bumper trigger or Anti- Double fire trigger for Enhanced safety and Durability | Optional Hanger."
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
				"october3d-tools-apach-doc-0-p9"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "450 x 150 x 350mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p9"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "75 nails",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p9"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "5 - 7 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p9"
			]
		},
		{
			"label": "Fixations déclarées, extrait constructeur",
			"value": "34° D Head Paper Tape Collated Strip Nails | Ø.113 - .161\" / 2.87 – 4.1mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p9"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "Aggressive Toe-Nailing Teeth for slip-free Grip when Fastening | Depth-of-Drive Adjustment | Special Design No-Mar Rubber Pad | Dedicated Sequential trigger or Bumper trigger or Anti- Double fire trigger for Enhanced safety and Durability | Optional Hanger",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p9"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 5 - 7 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p9"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p9",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=9",
			"sourceLabel": "APACH, document technique officiel, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p9"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p9"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p9"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
