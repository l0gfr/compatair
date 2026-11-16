import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "bambi-vts200d",
	"slug": "bambi-vts200d",
	"brand": "Bambi",
	"model": "VTS200D",
	"mpn": "VTS200D",
	"variant": {
		"familyId": "bambi-vts200d",
		"label": "Groupe avec cuve 23 L et sécheur",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve 23 L et sécheur",
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
			"litersPerMinute": 205
		},
		{
			"pressureBar": 2,
			"litersPerMinute": 192
		},
		{
			"pressureBar": 3,
			"litersPerMinute": 180
		},
		{
			"pressureBar": 4,
			"litersPerMinute": 166
		},
		{
			"pressureBar": 5,
			"litersPerMinute": 158
		},
		{
			"pressureBar": 6,
			"litersPerMinute": 145
		},
		{
			"pressureBar": 7,
			"litersPerMinute": 138
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 126
		}
	],
	"dutyCycle": 0.5,
	"oilType": "oil-free",
	"powerKw": 1.5,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/bambi-vts200d-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Bambi VTS200D",
		"sourceUrl": "https://bambi-air.co.uk/product/vts200d/",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve 23 L et sécheur",
			"evidenceIds": [
				"october3d-bambi-product-18"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-bambi-product-18"
			]
		},
		{
			"label": "Air livré à 1 bar",
			"value": "205 L/min",
			"evidenceIds": [
				"october3d-bambi-product-18"
			]
		},
		{
			"label": "Air livré à 2 bar",
			"value": "192 L/min",
			"evidenceIds": [
				"october3d-bambi-product-18"
			]
		},
		{
			"label": "Air livré à 3 bar",
			"value": "180 L/min",
			"evidenceIds": [
				"october3d-bambi-product-18"
			]
		},
		{
			"label": "Air livré à 4 bar",
			"value": "166 L/min",
			"evidenceIds": [
				"october3d-bambi-product-18"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "158 L/min",
			"evidenceIds": [
				"october3d-bambi-product-18"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "145 L/min",
			"evidenceIds": [
				"october3d-bambi-product-18"
			]
		},
		{
			"label": "Air livré à 7 bar",
			"value": "138 L/min",
			"evidenceIds": [
				"october3d-bambi-product-18"
			]
		},
		{
			"label": "Air livré à 8 bar",
			"value": "126 L/min",
			"evidenceIds": [
				"october3d-bambi-product-18"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "23 L",
			"evidenceIds": [
				"october3d-bambi-product-18"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "50 %, fenêtre non précisée",
			"evidenceIds": [
				"october3d-bambi-product-18"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "240 volt / 50Hz",
			"evidenceIds": [
				"october3d-bambi-product-18"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-bambi-product-18"
			]
		}
	],
	"editorial": {
		"overview": "Le VTS200D intègre le sécheur et une cuve de 23 L. Sa table donne 158 L/min FAD à 5 bar et 126 à 8 bar ; le VTS200 est sans sécheur, tandis que le VTS250 utilise 59 L. Le fabricant limite explicitement le cycle à 50 % : la réserve de stockage ne transforme pas ce débit en service permanent. L’alimentation de référence est 240 V/50 Hz.",
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
			"id": "october3d-bambi-product-18",
			"sourceUrl": "https://bambi-air.co.uk/product/vts200d/",
			"sourceLabel": "Bambi, VTS200D, fiche constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 11a7d54e72f1ad6113502a494531d7ecd40d6c8773ba9003798842850188fb8e de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:bambi-vts200d:0",
			"sourceUrl": "https://bambi-air.co.uk/product/vts200d/",
			"sourceLabel": "Bambi, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le VTS200D intègre le sécheur et une cuve de 23 L. Sa table donne 158 L/min FAD à 5 bar et 126 à 8 bar ; le VTS200 est sans sécheur, tandis que le VTS250 utilise 59 L. Le fabricant limite explicitement le cycle à 50 % : la réserve de stockage ne transforme pas ce débit en service permanent. L’alimentation de référence est 240 V/50 Hz. GET complet SHA-256 428aad01411c0ea1b43e41a57b3c6574cf16f42223c89e92ed462515a6d6bb7c. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-bambi-product-18"
		],
		"tankLiters": [
			"october3d-bambi-product-18"
		],
		"fadCurve": [
			"october3d-bambi-product-18"
		],
		"dutyCycle": [
			"october3d-bambi-product-18"
		],
		"oilType": [
			"october3d-bambi-product-18"
		],
		"powerKw": [
			"october3d-bambi-product-18"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
