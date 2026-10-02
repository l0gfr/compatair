const product = {
	"id": "kaeser-csd-110-t-12-bar",
	"slug": "kaeser-csd-110-t-12-bar",
	"brand": "KAESER",
	"model": "CSD 110 T",
	"variant": {
		"familyId": "kaeser-csd-110-t",
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
			"pressureBar": 12,
			"litersPerMinute": 8200
		}
	],
	"dutyCycle": 1,
	"oilType": "unknown",
	"powerKw": 55,
	"weightKg": 1610,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/kaeser-csd-110-t-12-bar.webp",
		"alt": "Repères techniques : KAESER CSD 110 T, 12 bar",
		"sourceUrl": "https://id.kaeser.com/download.ashx?id=tcm:148-5928",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "sécheur intégré ; cuve intégrée 0 L",
			"evidenceIds": [
				"october2-kaeser-csd-p11"
			]
		},
		{
			"label": "Débit restitué à 12 bar",
			"value": "8,2 m³/min",
			"evidenceIds": [
				"october2-kaeser-csd-p11"
			]
		},
		{
			"label": "Dimensions (largeur × profondeur × hauteur)",
			"value": "2210 × 1100 × 1900 mm",
			"evidenceIds": [
				"october2-kaeser-csd-p11"
			]
		},
		{
			"label": "Raccordement d’air",
			"value": "G 2",
			"evidenceIds": [
				"october2-kaeser-csd-p11"
			]
		},
		{
			"label": "Niveau sonore imprimé",
			"value": "69 dB(A) ; voir les conditions et options de refroidissement du tableau",
			"evidenceIds": [
				"october2-kaeser-csd-p11"
			]
		}
	],
	"editorial": {
		"overview": "KAESER CSD 110 T, 12 bar. 8 200 L/min à 12 bar. Moteur 55 kW ; sécheur intégré.",
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
			"id": "october2-kaeser-csd-p11",
			"sourceUrl": "https://id.kaeser.com/download.ashx?id=tcm:148-5928#page=11",
			"sourceLabel": "KAESER, brochure CSD, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a55d83ecf6eacb4c806cefd8fe9c136365ab1e08b28f0cad54c108e752e0d7fa de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
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
			"october2-kaeser-csd-p11"
		],
		"maxPressureBar": [
			"october2-kaeser-csd-p11"
		],
		"fadCurve": [
			"october2-kaeser-csd-p11"
		],
		"powerKw": [
			"october2-kaeser-csd-p11"
		],
		"weightKg": [
			"october2-kaeser-csd-p11"
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
