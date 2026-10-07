import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-atlas-copco-lbs36-h013-40-8421022090",
	"slug": "perceuse-atlas-copco-lbs36-h013-40-8421022090",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Atlas Copco LBS36 H013-40 (réf. 8421022090)",
	"brand": "Atlas Copco",
	"model": "LBS36 H013-40",
	"mpn": "8421022090",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 990,
		"typical": 990,
		"max": 990
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-atlas-copco-lbs36-h013-40-8421022090.webp",
		"alt": "Repères techniques : Atlas Copco LBS36 H013-40 (réf. 8421022090)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lbs36-h013-40",
		"label": "Référence 8421022090",
		"distinguishingAttributes": {
			"reference": "8421022090",
			"Consommations originales": "16.5 L/s ; 34.9 cfm",
			"Vitesse à vide": "1300 tr/min",
			"Masse": "1.5 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LBS36 H013-40 (réf. 8421022090). Consommation maximale : 990 L/min à 6,3 bar. Consommations originales : 16.5 L/s ; 34.9 cfm. Vitesse à vide : 1300 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 261.",
			"Consommations originales : 16.5 L/s ; 34.9 cfm.",
			"Vitesse à vide : 1300 tr/min.",
			"Masse : 1.5 kg."
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
			"value": "Page PDF 261",
			"evidenceIds": [
				"documented-d-atlas-tools-p261"
			]
		},
		{
			"label": "Consommations originales",
			"value": "16.5 L/s ; 34.9 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p261"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1300 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p261"
			]
		},
		{
			"label": "Masse",
			"value": "1.5 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p261"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p261",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=261",
			"sourceLabel": "atlas-tools, page PDF 261",
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
			"documented-d-atlas-tools-p261"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p261",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p261"
		]
	},
	"notes": [
		"Consommation maximale : 990 L/min à 6,3 bar."
	]
};

export default product;
