import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ekom-dk50-2v",
	"slug": "ekom-dk50-2v",
	"brand": "EKOM",
	"model": "DK50 2V",
	"variant": {
		"familyId": "ekom-dk50-2v",
		"label": "Groupe avec cuve",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve",
			"pressionMaximale": "8 bar",
			"cuve": "25 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 25,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 6,
			"litersPerMinute": 135
		}
	],
	"dutyCycle": 1,
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ekom-dk50-2v.svg",
		"alt": "Repères techniques : EKOM DK50 2V",
		"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_PLUS__2V-A-20_04-2026-MD.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve",
			"evidenceIds": [
				"october3d-ekom-manual-04-p18"
			]
		},
		{
			"label": "Plafond de la plage de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-ekom-manual-04-p18"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "135 L/min",
			"evidenceIds": [
				"october3d-ekom-manual-04-p18",
				"october3d-ekom-manual-04-p20"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "25 L",
			"evidenceIds": [
				"october3d-ekom-manual-04-p18"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "S1-100",
			"evidenceIds": [
				"october3d-ekom-manual-04-p18"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "230, 50 230,60 3x400, 115,60 50",
			"evidenceIds": [
				"october3d-ekom-manual-04-p18"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-ekom-manual-04-p18"
			]
		}
	],
	"editorial": {
		"overview": "EKOM DK50 2V. 135 L/min à 6 bar. Groupe avec cuve.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 25 L.",
			"Plafond conservateur de la plage de fonctionnement : 8 bar."
		],
		"limitations": [
			"Plafond conservateur de la plage de fonctionnement publiée ; la pression de soupape est distincte.",
			"Configuration 50 Hz retenue. Aucun transfert des performances de la variante 60 Hz.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Installation et disponibilité en France à confirmer selon l’alimentation et le raccordement publiés."
		]
	},
	"evidence": [
		{
			"id": "october3d-ekom-manual-04-p18",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_PLUS__2V-A-20_04-2026-MD.pdf#page=18",
			"sourceLabel": "EKOM, notice ekom-manual-04, page PDF 18",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 743ecd9aa451f8076a5839ef44eef21f9eb81675a00c5f4d66deba73249d8a87 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-ekom-manual-04-p20",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_PLUS__2V-A-20_04-2026-MD.pdf#page=20",
			"sourceLabel": "EKOM, notice ekom-manual-04, page PDF 20",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 743ecd9aa451f8076a5839ef44eef21f9eb81675a00c5f4d66deba73249d8a87 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-ekom-manual-04-p7",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_PLUS__2V-A-20_04-2026-MD.pdf#page=7",
			"sourceLabel": "EKOM, notice ekom-manual-04, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 743ecd9aa451f8076a5839ef44eef21f9eb81675a00c5f4d66deba73249d8a87 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-ekom-manual-04-p18"
		],
		"tankLiters": [
			"october3d-ekom-manual-04-p18"
		],
		"fadCurve": [
			"october3d-ekom-manual-04-p18",
			"october3d-ekom-manual-04-p20"
		],
		"oilType": [
			"october3d-ekom-manual-04-p7"
		],
		"dutyCycle": [
			"october3d-ekom-manual-04-p18"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
