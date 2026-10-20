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
		"overview": "BB24 V : cuve verticale 24 L, pompe lubrifiée de 0,34 kW et masse 28 kg. La fiche publie 26 L/min à 6 bar et 25 L/min à 8 bar. Le BB24 horizontal conserve 24 L et la même courbe, avec 26 kg.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 24 L.",
			"Pression maximale de fonctionnement publiée : 8 bar."
		],
		"limitations": [
			"Le BB24 V mesure 52 × 40 × 40 cm en hauteur × largeur × profondeur ; le BB24 horizontal, 49 × 65 × 25 cm. Le choix porte sur l’implantation et le transport.",
			"Le cycle maximal 50 % est publié sans fenêtre temporelle ; aucun nombre de minutes de marche n’est déduit.",
			"L’alimentation est 240 V à 50 Hz avec prisebritannique ; une priseUE est disponible sur demande. Faire confirmer le raccordement.",
			"Les conditions de référenceISO 1217 ne sont pas précisées ; aucune production supérieure n’est déduite du montage vertical."
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
		},
		{
			"id": "october3d-bambi-product-31-review-20261020-for-bambi-bb24v",
			"sourceUrl": "https://bambi-air.co.uk/product/bb24/",
			"sourceLabel": "Bambi, BB24, fiche constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-20",
			"confidence": "B",
			"notes": "Fiche voisine consultée en HTTPS le 19 octobre 2026 ; SHA-256 du corps : 26c9558a0858b8f67f1c92e3d982f32559e2c36e0054bf7b614364c7a297637f. Configurations comparées séparément."
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
		],
		"voltage": [
			"october3d-bambi-product-30"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	],
	"voltage": "240 V, 50 Hz"
};

export default product;
