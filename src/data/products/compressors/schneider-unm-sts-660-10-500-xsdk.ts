const product = {
	"id": "schneider-unm-sts-660-10-500-xsdk",
	"slug": "schneider-unm-sts-660-10-500-xsdk",
	"brand": "Schneider",
	"model": "UNM STS 660-10-500 XSDK",
	"mpn": "1121580501",
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
	"weightKg": 290,
	"noiseDb": 69,
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/schneider-catalogue-2025-p49-0.webp",
		"alt": "Illustration de la gamme Schneider présentée p. 49",
		"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=49",
		"sourceLabel": "Illustration de gamme, catalogue officiel Schneider 2025, p. 49"
	},
	"editorial": {
		"overview": "UNM STS 660-10-500 XSDK, référence 1121580501, associe une cuve de 500 L à un moteur de 4 kW. Le débit restitué publié est de 520 L/min à 9 bar. Sécheur frigorifique intégré. Version avec réduction du bruit publiée par le fabricant.",
		"verifiedFacts": [
			"Pression publiée : 10 bar ; débit aspiré : 660 L/min, distinct du débit restitué.",
			"Poids publié : 290 kg ; dimensions : 1 070 × 850 × 2 055 mm.",
			"Cuve : 500 L ; puissance moteur : 4 kW ; rotation : 1 025 tr/min.",
			"Sécheur frigorifique intégré.",
			"Version avec réduction du bruit publiée par le fabricant."
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
			"value": "1 070 × 850 × 2 055 mm",
			"evidenceIds": [
				"schneider-2025-1121580501"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1 025 tr/min",
			"evidenceIds": [
				"schneider-2025-1121580501"
			]
		},
		{
			"label": "Pression acoustique LpA à 1 m",
			"value": "69 dB(A)",
			"evidenceIds": [
				"schneider-2025-1121580501"
			]
		},
		{
			"label": "Équipement de cette version",
			"value": "Sécheur frigorifique intégré.",
			"evidenceIds": [
				"schneider-2025-1121580501"
			]
		},
		{
			"label": "Équipement de cette version",
			"value": "Version avec réduction du bruit publiée par le fabricant.",
			"evidenceIds": [
				"schneider-2025-1121580501"
			]
		}
	],
	"evidence": [
		{
			"id": "schneider-2025-1121580501",
			"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=49",
			"sourceLabel": "Schneider airsystems, catalogue 2025, p. 49, réf. 1121580501",
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
			"schneider-2025-1121580501"
		],
		"tankLiters": [
			"schneider-2025-1121580501"
		],
		"maxPressureBar": [
			"schneider-2025-1121580501"
		],
		"fadCurve": [
			"schneider-2025-1121580501"
		],
		"intakeFlowLpm": [
			"schneider-2025-1121580501"
		],
		"powerKw": [
			"schneider-2025-1121580501"
		],
		"weightKg": [
			"schneider-2025-1121580501"
		],
		"noiseDb": [
			"schneider-2025-1121580501"
		],
		"oilType": [
			"schneider-unm-sts-stl-lubrication"
		]
	},
	"notes": [
		"Les valeurs proviennent du fabricant et ne constituent pas une mesure physique réalisée par CompatAir.",
		"Source : catalogue 2025, page 49, référence 1121580501."
	]
};

export default product;
