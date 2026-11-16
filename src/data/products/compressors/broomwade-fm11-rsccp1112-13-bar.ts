import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "broomwade-fm11-rsccp1112-13-bar",
	"slug": "broomwade-fm11-rsccp1112-13-bar",
	"brand": "BroomWade",
	"model": "FM11",
	"mpn": "RSCCP1112",
	"variant": {
		"familyId": "broomwade-fm11",
		"label": "sans sécheur, 270 L, 13 bar, RSCCP1112",
		"distinguishingAttributes": {
			"équipement": "sans sécheur",
			"cuve": "270 L",
			"pression": "13 bar",
			"référence": "RSCCP1112"
		}
	},
	"tankLiters": 270,
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 13,
			"litersPerMinute": 1140
		}
	],
	"oilType": "oil",
	"powerKw": 11,
	"weightKg": 314,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/broomwade-fm11-rsccp1112-13-bar-technical-20261116-reviews.svg",
		"alt": "Repères techniques : BroomWade FM11, réf. RSCCP1112, 13 bar",
		"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "sans sécheur ; cuve intégrée 270 L",
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
			"value": "1600 × 700 × 1600 mm",
			"evidenceIds": [
				"october2-broomwade-full-p17"
			]
		}
	],
	"editorial": {
		"overview": "Le FM11 RSCCP1112 est la version fixe 13 bar sur cuve 270 L, sans sécheur, déclarée à 1,14 m³/min à cette pression. Le RSCCP1111 10 bar donne 1,39 ; le RSCCP1116 change le réservoir en 500 L. Le groupe reste de 11 kW et la configuration 270 L pèse 314 kg. La source HTML reste fermée et aucun taux numérique de marche du groupe n’est déduit du PDF.",
		"verifiedFacts": [
			"Débits restitués associés aux pressions du tableau de cette configuration.",
			"Cuve intégrée : 270 L ; aucun volume de réservoir externe ajouté.",
			"Numéro d’article fabricant : RSCCP1112."
		],
		"limitations": [
			"Les points FAD publiés ne constituent pas une mesure de toute la courbe ; aucune extrapolation au-dessus de la dernière pression documentée.",
			"Documentation datée, disponibilité et équipement livré à confirmer sur le devis. Aucun avis d’utilisation ni essai CompatAir.",
			"Le taux de marche du groupe complet n’est pas chiffré par les passages retenus ; aucune valeur numérique n’est déduite du service du moteur ou d’une promesse générale."
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
			"id": "review:2026-11-16-reviews:broomwade-fm11-rsccp1112-13-bar:0",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/blte4df36746553755b/6a82b94b0c5540172c281ba0/25317_BroomWade_No_Price_Book_EURO_EN_Work.pdf",
			"sourceLabel": "BroomWade, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le FM11 RSCCP1112 est la version fixe 13 bar sur cuve 270 L, sans sécheur, déclarée à 1,14 m³/min à cette pression. Le RSCCP1111 10 bar donne 1,39 ; le RSCCP1116 change le réservoir en 500 L. Le groupe reste de 11 kW et la configuration 270 L pèse 314 kg. La source HTML reste fermée et aucun taux numérique de marche du groupe n’est déduit du PDF. GET complet SHA-256 11f1e7d5dfb0667503a81873214705d3b732290f6c8d46b7e300dd92b7badb3b. Pages PDF lues : 17."
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
		]
	},
	"notes": [
		"FAD déclaré par le fabricant ; pression de fonctionnement distincte de la limite de pression de la configuration."
	]
};

export default product;
