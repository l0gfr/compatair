import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-cn-70e-rbm",
	"slug": "agrafeuse-cloueuse-apach-cn-70e-rbm",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH CN-70E-RBM",
	"brand": "APACH",
	"model": "CN-70E-RBM",
	"mpn": "CN-70E-RBM",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-cn-70e-rbm.svg",
		"alt": "Repères techniques : APACH CN-70E-RBM",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-cn-70e-rbm",
		"label": "Référence CN-70E-RBM",
		"distinguishingAttributes": {
			"reference": "CN-70E-RBM",
			"Masse déclarée": "10,7 kg",
			"Longueurs de clous attribuées au modèle, texte": "45–70 mm"
		}
	},
	"editorial": {
		"overview": "APACH CN-70E-RBM. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse déclarée : 10,7 kg.",
			"Longueurs de clous attribuées au modèle, texte : 45–70 mm.",
			"Diamètre de tige attribué au modèle : 2,3–2,9 mm."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Aucune consommation utilisable n’est documentée pour cette référence ; aucun besoin par action ni débit n’est estimé.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Masse déclarée",
			"value": "10,7 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p35"
			]
		},
		{
			"label": "Longueurs de clous attribuées au modèle, texte",
			"value": "45–70 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p35"
			]
		},
		{
			"label": "Diamètre de tige attribué au modèle",
			"value": "2,3–2,9 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p35"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure, ligne du modèle : 5.6–7 kg/cm2 ; service uniquement.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p35"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p35",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=35",
			"sourceLabel": "APACH, document technique officiel, page PDF 35",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p35"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p35"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p35"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
