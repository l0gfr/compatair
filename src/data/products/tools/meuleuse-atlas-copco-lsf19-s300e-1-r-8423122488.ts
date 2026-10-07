import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-atlas-copco-lsf19-s300e-1-r-8423122488",
	"slug": "meuleuse-atlas-copco-lsf19-s300e-1-r-8423122488",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Atlas Copco LSF19 S300E-1/R (réf. 8423122488)",
	"brand": "Atlas Copco",
	"model": "LSF19 S300E-1/R",
	"mpn": "8423122488",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 678,
		"typical": 678,
		"max": 678
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-atlas-copco-lsf19-s300e-1-r-8423122488.webp",
		"alt": "Repères techniques : Atlas Copco LSF19 S300E-1/R (réf. 8423122488)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lsf19-s300e-1-r",
		"label": "Référence 8423122488",
		"distinguishingAttributes": {
			"reference": "8423122488",
			"Consommations originales": "11.3 L/s ; 23.7 cfm ; 6.6 L/s ; 13.8 cfm",
			"Vitesse à vide": "30000 tr/min",
			"Masse": "0.7 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LSF19 S300E-1/R (réf. 8423122488). Consommation maximale : 678 L/min à 6,3 bar. Consommations originales : 11.3 L/s ; 23.7 cfm ; 6.6 L/s ; 13.8 cfm. Vitesse à vide : 30000 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 210.",
			"Consommations originales : 11.3 L/s ; 23.7 cfm ; 6.6 L/s ; 13.8 cfm.",
			"Vitesse à vide : 30000 tr/min.",
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
			"value": "Page PDF 210",
			"evidenceIds": [
				"documented-d-atlas-tools-p210"
			]
		},
		{
			"label": "Consommations originales",
			"value": "11.3 L/s ; 23.7 cfm ; 6.6 L/s ; 13.8 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p210"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "30000 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p210"
			]
		},
		{
			"label": "Masse",
			"value": "0.7 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p210"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p210",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=210",
			"sourceLabel": "atlas-tools, page PDF 210",
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
			"documented-d-atlas-tools-p210"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p210",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p210"
		]
	},
	"notes": [
		"Consommation maximale : 678 L/min à 6,3 bar."
	]
};

export default product;
