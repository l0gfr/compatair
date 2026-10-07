import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "bambi-vt250",
	"slug": "bambi-vt250",
	"brand": "Bambi",
	"model": "VT250",
	"mpn": "VT250",
	"variant": {
		"familyId": "bambi-vt250",
		"label": "Groupe avec cuve 59 L",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve 59 L",
			"pressionMaximale": "8 bar",
			"cuve": "59 L"
		}
	},
	"tankLiters": 59,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 1,
			"litersPerMinute": 280
		},
		{
			"pressureBar": 2,
			"litersPerMinute": 265
		},
		{
			"pressureBar": 3,
			"litersPerMinute": 248
		},
		{
			"pressureBar": 4,
			"litersPerMinute": 222
		},
		{
			"pressureBar": 5,
			"litersPerMinute": 210
		},
		{
			"pressureBar": 6,
			"litersPerMinute": 188
		},
		{
			"pressureBar": 7,
			"litersPerMinute": 179
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 160
		}
	],
	"dutyCycle": 0.5,
	"oilType": "oil-free",
	"powerKw": 1.84,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/bambi-vt250.svg",
		"alt": "Repères techniques : Bambi VT250",
		"sourceUrl": "https://bambi-air.co.uk/product/vt250/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve 59 L",
			"evidenceIds": [
				"october3d-bambi-product-07"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-bambi-product-07"
			]
		},
		{
			"label": "Air livré à 1 bar",
			"value": "280 L/min",
			"evidenceIds": [
				"october3d-bambi-product-07"
			]
		},
		{
			"label": "Air livré à 2 bar",
			"value": "265 L/min",
			"evidenceIds": [
				"october3d-bambi-product-07"
			]
		},
		{
			"label": "Air livré à 3 bar",
			"value": "248 L/min",
			"evidenceIds": [
				"october3d-bambi-product-07"
			]
		},
		{
			"label": "Air livré à 4 bar",
			"value": "222 L/min",
			"evidenceIds": [
				"october3d-bambi-product-07"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "210 L/min",
			"evidenceIds": [
				"october3d-bambi-product-07"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "188 L/min",
			"evidenceIds": [
				"october3d-bambi-product-07"
			]
		},
		{
			"label": "Air livré à 7 bar",
			"value": "179 L/min",
			"evidenceIds": [
				"october3d-bambi-product-07"
			]
		},
		{
			"label": "Air livré à 8 bar",
			"value": "160 L/min",
			"evidenceIds": [
				"october3d-bambi-product-07"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "59 L",
			"evidenceIds": [
				"october3d-bambi-product-07"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "50 %, fenêtre non précisée",
			"evidenceIds": [
				"october3d-bambi-product-07"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "240v or 400v",
			"evidenceIds": [
				"october3d-bambi-product-07"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "non précisée",
			"evidenceIds": [
				"october3d-bambi-product-07"
			]
		}
	],
	"editorial": {
		"overview": "Bambi VT250. 280 L/min à 1 bar ; 265 L/min à 2 bar ; 248 L/min à 3 bar ; 222 L/min à 4 bar ; 210 L/min à 5 bar ; 188 L/min à 6 bar ; 179 L/min à 7 bar ; 160 L/min à 8 bar. Groupe avec cuve 59 L.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 59 L.",
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
			"id": "october3d-bambi-product-07",
			"sourceUrl": "https://bambi-air.co.uk/product/vt250/",
			"sourceLabel": "Bambi, VT250, fiche constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 32a58599f12a380b7275c16256b7edfe798136a06389eae6defb7044a869f330 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-bambi-product-07"
		],
		"tankLiters": [
			"october3d-bambi-product-07"
		],
		"fadCurve": [
			"october3d-bambi-product-07"
		],
		"dutyCycle": [
			"october3d-bambi-product-07"
		],
		"oilType": [
			"october3d-bambi-product-07"
		],
		"powerKw": [
			"october3d-bambi-product-07"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
