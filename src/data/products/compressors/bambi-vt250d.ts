import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "bambi-vt250d",
	"slug": "bambi-vt250d",
	"brand": "Bambi",
	"model": "VT250D",
	"mpn": "VT250D",
	"variant": {
		"familyId": "bambi-vt250d",
		"label": "Groupe avec cuve 59 L et sécheur",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve 59 L et sécheur",
			"pressionMaximale": "8 bar",
			"cuve": "59 L"
		}
	},
	"tankLiters": 59,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 1,
			"litersPerMinute": 266
		},
		{
			"pressureBar": 2,
			"litersPerMinute": 252
		},
		{
			"pressureBar": 3,
			"litersPerMinute": 236
		},
		{
			"pressureBar": 4,
			"litersPerMinute": 211
		},
		{
			"pressureBar": 5,
			"litersPerMinute": 200
		},
		{
			"pressureBar": 6,
			"litersPerMinute": 179
		},
		{
			"pressureBar": 7,
			"litersPerMinute": 170
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 152
		}
	],
	"dutyCycle": 0.5,
	"oilType": "oil-free",
	"powerKw": 1.84,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/bambi-vt250d.svg",
		"alt": "Repères techniques : Bambi VT250D",
		"sourceUrl": "https://bambi-air.co.uk/product/vt250d/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve 59 L et sécheur",
			"evidenceIds": [
				"october3d-bambi-product-08"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-bambi-product-08"
			]
		},
		{
			"label": "Air livré à 1 bar",
			"value": "266 L/min",
			"evidenceIds": [
				"october3d-bambi-product-08"
			]
		},
		{
			"label": "Air livré à 2 bar",
			"value": "252 L/min",
			"evidenceIds": [
				"october3d-bambi-product-08"
			]
		},
		{
			"label": "Air livré à 3 bar",
			"value": "236 L/min",
			"evidenceIds": [
				"october3d-bambi-product-08"
			]
		},
		{
			"label": "Air livré à 4 bar",
			"value": "211 L/min",
			"evidenceIds": [
				"october3d-bambi-product-08"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "200 L/min",
			"evidenceIds": [
				"october3d-bambi-product-08"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "179 L/min",
			"evidenceIds": [
				"october3d-bambi-product-08"
			]
		},
		{
			"label": "Air livré à 7 bar",
			"value": "170 L/min",
			"evidenceIds": [
				"october3d-bambi-product-08"
			]
		},
		{
			"label": "Air livré à 8 bar",
			"value": "152 L/min",
			"evidenceIds": [
				"october3d-bambi-product-08"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "59 L",
			"evidenceIds": [
				"october3d-bambi-product-08"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "50 %, fenêtre non précisée",
			"evidenceIds": [
				"october3d-bambi-product-08"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "240v or 400v",
			"evidenceIds": [
				"october3d-bambi-product-08"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "non précisée",
			"evidenceIds": [
				"october3d-bambi-product-08"
			]
		}
	],
	"editorial": {
		"overview": "Bambi VT250D. 266 L/min à 1 bar ; 252 L/min à 2 bar ; 236 L/min à 3 bar ; 211 L/min à 4 bar ; 200 L/min à 5 bar ; 179 L/min à 6 bar ; 170 L/min à 7 bar ; 152 L/min à 8 bar. Groupe avec cuve 59 L et sécheur.",
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
			"id": "october3d-bambi-product-08",
			"sourceUrl": "https://bambi-air.co.uk/product/vt250d/",
			"sourceLabel": "Bambi, VT250D, fiche constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 7c797fae0da6e9962e266f7f57ba68396033a926ee13496f29ff50d6e15d40ee de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-bambi-product-08"
		],
		"tankLiters": [
			"october3d-bambi-product-08"
		],
		"fadCurve": [
			"october3d-bambi-product-08"
		],
		"dutyCycle": [
			"october3d-bambi-product-08"
		],
		"oilType": [
			"october3d-bambi-product-08"
		],
		"powerKw": [
			"october3d-bambi-product-08"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
