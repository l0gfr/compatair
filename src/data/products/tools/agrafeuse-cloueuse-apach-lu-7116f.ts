import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-lu-7116f",
	"slug": "agrafeuse-cloueuse-apach-lu-7116f",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH LU-7116F",
	"brand": "APACH",
	"model": "LU-7116F",
	"mpn": "LU-7116F",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-lu-7116f.svg",
		"alt": "Repères techniques : APACH LU-7116F",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-lu-7116f",
		"label": "Référence LU-7116F",
		"distinguishingAttributes": {
			"reference": "LU-7116F",
			"Masse déclarée": "0.88 kg",
			"Dimensions L × l × H": "219 x 43 x 144mm"
		}
	},
	"editorial": {
		"overview": "APACH LU-7116F. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 0.88 kg.",
			"Dimensions L × l × H : 219 x 43 x 144mm.",
			"Capacité de chargement déclarée : 178 staples.",
			"Pression de service, unité imprimée : 4 - 7 kg / cm2.",
			"Fixations déclarées, extrait constructeur : 71 Series Staples | Compatible with Complete 71, Atro 7, BeA 71, JK 670, Haubold 7100, Senco C Series | .030 x .024” / 0.75 x 0.61mm.",
			"Équipements et options déclarés : Hammer Cap | Bottom Load, Jam Free Magazine | Rear Exhaust to Avoid Oil Stains on Work Piece | Slim Long Nose for Easy, Precise Staple Placement | Extended Trigger for Rapid Stapling | Double Trigger for Increased Safety | Full Wrap-Around Rubber Grip."
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
			"value": "0.88 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p16"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "219 x 43 x 144mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p16"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "178 staples",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p16"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "4 - 7 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p16"
			]
		},
		{
			"label": "Fixations déclarées, extrait constructeur",
			"value": "71 Series Staples | Compatible with Complete 71, Atro 7, BeA 71, JK 670, Haubold 7100, Senco C Series | .030 x .024” / 0.75 x 0.61mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p16"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "Hammer Cap | Bottom Load, Jam Free Magazine | Rear Exhaust to Avoid Oil Stains on Work Piece | Slim Long Nose for Easy, Precise Staple Placement | Extended Trigger for Rapid Stapling | Double Trigger for Increased Safety | Full Wrap-Around Rubber Grip",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p16"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 4 - 7 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p16"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p16",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=16",
			"sourceLabel": "APACH, document technique officiel, page PDF 16",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p16"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p16"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p16"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
