const product = {
	"id": "renner-rsdk-b-3-0-300056",
	"slug": "renner-rsdk-b-3-0-300056",
	"brand": "RENNER",
	"model": "RSDK-B 3.0",
	"mpn": "300056",
	"variant": {
		"familyId": "renner-rsdk-b-3-0",
		"label": "Sécheur frigorifique intégré ; Cuve publiée : 90 L ; 7,5 bar",
		"distinguishingAttributes": {
			"reference": "300056",
			"configuration": "Sécheur frigorifique intégré ; Cuve publiée : 90 L",
			"pression": "7,5 bar",
			"cuve": "90 L"
		}
	},
	"tankLiters": 90,
	"maxPressureBar": 7.5,
	"fadCurve": [
		{
			"pressureBar": 7.5,
			"litersPerMinute": 460
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 3,
	"weightKg": 220,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/renner-rsdk-b-3-0-300056.webp",
		"alt": "Repères techniques : RENNER RSDK-B 3.0, article 300056",
		"sourceUrl": "https://www.renner-kompressoren.de/fileadmin/DATA/Medien/Newsletter/Deutsch/03_2026/RENNER_-_Produktkatalog_-_2026_-_DE_3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 8",
			"evidenceIds": [
				"documented-d-renner-2026-p8"
			]
		},
		{
			"label": "Configuration",
			"value": "Sécheur frigorifique intégré ; Cuve publiée : 90 L",
			"evidenceIds": [
				"documented-d-renner-2026-p8"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "1044 × 545 × 1175 mm",
			"evidenceIds": [
				"documented-d-renner-2026-p8"
			]
		},
		{
			"label": "Conditions du débit",
			"value": "ISO 1217 Annex C, one article and its pressure column",
			"evidenceIds": [
				"documented-d-renner-2026-p8"
			]
		}
	],
	"editorial": {
		"overview": "RENNER RSDK-B 3.0, article 300056. Sécheur frigorifique intégré ; Cuve publiée : 90 L. Débit restitué : 460 L/min à 7,5 bar.",
		"verifiedFacts": [
			"Dimensions publiées : 1044 × 545 × 1175 mm.",
			"Puissance moteur publiée : 3 kW.",
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
			"id": "documented-d-renner-2026-p8",
			"sourceUrl": "https://www.renner-kompressoren.de/fileadmin/DATA/Medien/Newsletter/Deutsch/03_2026/RENNER_-_Produktkatalog_-_2026_-_DE_3.pdf#page=8",
			"sourceLabel": "renner-2026, page PDF 8",
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
			"documented-d-renner-2026-p8"
		],
		"maxPressureBar": [
			"documented-d-renner-2026-p8"
		],
		"powerKw": [
			"documented-d-renner-2026-p8"
		],
		"fadCurve": [
			"documented-d-renner-2026-p8"
		],
		"weightKg": [
			"documented-d-renner-2026-p8"
		],
		"mpn": [
			"documented-d-renner-2026-p8"
		],
		"oilType": [
			"documented-d-renner-2026-p8"
		],
		"dutyCycle": [
			"documented-d-renner-rsb-duty"
		]
	},
	"notes": [
		"Configuration et unités vérifiées dans la ligne de la page 8."
	]
};

export default product;
