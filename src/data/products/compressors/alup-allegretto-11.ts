import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "alup-allegretto-11",
	"slug": "alup-allegretto-11",
	"brand": "ALUP",
	"model": "Allegretto 11",
	"variant": {
		"familyId": "alup-allegretto-11",
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
			"litersPerMinute": 1823.333
		},
		{
			"pressureBar": 9.5,
			"litersPerMinute": 1470
		}
	],
	"oilType": "unknown",
	"powerKw": 11,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/alup-allegretto-11.svg",
		"alt": "Repères techniques : ALUP Allegretto 11",
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
			"label": "FAD maximal publié à 9,5 bar",
			"value": "1 470 L/min",
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
		}
	],
	"editorial": {
		"overview": "Allegretto 11 sur socle : le tableau VSD annonce un FAD maximal de 1 823,333 L/min à 7 bar et de 1 470 L/min à 9,5 bar. Le minimum publié à 7 bar est de 18,4 m³/h. La version Allegretto 14 annonce 1 860 L/min au maximum à 9,5 bar pour 15 kW.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Pression maximale de fonctionnement publiée : 10 bar."
		],
		"limitations": [
			"Les capacités sont des maxima VSD ; la production effective dépend du régime demandé.",
			"Le minimum de 18,4 m³/h est donné à 7 bar ; aucune valeur minimale à 9,5 bar n’est déduite.",
			"Le taux de marche du groupe complet et la variante électrique restent à confirmer.",
			"La page technique Allegretto ne présente pas la colonne 12,5 bar de Sonetto ; aucune réserve liée à cette colonne ne s’applique ici.",
			"Le mode de lubrification du bloc reste unknown tant qu’une source applicable à Allegretto n’est établie."
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
