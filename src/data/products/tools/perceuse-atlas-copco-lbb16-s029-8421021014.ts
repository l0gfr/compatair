import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-atlas-copco-lbb16-s029-8421021014",
	"slug": "perceuse-atlas-copco-lbb16-s029-8421021014",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Atlas Copco LBB16 S029 (réf. 8421021014)",
	"brand": "Atlas Copco",
	"model": "LBB16 S029",
	"mpn": "8421021014",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 480,
		"typical": 480,
		"max": 480
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-atlas-copco-lbb16-s029-8421021014.webp",
		"alt": "Repères techniques : Atlas Copco LBB16 S029 (réf. 8421021014)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lbb16-s029",
		"label": "Référence 8421021014",
		"distinguishingAttributes": {
			"reference": "8421021014",
			"Consommations originales": "8 L/s ; 17 cfm",
			"Vitesse à vide": "2900 tr/min",
			"Masse": "0.6 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LBB16 S029 (réf. 8421021014). Consommation maximale : 480 L/min à 6,3 bar. Consommations originales : 8 L/s ; 17 cfm. Vitesse à vide : 2900 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 252.",
			"Consommations originales : 8 L/s ; 17 cfm.",
			"Vitesse à vide : 2900 tr/min.",
			"Masse : 0.6 kg."
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
			"value": "Page PDF 252",
			"evidenceIds": [
				"documented-d-atlas-tools-p252"
			]
		},
		{
			"label": "Consommations originales",
			"value": "8 L/s ; 17 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p252"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2900 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p252"
			]
		},
		{
			"label": "Masse",
			"value": "0.6 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p252"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p252",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=252",
			"sourceLabel": "atlas-tools, page PDF 252",
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
			"documented-d-atlas-tools-p252"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p252",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p252"
		]
	},
	"notes": [
		"Consommation maximale : 480 L/min à 6,3 bar."
	]
};

export default product;
