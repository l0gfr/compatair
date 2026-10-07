import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "kaeser-sm-13-base-sans-cuve-15-bar",
	"slug": "kaeser-sm-13-base-sans-cuve-15-bar",
	"brand": "KAESER",
	"model": "SM 13",
	"variant": {
		"familyId": "kaeser-sm-13",
		"label": "base sans cuve ; 15 bar",
		"distinguishingAttributes": {
			"configuration": "base sans cuve",
			"pression": "15 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 15,
	"fadCurve": [
		{
			"pressureBar": 13,
			"litersPerMinute": 850
		}
	],
	"dutyCycle": 1,
	"oilType": "unknown",
	"powerKw": 7.5,
	"weightKg": 240,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/kaeser-sm-13-base-sans-cuve-15-bar.webp",
		"alt": "Repères techniques : KAESER SM 13, base sans cuve, 15 bar",
		"sourceUrl": "https://nl.kaeser.com/download.ashx?id=tcm:32-5920",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "base sans cuve",
			"evidenceIds": [
				"october-b-kaeser-sm-p8"
			]
		},
		{
			"label": "Pression de mesure du FAD",
			"value": "13 bar ; maximum de cette configuration : 15 bar",
			"evidenceIds": [
				"october-b-kaeser-sm-p8"
			]
		},
		{
			"label": "FAD publié dans son unité originale",
			"value": "0,85 m3/min",
			"evidenceIds": [
				"october-b-kaeser-sm-p8"
			]
		},
		{
			"label": "Dimensions (largeur × profondeur × hauteur)",
			"value": "630 × 790 × 1100 mm",
			"evidenceIds": [
				"october-b-kaeser-sm-p8"
			]
		}
	],
	"editorial": {
		"overview": "KAESER SM 13, base sans cuve, 15 bar. Débit restitué déclaré : 850 L/min à 13 bar. Puissance moteur : 7,5 kW ; masse : 240 kg.",
		"verifiedFacts": [
			"FAD et pression de référence associés à la configuration exacte du tableau fabricant.",
			"Cuve intégrée : 0 L ; le volume d’un réservoir externe n’est pas supposé.",
			"Fonctionnement continu prévu dans la documentation de la série, sous les conditions d’installation et d’entretien du fabricant."
		],
		"limitations": [
			"Un seul point FAD publié pour cette configuration de pression ; aucune extrapolation vers une pression supérieure.",
			"Version du catalogue identifiée, sans numéro d’article artificiel. La disponibilité, la tension électrique et les options livrées doivent être confirmées sur le devis.",
			"Le fluide de refroidissement ne suffit pas à établir le type de lubrification ; aucune qualité d’air garantie."
		]
	},
	"evidence": [
		{
			"id": "october-b-kaeser-sm-p8",
			"sourceUrl": "https://nl.kaeser.com/download.ashx?id=tcm:32-5920#page=8",
			"sourceLabel": "KAESER, brochure SM, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 7c4b96a5fb4ea4fb206655af4138d8a90096a61661823528c5f6bf282d66a6d5. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october-b-kaeser-duty",
			"sourceUrl": "https://us.kaeser.com/compressed-air-resources/applications/automotive-services/",
			"sourceLabel": "KAESER, applications atelier automobile, séries SX SM SK",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 3f5687777a06c60ed4f3918036cfb4edab945e750016d89b42305f3a2bc6b9fe. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october-b-kaeser-sm-p8"
		],
		"maxPressureBar": [
			"october-b-kaeser-sm-p8"
		],
		"fadCurve": [
			"october-b-kaeser-sm-p8"
		],
		"powerKw": [
			"october-b-kaeser-sm-p8"
		],
		"weightKg": [
			"october-b-kaeser-sm-p8"
		],
		"dutyCycle": [
			"october-b-kaeser-duty"
		]
	},
	"notes": [
		"Conditions ISO 1217 du tableau source ; pression de référence distincte de la pression maximale."
	]
};

export default product;
