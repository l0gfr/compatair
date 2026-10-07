import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "bambi-vt400",
	"slug": "bambi-vt400",
	"brand": "Bambi",
	"model": "VT400",
	"mpn": "VT400",
	"variant": {
		"familyId": "bambi-vt400",
		"label": "Groupe avec cuve 100 L",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve 100 L",
			"pressionMaximale": "8 bar",
			"cuve": "100 L"
		}
	},
	"tankLiters": 100,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 1,
			"litersPerMinute": 410
		},
		{
			"pressureBar": 2,
			"litersPerMinute": 384
		},
		{
			"pressureBar": 3,
			"litersPerMinute": 360
		},
		{
			"pressureBar": 4,
			"litersPerMinute": 332
		},
		{
			"pressureBar": 5,
			"litersPerMinute": 316
		},
		{
			"pressureBar": 6,
			"litersPerMinute": 290
		},
		{
			"pressureBar": 7,
			"litersPerMinute": 276
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 252
		}
	],
	"dutyCycle": 0.5,
	"oilType": "oil-free",
	"powerKw": 3,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/bambi-vt400.svg",
		"alt": "Repères techniques : Bambi VT400",
		"sourceUrl": "https://bambi-air.co.uk/product/vt400/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve 100 L",
			"evidenceIds": [
				"october3d-bambi-product-11"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-bambi-product-11"
			]
		},
		{
			"label": "Air livré à 1 bar",
			"value": "410 L/min",
			"evidenceIds": [
				"october3d-bambi-product-11"
			]
		},
		{
			"label": "Air livré à 2 bar",
			"value": "384 L/min",
			"evidenceIds": [
				"october3d-bambi-product-11"
			]
		},
		{
			"label": "Air livré à 3 bar",
			"value": "360 L/min",
			"evidenceIds": [
				"october3d-bambi-product-11"
			]
		},
		{
			"label": "Air livré à 4 bar",
			"value": "332 L/min",
			"evidenceIds": [
				"october3d-bambi-product-11"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "316 L/min",
			"evidenceIds": [
				"october3d-bambi-product-11"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "290 L/min",
			"evidenceIds": [
				"october3d-bambi-product-11"
			]
		},
		{
			"label": "Air livré à 7 bar",
			"value": "276 L/min",
			"evidenceIds": [
				"october3d-bambi-product-11"
			]
		},
		{
			"label": "Air livré à 8 bar",
			"value": "252 L/min",
			"evidenceIds": [
				"october3d-bambi-product-11"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "100 L",
			"evidenceIds": [
				"october3d-bambi-product-11"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "50 %, fenêtre non précisée",
			"evidenceIds": [
				"october3d-bambi-product-11"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "240v or 400v",
			"evidenceIds": [
				"october3d-bambi-product-11"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "non précisée",
			"evidenceIds": [
				"october3d-bambi-product-11"
			]
		}
	],
	"editorial": {
		"overview": "Bambi VT400. 410 L/min à 1 bar ; 384 L/min à 2 bar ; 360 L/min à 3 bar ; 332 L/min à 4 bar ; 316 L/min à 5 bar ; 290 L/min à 6 bar ; 276 L/min à 7 bar ; 252 L/min à 8 bar. Groupe avec cuve 100 L.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 100 L.",
			"Pression maximale de fonctionnement publiée : 8 bar."
		],
		"limitations": [
			"Le fabricant ne précise pas les conditions de référence ISO 1217 ni la fenêtre de temps du cycle de service dans cette fiche.",
			"Cycle intermittent déclaré ; durée de référence non précisée. L’exploitation permanente n’est pas assimilée à un service continu.",
			"Fréquence non publiée dans la fiche retenue ; aucune transposition des performances à 50 Hz.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Installation et disponibilité en France à confirmer selon l’alimentation et le raccordement publiés."
		]
	},
	"evidence": [
		{
			"id": "october3d-bambi-product-11",
			"sourceUrl": "https://bambi-air.co.uk/product/vt400/",
			"sourceLabel": "Bambi, VT400, fiche constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 3361024f8b0be2acb8f222b9b72bfcb010636f994d81e188e7943392761ae7bc de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-bambi-product-11"
		],
		"tankLiters": [
			"october3d-bambi-product-11"
		],
		"fadCurve": [
			"october3d-bambi-product-11"
		],
		"dutyCycle": [
			"october3d-bambi-product-11"
		],
		"oilType": [
			"october3d-bambi-product-11"
		],
		"powerKw": [
			"october3d-bambi-product-11"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
