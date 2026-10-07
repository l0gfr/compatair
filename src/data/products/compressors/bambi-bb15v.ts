import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "bambi-bb15v",
	"slug": "bambi-bb15v",
	"brand": "Bambi",
	"model": "BB15V",
	"mpn": "BB15V",
	"variant": {
		"familyId": "bambi-bb15v",
		"label": "Groupe avec cuve 15 L",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve 15 L",
			"pressionMaximale": "8 bar",
			"cuve": "15 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 15,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 1,
			"litersPerMinute": 35
		},
		{
			"pressureBar": 2,
			"litersPerMinute": 32
		},
		{
			"pressureBar": 3,
			"litersPerMinute": 30
		},
		{
			"pressureBar": 4,
			"litersPerMinute": 28
		},
		{
			"pressureBar": 5,
			"litersPerMinute": 27
		},
		{
			"pressureBar": 6,
			"litersPerMinute": 26
		},
		{
			"pressureBar": 7,
			"litersPerMinute": 25.5
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 25
		}
	],
	"dutyCycle": 0.5,
	"oilType": "oil",
	"powerKw": 0.34,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/bambi-bb15v.svg",
		"alt": "Repères techniques : Bambi BB15V",
		"sourceUrl": "https://bambi-air.co.uk/product/bb15v/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve 15 L",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Air livré à 1 bar",
			"value": "35 L/min",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Air livré à 2 bar",
			"value": "32 L/min",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Air livré à 3 bar",
			"value": "30 L/min",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Air livré à 4 bar",
			"value": "28 L/min",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "27 L/min",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "26 L/min",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Air livré à 7 bar",
			"value": "25,5 L/min",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Air livré à 8 bar",
			"value": "25 L/min",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "15 L",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "50 %, fenêtre non précisée",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "240 volt / 50Hz",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		}
	],
	"editorial": {
		"overview": "Bambi BB15V. 35 L/min à 1 bar ; 32 L/min à 2 bar ; 30 L/min à 3 bar ; 28 L/min à 4 bar ; 27 L/min à 5 bar ; 26 L/min à 6 bar ; 25,5 L/min à 7 bar ; 25 L/min à 8 bar. Groupe avec cuve 15 L.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 15 L.",
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
			"id": "october3d-bambi-product-29",
			"sourceUrl": "https://bambi-air.co.uk/product/bb15v/",
			"sourceLabel": "Bambi, BB15V, fiche constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 0602bb7839acf86bbccb9d8abfccc8ca540282e58b62b12341634b0897d93cd1 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-bambi-product-29"
		],
		"tankLiters": [
			"october3d-bambi-product-29"
		],
		"fadCurve": [
			"october3d-bambi-product-29"
		],
		"dutyCycle": [
			"october3d-bambi-product-29"
		],
		"oilType": [
			"october3d-bambi-product-29"
		],
		"powerKw": [
			"october3d-bambi-product-29"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
