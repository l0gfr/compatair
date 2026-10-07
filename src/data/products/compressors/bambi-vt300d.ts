import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "bambi-vt300d",
	"slug": "bambi-vt300d",
	"brand": "Bambi",
	"model": "VT300D",
	"mpn": "VT300D",
	"variant": {
		"familyId": "bambi-vt300d",
		"label": "Groupe avec cuve 100 L et sécheur",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve 100 L et sécheur",
			"pressionMaximale": "8 bar",
			"cuve": "100 L"
		}
	},
	"tankLiters": 100,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 1,
			"litersPerMinute": 330
		},
		{
			"pressureBar": 2,
			"litersPerMinute": 308
		},
		{
			"pressureBar": 3,
			"litersPerMinute": 290
		},
		{
			"pressureBar": 4,
			"litersPerMinute": 264
		},
		{
			"pressureBar": 5,
			"litersPerMinute": 250
		},
		{
			"pressureBar": 6,
			"litersPerMinute": 230
		},
		{
			"pressureBar": 7,
			"litersPerMinute": 210
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 196
		}
	],
	"dutyCycle": 0.5,
	"oilType": "oil-free",
	"powerKw": 2.2,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/bambi-vt300d.svg",
		"alt": "Repères techniques : Bambi VT300D",
		"sourceUrl": "https://bambi-air.co.uk/product/vt300d/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve 100 L et sécheur",
			"evidenceIds": [
				"october3d-bambi-product-10"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-bambi-product-10"
			]
		},
		{
			"label": "Air livré à 1 bar",
			"value": "330 L/min",
			"evidenceIds": [
				"october3d-bambi-product-10"
			]
		},
		{
			"label": "Air livré à 2 bar",
			"value": "308 L/min",
			"evidenceIds": [
				"october3d-bambi-product-10"
			]
		},
		{
			"label": "Air livré à 3 bar",
			"value": "290 L/min",
			"evidenceIds": [
				"october3d-bambi-product-10"
			]
		},
		{
			"label": "Air livré à 4 bar",
			"value": "264 L/min",
			"evidenceIds": [
				"october3d-bambi-product-10"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "250 L/min",
			"evidenceIds": [
				"october3d-bambi-product-10"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "230 L/min",
			"evidenceIds": [
				"october3d-bambi-product-10"
			]
		},
		{
			"label": "Air livré à 7 bar",
			"value": "210 L/min",
			"evidenceIds": [
				"october3d-bambi-product-10"
			]
		},
		{
			"label": "Air livré à 8 bar",
			"value": "196 L/min",
			"evidenceIds": [
				"october3d-bambi-product-10"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "100 L",
			"evidenceIds": [
				"october3d-bambi-product-10"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "50 %, fenêtre non précisée",
			"evidenceIds": [
				"october3d-bambi-product-10"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "240v or 400v",
			"evidenceIds": [
				"october3d-bambi-product-10"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "non précisée",
			"evidenceIds": [
				"october3d-bambi-product-10"
			]
		}
	],
	"editorial": {
		"overview": "Bambi VT300D. 330 L/min à 1 bar ; 308 L/min à 2 bar ; 290 L/min à 3 bar ; 264 L/min à 4 bar ; 250 L/min à 5 bar ; 230 L/min à 6 bar ; 210 L/min à 7 bar ; 196 L/min à 8 bar. Groupe avec cuve 100 L et sécheur.",
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
			"id": "october3d-bambi-product-10",
			"sourceUrl": "https://bambi-air.co.uk/product/vt300d/",
			"sourceLabel": "Bambi, VT300D, fiche constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 337fbee66a418a1ccfa8896e47df7b87c3fc3163fa3921b8ca54066d5842d4e9 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-bambi-product-10"
		],
		"tankLiters": [
			"october3d-bambi-product-10"
		],
		"fadCurve": [
			"october3d-bambi-product-10"
		],
		"dutyCycle": [
			"october3d-bambi-product-10"
		],
		"oilType": [
			"october3d-bambi-product-10"
		],
		"powerKw": [
			"october3d-bambi-product-10"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
