import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-lu-g40lac",
	"slug": "agrafeuse-cloueuse-apach-lu-g40lac",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH LU-G40LAC",
	"brand": "APACH",
	"model": "LU-G40LAC",
	"mpn": "LU-G40LAC",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-lu-g40lac.svg",
		"alt": "Repères techniques : APACH LU-G40LAC",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-lu-g40lac",
		"label": "Référence LU-G40LAC",
		"distinguishingAttributes": {
			"reference": "LU-G40LAC",
			"Masse déclarée": "1.38 kg",
			"Dimensions L × l × H": "223 x 58 x 249mm"
		}
	},
	"editorial": {
		"overview": "APACH LU-G40LAC. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 1.38 kg.",
			"Dimensions L × l × H : 223 x 58 x 249mm.",
			"Capacité de chargement déclarée : 100 staples.",
			"Pression de service, unité imprimée : 5 - 7 kg / cm2.",
			"Fixations déclarées, extrait constructeur : G Series | Compatible with Complete M, Duo-Fast W18, JK 782, Omer SG44, Senco M, Prebena G Series | .050 x .040\" / 1.25 x 1.0mm.",
			"Équipements et options déclarés : 360° Rotatable Air Deflector | Bottom Load, Durable Aluminum Magazine | Bump Fire Trigger | Sequential Trigger Valve Available | Belt Hook Available | Vinyl Siding Yoke available (#18303101A)."
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
				"october3d-tools-apach-doc-0-p24"
			]
		},
		{
			"label": "Dimensions L × l × H",
			"value": "223 x 58 x 249mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p24"
			]
		},
		{
			"label": "Capacité de chargement déclarée",
			"value": "100 staples",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p24"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "5 - 7 kg / cm2",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p24"
			]
		},
		{
			"label": "Fixations déclarées, extrait constructeur",
			"value": "G Series | Compatible with Complete M, Duo-Fast W18, JK 782, Omer SG44, Senco M, Prebena G Series | .050 x .040\" / 1.25 x 1.0mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p24"
			]
		},
		{
			"label": "Équipements et options déclarés",
			"value": "360° Rotatable Air Deflector | Bottom Load, Durable Aluminum Magazine | Bump Fire Trigger | Sequential Trigger Valve Available | Belt Hook Available | Vinyl Siding Yoke available (#18303101A)",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p24"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure : 5 - 7 kg / cm2 ; service uniquement, aucun point de consommation établi.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p24"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p24",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=24",
			"sourceLabel": "APACH, document technique officiel, page PDF 24",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p24"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p24"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p24"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
