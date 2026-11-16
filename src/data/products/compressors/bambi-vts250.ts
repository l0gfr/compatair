import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "bambi-vts250",
	"slug": "bambi-vts250",
	"brand": "Bambi",
	"model": "VTS250",
	"mpn": "VTS250",
	"variant": {
		"familyId": "bambi-vts250",
		"label": "Groupe avec cuve 59 L",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve 59 L",
			"pressionMaximale": "8 bar",
			"cuve": "59 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 59,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 1,
			"litersPerMinute": 280
		},
		{
			"pressureBar": 2,
			"litersPerMinute": 265
		},
		{
			"pressureBar": 3,
			"litersPerMinute": 248
		},
		{
			"pressureBar": 4,
			"litersPerMinute": 222
		},
		{
			"pressureBar": 5,
			"litersPerMinute": 210
		},
		{
			"pressureBar": 6,
			"litersPerMinute": 188
		},
		{
			"pressureBar": 7,
			"litersPerMinute": 179
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 160
		}
	],
	"dutyCycle": 0.5,
	"oilType": "oil-free",
	"powerKw": 1.84,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/bambi-vts250-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Bambi VTS250",
		"sourceUrl": "https://bambi-air.co.uk/product/vts250/",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve 59 L",
			"evidenceIds": [
				"october3d-bambi-product-19"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-bambi-product-19"
			]
		},
		{
			"label": "Air livré à 1 bar",
			"value": "280 L/min",
			"evidenceIds": [
				"october3d-bambi-product-19"
			]
		},
		{
			"label": "Air livré à 2 bar",
			"value": "265 L/min",
			"evidenceIds": [
				"october3d-bambi-product-19"
			]
		},
		{
			"label": "Air livré à 3 bar",
			"value": "248 L/min",
			"evidenceIds": [
				"october3d-bambi-product-19"
			]
		},
		{
			"label": "Air livré à 4 bar",
			"value": "222 L/min",
			"evidenceIds": [
				"october3d-bambi-product-19"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "210 L/min",
			"evidenceIds": [
				"october3d-bambi-product-19"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "188 L/min",
			"evidenceIds": [
				"october3d-bambi-product-19"
			]
		},
		{
			"label": "Air livré à 7 bar",
			"value": "179 L/min",
			"evidenceIds": [
				"october3d-bambi-product-19"
			]
		},
		{
			"label": "Air livré à 8 bar",
			"value": "160 L/min",
			"evidenceIds": [
				"october3d-bambi-product-19"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "59 L",
			"evidenceIds": [
				"october3d-bambi-product-19"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "50 %, fenêtre non précisée",
			"evidenceIds": [
				"october3d-bambi-product-19"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "240 volt / 50Hz",
			"evidenceIds": [
				"october3d-bambi-product-19"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-bambi-product-19"
			]
		}
	],
	"editorial": {
		"overview": "Le VTS250 utilise une cuve de 59 L et annonce 210 L/min FAD à 5 bar, 160 à 8 bar. Le VTS200D est plus petit avec sécheur ; le VTS250D est une variante avec traitement, dont la table diffère. Le cycle maximal reste 50 %, et le débit doit être choisi à la pression utile de l’outil. La masse 122 kg et l’alimentation 240 V/50 Hz doivent être prises en compte pour l’installation.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 59 L.",
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
			"id": "october3d-bambi-product-19",
			"sourceUrl": "https://bambi-air.co.uk/product/vts250/",
			"sourceLabel": "Bambi, VTS250, fiche constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 7d283273349a77cb05dbb3207ea4598b7c67a4b46b848cedc282aad857618cf1 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:bambi-vts250:0",
			"sourceUrl": "https://bambi-air.co.uk/product/vts250/",
			"sourceLabel": "Bambi, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le VTS250 utilise une cuve de 59 L et annonce 210 L/min FAD à 5 bar, 160 à 8 bar. Le VTS200D est plus petit avec sécheur ; le VTS250D est une variante avec traitement, dont la table diffère. Le cycle maximal reste 50 %, et le débit doit être choisi à la pression utile de l’outil. La masse 122 kg et l’alimentation 240 V/50 Hz doivent être prises en compte pour l’installation. GET complet SHA-256 b896680671b723f5fa48f39b8d427e528337a16891de7d6403f0eca544fd80e2. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-bambi-product-19"
		],
		"tankLiters": [
			"october3d-bambi-product-19"
		],
		"fadCurve": [
			"october3d-bambi-product-19"
		],
		"dutyCycle": [
			"october3d-bambi-product-19"
		],
		"oilType": [
			"october3d-bambi-product-19"
		],
		"powerKw": [
			"october3d-bambi-product-19"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
