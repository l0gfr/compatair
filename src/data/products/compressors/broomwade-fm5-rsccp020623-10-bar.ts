import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "broomwade-fm5-rsccp020623-10-bar",
	"slug": "broomwade-fm5-rsccp020623-10-bar",
	"brand": "BroomWade",
	"model": "FM5",
	"mpn": "RSCCP020623",
	"variant": {
		"familyId": "broomwade-fm5",
		"label": "sans sécheur, démarrage SDS, 500 L, 10 bar, RSCCP020623",
		"distinguishingAttributes": {
			"équipement": "sans sécheur, démarrage SDS",
			"cuve": "500 L",
			"pression": "10 bar",
			"référence": "RSCCP020623"
		}
	},
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 660
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 5.5,
	"weightKg": 318,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/broomwade-fm5-rsccp020623-10-bar.webp",
		"alt": "Repères techniques : BroomWade FM5, réf. RSCCP020623, 10 bar",
		"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "sans sécheur, démarrage SDS ; cuve intégrée 500 L",
			"evidenceIds": [
				"october2-broomwade-full-p9"
			]
		},
		{
			"label": "Débit restitué à 10 bar",
			"value": "0,66 m³/min",
			"evidenceIds": [
				"october2-broomwade-full-p9"
			]
		},
		{
			"label": "Dimensions (longueur × largeur × hauteur)",
			"value": "1885 × 720 × 1700 mm",
			"evidenceIds": [
				"october2-broomwade-full-p9"
			]
		}
	],
	"editorial": {
		"overview": "BroomWade FM5, réf. RSCCP020623, 10 bar. 660 L/min à 10 bar. Moteur 5,5 kW ; sans sécheur, démarrage SDS.",
		"verifiedFacts": [
			"Débits restitués associés aux pressions du tableau de cette configuration.",
			"Cuve intégrée : 500 L ; aucun volume de réservoir externe ajouté.",
			"Numéro d’article fabricant : RSCCP020623."
		],
		"limitations": [
			"Les points FAD publiés ne constituent pas une mesure de toute la courbe ; aucune extrapolation au-dessus de la dernière pression documentée.",
			"Service continu déclaré pour la série ; les conditions d’installation, de refroidissement et d’entretien restent applicables.",
			"Documentation datée, disponibilité et équipement livré à confirmer sur le devis. Aucun avis d’utilisation ni essai CompatAir."
		]
	},
	"evidence": [
		{
			"id": "october2-broomwade-full-p9",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf#page=9",
			"sourceLabel": "BroomWade, catalogue avril 2026, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 11f1e7d5dfb0667503a81873214705d3b732290f6c8d46b7e300dd92b7badb3b de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2-broomwade-full-p6",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf#page=6",
			"sourceLabel": "BroomWade, catalogue avril 2026, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 11f1e7d5dfb0667503a81873214705d3b732290f6c8d46b7e300dd92b7badb3b de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2-broomwade-full-p9"
		],
		"maxPressureBar": [
			"october2-broomwade-full-p9"
		],
		"fadCurve": [
			"october2-broomwade-full-p9"
		],
		"powerKw": [
			"october2-broomwade-full-p9"
		],
		"mpn": [
			"october2-broomwade-full-p9"
		],
		"weightKg": [
			"october2-broomwade-full-p9"
		],
		"oilType": [
			"october2-broomwade-full-p9"
		],
		"dutyCycle": [
			"october2-broomwade-full-p6"
		]
	},
	"notes": [
		"FAD déclaré par le fabricant ; pression de fonctionnement distincte de la limite de pression de la configuration."
	]
};

export default product;
