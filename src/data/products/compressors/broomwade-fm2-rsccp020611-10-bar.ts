const product = {
	"id": "broomwade-fm2-rsccp020611-10-bar",
	"slug": "broomwade-fm2-rsccp020611-10-bar",
	"brand": "BroomWade",
	"model": "FM2",
	"mpn": "RSCCP020611",
	"variant": {
		"familyId": "broomwade-fm2",
		"label": "sans sécheur, 270 L, 10 bar, RSCCP020611",
		"distinguishingAttributes": {
			"équipement": "sans sécheur",
			"cuve": "270 L",
			"pression": "10 bar",
			"référence": "RSCCP020611"
		}
	},
	"tankLiters": 270,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 210
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 2.2,
	"weightKg": 242,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/broomwade-fm2-rsccp020611-10-bar.webp",
		"alt": "Repères techniques : BroomWade FM2, réf. RSCCP020611, 10 bar",
		"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "sans sécheur ; cuve intégrée 270 L",
			"evidenceIds": [
				"october2-broomwade-full-p9"
			]
		},
		{
			"label": "Débit restitué à 10 bar",
			"value": "0,21 m³/min",
			"evidenceIds": [
				"october2-broomwade-full-p9"
			]
		},
		{
			"label": "Dimensions (longueur × largeur × hauteur)",
			"value": "1539 × 720 × 1604 mm",
			"evidenceIds": [
				"october2-broomwade-full-p9"
			]
		}
	],
	"editorial": {
		"overview": "BroomWade FM2, réf. RSCCP020611, 10 bar. 210 L/min à 10 bar. Moteur 2,2 kW ; sans sécheur.",
		"verifiedFacts": [
			"Débits restitués associés aux pressions du tableau de cette configuration.",
			"Cuve intégrée : 270 L ; aucun volume de réservoir externe ajouté.",
			"Numéro d’article fabricant : RSCCP020611."
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
