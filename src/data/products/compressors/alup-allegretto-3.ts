const product = {
	"id": "alup-allegretto-3",
	"slug": "alup-allegretto-3",
	"brand": "ALUP",
	"model": "Allegretto 3",
	"variant": {
		"familyId": "alup-allegretto-3",
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
			"litersPerMinute": 360
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 3,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/alup-allegretto-3.svg",
		"alt": "Repères techniques : ALUP Allegretto 3",
		"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/Product%20Portfolio/Screw%20Compressors/allegretto-2023/leaflet/Alup-Allegretto%202-7%20Sonetto%203-9-Sales%20leaflet-6999640532-EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur socle sans réservoir de stockage intégré",
			"evidenceIds": [
				"october3d-alup-pdf-02-p7"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "10 bar relatifs",
			"evidenceIds": [
				"october3d-alup-pdf-02-p7"
			]
		},
		{
			"label": "Air livré à 9,5 bar",
			"value": "360 L/min",
			"evidenceIds": [
				"october3d-alup-pdf-02-p7"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "0 L",
			"evidenceIds": [
				"october3d-alup-pdf-02-p7"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "Service continu déclaré sous les conditions constructeur",
			"evidenceIds": [
				"october3d-alup-pdf-02-p2"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "Alimentation non précisée dans les extraits retenus",
			"evidenceIds": [
				"october3d-alup-pdf-02-p7"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "non précisée",
			"evidenceIds": [
				"october3d-alup-pdf-02-p7"
			]
		}
	],
	"editorial": {
		"overview": "ALUP Allegretto 3. 360 L/min à 9,5 bar. Groupe sur socle sans réservoir de stockage intégré.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Pression maximale de fonctionnement publiée : 10 bar."
		],
		"limitations": [
			"La pression FAD et le maximum de la version sont conservés séparément.",
			"Version sur socle retenue ; réservoir externe exclu.",
			"Fréquence non publiée dans la fiche retenue ; aucune transposition des performances à 50 Hz.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Installation et disponibilité en France à confirmer selon l’alimentation et le raccordement publiés."
		]
	},
	"evidence": [
		{
			"id": "october3d-alup-pdf-02-p7",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/Product%20Portfolio/Screw%20Compressors/allegretto-2023/leaflet/Alup-Allegretto%202-7%20Sonetto%203-9-Sales%20leaflet-6999640532-EN.pdf#page=7",
			"sourceLabel": "ALUP, documentation constructeur, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 f1bacd0d7a6c5e66d6a8137febef22fe654b4ed1679b2c90f1492999931a453b de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-alup-pdf-02-p1",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/Product%20Portfolio/Screw%20Compressors/allegretto-2023/leaflet/Alup-Allegretto%202-7%20Sonetto%203-9-Sales%20leaflet-6999640532-EN.pdf#page=1",
			"sourceLabel": "ALUP, documentation constructeur, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 f1bacd0d7a6c5e66d6a8137febef22fe654b4ed1679b2c90f1492999931a453b de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-alup-pdf-02-p2",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/Product%20Portfolio/Screw%20Compressors/allegretto-2023/leaflet/Alup-Allegretto%202-7%20Sonetto%203-9-Sales%20leaflet-6999640532-EN.pdf#page=2",
			"sourceLabel": "ALUP, documentation constructeur, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 f1bacd0d7a6c5e66d6a8137febef22fe654b4ed1679b2c90f1492999931a453b de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3d-alup-pdf-02-p7"
		],
		"oilType": [
			"october3d-alup-pdf-02-p1"
		],
		"dutyCycle": [
			"october3d-alup-pdf-02-p2"
		],
		"maxPressureBar": [
			"october3d-alup-pdf-02-p7"
		],
		"fadCurve": [
			"october3d-alup-pdf-02-p7"
		],
		"powerKw": [
			"october3d-alup-pdf-02-p7"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
