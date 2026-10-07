import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "kaeser-fsd-575-8-5-bar",
	"slug": "kaeser-fsd-575-8-5-bar",
	"brand": "KAESER",
	"model": "FSD 575",
	"variant": {
		"familyId": "kaeser-fsd-575",
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
			"litersPerMinute": 58400
		}
	],
	"oilType": "unknown",
	"powerKw": 315,
	"weightKg": 6750,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/kaeser-fsd-575-8-5-bar.webp",
		"alt": "Repères techniques : KAESER FSD 575, 8,5 bar",
		"sourceUrl": "https://id.kaeser.com/download.ashx?id=tcm:148-5936",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "sans sécheur ; cuve intégrée 0 L",
			"evidenceIds": [
				"october2-kaeser-fsd-p12"
			]
		},
		{
			"label": "Débit restitué à 7,5 bar",
			"value": "58,4 m³/min",
			"evidenceIds": [
				"october2-kaeser-fsd-p12"
			]
		},
		{
			"label": "Dimensions (largeur × profondeur × hauteur)",
			"value": "3495 × 2145 × 2360 mm",
			"evidenceIds": [
				"october2-kaeser-fsd-p12"
			]
		},
		{
			"label": "Raccordement d’air",
			"value": "DN 150",
			"evidenceIds": [
				"october2-kaeser-fsd-p12"
			]
		},
		{
			"label": "Niveau sonore imprimé",
			"value": "79 dB(A) ; voir les conditions et options de refroidissement du tableau",
			"evidenceIds": [
				"october2-kaeser-fsd-p12"
			]
		}
	],
	"editorial": {
		"overview": "KAESER FSD 575, 8,5 bar. 58 400 L/min à 7,5 bar. Moteur 315 kW ; sans sécheur.",
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
			"id": "october2-kaeser-fsd-p12",
			"sourceUrl": "https://id.kaeser.com/download.ashx?id=tcm:148-5936#page=12",
			"sourceLabel": "KAESER, brochure FSD, page PDF 12",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 11616e1e91969f11b193e63a11f3b5a24c3c4fd06bf0f69a05bd61ff8de2e1ad de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2-kaeser-fsd-p12"
		],
		"maxPressureBar": [
			"october2-kaeser-fsd-p12"
		],
		"fadCurve": [
			"october2-kaeser-fsd-p12"
		],
		"powerKw": [
			"october2-kaeser-fsd-p12"
		],
		"weightKg": [
			"october2-kaeser-fsd-p12"
		]
	},
	"notes": [
		"FAD déclaré par le fabricant ; pression de fonctionnement distincte de la limite de pression de la configuration."
	]
};

export default product;
