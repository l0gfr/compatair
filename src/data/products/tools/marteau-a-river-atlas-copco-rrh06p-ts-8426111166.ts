import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-atlas-copco-rrh06p-ts-8426111166",
	"slug": "marteau-a-river-atlas-copco-rrh06p-ts-8426111166",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "Atlas Copco RRH06P TS (réf. 8426111166)",
	"brand": "Atlas Copco",
	"model": "RRH06P TS",
	"mpn": "8426111166",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 540,
		"typical": 540,
		"max": 540
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-atlas-copco-rrh06p-ts-8426111166.webp",
		"alt": "Repères techniques : Atlas Copco RRH06P TS (réf. 8426111166)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-rrh06p-ts",
		"label": "Référence 8426111166",
		"distinguishingAttributes": {
			"reference": "8426111166",
			"Consommations originales": "9 L/s ; 19 cfm",
			"Masse": "1.3 kg",
			"Ligne de configuration originale": "RRH06P TS 3X 2160 10.2 0.4 15 0.6 102 4.0 6.0 4.4 1.3 2.9 9.0 19 10.0 3/8 1/4 8426 1111 66"
		}
	},
	"editorial": {
		"overview": "Atlas Copco RRH06P TS (réf. 8426111166). Consommation maximale : 540 L/min à 6,3 bar. Consommations originales : 9 L/s ; 19 cfm. Masse : 1.3 kg.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 242.",
			"Consommations originales : 9 L/s ; 19 cfm.",
			"Masse : 1.3 kg.",
			"Ligne de configuration originale : RRH06P TS 3X 2160 10.2 0.4 15 0.6 102 4.0 6.0 4.4 1.3 2.9 9.0 19 10.0 3/8 1/4 8426 1111 66."
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
			"value": "Page PDF 242",
			"evidenceIds": [
				"documented-d-atlas-tools-p242"
			]
		},
		{
			"label": "Consommations originales",
			"value": "9 L/s ; 19 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p242"
			]
		},
		{
			"label": "Masse",
			"value": "1.3 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p242"
			]
		},
		{
			"label": "Ligne de configuration originale",
			"value": "RRH06P TS 3X 2160 10.2 0.4 15 0.6 102 4.0 6.0 4.4 1.3 2.9 9.0 19 10.0 3/8 1/4 8426 1111 66",
			"evidenceIds": [
				"documented-d-atlas-tools-p242"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p242",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=242",
			"sourceLabel": "atlas-tools, page PDF 242",
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
			"documented-d-atlas-tools-p242"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p242",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p242"
		]
	},
	"notes": [
		"Consommation maximale : 540 L/min à 6,3 bar."
	]
};

export default product;
