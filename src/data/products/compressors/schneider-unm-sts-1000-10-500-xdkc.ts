const product = {
	"id": "schneider-unm-sts-1000-10-500-xdkc",
	"slug": "schneider-unm-sts-1000-10-500-xdkc",
	"brand": "Schneider",
	"model": "UNM STS 1000-10-500 XDKC",
	"mpn": "1121580525",
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 9,
			"litersPerMinute": 785
		}
	],
	"intakeFlowLpm": 1070,
	"oilType": "oil",
	"powerKw": 5.5,
	"weightKg": 286,
	"noiseDb": 82,
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/schneider-catalogue-2025-p48-0.webp",
		"alt": "Illustration de la gamme Schneider présentée p. 48",
		"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=48",
		"sourceLabel": "Illustration de gamme, catalogue officiel Schneider 2025, p. 48"
	},
	"editorial": {
		"overview": "UNM STS 1000-10-500 XDKC, référence 1121580525, associe une cuve de 500 L à un moteur de 5,5 kW. Le débit restitué publié est de 785 L/min à 9 bar. Démarreur étoile-triangle prémonté (version C). Sécheur frigorifique intégré.",
		"verifiedFacts": [
			"Pression publiée : 10 bar ; débit aspiré : 1 070 L/min, distinct du débit restitué.",
			"Poids publié : 286 kg ; dimensions : 1 100 × 850 × 1 950 mm.",
			"Cuve : 500 L ; puissance moteur : 5,5 kW ; rotation : 1 260 tr/min.",
			"Démarreur étoile-triangle prémonté (version C).",
			"Sécheur frigorifique intégré."
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
			"value": "1 100 × 850 × 1 950 mm",
			"evidenceIds": [
				"schneider-2025-1121580525"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1 260 tr/min",
			"evidenceIds": [
				"schneider-2025-1121580525"
			]
		},
		{
			"label": "Pression acoustique LpA à 1 m",
			"value": "82 dB(A)",
			"evidenceIds": [
				"schneider-2025-1121580525"
			]
		},
		{
			"label": "Équipement de cette version",
			"value": "Démarreur étoile-triangle prémonté (version C).",
			"evidenceIds": [
				"schneider-2025-1121580525"
			]
		},
		{
			"label": "Équipement de cette version",
			"value": "Sécheur frigorifique intégré.",
			"evidenceIds": [
				"schneider-2025-1121580525"
			]
		}
	],
	"evidence": [
		{
			"id": "schneider-2025-1121580525",
			"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=48",
			"sourceLabel": "Schneider airsystems, catalogue 2025, p. 48, réf. 1121580525",
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
			"schneider-2025-1121580525"
		],
		"tankLiters": [
			"schneider-2025-1121580525"
		],
		"maxPressureBar": [
			"schneider-2025-1121580525"
		],
		"fadCurve": [
			"schneider-2025-1121580525"
		],
		"intakeFlowLpm": [
			"schneider-2025-1121580525"
		],
		"powerKw": [
			"schneider-2025-1121580525"
		],
		"weightKg": [
			"schneider-2025-1121580525"
		],
		"noiseDb": [
			"schneider-2025-1121580525"
		],
		"oilType": [
			"schneider-unm-sts-stl-lubrication"
		]
	},
	"notes": [
		"Les valeurs proviennent du fabricant et ne constituent pas une mesure physique réalisée par CompatAir.",
		"Source : catalogue 2025, page 48, référence 1121580525."
	]
};

export default product;
