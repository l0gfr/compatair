import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-cn-100e",
	"slug": "agrafeuse-cloueuse-apach-cn-100e",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH CN-100E",
	"brand": "APACH",
	"model": "CN-100E",
	"mpn": "CN-100E",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-cn-100e.svg",
		"alt": "Repères techniques : APACH CN-100E",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-cn-100e",
		"label": "Référence CN-100E",
		"distinguishingAttributes": {
			"reference": "CN-100E",
			"Masse déclarée": "5.36 kg",
			"Dimensions L × l × H": "355 x 141 x 412mm"
		}
	},
	"editorial": {
		"overview": "APACH CN-100E. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 5.36 kg.",
			"Dimensions L × l × H : 355 x 141 x 412mm.",
			"Capacité de chargement déclarée : 200 - 300 nails.",
			"Pression de service, unité imprimée : 5-7 kg / cm2.",
			"Fixations déclarées, extrait constructeur : 15° Flat Wire Collated Nails | Length: 2 1/2 - 4\" (65 - 100mm) | Shank Diameter: .099 - .131\" (2.5 - 3.3mm) | Shank Type: Smooth, Ring & Screw.",
			"Équipements et options déclarés : Removable Auxiliary Side Handle | Body Protectors Equipped."
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
			"value": "5.36 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p7"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "355 x 141 x 412mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p7"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "200 - 300 nails",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p7"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "5-7 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p7"
			]
		},
		{
			"label": "Fixations déclarées, extrait constructeur",
			"value": "15° Flat Wire Collated Nails | Length: 2 1/2 - 4\" (65 - 100mm) | Shank Diameter: .099 - .131\" (2.5 - 3.3mm) | Shank Type: Smooth, Ring & Screw",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p7"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "Removable Auxiliary Side Handle | Body Protectors Equipped",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p7"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 5-7 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p7"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p7",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=7",
			"sourceLabel": "APACH, document technique officiel, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p7"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p7"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p7"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
