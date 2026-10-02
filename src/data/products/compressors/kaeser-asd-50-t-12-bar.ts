const product = {
	"id": "kaeser-asd-50-t-12-bar",
	"slug": "kaeser-asd-50-t-12-bar",
	"brand": "KAESER",
	"model": "ASD 50 T",
	"variant": {
		"familyId": "kaeser-asd-50-t",
		"label": "sécheur intégré, 0 L, 12 bar",
		"distinguishingAttributes": {
			"équipement": "sécheur intégré",
			"cuve": "0 L",
			"pression": "12 bar"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 12,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 3850
		}
	],
	"dutyCycle": 1,
	"oilType": "unknown",
	"powerKw": 25,
	"weightKg": 790,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/kaeser-asd-50-t-12-bar.webp",
		"alt": "Repères techniques : KAESER ASD 50 T, 12 bar",
		"sourceUrl": "https://id.kaeser.com/download.ashx?id=tcm:148-5923",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "sécheur intégré ; cuve intégrée 0 L",
			"evidenceIds": [
				"october2-kaeser-asd-p10"
			]
		},
		{
			"label": "Débit restitué à 10 bar",
			"value": "3,85 m³/min",
			"evidenceIds": [
				"october2-kaeser-asd-p10"
			]
		},
		{
			"label": "Dimensions (largeur × profondeur × hauteur)",
			"value": "1770 × 900 × 1530 mm",
			"evidenceIds": [
				"october2-kaeser-asd-p10"
			]
		},
		{
			"label": "Raccordement d’air",
			"value": "G 1¼",
			"evidenceIds": [
				"october2-kaeser-asd-p10"
			]
		},
		{
			"label": "Niveau sonore imprimé",
			"value": "66 dB(A) ; voir les conditions et options de refroidissement du tableau",
			"evidenceIds": [
				"october2-kaeser-asd-p10"
			]
		}
	],
	"editorial": {
		"overview": "KAESER ASD 50 T, 12 bar. 3 850 L/min à 10 bar. Moteur 25 kW ; sécheur intégré.",
		"verifiedFacts": [
			"Débits restitués associés aux pressions du tableau de cette configuration.",
			"Cuve intégrée : 0 L ; aucun volume de réservoir externe ajouté."
		],
		"limitations": [
			"Les points FAD publiés ne constituent pas une mesure de toute la courbe ; aucune extrapolation au-dessus de la dernière pression documentée.",
			"Service continu déclaré pour la série ; les conditions d’installation, de refroidissement et d’entretien restent applicables.",
			"Documentation datée, disponibilité et équipement livré à confirmer sur le devis. Aucun avis d’utilisation ni essai CompatAir.",
			"Le fluide de refroidissement décrit ne permet pas d’affirmer une qualité d’air ou une lubrification particulière."
		]
	},
	"evidence": [
		{
			"id": "october2-kaeser-asd-p10",
			"sourceUrl": "https://id.kaeser.com/download.ashx?id=tcm:148-5923#page=10",
			"sourceLabel": "KAESER, brochure ASD, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 1f5a59f2a1e2284962f6300178d8e3998ae3d4abe155c61157be6faf3f9e6882 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2-kaeser-duty-asd",
			"sourceUrl": "https://us.kaeser.com/products-and-solutions/rotary-screw-compressors/screw-compressors-to-150-hp/",
			"sourceLabel": "KAESER, séries ASD BSD CSD et service continu",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 37e3a5562c303c12267c910b66715b8744eedaa524b54e9eb705e188bca32049 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2-kaeser-asd-p10"
		],
		"maxPressureBar": [
			"october2-kaeser-asd-p10"
		],
		"fadCurve": [
			"october2-kaeser-asd-p10"
		],
		"powerKw": [
			"october2-kaeser-asd-p10"
		],
		"weightKg": [
			"october2-kaeser-asd-p10"
		],
		"dutyCycle": [
			"october2-kaeser-duty-asd"
		]
	},
	"notes": [
		"FAD déclaré par le fabricant ; pression de fonctionnement distincte de la limite de pression de la configuration."
	]
};

export default product;
