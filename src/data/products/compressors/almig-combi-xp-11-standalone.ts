import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "almig-combi-xp-11-standalone",
	"slug": "almig-combi-xp-11-standalone",
	"brand": "ALMiG",
	"model": "COMBI XP 11 standalone",
	"variant": {
		"familyId": "almig-combi-xp-11-standalone",
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
	"powerKw": 11,
	"weightKg": 380,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/almig-combi-xp-11-standalone.webp",
		"alt": "Repères techniques : ALMiG COMBI XP 11 standalone",
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
			"value": "691 × 1051 × 1088 mm",
			"evidenceIds": [
				"documented-d-almig-2026-p9"
			]
		},
		{
			"label": "Périmètre de la table de débit",
			"value": "La page 8 est intitulée 4-in-1:50 Hz ; la page 9 donne les dimensions standalone. L’applicabilité de la courbe 4-in-1 au groupe seul reste à confirmer.",
			"evidenceIds": [
				"review-20261025-s083-p8",
				"review-20261025-s083-p9"
			]
		},
		{
			"label": "Comparaison documentée et limite de choix",
			"value": "Distinguer le groupe seul de la station 270D, ainsi que leur périmètre de mesure ; ne pas hériter du service continu générique.",
			"evidenceIds": [
				"review-20261025-s083-p6",
				"review-20261025-s083-p7",
				"review-20261025-s083-p8",
				"review-20261025-s083-p9",
				"review-20261025-s084"
			]
		}
	],
	"editorial": {
		"overview": "Le COMBI XP 11 standalone est le groupe sans cuve ni sécheur, donné pour 380 kg et 691 × 1051 × 1088 mm. La station 270D ajoute une cuve 270 L, un sécheur frigorifique et des filtres ; son tableau annonce 590 kg. Les valeurs 1,67/1,46/1,17 m³/min aux pressions 8/10/13 bar figurent sous le titre «4-in-1:50 Hz». Leur applicabilité au groupe seul n’est pas établie dans les pages lues : elles restent des caractéristiques de la station voisine, sans alimenter la courbe du standalone.",
		"verifiedFacts": [
			"Dimensions publiées : 691 × 1051 × 1088 mm.",
			"Puissance moteur publiée : 11 kW.",
			"Version standalone sans cuve ni sécheur ; masse publiée 380 kg."
		],
		"limitations": [
			"La page 9 documente les dimensions et la masse du groupe seul ; elle ne contient pas son tableau de débit.",
			"La plage 5–13 bar concerne la famille COMBI XP. Les maxima de la table 4-in-1 ne sont pas transférés au standalone sans confirmation.",
			"La promesse de fonctionnement continu de la catégorie générale des compresseurs à vis ne chiffre pas un taux de marche de ce groupe : le taux de marche reste indéterminé.",
			"L’absence de cuve et de sécheur impose de définir le stockage et le traitement d’air de l’installation. Le mode de lubrification reste inconnu."
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
			"id": "review-20261025-s083-p6",
			"sourceUrl": "https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf#page=6",
			"sourceLabel": "ALMiG, relecture primaire du 25 octobre 2026, s083, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 f5ca167dedaab25352808dc5001ba9badc7acffb2c37168c6d9f89182b752a0e. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s083-p7",
			"sourceUrl": "https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf#page=7",
			"sourceLabel": "ALMiG, relecture primaire du 25 octobre 2026, s083, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 f5ca167dedaab25352808dc5001ba9badc7acffb2c37168c6d9f89182b752a0e. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s083-p8",
			"sourceUrl": "https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf#page=8",
			"sourceLabel": "ALMiG, relecture primaire du 25 octobre 2026, s083, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 f5ca167dedaab25352808dc5001ba9badc7acffb2c37168c6d9f89182b752a0e. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s083-p9",
			"sourceUrl": "https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf#page=9",
			"sourceLabel": "ALMiG, relecture primaire du 25 octobre 2026, s083, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 f5ca167dedaab25352808dc5001ba9badc7acffb2c37168c6d9f89182b752a0e. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s084",
			"sourceUrl": "https://www.almig.de/en/products/compressed-air-generation/screw-compressors",
			"sourceLabel": "ALMiG, relecture primaire du 25 octobre 2026, s084",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 7ccde5c0be70ca882cc9d1bf7fe03fadadebb2f4de102293e48490c0954f2d19. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"review-20261025-s083-p6",
			"review-20261025-s083-p9"
		],
		"maxPressureBar": [
			"review-20261025-s083-p6"
		],
		"powerKw": [
			"review-20261025-s083-p8"
		],
		"weightKg": [
			"review-20261025-s083-p9"
		],
		"maxPressureBasis": [
			"review-20261025-s083-p6"
		],
		"fadCurve": [
			"review-20261025-s083-p6",
			"review-20261025-s083-p7",
			"review-20261025-s083-p8",
			"review-20261025-s083-p9",
			"review-20261025-s084"
		]
	},
	"notes": [
		"Configuration et unités vérifiées dans la ligne de la page 9."
	],
	"maxPressureBasis": "selected-working-pressure-ceiling"
};

export default product;
