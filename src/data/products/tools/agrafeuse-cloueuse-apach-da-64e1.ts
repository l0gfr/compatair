import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-da-64e1",
	"slug": "agrafeuse-cloueuse-apach-da-64e1",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH DA-64E1",
	"brand": "APACH",
	"model": "DA-64E1",
	"mpn": "DA-64E1",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-da-64e1.svg",
		"alt": "Repères techniques : APACH DA-64E1",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-da-64e1",
		"label": "Référence DA-64E1",
		"distinguishingAttributes": {
			"reference": "DA-64E1",
			"Masse déclarée": "2.14 kg",
			"Dimensions L × l × H": "331 x 104 x 326mm"
		}
	},
	"editorial": {
		"overview": "APACH DA-64E1. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 2.14 kg.",
			"Dimensions L × l × H : 331 x 104 x 326mm.",
			"Capacité de chargement déclarée : 100 nails.",
			"Pression de service, unité imprimée : 5 - 7 kg / cm2.",
			"Fixations déclarées, extrait constructeur : 15 Gauge Angle Finish Nails | Compatible with Senco DA Series | .069\" / 1.7mm.",
			"Équipements et options déclarés : 360° Rotatable Air Deflector | Rear Load, Durable Aluminum Magazine | Tool-Free Quick Release Nose Cover for Easy Jam Removal | Tool-Free Depth-of-Drive Adjustment | Removable No-Mar Rubber Pad | In-Line Magazine."
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
			"value": "331 x 104 x 326mm",
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
			"value": "15 Gauge Angle Finish Nails | Compatible with Senco DA Series | .069\" / 1.7mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p14"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "360° Rotatable Air Deflector | Rear Load, Durable Aluminum Magazine | Tool-Free Quick Release Nose Cover for Easy Jam Removal | Tool-Free Depth-of-Drive Adjustment | Removable No-Mar Rubber Pad | In-Line Magazine",
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
