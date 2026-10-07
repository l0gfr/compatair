import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-atlas-copco-lss64-s060-23-8423264146",
	"slug": "meuleuse-atlas-copco-lss64-s060-23-8423264146",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Atlas Copco LSS64 S060-23 (réf. 8423264146)",
	"brand": "Atlas Copco",
	"model": "LSS64 S060-23",
	"mpn": "8423264146",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 2400,
		"typical": 2400,
		"max": 2400
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-atlas-copco-lss64-s060-23-8423264146.webp",
		"alt": "Repères techniques : Atlas Copco LSS64 S060-23 (réf. 8423264146)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lss64-s060-23",
		"label": "Référence 8423264146",
		"distinguishingAttributes": {
			"reference": "8423264146",
			"Consommations originales": "40 L/s ; 85 cfm ; 9 L/s ; 19 cfm",
			"Vitesse à vide": "6000 tr/min",
			"Masse": "5.1 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LSS64 S060-23 (réf. 8423264146). Consommation maximale : 2 400 L/min à 6,3 bar. Consommations originales : 40 L/s ; 85 cfm ; 9 L/s ; 19 cfm. Vitesse à vide : 6000 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 215.",
			"Consommations originales : 40 L/s ; 85 cfm ; 9 L/s ; 19 cfm.",
			"Vitesse à vide : 6000 tr/min.",
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
			"value": "Page PDF 215",
			"evidenceIds": [
				"documented-d-atlas-tools-p215"
			]
		},
		{
			"label": "Consommations originales",
			"value": "40 L/s ; 85 cfm ; 9 L/s ; 19 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p215"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6000 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p215"
			]
		},
		{
			"label": "Masse",
			"value": "5.1 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p215"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p215",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=215",
			"sourceLabel": "atlas-tools, page PDF 215",
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
			"documented-d-atlas-tools-p215"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p215",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p215"
		]
	},
	"notes": [
		"Consommation maximale : 2 400 L/min à 6,3 bar."
	]
};

export default product;
