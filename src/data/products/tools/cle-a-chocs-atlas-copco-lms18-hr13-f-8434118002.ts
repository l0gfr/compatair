import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-atlas-copco-lms18-hr13-f-8434118002",
	"slug": "cle-a-chocs-atlas-copco-lms18-hr13-f-8434118002",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Atlas Copco LMS18 HR13/F (réf. 8434118002)",
	"brand": "Atlas Copco",
	"model": "LMS18 HR13/F",
	"mpn": "8434118002",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 510,
		"typical": 510,
		"max": 510
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-atlas-copco-lms18-hr13-f-8434118002.webp",
		"alt": "Repères techniques : Atlas Copco LMS18 HR13/F (réf. 8434118002)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lms18-hr13-f",
		"label": "Référence 8434118002",
		"distinguishingAttributes": {
			"reference": "8434118002",
			"Consommations originales": "8.5 L/s ; 18 cfm",
			"Vitesse à vide": "8100 tr/min",
			"Masse": "1.45 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LMS18 HR13/F (réf. 8434118002). Consommation maximale : 510 L/min à 6,3 bar. Consommations originales : 8.5 L/s ; 18 cfm. Vitesse à vide : 8100 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 20.",
			"Consommations originales : 8.5 L/s ; 18 cfm.",
			"Vitesse à vide : 8100 tr/min.",
			"Masse : 1.45 kg."
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
			"value": "8.5 L/s ; 18 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p20"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "8100 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p20"
			]
		},
		{
			"label": "Masse",
			"value": "1.45 kg",
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
		"Consommation maximale : 510 L/min à 6,3 bar."
	]
};

export default product;
