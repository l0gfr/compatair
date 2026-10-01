const product = {
	"id": "renner-rsk-b-11-0-300022",
	"slug": "renner-rsk-b-11-0-300022",
	"brand": "RENNER",
	"model": "RSK-B 11.0",
	"mpn": "300022",
	"variant": {
		"familyId": "renner-rsk-b-11-0",
		"label": "Sécheur frigorifique intégré ; Version standard au sol, sans réservoir intégré ; 7,5 bar",
		"distinguishingAttributes": {
			"reference": "300022",
			"configuration": "Sécheur frigorifique intégré ; Version standard au sol, sans réservoir intégré",
			"pression": "7,5 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 7.5,
	"fadCurve": [
		{
			"pressureBar": 7.5,
			"litersPerMinute": 1570
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 11,
	"weightKg": 243,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/renner-rsk-b-11-0-300022.webp",
		"alt": "Repères techniques : RENNER RSK-B 11.0, article 300022",
		"sourceUrl": "https://www.renner-kompressoren.de/fileadmin/DATA/Medien/Newsletter/Deutsch/03_2026/RENNER_-_Produktkatalog_-_2026_-_DE_3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "Sécheur frigorifique intégré ; Version standard au sol, sans réservoir intégré",
			"evidenceIds": [
				"october-renner-2026-p16"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "1031 × 572 × 803 mm",
			"evidenceIds": [
				"october-renner-2026-p16"
			]
		},
		{
			"label": "Condition du FAD",
			"value": "ISO 1217 annexe C ; débit de la colonne de pression de cet article",
			"evidenceIds": [
				"october-renner-2026-p16"
			]
		}
	],
	"editorial": {
		"overview": "RENNER RSK-B 11.0, article 300022. Sécheur frigorifique intégré ; Version standard au sol, sans réservoir intégré. Débit restitué déclaré : 1 570 L/min à 7,5 bar.",
		"verifiedFacts": [
			"Dimensions publiées : 1031 × 572 × 803 mm.",
			"Masse de cette configuration : 243 kg ; puissance moteur : 11 kW.",
			"La page constructeur de cette série prévoit le fonctionnement continu, sous ses conditions d’installation et d’entretien."
		],
		"limitations": [
			"Le point FAD appartient à cette configuration et à sa pression de référence ; aucune courbe de fonctionnement supplémentaire n’est inventée.",
			"Disponibilité locale, alimentation électrique, dégagements d’entretien et qualité d’air au point d’usage à vérifier avant installation."
		]
	},
	"evidence": [
		{
			"id": "october-renner-2026-p16",
			"sourceUrl": "https://www.renner-kompressoren.de/fileadmin/DATA/Medien/Newsletter/Deutsch/03_2026/RENNER_-_Produktkatalog_-_2026_-_DE_3.pdf#page=16",
			"sourceLabel": "RENNER, catalogue produits 2026, page 16",
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
			"october-renner-2026-p16"
		],
		"maxPressureBar": [
			"october-renner-2026-p16"
		],
		"fadCurve": [
			"october-renner-2026-p16"
		],
		"powerKw": [
			"october-renner-2026-p16"
		],
		"weightKg": [
			"october-renner-2026-p16"
		],
		"mpn": [
			"october-renner-2026-p16"
		],
		"oilType": [
			"october-renner-2026-p16"
		],
		"dutyCycle": [
			"october-renner-rsb-duty"
		]
	},
	"notes": [
		"Tableau page 16 ; conditions ISO 1217 conservées. Aucun essai physique réalisé."
	]
};

export default product;
