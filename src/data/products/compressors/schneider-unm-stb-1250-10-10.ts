const product = {
	"id": "schneider-unm-stb-1250-10-10",
	"slug": "schneider-unm-stb-1250-10-10",
	"brand": "Schneider",
	"model": "UNM STB 1250-10-10",
	"mpn": "1122030307",
	"tankLiters": 10,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 9,
			"litersPerMinute": 980
		}
	],
	"intakeFlowLpm": 1250,
	"oilType": "oil",
	"powerKw": 7.5,
	"weightKg": 170,
	"noiseDb": 84,
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/schneider-catalogue-2025-p52-0.webp",
		"alt": "Illustration de la gamme Schneider présentée p. 52",
		"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=52",
		"sourceLabel": "Illustration de gamme, catalogue officiel Schneider 2025, p. 52"
	},
	"editorial": {
		"overview": "UNM STB 1250-10-10, référence 1122030307, associe une cuve de 10 L à un moteur de 7,5 kW. Le débit restitué publié est de 980 L/min à 9 bar. Unité d’appoint destinée à étendre un réseau d’air comprimé existant.",
		"verifiedFacts": [
			"Pression publiée : 10 bar ; débit aspiré : 1 250 L/min, distinct du débit restitué.",
			"Poids publié : 170 kg ; dimensions : 1 005 × 650 × 770 mm.",
			"Cuve : 10 L ; puissance moteur : 7,5 kW ; rotation : 1 240 tr/min.",
			"Unité d’appoint destinée à étendre un réseau d’air comprimé existant."
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
			"value": "1 005 × 650 × 770 mm",
			"evidenceIds": [
				"schneider-2025-1122030307"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1 240 tr/min",
			"evidenceIds": [
				"schneider-2025-1122030307"
			]
		},
		{
			"label": "Pression acoustique LpA à 1 m",
			"value": "84 dB(A)",
			"evidenceIds": [
				"schneider-2025-1122030307"
			]
		},
		{
			"label": "Équipement de cette version",
			"value": "Unité d’appoint destinée à étendre un réseau d’air comprimé existant.",
			"evidenceIds": [
				"schneider-2025-1122030307"
			]
		}
	],
	"evidence": [
		{
			"id": "schneider-2025-1122030307",
			"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=52",
			"sourceLabel": "Schneider airsystems, catalogue 2025, p. 52, réf. 1122030307",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Note 2 du tableau : débit maximal ISO 1217 à la pression indiquée moins 1 bar, soit 10 − 1 = 9 bar."
		},
		{
			"id": "schneider-unm-stb-lubrication",
			"sourceUrl": "https://shop.schneider-airsystems.com/en-DE/products/1121580510/unm-stb-660-10-10",
			"sourceLabel": "Schneider, gamme UNM STB, lubrification à huile",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Source utilisée pour la lubrification seulement ; les autres caractéristiques proviennent du tableau du catalogue 2025."
		}
	],
	"fieldSources": {
		"mpn": [
			"schneider-2025-1122030307"
		],
		"tankLiters": [
			"schneider-2025-1122030307"
		],
		"maxPressureBar": [
			"schneider-2025-1122030307"
		],
		"fadCurve": [
			"schneider-2025-1122030307"
		],
		"intakeFlowLpm": [
			"schneider-2025-1122030307"
		],
		"powerKw": [
			"schneider-2025-1122030307"
		],
		"weightKg": [
			"schneider-2025-1122030307"
		],
		"noiseDb": [
			"schneider-2025-1122030307"
		],
		"oilType": [
			"schneider-unm-stb-lubrication"
		]
	},
	"notes": [
		"Les valeurs proviennent du fabricant et ne constituent pas une mesure physique réalisée par CompatAir.",
		"Source : catalogue 2025, page 52, référence 1122030307."
	]
};

export default product;
