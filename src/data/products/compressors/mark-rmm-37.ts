import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "mark-rmm-37",
	"slug": "mark-rmm-37",
	"brand": "MARK",
	"model": "RMM 37",
	"variant": {
		"familyId": "mark-rmm-37",
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
			"litersPerMinute": 5700
		}
	],
	"oilType": "oil",
	"powerKw": 37,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/mark-rmm-37.svg",
		"alt": "Repères techniques : MARK RMM 37",
		"sourceUrl": "https://www.mark-compressors.com/content/dam/brands/Mark/products-bp-structure/oil-injected-screw-compressor/fixed-speed/rmm-30-45/leaflets/Mark_RMM_30-45_(IVR)_Sales_Leaflet_EN_Brendola_6999200530.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur socle sans réservoir de stockage intégré",
			"evidenceIds": [
				"october3d-mark-pdf-new-11-p4"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "10 bar relatifs",
			"evidenceIds": [
				"october3d-mark-pdf-new-11-p5"
			]
		},
		{
			"label": "Air livré à 9,5 bar",
			"value": "5 700 L/min",
			"evidenceIds": [
				"october3d-mark-pdf-new-11-p5"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "0 L",
			"evidenceIds": [
				"october3d-mark-pdf-new-11-p4"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "400 V 50Hz - IEC - CE",
			"evidenceIds": [
				"october3d-mark-pdf-new-11-p5"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-mark-pdf-new-11-p5"
			]
		}
	],
	"editorial": {
		"overview": "MARK RMM 37. 5 700 L/min à 9,5 bar. Groupe sur socle sans réservoir de stockage intégré.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Pression maximale de fonctionnement publiée : 10 bar."
		],
		"limitations": [
			"Un seul modèle/configuration retenu ; aucune multiplication des pressions ou réservoirs.",
			"Cycle de service non établi ; la tenue permanente reste indéterminée.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Installation et disponibilité en France à confirmer selon l’alimentation et le raccordement publiés."
		]
	},
	"evidence": [
		{
			"id": "october3d-mark-pdf-new-11-p4",
			"sourceUrl": "https://www.mark-compressors.com/content/dam/brands/Mark/products-bp-structure/oil-injected-screw-compressor/fixed-speed/rmm-30-45/leaflets/Mark_RMM_30-45_(IVR)_Sales_Leaflet_EN_Brendola_6999200530.pdf#page=4",
			"sourceLabel": "MARK, RMM30–45 fixed/IVR manufacturer brochure, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 b1414dbfba0d678fa9c758cb065adad7051b673c799343dddd2a485b97ddb43e de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-mark-pdf-new-11-p5",
			"sourceUrl": "https://www.mark-compressors.com/content/dam/brands/Mark/products-bp-structure/oil-injected-screw-compressor/fixed-speed/rmm-30-45/leaflets/Mark_RMM_30-45_(IVR)_Sales_Leaflet_EN_Brendola_6999200530.pdf#page=5",
			"sourceLabel": "MARK, RMM30–45 fixed/IVR manufacturer brochure, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 b1414dbfba0d678fa9c758cb065adad7051b673c799343dddd2a485b97ddb43e de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3d-mark-pdf-new-11-p4"
		],
		"oilType": [
			"october3d-mark-pdf-new-11-p4"
		],
		"maxPressureBar": [
			"october3d-mark-pdf-new-11-p5"
		],
		"fadCurve": [
			"october3d-mark-pdf-new-11-p5"
		],
		"powerKw": [
			"october3d-mark-pdf-new-11-p5"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
