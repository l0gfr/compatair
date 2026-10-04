const product = {
	"id": "alup-largo-25",
	"slug": "alup-largo-25",
	"brand": "ALUP",
	"model": "LARGO 25",
	"variant": {
		"familyId": "alup-largo-25",
		"label": "Groupe sur socle sans réservoir de stockage intégré",
		"distinguishingAttributes": {
			"équipement": "Groupe sur socle sans réservoir de stockage intégré",
			"pressionMaximale": "13 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 12.5,
			"litersPerMinute": 3266.667
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 26,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/alup-largo-25.svg",
		"alt": "Repères techniques : ALUP LARGO 25",
		"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/largo-15-25/leaflets/Alup_Largo_15-25_Evoluto_8-22_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur socle sans réservoir de stockage intégré",
			"evidenceIds": [
				"october3d-alup-pdf-extra-04-p4"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "13 bar relatifs",
			"evidenceIds": [
				"october3d-alup-pdf-extra-04-p4"
			]
		},
		{
			"label": "Air livré à 12,5 bar",
			"value": "3 266,667 L/min",
			"evidenceIds": [
				"october3d-alup-pdf-extra-04-p4"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "0 L",
			"evidenceIds": [
				"october3d-alup-pdf-extra-04-p4"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "Service continu déclaré sous les conditions constructeur",
			"evidenceIds": [
				"october3d-alup-extra-37"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "Alimentation non précisée dans les extraits retenus",
			"evidenceIds": [
				"october3d-alup-pdf-extra-04-p4"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "non précisée",
			"evidenceIds": [
				"october3d-alup-pdf-extra-04-p4"
			]
		}
	],
	"editorial": {
		"overview": "ALUP LARGO 25. 3 266,667 L/min à 12,5 bar. Groupe sur socle sans réservoir de stockage intégré.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Pression maximale de fonctionnement publiée : 13 bar."
		],
		"limitations": [
			"Points FAD supérieurs au plafond de fonctionnement excluants, y compris lorsque le tableau présente une colonne 12,5 bar pour une famille limitée à 10 bar.",
			"Version sur socle retenue ; réservoir externe exclu.",
			"Fréquence non publiée dans la fiche retenue ; aucune transposition des performances à 50 Hz.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Installation et disponibilité en France à confirmer selon l’alimentation et le raccordement publiés."
		]
	},
	"evidence": [
		{
			"id": "october3d-alup-pdf-extra-04-p4",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/largo-15-25/leaflets/Alup_Largo_15-25_Evoluto_8-22_EN.pdf#page=4",
			"sourceLabel": "ALUP, documentation constructeur, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 540244da3736cbd33c8e75661aef4d490cc81e0cec51bf7d62ce02237a7261dd de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-alup-pdf-extra-04-p1",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/largo-15-25/leaflets/Alup_Largo_15-25_Evoluto_8-22_EN.pdf#page=1",
			"sourceLabel": "ALUP, documentation constructeur, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 540244da3736cbd33c8e75661aef4d490cc81e0cec51bf7d62ce02237a7261dd de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-alup-extra-37",
			"sourceUrl": "https://www.alup.com/en-international/products/screw-compressors/fixed-speed/largo-15-25",
			"sourceLabel": "ALUP, documentation constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 edf6b8a129e23f004695d976c31af2a22c89e29b8b61aae404deb8da01f3fc12 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3d-alup-pdf-extra-04-p4"
		],
		"oilType": [
			"october3d-alup-pdf-extra-04-p1"
		],
		"dutyCycle": [
			"october3d-alup-extra-37"
		],
		"maxPressureBar": [
			"october3d-alup-pdf-extra-04-p4"
		],
		"fadCurve": [
			"october3d-alup-pdf-extra-04-p4"
		],
		"powerKw": [
			"october3d-alup-pdf-extra-04-p4"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
