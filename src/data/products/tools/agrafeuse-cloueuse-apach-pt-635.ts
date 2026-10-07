import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-pt-635",
	"slug": "agrafeuse-cloueuse-apach-pt-635",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH PT-635",
	"brand": "APACH",
	"model": "PT-635",
	"mpn": "PT-635",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-pt-635.svg",
		"alt": "Repères techniques : APACH PT-635",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-pt-635",
		"label": "Référence PT-635",
		"distinguishingAttributes": {
			"reference": "PT-635",
			"Masse déclarée": "0.96 kg",
			"Dimensions L × l × H": "205 x 43 x 174mm"
		}
	},
	"editorial": {
		"overview": "APACH PT-635. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 0.96 kg.",
			"Dimensions L × l × H : 205 x 43 x 174mm.",
			"Capacité de chargement déclarée : 120 brads.",
			"Pression de service, unité imprimée : 5 - 7 kg / cm2.",
			"Fixations déclarées, extrait constructeur : 23 GA Headless and Mini Head Pins | Length: 12 - 35mm / 1/2-13/8\" | Shank Diameter: 0.64mm / .025\".",
			"Équipements et options déclarés : Extended Trigger for Rapid Applications | Trigger Lock for Increased Safety | Patented Adjustment - Free Side Loading Magazine | Accepts Both Headless and Mini Head Pins | Removable No-Mar Rubber Pad | Durable Aluminum Magazine | Rear Exhaust to Avoid Stains on Work Piece | Slim Tapered Nose for Precise Nail Placement."
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
			"value": "0.96 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p11"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "205 x 43 x 174mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p11"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "120 brads",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p11"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "5 - 7 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p11"
			]
		},
		{
			"label": "Fixations déclarées, extrait constructeur",
			"value": "23 GA Headless and Mini Head Pins | Length: 12 - 35mm / 1/2-13/8\" | Shank Diameter: 0.64mm / .025\"",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p11"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "Extended Trigger for Rapid Applications | Trigger Lock for Increased Safety | Patented Adjustment - Free Side Loading Magazine | Accepts Both Headless and Mini Head Pins | Removable No-Mar Rubber Pad | Durable Aluminum Magazine | Rear Exhaust to Avoid Stains on Work Piece | Slim Tapered Nose for Precise Nail Placement",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p11"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 5 - 7 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p11"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p11",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=11",
			"sourceLabel": "APACH, document technique officiel, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p11"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p11"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p11"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
