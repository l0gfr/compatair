import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-atlas-copco-lms88-gor38-8434188001",
	"slug": "cle-a-chocs-atlas-copco-lms88-gor38-8434188001",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Atlas Copco LMS88 GOR38 (réf. 8434188001)",
	"brand": "Atlas Copco",
	"model": "LMS88 GOR38",
	"mpn": "8434188001",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1980,
		"typical": 1980,
		"max": 1980
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-atlas-copco-lms88-gor38-8434188001.webp",
		"alt": "Repères techniques : Atlas Copco LMS88 GOR38 (réf. 8434188001)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lms88-gor38",
		"label": "Référence 8434188001",
		"distinguishingAttributes": {
			"reference": "8434188001",
			"Consommations originales": "33 L/s ; 69.4 cfm",
			"Vitesse à vide": "3800 tr/min",
			"Masse": "15 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LMS88 GOR38 (réf. 8434188001). Consommation maximale : 1 980 L/min à 6,3 bar. Consommations originales : 33 L/s ; 69.4 cfm. Vitesse à vide : 3800 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 21.",
			"Consommations originales : 33 L/s ; 69.4 cfm.",
			"Vitesse à vide : 3800 tr/min.",
			"Masse : 15 kg."
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
			"value": "Page PDF 21",
			"evidenceIds": [
				"documented-d-atlas-tools-p21"
			]
		},
		{
			"label": "Consommations originales",
			"value": "33 L/s ; 69.4 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p21"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3800 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p21"
			]
		},
		{
			"label": "Masse",
			"value": "15 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p21"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p21",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=21",
			"sourceLabel": "atlas-tools, page PDF 21",
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
			"documented-d-atlas-tools-p21"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p21",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p21"
		]
	},
	"notes": [
		"Consommation maximale : 1 980 L/min à 6,3 bar."
	]
};

export default product;
