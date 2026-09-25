const product = {
	"id": "schneider-unm-sts-780-15-270-c",
	"slug": "schneider-unm-sts-780-15-270-c",
	"brand": "Schneider",
	"model": "UNM STS 780-15-270 C",
	"mpn": "1121570243",
	"tankLiters": 270,
	"maxPressureBar": 15,
	"fadCurve": [
		{
			"pressureBar": 14,
			"litersPerMinute": 570
		}
	],
	"intakeFlowLpm": 830,
	"oilType": "oil",
	"powerKw": 5.5,
	"weightKg": 213,
	"noiseDb": 80,
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/schneider-catalogue-2025-p46-0.webp",
		"alt": "Illustration de la gamme Schneider présentée p. 46",
		"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=46",
		"sourceLabel": "Illustration de gamme, catalogue officiel Schneider 2025, p. 46"
	},
	"editorial": {
		"overview": "UNM STS 780-15-270 C, référence 1121570243, associe une cuve de 270 L à un moteur de 5,5 kW. Le débit restitué publié est de 570 L/min à 14 bar. Démarreur étoile-triangle prémonté (version C).",
		"verifiedFacts": [
			"Pression publiée : 15 bar ; débit aspiré : 830 L/min, distinct du débit restitué.",
			"Poids publié : 213 kg ; dimensions : 920 × 705 × 1 800 mm.",
			"Cuve : 270 L ; puissance moteur : 5,5 kW ; rotation : 980 tr/min.",
			"Démarreur étoile-triangle prémonté (version C)."
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
			"value": "920 × 705 × 1 800 mm",
			"evidenceIds": [
				"schneider-2025-1121570243"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "980 tr/min",
			"evidenceIds": [
				"schneider-2025-1121570243"
			]
		},
		{
			"label": "Pression acoustique LpA à 1 m",
			"value": "80 dB(A)",
			"evidenceIds": [
				"schneider-2025-1121570243"
			]
		},
		{
			"label": "Équipement de cette version",
			"value": "Démarreur étoile-triangle prémonté (version C).",
			"evidenceIds": [
				"schneider-2025-1121570243"
			]
		}
	],
	"evidence": [
		{
			"id": "schneider-2025-1121570243",
			"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=46",
			"sourceLabel": "Schneider airsystems, catalogue 2025, p. 46, réf. 1121570243",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Note 2 du tableau : débit maximal ISO 1217 à la pression indiquée moins 1 bar, soit 15 − 1 = 14 bar."
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
			"schneider-2025-1121570243"
		],
		"tankLiters": [
			"schneider-2025-1121570243"
		],
		"maxPressureBar": [
			"schneider-2025-1121570243"
		],
		"fadCurve": [
			"schneider-2025-1121570243"
		],
		"intakeFlowLpm": [
			"schneider-2025-1121570243"
		],
		"powerKw": [
			"schneider-2025-1121570243"
		],
		"weightKg": [
			"schneider-2025-1121570243"
		],
		"noiseDb": [
			"schneider-2025-1121570243"
		],
		"oilType": [
			"schneider-unm-sts-stl-lubrication"
		]
	},
	"notes": [
		"Les valeurs proviennent du fabricant et ne constituent pas une mesure physique réalisée par CompatAir.",
		"Source : catalogue 2025, page 46, référence 1121570243."
	]
};

export default product;
