import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-atlas-copco-ltd28-r22f-re-8431053489",
	"slug": "boulonneuse-atlas-copco-ltd28-r22f-re-8431053489",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Atlas Copco LTD28 R22F-RE (réf. 8431053489)",
	"brand": "Atlas Copco",
	"model": "LTD28 R22F-RE",
	"mpn": "8431053489",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 480,
		"typical": 480,
		"max": 480
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-atlas-copco-ltd28-r22f-re-8431053489.webp",
		"alt": "Repères techniques : Atlas Copco LTD28 R22F-RE (réf. 8431053489)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-ltd28-r22f-re",
		"label": "Référence 8431053489",
		"distinguishingAttributes": {
			"reference": "8431053489",
			"Consommations originales": "8 L/s ; 17 cfm",
			"Vitesse à vide": "125 tr/min",
			"Masse": "1.7 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LTD28 R22F-RE (réf. 8431053489). Consommation maximale : 480 L/min à 6,3 bar. Consommations originales : 8 L/s ; 17 cfm. Vitesse à vide : 125 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 50.",
			"Consommations originales : 8 L/s ; 17 cfm.",
			"Vitesse à vide : 125 tr/min.",
			"Masse : 1.7 kg."
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
			"value": "Page PDF 50",
			"evidenceIds": [
				"documented-d-atlas-tools-p50"
			]
		},
		{
			"label": "Consommations originales",
			"value": "8 L/s ; 17 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p50"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "125 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p50"
			]
		},
		{
			"label": "Masse",
			"value": "1.7 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p50"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p50",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=50",
			"sourceLabel": "atlas-tools, page PDF 50",
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
			"documented-d-atlas-tools-p50"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p50",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p50"
		]
	},
	"notes": [
		"Consommation maximale : 480 L/min à 6,3 bar."
	]
};

export default product;
