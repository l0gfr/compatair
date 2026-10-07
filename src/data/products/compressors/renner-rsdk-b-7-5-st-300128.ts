import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "renner-rsdk-b-7-5-st-300128",
	"slug": "renner-rsdk-b-7-5-st-300128",
	"brand": "RENNER",
	"model": "RSDK-B 7.5 ST",
	"mpn": "300128",
	"variant": {
		"familyId": "renner-rsdk-b-7-5-st",
		"label": "Sécheur frigorifique intégré ; Cuve publiée : 270 L ; 7,5 bar",
		"distinguishingAttributes": {
			"reference": "300128",
			"configuration": "Sécheur frigorifique intégré ; Cuve publiée : 270 L",
			"pression": "7,5 bar",
			"cuve": "270 L"
		}
	},
	"tankLiters": 270,
	"maxPressureBar": 7.5,
	"fadCurve": [
		{
			"pressureBar": 7.5,
			"litersPerMinute": 1130
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 7.5,
	"weightKg": 325,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/renner-rsdk-b-7-5-st-300128.webp",
		"alt": "Repères techniques : RENNER RSDK-B 7.5 ST, article 300128",
		"sourceUrl": "https://www.renner-kompressoren.de/fileadmin/DATA/Medien/Newsletter/Deutsch/03_2026/RENNER_-_Produktkatalog_-_2026_-_DE_3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "Sécheur frigorifique intégré ; Cuve publiée : 270 L",
			"evidenceIds": [
				"october-renner-2026-p14"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "986 × 800 × 1760 mm",
			"evidenceIds": [
				"october-renner-2026-p14"
			]
		},
		{
			"label": "Condition du FAD",
			"value": "ISO 1217 annexe C ; débit de la colonne de pression de cet article",
			"evidenceIds": [
				"october-renner-2026-p14"
			]
		}
	],
	"editorial": {
		"overview": "RENNER RSDK-B 7.5 ST, article 300128. Sécheur frigorifique intégré ; Cuve publiée : 270 L. Débit restitué déclaré : 1 130 L/min à 7,5 bar.",
		"verifiedFacts": [
			"Dimensions publiées : 986 × 800 × 1760 mm.",
			"Masse de cette configuration : 325 kg ; puissance moteur : 7,5 kW.",
			"La page constructeur de cette série prévoit le fonctionnement continu, sous ses conditions d’installation et d’entretien."
		],
		"limitations": [
			"Le point FAD appartient à cette configuration et à sa pression de référence ; aucune courbe de fonctionnement supplémentaire n’est inventée.",
			"Disponibilité locale, alimentation électrique, dégagements d’entretien et qualité d’air au point d’usage à vérifier avant installation."
		]
	},
	"evidence": [
		{
			"id": "october-renner-2026-p14",
			"sourceUrl": "https://www.renner-kompressoren.de/fileadmin/DATA/Medien/Newsletter/Deutsch/03_2026/RENNER_-_Produktkatalog_-_2026_-_DE_3.pdf#page=14",
			"sourceLabel": "RENNER, catalogue produits 2026, page 14",
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
			"october-renner-2026-p14"
		],
		"maxPressureBar": [
			"october-renner-2026-p14"
		],
		"fadCurve": [
			"october-renner-2026-p14"
		],
		"powerKw": [
			"october-renner-2026-p14"
		],
		"weightKg": [
			"october-renner-2026-p14"
		],
		"mpn": [
			"october-renner-2026-p14"
		],
		"oilType": [
			"october-renner-2026-p14"
		],
		"dutyCycle": [
			"october-renner-rsb-duty"
		]
	},
	"notes": [
		"Tableau page 14 ; conditions ISO 1217 conservées. Aucun essai physique réalisé."
	]
};

export default product;
