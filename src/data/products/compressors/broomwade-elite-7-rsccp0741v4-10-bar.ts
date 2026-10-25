import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "broomwade-elite-7-rsccp0741v4-10-bar",
	"slug": "broomwade-elite-7-rsccp0741v4-10-bar",
	"brand": "BroomWade",
	"model": "ELITE 7",
	"mpn": "RSCCP0741V4",
	"variant": {
		"familyId": "broomwade-elite-7",
		"label": "station avec sécheur, filtration et cuve, 270 L, 10 bar, RSCCP0741V4",
		"distinguishingAttributes": {
			"équipement": "station avec sécheur, filtration et cuve",
			"cuve": "270 L",
			"pression": "10 bar",
			"référence": "RSCCP0741V4"
		}
	},
	"tankLiters": 270,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 970
		}
	],
	"oilType": "oil",
	"powerKw": 7.5,
	"weightKg": 364,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/broomwade-elite-7-rsccp0741v4-10-bar.webp",
		"alt": "Repères techniques : BroomWade ELITE 7, réf. RSCCP0741V4, 10 bar",
		"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "station avec sécheur, filtration et cuve ; cuve intégrée 270 L",
			"evidenceIds": [
				"october2-broomwade-full-p20"
			]
		},
		{
			"label": "Débit restitué à 10 bar",
			"value": "0,97 m³/min",
			"evidenceIds": [
				"october2-broomwade-full-p20"
			]
		},
		{
			"label": "Dimensions publiées, ordre des axes non précisé",
			"value": "1539 × 1535 × 787 mm",
			"evidenceIds": [
				"october2-broomwade-full-p20"
			]
		},
		{
			"label": "Comparaison documentée et limite de choix",
			"value": "Comparer la capacité à une pression réellement commune 10 bar entre ELITE 7 et 11, et isoler le taux de marche non confirmé.",
			"evidenceIds": [
				"review-20261025-s091-p2",
				"review-20261025-s091-p6",
				"review-20261025-s091-p11",
				"review-20261025-s091-p20"
			]
		}
	],
	"editorial": {
		"overview": "L’ELITE 7 RSCCP0741V4 fournit une capacité publiée de 0,97 m³/min à 10 bar pour 7,5 kW. L’ELITE 11 RSCCP1141V4 annonce 1,39 m³/min à la même pression pour 11 kW. Les deux stations ont une cuve 270 L, un sécheur et une filtration : augmenter le volume stocké n’explique pas leur différence de débit, puisque le réservoir est identique. Pour choisir entre elles, il faut confronter la demande du poste au débit de la référence exacte et confirmer son taux de marche.",
		"verifiedFacts": [
			"Débits restitués associés aux pressions du tableau de cette configuration.",
			"Cuve intégrée : 270 L ; aucun volume de réservoir externe ajouté.",
			"Numéro d’article fabricant : RSCCP0741V4."
		],
		"limitations": [
			"Le catalogue associe explicitement la capacité à la pression maximale 10 bar dans le tableau ELITE ; cet appariement est utilisable.",
			"La page web complémentaire répond 429. Les mentions de service continu de la série FM02–FM06 et les annexesISO indiquées pour d’autres modèles ne sont pas transférées à ELITE 7.",
			"Le taux de marche du groupe ELITE 7 reste non établi ; il est retiré des entrées de calcul.",
			"Les dimensions 1539 × 1535 × 787 mm sont conservées dans l’ordre publié, sans axes affirmés à partir de ce bloc. Disponibilité, filtres et sécheur livrés à confirmer."
		]
	},
	"evidence": [
		{
			"id": "october2-broomwade-full-p20",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf#page=20",
			"sourceLabel": "BroomWade, catalogue avril 2026, page PDF 20",
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
			"id": "review-20261025-s091-p2",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf#page=2",
			"sourceLabel": "BroomWade, relecture primaire du 25 octobre 2026, s091, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 11f1e7d5dfb0667503a81873214705d3b732290f6c8d46b7e300dd92b7badb3b. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s091-p6",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf#page=6",
			"sourceLabel": "BroomWade, relecture primaire du 25 octobre 2026, s091, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 11f1e7d5dfb0667503a81873214705d3b732290f6c8d46b7e300dd92b7badb3b. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s091-p11",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf#page=11",
			"sourceLabel": "BroomWade, relecture primaire du 25 octobre 2026, s091, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 11f1e7d5dfb0667503a81873214705d3b732290f6c8d46b7e300dd92b7badb3b. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s091-p20",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf#page=20",
			"sourceLabel": "BroomWade, relecture primaire du 25 octobre 2026, s091, page PDF 20",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 11f1e7d5dfb0667503a81873214705d3b732290f6c8d46b7e300dd92b7badb3b. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2-broomwade-full-p20"
		],
		"maxPressureBar": [
			"october2-broomwade-full-p20"
		],
		"fadCurve": [
			"october2-broomwade-full-p20"
		],
		"powerKw": [
			"october2-broomwade-full-p20"
		],
		"mpn": [
			"october2-broomwade-full-p20"
		],
		"weightKg": [
			"october2-broomwade-full-p20"
		],
		"oilType": [
			"october2-broomwade-full-p20"
		]
	},
	"notes": [
		"FAD déclaré par le fabricant ; pression de fonctionnement distincte de la limite de pression de la configuration."
	]
};

export default product;
