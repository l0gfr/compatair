import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-lu-50fac",
	"slug": "agrafeuse-cloueuse-apach-lu-50fac",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH LU-50FAC",
	"brand": "APACH",
	"model": "LU-50FAC",
	"mpn": "LU-50FAC",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-lu-50fac.svg",
		"alt": "Repères techniques : APACH LU-50FAC",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-lu-50fac",
		"label": "Référence LU-50FAC",
		"distinguishingAttributes": {
			"reference": "LU-50FAC",
			"Masse déclarée": "1.45 kg",
			"Dimensions L × l × H": "223 x 58 x 226mm"
		}
	},
	"editorial": {
		"overview": "APACH LU-50FAC. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 1.45 kg.",
			"Dimensions L × l × H : 223 x 58 x 226mm.",
			"Capacité de chargement déclarée : 100 Staples.",
			"Pression de service, unité imprimée : 5 - 7 kg / cm2.",
			"Fixations déclarées, extrait constructeur : 90 Series Staples & 18 Gauge Brads | Staples Compatible with Atro 90, BeA 90, Duo-Fast 1800, Hitachi 11100, Haubold 6000, ISM 90, JK 781 & Senco L Series | .050 x .040\" / 1.25 x 1.0mm.",
			"Équipements et options déclarés : 360° Adjustable Air Deflector | Visual Reload Indicator | Single-Bump Fire Switch | Depth Adjustment | No-Mar Tip | Bottom Load."
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
			"value": "1.45 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p12"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "223 x 58 x 226mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p12"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "100 Staples",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p12"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "5 - 7 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p12"
			]
		},
		{
			"label": "Fixations déclarées, extrait constructeur",
			"value": "90 Series Staples & 18 Gauge Brads | Staples Compatible with Atro 90, BeA 90, Duo-Fast 1800, Hitachi 11100, Haubold 6000, ISM 90, JK 781 & Senco L Series | .050 x .040\" / 1.25 x 1.0mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p12"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "360° Adjustable Air Deflector | Visual Reload Indicator | Single-Bump Fire Switch | Depth Adjustment | No-Mar Tip | Bottom Load",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p12"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 5 - 7 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p12"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p12",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=12",
			"sourceLabel": "APACH, document technique officiel, page PDF 12",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p12"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p12"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p12"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
