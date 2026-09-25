const product = {
	"id": "schneider-unm-sts-580-15-500-xdk",
	"slug": "schneider-unm-sts-580-15-500-xdk",
	"brand": "Schneider",
	"model": "UNM STS 580-15-500 XDK",
	"mpn": "1121580532",
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
	"weightKg": 266,
	"noiseDb": 78,
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/schneider-catalogue-2025-p48-0.webp",
		"alt": "Illustration de la gamme Schneider présentée p. 48",
		"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=48",
		"sourceLabel": "Illustration de gamme, catalogue officiel Schneider 2025, p. 48"
	},
	"editorial": {
		"overview": "UNM STS 580-15-500 XDK, référence 1121580532, associe une cuve de 500 L à un moteur de 4 kW. Le débit restitué publié est de 470 L/min à 14 bar. Sécheur frigorifique intégré.",
		"verifiedFacts": [
			"Pression publiée : 15 bar ; débit aspiré : 580 L/min, distinct du débit restitué.",
			"Poids publié : 266 kg ; dimensions : 1 070 × 850 × 1 945 mm.",
			"Cuve : 500 L ; puissance moteur : 4 kW ; rotation : 915 tr/min.",
			"Sécheur frigorifique intégré."
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
			"value": "1 070 × 850 × 1 945 mm",
			"evidenceIds": [
				"schneider-2025-1121580532"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "915 tr/min",
			"evidenceIds": [
				"schneider-2025-1121580532"
			]
		},
		{
			"label": "Pression acoustique LpA à 1 m",
			"value": "78 dB(A)",
			"evidenceIds": [
				"schneider-2025-1121580532"
			]
		},
		{
			"label": "Équipement de cette version",
			"value": "Sécheur frigorifique intégré.",
			"evidenceIds": [
				"schneider-2025-1121580532"
			]
		}
	],
	"evidence": [
		{
			"id": "schneider-2025-1121580532",
			"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=48",
			"sourceLabel": "Schneider airsystems, catalogue 2025, p. 48, réf. 1121580532",
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
			"schneider-2025-1121580532"
		],
		"tankLiters": [
			"schneider-2025-1121580532"
		],
		"maxPressureBar": [
			"schneider-2025-1121580532"
		],
		"fadCurve": [
			"schneider-2025-1121580532"
		],
		"intakeFlowLpm": [
			"schneider-2025-1121580532"
		],
		"powerKw": [
			"schneider-2025-1121580532"
		],
		"weightKg": [
			"schneider-2025-1121580532"
		],
		"noiseDb": [
			"schneider-2025-1121580532"
		],
		"oilType": [
			"schneider-unm-sts-stl-lubrication"
		]
	},
	"notes": [
		"Les valeurs proviennent du fabricant et ne constituent pas une mesure physique réalisée par CompatAir.",
		"Source : catalogue 2025, page 48, référence 1121580532."
	]
};

export default product;
