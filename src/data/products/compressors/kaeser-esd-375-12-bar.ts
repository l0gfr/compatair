const product = {
	"id": "kaeser-esd-375-12-bar",
	"slug": "kaeser-esd-375-12-bar",
	"brand": "KAESER",
	"model": "ESD 375",
	"variant": {
		"familyId": "kaeser-esd-375",
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
			"litersPerMinute": 30130
		}
	],
	"oilType": "unknown",
	"powerKw": 200,
	"weightKg": 5000,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/kaeser-esd-375-12-bar.webp",
		"alt": "Repères techniques : KAESER ESD 375, 12 bar",
		"sourceUrl": "https://id.kaeser.com/download.ashx?id=tcm:148-5935",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "sans sécheur ; cuve intégrée 0 L",
			"evidenceIds": [
				"october2-kaeser-esd-p12"
			]
		},
		{
			"label": "Débit restitué à 10 bar",
			"value": "30,13 m³/min",
			"evidenceIds": [
				"october2-kaeser-esd-p12"
			]
		},
		{
			"label": "Dimensions (largeur × profondeur × hauteur)",
			"value": "2960 × 2030 × 2140 mm",
			"evidenceIds": [
				"october2-kaeser-esd-p12"
			]
		},
		{
			"label": "Raccordement d’air",
			"value": "DN 100",
			"evidenceIds": [
				"october2-kaeser-esd-p12"
			]
		},
		{
			"label": "Niveau sonore imprimé",
			"value": "75 dB(A) ; voir les conditions et options de refroidissement du tableau",
			"evidenceIds": [
				"october2-kaeser-esd-p12"
			]
		}
	],
	"editorial": {
		"overview": "KAESER ESD 375, 12 bar. 30 130 L/min à 10 bar. Moteur 200 kW ; sans sécheur.",
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
			"id": "october2-kaeser-esd-p12",
			"sourceUrl": "https://id.kaeser.com/download.ashx?id=tcm:148-5935#page=12",
			"sourceLabel": "KAESER, brochure ESD, page PDF 12",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 2f1ea4aa62243b026ea26b4c5c9fb1cae6d6f34bf77348bc4ae1f81c4bcf4f63 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2-kaeser-esd-p12"
		],
		"maxPressureBar": [
			"october2-kaeser-esd-p12"
		],
		"fadCurve": [
			"october2-kaeser-esd-p12"
		],
		"powerKw": [
			"october2-kaeser-esd-p12"
		],
		"weightKg": [
			"october2-kaeser-esd-p12"
		]
	},
	"notes": [
		"FAD déclaré par le fabricant ; pression de fonctionnement distincte de la limite de pression de la configuration."
	]
};

export default product;
