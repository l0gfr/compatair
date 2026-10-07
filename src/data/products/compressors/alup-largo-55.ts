import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "alup-largo-55",
	"slug": "alup-largo-55",
	"brand": "ALUP",
	"model": "LARGO 55",
	"mpn": "8153338551",
	"variant": {
		"familyId": "alup-largo-55",
		"label": "Groupe sur socle sans réservoir de stockage intégré",
		"distinguishingAttributes": {
			"équipement": "Groupe sur socle sans réservoir de stockage intégré",
			"pressionMaximale": "10 bar",
			"cuve": "0 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 9.5,
			"litersPerMinute": 8933.333
		}
	],
	"oilType": "oil",
	"powerKw": 55,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/alup-largo-55.svg",
		"alt": "Repères techniques : ALUP LARGO 55",
		"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegretto-55-90-(2024)/leaflets/Lagro55-90%20KW%20%20Allegretto%2055-90%20Evoluto%2045-90%20KW.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur socle sans réservoir de stockage intégré",
			"evidenceIds": [
				"october3d-alup-shop-largo55-10"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "10 bar relatifs",
			"evidenceIds": [
				"october3d-alup-pdf-05-p10"
			]
		},
		{
			"label": "Air livré à 9,5 bar",
			"value": "8 933,333 L/min",
			"evidenceIds": [
				"october3d-alup-pdf-05-p10"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "0 L",
			"evidenceIds": [
				"october3d-alup-shop-largo55-10"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "400 V /3ph/50 Hz",
			"evidenceIds": [
				"october3d-alup-shop-largo55-10"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-alup-shop-largo55-10"
			]
		}
	],
	"editorial": {
		"overview": "ALUP LARGO 55. 8 933,333 L/min à 9,5 bar. Groupe sur socle sans réservoir de stockage intégré.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Pression maximale de fonctionnement publiée : 10 bar."
		],
		"limitations": [
			"Un seul modèle/configuration retenu ; aucune multiplication des pressions ou réservoirs.",
			"Cycle de service non établi ; la tenue permanente reste indéterminée.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Installation et disponibilité en France à confirmer selon l’alimentation et le raccordement publiés."
		]
	},
	"evidence": [
		{
			"id": "october3d-alup-shop-largo55-10",
			"sourceUrl": "https://shop.alup.com/pl-PL/products/8153338551/largo55-w-10-mebb-400-50",
			"sourceLabel": "ALUP, official SKU8153338551",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 0bbc74ff3fbcd56266d87ae87e4ac46003361798b496e7072d3aed750a919b71 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-alup-pdf-05-p1",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegretto-55-90-(2024)/leaflets/Lagro55-90%20KW%20%20Allegretto%2055-90%20Evoluto%2045-90%20KW.pdf#page=1",
			"sourceLabel": "ALUP, documentation constructeur, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 a70ec59ca4f8d37c0aeae5aba7281d78f2097015dfbeb7023dc24dac273def7a de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-alup-pdf-05-p10",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegretto-55-90-(2024)/leaflets/Lagro55-90%20KW%20%20Allegretto%2055-90%20Evoluto%2045-90%20KW.pdf#page=10",
			"sourceLabel": "ALUP, documentation constructeur, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 a70ec59ca4f8d37c0aeae5aba7281d78f2097015dfbeb7023dc24dac273def7a de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3d-alup-shop-largo55-10"
		],
		"oilType": [
			"october3d-alup-pdf-05-p1"
		],
		"mpn": [
			"october3d-alup-shop-largo55-10"
		],
		"electrical": [
			"october3d-alup-shop-largo55-10"
		],
		"maxPressureBar": [
			"october3d-alup-pdf-05-p10",
			"october3d-alup-shop-largo55-10"
		],
		"fadCurve": [
			"october3d-alup-pdf-05-p10"
		],
		"powerKw": [
			"october3d-alup-pdf-05-p10"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
