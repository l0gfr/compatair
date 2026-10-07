import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "bambi-bb24v",
	"slug": "bambi-bb24v",
	"brand": "Bambi",
	"model": "BB24V",
	"mpn": "BB24V",
	"variant": {
		"familyId": "bambi-bb24v",
		"label": "Groupe avec cuve 24 L",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve 24 L",
			"pressionMaximale": "8 bar",
			"cuve": "24 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 24,
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
		"src": "/images/products/bambi-bb24v.svg",
		"alt": "Repères techniques : Bambi BB24V",
		"sourceUrl": "https://bambi-air.co.uk/product/bb24v/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve 24 L",
			"evidenceIds": [
				"october3d-bambi-product-30"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-bambi-product-30"
			]
		},
		{
			"label": "Air livré à 1 bar",
			"value": "35 L/min",
			"evidenceIds": [
				"october3d-bambi-product-30"
			]
		},
		{
			"label": "Air livré à 2 bar",
			"value": "32 L/min",
			"evidenceIds": [
				"october3d-bambi-product-30"
			]
		},
		{
			"label": "Air livré à 3 bar",
			"value": "30 L/min",
			"evidenceIds": [
				"october3d-bambi-product-30"
			]
		},
		{
			"label": "Air livré à 4 bar",
			"value": "28 L/min",
			"evidenceIds": [
				"october3d-bambi-product-30"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "27 L/min",
			"evidenceIds": [
				"october3d-bambi-product-30"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "26 L/min",
			"evidenceIds": [
				"october3d-bambi-product-30"
			]
		},
		{
			"label": "Air livré à 7 bar",
			"value": "25,5 L/min",
			"evidenceIds": [
				"october3d-bambi-product-30"
			]
		},
		{
			"label": "Air livré à 8 bar",
			"value": "25 L/min",
			"evidenceIds": [
				"october3d-bambi-product-30"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "24 L",
			"evidenceIds": [
				"october3d-bambi-product-30"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "50 %, fenêtre non précisée",
			"evidenceIds": [
				"october3d-bambi-product-30"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "240 volt / 50Hz",
			"evidenceIds": [
				"october3d-bambi-product-30"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-bambi-product-30"
			]
		}
	],
	"editorial": {
		"overview": "Bambi BB24V. 35 L/min à 1 bar ; 32 L/min à 2 bar ; 30 L/min à 3 bar ; 28 L/min à 4 bar ; 27 L/min à 5 bar ; 26 L/min à 6 bar ; 25,5 L/min à 7 bar ; 25 L/min à 8 bar. Groupe avec cuve 24 L.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 24 L.",
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
			"id": "october3d-bambi-product-30",
			"sourceUrl": "https://bambi-air.co.uk/product/bb24v/",
			"sourceLabel": "Bambi, BB24V, fiche constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 1b000bb3ee0328e603535f174f729ea2eb9428fc4c815506d47405ac9022e27d de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-bambi-product-30"
		],
		"tankLiters": [
			"october3d-bambi-product-30"
		],
		"fadCurve": [
			"october3d-bambi-product-30"
		],
		"dutyCycle": [
			"october3d-bambi-product-30"
		],
		"oilType": [
			"october3d-bambi-product-30"
		],
		"powerKw": [
			"october3d-bambi-product-30"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
