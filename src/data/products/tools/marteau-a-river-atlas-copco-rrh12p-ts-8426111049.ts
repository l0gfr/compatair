import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-atlas-copco-rrh12p-ts-8426111049",
	"slug": "marteau-a-river-atlas-copco-rrh12p-ts-8426111049",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "Atlas Copco RRH12P TS (réf. 8426111049)",
	"brand": "Atlas Copco",
	"model": "RRH12P TS",
	"mpn": "8426111049",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 780,
		"typical": 780,
		"max": 780
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-atlas-copco-rrh12p-ts-8426111049.webp",
		"alt": "Repères techniques : Atlas Copco RRH12P TS (réf. 8426111049)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-rrh12p-ts",
		"label": "Référence 8426111049",
		"distinguishingAttributes": {
			"reference": "8426111049",
			"Consommations originales": "13 L/s ; 28 cfm",
			"Masse": "2.1 kg",
			"Ligne de configuration originale": "RRH12P TS -ENG 7XB 1200 12.7 0.5 19 0.7 153 6.0 16.0 11.8 2.1 4.6 13.0 28 10.0 3/8 1/4 8426 1110 49"
		}
	},
	"editorial": {
		"overview": "Atlas Copco RRH12P TS (réf. 8426111049). Consommation maximale : 780 L/min à 6,3 bar. Consommations originales : 13 L/s ; 28 cfm. Masse : 2.1 kg.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 242.",
			"Consommations originales : 13 L/s ; 28 cfm.",
			"Masse : 2.1 kg.",
			"Ligne de configuration originale : RRH12P TS -ENG 7XB 1200 12.7 0.5 19 0.7 153 6.0 16.0 11.8 2.1 4.6 13.0 28 10.0 3/8 1/4 8426 1110 49."
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
			"value": "13 L/s ; 28 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p242"
			]
		},
		{
			"label": "Masse",
			"value": "2.1 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p242"
			]
		},
		{
			"label": "Ligne de configuration originale",
			"value": "RRH12P TS -ENG 7XB 1200 12.7 0.5 19 0.7 153 6.0 16.0 11.8 2.1 4.6 13.0 28 10.0 3/8 1/4 8426 1110 49",
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
		"Consommation maximale : 780 L/min à 6,3 bar."
	]
};

export default product;
