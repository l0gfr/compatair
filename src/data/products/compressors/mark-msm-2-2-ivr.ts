import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "mark-msm-2-2-ivr",
	"slug": "mark-msm-2-2-ivr",
	"brand": "MARK",
	"model": "MSM 2.2 IVR",
	"variant": {
		"familyId": "mark-msm-2-2-ivr",
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
			"litersPerMinute": 293.333
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 2.2,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/mark-msm-2-2-ivr.svg",
		"alt": "Repères techniques : MARK MSM 2.2 IVR",
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
			"value": "293,333 L/min",
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
		}
	],
	"editorial": {
		"overview": "MSM 2.2 IVR sur socle : groupe lubrifié à vitesse variable de 2,2 kW, sans cuve. Le tableau publie 17,6 m³/h à 9,5 bar, soit 293,333 L/min. Le MSM 2.2 à vitesse fixe publie 16,9 m³/h à la même pression, avec le même moteur.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Pression maximale de fonctionnement publiée : 10 bar."
		],
		"limitations": [
			"La ligne IVR imprime aussi 293 L/min ; la conversion retenue part de 17,6 m³/h. Le minimum de modulation à ce point reste inconnu.",
			"Le socle IVR mesure 620 × 630 × 975 mm ; le modèle fixe, 620 × 630 × 950 mm. Les deux indiquent 110 kg ; réservoir et sécheur intégrés sont d’autres montages.",
			"Le tableau PDF de la version IVR cite ISO 1217 annexe E. La brochure décrit un usage continu pour la série MSM, avec ses conditions d’installation et d’entretien.",
			"Le résumé de la page web annonce 8 bar, alors que son tableau et le PDF comportent une ligne 10 bar. La ligne 10 bar est retenue ; tension, fréquence et configuration livrée restent à confirmer sur le devis."
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
			"october3d-mark-pdf-new-02-p7"
		],
		"fadCurve": [
			"october3d-mark-pdf-new-02-p7"
		],
		"powerKw": [
			"october3d-mark-pdf-new-02-p7"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
