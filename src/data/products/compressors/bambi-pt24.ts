import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "bambi-pt24",
	"slug": "bambi-pt24",
	"brand": "Bambi",
	"model": "PT24",
	"mpn": "PT24",
	"variant": {
		"familyId": "bambi-pt24",
		"label": "Groupe avec cuve 24 L",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve 24 L",
			"pressionMaximale": "8 bar",
			"cuve": "24 L"
		}
	},
	"tankLiters": 24,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 1,
			"litersPerMinute": 105
		},
		{
			"pressureBar": 2,
			"litersPerMinute": 95
		},
		{
			"pressureBar": 3,
			"litersPerMinute": 87.5
		},
		{
			"pressureBar": 4,
			"litersPerMinute": 80
		},
		{
			"pressureBar": 5,
			"litersPerMinute": 75
		},
		{
			"pressureBar": 6,
			"litersPerMinute": 70
		},
		{
			"pressureBar": 7,
			"litersPerMinute": 60
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 50
		}
	],
	"dutyCycle": 0.6,
	"oilType": "oil-free",
	"powerKw": 0.75,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/bambi-pt24.svg",
		"alt": "Repères techniques : Bambi PT24",
		"sourceUrl": "https://bambi-air.co.uk/product/pt24/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve 24 L",
			"evidenceIds": [
				"october3d-bambi-product-23"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-bambi-product-23"
			]
		},
		{
			"label": "Air livré à 1 bar",
			"value": "105 L/min",
			"evidenceIds": [
				"october3d-bambi-product-23"
			]
		},
		{
			"label": "Air livré à 2 bar",
			"value": "95 L/min",
			"evidenceIds": [
				"october3d-bambi-product-23"
			]
		},
		{
			"label": "Air livré à 3 bar",
			"value": "87,5 L/min",
			"evidenceIds": [
				"october3d-bambi-product-23"
			]
		},
		{
			"label": "Air livré à 4 bar",
			"value": "80 L/min",
			"evidenceIds": [
				"october3d-bambi-product-23"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "75 L/min",
			"evidenceIds": [
				"october3d-bambi-product-23"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "70 L/min",
			"evidenceIds": [
				"october3d-bambi-product-23"
			]
		},
		{
			"label": "Air livré à 7 bar",
			"value": "60 L/min",
			"evidenceIds": [
				"october3d-bambi-product-23"
			]
		},
		{
			"label": "Air livré à 8 bar",
			"value": "50 L/min",
			"evidenceIds": [
				"october3d-bambi-product-23"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "24 L",
			"evidenceIds": [
				"october3d-bambi-product-23"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "60 %, fenêtre non précisée",
			"evidenceIds": [
				"october3d-bambi-product-23"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "240v or 110v",
			"evidenceIds": [
				"october3d-bambi-product-23"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "non précisée",
			"evidenceIds": [
				"october3d-bambi-product-23"
			]
		}
	],
	"editorial": {
		"overview": "Bambi PT24. 105 L/min à 1 bar ; 95 L/min à 2 bar ; 87,5 L/min à 3 bar ; 80 L/min à 4 bar ; 75 L/min à 5 bar ; 70 L/min à 6 bar ; 60 L/min à 7 bar ; 50 L/min à 8 bar. Groupe avec cuve 24 L.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 24 L.",
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
			"id": "october3d-bambi-product-23",
			"sourceUrl": "https://bambi-air.co.uk/product/pt24/",
			"sourceLabel": "Bambi, PT24, fiche constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 e035041f91f3439d25466ae03dd0e40bf613b76a4550f24113f112d427ea4ce9 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-bambi-product-23"
		],
		"tankLiters": [
			"october3d-bambi-product-23"
		],
		"fadCurve": [
			"october3d-bambi-product-23"
		],
		"dutyCycle": [
			"october3d-bambi-product-23"
		],
		"oilType": [
			"october3d-bambi-product-23"
		],
		"powerKw": [
			"october3d-bambi-product-23"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
