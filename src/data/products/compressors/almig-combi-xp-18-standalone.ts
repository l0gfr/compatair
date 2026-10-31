import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "almig-combi-xp-18-standalone",
	"slug": "almig-combi-xp-18-standalone",
	"brand": "ALMiG",
	"model": "COMBI XP 18 standalone",
	"variant": {
		"familyId": "almig-combi-xp-18-standalone",
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
			"litersPerMinute": 3250
		},
		{
			"pressureBar": 10,
			"litersPerMinute": 2730
		},
		{
			"pressureBar": 13,
			"litersPerMinute": 1950
		}
	],
	"oilType": "unknown",
	"powerKw": 18.5,
	"weightKg": 500,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/almig-combi-xp-18-standalone.webp",
		"alt": "Repères techniques : ALMiG COMBI XP 18 standalone",
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
			"value": "740 × 1130 × 1344 mm",
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
		"overview": "ALMiG COMBI XP 18 standalone. Standalone, sans cuve ni sécheur. Débit restitué : 3 250 L/min à 8 bar ; 2 730 L/min à 10 bar ; 1 950 L/min à 13 bar.",
		"verifiedFacts": [
			"Dimensions publiées : 740 × 1130 × 1344 mm.",
			"Puissance moteur publiée : 18,5 kW."
		],
		"limitations": [
			"La disponibilité actuelle et le contenu de la configuration livrée restent à confirmer.",
			"Aucun débit n’est extrapolé au-delà des pressions publiées ; les minima de modulation ne sont pas des débits moyens d’atelier.",
			"Le mode de lubrification n’est pas établi ici. Aucun niveau de qualité d’air n’en est déduit.",
			"La classe de qualité d’air du réseau, les pertes de pression et le refroidissement nécessitent une vérification sur l’installation.",
			"Les passages cités décrivent le fonctionnement continu de la gamme ou le service du moteur. Ils ne définissent pas un taux de marche chiffré du groupe complet pour cette configuration ; le champ dutyCycle reste non documenté."
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
			"id": "almig-combi-xp-18-standalone-reserved-20261031-1",
			"sourceUrl": "https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf#page=9",
			"sourceLabel": "ALMiG COMBI XP 18 standalone : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 f5ca167dedaab25352808dc5001ba9badc7acffb2c37168c6d9f89182b752a0e. Les passages cités décrivent le fonctionnement continu de la gamme ou le service du moteur. Ils ne définissent pas un taux de marche chiffré du groupe complet pour cette configuration ; le champ dutyCycle reste non documenté."
		},
		{
			"id": "almig-combi-xp-18-standalone-reserved-20261031-2",
			"sourceUrl": "https://www.almig.de/en/products/compressed-air-generation/screw-compressors",
			"sourceLabel": "ALMiG COMBI XP 18 standalone : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 0e4d23e62a70441fd959600ade30b73e12e039e03582b85a94b9e1ef8490a9c7. Les passages cités décrivent le fonctionnement continu de la gamme ou le service du moteur. Ils ne définissent pas un taux de marche chiffré du groupe complet pour cette configuration ; le champ dutyCycle reste non documenté."
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
		]
	},
	"notes": [
		"Configuration et unités vérifiées dans la ligne de la page 9."
	]
};

export default product;
