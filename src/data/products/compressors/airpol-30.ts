import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpol-30",
	"slug": "airpol-30",
	"brand": "Airpol",
	"model": "30",
	"variant": {
		"familyId": "airpol-30",
		"label": "Groupe Airpol sans réservoir de stockage intégré",
		"distinguishingAttributes": {
			"équipement": "Groupe Airpol sans réservoir de stockage intégré",
			"pressionMaximale": "15 bar",
			"cuve": "0 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 15,
	"fadCurve": [
		{
			"pressureBar": 15,
			"litersPerMinute": 3166.667
		}
	],
	"oilType": "oil",
	"powerKw": 30,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpol-30.svg",
		"alt": "Repères techniques : Airpol 30",
		"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/EN-Karta-Airpol-185-55kW.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe Airpol sans réservoir de stockage intégré",
			"evidenceIds": [
				"october3d-airpol-screw-p9",
				"october3d-airpol-pdf-075-p2"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "15 bar relatifs",
			"evidenceIds": [
				"october3d-airpol-pdf-075-p9"
			]
		},
		{
			"label": "Air livré à 15 bar",
			"value": "3 166,667 L/min",
			"evidenceIds": [
				"october3d-airpol-pdf-075-p9",
				"october3d-airpol-screw-p9"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "0 L",
			"evidenceIds": [
				"october3d-airpol-screw-p9",
				"october3d-airpol-pdf-075-p2"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "400/3/50",
			"evidenceIds": [
				"october3d-airpol-pdf-075-p9"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-airpol-pdf-075-p9"
			]
		}
	],
	"editorial": {
		"overview": "Airpol 30 : 190 m³/h, soit 3 166,667 L/min, à 15 bar, moteur de 30 kW et alimentation 400 V triphasée à 50 Hz. L’Airpol 22 voisin annonce 2 000 L/min à 15 bar pour 22 kW. Le montage est sans réservoir de stockage intégré.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Pression maximale de fonctionnement publiée : 15 bar."
		],
		"limitations": [
			"La brochure cite EN ISO 1217:2009 et EN ISO 5167-2 ; aucune annexe ou condition ambiante d’essai supplémentaire n’est ajoutée.",
			"La fiche du modèle 30 donne 720 kg, un besoin d’air de refroidissement de 4 800 m³/h et une ambiance de +5 à +45 °C.",
			"Le taux de marche reste à documenter. Refroidissement, stockage externe, traitement d’air et pression utile sont à vérifier sur l’installation."
		]
	},
	"evidence": [
		{
			"id": "october3d-airpol-pdf-075-p9",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/EN-Karta-Airpol-185-55kW.pdf#page=9",
			"sourceLabel": "Airpol, manufacturer technical documentation, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 03765bd3f6325ceba8a938e64a469e120e952843538b1a18f3aac757d0728e64 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-airpol-screw-p9",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Airpol-screw-compressors.pdf#page=9",
			"sourceLabel": "Airpol, screw compressor legacy brochure with ISO1217 capacity tables, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 93fb6c0baf7deedc619234c8c63575d9edfeab652447ffc07e673ddb9c7cbdd8 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-airpol-pdf-075-p2",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/EN-Karta-Airpol-185-55kW.pdf#page=2",
			"sourceLabel": "Airpol, manufacturer technical documentation, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 03765bd3f6325ceba8a938e64a469e120e952843538b1a18f3aac757d0728e64 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-airpol-pdf-075-p9"
		],
		"fadCurve": [
			"october3d-airpol-pdf-075-p9",
			"october3d-airpol-screw-p9"
		],
		"tankLiters": [
			"october3d-airpol-screw-p9",
			"october3d-airpol-pdf-075-p2"
		],
		"oilType": [
			"october3d-airpol-pdf-075-p2"
		],
		"powerKw": [
			"october3d-airpol-pdf-075-p9"
		],
		"voltage": [
			"october3d-airpol-pdf-075-p9"
		],
		"phase": [
			"october3d-airpol-pdf-075-p9"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	],
	"voltage": "400 V, 50 Hz",
	"phase": "three-phase"
};

export default product;
