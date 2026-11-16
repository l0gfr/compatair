import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "almig-f-drive-22",
	"slug": "almig-f-drive-22",
	"brand": "ALMiG",
	"model": "F-DRIVE 22",
	"variant": {
		"familyId": "almig-f-drive-22",
		"label": "Air cooled ; 13 bar",
		"distinguishingAttributes": {
			"configuration": "Air cooled",
			"pression": "13 bar",
			"cuve": "0 L"
		}
	},
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 7,
			"litersPerMinute": 4110
		}
	],
	"oilType": "unknown",
	"powerKw": 22,
	"weightKg": 536,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/almig-f-drive-22-technical-20261116-followup.svg",
		"alt": "Repères techniques : ALMiG F-DRIVE 22",
		"sourceUrl": "https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 16",
			"evidenceIds": [
				"documented-d-almig-2026-p16"
			]
		},
		{
			"label": "Configuration",
			"value": "Air cooled",
			"evidenceIds": [
				"documented-d-almig-2026-p16"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "790 × 800 × 1757 mm",
			"evidenceIds": [
				"documented-d-almig-2026-p16"
			]
		},
		{
			"label": "Conditions du débit",
			"value": "F-DRIVE: explicitly stated operating point at 7 bar; 50 Hz",
			"evidenceIds": [
				"documented-d-almig-2026-p16"
			]
		},
		{
			"label": "Débit minimal de modulation publié",
			"value": "420 L/min ; condition du tableau conservée séparément",
			"evidenceIds": [
				"documented-d-almig-2026-p16"
			]
		}
	],
	"editorial": {
		"overview": "Le F-DRIVE 22 module de 420 à 4 110 L/min à 7 bar, sous 50 Hz. Son châssis de 790 × 800 × 1 757 mm diffère de celui des F-DRIVE 11 et 15. Le minimum de modulation décrit une limite de régulation, pas la consommation moyenne d’un atelier. Le taux de marche du groupe et le stockage restent à documenter.",
		"verifiedFacts": [
			"Dimensions publiées : 790 × 800 × 1757 mm.",
			"Puissance moteur publiée : 22 kW."
		],
		"limitations": [
			"La disponibilité actuelle et le contenu de la configuration livrée restent à confirmer.",
			"Aucun débit n’est extrapolé au-delà des pressions publiées ; les minima de modulation ne sont pas des débits moyens d’atelier.",
			"Le mode de lubrification n’est pas établi ici. Aucun niveau de qualité d’air n’en est déduit.",
			"La classe de qualité d’air du réseau, les pertes de pression et le refroidissement nécessitent une vérification sur l’installation.",
			"Le service continu de gamme ne quantifie pas le taux de marche du groupe complet. Conserver les données de débit et leurs limites de pression ; aucun service moteur ne remplace ce taux.",
			"Le volume de stockage de cette configuration n’est pas qualifié dans le tableau."
		]
	},
	"evidence": [
		{
			"id": "documented-d-almig-2026-p16",
			"sourceUrl": "https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf#page=16",
			"sourceLabel": "almig-2026, page PDF 16",
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
			"id": "review:2026-11-16-technical:almig-f-drive-22:0",
			"sourceUrl": "https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf",
			"sourceLabel": "ALMiG, document constructeur vérifié le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le F-DRIVE 22 module de 420 à 4 110 L/min à 7 bar, sous 50 Hz. Son châssis de 790 × 800 × 1 757 mm diffère de celui des F-DRIVE 11 et 15. Le minimum de modulation décrit une limite de régulation, pas la consommation moyenne d’un atelier. Le taux de marche du groupe et le stockage restent à documenter. GET complet SHA-256 f5ca167dedaab25352808dc5001ba9badc7acffb2c37168c6d9f89182b752a0e. Pages PDF lues : 16."
		},
		{
			"id": "review:2026-11-16-technical:almig-f-drive-22:1",
			"sourceUrl": "https://www.almig.de/en/products/compressed-air-generation/screw-compressors",
			"sourceLabel": "ALMiG, document constructeur vérifié le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le F-DRIVE 22 module de 420 à 4 110 L/min à 7 bar, sous 50 Hz. Son châssis de 790 × 800 × 1 757 mm diffère de celui des F-DRIVE 11 et 15. Le minimum de modulation décrit une limite de régulation, pas la consommation moyenne d’un atelier. Le taux de marche du groupe et le stockage restent à documenter. GET complet SHA-256 89768dc9e10560d0ae92781ed4af69fd397c324e6def04e834f28da3de6ae906. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"documented-d-almig-2026-p16"
		],
		"powerKw": [
			"documented-d-almig-2026-p16"
		],
		"fadCurve": [
			"documented-d-almig-2026-p16"
		],
		"weightKg": [
			"documented-d-almig-2026-p16"
		]
	},
	"notes": [
		"Configuration et unités vérifiées dans la ligne de la page 16."
	]
};

export default product;
