const product = {
	"id": "renner-rsd-b-11-0-st-300118",
	"slug": "renner-rsd-b-11-0-st-300118",
	"brand": "RENNER",
	"model": "RSD-B 11.0 ST",
	"mpn": "300118",
	"variant": {
		"familyId": "renner-rsd-b-11-0-st",
		"label": "Cuve publiée : 270 L ; 7,5 bar",
		"distinguishingAttributes": {
			"reference": "300118",
			"configuration": "Cuve publiée : 270 L",
			"pression": "7,5 bar",
			"cuve": "270 L"
		}
	},
	"tankLiters": 270,
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
	"weightKg": 304,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/renner-rsd-b-11-0-st-300118.webp",
		"alt": "Repères techniques : RENNER RSD-B 11.0 ST, article 300118",
		"sourceUrl": "https://www.renner-kompressoren.de/fileadmin/DATA/Medien/Newsletter/Deutsch/03_2026/RENNER_-_Produktkatalog_-_2026_-_DE_3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "Cuve publiée : 270 L",
			"evidenceIds": [
				"october-renner-2026-p16"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "816 × 800 × 1747 mm",
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
		"overview": "RENNER RSD-B 11.0 ST, article 300118. Cuve publiée : 270 L. Débit restitué déclaré : 1 570 L/min à 7,5 bar.",
		"verifiedFacts": [
			"Dimensions publiées : 816 × 800 × 1747 mm.",
			"Masse de cette configuration : 304 kg ; puissance moteur : 11 kW.",
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
