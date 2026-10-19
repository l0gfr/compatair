import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "alup-allegretto-15",
	"slug": "alup-allegretto-15",
	"brand": "ALUP",
	"model": "Allegretto 15",
	"variant": {
		"familyId": "alup-allegretto-15",
		"label": "Groupe sur socle sans réservoir de stockage intégré",
		"distinguishingAttributes": {
			"équipement": "Groupe sur socle sans réservoir de stockage intégré",
			"pressionMaximale": "10 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 7,
			"litersPerMinute": 2850
		},
		{
			"pressureBar": 9.5,
			"litersPerMinute": 2436.667
		}
	],
	"oilType": "unknown",
	"powerKw": 15,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/alup-allegretto-15.svg",
		"alt": "Repères techniques : ALUP Allegretto 15",
		"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegretto-15-22-(2025)/leaflets/Alup_SCK25-40_Allegretto15-22_leaflet_6999640680_EN_LR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur socle sans réservoir de stockage intégré",
			"evidenceIds": [
				"october3d-alup-pdf-extra-02-p8"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "10 bar relatifs",
			"evidenceIds": [
				"october3d-alup-extra-18"
			]
		},
		{
			"label": "FAD maximal à 9,5 bar",
			"value": "2 436,667 L/min",
			"evidenceIds": [
				"october3d-alup-pdf-extra-02-p8"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "0 L",
			"evidenceIds": [
				"october3d-alup-pdf-extra-02-p8"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "Alimentation non précisée dans les extraits retenus",
			"evidenceIds": [
				"october3d-alup-extra-18"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "non précisée",
			"evidenceIds": [
				"october3d-alup-extra-18"
			]
		},
		{
			"label": "FAD maximal à 7 bar",
			"value": "171 m³/h, soit 2 850 L/min",
			"evidenceIds": [
				"october3d-alup-pdf-extra-02-p8"
			]
		},
		{
			"label": "Minimum de modulation : unités contradictoires",
			"value": "34,2 m³/h et 13 L/s imprimés dans le tableau ; aucune valeur minimale arbitrée",
			"evidenceIds": [
				"october3d-alup-pdf-extra-02-p8"
			]
		}
	],
	"editorial": {
		"overview": "Allegretto 15 sur socle : FAD maximal de 2 850 L/min à 7 bar et de 2 436,667 L/min à 9,5 bar, pour un moteur de 15 kW. L’Allegretto 18 voisin annonce un maximum de 2 873,333 L/min à 9,5 bar avec 18,5 kW selon le tableau primaire.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Pression maximale de fonctionnement publiée : 10 bar."
		],
		"limitations": [
			"Les capacités sont des maxima VSD ; la production effective varie avec le régime demandé.",
			"Pour le minimum de modulation, le tableau imprime 34,2 m³/h et 13 L/s. Ces valeurs ne sont pas équivalentes : 34,2 m³/h donne 9,5 L/s. Aucune valeur minimale corrigée n’est retenue sans clarification du fabricant.",
			"La colonne de 12,5 bar de SCK ne décrit pas Allegretto. Les profils des deux familles restent séparés.",
			"Le taux de marche, la variante électrique et la lubrification du bloc restent à confirmer."
		]
	},
	"evidence": [
		{
			"id": "october3d-alup-extra-18",
			"sourceUrl": "https://www.alup.com/en-international/products/screw-compressors/variable-speed/allegretto-15-22",
			"sourceLabel": "ALUP, documentation constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 6b1a75a985217ff632d4008167daecadd3acc9a44491d3f90243c9327103f6f0 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-alup-pdf-extra-02-p8",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegretto-15-22-(2025)/leaflets/Alup_SCK25-40_Allegretto15-22_leaflet_6999640680_EN_LR.pdf#page=8",
			"sourceLabel": "ALUP, documentation constructeur, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 84829052ca3da402ddeb4b14931753ab9a9c0041d97269b766d5a035b3b90973 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-alup-pdf-extra-02-p2",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegretto-15-22-(2025)/leaflets/Alup_SCK25-40_Allegretto15-22_leaflet_6999640680_EN_LR.pdf#page=2",
			"sourceLabel": "ALUP, documentation constructeur, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 84829052ca3da402ddeb4b14931753ab9a9c0041d97269b766d5a035b3b90973 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3d-alup-pdf-extra-02-p8"
		],
		"maxPressureBar": [
			"october3d-alup-extra-18",
			"october3d-alup-extra-18"
		],
		"fadCurve": [
			"october3d-alup-pdf-extra-02-p8"
		],
		"powerKw": [
			"october3d-alup-pdf-extra-02-p8"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
