const product = {
	"id": "renner-rsk-pro-4-0-310125",
	"slug": "renner-rsk-pro-4-0-310125",
	"brand": "RENNER",
	"model": "RSK-PRO 4.0",
	"mpn": "310125",
	"variant": {
		"familyId": "renner-rsk-pro-4-0",
		"label": "Sécheur frigorifique intégré ; Version standard au sol, sans réservoir intégré ; 10 bar",
		"distinguishingAttributes": {
			"reference": "310125",
			"pression": "10 bar",
			"cuve": "0 L",
			"configuration": "Sécheur frigorifique intégré ; Version standard au sol, sans réservoir intégré"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 550
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 4,
	"weightKg": 203,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/renner-rsk-pro-4-0-310125.webp",
		"alt": "Repères techniques : RENNER RSK-PRO 4.0, article 310125",
		"sourceUrl": "https://www.renner-kompressoren.de/fileadmin/DATA/Medien/Newsletter/Deutsch/03_2026/RENNER_-_Produktkatalog_-_2026_-_DE_3.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 20",
			"evidenceIds": [
				"documented-20260930-renner-2026"
			]
		},
		{
			"label": "Configuration publiée",
			"value": "Sécheur frigorifique intégré ; Version standard au sol, sans réservoir intégré",
			"evidenceIds": [
				"documented-20260930-renner-2026"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "994 × 553 × 1014 mm",
			"evidenceIds": [
				"documented-20260930-renner-2026"
			]
		},
		{
			"label": "Technologie",
			"value": "Vis lubrifiée à entraînement par courroie",
			"evidenceIds": [
				"documented-20260930-renner-2026"
			]
		}
	],
	"editorial": {
		"overview": "RENNER RSK-PRO 4.0, article 310125. Sécheur frigorifique intégré ; Version standard au sol, sans réservoir intégré. Cette référence correspond à la version 10 bar ; son débit est 550 L/min à cette pression.",
		"verifiedFacts": [
			"Puissance moteur publiée : 4 kW ; poids de cette configuration : 203 kg.",
			"Débit restitué documenté : 550 L/min à 10 bar.",
			"La documentation de la série prévoit le fonctionnement continu, sous ses conditions d’installation et d’entretien."
		],
		"limitations": [
			"La disponibilité commerciale actuelle n’a pas été confirmée.",
			"Les débits des autres versions de pression ne sont pas ajoutés à la courbe de cet article.",
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
		"Tableau de configuration : page PDF 20.",
		"Code d’article constructeur 310125, colonne 2."
	]
};

export default product;
