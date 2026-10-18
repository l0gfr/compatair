import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "alup-allegretto-14",
	"slug": "alup-allegretto-14",
	"brand": "ALUP",
	"model": "Allegretto 14",
	"variant": {
		"familyId": "alup-allegretto-14",
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
			"litersPerMinute": 2010
		},
		{
			"pressureBar": 9.5,
			"litersPerMinute": 1860
		}
	],
	"oilType": "unknown",
	"powerKw": 15,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/alup-allegretto-14.svg",
		"alt": "Repères techniques : ALUP Allegretto 14",
		"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegretto-8-14/leaflets/Alup_Sonetto8-20_Allegretto8-14_leaflet_6999640670_EN_LR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur socle sans réservoir de stockage intégré",
			"evidenceIds": [
				"october3d-alup-pdf-extra-03-p8"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "10 bar relatifs",
			"evidenceIds": [
				"october3d-alup-extra-21"
			]
		},
		{
			"label": "Air livré à 9,5 bar",
			"value": "1 860 L/min",
			"evidenceIds": [
				"october3d-alup-pdf-extra-03-p8"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "0 L",
			"evidenceIds": [
				"october3d-alup-pdf-extra-03-p8"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "Alimentation non précisée dans les extraits retenus",
			"evidenceIds": [
				"october3d-alup-extra-21"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "non précisée",
			"evidenceIds": [
				"october3d-alup-extra-21"
			]
		},
		{
			"label": "FAD maximal à 7 bar",
			"value": "120,6 m³/h, soit 2 010 L/min",
			"evidenceIds": [
				"october3d-alup-pdf-extra-03-p8"
			]
		},
		{
			"label": "FAD minimal de modulation à 7 bar",
			"value": "19,4 m³/h ; minimum à 9,5 bar non déduit",
			"evidenceIds": [
				"october3d-alup-pdf-extra-03-p8"
			]
		}
	],
	"editorial": {
		"overview": "Allegretto 14 sur socle : FAD maximal de 2 010 L/min à 7 bar et de 1 860 L/min à 9,5 bar. Le minimum publié à 7 bar est de 19,4 m³/h. L’Allegretto 11 voisin annonce un maximum de 1 470 L/min à 9,5 bar, pour 11 kW contre 15 kW ici.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Pression maximale de fonctionnement publiée : 10 bar."
		],
		"limitations": [
			"Les valeurs de capacité sont des maxima VSD ; la production effective dépend du régime demandé.",
			"Le minimum de modulation est documenté à 7 bar ; aucune valeur minimale à 9,5 bar n’est déduite.",
			"Le tableau Allegretto ne comporte pas la colonne 12,5 bar de Sonetto. La réserve liée à cette autre famille est retirée.",
			"Le taux de marche, l’alimentation et la lubrification du bloc restent à confirmer."
		]
	},
	"evidence": [
		{
			"id": "october3d-alup-extra-21",
			"sourceUrl": "https://www.alup.com/en-international/products/screw-compressors/variable-speed/allegretto-8-14",
			"sourceLabel": "ALUP, documentation constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 76521d2c0c66290bd95b939825a1f39e9453046594c864f951d07e509d9fe64e de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-alup-pdf-extra-03-p8",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegretto-8-14/leaflets/Alup_Sonetto8-20_Allegretto8-14_leaflet_6999640670_EN_LR.pdf#page=8",
			"sourceLabel": "ALUP, documentation constructeur, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 8efff91c3dd0111e59a712f8064be251e0efd37d5e42d137a7167d2f2a69cc43 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-alup-pdf-extra-03-p2",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegretto-8-14/leaflets/Alup_Sonetto8-20_Allegretto8-14_leaflet_6999640670_EN_LR.pdf#page=2",
			"sourceLabel": "ALUP, documentation constructeur, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 8efff91c3dd0111e59a712f8064be251e0efd37d5e42d137a7167d2f2a69cc43 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3d-alup-pdf-extra-03-p8"
		],
		"maxPressureBar": [
			"october3d-alup-extra-21",
			"october3d-alup-extra-21"
		],
		"fadCurve": [
			"october3d-alup-pdf-extra-03-p8"
		],
		"powerKw": [
			"october3d-alup-pdf-extra-03-p8"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
