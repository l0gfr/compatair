import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-atlas-copco-ep6pts20-hr42-at-8431037416",
	"slug": "cle-a-impulsions-atlas-copco-ep6pts20-hr42-at-8431037416",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Atlas Copco EP6PTS20 HR42-AT (réf. 8431037416)",
	"brand": "Atlas Copco",
	"model": "EP6PTS20 HR42-AT",
	"mpn": "8431037416",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 420,
		"typical": 420,
		"max": 420
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-atlas-copco-ep6pts20-hr42-at-8431037416.webp",
		"alt": "Repères techniques : Atlas Copco EP6PTS20 HR42-AT (réf. 8431037416)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-ep6pts20-hr42-at",
		"label": "Référence 8431037416",
		"distinguishingAttributes": {
			"reference": "8431037416",
			"Consommations originales": "7 L/s ; 15 cfm",
			"Vitesse à vide": "6300 tr/min",
			"Masse": "1 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco EP6PTS20 HR42-AT (réf. 8431037416). Consommation maximale : 420 L/min à 6,3 bar. Consommations originales : 7 L/s ; 15 cfm. Vitesse à vide : 6300 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 26.",
			"Consommations originales : 7 L/s ; 15 cfm.",
			"Vitesse à vide : 6300 tr/min.",
			"Masse : 1 kg."
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
			"value": "7 L/s ; 15 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p26"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6300 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p26"
			]
		},
		{
			"label": "Masse",
			"value": "1 kg",
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
		"Consommation maximale : 420 L/min à 6,3 bar."
	]
};

export default product;
