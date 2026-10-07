import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "renner-rsd-b-7-5-300181",
	"slug": "renner-rsd-b-7-5-300181",
	"brand": "RENNER",
	"model": "RSD-B 7.5",
	"mpn": "300181",
	"variant": {
		"familyId": "renner-rsd-b-7-5",
		"label": "Cuve publiée : 4 x 90 L ; 10 bar",
		"distinguishingAttributes": {
			"reference": "300181",
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
			"litersPerMinute": 1020
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 7.5,
	"weightKg": 368,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/renner-rsd-b-7-5-300181.webp",
		"alt": "Repères techniques : RENNER RSD-B 7.5, article 300181",
		"sourceUrl": "https://www.renner-kompressoren.de/fileadmin/DATA/Medien/Newsletter/Deutsch/03_2026/RENNER_-_Produktkatalog_-_2026_-_DE_3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "Cuve publiée : 4 x 90 L",
			"evidenceIds": [
				"october-renner-2026-p14"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "982 × 755 × 1627 mm",
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
		"overview": "RENNER RSD-B 7.5, article 300181. Cuve publiée : 4 x 90 L. Débit restitué déclaré : 1 020 L/min à 10 bar.",
		"verifiedFacts": [
			"Dimensions publiées : 982 × 755 × 1627 mm.",
			"Masse de cette configuration : 368 kg ; puissance moteur : 7,5 kW.",
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
