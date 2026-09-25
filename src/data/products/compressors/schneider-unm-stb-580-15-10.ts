const product = {
	"id": "schneider-unm-stb-580-15-10",
	"slug": "schneider-unm-stb-580-15-10",
	"brand": "Schneider",
	"model": "UNM STB 580-15-10",
	"mpn": "1121580509",
	"tankLiters": 10,
	"maxPressureBar": 15,
	"fadCurve": [
		{
			"pressureBar": 14,
			"litersPerMinute": 470
		}
	],
	"intakeFlowLpm": 580,
	"oilType": "oil",
	"powerKw": 4,
	"weightKg": 94,
	"noiseDb": 78,
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/schneider-catalogue-2025-p52-0.webp",
		"alt": "Illustration de la gamme Schneider présentée p. 52",
		"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=52",
		"sourceLabel": "Illustration de gamme, catalogue officiel Schneider 2025, p. 52"
	},
	"editorial": {
		"overview": "UNM STB 580-15-10, référence 1121580509, associe une cuve de 10 L à un moteur de 4 kW. Le débit restitué publié est de 470 L/min à 14 bar. Unité d’appoint destinée à étendre un réseau d’air comprimé existant.",
		"verifiedFacts": [
			"Pression publiée : 15 bar ; débit aspiré : 580 L/min, distinct du débit restitué.",
			"Poids publié : 94 kg ; dimensions : 945 × 605 × 690 mm.",
			"Cuve : 10 L ; puissance moteur : 4 kW ; rotation : 915 tr/min.",
			"Unité d’appoint destinée à étendre un réseau d’air comprimé existant."
		],
		"limitations": [
			"Un seul point de débit restitué à 14 bar est documenté ; aucune courbe complète n’est inventée.",
			"Caractéristiques de l’édition 2025 du catalogue allemand, consultée le 25 septembre 2026. La disponibilité en France et la configuration livrée restent à confirmer.",
			"Illustration de gamme issue du catalogue : la cuve et les accessoires peuvent varier selon la référence.",
			"Le fabricant destine UniMaster aux besoins non permanents ; aucun taux de marche continu n’est supposé."
		]
	},
	"specifications": [
		{
			"label": "Dimensions largeur × profondeur × hauteur",
			"value": "945 × 605 × 690 mm",
			"evidenceIds": [
				"schneider-2025-1121580509"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "915 tr/min",
			"evidenceIds": [
				"schneider-2025-1121580509"
			]
		},
		{
			"label": "Pression acoustique LpA à 1 m",
			"value": "78 dB(A)",
			"evidenceIds": [
				"schneider-2025-1121580509"
			]
		},
		{
			"label": "Équipement de cette version",
			"value": "Unité d’appoint destinée à étendre un réseau d’air comprimé existant.",
			"evidenceIds": [
				"schneider-2025-1121580509"
			]
		}
	],
	"evidence": [
		{
			"id": "schneider-2025-1121580509",
			"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=52",
			"sourceLabel": "Schneider airsystems, catalogue 2025, p. 52, réf. 1121580509",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Note 2 du tableau : débit maximal ISO 1217 à la pression indiquée moins 1 bar, soit 15 − 1 = 14 bar."
		},
		{
			"id": "schneider-unm-stb-lubrication",
			"sourceUrl": "https://shop.schneider-airsystems.com/en-GB/products/1121580510/unm-stb-660-10-10",
			"sourceLabel": "Schneider, gamme UNM STB, lubrification à huile",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Source utilisée pour la lubrification seulement ; les autres caractéristiques proviennent du tableau du catalogue 2025."
		}
	],
	"fieldSources": {
		"mpn": [
			"schneider-2025-1121580509"
		],
		"tankLiters": [
			"schneider-2025-1121580509"
		],
		"maxPressureBar": [
			"schneider-2025-1121580509"
		],
		"fadCurve": [
			"schneider-2025-1121580509"
		],
		"intakeFlowLpm": [
			"schneider-2025-1121580509"
		],
		"powerKw": [
			"schneider-2025-1121580509"
		],
		"weightKg": [
			"schneider-2025-1121580509"
		],
		"noiseDb": [
			"schneider-2025-1121580509"
		],
		"oilType": [
			"schneider-unm-stb-lubrication"
		]
	},
	"notes": [
		"Les valeurs proviennent du fabricant et ne constituent pas une mesure physique réalisée par CompatAir.",
		"Source : catalogue 2025, page 52, référence 1121580509."
	]
};

export default product;
