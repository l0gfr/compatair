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
	"fadCurve": [
		{
			"pressureBar": 8,
			"litersPerMinute": 1670
		},
		{
			"pressureBar": 10,
			"litersPerMinute": 1460
		},
		{
			"pressureBar": 13,
			"litersPerMinute": 1170
		}
	],
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
			"label": "Configuration documentée",
			"value": "COMBI XP 11*, sans cuve ni sécheur; brochure COMBI XP page 5.",
			"evidenceIds": [
				"reserved-20261025-almig-brochure-current-p5",
				"reserved-20261025-almig-combi-current"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "1051 × 691 × 1088 mm",
			"evidenceIds": [
				"reserved-20261025-almig-brochure-current-p5",
				"reserved-20261025-almig-combi-current"
			]
		},
		{
			"label": "Plages de débit à vitesse variable",
			"value": "À 8 bar : 290–1670 L/min; à 10 bar : 290–1460 L/min; à 13 bar : 270–1170 L/min. Table 50 Hz, ISO 1217 annexe C-2009. Les points de calcul conservent les maxima documentés.",
			"evidenceIds": [
				"reserved-20261025-almig-brochure-current-p5",
				"reserved-20261025-almig-combi-current"
			]
		},
		{
			"label": "Comparaison avec la station équipée",
			"value": "Groupe 11* : 380 kg, sans cuve ni sécheur. Station 11 avec cuve et sécheur : 590 kg. Les mêmes plages de débit sont publiées dans deux lignes distinctes.",
			"evidenceIds": [
				"reserved-20261025-almig-brochure-current-p5",
				"reserved-20261025-almig-combi-current"
			]
		}
	],
	"editorial": {
		"overview": "Le COMBI XP 11 standalone correspond à la ligne 11* de la brochure COMBI XP : l’astérisque désigne explicitement une version sans cuve ni sécheur. Cette ligne possède ses propres débits à 8, 10 et 13 bar, sous ISO 1217 annexe C-2009; leur attribution ne dépend donc plus du tableau de la station 270D. Le groupe mesure 1051 × 691 × 1088 mm (L × l × h) et pèse 380 kg, contre 590 kg pour la station équipée. Ce choix suppose de définir séparément le stockage et le séchage de l’installation.",
		"verifiedFacts": [
			"Ligne constructeur 11* : groupe sans cuve ni sécheur, 11 kW et 380 kg.",
			"Débits maximaux déclarés à 50 Hz : 1670 L/min à 8 bar, 1460 L/min à 10 bar et 1170 L/min à 13 bar.",
			"Dimensions publiées dans l’ordre longueur, largeur, hauteur : 1051 × 691 × 1088 mm."
		],
		"limitations": [
			"Les valeurs retenues sont les maxima de plages de vitesse variable, pas des débits constants à toute vitesse.",
			"Aucun taux de marche numérique n’est déduit de la brochure : la compatibilité en service continu reste non établie.",
			"Les trois points publiés sont les seules mesures constructeur retenues; une interpolation éventuelle du calculateur reste une estimation distincte. Aucun essai physique CompatAir. Stockage, traitement d’air et lubrification à documenter."
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
		},
		{
			"id": "reserved-20261025-almig-brochure-current-p5",
			"sourceUrl": "https://www.almig.de/fileadmin/user_upload/COMBI_XP_Brochure_en.pdf#page=5",
			"sourceLabel": "Relecture primaire du 25 octobre 2026 : almig-brochure-current, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps complet SHA-256 4b6faf340058b0ef4e304421d315febacb13080a57dea9859128ec1ada90698b. Page 5 relue et inspectée visuellement: ligne 11*, astérisque sans cuve ni sécheur, plages 0,29–1,67 / 0,29–1,46 / 0,27–1,17 m³/min à 8/10/13 bar; 11 kW; longueur 1051, largeur 691, hauteur 1088 mm; 380 kg. Ligne 11 équipée: 590 kg. Pas de taux de marche chiffré retenu. Données déclarées, aucun essai physique CompatAir."
		},
		{
			"id": "reserved-20261025-almig-combi-current",
			"sourceUrl": "https://www.almig.de/en/products/compressed-air-generation/screw-compressors/screw-compressor-combi-xp",
			"sourceLabel": "Relecture primaire du 25 octobre 2026 : almig-combi-current",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps complet SHA-256 8d0be8947fd880b0ac723ad22b2c5d5d55e40822c6ea8256c9f40de2a1a4211d. Tableau 50 Hz: ligne 11* séparée de 11, trois plages ISO 1217 annexe C-2009, dimensions et masse; astérisque sans réservoir. Lien vers la brochure COMBI XP. Données déclarées, aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"reserved-20261025-almig-brochure-current-p5",
			"reserved-20261025-almig-combi-current"
		],
		"maxPressureBar": [
			"review-20261025-s083-p6"
		],
		"powerKw": [
			"reserved-20261025-almig-brochure-current-p5",
			"reserved-20261025-almig-combi-current"
		],
		"weightKg": [
			"reserved-20261025-almig-brochure-current-p5",
			"reserved-20261025-almig-combi-current"
		],
		"maxPressureBasis": [
			"review-20261025-s083-p6"
		],
		"fadCurve": [
			"reserved-20261025-almig-brochure-current-p5",
			"reserved-20261025-almig-combi-current"
		]
	},
	"notes": [
		"Brochure COMBI XP page 5 et page fabricant relues le 25 octobre 2026 : la ligne 11* documente le groupe seul; dimensions corrigées dans l’ordre longueur × largeur × hauteur."
	],
	"maxPressureBasis": "selected-working-pressure-ceiling"
};

export default product;
