import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "almig-combi-xp-18-500d",
	"slug": "almig-combi-xp-18-500d",
	"brand": "ALMiG",
	"model": "COMBI XP 18 500D",
	"variant": {
		"familyId": "almig-combi-xp-18-500d",
		"label": "Station 4-en-1 : réservoir 500 L, sécheur frigorifique, préfiltre et postfiltre ; 13 bar",
		"distinguishingAttributes": {
			"pression": "13 bar",
			"cuve": "500 L",
			"configuration": "Station 4-en-1 : réservoir 500 L, sécheur frigorifique, préfiltre et postfiltre"
		}
	},
	"tankLiters": 500,
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
	"weightKg": 800,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/almig-combi-xp-18-500d.webp",
		"alt": "Repères techniques : ALMiG COMBI XP 18 500D",
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
			"value": "Station 4-en-1 : réservoir 500 L, sécheur frigorifique, préfiltre et postfiltre",
			"evidenceIds": [
				"documented-20260930-almig-2026"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "1860 × 740 × 1980 mm",
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
			"value": "580 L/min à 8 bar ; 570 L/min à 10 bar ; 540 L/min à 13 bar",
			"evidenceIds": [
				"documented-20260930-almig-2026"
			]
		}
	],
	"editorial": {
		"overview": "COMBI XP 18 500D : station 50 Hz de 18,5 kW avec cuve de 500 L, sécheur et pré/post-filtration. Le tableau annonce de 570 à 2 730 L/min à 10 bar et de 540 à 1 950 L/min à 13 bar. Le COMBI XP 15 270D possède 270 L et annonce de 450 à 2 020 L/min à 10 bar.",
		"verifiedFacts": [
			"À 8 bar : plage de 580 à 3 250 L/min, selon ISO 1217 annexe C-2009.",
			"Station avec réservoir de 500 L ; puissance nominale du tableau : 18,5 kW.",
			"Les maxima à 10 et 13 bar restent associés à ces pressions."
		],
		"limitations": [
			"La courbe CompatAir conserve les maxima publiés ; les minima de modulation restent distincts de la consommation moyenne de l’atelier.",
			"Le taux de marche applicable au groupe complet reste à confirmer dans une notice de cette série.",
			"Le montage 500D publié pèse 800 kg et mesure 1 860 × 740 × 1 980 mm. Les conditions de refroidissement, de filtration et de raccordement électrique sont à vérifier.",
			"La lubrification du bloc reste à confirmer."
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
