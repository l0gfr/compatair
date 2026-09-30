const product = {
	"id": "renner-rsd-b-4-0-300157",
	"slug": "renner-rsd-b-4-0-300157",
	"brand": "RENNER",
	"model": "RSD-B 4.0",
	"mpn": "300157",
	"variant": {
		"familyId": "renner-rsd-b-4-0",
		"label": "Cuve publiée : 4 x 90 L ; 10 bar",
		"distinguishingAttributes": {
			"reference": "300157",
			"configuration": "Cuve publiée : 4 x 90 L",
			"pression": "10 bar",
			"cuve": "360 L"
		}
	},
	"tankLiters": 360,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 530
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 4,
	"weightKg": 312,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/renner-rsd-b-4-0-300157.webp",
		"alt": "Repères techniques : RENNER RSD-B 4.0, article 300157",
		"sourceUrl": "https://www.renner-kompressoren.de/fileadmin/DATA/Medien/Newsletter/Deutsch/03_2026/RENNER_-_Produktkatalog_-_2026_-_DE_3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 10",
			"evidenceIds": [
				"documented-d-renner-2026-p10"
			]
		},
		{
			"label": "Configuration",
			"value": "Cuve publiée : 4 x 90 L",
			"evidenceIds": [
				"documented-d-renner-2026-p10"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "982 × 755 × 1572 mm",
			"evidenceIds": [
				"documented-d-renner-2026-p10"
			]
		},
		{
			"label": "Conditions du débit",
			"value": "ISO 1217 Annex C, one article and its pressure column",
			"evidenceIds": [
				"documented-d-renner-2026-p10"
			]
		}
	],
	"editorial": {
		"overview": "RENNER RSD-B 4.0, article 300157. Cuve publiée : 4 x 90 L. Débit restitué : 530 L/min à 10 bar.",
		"verifiedFacts": [
			"Dimensions publiées : 982 × 755 × 1572 mm.",
			"Puissance moteur publiée : 4 kW.",
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
			"id": "documented-d-renner-2026-p10",
			"sourceUrl": "https://www.renner-kompressoren.de/fileadmin/DATA/Medien/Newsletter/Deutsch/03_2026/RENNER_-_Produktkatalog_-_2026_-_DE_3.pdf#page=10",
			"sourceLabel": "renner-2026, page PDF 10",
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
			"documented-d-renner-2026-p10"
		],
		"maxPressureBar": [
			"documented-d-renner-2026-p10"
		],
		"powerKw": [
			"documented-d-renner-2026-p10"
		],
		"fadCurve": [
			"documented-d-renner-2026-p10"
		],
		"weightKg": [
			"documented-d-renner-2026-p10"
		],
		"mpn": [
			"documented-d-renner-2026-p10"
		],
		"oilType": [
			"documented-d-renner-2026-p10"
		],
		"dutyCycle": [
			"documented-d-renner-rsb-duty"
		]
	},
	"notes": [
		"Configuration et unités vérifiées dans la ligne de la page 10."
	]
};

export default product;
