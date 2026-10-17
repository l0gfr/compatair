import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "almig-combi-xp-15-270d",
	"slug": "almig-combi-xp-15-270d",
	"brand": "ALMiG",
	"model": "COMBI XP 15 270D",
	"variant": {
		"familyId": "almig-combi-xp-15-270d",
		"label": "Station 4-en-1 : réservoir 270 L, sécheur frigorifique, préfiltre et postfiltre ; 13 bar",
		"distinguishingAttributes": {
			"pression": "13 bar",
			"cuve": "270 L",
			"configuration": "Station 4-en-1 : réservoir 270 L, sécheur frigorifique, préfiltre et postfiltre"
		}
	},
	"tankLiters": 270,
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 8,
			"litersPerMinute": 2230
		},
		{
			"pressureBar": 10,
			"litersPerMinute": 2020
		},
		{
			"pressureBar": 13,
			"litersPerMinute": 1690
		}
	],
	"oilType": "unknown",
	"powerKw": 15,
	"weightKg": 595,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/almig-combi-xp-15-270d.webp",
		"alt": "Repères techniques : ALMiG COMBI XP 15 270D",
		"sourceUrl": "https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 8",
			"evidenceIds": [
				"documented-20260930-almig-2026"
			]
		},
		{
			"label": "Configuration publiée",
			"value": "Station 4-en-1 : réservoir 270 L, sécheur frigorifique, préfiltre et postfiltre",
			"evidenceIds": [
				"documented-20260930-almig-2026"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "1530 × 700 × 1640 mm",
			"evidenceIds": [
				"documented-20260930-almig-2026"
			]
		},
		{
			"label": "Technologie",
			"value": "Vis à vitesse variable, 50 Hz",
			"evidenceIds": [
				"documented-20260930-almig-2026"
			]
		},
		{
			"label": "Débit minimal de modulation publié",
			"value": "450 L/min à 8 bar ; 450 L/min à 10 bar ; 430 L/min à 13 bar",
			"evidenceIds": [
				"documented-20260930-almig-2026"
			]
		}
	],
	"editorial": {
		"overview": "COMBI XP 15 270D : station 50 Hz de 15 kW avec cuve de 270 L, sécheur et deux étages de filtration. À 10 bar, le catalogue donne une plage de modulation de 450 à 2 020 L/min ; à 13 bar, de 430 à 1 690 L/min. La courbe CompatAir retient les maxima publiés.",
		"verifiedFacts": [
			"Configuration de 595 kg ; dimensions 1 530 × 700 × 1 640 mm.",
			"À 8 bar, la plage publiée est de 450 à 2 230 L/min, selon ISO 1217 annexe C-2009.",
			"Le COMBI XP 11 270D voisin utilise aussi une cuve de 270 L et publie 290 à 1 460 L/min à 10 bar, pour 11 kW."
		],
		"limitations": [
			"Le taux de marche du groupe complet reste à confirmer dans une notice applicable à COMBI XP. La courbe de capacité seule ne qualifie pas l’endurance.",
			"Un minimum de modulation n’est pas le débit moyen de l’atelier. Un besoin durable sous ce minimum demande l’étude des phases de décharge ou d’arrêt.",
			"Les performances de filtration déclarées ne garantissent pas la qualité d’air au point d’usage ; installation, maintenance et raccordement électrique restent à vérifier.",
			"Le mode de lubrification reste unknown dans cette fiche."
		]
	},
	"evidence": [
		{
			"id": "documented-20260930-almig-2026",
			"sourceUrl": "https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf",
			"sourceLabel": "ALMiG, catalogue juillet 2026 : almig-2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 f5ca167dedaab25352808dc5001ba9badc7acffb2c37168c6d9f89182b752a0e. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		}
	],
	"fieldSources": {
		"fadCurve": [
			"documented-20260930-almig-2026"
		],
		"tankLiters": [
			"documented-20260930-almig-2026"
		],
		"maxPressureBar": [
			"documented-20260930-almig-2026"
		],
		"powerKw": [
			"documented-20260930-almig-2026"
		],
		"weightKg": [
			"documented-20260930-almig-2026"
		]
	},
	"notes": [
		"Tableau de configuration : page PDF 8.",
		"FAD maximal à vitesse nominale ; les capacités minimales restent des spécifications séparées."
	]
};

export default product;
