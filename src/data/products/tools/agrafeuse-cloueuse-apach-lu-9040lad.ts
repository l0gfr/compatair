import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-lu-9040lad",
	"slug": "agrafeuse-cloueuse-apach-lu-9040lad",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH LU-9040LAD",
	"brand": "APACH",
	"model": "LU-9040LAD",
	"mpn": "LU-9040LAD",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-lu-9040lad.svg",
		"alt": "Repères techniques : APACH LU-9040LAD",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-lu-9040lad",
		"label": "Référence LU-9040LAD",
		"distinguishingAttributes": {
			"reference": "LU-9040LAD",
			"Masse déclarée": "1.38 kg",
			"Dimensions L × l × H": "223 x 58 x 246mm"
		}
	},
	"editorial": {
		"overview": "APACH LU-9040LAD. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 1.38 kg.",
			"Dimensions L × l × H : 223 x 58 x 246mm.",
			"Capacité de chargement déclarée : 100 staples.",
			"Pression de service, unité imprimée : 5 - 7 kg / cm2.",
			"Fixations déclarées, extrait constructeur : Compatible with 90 Series : Complete L, BeA 90, Duo-Fast 1800, Senco L Series | .050 x .040\" / 1.25 x 1.0mm.",
			"Équipements et options déclarés : 360° Adjustable Air Deflector | Bottom Load | Tool-Free Depth Adjustment."
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
			"value": "1.38 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p22"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "223 x 58 x 246mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p22"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "100 staples",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p22"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "5 - 7 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p22"
			]
		},
		{
			"label": "Fixations déclarées, extrait constructeur",
			"value": "Compatible with 90 Series : Complete L, BeA 90, Duo-Fast 1800, Senco L Series | .050 x .040\" / 1.25 x 1.0mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p22"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "360° Adjustable Air Deflector | Bottom Load | Tool-Free Depth Adjustment",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p22"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 5 - 7 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p22"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p22",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=22",
			"sourceLabel": "APACH, document technique officiel, page PDF 22",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p22"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p22"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p22"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
