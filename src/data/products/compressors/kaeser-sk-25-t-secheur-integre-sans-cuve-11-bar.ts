const product = {
	"id": "kaeser-sk-25-t-secheur-integre-sans-cuve-11-bar",
	"slug": "kaeser-sk-25-t-secheur-integre-sans-cuve-11-bar",
	"brand": "KAESER",
	"model": "SK 25 T",
	"variant": {
		"familyId": "kaeser-sk-25-t",
		"label": "sécheur intégré sans cuve ; 11 bar",
		"distinguishingAttributes": {
			"configuration": "sécheur intégré sans cuve",
			"pression": "11 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 11,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 2120
		}
	],
	"dutyCycle": 1,
	"oilType": "unknown",
	"powerKw": 15,
	"weightKg": 395,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/kaeser-sk-25-t-secheur-integre-sans-cuve-11-bar.webp",
		"alt": "Repères techniques : KAESER SK 25 T, sécheur intégré sans cuve, 11 bar",
		"sourceUrl": "https://nl.kaeser.com/download.ashx?id=tcm:32-5921",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "sécheur intégré sans cuve",
			"evidenceIds": [
				"october-b-kaeser-sk-p8"
			]
		},
		{
			"label": "Pression de mesure du FAD",
			"value": "10 bar ; maximum de cette configuration : 11 bar",
			"evidenceIds": [
				"october-b-kaeser-sk-p8"
			]
		},
		{
			"label": "FAD publié dans son unité originale",
			"value": "2,12 m3/min",
			"evidenceIds": [
				"october-b-kaeser-sk-p8"
			]
		},
		{
			"label": "Dimensions (largeur × profondeur × hauteur)",
			"value": "750 × 1240 × 1260 mm",
			"evidenceIds": [
				"october-b-kaeser-sk-p8"
			]
		}
	],
	"editorial": {
		"overview": "KAESER SK 25 T, sécheur intégré sans cuve, 11 bar. Débit restitué déclaré : 2 120 L/min à 10 bar. Puissance moteur : 15 kW ; masse : 395 kg.",
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
		"dutyCycle": [
			"october-b-kaeser-duty"
		]
	},
	"notes": [
		"Conditions ISO 1217 du tableau source ; pression de référence distincte de la pression maximale."
	]
};

export default product;
