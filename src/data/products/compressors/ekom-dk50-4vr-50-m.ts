import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ekom-dk50-4vr-50-m",
	"slug": "ekom-dk50-4vr-50-m",
	"brand": "EKOM",
	"model": "DK50 4VR/50/M",
	"variant": {
		"familyId": "ekom-dk50-4vr-50-m",
		"label": "Groupe avec cuve et sécheur",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve et sécheur",
			"pressionMaximale": "8 bar",
			"cuve": "50 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 50,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 6,
			"litersPerMinute": 215
		}
	],
	"dutyCycle": 1,
	"oilType": "oil-free",
	"powerKw": 2.2,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ekom-dk50-4vr-50-m.svg",
		"alt": "Repères techniques : EKOM DK50 4VR/50/M",
		"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_4VR_50__DK50_2x4VR_110-A-12_06-2026-MD.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve et sécheur",
			"evidenceIds": [
				"october3d-ekom-manual-11-p19"
			]
		},
		{
			"label": "Plafond de la plage de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-ekom-manual-11-p19"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "215 L/min",
			"evidenceIds": [
				"october3d-ekom-manual-11-p19",
				"october3d-ekom-manual-11-p23"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "50 L",
			"evidenceIds": [
				"october3d-ekom-manual-11-p19"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "S1-100",
			"evidenceIds": [
				"october3d-ekom-manual-11-p19"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "3x400, 50",
			"evidenceIds": [
				"october3d-ekom-manual-11-p19"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-ekom-manual-11-p19"
			]
		}
	],
	"editorial": {
		"overview": "EKOM DK50 4VR/50/M. 215 L/min à 6 bar. Groupe avec cuve et sécheur.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 50 L.",
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
			"id": "october3d-ekom-manual-11-p19",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_4VR_50__DK50_2x4VR_110-A-12_06-2026-MD.pdf#page=19",
			"sourceLabel": "EKOM, notice ekom-manual-11, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 1c3db8d323dddcdd8063b77f60f0001b7273f52f6a7278a1d6d1668fa1279dbb de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-ekom-manual-11-p23",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_4VR_50__DK50_2x4VR_110-A-12_06-2026-MD.pdf#page=23",
			"sourceLabel": "EKOM, notice ekom-manual-11, page PDF 23",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 1c3db8d323dddcdd8063b77f60f0001b7273f52f6a7278a1d6d1668fa1279dbb de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-ekom-manual-11-p7",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_4VR_50__DK50_2x4VR_110-A-12_06-2026-MD.pdf#page=7",
			"sourceLabel": "EKOM, notice ekom-manual-11, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 1c3db8d323dddcdd8063b77f60f0001b7273f52f6a7278a1d6d1668fa1279dbb de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-ekom-manual-11-p19"
		],
		"tankLiters": [
			"october3d-ekom-manual-11-p19"
		],
		"fadCurve": [
			"october3d-ekom-manual-11-p19",
			"october3d-ekom-manual-11-p23"
		],
		"oilType": [
			"october3d-ekom-manual-11-p7"
		],
		"dutyCycle": [
			"october3d-ekom-manual-11-p19"
		],
		"powerKw": [
			"october3d-ekom-manual-11-p19"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
