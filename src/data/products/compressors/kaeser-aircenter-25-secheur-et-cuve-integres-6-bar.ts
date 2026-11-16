import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "kaeser-aircenter-25-secheur-et-cuve-integres-6-bar",
	"slug": "kaeser-aircenter-25-secheur-et-cuve-integres-6-bar",
	"brand": "KAESER",
	"model": "AIRCENTER 25",
	"variant": {
		"familyId": "kaeser-aircenter-25",
		"label": "sécheur et cuve intégrés ; 6 bar",
		"distinguishingAttributes": {
			"configuration": "sécheur et cuve intégrés",
			"pression": "6 bar",
			"cuve": "350 L"
		}
	},
	"tankLiters": 350,
	"maxPressureBar": 6,
	"fadCurve": [
		{
			"pressureBar": 6,
			"litersPerMinute": 2690
		}
	],
	"oilType": "unknown",
	"powerKw": 15,
	"weightKg": 587,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/kaeser-aircenter-25-secheur-et-cuve-integres-6-bar-technical-20261116-followup.svg",
		"alt": "Repères techniques : KAESER AIRCENTER 25, sécheur et cuve intégrés, 6 bar",
		"sourceUrl": "https://nl.kaeser.com/download.ashx?id=tcm:32-5921",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "sécheur et cuve intégrés",
			"evidenceIds": [
				"october-b-kaeser-sk-p8"
			]
		},
		{
			"label": "Pression de mesure du FAD",
			"value": "6 bar ; maximum de cette configuration : 6 bar",
			"evidenceIds": [
				"october-b-kaeser-sk-p8"
			]
		},
		{
			"label": "FAD publié dans son unité originale",
			"value": "2,69 m3/min",
			"evidenceIds": [
				"october-b-kaeser-sk-p8"
			]
		},
		{
			"label": "Dimensions (largeur × profondeur × hauteur)",
			"value": "750 × 1335 × 1880 mm",
			"evidenceIds": [
				"october-b-kaeser-sk-p8"
			]
		}
	],
	"editorial": {
		"overview": "L’AIRCENTER 25 fixe de cette configuration s’arrête à 6 bar et publie 2,69 m³/min à cette même pression. Il réunit moteur 15 kW, sécheur ABT 25 et cuve 350 L dans 750 × 1 335 × 1 880 mm. Les versions voisines autorisent 11 ou 15 bar, avec des points de débit à 10 ou 13 bar : leur pression ne doit pas être attribuée à cette version 6 bar. Le taux de marche du groupe reste inconnu.",
		"verifiedFacts": [
			"FAD et pression de référence associés à la configuration exacte du tableau fabricant.",
			"Cuve intégrée : 350 L ; le volume d’un réservoir externe n’est pas supposé."
		],
		"limitations": [
			"Un seul point FAD publié pour cette configuration de pression ; aucune extrapolation vers une pression supérieure.",
			"Version du catalogue identifiée, sans numéro d’article artificiel. La disponibilité, la tension électrique et les options livrées doivent être confirmées sur le devis.",
			"Le fluide de refroidissement ne suffit pas à établir le type de lubrification ; aucune qualité d’air garantie.",
			"Le débit publié est conservé. La déclaration générale de service de la série ne fournit pas le taux de marche du groupe complet exact ; ce taux reste indéterminé."
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
			"id": "review:2026-11-16-technical:kaeser-aircenter-25-secheur-et-cuve-integres-6-bar:0",
			"sourceUrl": "https://nl.kaeser.com/download.ashx?id=tcm:32-5921",
			"sourceLabel": "KAESER, document constructeur vérifié le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "L’AIRCENTER 25 fixe de cette configuration s’arrête à 6 bar et publie 2,69 m³/min à cette même pression. Il réunit moteur 15 kW, sécheur ABT 25 et cuve 350 L dans 750 × 1 335 × 1 880 mm. Les versions voisines autorisent 11 ou 15 bar, avec des points de débit à 10 ou 13 bar : leur pression ne doit pas être attribuée à cette version 6 bar. Le taux de marche du groupe reste inconnu. GET complet SHA-256 e7f1e0bfdf990a0abe341a0750f48a851c4245bca66e72802e90d35c3fe4b75e. Pages PDF lues : 8."
		},
		{
			"id": "review:2026-11-16-technical:kaeser-aircenter-25-secheur-et-cuve-integres-6-bar:1",
			"sourceUrl": "https://us.kaeser.com/compressed-air-resources/applications/automotive-services/",
			"sourceLabel": "KAESER, document constructeur vérifié le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "L’AIRCENTER 25 fixe de cette configuration s’arrête à 6 bar et publie 2,69 m³/min à cette même pression. Il réunit moteur 15 kW, sécheur ABT 25 et cuve 350 L dans 750 × 1 335 × 1 880 mm. Les versions voisines autorisent 11 ou 15 bar, avec des points de débit à 10 ou 13 bar : leur pression ne doit pas être attribuée à cette version 6 bar. Le taux de marche du groupe reste inconnu. GET complet SHA-256 bbefa209a94f83d07dbada3e3c5b6109f3df85b40db53dca306a0a43e58e5797. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
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
		]
	},
	"notes": [
		"Conditions ISO 1217 du tableau source ; pression de référence distincte de la pression maximale."
	]
};

export default product;
