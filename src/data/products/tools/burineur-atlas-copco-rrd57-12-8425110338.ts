import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-atlas-copco-rrd57-12-8425110338",
	"slug": "burineur-atlas-copco-rrd57-12-8425110338",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Atlas Copco RRD57-12 (réf. 8425110338)",
	"brand": "Atlas Copco",
	"model": "RRD57-12",
	"mpn": "8425110338",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 570,
		"typical": 570,
		"max": 570
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-atlas-copco-rrd57-12-8425110338.webp",
		"alt": "Repères techniques : Atlas Copco RRD57-12 (réf. 8425110338)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-rrd57-12",
		"label": "Référence 8425110338",
		"distinguishingAttributes": {
			"reference": "8425110338",
			"Consommations originales": "9.5 L/s ; 20.1 cfm",
			"Masse": "3.4 kg",
			"Ligne de configuration originale": "RRD57-12 31 28/18 b 1.1/0.8 92 3.6 9.3 6.9 3.4 7.5 17.3 d 0.68 9.5 20.1 12.5 1/2 special e 8425 1103 38"
		}
	},
	"editorial": {
		"overview": "Atlas Copco RRD57-12 (réf. 8425110338). Consommation maximale : 570 L/min à 6,3 bar. Consommations originales : 9.5 L/s ; 20.1 cfm. Masse : 3.4 kg.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 234.",
			"Consommations originales : 9.5 L/s ; 20.1 cfm.",
			"Masse : 3.4 kg.",
			"Ligne de configuration originale : RRD57-12 31 28/18 b 1.1/0.8 92 3.6 9.3 6.9 3.4 7.5 17.3 d 0.68 9.5 20.1 12.5 1/2 special e 8425 1103 38."
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
			"value": "Page PDF 234",
			"evidenceIds": [
				"documented-d-atlas-tools-p234"
			]
		},
		{
			"label": "Consommations originales",
			"value": "9.5 L/s ; 20.1 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p234"
			]
		},
		{
			"label": "Masse",
			"value": "3.4 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p234"
			]
		},
		{
			"label": "Ligne de configuration originale",
			"value": "RRD57-12 31 28/18 b 1.1/0.8 92 3.6 9.3 6.9 3.4 7.5 17.3 d 0.68 9.5 20.1 12.5 1/2 special e 8425 1103 38",
			"evidenceIds": [
				"documented-d-atlas-tools-p234"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p234",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=234",
			"sourceLabel": "atlas-tools, page PDF 234",
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
			"documented-d-atlas-tools-p234"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p234",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p234"
		]
	},
	"notes": [
		"Consommation maximale : 570 L/min à 6,3 bar."
	]
};

export default product;
