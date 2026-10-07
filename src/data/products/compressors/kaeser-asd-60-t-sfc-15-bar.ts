import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "kaeser-asd-60-t-sfc-15-bar",
	"slug": "kaeser-asd-60-t-sfc-15-bar",
	"brand": "KAESER",
	"model": "ASD 60 T SFC",
	"variant": {
		"familyId": "kaeser-asd-60-t-sfc",
		"label": "sécheur intégré, 0 L, 15 bar",
		"distinguishingAttributes": {
			"équipement": "sécheur intégré",
			"cuve": "0 L",
			"pression": "15 bar"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 15,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 4760
		},
		{
			"pressureBar": 13,
			"litersPerMinute": 4140
		}
	],
	"dutyCycle": 1,
	"oilType": "unknown",
	"powerKw": 30,
	"weightKg": 890,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/kaeser-asd-60-t-sfc-15-bar.webp",
		"alt": "Repères techniques : KAESER ASD 60 T SFC, 15 bar",
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
			"value": "1 à 4,76 m³/min",
			"evidenceIds": [
				"october2-kaeser-asd-p10"
			]
		},
		{
			"label": "Débit restitué à 13 bar",
			"value": "0,93 à 4,14 m³/min",
			"evidenceIds": [
				"october2-kaeser-asd-p10"
			]
		},
		{
			"label": "Dimensions (largeur × profondeur × hauteur)",
			"value": "1850 × 900 × 1530 mm",
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
			"value": "70 dB(A) ; voir les conditions et options de refroidissement du tableau",
			"evidenceIds": [
				"october2-kaeser-asd-p10"
			]
		}
	],
	"editorial": {
		"overview": "KAESER ASD 60 T SFC, 15 bar. 4 760 L/min à 10 bar ; 4 140 L/min à 13 bar. Moteur 30 kW ; sécheur intégré.",
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
			"october2-kaeser-sfc-duty-id-p8"
		]
	},
	"notes": [
		"FAD déclaré par le fabricant ; pression de fonctionnement distincte de la limite de pression de la configuration."
	]
};

export default product;
