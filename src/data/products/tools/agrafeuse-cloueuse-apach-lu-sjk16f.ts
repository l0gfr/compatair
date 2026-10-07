import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-lu-sjk16f",
	"slug": "agrafeuse-cloueuse-apach-lu-sjk16f",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH LU-SJK16F",
	"brand": "APACH",
	"model": "LU-SJK16F",
	"mpn": "LU-SJK16F",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-lu-sjk16f.svg",
		"alt": "Repères techniques : APACH LU-SJK16F",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-lu-sjk16f",
		"label": "Référence LU-SJK16F",
		"distinguishingAttributes": {
			"reference": "LU-SJK16F",
			"Masse déclarée": "0.88 kg",
			"Dimensions L × l × H": "219 x 43 x 144mm"
		}
	},
	"editorial": {
		"overview": "APACH LU-SJK16F. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 0.88 kg.",
			"Dimensions L × l × H : 219 x 43 x 144mm.",
			"Capacité de chargement déclarée : 167 staples.",
			"Pression de service, unité imprimée : 4 - 7 kg / cm2.",
			"Fixations déclarées, extrait constructeur : SJK Series Staples | Compatible with Omer SJK, Bostitch SJ3020, Senco TK Series | .030 x .023\" / 0.76 x 0.58mm.",
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
				"october3d-tools-apach-doc-0-p15"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "219 x 43 x 144mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p15"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "167 staples",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p15"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "4 - 7 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p15"
			]
		},
		{
			"label": "Fixations déclarées, extrait constructeur",
			"value": "SJK Series Staples | Compatible with Omer SJK, Bostitch SJ3020, Senco TK Series | .030 x .023\" / 0.76 x 0.58mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p15"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "Hammer Cap | Bottom Load, Jam Free Magazine | Rear Exhaust to Avoid Oil Stains on Work Piece | Slim Long Nose for Easy, Precise Staple Placement | Extended Trigger for Rapid Stapling | Double Trigger for Increased Safety | Full Wrap-Around Rubber Grip",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p15"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 4 - 7 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p15"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p15",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=15",
			"sourceLabel": "APACH, document technique officiel, page PDF 15",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p15"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p15"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p15"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
