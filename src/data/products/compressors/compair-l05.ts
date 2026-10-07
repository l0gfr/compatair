import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "compair-l05",
	"slug": "compair-l05",
	"brand": "CompAir",
	"model": "L05",
	"variant": {
		"familyId": "compair-l05",
		"label": "Base Mounted, récepteur de stockage externe",
		"distinguishingAttributes": {
			"équipement": "Base Mounted, récepteur de stockage externe",
			"pressionMaximale": "10 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 660
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 5.5,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/compair-l05.svg",
		"alt": "Repères techniques : CompAir L05",
		"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt4de4c15d9cae3158/67ef94983c65956262e569b5/62477_19_11_24_24341_COMPAIR_L02_L06_BROCHURE_6PP_FOLDOUT_EN_WORK.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Base Mounted, récepteur de stockage externe",
			"evidenceIds": [
				"october3d-compair-l02-06-p5"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "10 bar relatifs",
			"evidenceIds": [
				"october3d-compair-l02-06-p5"
			]
		},
		{
			"label": "Air livré à 10 bar",
			"value": "660 L/min",
			"evidenceIds": [
				"october3d-compair-l02-06-p5"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "0 L",
			"evidenceIds": [
				"october3d-compair-l02-06-p5"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "Service continu déclaré sous les conditions constructeur",
			"evidenceIds": [
				"october3d-compair-l02-06-p2"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "Alimentation non précisée dans la ligne retenue",
			"evidenceIds": [
				"october3d-compair-l02-06-p5"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "non précisée",
			"evidenceIds": [
				"october3d-compair-l02-06-p5"
			]
		}
	],
	"editorial": {
		"overview": "CompAir L05. 660 L/min à 10 bar. Base Mounted, récepteur de stockage externe.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Pression maximale de fonctionnement publiée : 10 bar."
		],
		"limitations": [
			"La ligne constructeur exacte est retenue ; aucune transposition de fréquence ni cuve optionnelle ajoutée.",
			"Fréquence non publiée dans la fiche retenue ; aucune transposition des performances à 50 Hz.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Installation et disponibilité en France à confirmer selon l’alimentation et le raccordement publiés."
		]
	},
	"evidence": [
		{
			"id": "october3d-compair-l02-06-p5",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt4de4c15d9cae3158/67ef94983c65956262e569b5/62477_19_11_24_24341_COMPAIR_L02_L06_BROCHURE_6PP_FOLDOUT_EN_WORK.pdf#page=5",
			"sourceLabel": "CompAir, L02–L06 manufacturer brochure, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 7bd4a4c117dbdadc549cf0aec74cdb900a559ae3f5a737851015eb8261ac4b94 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-compair-l02-06-p2",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt4de4c15d9cae3158/67ef94983c65956262e569b5/62477_19_11_24_24341_COMPAIR_L02_L06_BROCHURE_6PP_FOLDOUT_EN_WORK.pdf#page=2",
			"sourceLabel": "CompAir, L02–L06 manufacturer brochure, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 7bd4a4c117dbdadc549cf0aec74cdb900a559ae3f5a737851015eb8261ac4b94 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-compair-l02-06-p5"
		],
		"tankLiters": [
			"october3d-compair-l02-06-p5"
		],
		"fadCurve": [
			"october3d-compair-l02-06-p5"
		],
		"powerKw": [
			"october3d-compair-l02-06-p5"
		],
		"oilType": [
			"october3d-compair-l02-06-p2"
		],
		"dutyCycle": [
			"october3d-compair-l02-06-p2"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
