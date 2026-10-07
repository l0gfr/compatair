import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "kaeser-csdx-175-sfc-12-bar",
	"slug": "kaeser-csdx-175-sfc-12-bar",
	"brand": "KAESER",
	"model": "CSDX 175 SFC",
	"variant": {
		"familyId": "kaeser-csdx-175-sfc",
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
			"litersPerMinute": 14330
		}
	],
	"dutyCycle": 1,
	"oilType": "unknown",
	"powerKw": 90,
	"weightKg": 1870,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/kaeser-csdx-175-sfc-12-bar.webp",
		"alt": "Repères techniques : KAESER CSDX 175 SFC, 12 bar",
		"sourceUrl": "https://id.kaeser.com/download.ashx?id=tcm:148-5928",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "sans sécheur ; cuve intégrée 0 L",
			"evidenceIds": [
				"october2-kaeser-csd-p12"
			]
		},
		{
			"label": "Débit restitué à 10 bar",
			"value": "3,45 à 14,33 m³/min",
			"evidenceIds": [
				"october2-kaeser-csd-p12"
			]
		},
		{
			"label": "Dimensions (largeur × profondeur × hauteur)",
			"value": "2100 × 1280 × 1950 mm",
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
		"overview": "KAESER CSDX 175 SFC, 12 bar. 14 330 L/min à 10 bar. Moteur 90 kW ; sans sécheur.",
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
			"id": "october2-kaeser-csd-p12",
			"sourceUrl": "https://id.kaeser.com/download.ashx?id=tcm:148-5928#page=12",
			"sourceLabel": "KAESER, brochure CSD, page PDF 12",
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
