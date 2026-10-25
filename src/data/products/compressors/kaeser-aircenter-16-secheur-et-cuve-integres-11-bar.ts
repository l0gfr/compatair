import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "kaeser-aircenter-16-secheur-et-cuve-integres-11-bar",
	"slug": "kaeser-aircenter-16-secheur-et-cuve-integres-11-bar",
	"brand": "KAESER",
	"model": "AIRCENTER 16",
	"variant": {
		"familyId": "kaeser-aircenter-16",
		"label": "sécheur et cuve intégrés ; 11 bar",
		"distinguishingAttributes": {
			"configuration": "sécheur et cuve intégrés",
			"pression": "11 bar",
			"cuve": "270 L"
		}
	},
	"tankLiters": 270,
	"maxPressureBar": 11,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 1360
		}
	],
	"oilType": "unknown",
	"powerKw": 9,
	"weightKg": 440,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/kaeser-aircenter-16-secheur-et-cuve-integres-11-bar.webp",
		"alt": "Repères techniques : KAESER AIRCENTER 16, sécheur et cuve intégrés, 11 bar",
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
			"value": "10 bar ; maximum de cette configuration : 11 bar",
			"evidenceIds": [
				"october-b-kaeser-sm-p8"
			]
		},
		{
			"label": "FAD publié dans son unité originale",
			"value": "1,36 m3/min",
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
		},
		{
			"label": "Comparaison documentée et limite de choix",
			"value": "Séparer pression de service/maximum et versions de pression, puis éviter une garantie de service continu dérivée du sécheur ou du marketing général.",
			"evidenceIds": [
				"review-20261025-s089-p7",
				"review-20261025-s089-p8",
				"review-20261025-s090"
			]
		}
	],
	"editorial": {
		"overview": "L’AIRCENTER 16 avec cuve 270 L et sécheur publie 1,36 m³/min à 10 bar, avec un maximum de 11 bar. La version à maximum 15 bar annonce 1,09 m³/min à 13 bar ; les deux lignes donnent 9 kW et 440 kg. Le choix d’une plage de pression supérieure ne conserve donc pas le débit 1,36 m³/min. Ces lignes décrivent des configurations distinctes, et non deux points d’une courbe unique.",
		"verifiedFacts": [
			"FAD et pression de référence associés à la configuration exacte du tableau fabricant.",
			"Cuve intégrée : 270 L ; le volume d’un réservoir externe n’est pas supposé.",
			"Taux de marche du groupe AIRCENTER 16 non qualifié dans les passages retenus."
		],
		"limitations": [
			"Le débit 1,36 m³/min est mesuré à 10 bar pour le groupe complet selon ISO 1217, annexesC/E ; le maximum 11 bar ne remplace pas la pression de mesure.",
			"La commande en modecontinu et la phrase relative au fonctionnement continu du sécheur ne constituent pas un taux de marche 100 % qualifié pour l’AIRCENTER 16 complet. La page générale cite notammentSX/SM/SK sans qualification exacte de cette station.",
			"Le taux de marche reste non documenté pour le calcul. Aucun FAD n’est extrapolé au-delà du point publié ; alimentation et équipements du devis restent à vérifier."
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
		},
		{
			"id": "review-20261025-s089-p7",
			"sourceUrl": "https://nl.kaeser.com/download.ashx?id=tcm:32-5920#page=7",
			"sourceLabel": "KAESER, relecture primaire du 25 octobre 2026, s089, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 7c4b96a5fb4ea4fb206655af4138d8a90096a61661823528c5f6bf282d66a6d5. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s089-p8",
			"sourceUrl": "https://nl.kaeser.com/download.ashx?id=tcm:32-5920#page=8",
			"sourceLabel": "KAESER, relecture primaire du 25 octobre 2026, s089, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 7c4b96a5fb4ea4fb206655af4138d8a90096a61661823528c5f6bf282d66a6d5. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s090",
			"sourceUrl": "https://us.kaeser.com/compressed-air-resources/applications/automotive-services/",
			"sourceLabel": "KAESER, relecture primaire du 25 octobre 2026, s090",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 48aa3c93eb7964f8930dc04e033190429df94b6ce68eff9126d840c73208506a. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
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
		]
	},
	"notes": [
		"Conditions ISO 1217 du tableau source ; pression de référence distincte de la pression maximale."
	]
};

export default product;
