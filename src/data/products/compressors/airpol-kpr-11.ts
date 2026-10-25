import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpol-kpr-11",
	"slug": "airpol-kpr-11",
	"brand": "Airpol",
	"model": "KPR 11",
	"variant": {
		"familyId": "airpol-kpr-11",
		"label": "Groupe Airpol sur réservoir 500 L",
		"distinguishingAttributes": {
			"équipement": "Groupe Airpol sur réservoir 500 L",
			"pressionMaximale": "10 bar",
			"cuve": "500 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 283.333
		}
	],
	"oilType": "oil",
	"powerKw": 11,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpol-kpr-11.svg",
		"alt": "Repères techniques : Airpol KPR 11",
		"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Airpol-KPR-from-55-up-to-15-kW-up-to-10-bar.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe Airpol sur réservoir 500 L",
			"evidenceIds": [
				"october3d-airpol-pdf-024-p5"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "10 bar relatifs",
			"evidenceIds": [
				"october3d-airpol-pdf-024-p5"
			]
		},
		{
			"label": "Borne minimale de modulation retenue à 10 bar",
			"value": "17 m³/h, soit 283,333 L/min ; plage constructeur 17–90 m³/h, maximum non utilisé comme capacité permanente",
			"evidenceIds": [
				"october3d-airpol-pdf-024-p5",
				"october3d-airpol-screw-p11"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "500 L",
			"evidenceIds": [
				"october3d-airpol-pdf-024-p5"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "400/3/50",
			"evidenceIds": [
				"october3d-airpol-pdf-024-p5"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-airpol-pdf-024-p5"
			]
		},
		{
			"label": "Comparaison documentée et limite de choix",
			"value": "Expliquer le minimum de modulation conservateur retenu et les plages différentes KPR 11/KPR 15 à pression identique, sans remplacer le minimum par un maximum permanent.",
			"evidenceIds": [
				"review-20261025-s101-p5",
				"review-20261025-s101-p6",
				"review-20261025-s101-p10",
				"review-20261025-s102-p11"
			]
		}
	],
	"editorial": {
		"overview": "À10 bar, le KPR 11 publie une plage de 17 à 90 m³/h, soit environ 283,333 à 1500 L/min, avec 11 kW et une cuve 500 L. Le KPR 15 publie 52 à 120 m³/h à la même pression, avec 15 kW et également 500 L. Le profil de calcul du KPR 11 conserve volontairement la borne basse 283,333 L/min ; elle ne représente pas sa capacité maximale. Le choix entre ces modèles doit tenir compte de la plage de modulation et du régime réel demandé, puis d’un taux de marche à confirmer.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 500 L.",
			"Pression maximale de fonctionnement publiée : 10 bar."
		],
		"limitations": [
			"La borne minimale 17 m³/h est volontairement retenue dans la courbe, avec conversion 17× 1000/60 et arrondi à trois décimales. Ce choix conservateur n’est pas une transcription erronée du maximum 90 m³/h.",
			"La brochure mentionne ENISO 1217:2009 et ENISO 5167-2 pour la capacité ; aucune annexeC ni condition de température/humidité non publiée n’est ajoutée.",
			"La plage min-max ne garantit pas 1500 L/min en permanence ; le taux de marche n’est pas établi.",
			"Les débits à d’autres pressions de fabrication et les dimensions de documents de révisions différentes ne sont pas fusionnés."
		]
	},
	"evidence": [
		{
			"id": "october3d-airpol-pdf-024-p5",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Airpol-KPR-from-55-up-to-15-kW-up-to-10-bar.pdf#page=5",
			"sourceLabel": "Airpol, manufacturer technical documentation, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 e6e6a2c84477d5cf8df3a733514d0dc6c090c2cd08ec8a4c97c742bee3ff83e4 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-airpol-screw-p11",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Airpol-screw-compressors.pdf#page=11",
			"sourceLabel": "Airpol, screw compressor legacy brochure with ISO1217 capacity tables, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 93fb6c0baf7deedc619234c8c63575d9edfeab652447ffc07e673ddb9c7cbdd8 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-airpol-pdf-024-p10",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Airpol-KPR-from-55-up-to-15-kW-up-to-10-bar.pdf#page=10",
			"sourceLabel": "Airpol, manufacturer technical documentation, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 e6e6a2c84477d5cf8df3a733514d0dc6c090c2cd08ec8a4c97c742bee3ff83e4 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s101-p5",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Airpol-KPR-from-55-up-to-15-kW-up-to-10-bar.pdf#page=5",
			"sourceLabel": "Airpol, relecture primaire du 25 octobre 2026, s101, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 e6e6a2c84477d5cf8df3a733514d0dc6c090c2cd08ec8a4c97c742bee3ff83e4. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s101-p6",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Airpol-KPR-from-55-up-to-15-kW-up-to-10-bar.pdf#page=6",
			"sourceLabel": "Airpol, relecture primaire du 25 octobre 2026, s101, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 e6e6a2c84477d5cf8df3a733514d0dc6c090c2cd08ec8a4c97c742bee3ff83e4. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s101-p10",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Airpol-KPR-from-55-up-to-15-kW-up-to-10-bar.pdf#page=10",
			"sourceLabel": "Airpol, relecture primaire du 25 octobre 2026, s101, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 e6e6a2c84477d5cf8df3a733514d0dc6c090c2cd08ec8a4c97c742bee3ff83e4. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s102-p11",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Airpol-screw-compressors.pdf#page=11",
			"sourceLabel": "Airpol, relecture primaire du 25 octobre 2026, s102, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 93fb6c0baf7deedc619234c8c63575d9edfeab652447ffc07e673ddb9c7cbdd8. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-airpol-pdf-024-p5"
		],
		"fadCurve": [
			"october3d-airpol-pdf-024-p5",
			"october3d-airpol-screw-p11"
		],
		"tankLiters": [
			"october3d-airpol-pdf-024-p5"
		],
		"oilType": [
			"october3d-airpol-pdf-024-p10"
		],
		"powerKw": [
			"october3d-airpol-pdf-024-p5"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
