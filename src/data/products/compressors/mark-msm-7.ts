import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "mark-msm-7",
	"slug": "mark-msm-7",
	"brand": "MARK",
	"model": "MSM 7",
	"variant": {
		"familyId": "mark-msm-7",
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
			"litersPerMinute": 961
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 7.5,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/mark-msm-7-technical-20261116-reviews.svg",
		"alt": "Repères techniques : MARK MSM 7",
		"sourceUrl": "https://www.mark-compressors.com/content/dam/brands/Mark/products-bp-structure/oil-injected-screw-compressor/fixed-speed/msm-2-2-7/leaflets/Mark_MSM_2.2-7_MSM%202.2-7%20IVR_Sales_Leaflet_EN_Brendola_6999200582.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
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
			"value": "961,667 L/min",
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
		},
		{
			"label": "FAD à9,5 bar, unités publiées",
			"value": "57,7 m³/h ; 961 L/min dans la colonne alternative",
			"evidenceIds": [
				"review:2026-11-16-reviews:mark-msm-7:0"
			]
		},
		{
			"label": "Mesure",
			"value": "Fixe : ISO1217 annexe C ; IVR : annexe E",
			"evidenceIds": [
				"review:2026-11-16-reviews:mark-msm-7:0"
			]
		},
		{
			"label": "Encombrement sur socle",
			"value": "620 × 695 × 950 mm ; largeur630 mm + supplément65 mm pour10 hp",
			"evidenceIds": [
				"review:2026-11-16-reviews:mark-msm-7:0"
			]
		}
	],
	"editorial": {
		"overview": "La MSM 7 fixe sur socle publie 961 L/min à 9,5 bar pour 7,5 kW ; la colonne en m³/h arrondit ce point à 57,7. La MSM 4 atteint 502 L/min au même point avec 4 kW. La brochure distingue les montages sur socle et sur réservoir et annonce explicitement un cycle de 100 % pour les groupes MSM fixes et IVR. Le bruit de l’IVR est mesuré à 70 % de charge, avec une condition différente de la version fixe.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Pression maximale de fonctionnement publiée : 10 bar.",
			"FAD à9,5 bar, unités publiées : 57,7 m³/h ; 961 L/min dans la colonne alternative.",
			"Mesure : Fixe : ISO1217 annexe C ; IVR : annexe E.",
			"Encombrement sur socle : 620 × 695 × 950 mm ; largeur630 mm + supplément65 mm pour10 hp."
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
		},
		{
			"id": "review:2026-11-16-reviews:mark-msm-7:0",
			"sourceUrl": "https://www.mark-compressors.com/content/dam/brands/Mark/products-bp-structure/oil-injected-screw-compressor/fixed-speed/msm-2-2-7/leaflets/Mark_MSM_2.2-7_MSM%202.2-7%20IVR_Sales_Leaflet_EN_Brendola_6999200582.pdf",
			"sourceLabel": "MARK, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La MSM 7 fixe sur socle publie 961 L/min à 9,5 bar pour 7,5 kW ; la colonne en m³/h arrondit ce point à 57,7. La MSM 4 atteint 502 L/min au même point avec 4 kW. La brochure distingue les montages sur socle et sur réservoir et annonce explicitement un cycle de 100 % pour les groupes MSM fixes et IVR. Le bruit de l’IVR est mesuré à 70 % de charge, avec une condition différente de la version fixe. GET complet SHA-256 64d6ab7907e7a65c5c76e427626d86890e4361dbe459f470c317a15b25e3b530. Pages PDF lues : 2, 6, 7."
		},
		{
			"id": "review:2026-11-16-reviews:mark-msm-7:1",
			"sourceUrl": "https://www.mark-compressors.com/en-int/products/screw-compressors/fixed-speed/belt-driven-msm",
			"sourceLabel": "MARK, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La MSM 7 fixe sur socle publie 961 L/min à 9,5 bar pour 7,5 kW ; la colonne en m³/h arrondit ce point à 57,7. La MSM 4 atteint 502 L/min au même point avec 4 kW. La brochure distingue les montages sur socle et sur réservoir et annonce explicitement un cycle de 100 % pour les groupes MSM fixes et IVR. Le bruit de l’IVR est mesuré à 70 % de charge, avec une condition différente de la version fixe. GET complet SHA-256 357cf7f61cda71b4577f3f6674b7239760636d955bce3cd2e1fad21517034ec2. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
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
			"review:2026-11-16-reviews:mark-msm-7:0"
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
