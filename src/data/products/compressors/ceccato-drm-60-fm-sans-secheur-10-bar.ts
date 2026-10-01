const product = {
	"id": "ceccato-drm-60-fm-sans-secheur-10-bar",
	"slug": "ceccato-drm-60-fm-sans-secheur-10-bar",
	"brand": "Ceccato",
	"model": "DRM 60",
	"variant": {
		"familyId": "ceccato-drm-60",
		"label": "FM sans sécheur ; 10 bar",
		"distinguishingAttributes": {
			"configuration": "FM sans sécheur",
			"pression": "10 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 9.5,
			"litersPerMinute": 6666.667
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 45,
	"weightKg": 629,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ceccato-drm-60-fm-sans-secheur-10-bar.webp",
		"alt": "Repères techniques : Ceccato DRM 60, FM sans sécheur, 10 bar",
		"sourceUrl": "https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/drm/drm-40-60-hp/CECCATO-DRM-40-60-FR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "FM sans sécheur",
			"evidenceIds": [
				"october-b-ceccato-drm-40-60-hp-pdf-p5"
			]
		},
		{
			"label": "Pression de mesure du FAD",
			"value": "9,5 bar ; maximum de cette configuration : 10 bar",
			"evidenceIds": [
				"october-b-ceccato-drm-40-60-hp-pdf-p5"
			]
		},
		{
			"label": "FAD publié dans son unité originale",
			"value": "400 m3/h",
			"evidenceIds": [
				"october-b-ceccato-drm-40-60-hp-pdf-p5"
			]
		}
	],
	"editorial": {
		"overview": "Ceccato DRM 60, FM sans sécheur, 10 bar. Débit restitué déclaré : 6 666,667 L/min à 9,5 bar. Puissance moteur : 45 kW ; masse : 629 kg.",
		"verifiedFacts": [
			"FAD et pression de référence associés à la configuration exacte du tableau fabricant.",
			"Cuve intégrée : 0 L ; le volume d’un réservoir externe n’est pas supposé.",
			"Fonctionnement continu prévu dans la documentation de la série, sous les conditions d’installation et d’entretien du fabricant."
		],
		"limitations": [
			"Un seul point FAD publié pour cette configuration de pression ; aucune extrapolation vers une pression supérieure.",
			"Version du catalogue identifiée, sans numéro d’article artificiel. La disponibilité, la tension électrique et les options livrées doivent être confirmées sur le devis."
		]
	},
	"evidence": [
		{
			"id": "october-b-ceccato-drm-40-60-hp-pdf-p5",
			"sourceUrl": "https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/drm/drm-40-60-hp/CECCATO-DRM-40-60-FR.pdf#page=5",
			"sourceLabel": "Ceccato, DRM 40–60 / IVR, brochure française, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 9ac976e1f70ee343231aa9eed25f692cbe3b1ae6e1626189c5384432a97f0ec0. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october-b-ceccato-drm-40-60-hp",
			"sourceUrl": "https://www.ceccato.com/fr-international/air-compressor-products/rotary-screw-compressor/fixed-speed/drm-40-60-hp",
			"sourceLabel": "Ceccato, présentation DRM 40–60",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 090162764f48e41b23a714d8eb46c914e2ab605b831acb4c6fb6adddf0bc8cd2. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october-b-ceccato-drm-40-60-hp-pdf-p5"
		],
		"maxPressureBar": [
			"october-b-ceccato-drm-40-60-hp-pdf-p5"
		],
		"fadCurve": [
			"october-b-ceccato-drm-40-60-hp-pdf-p5"
		],
		"powerKw": [
			"october-b-ceccato-drm-40-60-hp-pdf-p5"
		],
		"weightKg": [
			"october-b-ceccato-drm-40-60-hp-pdf-p5"
		],
		"oilType": [
			"october-b-ceccato-drm-40-60-hp-pdf-p5"
		],
		"dutyCycle": [
			"october-b-ceccato-drm-40-60-hp"
		]
	},
	"notes": [
		"Conditions ISO 1217 du tableau source ; pression de référence distincte de la pression maximale."
	]
};

export default product;
