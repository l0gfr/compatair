import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "bambi-bb50d",
	"slug": "bambi-bb50d",
	"brand": "Bambi",
	"model": "BB50D",
	"mpn": "BB50D",
	"variant": {
		"familyId": "bambi-bb50d",
		"label": "Groupe à deux pompes sur cuve horizontale 50 L",
		"distinguishingAttributes": {
			"équipement": "Groupe à deux pompes sur cuve horizontale 50 L",
			"pressionMaximale": "8 bar",
			"cuve": "50 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 50,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 1,
			"litersPerMinute": 70
		},
		{
			"pressureBar": 2,
			"litersPerMinute": 64
		},
		{
			"pressureBar": 3,
			"litersPerMinute": 60
		},
		{
			"pressureBar": 4,
			"litersPerMinute": 56
		},
		{
			"pressureBar": 5,
			"litersPerMinute": 54
		},
		{
			"pressureBar": 6,
			"litersPerMinute": 52
		},
		{
			"pressureBar": 7,
			"litersPerMinute": 51
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 50
		}
	],
	"dutyCycle": 0.5,
	"oilType": "oil",
	"powerKw": 0.68,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/bambi-bb50d.svg",
		"alt": "Repères techniques : Bambi BB50D",
		"sourceUrl": "https://bambi-air.co.uk/product/bb50d/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe à deux pompes sur cuve horizontale 50 L",
			"evidenceIds": [
				"october3d-bambi-product-33"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-bambi-product-33"
			]
		},
		{
			"label": "Air livré à 1 bar",
			"value": "70 L/min",
			"evidenceIds": [
				"october3d-bambi-product-33"
			]
		},
		{
			"label": "Air livré à 2 bar",
			"value": "64 L/min",
			"evidenceIds": [
				"october3d-bambi-product-33"
			]
		},
		{
			"label": "Air livré à 3 bar",
			"value": "60 L/min",
			"evidenceIds": [
				"october3d-bambi-product-33"
			]
		},
		{
			"label": "Air livré à 4 bar",
			"value": "56 L/min",
			"evidenceIds": [
				"october3d-bambi-product-33"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "54 L/min",
			"evidenceIds": [
				"october3d-bambi-product-33"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "52 L/min",
			"evidenceIds": [
				"october3d-bambi-product-33"
			]
		},
		{
			"label": "Air livré à 7 bar",
			"value": "51 L/min",
			"evidenceIds": [
				"october3d-bambi-product-33"
			]
		},
		{
			"label": "Air livré à 8 bar",
			"value": "50 L/min",
			"evidenceIds": [
				"october3d-bambi-product-33"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "50 L",
			"evidenceIds": [
				"october3d-bambi-product-33"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "50 %, fenêtre non précisée",
			"evidenceIds": [
				"october3d-bambi-product-33"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "240 volt / 50Hz",
			"evidenceIds": [
				"october3d-bambi-product-33"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-bambi-product-33"
			]
		}
	],
	"editorial": {
		"overview": "BB50D : deux pompes lubrifiées sur cuve horizontale de 50 L, pour une puissance totale de 0,68 kW. Bambi publie 52 L/min à 6 bar et 50 L/min à 8 bar, avec un taux de marche maximal de 50 %. Le BB24D conserve la même production sur cuve de 24 L.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 50 L.",
			"Pression maximale de fonctionnement publiée : 8 bar."
		],
		"limitations": [
			"Le BB50D pèse 46 kg et mesure 55 × 88 × 29 cm en hauteur × largeur × profondeur. Le BB24D indique 31 kg ; la différence porte sur le stockage et le transport.",
			"Le taux de marche de 50 % est publié sans fenêtre de référence. La fiche ne précise pas les conditions ISO 1217.",
			"La configuration publiée est à deux pompes, sans sécheur annoncé. Un kit de roues est proposé en option pour les cuves horizontales.",
			"L’alimentation est de 240 V à 50 Hz avec une prise britannique ; une prise européenne est disponible sur demande."
		]
	},
	"evidence": [
		{
			"id": "october3d-bambi-product-33",
			"sourceUrl": "https://bambi-air.co.uk/product/bb50d/",
			"sourceLabel": "Bambi, BB50D, fiche constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 d5e1bf748d7aba1604f5d829b9db6289c96dd66a83ec5c955034c66290e65641 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-bambi-product-32-review-20261021-for-bambi-bb50d",
			"sourceUrl": "https://bambi-air.co.uk/product/bb24d/",
			"sourceLabel": "Bambi, BB24D, fiche constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-21",
			"confidence": "B",
			"notes": "Fiche voisine consultée en HTTPS le 21 octobre 2026 ; SHA-256 du corps : 1181a1d840e409b371bed3fca1c6822b0ad75c8cb487601a52213164b104f936. Configurations comparées séparément."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-bambi-product-33"
		],
		"tankLiters": [
			"october3d-bambi-product-33"
		],
		"fadCurve": [
			"october3d-bambi-product-33"
		],
		"dutyCycle": [
			"october3d-bambi-product-33"
		],
		"oilType": [
			"october3d-bambi-product-33"
		],
		"powerKw": [
			"october3d-bambi-product-33"
		],
		"voltage": [
			"october3d-bambi-product-33"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	],
	"voltage": "240 V, 50 Hz"
};

export default product;
