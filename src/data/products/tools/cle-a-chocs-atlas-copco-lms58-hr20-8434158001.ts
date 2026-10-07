import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-atlas-copco-lms58-hr20-8434158001",
	"slug": "cle-a-chocs-atlas-copco-lms58-hr20-8434158001",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Atlas Copco LMS58 HR20 (réf. 8434158001)",
	"brand": "Atlas Copco",
	"model": "LMS58 HR20",
	"mpn": "8434158001",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 870,
		"typical": 870,
		"max": 870
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-atlas-copco-lms58-hr20-8434158001.webp",
		"alt": "Repères techniques : Atlas Copco LMS58 HR20 (réf. 8434158001)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lms58-hr20",
		"label": "Référence 8434158001",
		"distinguishingAttributes": {
			"reference": "8434158001",
			"Consommations originales": "14.5 L/s ; 30.5 cfm",
			"Vitesse à vide": "5500 tr/min",
			"Masse": "4.8 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LMS58 HR20 (réf. 8434158001). Consommation maximale : 870 L/min à 6,3 bar. Consommations originales : 14.5 L/s ; 30.5 cfm. Vitesse à vide : 5500 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 20.",
			"Consommations originales : 14.5 L/s ; 30.5 cfm.",
			"Vitesse à vide : 5500 tr/min.",
			"Masse : 4.8 kg."
		],
		"limitations": [
			"Le débit publié conserve son régime de mesure ; aucun cycle supposé ne réduit la consommation.",
			"Caractéristiques déclarées par le fabricant. Aucun essai physique réalisé par CompatAir.",
			"La disponibilité locale, les raccords, les accessoires et la notice de sécurité de la référence livrée restent à vérifier."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 20",
			"evidenceIds": [
				"documented-d-atlas-tools-p20"
			]
		},
		{
			"label": "Consommations originales",
			"value": "14.5 L/s ; 30.5 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p20"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5500 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p20"
			]
		},
		{
			"label": "Masse",
			"value": "4.8 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p20"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p20",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=20",
			"sourceLabel": "atlas-tools, page PDF 20",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 1e22ac35e18dfbe166f86a825fb5f9b33d152e6eddd3601c658fd39f20195e21. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "documented-d-atlas-tools-p3",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=3",
			"sourceLabel": "atlas-tools, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 1e22ac35e18dfbe166f86a825fb5f9b33d152e6eddd3601c658fd39f20195e21. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-atlas-tools-p20"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p20",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p20"
		]
	},
	"notes": [
		"Consommation maximale : 870 L/min à 6,3 bar."
	]
};

export default product;
