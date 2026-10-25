import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "alup-allegretto-22",
	"slug": "alup-allegretto-22",
	"brand": "ALUP",
	"model": "Allegretto 22",
	"variant": {
		"familyId": "alup-allegretto-22",
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
			"pressureBar": 9.5,
			"litersPerMinute": 3246.667
		}
	],
	"oilType": "oil",
	"powerKw": 22,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/alup-allegretto-22.svg",
		"alt": "Repères techniques : ALUP Allegretto 22",
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
			"label": "Air livré à 9,5 bar",
			"value": "3 246,667 L/min",
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
			"label": "Comparaison documentée et limite de choix",
			"value": "Comparer les maxima VSD à 9,5 bar avec le 15 kW, séparer le maximum 10 bar et écarter la famille SCK de la preuve du groupe.",
			"evidenceIds": [
				"review-20261025-s103",
				"review-20261025-s104-p2",
				"review-20261025-s104-p5",
				"review-20261025-s104-p6",
				"review-20261025-s104-p8"
			]
		}
	],
	"editorial": {
		"overview": "L’Allegretto 22 sur socle publie un FAD maximal de 194,8 m³/h à 9,5 bar, soit 3246,667 L/min pour 22 kW. L’Allegretto 15 annonce 146,2 m³/h à la même pression, soit 2436,667 L/min pour 15 kW. Le maximum de fonctionnement 10 bar et les maxima VSD mesurés à 9,5 bar remplissent des rôles distincts : le dimensionnement ne doit pas supposer que le débit maximal est disponible à tout régime.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Pression maximale de fonctionnement publiée : 10 bar."
		],
		"limitations": [
			"Le tableau Allegretto 15–22 et sa note ISO 1217 annexeC sont lus séparément de SCK25–40. La colonne 12,5 bar de SCK n’appartient pas à cette configuration.",
			"Les conversions utilisent les valeursm³/h :194,8× 1000/60. Les affichagesL/s arrondis ne sont pas utilisés pour fabriquer une précision supplémentaire.",
			"La version sur socle est retenue ; le stockage externe reste exclu. Le taux de marche, l’alimentation exacte et le mode de lubrification du bloc ne sont pas déduits de la sectionSCK.",
			"La comparaison ne reprend pas le minimum de l’Allegretto 15 : ses unités 34,2 m³/h et 13 L/s ne concordent pas dans le tableau."
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
		},
		{
			"id": "review-20261025-s103",
			"sourceUrl": "https://www.alup.com/en-international/products/screw-compressors/variable-speed/allegretto-15-22",
			"sourceLabel": "ALUP, relecture primaire du 25 octobre 2026, s103",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 a0ac6f0e3fa706a2cfe9ee546c1d12d0ccc66ce84d77afc54d05ca4dca9b1ae0. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s104-p2",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegretto-15-22-(2025)/leaflets/Alup_SCK25-40_Allegretto15-22_leaflet_6999640680_EN_LR.pdf#page=2",
			"sourceLabel": "ALUP, relecture primaire du 25 octobre 2026, s104, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 84829052ca3da402ddeb4b14931753ab9a9c0041d97269b766d5a035b3b90973. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s104-p5",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegretto-15-22-(2025)/leaflets/Alup_SCK25-40_Allegretto15-22_leaflet_6999640680_EN_LR.pdf#page=5",
			"sourceLabel": "ALUP, relecture primaire du 25 octobre 2026, s104, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 84829052ca3da402ddeb4b14931753ab9a9c0041d97269b766d5a035b3b90973. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s104-p6",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegretto-15-22-(2025)/leaflets/Alup_SCK25-40_Allegretto15-22_leaflet_6999640680_EN_LR.pdf#page=6",
			"sourceLabel": "ALUP, relecture primaire du 25 octobre 2026, s104, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 84829052ca3da402ddeb4b14931753ab9a9c0041d97269b766d5a035b3b90973. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s104-p8",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegretto-15-22-(2025)/leaflets/Alup_SCK25-40_Allegretto15-22_leaflet_6999640680_EN_LR.pdf#page=8",
			"sourceLabel": "ALUP, relecture primaire du 25 octobre 2026, s104, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 84829052ca3da402ddeb4b14931753ab9a9c0041d97269b766d5a035b3b90973. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3d-alup-pdf-extra-02-p8"
		],
		"maxPressureBar": [
			"review-20261025-s103"
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
