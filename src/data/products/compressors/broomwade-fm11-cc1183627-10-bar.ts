import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "broomwade-fm11-cc1183627-10-bar",
	"slug": "broomwade-fm11-cc1183627-10-bar",
	"brand": "BroomWade",
	"model": "FM11",
	"mpn": "CC1183627",
	"variant": {
		"familyId": "broomwade-fm11",
		"label": "sans sécheur, 0 L, 10 bar, CC1183627",
		"distinguishingAttributes": {
			"équipement": "sans sécheur",
			"cuve": "0 L",
			"pression": "10 bar",
			"référence": "CC1183627"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 1390
		}
	],
	"oilType": "oil",
	"powerKw": 11,
	"weightKg": 219,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/broomwade-fm11-cc1183627-10-bar.webp",
		"alt": "Repères techniques : BroomWade FM11, réf. CC1183627, 10 bar",
		"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Code",
			"value": "CC1183627",
			"evidenceIds": [
				"broomwade-fm11-cc1183627-10-bar-reserved-20261103-1"
			]
		},
		{
			"label": "Version",
			"value": "FM11 fixe, 10 bar",
			"evidenceIds": [
				"broomwade-fm11-cc1183627-10-bar-reserved-20261103-1"
			]
		},
		{
			"label": "Capacity at maximum pressure",
			"value": "1,39 m³/min",
			"evidenceIds": [
				"broomwade-fm11-cc1183627-10-bar-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "11 kW",
			"evidenceIds": [
				"broomwade-fm11-cc1183627-10-bar-reserved-20261103-1"
			]
		},
		{
			"label": "Alimentation",
			"value": "400 V / 50 Hz",
			"evidenceIds": [
				"broomwade-fm11-cc1183627-10-bar-reserved-20261103-1"
			]
		},
		{
			"label": "Masse au sol",
			"value": "219 kg",
			"evidenceIds": [
				"broomwade-fm11-cc1183627-10-bar-reserved-20261103-1"
			]
		}
	],
	"editorial": {
		"overview": "BroomWade FM11. Le code CC1183627 est la FM11 au sol en version 10 bar, à 1,39 m³/min. La brochure lie explicitement le débit à la pression maximale ; la variante 270 L pèse 314 kg et la 500 L pèse 379 kg, contre 219 kg au sol. La page de gamme reste en HTTP 429 et ne sert plus de preuve au taux de marche.",
		"verifiedFacts": [
			"Code : CC1183627.",
			"Version : FM11 fixe, 10 bar.",
			"Capacity at maximum pressure : 1,39 m³/min.",
			"Puissance : 11 kW.",
			"Alimentation : 400 V / 50 Hz.",
			"Masse au sol : 219 kg."
		],
		"limitations": [
			"Le taux de marche du groupe complet n’est pas quantifié dans la brochure ; la page HTML 429 reste non rétablie."
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
		},
		{
			"id": "broomwade-fm11-cc1183627-10-bar-reserved-20261103-1",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf#page=17",
			"sourceLabel": "BroomWade : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 11f1e7d5dfb0667503a81873214705d3b732290f6c8d46b7e300dd92b7badb3b. Le code CC1183627 est la FM11 au sol en version 10 bar, à 1,39 m³/min. La brochure lie explicitement le débit à la pression maximale ; la variante 270 L pèse 314 kg et la 500 L pèse 379 kg, contre 219 kg au sol. La page de gamme reste en HTTP 429 et ne sert plus de preuve au taux de marche."
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
			"broomwade-fm11-cc1183627-10-bar-reserved-20261103-1"
		],
		"oilType": [
			"october2-broomwade-full-p17"
		],
		"editorial": [
			"broomwade-fm11-cc1183627-10-bar-reserved-20261103-1"
		],
		"specifications": [
			"broomwade-fm11-cc1183627-10-bar-reserved-20261103-1"
		]
	},
	"notes": [
		"FAD déclaré par le fabricant ; pression de fonctionnement distincte de la limite de pression de la configuration."
	]
};

export default product;
