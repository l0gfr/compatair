import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "mark-msm-4",
	"slug": "mark-msm-4",
	"brand": "MARK",
	"model": "MSM 4",
	"variant": {
		"familyId": "mark-msm-4",
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
			"litersPerMinute": 501.667
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 4,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/mark-msm-4.svg",
		"alt": "Repères techniques : MARK MSM 4",
		"sourceUrl": "https://www.mark-compressors.com/en-int/products/screw-compressors/fixed-speed/belt-driven-msm",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur socle sans réservoir de stockage intégré",
			"evidenceIds": [
				"october3d-mark-pdf-new-02-p7"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "10 bar relatifs",
			"evidenceIds": [
				"october3d-mark-family-03"
			]
		},
		{
			"label": "Air livré à 9,5 bar",
			"value": "501,667 L/min",
			"evidenceIds": [
				"october3d-mark-family-03"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "0 L",
			"evidenceIds": [
				"october3d-mark-pdf-new-02-p7"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "Service continu déclaré sous les conditions constructeur",
			"evidenceIds": [
				"october3d-mark-pdf-new-02-p2"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "Alimentation non précisée dans les extraits retenus",
			"evidenceIds": [
				"october3d-mark-family-03"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "non précisée",
			"evidenceIds": [
				"october3d-mark-family-03"
			]
		}
	],
	"editorial": {
		"overview": "MARK MSM 4. 501,667 L/min à 9,5 bar. Groupe sur socle sans réservoir de stockage intégré.",
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
			"id": "october3d-mark-pdf-new-02-p7",
			"sourceUrl": "https://www.mark-compressors.com/content/dam/brands/Mark/products-bp-structure/oil-injected-screw-compressor/fixed-speed/msm-2-2-7/leaflets/Mark_MSM_2.2-7_MSM%202.2-7%20IVR_Sales_Leaflet_EN_Brendola_6999200582.pdf#page=7",
			"sourceLabel": "MARK, documentation constructeur, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 64d6ab7907e7a65c5c76e427626d86890e4361dbe459f470c317a15b25e3b530 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-mark-pdf-new-02-p1",
			"sourceUrl": "https://www.mark-compressors.com/content/dam/brands/Mark/products-bp-structure/oil-injected-screw-compressor/fixed-speed/msm-2-2-7/leaflets/Mark_MSM_2.2-7_MSM%202.2-7%20IVR_Sales_Leaflet_EN_Brendola_6999200582.pdf#page=1",
			"sourceLabel": "MARK, documentation constructeur, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 64d6ab7907e7a65c5c76e427626d86890e4361dbe459f470c317a15b25e3b530 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-mark-pdf-new-02-p2",
			"sourceUrl": "https://www.mark-compressors.com/content/dam/brands/Mark/products-bp-structure/oil-injected-screw-compressor/fixed-speed/msm-2-2-7/leaflets/Mark_MSM_2.2-7_MSM%202.2-7%20IVR_Sales_Leaflet_EN_Brendola_6999200582.pdf#page=2",
			"sourceLabel": "MARK, documentation constructeur, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 64d6ab7907e7a65c5c76e427626d86890e4361dbe459f470c317a15b25e3b530 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-mark-family-03",
			"sourceUrl": "https://www.mark-compressors.com/en-int/products/screw-compressors/fixed-speed/belt-driven-msm",
			"sourceLabel": "MARK, documentation constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 28c022685dd878e93695b877a9a23fda56d17a95ae53e8a61903355e2e4d03cf de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3d-mark-pdf-new-02-p7"
		],
		"oilType": [
			"october3d-mark-pdf-new-02-p1"
		],
		"dutyCycle": [
			"october3d-mark-pdf-new-02-p2"
		],
		"maxPressureBar": [
			"october3d-mark-family-03"
		],
		"fadCurve": [
			"october3d-mark-family-03"
		],
		"powerKw": [
			"october3d-mark-family-03"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
