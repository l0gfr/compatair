const product = {
	"id": "renner-rs-b-2-2-300000",
	"slug": "renner-rs-b-2-2-300000",
	"brand": "RENNER",
	"model": "RS-B 2.2",
	"mpn": "300000",
	"variant": {
		"familyId": "renner-rs-b-2-2",
		"label": "Version standard au sol, sans réservoir intégré ; 7,5 bar",
		"distinguishingAttributes": {
			"reference": "300000",
			"configuration": "Version standard au sol, sans réservoir intégré",
			"pression": "7,5 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 7.5,
	"fadCurve": [
		{
			"pressureBar": 7.5,
			"litersPerMinute": 340
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 2.2,
	"weightKg": 124,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/renner-rs-b-2-2-300000.webp",
		"alt": "Repères techniques : RENNER RS-B 2.2, article 300000",
		"sourceUrl": "https://www.renner-kompressoren.de/fileadmin/DATA/Medien/Newsletter/Deutsch/03_2026/RENNER_-_Produktkatalog_-_2026_-_DE_3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 6",
			"evidenceIds": [
				"documented-d-renner-2026-p6"
			]
		},
		{
			"label": "Configuration",
			"value": "Version standard au sol, sans réservoir intégré",
			"evidenceIds": [
				"documented-d-renner-2026-p6"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "716 × 536 × 540 mm",
			"evidenceIds": [
				"documented-d-renner-2026-p6"
			]
		},
		{
			"label": "Conditions du débit",
			"value": "ISO 1217 Annex C, one article and its pressure column",
			"evidenceIds": [
				"documented-d-renner-2026-p6"
			]
		}
	],
	"editorial": {
		"overview": "RENNER RS-B 2.2, article 300000. Version standard au sol, sans réservoir intégré. Débit restitué : 340 L/min à 7,5 bar.",
		"verifiedFacts": [
			"Dimensions publiées : 716 × 536 × 540 mm.",
			"Puissance moteur publiée : 2,2 kW.",
			"La documentation constructeur de cette série prévoit le service continu, sous ses conditions d’installation et d’entretien."
		],
		"limitations": [
			"La disponibilité actuelle et le contenu de la configuration livrée restent à confirmer.",
			"Aucun débit n’est extrapolé au-delà des pressions publiées ; les minima de modulation ne sont pas des débits moyens d’atelier.",
			"La classe de qualité d’air du réseau, les pertes de pression et le refroidissement nécessitent une vérification sur l’installation."
		]
	},
	"evidence": [
		{
			"id": "documented-d-renner-2026-p6",
			"sourceUrl": "https://www.renner-kompressoren.de/fileadmin/DATA/Medien/Newsletter/Deutsch/03_2026/RENNER_-_Produktkatalog_-_2026_-_DE_3.pdf#page=6",
			"sourceLabel": "renner-2026, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 35bd2421c2cc333bc6a0d6cd20c09bbf6b3c2af621021cb6cd2a254d23e74f8a. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "documented-d-renner-rsb-duty",
			"sourceUrl": "https://www.renner-kompressoren.de/produkte/rs-b-22-110/",
			"sourceLabel": "renner-rsb-duty, page constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 42a3e0bfbef304e907bc06c88a31e536d442932c74e9841135bb656d03f9b234. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"documented-d-renner-2026-p6"
		],
		"maxPressureBar": [
			"documented-d-renner-2026-p6"
		],
		"powerKw": [
			"documented-d-renner-2026-p6"
		],
		"fadCurve": [
			"documented-d-renner-2026-p6"
		],
		"weightKg": [
			"documented-d-renner-2026-p6"
		],
		"mpn": [
			"documented-d-renner-2026-p6"
		],
		"oilType": [
			"documented-d-renner-2026-p6"
		],
		"dutyCycle": [
			"documented-d-renner-rsb-duty"
		]
	},
	"notes": [
		"Configuration et unités vérifiées dans la ligne de la page 6."
	]
};

export default product;
