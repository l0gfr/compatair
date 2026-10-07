import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-atlas-copco-lbv16-8421011004",
	"slug": "perceuse-atlas-copco-lbv16-8421011004",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Atlas Copco LBV16 (réf. 8421011004)",
	"brand": "Atlas Copco",
	"model": "LBV16",
	"mpn": "8421011004",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 522,
		"typical": 522,
		"max": 522
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-atlas-copco-lbv16-8421011004.webp",
		"alt": "Repères techniques : Atlas Copco LBV16 (réf. 8421011004)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lbv16",
		"label": "Référence 8421011004",
		"distinguishingAttributes": {
			"reference": "8421011004",
			"Consommations originales": "8.7 L/s ; 18.4 cfm",
			"Vitesse à vide": "3200 tr/min",
			"Masse": "0.45 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LBV16 (réf. 8421011004). Consommation maximale : 522 L/min à 6,3 bar. Consommations originales : 8.7 L/s ; 18.4 cfm. Vitesse à vide : 3200 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 254.",
			"Consommations originales : 8.7 L/s ; 18.4 cfm.",
			"Vitesse à vide : 3200 tr/min.",
			"Masse : 0.45 kg."
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
			"value": "Page PDF 254",
			"evidenceIds": [
				"documented-d-atlas-tools-p254"
			]
		},
		{
			"label": "Consommations originales",
			"value": "8.7 L/s ; 18.4 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p254"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3200 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p254"
			]
		},
		{
			"label": "Masse",
			"value": "0.45 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p254"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p254",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=254",
			"sourceLabel": "atlas-tools, page PDF 254",
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
			"documented-d-atlas-tools-p254"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p254",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p254"
		]
	},
	"notes": [
		"Consommation maximale : 522 L/min à 6,3 bar."
	]
};

export default product;
