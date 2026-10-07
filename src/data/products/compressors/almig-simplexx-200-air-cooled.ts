import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "almig-simplexx-200-air-cooled",
	"slug": "almig-simplexx-200-air-cooled",
	"brand": "ALMiG",
	"model": "SIMPLEXX 200 air-cooled",
	"variant": {
		"familyId": "almig-simplexx-200-air-cooled",
		"label": "Air cooled ; 10,4 bar",
		"distinguishingAttributes": {
			"configuration": "Air cooled",
			"pression": "10,4 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10.4,
	"fadCurve": [
		{
			"pressureBar": 7,
			"litersPerMinute": 33000
		}
	],
	"dutyCycle": 1,
	"oilType": "oil-free",
	"powerKw": 200,
	"weightKg": 6200,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/almig-simplexx-200-air-cooled.webp",
		"alt": "Repères techniques : ALMiG SIMPLEXX 200 air-cooled",
		"sourceUrl": "https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 29",
			"evidenceIds": [
				"documented-d-almig-2026-p29"
			]
		},
		{
			"label": "Configuration",
			"value": "Air cooled",
			"evidenceIds": [
				"documented-d-almig-2026-p29"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "4300 × 1900 × 2180 mm",
			"evidenceIds": [
				"documented-d-almig-2026-p29"
			]
		},
		{
			"label": "Conditions du débit",
			"value": "SIMPLEXX: explicitly stated operating point at 7 bar; 50 Hz",
			"evidenceIds": [
				"documented-d-almig-2026-p29"
			]
		}
	],
	"editorial": {
		"overview": "ALMiG SIMPLEXX 200 air-cooled. Air cooled. Débit restitué : 33 000 L/min à 7 bar.",
		"verifiedFacts": [
			"Dimensions publiées : 4300 × 1900 × 2180 mm.",
			"Puissance moteur publiée : 200 kW.",
			"La documentation constructeur de cette série prévoit le service continu, sous ses conditions d’installation et d’entretien."
		],
		"limitations": [
			"La disponibilité actuelle et le contenu de la configuration livrée restent à confirmer.",
			"Aucun débit n’est extrapolé au-delà des pressions publiées ; les minima de modulation ne sont pas des débits moyens d’atelier.",
			"La classe de qualité d’air du réseau, les pertes de pression et le refroidissement nécessitent une vérification sur l’installation."
		]
	},
	"evidence": [
		{
			"id": "documented-d-almig-2026-p29",
			"sourceUrl": "https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf#page=29",
			"sourceLabel": "almig-2026, page PDF 29",
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
			"documented-d-almig-2026-p29"
		],
		"maxPressureBar": [
			"documented-d-almig-2026-p29"
		],
		"powerKw": [
			"documented-d-almig-2026-p29"
		],
		"fadCurve": [
			"documented-d-almig-2026-p29"
		],
		"weightKg": [
			"documented-d-almig-2026-p29"
		],
		"oilType": [
			"documented-d-almig-2026-p29"
		],
		"dutyCycle": [
			"documented-d-almig-screw-duty"
		]
	},
	"notes": [
		"Configuration et unités vérifiées dans la ligne de la page 29."
	]
};

export default product;
