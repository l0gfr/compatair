const product = {
	"id": "kaeser-dsd-205-12-bar",
	"slug": "kaeser-dsd-205-12-bar",
	"brand": "KAESER",
	"model": "DSD 205",
	"variant": {
		"familyId": "kaeser-dsd-205",
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
			"litersPerMinute": 16590
		}
	],
	"oilType": "unknown",
	"powerKw": 110,
	"weightKg": 3360,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/kaeser-dsd-205-12-bar.webp",
		"alt": "Repères techniques : KAESER DSD 205, 12 bar",
		"sourceUrl": "https://id.kaeser.com/download.ashx?id=tcm:148-5933",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "sans sécheur ; cuve intégrée 0 L",
			"evidenceIds": [
				"october2-kaeser-dsd-p14"
			]
		},
		{
			"label": "Débit restitué à 10 bar",
			"value": "16,59 m³/min",
			"evidenceIds": [
				"october2-kaeser-dsd-p14"
			]
		},
		{
			"label": "Dimensions (largeur × profondeur × hauteur)",
			"value": "2450 × 1730 × 2150 mm",
			"evidenceIds": [
				"october2-kaeser-dsd-p14"
			]
		},
		{
			"label": "Raccordement d’air",
			"value": "DN 65",
			"evidenceIds": [
				"october2-kaeser-dsd-p14"
			]
		},
		{
			"label": "Niveau sonore imprimé",
			"value": "72 dB(A) ; voir les conditions et options de refroidissement du tableau",
			"evidenceIds": [
				"october2-kaeser-dsd-p14"
			]
		}
	],
	"editorial": {
		"overview": "KAESER DSD 205, 12 bar. 16 590 L/min à 10 bar. Moteur 110 kW ; sans sécheur.",
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
			"id": "october2-kaeser-dsd-p14",
			"sourceUrl": "https://id.kaeser.com/download.ashx?id=tcm:148-5933#page=14",
			"sourceLabel": "KAESER, brochure DSD, page PDF 14",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 650d3a03a9eeef5349596b42b53e5617a9c555f1671c07650b16d0917d37493c de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2-kaeser-dsd-p14"
		],
		"maxPressureBar": [
			"october2-kaeser-dsd-p14"
		],
		"fadCurve": [
			"october2-kaeser-dsd-p14"
		],
		"powerKw": [
			"october2-kaeser-dsd-p14"
		],
		"weightKg": [
			"october2-kaeser-dsd-p14"
		]
	},
	"notes": [
		"FAD déclaré par le fabricant ; pression de fonctionnement distincte de la limite de pression de la configuration."
	]
};

export default product;
