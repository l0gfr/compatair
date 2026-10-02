const product = {
	"id": "kaeser-bsd-65-12-bar",
	"slug": "kaeser-bsd-65-12-bar",
	"brand": "KAESER",
	"model": "BSD 65",
	"variant": {
		"familyId": "kaeser-bsd-65",
		"label": "sans sécheur, 0 L, 12 bar",
		"distinguishingAttributes": {
			"équipement": "sans sécheur",
			"cuve": "0 L",
			"pression": "12 bar"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 12,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 4520
		}
	],
	"dutyCycle": 1,
	"oilType": "unknown",
	"powerKw": 30,
	"weightKg": 970,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/kaeser-bsd-65-12-bar.webp",
		"alt": "Repères techniques : KAESER BSD 65, 12 bar",
		"sourceUrl": "https://id.kaeser.com/download.ashx?id=tcm:148-5924",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "sans sécheur ; cuve intégrée 0 L",
			"evidenceIds": [
				"october2-kaeser-bsd-p10"
			]
		},
		{
			"label": "Débit restitué à 10 bar",
			"value": "4,52 m³/min",
			"evidenceIds": [
				"october2-kaeser-bsd-p10"
			]
		},
		{
			"label": "Dimensions (largeur × profondeur × hauteur)",
			"value": "1590 × 1030 × 1700 mm",
			"evidenceIds": [
				"october2-kaeser-bsd-p10"
			]
		},
		{
			"label": "Raccordement d’air",
			"value": "G 1 ½",
			"evidenceIds": [
				"october2-kaeser-bsd-p10"
			]
		},
		{
			"label": "Niveau sonore imprimé",
			"value": "69 dB(A) ; voir les conditions et options de refroidissement du tableau",
			"evidenceIds": [
				"october2-kaeser-bsd-p10"
			]
		}
	],
	"editorial": {
		"overview": "KAESER BSD 65, 12 bar. 4 520 L/min à 10 bar. Moteur 30 kW ; sans sécheur.",
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
			"id": "october2-kaeser-bsd-p10",
			"sourceUrl": "https://id.kaeser.com/download.ashx?id=tcm:148-5924#page=10",
			"sourceLabel": "KAESER, brochure BSD, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 b01fc99a411af06802498950fb97b278855ce4c05bfcb5ad4a3993cdd65d68b7 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
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
			"october2-kaeser-bsd-p10"
		],
		"maxPressureBar": [
			"october2-kaeser-bsd-p10"
		],
		"fadCurve": [
			"october2-kaeser-bsd-p10"
		],
		"powerKw": [
			"october2-kaeser-bsd-p10"
		],
		"weightKg": [
			"october2-kaeser-bsd-p10"
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
