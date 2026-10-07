import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "bambi-vt75d",
	"slug": "bambi-vt75d",
	"brand": "Bambi",
	"model": "VT75D",
	"mpn": "VT75D",
	"variant": {
		"familyId": "bambi-vt75d",
		"label": "Groupe avec cuve 24 L et sécheur",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve 24 L et sécheur",
			"pressionMaximale": "8 bar",
			"cuve": "24 L"
		}
	},
	"tankLiters": 24,
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
		"src": "/images/products/bambi-vt75d.svg",
		"alt": "Repères techniques : Bambi VT75D",
		"sourceUrl": "https://bambi-air.co.uk/product/vt75d/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve 24 L et sécheur",
			"evidenceIds": [
				"october3d-bambi-product-02"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-bambi-product-02"
			]
		},
		{
			"label": "Air livré à 1 bar",
			"value": "100 L/min",
			"evidenceIds": [
				"october3d-bambi-product-02"
			]
		},
		{
			"label": "Air livré à 2 bar",
			"value": "88 L/min",
			"evidenceIds": [
				"october3d-bambi-product-02"
			]
		},
		{
			"label": "Air livré à 3 bar",
			"value": "75 L/min",
			"evidenceIds": [
				"october3d-bambi-product-02"
			]
		},
		{
			"label": "Air livré à 4 bar",
			"value": "66 L/min",
			"evidenceIds": [
				"october3d-bambi-product-02"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "58 L/min",
			"evidenceIds": [
				"october3d-bambi-product-02"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "52 L/min",
			"evidenceIds": [
				"october3d-bambi-product-02"
			]
		},
		{
			"label": "Air livré à 7 bar",
			"value": "45 L/min",
			"evidenceIds": [
				"october3d-bambi-product-02"
			]
		},
		{
			"label": "Air livré à 8 bar",
			"value": "42 L/min",
			"evidenceIds": [
				"october3d-bambi-product-02"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "24 L",
			"evidenceIds": [
				"october3d-bambi-product-02"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "50 %, fenêtre non précisée",
			"evidenceIds": [
				"october3d-bambi-product-02"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "240v or 400v",
			"evidenceIds": [
				"october3d-bambi-product-02"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "non précisée",
			"evidenceIds": [
				"october3d-bambi-product-02"
			]
		}
	],
	"editorial": {
		"overview": "Bambi VT75D. 100 L/min à 1 bar ; 88 L/min à 2 bar ; 75 L/min à 3 bar ; 66 L/min à 4 bar ; 58 L/min à 5 bar ; 52 L/min à 6 bar ; 45 L/min à 7 bar ; 42 L/min à 8 bar. Groupe avec cuve 24 L et sécheur.",
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
			"id": "october3d-bambi-product-02",
			"sourceUrl": "https://bambi-air.co.uk/product/vt75d/",
			"sourceLabel": "Bambi, VT75D, fiche constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 dceb92baddc7566c55a0d3f08f2eab85f9ccdbfb7b4f429607ed9a130b87751a de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-bambi-product-02"
		],
		"tankLiters": [
			"october3d-bambi-product-02"
		],
		"fadCurve": [
			"october3d-bambi-product-02"
		],
		"dutyCycle": [
			"october3d-bambi-product-02"
		],
		"oilType": [
			"october3d-bambi-product-02"
		],
		"powerKw": [
			"october3d-bambi-product-02"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
