const product = {
	"id": "renner-rsdk-b-ecn-4-0-300101",
	"slug": "renner-rsdk-b-ecn-4-0-300101",
	"brand": "RENNER",
	"model": "RSDK-B-ECN 4.0",
	"mpn": "300101",
	"variant": {
		"familyId": "renner-rsdk-b-ecn-4-0",
		"label": "Sécheur frigorifique intégré ; Cuve publiée : 270 L ; 10 bar",
		"distinguishingAttributes": {
			"reference": "300101",
			"configuration": "Sécheur frigorifique intégré ; Cuve publiée : 270 L",
			"pression": "10 bar",
			"cuve": "270 L"
		}
	},
	"tankLiters": 270,
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
	"weightKg": 263,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/renner-rsdk-b-ecn-4-0-300101.webp",
		"alt": "Repères techniques : RENNER RSDK-B-ECN 4.0, article 300101",
		"sourceUrl": "https://www.renner-kompressoren.de/fileadmin/DATA/Medien/Newsletter/Deutsch/03_2026/RENNER_-_Produktkatalog_-_2026_-_DE_3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "Sécheur frigorifique intégré ; Cuve publiée : 270 L",
			"evidenceIds": [
				"october-renner-2026-p10"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "1490 × 545 × 1296 mm",
			"evidenceIds": [
				"october-renner-2026-p10"
			]
		},
		{
			"label": "Condition du FAD",
			"value": "ISO 1217 annexe C ; débit de la colonne de pression de cet article",
			"evidenceIds": [
				"october-renner-2026-p10"
			]
		}
	],
	"editorial": {
		"overview": "RENNER RSDK-B-ECN 4.0, article 300101. Sécheur frigorifique intégré ; Cuve publiée : 270 L. Débit restitué déclaré : 530 L/min à 10 bar.",
		"verifiedFacts": [
			"Dimensions publiées : 1490 × 545 × 1296 mm.",
			"Masse de cette configuration : 263 kg ; puissance moteur : 4 kW.",
			"La page constructeur de cette série prévoit le fonctionnement continu, sous ses conditions d’installation et d’entretien."
		],
		"limitations": [
			"Le point FAD appartient à cette configuration et à sa pression de référence ; aucune courbe de fonctionnement supplémentaire n’est inventée.",
			"Disponibilité locale, alimentation électrique, dégagements d’entretien et qualité d’air au point d’usage à vérifier avant installation."
		]
	},
	"evidence": [
		{
			"id": "october-renner-2026-p10",
			"sourceUrl": "https://www.renner-kompressoren.de/fileadmin/DATA/Medien/Newsletter/Deutsch/03_2026/RENNER_-_Produktkatalog_-_2026_-_DE_3.pdf#page=10",
			"sourceLabel": "RENNER, catalogue produits 2026, page 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 35bd2421c2cc333bc6a0d6cd20c09bbf6b3c2af621021cb6cd2a254d23e74f8a. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "october-renner-rsb-duty",
			"sourceUrl": "https://www.renner-kompressoren.de/produkte/rs-b-22-110/",
			"sourceLabel": "RENNER, série RS-B 2.2–11.0",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 42a3e0bfbef304e907bc06c88a31e536d442932c74e9841135bb656d03f9b234. Caractéristiques déclarées, sans essai physique CompatAir. Nouvelle collecte refusée (HTTP 403) ; dernière observation positive conservée."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october-renner-2026-p10"
		],
		"maxPressureBar": [
			"october-renner-2026-p10"
		],
		"fadCurve": [
			"october-renner-2026-p10"
		],
		"powerKw": [
			"october-renner-2026-p10"
		],
		"weightKg": [
			"october-renner-2026-p10"
		],
		"mpn": [
			"october-renner-2026-p10"
		],
		"oilType": [
			"october-renner-2026-p10"
		],
		"dutyCycle": [
			"october-renner-rsb-duty"
		]
	},
	"notes": [
		"Tableau page 10 ; conditions ISO 1217 conservées. Aucun essai physique réalisé."
	]
};

export default product;
