import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "almig-combi-xp-6-270d",
	"slug": "almig-combi-xp-6-270d",
	"brand": "ALMiG",
	"model": "COMBI XP 6 270D",
	"variant": {
		"familyId": "almig-combi-xp-6-270d",
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
			"litersPerMinute": 780
		},
		{
			"pressureBar": 10,
			"litersPerMinute": 690
		},
		{
			"pressureBar": 13,
			"litersPerMinute": 590
		}
	],
	"oilType": "unknown",
	"powerKw": 5.5,
	"weightKg": 470,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/almig-combi-xp-6-270d.webp",
		"alt": "Repères techniques : ALMiG COMBI XP 6 270D",
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
			"value": "1530 × 640 × 1520 mm",
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
			"value": "180 L/min à 8 bar ; 180 L/min à 10 bar ; 170 L/min à 13 bar",
			"evidenceIds": [
				"documented-20260930-almig-2026"
			]
		}
	],
	"editorial": {
		"overview": "COMBI XP 6 270D : station 50 Hz de 5,5 kW avec cuve de 270 L, sécheur frigorifique et pré/post-filtration. Le tableau publie 180 à 690 L/min à 10 bar et 170 à 590 L/min à 13 bar. Le COMBI XP 4 garde 270 L avec 4 kW et 180 à 530 L/min à 10 bar.",
		"verifiedFacts": [
			"À 8 bar : plage de 180 à 780 L/min selon ISO 1217 annexe C-2009.",
			"Station de 270 L avec moteur de 5,5 kW ; maxima de 690 L/min à 10 bar et 590 L/min à 13 bar.",
			"Les minima de 180 L/min à 10 bar et 170 L/min à 13 bar restent des bornes de modulation."
		],
		"limitations": [
			"La courbe retient les maxima publiés ; les minima restent des limites de modulation distinctes de la consommation moyenne de l’atelier.",
			"Le taux de marche du groupe complet reste à confirmer dans une notice de cette série.",
			"Le 6 270D pèse 470 kg et mesure 1530 × 640 × 1520 mm ; le 4 270D indique 465 kg pour le même encombrement.",
			"Refroidissement, raccordement et lubrification du bloc restent à préciser pour l’installation."
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
