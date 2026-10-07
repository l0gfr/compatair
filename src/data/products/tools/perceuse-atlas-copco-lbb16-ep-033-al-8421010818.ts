import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-atlas-copco-lbb16-ep-033-al-8421010818",
	"slug": "perceuse-atlas-copco-lbb16-ep-033-al-8421010818",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Atlas Copco LBB16 EP-033-AL (réf. 8421010818)",
	"brand": "Atlas Copco",
	"model": "LBB16 EP-033-AL",
	"mpn": "8421010818",
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
		"src": "/images/products/perceuse-atlas-copco-lbb16-ep-033-al-8421010818.webp",
		"alt": "Repères techniques : Atlas Copco LBB16 EP-033-AL (réf. 8421010818)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lbb16-ep-033-al",
		"label": "Référence 8421010818",
		"distinguishingAttributes": {
			"reference": "8421010818",
			"Consommations originales": "8 L/s ; 17 cfm",
			"Vitesse à vide": "3300 tr/min",
			"Masse": "0.6 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LBB16 EP-033-AL (réf. 8421010818). Consommation maximale : 480 L/min à 6,3 bar. Consommations originales : 8 L/s ; 17 cfm. Vitesse à vide : 3300 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 248.",
			"Consommations originales : 8 L/s ; 17 cfm.",
			"Vitesse à vide : 3300 tr/min.",
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
			"value": "Page PDF 248",
			"evidenceIds": [
				"documented-d-atlas-tools-p248"
			]
		},
		{
			"label": "Consommations originales",
			"value": "8 L/s ; 17 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p248"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3300 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p248"
			]
		},
		{
			"label": "Masse",
			"value": "0.6 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p248"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p248",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=248",
			"sourceLabel": "atlas-tools, page PDF 248",
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
			"documented-d-atlas-tools-p248"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p248",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p248"
		]
	},
	"notes": [
		"Consommation maximale : 480 L/min à 6,3 bar."
	]
};

export default product;
