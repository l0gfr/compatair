import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-atlas-copco-ep18pts410-hr20-re-8431037498",
	"slug": "cle-a-impulsions-atlas-copco-ep18pts410-hr20-re-8431037498",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Atlas Copco EP18PTS410 HR20-RE (réf. 8431037498)",
	"brand": "Atlas Copco",
	"model": "EP18PTS410 HR20-RE",
	"mpn": "8431037498",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1320,
		"typical": 1320,
		"max": 1320
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-atlas-copco-ep18pts410-hr20-re-8431037498.webp",
		"alt": "Repères techniques : Atlas Copco EP18PTS410 HR20-RE (réf. 8431037498)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-ep18pts410-hr20-re",
		"label": "Référence 8431037498",
		"distinguishingAttributes": {
			"reference": "8431037498",
			"Consommations originales": "22 L/s ; 46 cfm",
			"Vitesse à vide": "3000 tr/min",
			"Masse": "4.3 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco EP18PTS410 HR20-RE (réf. 8431037498). Consommation maximale : 1 320 L/min à 6,3 bar. Consommations originales : 22 L/s ; 46 cfm. Vitesse à vide : 3000 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 26.",
			"Consommations originales : 22 L/s ; 46 cfm.",
			"Vitesse à vide : 3000 tr/min.",
			"Masse : 4.3 kg."
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
			"value": "Page PDF 26",
			"evidenceIds": [
				"documented-d-atlas-tools-p26"
			]
		},
		{
			"label": "Consommations originales",
			"value": "22 L/s ; 46 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p26"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3000 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p26"
			]
		},
		{
			"label": "Masse",
			"value": "4.3 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p26"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p26",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=26",
			"sourceLabel": "atlas-tools, page PDF 26",
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
			"documented-d-atlas-tools-p26"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p26",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p26"
		]
	},
	"notes": [
		"Consommation maximale : 1 320 L/min à 6,3 bar."
	]
};

export default product;
