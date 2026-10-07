import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "kaeser-dsd-175-8-5-bar",
	"slug": "kaeser-dsd-175-8-5-bar",
	"brand": "KAESER",
	"model": "DSD 175",
	"variant": {
		"familyId": "kaeser-dsd-175",
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
			"litersPerMinute": 16920
		}
	],
	"oilType": "unknown",
	"powerKw": 90,
	"weightKg": 3090,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/kaeser-dsd-175-8-5-bar.webp",
		"alt": "Repères techniques : KAESER DSD 175, 8,5 bar",
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
			"value": "16,92 m³/min",
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
			"value": "70 dB(A) ; voir les conditions et options de refroidissement du tableau",
			"evidenceIds": [
				"october2-kaeser-dsd-p14"
			]
		}
	],
	"editorial": {
		"overview": "KAESER DSD 175, 8,5 bar. 16 920 L/min à 7,5 bar. Moteur 90 kW ; sans sécheur.",
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
