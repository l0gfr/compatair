import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "mark-msm-5-5-ivr",
	"slug": "mark-msm-5-5-ivr",
	"brand": "MARK",
	"model": "MSM 5.5 IVR",
	"variant": {
		"familyId": "mark-msm-5-5-ivr",
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
			"litersPerMinute": 756.667
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 5.5,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/mark-msm-5-5-ivr.svg",
		"alt": "Repères techniques : MARK MSM 5.5 IVR",
		"sourceUrl": "https://www.mark-compressors.com/en-int/products/screw-compressors/variable-speed/belt-driven-msm-ivr",
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
				"october3d-mark-family-12"
			]
		},
		{
			"label": "Air livré à 9,5 bar",
			"value": "756,667 L/min",
			"evidenceIds": [
				"october3d-mark-family-12"
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
				"october3d-mark-family-12"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "non précisée",
			"evidenceIds": [
				"october3d-mark-family-12"
			]
		},
		{
			"label": "Configuration",
			"value": "MSM 5.5 IVR, sur socle",
			"evidenceIds": [
				"mark-msm-5-5-ivr-reserved-20261103-1"
			]
		},
		{
			"label": "FAD à 9,5 bar",
			"value": "45,4 m³/h (756 L/min arrondis)",
			"evidenceIds": [
				"mark-msm-5-5-ivr-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "5,5 kW",
			"evidenceIds": [
				"mark-msm-5-5-ivr-reserved-20261103-1"
			]
		},
		{
			"label": "Masse sur socle",
			"value": "130 kg",
			"evidenceIds": [
				"mark-msm-5-5-ivr-reserved-20261103-1"
			]
		},
		{
			"label": "Cycle de service",
			"value": "100 %, tableau comparatif des groupes fixes et IVR",
			"evidenceIds": [
				"mark-msm-5-5-ivr-reserved-20261103-1"
			]
		},
		{
			"label": "Mesure",
			"value": "ISO 1217 annexe E",
			"evidenceIds": [
				"mark-msm-5-5-ivr-reserved-20261103-1"
			]
		}
	],
	"editorial": {
		"overview": "MARK MSM 5.5 IVR. La MSM 4 fixe donne 30,1 m³/h à 9,5 bar ; la MSM 4 IVR donne 30,2 à ce point. La MSM 5.5 IVR donne 45,4 m³/h, soit le même chiffre arrondi que la 5.5 fixe à 9,5 bar, avec un niveau sonore mesuré selon un autre régime. Le tableau compare explicitement les groupes fixes et IVR avec un cycle de 100 %.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Pression maximale de fonctionnement publiée : 10 bar.",
			"Configuration : MSM 5.5 IVR, sur socle.",
			"FAD à 9,5 bar : 45,4 m³/h (756 L/min arrondis).",
			"Puissance : 5,5 kW.",
			"Masse sur socle : 130 kg.",
			"Cycle de service : 100 %, tableau comparatif des groupes fixes et IVR.",
			"Mesure : ISO 1217 annexe E."
		],
		"limitations": [
			"La pression FAD et le maximum de la version sont conservés séparément.",
			"Version sur socle retenue ; réservoir externe exclu.",
			"Capacité catalogue nominale/maximale de la version à régulation VSD ; minimum de débit à ce point non documenté.",
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
			"id": "october3d-mark-family-12",
			"sourceUrl": "https://www.mark-compressors.com/en-int/products/screw-compressors/variable-speed/belt-driven-msm-ivr",
			"sourceLabel": "MARK, documentation constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 010b38abbe3ac7682d7bae30e9ee2b5c40a5bf0064696d487c7198c83867123e de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "mark-msm-5-5-ivr-reserved-20261103-1",
			"sourceUrl": "https://www.mark-compressors.com/content/dam/brands/Mark/products-bp-structure/oil-injected-screw-compressor/fixed-speed/msm-2-2-7/leaflets/Mark_MSM_2.2-7_MSM%202.2-7%20IVR_Sales_Leaflet_EN_Brendola_6999200582.pdf#page=7",
			"sourceLabel": "MARK : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 64d6ab7907e7a65c5c76e427626d86890e4361dbe459f470c317a15b25e3b530. La MSM 4 fixe donne 30,1 m³/h à 9,5 bar ; la MSM 4 IVR donne 30,2 à ce point. La MSM 5.5 IVR donne 45,4 m³/h, soit le même chiffre arrondi que la 5.5 fixe à 9,5 bar, avec un niveau sonore mesuré selon un autre régime. Le tableau compare explicitement les groupes fixes et IVR avec un cycle de 100 %."
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
			"october3d-mark-family-12"
		],
		"fadCurve": [
			"october3d-mark-family-12"
		],
		"powerKw": [
			"october3d-mark-family-12"
		],
		"weightKg": [
			"mark-msm-5-5-ivr-reserved-20261103-1"
		],
		"editorial": [
			"mark-msm-5-5-ivr-reserved-20261103-1"
		],
		"specifications": [
			"mark-msm-5-5-ivr-reserved-20261103-1"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	],
	"weightKg": 130
};

export default product;
