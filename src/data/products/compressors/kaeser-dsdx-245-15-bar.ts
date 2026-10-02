const product = {
	"id": "kaeser-dsdx-245-15-bar",
	"slug": "kaeser-dsdx-245-15-bar",
	"brand": "KAESER",
	"model": "DSDX 245",
	"variant": {
		"familyId": "kaeser-dsdx-245",
		"label": "sans sécheur, 0 L, 15 bar",
		"distinguishingAttributes": {
			"équipement": "sans sécheur",
			"cuve": "0 L",
			"pression": "15 bar"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 15,
	"fadCurve": [
		{
			"pressureBar": 13,
			"litersPerMinute": 16150
		}
	],
	"oilType": "unknown",
	"powerKw": 132,
	"weightKg": 3950,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/kaeser-dsdx-245-15-bar.webp",
		"alt": "Repères techniques : KAESER DSDX 245, 15 bar",
		"sourceUrl": "https://id.kaeser.com/download.ashx?id=tcm:148-22066",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "sans sécheur ; cuve intégrée 0 L",
			"evidenceIds": [
				"october2-kaeser-dsdx-p12"
			]
		},
		{
			"label": "Débit restitué à 13 bar",
			"value": "16,15 m³/min",
			"evidenceIds": [
				"october2-kaeser-dsdx-p12"
			]
		},
		{
			"label": "Dimensions (largeur × profondeur × hauteur)",
			"value": "2690 × 1910 × 2140 mm",
			"evidenceIds": [
				"october2-kaeser-dsdx-p12"
			]
		},
		{
			"label": "Raccordement d’air",
			"value": "DN 80",
			"evidenceIds": [
				"october2-kaeser-dsdx-p12"
			]
		},
		{
			"label": "Niveau sonore imprimé",
			"value": "74 / 68 ***) dB(A) ; voir les conditions et options de refroidissement du tableau",
			"evidenceIds": [
				"october2-kaeser-dsdx-p12"
			]
		}
	],
	"editorial": {
		"overview": "KAESER DSDX 245, 15 bar. 16 150 L/min à 13 bar. Moteur 132 kW ; sans sécheur.",
		"verifiedFacts": [
			"Débits restitués associés aux pressions du tableau de cette configuration.",
			"Cuve intégrée : 0 L ; aucun volume de réservoir externe ajouté."
		],
		"limitations": [
			"Les points FAD publiés ne constituent pas une mesure de toute la courbe ; aucune extrapolation au-dessus de la dernière pression documentée.",
			"Le cycle de service de cette série n’est pas établi par les sources retenues ; la tenue permanente reste indéterminée.",
			"Documentation datée, disponibilité et équipement livré à confirmer sur le devis. Aucun avis d’utilisation ni essai CompatAir.",
			"Le fluide de refroidissement décrit ne permet pas d’affirmer une qualité d’air ou une lubrification particulière."
		]
	},
	"evidence": [
		{
			"id": "october2-kaeser-dsdx-p12",
			"sourceUrl": "https://id.kaeser.com/download.ashx?id=tcm:148-22066#page=12",
			"sourceLabel": "KAESER, brochure DSDX, page PDF 12",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 61ca352a4807f0f632bd22c5e788ec170657c8a74f817e45764a2c80f82ceed5 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2-kaeser-dsdx-p12"
		],
		"maxPressureBar": [
			"october2-kaeser-dsdx-p12"
		],
		"fadCurve": [
			"october2-kaeser-dsdx-p12"
		],
		"powerKw": [
			"october2-kaeser-dsdx-p12"
		],
		"weightKg": [
			"october2-kaeser-dsdx-p12"
		]
	},
	"notes": [
		"FAD déclaré par le fabricant ; pression de fonctionnement distincte de la limite de pression de la configuration."
	]
};

export default product;
