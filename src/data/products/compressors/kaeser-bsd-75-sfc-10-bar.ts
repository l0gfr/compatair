import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "kaeser-bsd-75-sfc-10-bar",
	"slug": "kaeser-bsd-75-sfc-10-bar",
	"brand": "KAESER",
	"model": "BSD 75 SFC",
	"variant": {
		"familyId": "kaeser-bsd-75-sfc",
		"label": "sans sécheur, 0 L, 10 bar",
		"distinguishingAttributes": {
			"équipement": "sans sécheur",
			"cuve": "0 L",
			"pression": "10 bar"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 7.5,
			"litersPerMinute": 7440
		},
		{
			"pressureBar": 10,
			"litersPerMinute": 6510
		}
	],
	"dutyCycle": 1,
	"oilType": "unknown",
	"powerKw": 37,
	"weightKg": 1020,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/kaeser-bsd-75-sfc-10-bar.webp",
		"alt": "Repères techniques : KAESER BSD 75 SFC, 10 bar",
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
			"label": "Débit restitué à 7,5 bar",
			"value": "1,54 à 7,44 m³/min",
			"evidenceIds": [
				"october2-kaeser-bsd-p10"
			]
		},
		{
			"label": "Débit restitué à 10 bar",
			"value": "1,51 à 6,51 m³/min",
			"evidenceIds": [
				"october2-kaeser-bsd-p10"
			]
		},
		{
			"label": "Dimensions (largeur × profondeur × hauteur)",
			"value": "1665 × 1030 × 1700 mm",
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
			"value": "72 dB(A) ; voir les conditions et options de refroidissement du tableau",
			"evidenceIds": [
				"october2-kaeser-bsd-p10"
			]
		}
	],
	"editorial": {
		"overview": "KAESER BSD 75 SFC, 10 bar. 7 440 L/min à 7,5 bar ; 6 510 L/min à 10 bar. Moteur 37 kW ; sans sécheur.",
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
			"october2-kaeser-sfc-duty-id-p8"
		]
	},
	"notes": [
		"FAD déclaré par le fabricant ; pression de fonctionnement distincte de la limite de pression de la configuration."
	]
};

export default product;
