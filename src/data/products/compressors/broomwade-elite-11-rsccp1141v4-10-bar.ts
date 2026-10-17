import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "broomwade-elite-11-rsccp1141v4-10-bar",
	"slug": "broomwade-elite-11-rsccp1141v4-10-bar",
	"brand": "BroomWade",
	"model": "ELITE 11",
	"mpn": "RSCCP1141V4",
	"variant": {
		"familyId": "broomwade-elite-11",
		"label": "station avec sécheur, filtration et cuve, 270 L, 10 bar, RSCCP1141V4",
		"distinguishingAttributes": {
			"équipement": "station avec sécheur, filtration et cuve",
			"cuve": "270 L",
			"pression": "10 bar",
			"référence": "RSCCP1141V4"
		}
	},
	"tankLiters": 270,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 1390
		}
	],
	"oilType": "oil",
	"powerKw": 11,
	"weightKg": 378,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/broomwade-elite-11-rsccp1141v4-10-bar.webp",
		"alt": "Repères techniques : BroomWade ELITE 11, réf. RSCCP1141V4, 10 bar",
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
			"value": "1,39 m³/min",
			"evidenceIds": [
				"october2-broomwade-full-p20"
			]
		},
		{
			"label": "Dimensions publiées (ordre des axes non précisé dans cette ligne)",
			"value": "1539 × 1535 × 787 mm",
			"evidenceIds": [
				"october2-broomwade-full-p20"
			]
		}
	],
	"editorial": {
		"overview": "ELITE 11, article RSCCP1141V4 : station de 11 kW avec réservoir de 270 L, sécheur, filtration et purge automatique. La capacité annoncée à 10 bar est de 1,39 m³/min ; l’ELITE 7 voisin annonce 0,97 m³/min pour 7,5 kW, avec le même volume de cuve.",
		"verifiedFacts": [
			"Débits restitués associés aux pressions du tableau de cette configuration.",
			"Cuve intégrée : 270 L ; aucun volume de réservoir externe ajouté.",
			"Numéro d’article fabricant : RSCCP1141V4."
		],
		"limitations": [
			"Le taux de marche applicable à ELITE 11 reste à confirmer ; aucun service continu n’est retenu à partir de la page complémentaire indisponible.",
			"Les dimensions 1 539 × 1 535 × 787 mm sont conservées dans l’ordre publié, dont les axes ne sont pas explicités dans ce bloc.",
			"Le sécheur et les filtres livrés doivent être précisés sur le devis. Une option d’huile alimentaire ne documente pas à elle seule une classe de pureté de l’air.",
			"Le bloc introductif du catalogue traite de compresseurs à vis lubrifiés ; la référence exacte et les consommables sont à confirmer dans la notice de la station."
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
