const product = {
	"id": "kaeser-dsd-240-sfc-8-5-bar",
	"slug": "kaeser-dsd-240-sfc-8-5-bar",
	"brand": "KAESER",
	"model": "DSD 240 SFC",
	"variant": {
		"familyId": "kaeser-dsd-240-sfc",
		"label": "sans sécheur, 0 L, 8,5 bar",
		"distinguishingAttributes": {
			"équipement": "sans sécheur",
			"cuve": "0 L",
			"pression": "8,5 bar"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 8.5,
	"fadCurve": [
		{
			"pressureBar": 7.5,
			"litersPerMinute": 23470
		}
	],
	"dutyCycle": 1,
	"oilType": "unknown",
	"powerKw": 132,
	"weightKg": 3670,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/kaeser-dsd-240-sfc-8-5-bar.webp",
		"alt": "Repères techniques : KAESER DSD 240 SFC, 8,5 bar",
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
			"label": "Débit restitué à 7,5 bar",
			"value": "5,57 à 23,47 m³/min",
			"evidenceIds": [
				"october2-kaeser-dsd-p14"
			]
		},
		{
			"label": "Dimensions (largeur × profondeur × hauteur)",
			"value": "2690 × 1730 × 2150 mm",
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
			"value": "75 dB(A) ; voir les conditions et options de refroidissement du tableau",
			"evidenceIds": [
				"october2-kaeser-dsd-p14"
			]
		}
	],
	"editorial": {
		"overview": "KAESER DSD 240 SFC, 8,5 bar. 23 470 L/min à 7,5 bar. Moteur 132 kW ; sans sécheur.",
		"verifiedFacts": [
			"Débits restitués associés aux pressions du tableau de cette configuration.",
			"Cuve intégrée : 0 L ; aucun volume de réservoir externe ajouté."
		],
		"limitations": [
			"La plage SFC décrit le réglage de vitesse à une pression donnée ; seul son maximum publié est utilisé comme capacité disponible. La stabilité à faible charge et la régulation ne sont pas simulées.",
			"Service continu déclaré pour la série ; les conditions d’installation, de refroidissement et d’entretien restent applicables.",
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
		},
		{
			"id": "october2-kaeser-sfc-duty-id-p8",
			"sourceUrl": "https://id.kaeser.com/download.ashx?id=tcm%3A148-5945#page=8",
			"sourceLabel": "KAESER, catalogue SFC, série SM à HSD, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 25bd99979d120d6f67d3938e84e4fb8125a9029e35972e170aa543df09a68322 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
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
		],
		"dutyCycle": [
			"october2-kaeser-sfc-duty-id-p8"
		]
	},
	"notes": [
		"FAD déclaré par le fabricant ; pression de fonctionnement distincte de la limite de pression de la configuration."
	]
};

export default product;
