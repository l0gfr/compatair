const product = {
	"id": "schneider-unm-sts-660-10-270",
	"slug": "schneider-unm-sts-660-10-270",
	"brand": "Schneider",
	"model": "UNM STS 660-10-270",
	"mpn": "1121570213",
	"tankLiters": 270,
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
	"weightKg": 170,
	"noiseDb": 78,
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/schneider-catalogue-2025-p46-0.webp",
		"alt": "Illustration de la gamme Schneider présentée p. 46",
		"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=46",
		"sourceLabel": "Illustration de gamme, catalogue officiel Schneider 2025, p. 46"
	},
	"editorial": {
		"overview": "UNM STS 660-10-270, référence 1121570213, associe une cuve de 270 L à un moteur de 4 kW. Le débit restitué publié est de 520 L/min à 9 bar.",
		"verifiedFacts": [
			"Pression publiée : 10 bar ; débit aspiré : 660 L/min, distinct du débit restitué.",
			"Poids publié : 170 kg ; dimensions : 750 × 705 × 1 800 mm.",
			"Cuve : 270 L ; puissance moteur : 4 kW ; rotation : 1 025 tr/min."
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
			"value": "750 × 705 × 1 800 mm",
			"evidenceIds": [
				"schneider-2025-1121570213"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1 025 tr/min",
			"evidenceIds": [
				"schneider-2025-1121570213"
			]
		},
		{
			"label": "Pression acoustique LpA à 1 m",
			"value": "78 dB(A)",
			"evidenceIds": [
				"schneider-2025-1121570213"
			]
		}
	],
	"evidence": [
		{
			"id": "schneider-2025-1121570213",
			"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=46",
			"sourceLabel": "Schneider airsystems, catalogue 2025, p. 46, réf. 1121570213",
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
			"schneider-2025-1121570213"
		],
		"tankLiters": [
			"schneider-2025-1121570213"
		],
		"maxPressureBar": [
			"schneider-2025-1121570213"
		],
		"fadCurve": [
			"schneider-2025-1121570213"
		],
		"intakeFlowLpm": [
			"schneider-2025-1121570213"
		],
		"powerKw": [
			"schneider-2025-1121570213"
		],
		"weightKg": [
			"schneider-2025-1121570213"
		],
		"noiseDb": [
			"schneider-2025-1121570213"
		],
		"oilType": [
			"schneider-unm-sts-stl-lubrication"
		]
	},
	"notes": [
		"Les valeurs proviennent du fabricant et ne constituent pas une mesure physique réalisée par CompatAir.",
		"Source : catalogue 2025, page 46, référence 1121570213."
	]
};

export default product;
