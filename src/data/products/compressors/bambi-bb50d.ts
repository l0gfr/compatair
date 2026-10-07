import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "bambi-bb50d",
	"slug": "bambi-bb50d",
	"brand": "Bambi",
	"model": "BB50D",
	"mpn": "BB50D",
	"variant": {
		"familyId": "bambi-bb50d",
		"label": "Groupe avec cuve 50 L et sécheur",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve 50 L et sécheur",
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
			"value": "Groupe avec cuve 50 L et sécheur",
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
		"overview": "Bambi BB50D. 70 L/min à 1 bar ; 64 L/min à 2 bar ; 60 L/min à 3 bar ; 56 L/min à 4 bar ; 54 L/min à 5 bar ; 52 L/min à 6 bar ; 51 L/min à 7 bar ; 50 L/min à 8 bar. Groupe avec cuve 50 L et sécheur.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 50 L.",
			"Pression maximale de fonctionnement publiée : 8 bar."
		],
		"limitations": [
			"Le fabricant ne précise pas les conditions de référence ISO 1217 ni la fenêtre de temps du cycle de service dans cette fiche.",
			"Cycle intermittent déclaré ; durée de référence non précisée. L’exploitation permanente n’est pas assimilée à un service continu.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Installation et disponibilité en France à confirmer selon l’alimentation et le raccordement publiés."
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
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
