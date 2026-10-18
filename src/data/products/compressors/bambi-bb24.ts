import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "bambi-bb24",
	"slug": "bambi-bb24",
	"brand": "Bambi",
	"model": "BB24",
	"mpn": "BB24",
	"variant": {
		"familyId": "bambi-bb24",
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
		"src": "/images/products/bambi-bb24.svg",
		"alt": "Repères techniques : Bambi BB24",
		"sourceUrl": "https://bambi-air.co.uk/product/bb24/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve 24 L",
			"evidenceIds": [
				"october3d-bambi-product-31"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-bambi-product-31"
			]
		},
		{
			"label": "Air livré à 1 bar",
			"value": "35 L/min",
			"evidenceIds": [
				"october3d-bambi-product-31"
			]
		},
		{
			"label": "Air livré à 2 bar",
			"value": "32 L/min",
			"evidenceIds": [
				"october3d-bambi-product-31"
			]
		},
		{
			"label": "Air livré à 3 bar",
			"value": "30 L/min",
			"evidenceIds": [
				"october3d-bambi-product-31"
			]
		},
		{
			"label": "Air livré à 4 bar",
			"value": "28 L/min",
			"evidenceIds": [
				"october3d-bambi-product-31"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "27 L/min",
			"evidenceIds": [
				"october3d-bambi-product-31"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "26 L/min",
			"evidenceIds": [
				"october3d-bambi-product-31"
			]
		},
		{
			"label": "Air livré à 7 bar",
			"value": "25,5 L/min",
			"evidenceIds": [
				"october3d-bambi-product-31"
			]
		},
		{
			"label": "Air livré à 8 bar",
			"value": "25 L/min",
			"evidenceIds": [
				"october3d-bambi-product-31"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "24 L",
			"evidenceIds": [
				"october3d-bambi-product-31"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "50 %, fenêtre non précisée",
			"evidenceIds": [
				"october3d-bambi-product-31"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "240 volt / 50Hz",
			"evidenceIds": [
				"october3d-bambi-product-31"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-bambi-product-31"
			]
		}
	],
	"editorial": {
		"overview": "BB24 : cuve horizontale de 24 L, 26 kg, moteur de 0,34 kW et 26 L/min à 6 bar. Le BB15V voisin possède 15 L en montage vertical et pèse 22 kg ; sa courbe de débit publiée est identique. Le BB24 demande 240 V à 50 Hz.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 24 L.",
			"Pression maximale de fonctionnement publiée : 8 bar."
		],
		"limitations": [
			"Le cycle maximal de 50 % est publié sans fenêtre temporelle ; il ne fournit pas un nombre de minutes de marche.",
			"Le choix 15/24 L concerne le stockage et l’implantation. La courbe commune ne démontre pas une production supérieure pour le BB24.",
			"La fiche propose une prise britannique et une prise UE sur demande. Vérifier le raccordement et les obligations locales ; les mentions PSSR britanniques ne décrivent pas la réglementation française.",
			"Les conditions ISO 1217 ne sont pas précisées. Les valeurs restent des données fabricant, sans essai physique CompatAir."
		]
	},
	"evidence": [
		{
			"id": "october3d-bambi-product-31",
			"sourceUrl": "https://bambi-air.co.uk/product/bb24/",
			"sourceLabel": "Bambi, BB24, fiche constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 a91eb92ce49fdebf0019d5f341708c4d21a5a293ab5469d4413fc6f2c80171db de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-bambi-product-29-review-20261018",
			"sourceUrl": "https://bambi-air.co.uk/product/bb15v/",
			"sourceLabel": "Bambi, BB15V, fiche constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-18",
			"confidence": "B",
			"notes": "Fiche voisine consultée en HTTPS le 18 octobre 2026 ; SHA-256 du corps : 035957d1123e4041a8dc0e1279483147166448970cf50f5cd808b02f2d62b674. Comparaison de configurations distinctes."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-bambi-product-31"
		],
		"tankLiters": [
			"october3d-bambi-product-31"
		],
		"fadCurve": [
			"october3d-bambi-product-31"
		],
		"dutyCycle": [
			"october3d-bambi-product-31"
		],
		"oilType": [
			"october3d-bambi-product-31"
		],
		"powerKw": [
			"october3d-bambi-product-31"
		],
		"voltage": [
			"october3d-bambi-product-31"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	],
	"voltage": "240 V, 50 Hz"
};

export default product;
