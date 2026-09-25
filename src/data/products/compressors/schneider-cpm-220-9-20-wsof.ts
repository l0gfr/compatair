const product = {
	"id": "schneider-cpm-220-9-20-wsof",
	"slug": "schneider-cpm-220-9-20-wsof",
	"brand": "Schneider",
	"model": "CPM 220-9-20 WSOF",
	"mpn": "1129741353",
	"tankLiters": 20,
	"maxPressureBar": 9,
	"fadCurve": [],
	"intakeFlowLpm": 230,
	"oilType": "oil-free",
	"powerKw": 1.5,
	"weightKg": 33,
	"noiseDb": 62,
	"confidence": "C",
	"status": "unknown",
	"image": {
		"src": "/images/products/schneider-catalogue-2025-p42-0.webp",
		"alt": "Illustration de la gamme Schneider présentée p. 42",
		"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=42",
		"sourceLabel": "Illustration de gamme, catalogue officiel Schneider 2025, p. 42"
	},
	"editorial": {
		"overview": "CPM 220-9-20 WSOF, référence 1129741353, associe une cuve de 20 L à un moteur de 1,5 kW. Le catalogue donne 95 L/min de remplissage sans pression associée, ce qui ne suffit pas à valider un outil. Version avec réduction du bruit publiée par le fabricant.",
		"verifiedFacts": [
			"Pression publiée : 9 bar ; débit aspiré : 230 L/min, distinct du débit restitué.",
			"Poids publié : 33 kg ; dimensions : 479 × 385 × 793 mm.",
			"Cuve : 20 L ; puissance moteur : 1,5 kW ; rotation : 1 420 tr/min.",
			"Version avec réduction du bruit publiée par le fabricant."
		],
		"limitations": [
			"Le débit de remplissage de 95 L/min n’a pas de pression de mesure précisée. Il est conservé comme information et exclu du FAD : la compatibilité reste indéterminée.",
			"Caractéristiques de l’édition 2025 du catalogue allemand, consultée le 25 septembre 2026. La disponibilité en France et la configuration livrée restent à confirmer.",
			"Illustration de gamme issue du catalogue : la cuve et les accessoires peuvent varier selon la référence."
		]
	},
	"specifications": [
		{
			"label": "Dimensions largeur × profondeur × hauteur",
			"value": "479 × 385 × 793 mm",
			"evidenceIds": [
				"schneider-2025-1129741353"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1 420 tr/min",
			"evidenceIds": [
				"schneider-2025-1129741353"
			]
		},
		{
			"label": "Pression acoustique LpA à 4 m",
			"value": "62 dB(A)",
			"evidenceIds": [
				"schneider-2025-1129741353"
			]
		},
		{
			"label": "Équipement de cette version",
			"value": "Version avec réduction du bruit publiée par le fabricant.",
			"evidenceIds": [
				"schneider-2025-1129741353"
			]
		},
		{
			"label": "Débit de remplissage sans pression publiée",
			"value": "95 L/min",
			"evidenceIds": [
				"schneider-2025-1129741353"
			]
		},
		{
			"label": "Puissance acoustique LwA",
			"value": "85 dB(A)",
			"evidenceIds": [
				"schneider-2025-1129741353"
			]
		}
	],
	"evidence": [
		{
			"id": "schneider-2025-1129741353",
			"sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=42",
			"sourceLabel": "Schneider airsystems, catalogue 2025, p. 42, réf. 1129741353",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Füllleistung sans pression : pas de conversion en FAD."
		}
	],
	"fieldSources": {
		"mpn": [
			"schneider-2025-1129741353"
		],
		"tankLiters": [
			"schneider-2025-1129741353"
		],
		"maxPressureBar": [
			"schneider-2025-1129741353"
		],
		"fadCurve": [
			"schneider-2025-1129741353"
		],
		"intakeFlowLpm": [
			"schneider-2025-1129741353"
		],
		"powerKw": [
			"schneider-2025-1129741353"
		],
		"weightKg": [
			"schneider-2025-1129741353"
		],
		"noiseDb": [
			"schneider-2025-1129741353"
		],
		"oilType": [
			"schneider-2025-1129741353"
		],
		"voltage": [
			"schneider-2025-1129741353"
		]
	},
	"notes": [
		"Les valeurs proviennent du fabricant et ne constituent pas une mesure physique réalisée par CompatAir.",
		"Source : catalogue 2025, page 42, référence 1129741353."
	],
	"voltage": "230 V"
};

export default product;
