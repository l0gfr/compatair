const product = {
	"id": "broomwade-fm11rs-rsccp1133v4-7-bar",
	"slug": "broomwade-fm11rs-rsccp1133v4-7-bar",
	"brand": "BroomWade",
	"model": "FM11RS",
	"mpn": "RSCCP1133V4",
	"variant": {
		"familyId": "broomwade-fm11rs",
		"label": "sécheur intégré, 270 L, 7 bar, RSCCP1133V4",
		"distinguishingAttributes": {
			"équipement": "sécheur intégré",
			"cuve": "270 L",
			"pression": "7 bar",
			"référence": "RSCCP1133V4"
		}
	},
	"tankLiters": 270,
	"maxPressureBar": 7,
	"fadCurve": [
		{
			"pressureBar": 7,
			"litersPerMinute": 1580
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 11,
	"weightKg": 369,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/broomwade-fm11rs-rsccp1133v4-7-bar.webp",
		"alt": "Repères techniques : BroomWade FM11RS, réf. RSCCP1133V4, 7 bar",
		"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "sécheur intégré ; cuve intégrée 270 L",
			"evidenceIds": [
				"october2-broomwade-full-p19"
			]
		},
		{
			"label": "Débit restitué à 7 bar",
			"value": "1,58 m³/min",
			"evidenceIds": [
				"october2-broomwade-full-p19"
			]
		},
		{
			"label": "Dimensions (longueur × largeur × hauteur)",
			"value": "1600 × 700 × 1600 mm",
			"evidenceIds": [
				"october2-broomwade-full-p19"
			]
		}
	],
	"editorial": {
		"overview": "BroomWade FM11RS, réf. RSCCP1133V4, 7 bar. 1 580 L/min à 7 bar. Moteur 11 kW ; sécheur intégré.",
		"verifiedFacts": [
			"Débits restitués associés aux pressions du tableau de cette configuration.",
			"Cuve intégrée : 270 L ; aucun volume de réservoir externe ajouté.",
			"Numéro d’article fabricant : RSCCP1133V4."
		],
		"limitations": [
			"Les points FAD publiés ne constituent pas une mesure de toute la courbe ; aucune extrapolation au-dessus de la dernière pression documentée.",
			"Service continu déclaré pour la série ; les conditions d’installation, de refroidissement et d’entretien restent applicables.",
			"Documentation datée, disponibilité et équipement livré à confirmer sur le devis. Aucun avis d’utilisation ni essai CompatAir."
		]
	},
	"evidence": [
		{
			"id": "october2-broomwade-full-p19",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf#page=19",
			"sourceLabel": "BroomWade, catalogue avril 2026, page PDF 19",
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
			"october2-broomwade-full-p19"
		],
		"maxPressureBar": [
			"october2-broomwade-full-p19"
		],
		"fadCurve": [
			"october2-broomwade-full-p19"
		],
		"powerKw": [
			"october2-broomwade-full-p19"
		],
		"mpn": [
			"october2-broomwade-full-p19"
		],
		"weightKg": [
			"october2-broomwade-full-p19"
		],
		"oilType": [
			"october2-broomwade-full-p19"
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
