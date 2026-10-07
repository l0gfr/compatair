import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-atlas-copco-ep6ps-hr10-8431036821",
	"slug": "cle-a-impulsions-atlas-copco-ep6ps-hr10-8431036821",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Atlas Copco EP6PS HR10 (réf. 8431036821)",
	"brand": "Atlas Copco",
	"model": "EP6PS HR10",
	"mpn": "8431036821",
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
		"src": "/images/products/cle-a-impulsions-atlas-copco-ep6ps-hr10-8431036821.webp",
		"alt": "Repères techniques : Atlas Copco EP6PS HR10 (réf. 8431036821)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-ep6ps-hr10",
		"label": "Référence 8431036821",
		"distinguishingAttributes": {
			"reference": "8431036821",
			"Consommations originales": "9 L/s ; 19 cfm",
			"Vitesse à vide": "8000 tr/min",
			"Masse": "0.8 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco EP6PS HR10 (réf. 8431036821). Consommation maximale : 540 L/min à 6,3 bar. Consommations originales : 9 L/s ; 19 cfm. Vitesse à vide : 8000 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 27.",
			"Consommations originales : 9 L/s ; 19 cfm.",
			"Vitesse à vide : 8000 tr/min.",
			"Masse : 0.8 kg."
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
			"value": "9 L/s ; 19 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p27"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "8000 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p27"
			]
		},
		{
			"label": "Masse",
			"value": "0.8 kg",
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
		"Consommation maximale : 540 L/min à 6,3 bar."
	]
};

export default product;
