import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-apach-ccs-19rr",
	"slug": "agrafeuse-cloueuse-apach-ccs-19rr",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "APACH CCS-19RR",
	"brand": "APACH",
	"model": "CCS-19RR",
	"mpn": "CCS-19RR",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-apach-ccs-19rr.svg",
		"alt": "Repères techniques : APACH CCS-19RR",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl11",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-ccs-19rr",
		"label": "Référence CCS-19RR",
		"distinguishingAttributes": {
			"reference": "CCS-19RR",
			"Type d’agrafe": "RR1 Coil",
			"Largeur de couronne": "32 mm"
		}
	},
	"editorial": {
		"overview": "APACH CCS-19RR. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Type d’agrafe : RR1 Coil.",
			"Largeur de couronne : 32 mm.",
			"Longueurs d’agrafe : 15 et 18 mm.",
			"Section du fil : 1,9 × 0,9 mm."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Aucune consommation utilisable n’est documentée pour cette référence ; aucun besoin par action ni débit n’est estimé.",
			"Les spécifications générales de famille ne sont pas recopiées comme mesures propres à chaque modèle.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Type d’agrafe",
			"value": "RR1 Coil",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p37"
			]
		},
		{
			"label": "Largeur de couronne",
			"value": "32 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p37"
			]
		},
		{
			"label": "Longueurs d’agrafe",
			"value": "15 et 18 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p37"
			]
		},
		{
			"label": "Section du fil",
			"value": "1,9 × 0,9 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p37"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de consommation ni pression de mesure documenté dans ce tableau.",
			"evidenceIds": [
				"october3d-tools-apach-doc-0-p37"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-0-p37",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl11#page=37",
			"sourceLabel": "APACH, document technique officiel, page PDF 37",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d4c836a3199a292611f1e231a3dd380f7f44a0c173e5c5c5a53adbbca6756f37. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-0-p37"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-0-p37"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-0-p37"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
