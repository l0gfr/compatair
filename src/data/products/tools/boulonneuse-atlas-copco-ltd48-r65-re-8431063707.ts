import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-atlas-copco-ltd48-r65-re-8431063707",
	"slug": "boulonneuse-atlas-copco-ltd48-r65-re-8431063707",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Atlas Copco LTD48 R65-RE (réf. 8431063707)",
	"brand": "Atlas Copco",
	"model": "LTD48 R65-RE",
	"mpn": "8431063707",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1680,
		"typical": 1680,
		"max": 1680
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-atlas-copco-ltd48-r65-re-8431063707.webp",
		"alt": "Repères techniques : Atlas Copco LTD48 R65-RE (réf. 8431063707)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-ltd48-r65-re",
		"label": "Référence 8431063707",
		"distinguishingAttributes": {
			"reference": "8431063707",
			"Consommations originales": "28 L/s ; 59 cfm",
			"Vitesse à vide": "400 tr/min",
			"Masse": "3.1 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LTD48 R65-RE (réf. 8431063707). Consommation maximale : 1 680 L/min à 6,3 bar. Consommations originales : 28 L/s ; 59 cfm. Vitesse à vide : 400 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 51.",
			"Consommations originales : 28 L/s ; 59 cfm.",
			"Vitesse à vide : 400 tr/min.",
			"Masse : 3.1 kg."
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
			"value": "Page PDF 51",
			"evidenceIds": [
				"documented-d-atlas-tools-p51"
			]
		},
		{
			"label": "Consommations originales",
			"value": "28 L/s ; 59 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p51"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "400 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p51"
			]
		},
		{
			"label": "Masse",
			"value": "3.1 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p51"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p51",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=51",
			"sourceLabel": "atlas-tools, page PDF 51",
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
			"documented-d-atlas-tools-p51"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p51",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p51"
		]
	},
	"notes": [
		"Consommation maximale : 1 680 L/min à 6,3 bar."
	]
};

export default product;
