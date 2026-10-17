import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "bambi-bb15v",
	"slug": "bambi-bb15v",
	"brand": "Bambi",
	"model": "BB15V",
	"mpn": "BB15V",
	"variant": {
		"familyId": "bambi-bb15v",
		"label": "Groupe avec cuve 15 L",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve 15 L",
			"pressionMaximale": "8 bar",
			"cuve": "15 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 15,
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
		"src": "/images/products/bambi-bb15v.svg",
		"alt": "Repères techniques : Bambi BB15V",
		"sourceUrl": "https://bambi-air.co.uk/product/bb15v/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve 15 L",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Air livré à 1 bar",
			"value": "35 L/min",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Air livré à 2 bar",
			"value": "32 L/min",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Air livré à 3 bar",
			"value": "30 L/min",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Air livré à 4 bar",
			"value": "28 L/min",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "27 L/min",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "26 L/min",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Air livré à 7 bar",
			"value": "25,5 L/min",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Air livré à 8 bar",
			"value": "25 L/min",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "15 L",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "50 %, fenêtre non précisée",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "240 volt / 50Hz",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-bambi-product-29"
			]
		}
	],
	"editorial": {
		"overview": "BB15V : 15 L, 0,34 kW et 26 L/min à 6 bar, avec un cycle maximal de 50 %. Le BB24V voisin utilise une cuve de 24 L et la même courbe de débit publiée : le gain porte sur le stockage. Le BB15V demande une alimentation de 240 V à 50 Hz.",
		"verifiedFacts": [
			"La courbe constructeur couvre 1 à 8 bar : 35 L/min à 1 bar et 25 L/min à 8 bar.",
			"À 6,3 bar, le rendu CompatAir interpole 25,85 L/min face aux 142 L/min de la TC-PW 340 ; le scénario soutenu dépasse le débit disponible.",
			"La fiche indique 22 kg, une prise britannique et une prise UE sur demande."
		],
		"limitations": [
			"Le cycle maximal de 50 % est publié sans fenêtre temporelle. Aucun nombre de minutes de marche ni capacité continue n’en est déduit.",
			"La fiche ne précise pas de conditions ISO 1217. Les valeurs restent celles du constructeur et ne constituent pas un essai CompatAir.",
			"Le raccordement pour une installation en France et le modèle de prise doivent être confirmés avant achat. Les mentions réglementaires britanniques ne sont pas transposées au marché français."
		]
	},
	"evidence": [
		{
			"id": "october3d-bambi-product-29",
			"sourceUrl": "https://bambi-air.co.uk/product/bb15v/",
			"sourceLabel": "Bambi, BB15V, fiche constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 0602bb7839acf86bbccb9d8abfccc8ca540282e58b62b12341634b0897d93cd1 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261017-bambi-bb24v",
			"sourceUrl": "https://bambi-air.co.uk/product/bb24v/",
			"sourceLabel": "Bambi, BB24V, fiche constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-17",
			"confidence": "B",
			"notes": "Lecture ciblée du 17 octobre 2026, SHA-256 b599f69b8bcd5e4e1029d7ff375c92081c94eff023a78797a8eb34840568617c."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-bambi-product-29"
		],
		"tankLiters": [
			"october3d-bambi-product-29"
		],
		"fadCurve": [
			"october3d-bambi-product-29"
		],
		"dutyCycle": [
			"october3d-bambi-product-29"
		],
		"oilType": [
			"october3d-bambi-product-29"
		],
		"powerKw": [
			"october3d-bambi-product-29"
		],
		"voltage": [
			"october3d-bambi-product-29"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	],
	"voltage": "240 V, 50 Hz"
};

export default product;
