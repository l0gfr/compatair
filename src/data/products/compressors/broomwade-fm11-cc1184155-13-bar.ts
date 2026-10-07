import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "broomwade-fm11-cc1184155-13-bar",
	"slug": "broomwade-fm11-cc1184155-13-bar",
	"brand": "BroomWade",
	"model": "FM11",
	"mpn": "CC1184155",
	"variant": {
		"familyId": "broomwade-fm11",
		"label": "sans sécheur, 0 L, 13 bar, CC1184155",
		"distinguishingAttributes": {
			"équipement": "sans sécheur",
			"cuve": "0 L",
			"pression": "13 bar",
			"référence": "CC1184155"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 13,
			"litersPerMinute": 1140
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 11,
	"weightKg": 219,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/broomwade-fm11-cc1184155-13-bar.webp",
		"alt": "Repères techniques : BroomWade FM11, réf. CC1184155, 13 bar",
		"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "sans sécheur ; cuve intégrée 0 L",
			"evidenceIds": [
				"october2-broomwade-full-p17"
			]
		},
		{
			"label": "Débit restitué à 13 bar",
			"value": "1,14 m³/min",
			"evidenceIds": [
				"october2-broomwade-full-p17"
			]
		},
		{
			"label": "Dimensions (longueur × largeur × hauteur)",
			"value": "667 × 630 × 1050 mm",
			"evidenceIds": [
				"october2-broomwade-full-p17"
			]
		}
	],
	"editorial": {
		"overview": "BroomWade FM11, réf. CC1184155, 13 bar. 1 140 L/min à 13 bar. Moteur 11 kW ; sans sécheur.",
		"verifiedFacts": [
			"Débits restitués associés aux pressions du tableau de cette configuration.",
			"Cuve intégrée : 0 L ; aucun volume de réservoir externe ajouté.",
			"Numéro d’article fabricant : CC1184155."
		],
		"limitations": [
			"Les points FAD publiés ne constituent pas une mesure de toute la courbe ; aucune extrapolation au-dessus de la dernière pression documentée.",
			"Service continu déclaré pour la série ; les conditions d’installation, de refroidissement et d’entretien restent applicables.",
			"Documentation datée, disponibilité et équipement livré à confirmer sur le devis. Aucun avis d’utilisation ni essai CompatAir."
		]
	},
	"evidence": [
		{
			"id": "october2-broomwade-full-p17",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf#page=17",
			"sourceLabel": "BroomWade, catalogue avril 2026, page PDF 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 11f1e7d5dfb0667503a81873214705d3b732290f6c8d46b7e300dd92b7badb3b de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2-broomwade-duty-web",
			"sourceUrl": "https://www.broomwade.com/en/products/",
			"sourceLabel": "BroomWade, gamme de compresseurs à vis 2,2 à 132 kW",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5093dd4e4662bd2c2e4e7b08d1c36cab9fd49243104cc6007fea6d8244ad4f36 de l’extrait textuel versionné, et non du HTML original. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2-broomwade-full-p17"
		],
		"maxPressureBar": [
			"october2-broomwade-full-p17"
		],
		"fadCurve": [
			"october2-broomwade-full-p17"
		],
		"powerKw": [
			"october2-broomwade-full-p17"
		],
		"mpn": [
			"october2-broomwade-full-p17"
		],
		"weightKg": [
			"october2-broomwade-full-p17"
		],
		"oilType": [
			"october2-broomwade-full-p17"
		],
		"dutyCycle": [
			"october2-broomwade-duty-web"
		]
	},
	"notes": [
		"FAD déclaré par le fabricant ; pression de fonctionnement distincte de la limite de pression de la configuration."
	]
};

export default product;
