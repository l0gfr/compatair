const product = {
	"id": "schneider-unm-stl-660-10-500",
	"slug": "schneider-unm-stl-660-10-500",
	"brand": "Schneider",
	"model": "UNM STL 660-10-500",
	"mpn": "1121580520",
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 9,
			"litersPerMinute": 520
		}
	],
	"intakeFlowLpm": 660,
	"oilType": "oil",
	"powerKw": 4,
	"weightKg": 228,
	"noiseDb": 78,
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/schneider-catalogue-2025-p50-0.webp",
		"alt": "Illustration de la gamme Schneider présentée p. 50",
		"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=50",
		"sourceLabel": "Illustration de gamme, catalogue officiel Schneider 2025, p. 50"
	},
	"editorial": {
		"overview": "UNM STL 660-10-500, référence 1121580520, associe une cuve de 500 L à un moteur de 4 kW. Le débit restitué publié est de 520 L/min à 9 bar.",
		"verifiedFacts": [
			"Pression publiée : 10 bar ; débit aspiré : 660 L/min, distinct du débit restitué.",
			"Poids publié : 228 kg ; dimensions : 1 950 × 625 × 1 305 mm.",
			"Cuve : 500 L ; puissance moteur : 4 kW ; rotation : 1 025 tr/min."
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
			"value": "1 950 × 625 × 1 305 mm",
			"evidenceIds": [
				"schneider-2025-1121580520"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1 025 tr/min",
			"evidenceIds": [
				"schneider-2025-1121580520"
			]
		},
		{
			"label": "Pression acoustique LpA à 1 m",
			"value": "78 dB(A)",
			"evidenceIds": [
				"schneider-2025-1121580520"
			]
		}
	],
	"evidence": [
		{
			"id": "schneider-2025-1121580520",
			"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=50",
			"sourceLabel": "Schneider airsystems, catalogue 2025, p. 50, réf. 1121580520",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Note 2 du tableau : débit maximal ISO 1217 à la pression indiquée moins 1 bar, soit 10 − 1 = 9 bar."
		},
		{
			"id": "schneider-unm-sts-stl-lubrication",
			"sourceUrl": "https://www.j-kesselshop.de/media/pdf/H863000_Betriebsanleitung_Schneider.pdf#page=14",
			"sourceLabel": "Schneider, notice originale UNM STS/STL, entretien de la lubrification, p. II/4",
			"sourceType": "manual",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Source utilisée pour la lubrification seulement ; les autres caractéristiques proviennent du tableau du catalogue 2025."
		}
	],
	"fieldSources": {
		"mpn": [
			"schneider-2025-1121580520"
		],
		"tankLiters": [
			"schneider-2025-1121580520"
		],
		"maxPressureBar": [
			"schneider-2025-1121580520"
		],
		"fadCurve": [
			"schneider-2025-1121580520"
		],
		"intakeFlowLpm": [
			"schneider-2025-1121580520"
		],
		"powerKw": [
			"schneider-2025-1121580520"
		],
		"weightKg": [
			"schneider-2025-1121580520"
		],
		"noiseDb": [
			"schneider-2025-1121580520"
		],
		"oilType": [
			"schneider-unm-sts-stl-lubrication"
		]
	},
	"notes": [
		"Les valeurs proviennent du fabricant et ne constituent pas une mesure physique réalisée par CompatAir.",
		"Source : catalogue 2025, page 50, référence 1121580520."
	]
};

export default product;
