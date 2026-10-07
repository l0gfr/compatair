import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ekom-dk50-9x4vrts-m",
	"slug": "ekom-dk50-9x4vrts-m",
	"brand": "EKOM",
	"model": "DK50 9x4VRTS/M",
	"variant": {
		"familyId": "ekom-dk50-9x4vrts-m",
		"label": "Groupe avec cuve et sécheur et armoire acoustique",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve et sécheur et armoire acoustique",
			"pressionMaximale": "8 bar",
			"cuve": "500 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 500,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 6,
			"litersPerMinute": 2050
		}
	],
	"dutyCycle": 1,
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ekom-dk50-9x4vrts-m.svg",
		"alt": "Repères techniques : EKOM DK50 9x4VRTS/M",
		"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50-9x4VRTM-AD-A-EN-10_11-2025.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve et sécheur et armoire acoustique",
			"evidenceIds": [
				"october3d-ekom-manual-18-p14"
			]
		},
		{
			"label": "Plafond de la plage de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-ekom-manual-18-p14"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "2 050 L/min",
			"evidenceIds": [
				"october3d-ekom-manual-18-p14",
				"october3d-ekom-manual-18-p17"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "500 L",
			"evidenceIds": [
				"october3d-ekom-manual-18-p14"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "S1-100",
			"evidenceIds": [
				"october3d-ekom-manual-18-p14"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "3x400, 50",
			"evidenceIds": [
				"october3d-ekom-manual-18-p14"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-ekom-manual-18-p14"
			]
		}
	],
	"editorial": {
		"overview": "EKOM DK50 9x4VRTS/M. 2 050 L/min à 6 bar. Groupe avec cuve et sécheur et armoire acoustique.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 500 L.",
			"Plafond conservateur de la plage de fonctionnement : 8 bar."
		],
		"limitations": [
			"Plafond conservateur de la plage de fonctionnement publiée ; la pression de soupape est distincte.",
			"Configuration 50 Hz retenue. Aucun transfert des performances de la variante 60 Hz.",
			"Point FAD pour séchage à PDP -20 °C ; les débits à PDP -40 °C restent distincts.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Installation et disponibilité en France à confirmer selon l’alimentation et le raccordement publiés."
		]
	},
	"evidence": [
		{
			"id": "october3d-ekom-manual-18-p14",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50-9x4VRTM-AD-A-EN-10_11-2025.pdf#page=14",
			"sourceLabel": "EKOM, notice ekom-manual-18, page PDF 14",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 b18a5f09b4160364a8979a0e7f1acfeb3b9b1426ea04ae35848f06f858fc4b7e de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-ekom-manual-18-p17",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50-9x4VRTM-AD-A-EN-10_11-2025.pdf#page=17",
			"sourceLabel": "EKOM, notice ekom-manual-18, page PDF 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 b18a5f09b4160364a8979a0e7f1acfeb3b9b1426ea04ae35848f06f858fc4b7e de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-ekom-manual-18-p6",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50-9x4VRTM-AD-A-EN-10_11-2025.pdf#page=6",
			"sourceLabel": "EKOM, notice ekom-manual-18, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 b18a5f09b4160364a8979a0e7f1acfeb3b9b1426ea04ae35848f06f858fc4b7e de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-ekom-manual-18-p14"
		],
		"tankLiters": [
			"october3d-ekom-manual-18-p14"
		],
		"fadCurve": [
			"october3d-ekom-manual-18-p14",
			"october3d-ekom-manual-18-p17"
		],
		"oilType": [
			"october3d-ekom-manual-18-p6"
		],
		"dutyCycle": [
			"october3d-ekom-manual-18-p14"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
