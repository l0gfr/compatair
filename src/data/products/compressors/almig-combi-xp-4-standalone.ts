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
	"fadCurve": [
		{
			"pressureBar": 8,
			"litersPerMinute": 590
		},
		{
			"pressureBar": 10,
			"litersPerMinute": 530
		},
		{
			"pressureBar": 13,
			"litersPerMinute": 410
		}
	],
	"dutyCycle": 1,
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
			"label": "Localisation du tableau",
			"value": "Page PDF 9",
			"evidenceIds": [
				"documented-d-almig-2026-p9"
			]
		},
		{
			"label": "Configuration",
			"value": "Standalone, sans cuve ni sécheur",
			"evidenceIds": [
				"documented-d-almig-2026-p9"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "643 × 790 × 961 mm",
			"evidenceIds": [
				"documented-d-almig-2026-p9"
			]
		},
		{
			"label": "Conditions du débit",
			"value": "COMBI XP standalone model; flow table page 8, dimensions page 9, no receiver and dryer.",
			"evidenceIds": [
				"documented-d-almig-2026-p9"
			]
		}
	],
	"editorial": {
		"overview": "ALMiG COMBI XP 4 standalone. Standalone, sans cuve ni sécheur. Débit restitué : 590 L/min à 8 bar ; 530 L/min à 10 bar ; 410 L/min à 13 bar.",
		"verifiedFacts": [
			"Dimensions publiées : 643 × 790 × 961 mm.",
			"Puissance moteur publiée : 4 kW.",
			"La documentation constructeur de cette série prévoit le service continu, sous ses conditions d’installation et d’entretien."
		],
		"limitations": [
			"La disponibilité actuelle et le contenu de la configuration livrée restent à confirmer.",
			"Aucun débit n’est extrapolé au-delà des pressions publiées ; les minima de modulation ne sont pas des débits moyens d’atelier.",
			"Le mode de lubrification n’est pas établi ici. Aucun niveau de qualité d’air n’en est déduit.",
			"La classe de qualité d’air du réseau, les pertes de pression et le refroidissement nécessitent une vérification sur l’installation."
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
			"documented-d-almig-2026-p9"
		],
		"weightKg": [
			"documented-d-almig-2026-p9"
		],
		"dutyCycle": [
			"documented-d-almig-screw-duty"
		]
	},
	"notes": [
		"Configuration et unités vérifiées dans la ligne de la page 9."
	]
};

export default product;
