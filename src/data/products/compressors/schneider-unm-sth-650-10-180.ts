const product = {
	"id": "schneider-unm-sth-650-10-180",
	"slug": "schneider-unm-sth-650-10-180",
	"brand": "Schneider",
	"model": "UNM STH 650-10-180",
	"mpn": "1121560024",
	"tankLiters": 180,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 9,
			"litersPerMinute": 520
		}
	],
	"intakeFlowLpm": 650,
	"oilType": "oil",
	"powerKw": 4,
	"weightKg": 175,
	"noiseDb": 83,
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/schneider-catalogue-2025-p53-0.webp",
		"alt": "Illustration de la gamme Schneider présentée p. 53",
		"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=53",
		"sourceLabel": "Illustration de gamme, catalogue officiel Schneider 2025, p. 53"
	},
	"editorial": {
		"overview": "UNM STH 650-10-180, référence 1121560024, associe une cuve de 180 L à un moteur de 4 kW. Le débit restitué publié est de 520 L/min à 9 bar.",
		"verifiedFacts": [
			"Pression publiée : 10 bar ; débit aspiré : 650 L/min, distinct du débit restitué.",
			"Poids publié : 175 kg ; dimensions : 1 200 × 800 × 1 240 mm.",
			"Cuve : 180 L ; puissance moteur : 4 kW ; rotation : 1 025 tr/min."
		],
		"limitations": [
			"Un seul point de débit restitué à 9 bar est documenté ; aucune courbe complète n’est inventée.",
			"Caractéristiques de l’édition 2025 du catalogue allemand, consultée le 25 septembre 2026. La disponibilité en France et la configuration livrée restent à confirmer.",
			"Illustration de gamme issue du catalogue : la cuve et les accessoires peuvent varier selon la référence.",
			"Le fabricant destine UniMaster aux besoins non permanents ; aucun taux de marche continu n’est supposé."
		]
	},
	"specifications": [
		{
			"label": "Dimensions largeur × profondeur × hauteur",
			"value": "1 200 × 800 × 1 240 mm",
			"evidenceIds": [
				"schneider-2025-1121560024"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1 025 tr/min",
			"evidenceIds": [
				"schneider-2025-1121560024"
			]
		},
		{
			"label": "Pression acoustique LpA à 1 m",
			"value": "83 dB(A)",
			"evidenceIds": [
				"schneider-2025-1121560024"
			]
		}
	],
	"evidence": [
		{
			"id": "schneider-2025-1121560024",
			"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=53",
			"sourceLabel": "Schneider airsystems, catalogue 2025, p. 53, réf. 1121560024",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Note 2 du tableau : débit maximal ISO 1217 à la pression indiquée moins 1 bar, soit 10 − 1 = 9 bar."
		},
		{
			"id": "schneider-unm-sth-lubrication",
			"sourceUrl": "https://j-kesselshop.cstatic.io/media/pdf/H11201757454f67a427e.pdf",
			"sourceLabel": "Schneider, notice originale UNM STH 650-10-180, entretien de la lubrification",
			"sourceType": "manual",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Source utilisée pour la lubrification seulement ; les autres caractéristiques proviennent du tableau du catalogue 2025."
		}
	],
	"fieldSources": {
		"mpn": [
			"schneider-2025-1121560024"
		],
		"tankLiters": [
			"schneider-2025-1121560024"
		],
		"maxPressureBar": [
			"schneider-2025-1121560024"
		],
		"fadCurve": [
			"schneider-2025-1121560024"
		],
		"intakeFlowLpm": [
			"schneider-2025-1121560024"
		],
		"powerKw": [
			"schneider-2025-1121560024"
		],
		"weightKg": [
			"schneider-2025-1121560024"
		],
		"noiseDb": [
			"schneider-2025-1121560024"
		],
		"oilType": [
			"schneider-unm-sth-lubrication"
		]
	},
	"notes": [
		"Les valeurs proviennent du fabricant et ne constituent pas une mesure physique réalisée par CompatAir.",
		"Source : catalogue 2025, page 53, référence 1121560024."
	]
};

export default product;
