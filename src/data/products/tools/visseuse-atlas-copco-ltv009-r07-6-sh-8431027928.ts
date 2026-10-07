import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-atlas-copco-ltv009-r07-6-sh-8431027928",
	"slug": "visseuse-atlas-copco-ltv009-r07-6-sh-8431027928",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Atlas Copco LTV009 R07-6-SH (réf. 8431027928)",
	"brand": "Atlas Copco",
	"model": "LTV009 R07-6-SH",
	"mpn": "8431027928",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 360,
		"typical": 360,
		"max": 360
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-atlas-copco-ltv009-r07-6-sh-8431027928.webp",
		"alt": "Repères techniques : Atlas Copco LTV009 R07-6-SH (réf. 8431027928)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-ltv009-r07-6-sh",
		"label": "Référence 8431027928",
		"distinguishingAttributes": {
			"reference": "8431027928",
			"Consommations originales": "6 L/s ; 13 cfm",
			"Vitesse à vide": "500 tr/min",
			"Masse": "0.7 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LTV009 R07-6-SH (réf. 8431027928). Consommation maximale : 360 L/min à 6,3 bar. Consommations originales : 6 L/s ; 13 cfm. Vitesse à vide : 500 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 15.",
			"Consommations originales : 6 L/s ; 13 cfm.",
			"Vitesse à vide : 500 tr/min.",
			"Masse : 0.7 kg."
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
			"value": "Page PDF 15",
			"evidenceIds": [
				"documented-d-atlas-tools-p15"
			]
		},
		{
			"label": "Consommations originales",
			"value": "6 L/s ; 13 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p15"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "500 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p15"
			]
		},
		{
			"label": "Masse",
			"value": "0.7 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p15"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p15",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=15",
			"sourceLabel": "atlas-tools, page PDF 15",
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
			"documented-d-atlas-tools-p15"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p15",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p15"
		]
	},
	"notes": [
		"Consommation maximale : 360 L/min à 6,3 bar."
	]
};

export default product;
