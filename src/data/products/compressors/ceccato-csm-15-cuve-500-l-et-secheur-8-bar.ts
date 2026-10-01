const product = {
	"id": "ceccato-csm-15-cuve-500-l-et-secheur-8-bar",
	"slug": "ceccato-csm-15-cuve-500-l-et-secheur-8-bar",
	"brand": "Ceccato",
	"model": "CSM 15",
	"variant": {
		"familyId": "ceccato-csm-15",
		"label": "cuve 500 L et sécheur ; 8 bar",
		"distinguishingAttributes": {
			"configuration": "cuve 500 L et sécheur",
			"pression": "8 bar",
			"cuve": "500 L"
		}
	},
	"tankLiters": 500,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 7.5,
			"litersPerMinute": 1620
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 11,
	"weightKg": 315,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ceccato-csm-15-cuve-500-l-et-secheur-8-bar.webp",
		"alt": "Repères techniques : Ceccato CSM 15, cuve 500 L et sécheur, 8 bar",
		"sourceUrl": "https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/csm-from-5-hp-on/csm-7-5-20-hp-leaflet/Ceccato-CSM-7-5-20-HP-FR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "cuve 500 L et sécheur",
			"evidenceIds": [
				"october-b-ceccato-csm-7-5-20-hp-pdf-p5"
			]
		},
		{
			"label": "Pression de mesure du FAD",
			"value": "7,5 bar ; maximum de cette configuration : 8 bar",
			"evidenceIds": [
				"october-b-ceccato-csm-7-5-20-hp-pdf-p5"
			]
		},
		{
			"label": "FAD publié dans son unité originale",
			"value": "27 L/s",
			"evidenceIds": [
				"october-b-ceccato-csm-7-5-20-hp-pdf-p5"
			]
		},
		{
			"label": "Dimensions (longueur × largeur × hauteur)",
			"value": "1935 × 645 × 1470 mm",
			"evidenceIds": [
				"october-b-ceccato-csm-7-5-20-hp-pdf-p5"
			]
		}
	],
	"editorial": {
		"overview": "Ceccato CSM 15, cuve 500 L et sécheur, 8 bar. Débit restitué déclaré : 1 620 L/min à 7,5 bar. Puissance moteur : 11 kW ; masse : 315 kg.",
		"verifiedFacts": [
			"FAD et pression de référence associés à la configuration exacte du tableau fabricant.",
			"Cuve intégrée : 500 L ; le volume d’un réservoir externe n’est pas supposé.",
			"Fonctionnement continu prévu dans la documentation de la série, sous les conditions d’installation et d’entretien du fabricant."
		],
		"limitations": [
			"Un seul point FAD publié pour cette configuration de pression ; aucune extrapolation vers une pression supérieure.",
			"Version du catalogue identifiée, sans numéro d’article artificiel. La disponibilité, la tension électrique et les options livrées doivent être confirmées sur le devis."
		]
	},
	"evidence": [
		{
			"id": "october-b-ceccato-csm-7-5-20-hp-pdf-p5",
			"sourceUrl": "https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/csm-from-5-hp-on/csm-7-5-20-hp-leaflet/Ceccato-CSM-7-5-20-HP-FR.pdf#page=5",
			"sourceLabel": "Ceccato, CSM 7,5–20, brochure française, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 7e44a0043bb978c2dc52381d49f60918e6638a6ba495056e2ffe45de90f21df7. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october-b-ceccato-csm-7-5-20-hp-pdf-p3",
			"sourceUrl": "https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/csm-from-5-hp-on/csm-7-5-20-hp-leaflet/Ceccato-CSM-7-5-20-HP-FR.pdf#page=3",
			"sourceLabel": "Ceccato, CSM 7,5–20, brochure française, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 7e44a0043bb978c2dc52381d49f60918e6638a6ba495056e2ffe45de90f21df7. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october-b-ceccato-csm-7-5-20-hp-pdf-p5"
		],
		"maxPressureBar": [
			"october-b-ceccato-csm-7-5-20-hp-pdf-p5"
		],
		"fadCurve": [
			"october-b-ceccato-csm-7-5-20-hp-pdf-p5"
		],
		"powerKw": [
			"october-b-ceccato-csm-7-5-20-hp-pdf-p5"
		],
		"weightKg": [
			"october-b-ceccato-csm-7-5-20-hp-pdf-p5"
		],
		"oilType": [
			"october-b-ceccato-csm-7-5-20-hp-pdf-p5"
		],
		"dutyCycle": [
			"october-b-ceccato-csm-7-5-20-hp-pdf-p3"
		]
	},
	"notes": [
		"Conditions ISO 1217 du tableau source ; pression de référence distincte de la pression maximale."
	]
};

export default product;
