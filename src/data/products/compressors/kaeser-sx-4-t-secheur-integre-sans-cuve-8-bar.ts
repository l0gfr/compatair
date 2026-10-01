const product = {
	"id": "kaeser-sx-4-t-secheur-integre-sans-cuve-8-bar",
	"slug": "kaeser-sx-4-t-secheur-integre-sans-cuve-8-bar",
	"brand": "KAESER",
	"model": "SX 4 T",
	"variant": {
		"familyId": "kaeser-sx-4-t",
		"label": "sécheur intégré sans cuve ; 8 bar",
		"distinguishingAttributes": {
			"configuration": "sécheur intégré sans cuve",
			"pression": "8 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 7.5,
			"litersPerMinute": 450
		}
	],
	"dutyCycle": 1,
	"oilType": "unknown",
	"powerKw": 3,
	"weightKg": 185,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/kaeser-sx-4-t-secheur-integre-sans-cuve-8-bar.webp",
		"alt": "Repères techniques : KAESER SX 4 T, sécheur intégré sans cuve, 8 bar",
		"sourceUrl": "https://nl.kaeser.com/download.ashx?id=tcm:32-5919",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "sécheur intégré sans cuve",
			"evidenceIds": [
				"october-b-kaeser-sx-p8"
			]
		},
		{
			"label": "Pression de mesure du FAD",
			"value": "7,5 bar ; maximum de cette configuration : 8 bar",
			"evidenceIds": [
				"october-b-kaeser-sx-p8"
			]
		},
		{
			"label": "FAD publié dans son unité originale",
			"value": "0,45 m3/min",
			"evidenceIds": [
				"october-b-kaeser-sx-p8"
			]
		},
		{
			"label": "Dimensions (largeur × profondeur × hauteur)",
			"value": "590 × 905 × 970 mm",
			"evidenceIds": [
				"october-b-kaeser-sx-p8"
			]
		}
	],
	"editorial": {
		"overview": "KAESER SX 4 T, sécheur intégré sans cuve, 8 bar. Débit restitué déclaré : 450 L/min à 7,5 bar. Puissance moteur : 3 kW ; masse : 185 kg.",
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
			"id": "october-b-kaeser-sx-p8",
			"sourceUrl": "https://nl.kaeser.com/download.ashx?id=tcm:32-5919#page=8",
			"sourceLabel": "KAESER, brochure SX, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 1c595545d11b0d2780a857ed63958320bf5e1bccb5e8e1852b6816dca5c9f0f3. Données déclarées par le fabricant ; aucun essai physique CompatAir."
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
			"october-b-kaeser-sx-p8"
		],
		"maxPressureBar": [
			"october-b-kaeser-sx-p8"
		],
		"fadCurve": [
			"october-b-kaeser-sx-p8"
		],
		"powerKw": [
			"october-b-kaeser-sx-p8"
		],
		"weightKg": [
			"october-b-kaeser-sx-p8"
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
