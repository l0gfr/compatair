const product = {
	"id": "schneider-unm-720-8-90-d-clean",
	"slug": "schneider-unm-720-8-90-d-clean",
	"brand": "Schneider",
	"model": "UNM 720-8-90 D Clean",
	"mpn": "DGKH362000",
	"tankLiters": 90,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 500
		}
	],
	"intakeFlowLpm": 720,
	"oilType": "oil-free",
	"powerKw": 4.4,
	"weightKg": 113,
	"noiseDb": 69,
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/schneider-catalogue-2025-p71-0.webp",
		"alt": "Illustration de la gamme Schneider présentée p. 71",
		"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=71",
		"sourceLabel": "Illustration de gamme, catalogue officiel Schneider 2025, p. 71"
	},
	"editorial": {
		"overview": "UNM 720-8-90 D Clean, référence DGKH362000, associe une cuve de 90 L à un moteur de 4,4 kW. Le débit restitué publié est de 500 L/min à 5 bar.",
		"verifiedFacts": [
			"Pression publiée : 8 bar ; débit aspiré : 720 L/min, distinct du débit restitué.",
			"Poids publié : 113 kg ; dimensions : 1 100 × 600 × 820 mm.",
			"Cuve : 90 L ; puissance moteur : 4,4 kW ; rotation : 1 450 tr/min."
		],
		"limitations": [
			"Un seul point de débit restitué à 5 bar est documenté ; aucune courbe complète n’est inventée.",
			"Caractéristiques de l’édition 2025 du catalogue allemand, consultée le 25 septembre 2026. La disponibilité en France et la configuration livrée restent à confirmer.",
			"Illustration de gamme issue du catalogue : la cuve et les accessoires peuvent varier selon la référence.",
			"Le débit publié à 5 bar ne permet pas de conclure pour un outil exigeant 6,3 bar."
		]
	},
	"specifications": [
		{
			"label": "Dimensions largeur × profondeur × hauteur",
			"value": "1 100 × 600 × 820 mm",
			"evidenceIds": [
				"schneider-2025-dgkh362000"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1 450 tr/min",
			"evidenceIds": [
				"schneider-2025-dgkh362000"
			]
		},
		{
			"label": "Pression acoustique LpA à 1 m",
			"value": "69 dB(A)",
			"evidenceIds": [
				"schneider-2025-dgkh362000"
			]
		}
	],
	"evidence": [
		{
			"id": "schneider-2025-dgkh362000",
			"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=71",
			"sourceLabel": "Schneider airsystems, catalogue 2025, p. 71, réf. DGKH362000",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Note de tableau : Liefermenge bei 5 bar. Débit livré à 5 bar."
		}
	],
	"fieldSources": {
		"mpn": [
			"schneider-2025-dgkh362000"
		],
		"tankLiters": [
			"schneider-2025-dgkh362000"
		],
		"maxPressureBar": [
			"schneider-2025-dgkh362000"
		],
		"fadCurve": [
			"schneider-2025-dgkh362000"
		],
		"intakeFlowLpm": [
			"schneider-2025-dgkh362000"
		],
		"powerKw": [
			"schneider-2025-dgkh362000"
		],
		"weightKg": [
			"schneider-2025-dgkh362000"
		],
		"noiseDb": [
			"schneider-2025-dgkh362000"
		],
		"oilType": [
			"schneider-2025-dgkh362000"
		],
		"voltage": [
			"schneider-2025-dgkh362000"
		],
		"dutyCycle": [
			"schneider-2025-dgkh362000"
		]
	},
	"notes": [
		"Les valeurs proviennent du fabricant et ne constituent pas une mesure physique réalisée par CompatAir.",
		"Source : catalogue 2025, page 71, référence DGKH362000."
	],
	"voltage": "400 V",
	"dutyCycle": 0.8
};

export default product;
