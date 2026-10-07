import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-atlas-copco-ep20xs-hr20-8431037160",
	"slug": "cle-a-impulsions-atlas-copco-ep20xs-hr20-8431037160",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Atlas Copco EP20XS HR20 (réf. 8431037160)",
	"brand": "Atlas Copco",
	"model": "EP20XS HR20",
	"mpn": "8431037160",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 960,
		"typical": 960,
		"max": 960
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-atlas-copco-ep20xs-hr20-8431037160.webp",
		"alt": "Repères techniques : Atlas Copco EP20XS HR20 (réf. 8431037160)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-ep20xs-hr20",
		"label": "Référence 8431037160",
		"distinguishingAttributes": {
			"reference": "8431037160",
			"Consommations originales": "16 L/s ; 34 cfm",
			"Vitesse à vide": "3700 tr/min",
			"Masse": "5.1 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco EP20XS HR20 (réf. 8431037160). Consommation maximale : 960 L/min à 6,3 bar. Consommations originales : 16 L/s ; 34 cfm. Vitesse à vide : 3700 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 27.",
			"Consommations originales : 16 L/s ; 34 cfm.",
			"Vitesse à vide : 3700 tr/min.",
			"Masse : 5.1 kg."
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
			"value": "Page PDF 27",
			"evidenceIds": [
				"documented-d-atlas-tools-p27"
			]
		},
		{
			"label": "Consommations originales",
			"value": "16 L/s ; 34 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p27"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3700 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p27"
			]
		},
		{
			"label": "Masse",
			"value": "5.1 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p27"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p27",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=27",
			"sourceLabel": "atlas-tools, page PDF 27",
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
			"documented-d-atlas-tools-p27"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p27",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p27"
		]
	},
	"notes": [
		"Consommation maximale : 960 L/min à 6,3 bar."
	]
};

export default product;
