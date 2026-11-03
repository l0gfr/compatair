import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "kaeser-aircenter-22-secheur-et-cuve-integres-15-bar",
	"slug": "kaeser-aircenter-22-secheur-et-cuve-integres-15-bar",
	"brand": "KAESER",
	"model": "AIRCENTER 22",
	"variant": {
		"familyId": "kaeser-aircenter-22",
		"label": "sécheur et cuve intégrés ; 15 bar",
		"distinguishingAttributes": {
			"configuration": "sécheur et cuve intégrés",
			"pression": "15 bar",
			"cuve": "350 L"
		}
	},
	"tankLiters": 350,
	"maxPressureBar": 15,
	"fadCurve": [
		{
			"pressureBar": 13,
			"litersPerMinute": 1310
		}
	],
	"oilType": "unknown",
	"powerKw": 11,
	"weightKg": 579,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/kaeser-aircenter-22-secheur-et-cuve-integres-15-bar.webp",
		"alt": "Repères techniques : KAESER AIRCENTER 22, sécheur et cuve intégrés, 15 bar",
		"sourceUrl": "https://nl.kaeser.com/download.ashx?id=tcm:32-5921",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "AIRCENTER 22 fixe, maximum 15 bar",
			"evidenceIds": [
				"kaeser-aircenter-22-secheur-et-cuve-integres-15-bar-reserved-20261103-1"
			]
		},
		{
			"label": "Cuve et sécheur",
			"value": "350 L, ABT 25",
			"evidenceIds": [
				"kaeser-aircenter-22-secheur-et-cuve-integres-15-bar-reserved-20261103-1"
			]
		},
		{
			"label": "FAD à 13 bar",
			"value": "1,31 m³/min",
			"evidenceIds": [
				"kaeser-aircenter-22-secheur-et-cuve-integres-15-bar-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance moteur",
			"value": "11 kW",
			"evidenceIds": [
				"kaeser-aircenter-22-secheur-et-cuve-integres-15-bar-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "579 kg",
			"evidenceIds": [
				"kaeser-aircenter-22-secheur-et-cuve-integres-15-bar-reserved-20261103-1"
			]
		},
		{
			"label": "Dimensions B×D×H",
			"value": "750 × 1 335 × 1 880 mm",
			"evidenceIds": [
				"kaeser-aircenter-22-secheur-et-cuve-integres-15-bar-reserved-20261103-1"
			]
		}
	],
	"editorial": {
		"overview": "KAESER AIRCENTER 22. La AIRCENTER 22 fixe associe cuve 350 L et sécheur ABT 25 pour 579 kg. Elle donne 1,68 m³/min à 10 bar en version 11 bar et 1,31 m³/min à 13 bar en version 15 bar. La AIRCENTER 22 SFC régulée pèse 596 kg et possède une plage de débit distincte ; le taux de marche ne provient pas d’une page automobile générale.",
		"verifiedFacts": [
			"Configuration : AIRCENTER 22 fixe, maximum 15 bar.",
			"Cuve et sécheur : 350 L, ABT 25.",
			"FAD à 13 bar : 1,31 m³/min.",
			"Puissance moteur : 11 kW.",
			"Masse : 579 kg.",
			"Dimensions B×D×H : 750 × 1 335 × 1 880 mm."
		],
		"limitations": [
			"Mesure du groupe selon ISO 1217:2009 annexes C/E ; entrée 1 bar absolu et 20 °C. Taux de marche numérique de cette révision non établi."
		]
	},
	"evidence": [
		{
			"id": "october-b-kaeser-sk-p8",
			"sourceUrl": "https://nl.kaeser.com/download.ashx?id=tcm:32-5921#page=8",
			"sourceLabel": "KAESER, brochure SK, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 e7f1e0bfdf990a0abe341a0750f48a851c4245bca66e72802e90d35c3fe4b75e. Données déclarées par le fabricant ; aucun essai physique CompatAir."
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
			"id": "kaeser-aircenter-22-secheur-et-cuve-integres-15-bar-reserved-20261103-1",
			"sourceUrl": "https://nl.kaeser.com/download.ashx?id=tcm:32-5921#page=8",
			"sourceLabel": "KAESER : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 e7f1e0bfdf990a0abe341a0750f48a851c4245bca66e72802e90d35c3fe4b75e. La AIRCENTER 22 fixe associe cuve 350 L et sécheur ABT 25 pour 579 kg. Elle donne 1,68 m³/min à 10 bar en version 11 bar et 1,31 m³/min à 13 bar en version 15 bar. La AIRCENTER 22 SFC régulée pèse 596 kg et possède une plage de débit distincte ; le taux de marche ne provient pas d’une page automobile générale."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october-b-kaeser-sk-p8"
		],
		"maxPressureBar": [
			"october-b-kaeser-sk-p8"
		],
		"fadCurve": [
			"october-b-kaeser-sk-p8"
		],
		"powerKw": [
			"october-b-kaeser-sk-p8"
		],
		"weightKg": [
			"october-b-kaeser-sk-p8"
		],
		"editorial": [
			"kaeser-aircenter-22-secheur-et-cuve-integres-15-bar-reserved-20261103-1"
		],
		"specifications": [
			"kaeser-aircenter-22-secheur-et-cuve-integres-15-bar-reserved-20261103-1"
		]
	},
	"notes": [
		"Conditions ISO 1217 du tableau source ; pression de référence distincte de la pression maximale."
	]
};

export default product;
