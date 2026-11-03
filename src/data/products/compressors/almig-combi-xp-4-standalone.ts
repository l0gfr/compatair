import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "almig-combi-xp-4-standalone",
	"slug": "almig-combi-xp-4-standalone",
	"brand": "ALMiG",
	"model": "COMBI XP 4 standalone",
	"variant": {
		"familyId": "almig-combi-xp-4-standalone",
		"label": "Standalone, sans cuve ni sécheur ; 13 bar",
		"distinguishingAttributes": {
			"configuration": "Standalone, sans cuve ni sécheur",
			"pression": "13 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 13,
	"fadCurve": [],
	"oilType": "unknown",
	"powerKw": 4,
	"weightKg": 240,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/almig-combi-xp-4-standalone.webp",
		"alt": "Repères techniques : ALMiG COMBI XP 4 standalone",
		"sourceUrl": "https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "COMBI XP 4 standalone",
			"evidenceIds": [
				"almig-combi-xp-4-standalone-reserved-20261103-1"
			]
		},
		{
			"label": "Dimensions",
			"value": "643 × 790 × 961 mm",
			"evidenceIds": [
				"almig-combi-xp-4-standalone-reserved-20261103-1"
			]
		},
		{
			"label": "Masse standalone",
			"value": "240 kg",
			"evidenceIds": [
				"almig-combi-xp-4-standalone-reserved-20261103-1"
			]
		},
		{
			"label": "Stockage et sécheur",
			"value": "Sans cuve, sans sécheur frigorifique",
			"evidenceIds": [
				"almig-combi-xp-4-standalone-reserved-20261103-1"
			]
		}
	],
	"editorial": {
		"overview": "ALMiG COMBI XP 4 standalone. La COMBI XP 4 standalone pèse 240 kg ; les standalone 4 et 6 partagent les dimensions mais pèsent 240 et 250 kg. Le tableau de débit 50 Hz appartient aux versions 4-en-1 sur cuve 270 D, de masses 465 et 470 kg : ces débits ne sont plus attribués au standalone sans confirmation explicite.",
		"verifiedFacts": [
			"Configuration : COMBI XP 4 standalone.",
			"Dimensions : 643 × 790 × 961 mm.",
			"Masse standalone : 240 kg.",
			"Stockage et sécheur : Sans cuve, sans sécheur frigorifique."
		],
		"limitations": [
			"La table standalone ne publie que dimensions et masse. Débits des versions 4-en-1 conservés comme contexte documentaire, exclus du calcul de cette configuration.",
			"Taux de marche du groupe complet standalone non quantifié."
		]
	},
	"evidence": [
		{
			"id": "documented-d-almig-2026-p9",
			"sourceUrl": "https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf#page=9",
			"sourceLabel": "almig-2026, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 f5ca167dedaab25352808dc5001ba9badc7acffb2c37168c6d9f89182b752a0e. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "documented-d-almig-screw-duty",
			"sourceUrl": "https://www.almig.de/en/products/compressed-air-generation/screw-compressors",
			"sourceLabel": "almig-screw-duty, page constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 a42ca92be39e4a81a11cf3e4ec6bb3ce237552363c3b0a7d16a43761d852266f. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "almig-combi-xp-4-standalone-reserved-20261103-1",
			"sourceUrl": "https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf#page=9",
			"sourceLabel": "ALMiG : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 f5ca167dedaab25352808dc5001ba9badc7acffb2c37168c6d9f89182b752a0e. La COMBI XP 4 standalone pèse 240 kg ; les standalone 4 et 6 partagent les dimensions mais pèsent 240 et 250 kg. Le tableau de débit 50 Hz appartient aux versions 4-en-1 sur cuve 270 D, de masses 465 et 470 kg : ces débits ne sont plus attribués au standalone sans confirmation explicite."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"documented-d-almig-2026-p9"
		],
		"maxPressureBar": [
			"documented-d-almig-2026-p9"
		],
		"powerKw": [
			"documented-d-almig-2026-p9"
		],
		"fadCurve": [
			"almig-combi-xp-4-standalone-reserved-20261103-1"
		],
		"weightKg": [
			"almig-combi-xp-4-standalone-reserved-20261103-1"
		],
		"editorial": [
			"almig-combi-xp-4-standalone-reserved-20261103-1"
		],
		"specifications": [
			"almig-combi-xp-4-standalone-reserved-20261103-1"
		]
	},
	"notes": [
		"Configuration et unités vérifiées dans la ligne de la page 9."
	]
};

export default product;
