import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-lt-1664eb",
	"slug": "agrafeuse-cloueuse-apach-lt-1664eb",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH LT-1664EB",
	"brand": "APACH",
	"model": "LT-1664EB",
	"mpn": "LT-1664EB",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-lt-1664eb.svg",
		"alt": "Repères techniques : APACH LT-1664EB",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-lt-1664eb",
		"label": "Référence LT-1664EB",
		"distinguishingAttributes": {
			"reference": "LT-1664EB",
			"Masse déclarée": "2.14 kg",
			"Dimensions L × l × H": "360 x 85 x 310mm"
		}
	},
	"editorial": {
		"overview": "APACH LT-1664EB. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 2.14 kg.",
			"Dimensions L × l × H : 360 x 85 x 310mm.",
			"Capacité de chargement déclarée : 100 nails.",
			"Pression de service, unité imprimée : 5 - 7 kg / cm2.",
			"Fixations déclarées, extrait constructeur : 16 GA Finish Nails | .063 x .055\" / 1.6x1.4mm | Length: 1 - 2 1/2\" / 25 - 64mm.",
			"Équipements et options déclarés : 360° Rotatable Air Deflector | Rear Load, Durable Aluminum Magazine | Tool-Free Quick Release Nose Cover for Easy Jam Removal | Tool-Free Depth-of-Drive Adjustment | Removable No-Mar Rubber Pad | Dry-Fire Lock."
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
			"value": "2.14 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p14"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "360 x 85 x 310mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p14"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "100 nails",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p14"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "5 - 7 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p14"
			]
		},
		{
			"label": "Fixations déclarées, extrait constructeur",
			"value": "16 GA Finish Nails | .063 x .055\" / 1.6x1.4mm | Length: 1 - 2 1/2\" / 25 - 64mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p14"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "360° Rotatable Air Deflector | Rear Load, Durable Aluminum Magazine | Tool-Free Quick Release Nose Cover for Easy Jam Removal | Tool-Free Depth-of-Drive Adjustment | Removable No-Mar Rubber Pad | Dry-Fire Lock",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p14"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 5 - 7 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p14"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p14",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=14",
			"sourceLabel": "APACH, document technique officiel, page PDF 14",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p14"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p14"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p14"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
