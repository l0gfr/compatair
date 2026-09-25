const product = {
	"id": "schneider-unm-sts-580-15-500-xs",
	"slug": "schneider-unm-sts-580-15-500-xs",
	"brand": "Schneider",
	"model": "UNM STS 580-15-500 XS",
	"mpn": "1121580533",
	"tankLiters": 500,
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
	"weightKg": 269,
	"noiseDb": 69,
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/schneider-catalogue-2025-p47-0.webp",
		"alt": "Illustration de la gamme Schneider présentée p. 47",
		"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=47",
		"sourceLabel": "Illustration de gamme, catalogue officiel Schneider 2025, p. 47"
	},
	"editorial": {
		"overview": "UNM STS 580-15-500 XS, référence 1121580533, associe une cuve de 500 L à un moteur de 4 kW. Le débit restitué publié est de 470 L/min à 14 bar. Version avec réduction du bruit publiée par le fabricant.",
		"verifiedFacts": [
			"Pression publiée : 15 bar ; débit aspiré : 580 L/min, distinct du débit restitué.",
			"Poids publié : 269 kg ; dimensions : 850 × 850 × 2 055 mm.",
			"Cuve : 500 L ; puissance moteur : 4 kW ; rotation : 915 tr/min.",
			"Version avec réduction du bruit publiée par le fabricant."
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
			"value": "850 × 850 × 2 055 mm",
			"evidenceIds": [
				"schneider-2025-1121580533"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "915 tr/min",
			"evidenceIds": [
				"schneider-2025-1121580533"
			]
		},
		{
			"label": "Pression acoustique LpA à 1 m",
			"value": "69 dB(A)",
			"evidenceIds": [
				"schneider-2025-1121580533"
			]
		},
		{
			"label": "Équipement de cette version",
			"value": "Version avec réduction du bruit publiée par le fabricant.",
			"evidenceIds": [
				"schneider-2025-1121580533"
			]
		}
	],
	"evidence": [
		{
			"id": "schneider-2025-1121580533",
			"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=47",
			"sourceLabel": "Schneider airsystems, catalogue 2025, p. 47, réf. 1121580533",
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
			"schneider-2025-1121580533"
		],
		"tankLiters": [
			"schneider-2025-1121580533"
		],
		"maxPressureBar": [
			"schneider-2025-1121580533"
		],
		"fadCurve": [
			"schneider-2025-1121580533"
		],
		"intakeFlowLpm": [
			"schneider-2025-1121580533"
		],
		"powerKw": [
			"schneider-2025-1121580533"
		],
		"weightKg": [
			"schneider-2025-1121580533"
		],
		"noiseDb": [
			"schneider-2025-1121580533"
		],
		"oilType": [
			"schneider-unm-sts-stl-lubrication"
		]
	},
	"notes": [
		"Les valeurs proviennent du fabricant et ne constituent pas une mesure physique réalisée par CompatAir.",
		"Source : catalogue 2025, page 47, référence 1121580533."
	]
};

export default product;
