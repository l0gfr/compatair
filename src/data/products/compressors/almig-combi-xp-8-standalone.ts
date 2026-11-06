import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "almig-combi-xp-8-standalone",
	"slug": "almig-combi-xp-8-standalone",
	"brand": "ALMiG",
	"model": "COMBI XP 8 standalone",
	"variant": {
		"familyId": "almig-combi-xp-8-standalone",
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
			"litersPerMinute": 1160
		},
		{
			"pressureBar": 10,
			"litersPerMinute": 980
		},
		{
			"pressureBar": 13,
			"litersPerMinute": 750
		}
	],
	"oilType": "unknown",
	"powerKw": 7.5,
	"weightKg": 350,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/almig-combi-xp-8-standalone.webp",
		"alt": "Repères techniques : ALMiG COMBI XP 8 standalone",
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
			"label": "Conditions du débit",
			"value": "COMBI XP standalone model; flow table page 8, dimensions page 9, no receiver and dryer.",
			"evidenceIds": [
				"documented-d-almig-2026-p9"
			]
		}
	],
	"editorial": {
		"overview": "ALMiG COMBI XP 8 standalone. Standalone, sans cuve ni sécheur. Débit restitué : 1 160 L/min à 8 bar ; 980 L/min à 10 bar ; 750 L/min à 13 bar.",
		"verifiedFacts": [
			"Dimensions publiées : 691 × 1051 × 1088 mm.",
			"Puissance moteur publiée : 7,5 kW.",
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
			"id": "review:2026-11-06-followup:almig-combi-xp-8-standalone:1",
			"sourceUrl": "https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf#page=9",
			"sourceLabel": "ALMiG, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "COMBIXP8 : débits ISO1217C 1160/980/750 L/min à8/10/13 bar, dimensions standalone691 ×1051 ×1088 et350 kg. La mention générale de continuité de la gamme ne documente pas un taux de marche exact du groupe ; conserver les débits, enlever dutyCycle=1 non établi. SHA-256 du document complet : f5ca167dedaab25352808dc5001ba9badc7acffb2c37168c6d9f89182b752a0e."
		},
		{
			"id": "review:2026-11-06-followup:almig-combi-xp-8-standalone:2",
			"sourceUrl": "https://www.almig.de/en/products/compressed-air-generation/screw-compressors",
			"sourceLabel": "ALMiG, revue documentaire du 6 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "COMBIXP8 : débits ISO1217C 1160/980/750 L/min à8/10/13 bar, dimensions standalone691 ×1051 ×1088 et350 kg. La mention générale de continuité de la gamme ne documente pas un taux de marche exact du groupe ; conserver les débits, enlever dutyCycle=1 non établi. SHA-256 du document complet : 89768dc9e10560d0ae92781ed4af69fd397c324e6def04e834f28da3de6ae906."
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
