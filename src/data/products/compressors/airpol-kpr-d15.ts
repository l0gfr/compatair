const product = {
	"id": "airpol-kpr-d15",
	"slug": "airpol-kpr-d15",
	"brand": "Airpol",
	"model": "KPR D15",
	"variant": {
		"familyId": "airpol-kpr-d15",
		"label": "Groupe Airpol entraînement direct sur réservoir 500 L",
		"distinguishingAttributes": {
			"équipement": "Groupe Airpol entraînement direct sur réservoir 500 L",
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
			"litersPerMinute": 866.667
		}
	],
	"oilType": "oil",
	"powerKw": 15,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpol-kpr-d15.svg",
		"alt": "Repères techniques : Airpol KPR D15",
		"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Airpol-KPR-D15-with-direct-drive-up-to-10-bar.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe Airpol entraînement direct sur réservoir 500 L",
			"evidenceIds": [
				"october3d-airpol-pdf-022-p3"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "10 bar relatifs",
			"evidenceIds": [
				"october3d-airpol-pdf-022-p3"
			]
		},
		{
			"label": "Air livré à 10 bar",
			"value": "866,667 L/min",
			"evidenceIds": [
				"october3d-airpol-pdf-022-p3",
				"october3d-airpol-screw-p11"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "500 L",
			"evidenceIds": [
				"october3d-airpol-pdf-022-p3"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "400/3/50",
			"evidenceIds": [
				"october3d-airpol-pdf-022-p3"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-airpol-pdf-022-p3"
			]
		}
	],
	"editorial": {
		"overview": "Airpol KPR D15. 866,667 L/min à 10 bar. Groupe Airpol entraînement direct sur réservoir 500 L.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 500 L.",
			"Pression maximale de fonctionnement publiée : 10 bar."
		],
		"limitations": [
			"Conditions de référence FAD non précisées dans la fiche ; aucun AnnexC ni température/humidité ajouté.",
			"Une seule configuration par modèle est retenue ; aucune fusion de pressions de fabrication différentes.",
			"Débit minimal déclaré à 10 bar retenu : 866,667 L/min. La plage min-max publiée 52 - 120 m³/h ne constitue pas un débit garanti en permanence au maximum.",
			"Cycle de service non établi ; la tenue permanente reste indéterminée.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Installation et disponibilité en France à confirmer selon l’alimentation et le raccordement publiés."
		]
	},
	"evidence": [
		{
			"id": "october3d-airpol-pdf-022-p3",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Airpol-KPR-D15-with-direct-drive-up-to-10-bar.pdf#page=3",
			"sourceLabel": "Airpol, manufacturer technical documentation, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 91bbfead6512c31f3289785265825337877a9d7659ba7209de2c17a58fd26844 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
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
			"id": "october3d-airpol-pdf-022-p7",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Airpol-KPR-D15-with-direct-drive-up-to-10-bar.pdf#page=7",
			"sourceLabel": "Airpol, manufacturer technical documentation, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 91bbfead6512c31f3289785265825337877a9d7659ba7209de2c17a58fd26844 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-airpol-pdf-022-p3"
		],
		"fadCurve": [
			"october3d-airpol-pdf-022-p3",
			"october3d-airpol-screw-p11"
		],
		"tankLiters": [
			"october3d-airpol-pdf-022-p3"
		],
		"oilType": [
			"october3d-airpol-pdf-022-p7"
		],
		"powerKw": [
			"october3d-airpol-pdf-022-p3"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
