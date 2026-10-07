import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-atlas-copco-lum10-pr03-8431014605",
	"slug": "visseuse-atlas-copco-lum10-pr03-8431014605",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Atlas Copco LUM10 PR03 (réf. 8431014605)",
	"brand": "Atlas Copco",
	"model": "LUM10 PR03",
	"mpn": "8431014605",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 180,
		"typical": 180,
		"max": 180
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-atlas-copco-lum10-pr03-8431014605.webp",
		"alt": "Repères techniques : Atlas Copco LUM10 PR03 (réf. 8431014605)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lum10-pr03",
		"label": "Référence 8431014605",
		"distinguishingAttributes": {
			"reference": "8431014605",
			"Consommations originales": "3 L/s ; 6 cfm",
			"Vitesse à vide": "300 tr/min",
			"Masse": "0.4 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LUM10 PR03 (réf. 8431014605). Consommation maximale : 180 L/min à 6,3 bar. Consommations originales : 3 L/s ; 6 cfm. Vitesse à vide : 300 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 13.",
			"Consommations originales : 3 L/s ; 6 cfm.",
			"Vitesse à vide : 300 tr/min.",
			"Masse : 0.4 kg."
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
			"value": "Page PDF 13",
			"evidenceIds": [
				"documented-d-atlas-tools-p13"
			]
		},
		{
			"label": "Consommations originales",
			"value": "3 L/s ; 6 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p13"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "300 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p13"
			]
		},
		{
			"label": "Masse",
			"value": "0.4 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p13"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p13",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=13",
			"sourceLabel": "atlas-tools, page PDF 13",
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
			"documented-d-atlas-tools-p13"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p13",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p13"
		]
	},
	"notes": [
		"Consommation maximale : 180 L/min à 6,3 bar."
	]
};

export default product;
