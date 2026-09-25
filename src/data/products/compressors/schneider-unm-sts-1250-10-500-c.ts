const product = {
	"id": "schneider-unm-sts-1250-10-500-c",
	"slug": "schneider-unm-sts-1250-10-500-c",
	"brand": "Schneider",
	"model": "UNM STS 1250-10-500 C",
	"mpn": "1121580530",
	"tankLiters": 500,
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
	"weightKg": 291,
	"noiseDb": 84,
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/schneider-catalogue-2025-p46-0.webp",
		"alt": "Illustration de la gamme Schneider présentée p. 46",
		"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=46",
		"sourceLabel": "Illustration de gamme, catalogue officiel Schneider 2025, p. 46"
	},
	"editorial": {
		"overview": "UNM STS 1250-10-500 C, référence 1121580530, associe une cuve de 500 L à un moteur de 7,5 kW. Le débit restitué publié est de 980 L/min à 9 bar. Démarreur étoile-triangle prémonté (version C).",
		"verifiedFacts": [
			"Pression publiée : 10 bar ; débit aspiré : 1 250 L/min, distinct du débit restitué.",
			"Poids publié : 291 kg ; dimensions : 975 × 850 × 2 020 mm.",
			"Cuve : 500 L ; puissance moteur : 7,5 kW ; rotation : 1 240 tr/min.",
			"Démarreur étoile-triangle prémonté (version C)."
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
			"value": "975 × 850 × 2 020 mm",
			"evidenceIds": [
				"schneider-2025-1121580530"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1 240 tr/min",
			"evidenceIds": [
				"schneider-2025-1121580530"
			]
		},
		{
			"label": "Pression acoustique LpA à 1 m",
			"value": "84 dB(A)",
			"evidenceIds": [
				"schneider-2025-1121580530"
			]
		},
		{
			"label": "Équipement de cette version",
			"value": "Démarreur étoile-triangle prémonté (version C).",
			"evidenceIds": [
				"schneider-2025-1121580530"
			]
		}
	],
	"evidence": [
		{
			"id": "schneider-2025-1121580530",
			"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=46",
			"sourceLabel": "Schneider airsystems, catalogue 2025, p. 46, réf. 1121580530",
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
			"schneider-2025-1121580530"
		],
		"tankLiters": [
			"schneider-2025-1121580530"
		],
		"maxPressureBar": [
			"schneider-2025-1121580530"
		],
		"fadCurve": [
			"schneider-2025-1121580530"
		],
		"intakeFlowLpm": [
			"schneider-2025-1121580530"
		],
		"powerKw": [
			"schneider-2025-1121580530"
		],
		"weightKg": [
			"schneider-2025-1121580530"
		],
		"noiseDb": [
			"schneider-2025-1121580530"
		],
		"oilType": [
			"schneider-unm-sts-stl-lubrication"
		]
	},
	"notes": [
		"Les valeurs proviennent du fabricant et ne constituent pas une mesure physique réalisée par CompatAir.",
		"Source : catalogue 2025, page 46, référence 1121580530."
	]
};

export default product;
