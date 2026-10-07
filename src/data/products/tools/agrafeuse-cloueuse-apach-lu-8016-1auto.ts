import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-lu-8016-1auto",
	"slug": "agrafeuse-cloueuse-apach-lu-8016-1auto",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH LU-8016.1AUTO",
	"brand": "APACH",
	"model": "LU-8016.1AUTO",
	"mpn": "LU-8016.1AUTO",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-lu-8016-1auto.svg",
		"alt": "Repères techniques : APACH LU-8016.1AUTO",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-lu-8016-1auto",
		"label": "Référence LU-8016.1AUTO",
		"distinguishingAttributes": {
			"reference": "LU-8016.1AUTO",
			"Masse déclarée": "1 kg",
			"Dimensions L × l × H": "220 x 45 x 148mm"
		}
	},
	"editorial": {
		"overview": "APACH LU-8016.1AUTO. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 1 kg.",
			"Dimensions L × l × H : 220 x 45 x 148mm.",
			"Capacité de chargement déclarée : 100 staples.",
			"Pression de service, unité imprimée : 6 - 7.7 kg / cm2.",
			"Fixations déclarées, extrait constructeur : 80 Series Staples | Compatible with Complete 80, Atro 8, BeA 80, JK680, Haubold 800 Series | .036 x .028\" / 0.91 x 0.71mm.",
			"Équipements et options déclarés : Speed Adjustable. Minimum 27 Staples / Sec when Adjusted to Highest Speed | Light Squeeze Trigger to Single Fire, Full Squeeze to Auto-Fire No Adjustment Needed | Hammer Cap | Rear Exhaust | Bottom Load Magazine – Quick Load & Easy Jam Clearance."
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
			"value": "1 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p19"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "220 x 45 x 148mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p19"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "100 staples",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p19"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "6 - 7.7 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p19"
			]
		},
		{
			"label": "Fixations déclarées, extrait constructeur",
			"value": "80 Series Staples | Compatible with Complete 80, Atro 8, BeA 80, JK680, Haubold 800 Series | .036 x .028\" / 0.91 x 0.71mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p19"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "Speed Adjustable. Minimum 27 Staples / Sec when Adjusted to Highest Speed | Light Squeeze Trigger to Single Fire, Full Squeeze to Auto-Fire No Adjustment Needed | Hammer Cap | Rear Exhaust | Bottom Load Magazine – Quick Load & Easy Jam Clearance",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p19"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 6 - 7.7 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p19"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p19",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=19",
			"sourceLabel": "APACH, document technique officiel, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p19"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p19"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p19"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
