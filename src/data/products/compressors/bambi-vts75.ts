import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "bambi-vts75",
	"slug": "bambi-vts75",
	"brand": "Bambi",
	"model": "VTS75",
	"mpn": "VTS75",
	"variant": {
		"familyId": "bambi-vts75",
		"label": "Groupe avec cuve 23 L",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve 23 L",
			"pressionMaximale": "8 bar",
			"cuve": "23 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 23,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 1,
			"litersPerMinute": 100
		},
		{
			"pressureBar": 2,
			"litersPerMinute": 88
		},
		{
			"pressureBar": 3,
			"litersPerMinute": 75
		},
		{
			"pressureBar": 4,
			"litersPerMinute": 66
		},
		{
			"pressureBar": 5,
			"litersPerMinute": 58
		},
		{
			"pressureBar": 6,
			"litersPerMinute": 52
		},
		{
			"pressureBar": 7,
			"litersPerMinute": 45
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 42
		}
	],
	"dutyCycle": 0.5,
	"oilType": "oil-free",
	"powerKw": 0.55,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/bambi-vts75.svg",
		"alt": "Repères techniques : Bambi VTS75",
		"sourceUrl": "https://bambi-air.co.uk/product/vts75/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve 23 L",
			"evidenceIds": [
				"october3d-bambi-product-13"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-bambi-product-13"
			]
		},
		{
			"label": "Air livré à 1 bar",
			"value": "100 L/min",
			"evidenceIds": [
				"october3d-bambi-product-13"
			]
		},
		{
			"label": "Air livré à 2 bar",
			"value": "88 L/min",
			"evidenceIds": [
				"october3d-bambi-product-13"
			]
		},
		{
			"label": "Air livré à 3 bar",
			"value": "75 L/min",
			"evidenceIds": [
				"october3d-bambi-product-13"
			]
		},
		{
			"label": "Air livré à 4 bar",
			"value": "66 L/min",
			"evidenceIds": [
				"october3d-bambi-product-13"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "58 L/min",
			"evidenceIds": [
				"october3d-bambi-product-13"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "52 L/min",
			"evidenceIds": [
				"october3d-bambi-product-13"
			]
		},
		{
			"label": "Air livré à 7 bar",
			"value": "45 L/min",
			"evidenceIds": [
				"october3d-bambi-product-13"
			]
		},
		{
			"label": "Air livré à 8 bar",
			"value": "42 L/min",
			"evidenceIds": [
				"october3d-bambi-product-13"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "23 L",
			"evidenceIds": [
				"october3d-bambi-product-13"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "50 %, fenêtre non précisée",
			"evidenceIds": [
				"october3d-bambi-product-13"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "240 volt / 50Hz",
			"evidenceIds": [
				"october3d-bambi-product-13"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-bambi-product-13"
			]
		}
	],
	"editorial": {
		"overview": "Bambi VTS75. 100 L/min à 1 bar ; 88 L/min à 2 bar ; 75 L/min à 3 bar ; 66 L/min à 4 bar ; 58 L/min à 5 bar ; 52 L/min à 6 bar ; 45 L/min à 7 bar ; 42 L/min à 8 bar. Groupe avec cuve 23 L.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 23 L.",
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
			"id": "october3d-bambi-product-13",
			"sourceUrl": "https://bambi-air.co.uk/product/vts75/",
			"sourceLabel": "Bambi, VTS75, fiche constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 9b8472865b27db8c72e9bb6b968cf07b0264448b862f56fa3d5d15e085d3d856 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-bambi-product-13"
		],
		"tankLiters": [
			"october3d-bambi-product-13"
		],
		"fadCurve": [
			"october3d-bambi-product-13"
		],
		"dutyCycle": [
			"october3d-bambi-product-13"
		],
		"oilType": [
			"october3d-bambi-product-13"
		],
		"powerKw": [
			"october3d-bambi-product-13"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
