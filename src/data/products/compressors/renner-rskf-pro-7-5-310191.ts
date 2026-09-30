const product = {
	"id": "renner-rskf-pro-7-5-310191",
	"slug": "renner-rskf-pro-7-5-310191",
	"brand": "RENNER",
	"model": "RSKF-PRO 7.5",
	"mpn": "310191",
	"variant": {
		"familyId": "renner-rskf-pro-7-5",
		"label": "Sécheur frigorifique intégré ; 10 bar",
		"distinguishingAttributes": {
			"reference": "310191",
			"pression": "10 bar",
			"cuve": "0 L",
			"configuration": "Sécheur frigorifique intégré"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 6,
			"litersPerMinute": 1370
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 1240
		},
		{
			"pressureBar": 10,
			"litersPerMinute": 1090
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 7.5,
	"weightKg": 273,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/renner-rskf-pro-7-5-310191.webp",
		"alt": "Repères techniques : RENNER RSKF-PRO 7.5, article 310191",
		"sourceUrl": "https://www.renner-kompressoren.de/fileadmin/DATA/Medien/Newsletter/Deutsch/03_2026/RENNER_-_Produktkatalog_-_2026_-_DE_3.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 48",
			"evidenceIds": [
				"documented-20260930-renner-2026"
			]
		},
		{
			"label": "Configuration publiée",
			"value": "Sécheur frigorifique intégré",
			"evidenceIds": [
				"documented-20260930-renner-2026"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "1079 × 553 × 1014 mm",
			"evidenceIds": [
				"documented-20260930-renner-2026"
			]
		},
		{
			"label": "Technologie",
			"value": "Vis lubrifiée à vitesse variable, entraînement par courroie",
			"evidenceIds": [
				"documented-20260930-renner-2026"
			]
		},
		{
			"label": "Débit minimal de modulation (colonne min.)",
			"value": "330 L/min",
			"evidenceIds": [
				"documented-20260930-renner-2026"
			]
		}
	],
	"editorial": {
		"overview": "RENNER RSKF-PRO 7.5, article 310191. Sécheur frigorifique intégré. La courbe reprend les capacités maximales publiées, avec les minima conservés séparément.",
		"verifiedFacts": [
			"Puissance moteur publiée : 7,5 kW ; poids de cette configuration : 273 kg.",
			"Débit restitué documenté : 1 370 L/min à 6 bar ; 1 240 L/min à 8 bar ; 1 090 L/min à 10 bar.",
			"La documentation de la série prévoit le fonctionnement continu, sous ses conditions d’installation et d’entretien."
		],
		"limitations": [
			"La disponibilité commerciale actuelle n’a pas été confirmée.",
			"Les minima et maxima de modulation ne décrivent pas un débit moyen de votre atelier. Aucun débit n’est extrapolé hors des points publiés.",
			"Le service continu documenté ne dispense pas du contrôle du refroidissement, du traitement d’air et des pertes du réseau."
		]
	},
	"evidence": [
		{
			"id": "documented-20260930-renner-2026",
			"sourceUrl": "https://www.renner-kompressoren.de/fileadmin/DATA/Medien/Newsletter/Deutsch/03_2026/RENNER_-_Produktkatalog_-_2026_-_DE_3.pdf",
			"sourceLabel": "RENNER, catalogue 2026 : renner-2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 35bd2421c2cc333bc6a0d6cd20c09bbf6b3c2af621021cb6cd2a254d23e74f8a. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		},
		{
			"id": "documented-20260930-renner-belt-hbg",
			"sourceUrl": "https://shop.hbg-kompressoren.de/wp-content/uploads/2018/11/Prospekt_RS-PRO_RSF-PRO_30-110_DE.pdf",
			"sourceLabel": "Brochure constructeur RENNER RS-PRO 3–11 / RSF-PRO 5,5–11, hébergée par HBG",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 9c0fb8f947202b1d1f0a04ceef4d26ed8863e8b6cbfe9d1f1451bf603a1f0ae8. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-renner-2026"
		],
		"fadCurve": [
			"documented-20260930-renner-2026"
		],
		"tankLiters": [
			"documented-20260930-renner-2026"
		],
		"maxPressureBar": [
			"documented-20260930-renner-2026"
		],
		"oilType": [
			"documented-20260930-renner-2026"
		],
		"powerKw": [
			"documented-20260930-renner-2026"
		],
		"weightKg": [
			"documented-20260930-renner-2026"
		],
		"dutyCycle": [
			"documented-20260930-renner-belt-hbg"
		]
	},
	"notes": [
		"Tableau de configuration : page PDF 48.",
		"FAD maximal à vitesse nominale ; les capacités minimales restent des spécifications séparées."
	]
};

export default product;
