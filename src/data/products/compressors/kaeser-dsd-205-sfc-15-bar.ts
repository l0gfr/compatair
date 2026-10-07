import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "kaeser-dsd-205-sfc-15-bar",
	"slug": "kaeser-dsd-205-sfc-15-bar",
	"brand": "KAESER",
	"model": "DSD 205 SFC",
	"variant": {
		"familyId": "kaeser-dsd-205-sfc",
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
			"litersPerMinute": 15160
		}
	],
	"dutyCycle": 1,
	"oilType": "unknown",
	"powerKw": 110,
	"weightKg": 3370,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/kaeser-dsd-205-sfc-15-bar.webp",
		"alt": "Repères techniques : KAESER DSD 205 SFC, 15 bar",
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
			"label": "Débit restitué à 13 bar",
			"value": "4,97 à 15,16 m³/min",
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
			"value": "73 dB(A) ; voir les conditions et options de refroidissement du tableau",
			"evidenceIds": [
				"october2-kaeser-dsd-p14"
			]
		}
	],
	"editorial": {
		"overview": "KAESER DSD 205 SFC, 15 bar. 15 160 L/min à 13 bar. Moteur 110 kW ; sans sécheur.",
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
