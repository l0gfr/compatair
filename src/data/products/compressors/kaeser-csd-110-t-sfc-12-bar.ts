const product = {
	"id": "kaeser-csd-110-t-sfc-12-bar",
	"slug": "kaeser-csd-110-t-sfc-12-bar",
	"brand": "KAESER",
	"model": "CSD 110 T SFC",
	"variant": {
		"familyId": "kaeser-csd-110-t-sfc",
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
			"litersPerMinute": 9140
		}
	],
	"dutyCycle": 1,
	"oilType": "unknown",
	"powerKw": 55,
	"weightKg": 1590,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/kaeser-csd-110-t-sfc-12-bar.webp",
		"alt": "Repères techniques : KAESER CSD 110 T SFC, 12 bar",
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
			"label": "Débit restitué à 10 bar",
			"value": "1,9 à 9,14 m³/min",
			"evidenceIds": [
				"october2-kaeser-csd-p11"
			]
		},
		{
			"label": "Dimensions (largeur × profondeur × hauteur)",
			"value": "2260 × 1100 × 1900 mm",
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
		"overview": "KAESER CSD 110 T SFC, 12 bar. 9 140 L/min à 10 bar. Moteur 55 kW ; sécheur intégré.",
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
			"october2-kaeser-sfc-duty-id-p8"
		]
	},
	"notes": [
		"FAD déclaré par le fabricant ; pression de fonctionnement distincte de la limite de pression de la configuration."
	]
};

export default product;
