import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "almig-lento-56-water-cooled",
	"slug": "almig-lento-56-water-cooled",
	"brand": "ALMiG",
	"model": "LENTO 56 water-cooled",
	"variant": {
		"familyId": "almig-lento-56-water-cooled",
		"label": "Water cooled ; 10 bar",
		"distinguishingAttributes": {
			"configuration": "Water cooled",
			"pression": "10 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 7,
			"litersPerMinute": 9580
		}
	],
	"dutyCycle": 1,
	"oilType": "oil-free",
	"powerKw": 55,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/almig-lento-56-water-cooled.webp",
		"alt": "Repères techniques : ALMiG LENTO 56 water-cooled",
		"sourceUrl": "https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 24",
			"evidenceIds": [
				"documented-d-almig-2026-p24"
			]
		},
		{
			"label": "Configuration",
			"value": "Water cooled",
			"evidenceIds": [
				"documented-d-almig-2026-p24"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "2750 × 1400 × 1769 mm",
			"evidenceIds": [
				"documented-d-almig-2026-p24"
			]
		},
		{
			"label": "Conditions du débit",
			"value": "LENTO: explicitly stated operating point at 7 bar; 50 Hz",
			"evidenceIds": [
				"documented-d-almig-2026-p24"
			]
		},
		{
			"label": "Débit minimal de modulation publié",
			"value": "2 490 L/min ; condition du tableau conservée séparément",
			"evidenceIds": [
				"documented-d-almig-2026-p24"
			]
		}
	],
	"editorial": {
		"overview": "ALMiG LENTO 56 water-cooled. Water cooled. Débit restitué : 9 580 L/min à 7 bar.",
		"verifiedFacts": [
			"Dimensions publiées : 2750 × 1400 × 1769 mm.",
			"Puissance moteur publiée : 55 kW.",
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
			"id": "documented-d-almig-2026-p24",
			"sourceUrl": "https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf#page=24",
			"sourceLabel": "almig-2026, page PDF 24",
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
			"documented-d-almig-2026-p24"
		],
		"maxPressureBar": [
			"documented-d-almig-2026-p24"
		],
		"powerKw": [
			"documented-d-almig-2026-p24"
		],
		"fadCurve": [
			"documented-d-almig-2026-p24"
		],
		"oilType": [
			"documented-d-almig-2026-p24"
		],
		"dutyCycle": [
			"documented-d-almig-screw-duty"
		]
	},
	"notes": [
		"Configuration et unités vérifiées dans la ligne de la page 24."
	]
};

export default product;
