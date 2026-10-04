const product = {
	"id": "airpol-ktpr-15",
	"slug": "airpol-ktpr-15",
	"brand": "Airpol",
	"model": "KTPR 15",
	"variant": {
		"familyId": "airpol-ktpr-15",
		"label": "Groupe Airpol sur réservoir 500 L avec sécheur et filtres",
		"distinguishingAttributes": {
			"équipement": "Groupe Airpol sur réservoir 500 L avec sécheur et filtres",
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
		"src": "/images/products/airpol-ktpr-15.svg",
		"alt": "Repères techniques : Airpol KTPR 15",
		"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Airpol-KTPR-from-55-kW-up-to-15-kW-up-to-10-bar.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe Airpol sur réservoir 500 L avec sécheur et filtres",
			"evidenceIds": [
				"october3d-airpol-pdf-027-p6"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "10 bar relatifs",
			"evidenceIds": [
				"october3d-airpol-pdf-027-p6"
			]
		},
		{
			"label": "Air livré à 10 bar",
			"value": "866,667 L/min",
			"evidenceIds": [
				"october3d-airpol-pdf-027-p6",
				"october3d-airpol-screw-p13"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "500 L",
			"evidenceIds": [
				"october3d-airpol-pdf-027-p6"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "400/3/50",
			"evidenceIds": [
				"october3d-airpol-pdf-027-p6"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-airpol-pdf-027-p6"
			]
		}
	],
	"editorial": {
		"overview": "Airpol KTPR 15. 866,667 L/min à 10 bar. Groupe Airpol sur réservoir 500 L avec sécheur et filtres.",
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
			"id": "october3d-airpol-pdf-027-p6",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Airpol-KTPR-from-55-kW-up-to-15-kW-up-to-10-bar.pdf#page=6",
			"sourceLabel": "Airpol, manufacturer technical documentation, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 0f1b8b561932c75ca40dfcf5840760ebcceda6e597e8e4dfbe561111583fb6ec de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-airpol-screw-p13",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Airpol-screw-compressors.pdf#page=13",
			"sourceLabel": "Airpol, screw compressor legacy brochure with ISO1217 capacity tables, page PDF 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 93fb6c0baf7deedc619234c8c63575d9edfeab652447ffc07e673ddb9c7cbdd8 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-airpol-pdf-027-p11",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Airpol-KTPR-from-55-kW-up-to-15-kW-up-to-10-bar.pdf#page=11",
			"sourceLabel": "Airpol, manufacturer technical documentation, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 0f1b8b561932c75ca40dfcf5840760ebcceda6e597e8e4dfbe561111583fb6ec de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-airpol-pdf-027-p6"
		],
		"fadCurve": [
			"october3d-airpol-pdf-027-p6",
			"october3d-airpol-screw-p13"
		],
		"tankLiters": [
			"october3d-airpol-pdf-027-p6"
		],
		"oilType": [
			"october3d-airpol-pdf-027-p11"
		],
		"powerKw": [
			"october3d-airpol-pdf-027-p6"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
