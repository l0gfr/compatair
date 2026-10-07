import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-lphc-a516-s",
	"slug": "agrafeuse-cloueuse-apach-lphc-a516-s",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH LPHC-A516-S",
	"brand": "APACH",
	"model": "LPHC-A516-S",
	"mpn": "LPHC-A516-S",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-lphc-a516-s.svg",
		"alt": "Repères techniques : APACH LPHC-A516-S",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-lphc-a516-s",
		"label": "Référence LPHC-A516-S",
		"distinguishingAttributes": {
			"reference": "LPHC-A516-S",
			"Longueur de travail WL": "25 mm",
			"Masse, ligne kg": "1,40 kg"
		}
	},
	"editorial": {
		"overview": "APACH LPHC-A516-S. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Longueur de travail WL : 25 mm.",
			"Masse, ligne kg : 1,40 kg.",
			"Diamètre du fil de l’anneau : 1,6 mm.",
			"Largeur de l’anneau : 19 mm.",
			"Diamètre de fermeture déclaré : 4,8–8,7 mm."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Aucune consommation utilisable n’est documentée pour cette référence ; aucun besoin par action ni débit n’est estimé.",
			"La ligne impériale 0,64 lbs ne correspond pas à 1,40 kg ; pas de conversion utilisée pour trancher.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Longueur de travail WL",
			"value": "25 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p31"
			]
		},
		{
			"label": "Masse, ligne kg",
			"value": "1,40 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p31"
			]
		},
		{
			"label": "Diamètre du fil de l’anneau",
			"value": "1,6 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p31"
			]
		},
		{
			"label": "Largeur de l’anneau",
			"value": "19 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p31"
			]
		},
		{
			"label": "Diamètre de fermeture déclaré",
			"value": "4,8–8,7 mm",
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
