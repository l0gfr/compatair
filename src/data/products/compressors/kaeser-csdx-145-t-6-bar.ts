const product = {
	"id": "kaeser-csdx-145-t-6-bar",
	"slug": "kaeser-csdx-145-t-6-bar",
	"brand": "KAESER",
	"model": "CSDX 145 T",
	"variant": {
		"familyId": "kaeser-csdx-145-t",
		"label": "sécheur intégré, 0 L, 6 bar",
		"distinguishingAttributes": {
			"équipement": "sécheur intégré",
			"cuve": "0 L",
			"pression": "6 bar"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 6,
	"fadCurve": [
		{
			"pressureBar": 6,
			"litersPerMinute": 15850
		}
	],
	"oilType": "unknown",
	"powerKw": 75,
	"weightKg": 2170,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/kaeser-csdx-145-t-6-bar.webp",
		"alt": "Repères techniques : KAESER CSDX 145 T, 6 bar",
		"sourceUrl": "https://id.kaeser.com/download.ashx?id=tcm:148-5928",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "sécheur intégré ; cuve intégrée 0 L",
			"evidenceIds": [
				"october2-kaeser-csd-p12"
			]
		},
		{
			"label": "Débit restitué à 6 bar",
			"value": "15,85 m³/min",
			"evidenceIds": [
				"october2-kaeser-csd-p12"
			]
		},
		{
			"label": "Dimensions (largeur × profondeur × hauteur)",
			"value": "2520 × 1280 × 1950 mm",
			"evidenceIds": [
				"october2-kaeser-csd-p12"
			]
		},
		{
			"label": "Raccordement d’air",
			"value": "G 2½",
			"evidenceIds": [
				"october2-kaeser-csd-p12"
			]
		},
		{
			"label": "Niveau sonore imprimé",
			"value": "72 dB(A) ; voir les conditions et options de refroidissement du tableau",
			"evidenceIds": [
				"october2-kaeser-csd-p12"
			]
		}
	],
	"editorial": {
		"overview": "KAESER CSDX 145 T, 6 bar. 15 850 L/min à 6 bar. Moteur 75 kW ; sécheur intégré.",
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
			"id": "october2-kaeser-csd-p12",
			"sourceUrl": "https://id.kaeser.com/download.ashx?id=tcm:148-5928#page=12",
			"sourceLabel": "KAESER, brochure CSD, page PDF 12",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a55d83ecf6eacb4c806cefd8fe9c136365ab1e08b28f0cad54c108e752e0d7fa de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2-kaeser-csd-p12"
		],
		"maxPressureBar": [
			"october2-kaeser-csd-p12"
		],
		"fadCurve": [
			"october2-kaeser-csd-p12"
		],
		"powerKw": [
			"october2-kaeser-csd-p12"
		],
		"weightKg": [
			"october2-kaeser-csd-p12"
		]
	},
	"notes": [
		"FAD déclaré par le fabricant ; pression de fonctionnement distincte de la limite de pression de la configuration."
	]
};

export default product;
