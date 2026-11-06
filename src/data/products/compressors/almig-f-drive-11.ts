import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "almig-f-drive-11",
	"slug": "almig-f-drive-11",
	"brand": "ALMiG",
	"model": "F-DRIVE 11",
	"variant": {
		"familyId": "almig-f-drive-11",
		"label": "Air cooled ; 13 bar",
		"distinguishingAttributes": {
			"configuration": "Air cooled",
			"pression": "13 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 7,
			"litersPerMinute": 1840
		}
	],
	"oilType": "unknown",
	"powerKw": 11,
	"weightKg": 356,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/almig-f-drive-11.webp",
		"alt": "Repères techniques : ALMiG F-DRIVE 11",
		"sourceUrl": "https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
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
			"value": "660 × 690 × 1586 mm",
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
			"value": "230 L/min ; condition du tableau conservée séparément",
			"evidenceIds": [
				"documented-d-almig-2026-p16"
			]
		}
	],
	"editorial": {
		"overview": "ALMiG F-DRIVE 11. Air cooled. Débit restitué : 1 840 L/min à 7 bar.",
		"verifiedFacts": [
			"Dimensions publiées : 660 × 690 × 1586 mm.",
			"Puissance moteur publiée : 11 kW.",
			"La documentation constructeur de cette série prévoit le service continu, sous ses conditions d’installation et d’entretien."
		],
		"limitations": [
			"La disponibilité actuelle et le contenu de la configuration livrée restent à confirmer.",
			"Aucun débit n’est extrapolé au-delà des pressions publiées ; les minima de modulation ne sont pas des débits moyens d’atelier.",
			"Le mode de lubrification n’est pas établi ici. Aucun niveau de qualité d’air n’en est déduit.",
			"La classe de qualité d’air du réseau, les pertes de pression et le refroidissement nécessitent une vérification sur l’installation.",
			"Le taux de marche du groupe complet n’est pas établi. La classe de service du moteur et les promesses générales de gamme restent distinctes ; compatibilité continue indéterminée."
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
			"id": "review:2026-11-06-followup:almig-f-drive-11:1",
			"sourceUrl": "https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf#page=16",
			"sourceLabel": "ALMiG, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Table p16 : F-DRIVE11, débit maximum1840 etminimum230 L/min à7 bar50Hz, plage jusqu'à13. Ne pas utiliser1840 à13 bar. Promesse générale de continuité non convertie en cycle exact du groupe. SHA-256 du document complet : f5ca167dedaab25352808dc5001ba9badc7acffb2c37168c6d9f89182b752a0e."
		},
		{
			"id": "review:2026-11-06-followup:almig-f-drive-11:2",
			"sourceUrl": "https://www.almig.de/en/products/compressed-air-generation/screw-compressors",
			"sourceLabel": "ALMiG, revue documentaire du 6 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Table p16 : F-DRIVE11, débit maximum1840 etminimum230 L/min à7 bar50Hz, plage jusqu'à13. Ne pas utiliser1840 à13 bar. Promesse générale de continuité non convertie en cycle exact du groupe. SHA-256 du document complet : 89768dc9e10560d0ae92781ed4af69fd397c324e6def04e834f28da3de6ae906."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"documented-d-almig-2026-p16"
		],
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
