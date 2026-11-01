import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-atlas-copco-rrc22f-02-8425020230",
	"slug": "burineur-atlas-copco-rrc22f-02-8425020230",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Atlas Copco RRC22F-02 (réf. 8425020230)",
	"brand": "Atlas Copco",
	"model": "RRC22F-02",
	"mpn": "8425020230",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 372,
		"typical": 372,
		"max": 372
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-atlas-copco-rrc22f-02-8425020230.webp",
		"alt": "Repères techniques : Atlas Copco RRC22F-02 (réf. 8425020230)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-rrc22f-02",
		"label": "Référence 8425020230",
		"distinguishingAttributes": {
			"reference": "8425020230",
			"Consommations originales": "6.2 L/s ; 13.1 cfm",
			"Masse": "2.2 kg",
			"Ligne de configuration originale": "RRC22F-02 62 15 0.6 52 2.0 2.7 2.0 2.2 4.9 12.7 a 0.50 6.2 13.1 10 3/8 3/8 8425 0202 30"
		}
	},
	"editorial": {
		"overview": "Atlas Copco RRC22F-02. La convention générale Atlas distingue consommation à vide sans régulateur et consommation à puissance maximale avec régulateur ; le tableau de percussion ne résout pas ce régime. La consommation reste documentaire.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 234.",
			"Masse : 2.2 kg.",
			"Ligne de configuration originale : RRC22F-02 62 15 0.6 52 2.0 2.7 2.0 2.2 4.9 12.7 a 0.50 6.2 13.1 10 3/8 3/8 8425 0202 30."
		],
		"limitations": [
			"Le débit publié conserve son régime de mesure ; aucun cycle supposé ne réduit la consommation.",
			"Caractéristiques déclarées par le fabricant. Aucun essai physique réalisé par CompatAir.",
			"La disponibilité locale, les raccords, les accessoires et la notice de sécurité de la référence livrée restent à vérifier.",
			"La convention générale Atlas distingue consommation à vide sans régulateur et consommation à puissance maximale avec régulateur ; le tableau de percussion ne résout pas ce régime. La consommation reste documentaire."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 234",
			"evidenceIds": [
				"documented-d-atlas-tools-p234"
			]
		},
		{
			"label": "Masse",
			"value": "2.2 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p234"
			]
		},
		{
			"label": "Ligne de configuration originale",
			"value": "RRC22F-02 62 15 0.6 52 2.0 2.7 2.0 2.2 4.9 12.7 a 0.50 6.2 13.1 10 3/8 3/8 8425 0202 30",
			"evidenceIds": [
				"documented-d-atlas-tools-p234"
			]
		},
		{
			"label": "Ancienne valeur volumique, portée documentaire",
			"value": "372 L/min ; régime, unité de référence ou pression de mesure insuffisamment qualifiés pour le FAD",
			"evidenceIds": [
				"burineur-atlas-copco-rrc22f-02-8425020230-reserved-20261101-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p234",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=234",
			"sourceLabel": "atlas-tools, page PDF 234",
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
		},
		{
			"id": "burineur-atlas-copco-rrc22f-02-8425020230-reserved-20261101-1",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=234",
			"sourceLabel": "Atlas Copco : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 1e22ac35e18dfbe166f86a825fb5f9b33d152e6eddd3601c658fd39f20195e21. Passage page=234. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-atlas-tools-p234"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p234",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p234"
		],
		"airflowBasis": [
			"burineur-atlas-copco-rrc22f-02-8425020230-reserved-20261101-1"
		],
		"editorial": [
			"burineur-atlas-copco-rrc22f-02-8425020230-reserved-20261101-1"
		],
		"specifications": [
			"burineur-atlas-copco-rrc22f-02-8425020230-reserved-20261101-1"
		]
	},
	"notes": [
		"Consommation maximale : 372 L/min à 6,3 bar."
	],
	"airflowBasis": "unqualified"
};

export default product;
