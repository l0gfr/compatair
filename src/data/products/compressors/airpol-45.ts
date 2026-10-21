import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpol-45",
	"slug": "airpol-45",
	"brand": "Airpol",
	"model": "45",
	"variant": {
		"familyId": "airpol-45",
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
			"litersPerMinute": 4666.667
		}
	],
	"oilType": "oil",
	"powerKw": 45,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpol-45.svg",
		"alt": "Repères techniques : Airpol 45",
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
				"october3d-airpol-pdf-075-p11"
			]
		},
		{
			"label": "Air livré à 15 bar",
			"value": "4 666,667 L/min",
			"evidenceIds": [
				"october3d-airpol-pdf-075-p11",
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
				"october3d-airpol-pdf-075-p11"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-airpol-pdf-075-p11"
			]
		}
	],
	"editorial": {
		"overview": "Airpol 45, configuration 15 bar : 280 m³/h publiés à 1,5 MPa, soit 4 666,667 L/min, avec un moteur de 45 kW en 400 V triphasé à 50 Hz. Le groupe sans réservoir intégré mesure 1060 × 1350 × 1570 mm et pèse 1 100 kg.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Pression maximale de fonctionnement publiée : 15 bar."
		],
		"limitations": [
			"La brochure associe les capacités à EN ISO 1217:2009 et EN ISO 5167-2. L’annexe FAD ainsi que les conditions complètes de référence ne sont pas précisées ; aucune annexe C n’est ajoutée.",
			"Le besoin d’air de refroidissement publié est de 7 000 m³/h, avec une température ambiante admissible de +5 à +40 °C et un raccord G 1½.",
			"L’Airpol 37 annonce 245 m³/h à 15 bar avec 37 kW, 760 kg et 5 900 m³/h d’air de refroidissement. Les contraintes d’installation diffèrent.",
			"Le taux de marche demeure inconnu. Les valeurs des autres versions de pression ne sont pas réunies dans cette courbe."
		]
	},
	"evidence": [
		{
			"id": "october3d-airpol-pdf-075-p11",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/EN-Karta-Airpol-185-55kW.pdf#page=11",
			"sourceLabel": "Airpol, manufacturer technical documentation, page PDF 11",
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
			"october3d-airpol-pdf-075-p11"
		],
		"fadCurve": [
			"october3d-airpol-pdf-075-p11",
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
			"october3d-airpol-pdf-075-p11"
		],
		"voltage": [
			"october3d-airpol-pdf-075-p11"
		],
		"phase": [
			"october3d-airpol-pdf-075-p11"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	],
	"voltage": "400 V, 50 Hz",
	"phase": "three-phase"
};

export default product;
