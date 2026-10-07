import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-lphcn-a815-l",
	"slug": "agrafeuse-cloueuse-apach-lphcn-a815-l",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH LPHCN-A815-L",
	"brand": "APACH",
	"model": "LPHCN-A815-L",
	"mpn": "LPHCN-A815-L",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-lphcn-a815-l.svg",
		"alt": "Repères techniques : APACH LPHCN-A815-L",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-lphcn-a815-l",
		"label": "Référence LPHCN-A815-L",
		"distinguishingAttributes": {
			"reference": "LPHCN-A815-L",
			"Longueur de travail WL": "48 mm",
			"Masse, ligne kg": "1,50 kg"
		}
	},
	"editorial": {
		"overview": "APACH LPHCN-A815-L. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Longueur de travail WL : 48 mm.",
			"Masse, ligne kg : 1,50 kg.",
			"Diamètre du fil de l’anneau : 1,8 mm.",
			"Diamètre de fermeture déclaré : 7,9–10,7 mm.",
			"Position des pointes décrite : Sur la face intérieure de l’anneau."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Aucune consommation utilisable n’est documentée pour cette référence ; aucun besoin par action ni débit n’est estimé.",
			"La ligne impériale de masse contredit la ligne kg ; aucun poids n’est reconstruit par conversion.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Longueur de travail WL",
			"value": "48 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p31"
			]
		},
		{
			"label": "Masse, ligne kg",
			"value": "1,50 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p31"
			]
		},
		{
			"label": "Diamètre du fil de l’anneau",
			"value": "1,8 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p31"
			]
		},
		{
			"label": "Diamètre de fermeture déclaré",
			"value": "7,9–10,7 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p31"
			]
		},
		{
			"label": "Position des pointes décrite",
			"value": "Sur la face intérieure de l’anneau",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p31"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de consommation ni pression de mesure documenté dans ce tableau.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p31"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p31",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=31",
			"sourceLabel": "APACH, document technique officiel, page PDF 31",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p31"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p31"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p31"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
