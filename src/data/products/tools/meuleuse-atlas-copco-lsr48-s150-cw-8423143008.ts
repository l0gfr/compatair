import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-atlas-copco-lsr48-s150-cw-8423143008",
	"slug": "meuleuse-atlas-copco-lsr48-s150-cw-8423143008",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Atlas Copco LSR48 S150-CW (réf. 8423143008)",
	"brand": "Atlas Copco",
	"model": "LSR48 S150-CW",
	"mpn": "8423143008",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 2100,
		"typical": 2100,
		"max": 2100
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-atlas-copco-lsr48-s150-cw-8423143008.webp",
		"alt": "Repères techniques : Atlas Copco LSR48 S150-CW (réf. 8423143008)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lsr48-s150-cw",
		"label": "Référence 8423143008",
		"distinguishingAttributes": {
			"reference": "8423143008",
			"Consommations originales": "35 L/s ; 74 cfm ; 19 L/s ; 40 cfm",
			"Vitesse à vide": "15000 tr/min",
			"Masse": "2.3 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LSR48 S150-CW (réf. 8423143008). Consommation maximale : 2 100 L/min à 6,3 bar. Consommations originales : 35 L/s ; 74 cfm ; 19 L/s ; 40 cfm. Vitesse à vide : 15000 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 212.",
			"Consommations originales : 35 L/s ; 74 cfm ; 19 L/s ; 40 cfm.",
			"Vitesse à vide : 15000 tr/min.",
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
			"value": "Page PDF 212",
			"evidenceIds": [
				"documented-d-atlas-tools-p212"
			]
		},
		{
			"label": "Consommations originales",
			"value": "35 L/s ; 74 cfm ; 19 L/s ; 40 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p212"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "15000 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p212"
			]
		},
		{
			"label": "Masse",
			"value": "2.3 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p212"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p212",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=212",
			"sourceLabel": "atlas-tools, page PDF 212",
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
			"documented-d-atlas-tools-p212"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p212",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p212"
		]
	},
	"notes": [
		"Consommation maximale : 2 100 L/min à 6,3 bar."
	]
};

export default product;
