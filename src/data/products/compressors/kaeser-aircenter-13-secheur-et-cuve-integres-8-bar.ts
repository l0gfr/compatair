import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "kaeser-aircenter-13-secheur-et-cuve-integres-8-bar",
	"slug": "kaeser-aircenter-13-secheur-et-cuve-integres-8-bar",
	"brand": "KAESER",
	"model": "AIRCENTER 13",
	"variant": {
		"familyId": "kaeser-aircenter-13",
		"label": "sécheur et cuve intégrés ; 8 bar",
		"distinguishingAttributes": {
			"configuration": "sécheur et cuve intégrés",
			"pression": "8 bar",
			"cuve": "270 L"
		}
	},
	"tankLiters": 270,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 7.5,
			"litersPerMinute": 1320
		}
	],
	"dutyCycle": 1,
	"oilType": "unknown",
	"powerKw": 7.5,
	"weightKg": 440,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/kaeser-aircenter-13-secheur-et-cuve-integres-8-bar.webp",
		"alt": "Repères techniques : KAESER AIRCENTER 13, sécheur et cuve intégrés, 8 bar",
		"sourceUrl": "https://nl.kaeser.com/download.ashx?id=tcm:32-5920",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "sécheur et cuve intégrés",
			"evidenceIds": [
				"october-b-kaeser-sm-p8"
			]
		},
		{
			"label": "Pression de mesure du FAD",
			"value": "7,5 bar ; maximum de cette configuration : 8 bar",
			"evidenceIds": [
				"october-b-kaeser-sm-p8"
			]
		},
		{
			"label": "FAD publié dans son unité originale",
			"value": "1,32 m3/min",
			"evidenceIds": [
				"october-b-kaeser-sm-p8"
			]
		},
		{
			"label": "Dimensions (largeur × profondeur × hauteur)",
			"value": "630 × 1220 × 1720 mm",
			"evidenceIds": [
				"october-b-kaeser-sm-p8"
			]
		}
	],
	"editorial": {
		"overview": "La configuration AIRCENTER 13 de 8 bar publie 1320 L/min à 7,5 bar, tandis que la configuration 15 bar publie 850 L/min à 13 bar. Les deux stations associent une cuve de 270 L, un moteur de 7,5 kW et le sécheur intégré, pour une masse publiée de 440 kg. Le choix de version part donc de la pression requise au poste et des pertes du réseau ; chaque point de débit reste attaché à sa configuration constructeur. La tension et les options effectivement livrées sont à confirmer sur le devis.",
		"verifiedFacts": [
			"FAD et pression de référence associés à la configuration exacte du tableau fabricant.",
			"Cuve intégrée : 270 L ; le volume d’un réservoir externe n’est pas supposé.",
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
