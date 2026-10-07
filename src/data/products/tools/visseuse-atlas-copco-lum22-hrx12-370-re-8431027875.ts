import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-atlas-copco-lum22-hrx12-370-re-8431027875",
	"slug": "visseuse-atlas-copco-lum22-hrx12-370-re-8431027875",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Atlas Copco LUM22 HRX12-370-RE (réf. 8431027875)",
	"brand": "Atlas Copco",
	"model": "LUM22 HRX12-370-RE",
	"mpn": "8431027875",
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
		"src": "/images/products/visseuse-atlas-copco-lum22-hrx12-370-re-8431027875.webp",
		"alt": "Repères techniques : Atlas Copco LUM22 HRX12-370-RE (réf. 8431027875)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lum22-hrx12-370-re",
		"label": "Référence 8431027875",
		"distinguishingAttributes": {
			"reference": "8431027875",
			"Consommations originales": "9 L/s ; 19 cfm",
			"Vitesse à vide": "370 tr/min",
			"Masse": "1.1 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LUM22 HRX12-370-RE (réf. 8431027875). Consommation maximale : 540 L/min à 6,3 bar. Consommations originales : 9 L/s ; 19 cfm. Vitesse à vide : 370 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 10.",
			"Consommations originales : 9 L/s ; 19 cfm.",
			"Vitesse à vide : 370 tr/min.",
			"Masse : 1.1 kg."
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
			"value": "Page PDF 10",
			"evidenceIds": [
				"documented-d-atlas-tools-p10"
			]
		},
		{
			"label": "Consommations originales",
			"value": "9 L/s ; 19 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p10"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "370 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p10"
			]
		},
		{
			"label": "Masse",
			"value": "1.1 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p10"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p10",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=10",
			"sourceLabel": "atlas-tools, page PDF 10",
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
			"documented-d-atlas-tools-p10"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p10",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p10"
		]
	},
	"notes": [
		"Consommation maximale : 540 L/min à 6,3 bar."
	]
};

export default product;
