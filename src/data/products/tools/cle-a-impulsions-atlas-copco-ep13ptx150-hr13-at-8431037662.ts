import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-atlas-copco-ep13ptx150-hr13-at-8431037662",
	"slug": "cle-a-impulsions-atlas-copco-ep13ptx150-hr13-at-8431037662",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Atlas Copco EP13PTX150 HR13-AT (réf. 8431037662)",
	"brand": "Atlas Copco",
	"model": "EP13PTX150 HR13-AT",
	"mpn": "8431037662",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 900,
		"typical": 900,
		"max": 900
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-atlas-copco-ep13ptx150-hr13-at-8431037662.webp",
		"alt": "Repères techniques : Atlas Copco EP13PTX150 HR13-AT (réf. 8431037662)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-ep13ptx150-hr13-at",
		"label": "Référence 8431037662",
		"distinguishingAttributes": {
			"reference": "8431037662",
			"Consommations originales": "15 L/s ; 32 cfm",
			"Vitesse à vide": "5300 tr/min",
			"Masse": "2.3 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco EP13PTX150 HR13-AT (réf. 8431037662). Consommation maximale : 900 L/min à 6,3 bar. Consommations originales : 15 L/s ; 32 cfm. Vitesse à vide : 5300 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 25.",
			"Consommations originales : 15 L/s ; 32 cfm.",
			"Vitesse à vide : 5300 tr/min.",
			"Masse : 2.3 kg."
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
			"value": "Page PDF 25",
			"evidenceIds": [
				"documented-d-atlas-tools-p25"
			]
		},
		{
			"label": "Consommations originales",
			"value": "15 L/s ; 32 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p25"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5300 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p25"
			]
		},
		{
			"label": "Masse",
			"value": "2.3 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p25"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p25",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=25",
			"sourceLabel": "atlas-tools, page PDF 25",
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
			"documented-d-atlas-tools-p25"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p25",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p25"
		]
	},
	"notes": [
		"Consommation maximale : 900 L/min à 6,3 bar."
	]
};

export default product;
