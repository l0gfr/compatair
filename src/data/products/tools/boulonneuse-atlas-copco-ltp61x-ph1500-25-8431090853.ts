import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-atlas-copco-ltp61x-ph1500-25-8431090853",
	"slug": "boulonneuse-atlas-copco-ltp61x-ph1500-25-8431090853",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Atlas Copco LTP61X PH1500-25 (réf. 8431090853)",
	"brand": "Atlas Copco",
	"model": "LTP61X PH1500-25",
	"mpn": "8431090853",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1200,
		"typical": 1200,
		"max": 1200
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-atlas-copco-ltp61x-ph1500-25-8431090853.webp",
		"alt": "Repères techniques : Atlas Copco LTP61X PH1500-25 (réf. 8431090853)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-ltp61x-ph1500-25",
		"label": "Référence 8431090853",
		"distinguishingAttributes": {
			"reference": "8431090853",
			"Consommations originales": "20 L/s ; 42 cfm",
			"Vitesse à vide": "45 tr/min",
			"Masse": "6.8 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LTP61X PH1500-25 (réf. 8431090853). Consommation maximale : 1 200 L/min à 6,3 bar. Consommations originales : 20 L/s ; 42 cfm. Vitesse à vide : 45 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 57.",
			"Consommations originales : 20 L/s ; 42 cfm.",
			"Vitesse à vide : 45 tr/min.",
			"Masse : 6.8 kg."
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
			"value": "Page PDF 57",
			"evidenceIds": [
				"documented-d-atlas-tools-p57"
			]
		},
		{
			"label": "Consommations originales",
			"value": "20 L/s ; 42 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p57"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "45 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p57"
			]
		},
		{
			"label": "Masse",
			"value": "6.8 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p57"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p57",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=57",
			"sourceLabel": "atlas-tools, page PDF 57",
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
			"documented-d-atlas-tools-p57"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p57",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p57"
		]
	},
	"notes": [
		"Consommation maximale : 1 200 L/min à 6,3 bar."
	]
};

export default product;
