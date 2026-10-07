import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "almig-combi-xp-22-500d",
	"slug": "almig-combi-xp-22-500d",
	"brand": "ALMiG",
	"model": "COMBI XP 22 500D",
	"variant": {
		"familyId": "almig-combi-xp-22-500d",
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
			"litersPerMinute": 3940
		},
		{
			"pressureBar": 10,
			"litersPerMinute": 3430
		},
		{
			"pressureBar": 13,
			"litersPerMinute": 2630
		}
	],
	"dutyCycle": 1,
	"oilType": "unknown",
	"powerKw": 22,
	"weightKg": 810,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/almig-combi-xp-22-500d.webp",
		"alt": "Repères techniques : ALMiG COMBI XP 22 500D",
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
			"value": "720 L/min à 8 bar ; 700 L/min à 10 bar ; 690 L/min à 13 bar",
			"evidenceIds": [
				"documented-20260930-almig-2026"
			]
		}
	],
	"editorial": {
		"overview": "ALMiG COMBI XP 22 500D. Station 4-en-1 : réservoir 500 L, sécheur frigorifique, préfiltre et postfiltre. La courbe reprend les capacités maximales publiées, avec les minima conservés séparément.",
		"verifiedFacts": [
			"Puissance moteur publiée : 22 kW ; poids de cette configuration : 810 kg.",
			"Débit restitué documenté : 3 940 L/min à 8 bar ; 3 430 L/min à 10 bar ; 2 630 L/min à 13 bar.",
			"La documentation de la série prévoit le fonctionnement continu, sous ses conditions d’installation et d’entretien."
		],
		"limitations": [
			"La disponibilité commerciale actuelle n’a pas été confirmée.",
			"Les minima et maxima de modulation ne décrivent pas un débit moyen de votre atelier. Aucun débit n’est extrapolé hors des points publiés.",
			"Le service continu documenté ne dispense pas du contrôle du refroidissement, du traitement d’air et des pertes du réseau.",
			"Le mode de lubrification n’a pas été établi dans les sources consultées ; il reste unknown, sans présumer une qualité d’air."
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
		],
		"dutyCycle": [
			"documented-20260930-almig-2026"
		]
	},
	"notes": [
		"Tableau de configuration : page PDF 8.",
		"FAD maximal à vitesse nominale ; les capacités minimales restent des spécifications séparées."
	]
};

export default product;
