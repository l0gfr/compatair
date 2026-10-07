import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-atlas-copco-lms18-hr10-f-8434118003",
	"slug": "cle-a-chocs-atlas-copco-lms18-hr10-f-8434118003",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Atlas Copco LMS18 HR10/F (réf. 8434118003)",
	"brand": "Atlas Copco",
	"model": "LMS18 HR10/F",
	"mpn": "8434118003",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 390,
		"typical": 390,
		"max": 390
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-atlas-copco-lms18-hr10-f-8434118003.webp",
		"alt": "Repères techniques : Atlas Copco LMS18 HR10/F (réf. 8434118003)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lms18-hr10-f",
		"label": "Référence 8434118003",
		"distinguishingAttributes": {
			"reference": "8434118003",
			"Consommations originales": "6.5 L/s ; 14 cfm",
			"Vitesse à vide": "8100 tr/min",
			"Masse": "1.45 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LMS18 HR10/F (réf. 8434118003). Consommation maximale : 390 L/min à 6,3 bar. Consommations originales : 6.5 L/s ; 14 cfm. Vitesse à vide : 8100 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 20.",
			"Consommations originales : 6.5 L/s ; 14 cfm.",
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
			"value": "6.5 L/s ; 14 cfm",
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
		"Consommation maximale : 390 L/min à 6,3 bar."
	]
};

export default product;
