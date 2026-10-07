import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "broomwade-fm22-rsccp2211-10-bar",
	"slug": "broomwade-fm22-rsccp2211-10-bar",
	"brand": "BroomWade",
	"model": "FM22",
	"mpn": "RSCCP2211",
	"variant": {
		"familyId": "broomwade-fm22",
		"label": "sans sécheur, 500 L, 10 bar, RSCCP2211",
		"distinguishingAttributes": {
			"équipement": "sans sécheur",
			"cuve": "500 L",
			"pression": "10 bar",
			"référence": "RSCCP2211"
		}
	},
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 3060
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 22,
	"weightKg": 527,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/broomwade-fm22-rsccp2211-10-bar.webp",
		"alt": "Repères techniques : BroomWade FM22, réf. RSCCP2211, 10 bar",
		"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "sans sécheur ; cuve intégrée 500 L",
			"evidenceIds": [
				"october2-broomwade-full-p22"
			]
		},
		{
			"label": "Débit restitué à 10 bar",
			"value": "3,06 m³/min",
			"evidenceIds": [
				"october2-broomwade-full-p22"
			]
		},
		{
			"label": "Dimensions (longueur × largeur × hauteur)",
			"value": "2000 × 800 × 1850 mm",
			"evidenceIds": [
				"october2-broomwade-full-p22"
			]
		}
	],
	"editorial": {
		"overview": "BroomWade FM22, réf. RSCCP2211, 10 bar. 3 060 L/min à 10 bar. Moteur 22 kW ; sans sécheur.",
		"verifiedFacts": [
			"Débits restitués associés aux pressions du tableau de cette configuration.",
			"Cuve intégrée : 500 L ; aucun volume de réservoir externe ajouté.",
			"Numéro d’article fabricant : RSCCP2211."
		],
		"limitations": [
			"Les points FAD publiés ne constituent pas une mesure de toute la courbe ; aucune extrapolation au-dessus de la dernière pression documentée.",
			"Service continu déclaré pour la série ; les conditions d’installation, de refroidissement et d’entretien restent applicables.",
			"Documentation datée, disponibilité et équipement livré à confirmer sur le devis. Aucun avis d’utilisation ni essai CompatAir."
		]
	},
	"evidence": [
		{
			"id": "october2-broomwade-full-p22",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf#page=22",
			"sourceLabel": "BroomWade, catalogue avril 2026, page PDF 22",
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
			"october2-broomwade-full-p22"
		],
		"maxPressureBar": [
			"october2-broomwade-full-p22"
		],
		"fadCurve": [
			"october2-broomwade-full-p22"
		],
		"powerKw": [
			"october2-broomwade-full-p22"
		],
		"mpn": [
			"october2-broomwade-full-p22"
		],
		"weightKg": [
			"october2-broomwade-full-p22"
		],
		"oilType": [
			"october2-broomwade-full-p22"
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
