import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "bambi-bb24d",
	"slug": "bambi-bb24d",
	"brand": "Bambi",
	"model": "BB24D",
	"mpn": "BB24D",
	"variant": {
		"familyId": "bambi-bb24d",
		"label": "Groupe à deux pompes sur cuve horizontale 24 L",
		"distinguishingAttributes": {
			"équipement": "Groupe à deux pompes sur cuve horizontale 24 L",
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
			"litersPerMinute": 70
		},
		{
			"pressureBar": 2,
			"litersPerMinute": 64
		},
		{
			"pressureBar": 3,
			"litersPerMinute": 60
		},
		{
			"pressureBar": 4,
			"litersPerMinute": 56
		},
		{
			"pressureBar": 5,
			"litersPerMinute": 54
		},
		{
			"pressureBar": 6,
			"litersPerMinute": 52
		},
		{
			"pressureBar": 7,
			"litersPerMinute": 51
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 50
		}
	],
	"dutyCycle": 0.5,
	"oilType": "oil",
	"powerKw": 0.68,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/bambi-bb24d.svg",
		"alt": "Repères techniques : Bambi BB24D",
		"sourceUrl": "https://bambi-air.co.uk/product/bb24d/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe à deux pompes sur cuve horizontale 24 L",
			"evidenceIds": [
				"october3d-bambi-product-32"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-bambi-product-32"
			]
		},
		{
			"label": "Air livré à 1 bar",
			"value": "70 L/min",
			"evidenceIds": [
				"october3d-bambi-product-32"
			]
		},
		{
			"label": "Air livré à 2 bar",
			"value": "64 L/min",
			"evidenceIds": [
				"october3d-bambi-product-32"
			]
		},
		{
			"label": "Air livré à 3 bar",
			"value": "60 L/min",
			"evidenceIds": [
				"october3d-bambi-product-32"
			]
		},
		{
			"label": "Air livré à 4 bar",
			"value": "56 L/min",
			"evidenceIds": [
				"october3d-bambi-product-32"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "54 L/min",
			"evidenceIds": [
				"october3d-bambi-product-32"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "52 L/min",
			"evidenceIds": [
				"october3d-bambi-product-32"
			]
		},
		{
			"label": "Air livré à 7 bar",
			"value": "51 L/min",
			"evidenceIds": [
				"october3d-bambi-product-32"
			]
		},
		{
			"label": "Air livré à 8 bar",
			"value": "50 L/min",
			"evidenceIds": [
				"october3d-bambi-product-32"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "24 L",
			"evidenceIds": [
				"october3d-bambi-product-32"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "50 %, fenêtre non précisée",
			"evidenceIds": [
				"october3d-bambi-product-32"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "240 volt / 50Hz",
			"evidenceIds": [
				"october3d-bambi-product-32"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-bambi-product-32"
			]
		}
	],
	"editorial": {
		"overview": "BB24D : deux pompes lubrifiées sur une cuve horizontale de 24 L, pour une puissance combinée de 0,68 kW et une masse de 31 kg. La fiche publie 52 L/min à 6 bar et 50 L/min à 8 bar. Le BB24 voisin, à une pompe de 0,34 kW, conserve 24 L et annonce 26 L/min à 6 bar.",
		"verifiedFacts": [
			"Deux pompes, puissance combinée publiée de 0,68 kW.",
			"Cuve horizontale de 24 L ; masse publiée de 31 kg.",
			"FAD publié : 52 L/min à 6 bar et 50 L/min à 8 bar ; maximum de fonctionnement 8 bar."
		],
		"limitations": [
			"Le cycle maximal de 50 % est publié sans fenêtre temporelle ; il ne fournit pas un nombre de minutes de marche.",
			"La configuration décrite ne documente aucun sécheur. Le choix BB24D/BB24 porte sur le nombre de pompes et le débit publié, avec le même stockage.",
			"L’alimentation indiquée est 240 V à 50 Hz, avec prise britannique et prise UE sur demande. Vérifier le raccordement de la machine livrée.",
			"Les conditions de référence ISO 1217 ne sont pas précisées ; les valeurs restent des données fabricant, sans essai physique CompatAir."
		]
	},
	"evidence": [
		{
			"id": "october3d-bambi-product-32",
			"sourceUrl": "https://bambi-air.co.uk/product/bb24d/",
			"sourceLabel": "Bambi, BB24D, fiche constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 0e293f2f918bdb50cacf53413f2e65d5a4afbbc5d3b70d7696844bfdf83d1391 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-bambi-product-31-review-20261019-for-bambi-bb24d",
			"sourceUrl": "https://bambi-air.co.uk/product/bb24/",
			"sourceLabel": "Bambi, BB24, fiche constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-19",
			"confidence": "B",
			"notes": "Fiche voisine consultée en HTTPS le 19 octobre 2026 ; SHA-256 du corps : 4494d601f0fa3585b6c43bdd80a5f95744b3c21a39478d59f792aacece100101. Configurations comparées séparément."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-bambi-product-32"
		],
		"tankLiters": [
			"october3d-bambi-product-32"
		],
		"fadCurve": [
			"october3d-bambi-product-32"
		],
		"dutyCycle": [
			"october3d-bambi-product-32"
		],
		"oilType": [
			"october3d-bambi-product-32"
		],
		"powerKw": [
			"october3d-bambi-product-32"
		],
		"voltage": [
			"october3d-bambi-product-32"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	],
	"voltage": "240 V, 50 Hz"
};

export default product;
