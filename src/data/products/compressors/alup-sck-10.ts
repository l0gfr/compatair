const product = {
	"id": "alup-sck-10",
	"slug": "alup-sck-10",
	"brand": "ALUP",
	"model": "SCK 10",
	"variant": {
		"familyId": "alup-sck-10",
		"label": "Groupe sur socle sans réservoir de stockage intégré",
		"distinguishingAttributes": {
			"équipement": "Groupe sur socle sans réservoir de stockage intégré",
			"pressionMaximale": "10 bar",
			"cuve": "0 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 9.5,
			"litersPerMinute": 1150
		}
	],
	"oilType": "oil",
	"powerKw": 7.5,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/alup-sck-10.svg",
		"alt": "Repères techniques : ALUP SCK 10",
		"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/sck-8-19-(2022)/leaflets/Alup-SCK-8-19-brochure-EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur socle sans réservoir de stockage intégré",
			"evidenceIds": [
				"october3d-alup-pdf-03-p6"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "10 bar relatifs",
			"evidenceIds": [
				"october3d-alup-pdf-03-p6"
			]
		},
		{
			"label": "Air livré à 9,5 bar",
			"value": "1 150 L/min",
			"evidenceIds": [
				"october3d-alup-pdf-03-p6"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "0 L",
			"evidenceIds": [
				"october3d-alup-pdf-03-p6"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "50 Hz ; tension et phases non précisées",
			"evidenceIds": [
				"october3d-alup-pdf-03-p6"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-alup-pdf-03-p6"
			]
		}
	],
	"editorial": {
		"overview": "ALUP SCK 10. 1 150 L/min à 9,5 bar. Groupe sur socle sans réservoir de stockage intégré.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Pression maximale de fonctionnement publiée : 10 bar."
		],
		"limitations": [
			"La pression FAD et le maximum de la version sont conservés séparément.",
			"Version sur socle retenue ; réservoir externe exclu.",
			"Cycle de service non établi ; la tenue permanente reste indéterminée.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Installation et disponibilité en France à confirmer selon l’alimentation et le raccordement publiés."
		]
	},
	"evidence": [
		{
			"id": "october3d-alup-pdf-03-p6",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/sck-8-19-(2022)/leaflets/Alup-SCK-8-19-brochure-EN.pdf#page=6",
			"sourceLabel": "ALUP, documentation constructeur, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 00b3e31578cb50293209d5365568d2c02ec03f1268ef650fc63b270c3bea4871 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-alup-pdf-03-p1",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/sck-8-19-(2022)/leaflets/Alup-SCK-8-19-brochure-EN.pdf#page=1",
			"sourceLabel": "ALUP, documentation constructeur, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 00b3e31578cb50293209d5365568d2c02ec03f1268ef650fc63b270c3bea4871 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3d-alup-pdf-03-p6"
		],
		"oilType": [
			"october3d-alup-pdf-03-p1"
		],
		"maxPressureBar": [
			"october3d-alup-pdf-03-p6"
		],
		"fadCurve": [
			"october3d-alup-pdf-03-p6"
		],
		"powerKw": [
			"october3d-alup-pdf-03-p6"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
