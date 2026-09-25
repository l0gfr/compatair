const product = {
	"id": "schneider-sem-110-10-6-wof",
	"slug": "schneider-sem-110-10-6-wof",
	"brand": "Schneider",
	"model": "SEM 110-10-6 WOF",
	"mpn": "4116000663",
	"tankLiters": 6,
	"maxPressureBar": 10,
	"fadCurve": [],
	"intakeFlowLpm": 108,
	"oilType": "oil-free",
	"powerKw": 0.75,
	"weightKg": 20,
	"noiseDb": 59,
	"confidence": "C",
	"status": "unknown",
	"image": {
		"src": "/images/products/schneider-catalogue-2025-p39-0.webp",
		"alt": "Illustration de la gamme Schneider présentée p. 39",
		"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=39",
		"sourceLabel": "Illustration de gamme, catalogue officiel Schneider 2025, p. 39"
	},
	"editorial": {
		"overview": "SEM 110-10-6 WOF, référence 4116000663, associe une cuve de 6 L à un moteur de 0,75 kW. Le catalogue donne 60 L/min de remplissage sans pression associée, ce qui ne suffit pas à valider un outil. Version avec réduction du bruit publiée par le fabricant.",
		"verifiedFacts": [
			"Pression publiée : 10 bar ; débit aspiré : 108 L/min, distinct du débit restitué.",
			"Poids publié : 20 kg ; dimensions : 449 × 262 × 436 mm.",
			"Cuve : 6 L ; puissance moteur : 0,75 kW ; rotation : 1 450 tr/min.",
			"Version avec réduction du bruit publiée par le fabricant."
		],
		"limitations": [
			"Le débit de remplissage de 60 L/min n’a pas de pression de mesure précisée. Il est conservé comme information et exclu du FAD : la compatibilité reste indéterminée.",
			"Caractéristiques de l’édition 2025 du catalogue allemand, consultée le 25 septembre 2026. La disponibilité en France et la configuration livrée restent à confirmer.",
			"Illustration de gamme issue du catalogue : la cuve et les accessoires peuvent varier selon la référence."
		]
	},
	"specifications": [
		{
			"label": "Dimensions largeur × profondeur × hauteur",
			"value": "449 × 262 × 436 mm",
			"evidenceIds": [
				"schneider-2025-4116000663"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1 450 tr/min",
			"evidenceIds": [
				"schneider-2025-4116000663"
			]
		},
		{
			"label": "Pression acoustique LpA à 4 m",
			"value": "59 dB(A)",
			"evidenceIds": [
				"schneider-2025-4116000663"
			]
		},
		{
			"label": "Équipement de cette version",
			"value": "Version avec réduction du bruit publiée par le fabricant.",
			"evidenceIds": [
				"schneider-2025-4116000663"
			]
		},
		{
			"label": "Débit de remplissage sans pression publiée",
			"value": "60 L/min",
			"evidenceIds": [
				"schneider-2025-4116000663"
			]
		},
		{
			"label": "Puissance acoustique LwA",
			"value": "79 dB(A)",
			"evidenceIds": [
				"schneider-2025-4116000663"
			]
		}
	],
	"evidence": [
		{
			"id": "schneider-2025-4116000663",
			"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=39",
			"sourceLabel": "Schneider airsystems, catalogue 2025, p. 39, réf. 4116000663",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Füllleistung sans pression : pas de conversion en FAD."
		}
	],
	"fieldSources": {
		"mpn": [
			"schneider-2025-4116000663"
		],
		"tankLiters": [
			"schneider-2025-4116000663"
		],
		"maxPressureBar": [
			"schneider-2025-4116000663"
		],
		"fadCurve": [
			"schneider-2025-4116000663"
		],
		"intakeFlowLpm": [
			"schneider-2025-4116000663"
		],
		"powerKw": [
			"schneider-2025-4116000663"
		],
		"weightKg": [
			"schneider-2025-4116000663"
		],
		"noiseDb": [
			"schneider-2025-4116000663"
		],
		"oilType": [
			"schneider-2025-4116000663"
		],
		"voltage": [
			"schneider-2025-4116000663"
		]
	},
	"notes": [
		"Les valeurs proviennent du fabricant et ne constituent pas une mesure physique réalisée par CompatAir.",
		"Source : catalogue 2025, page 39, référence 4116000663."
	],
	"voltage": "230 V"
};

export default product;
