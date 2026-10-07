import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ekom-dk50-b",
	"slug": "ekom-dk50-b",
	"brand": "EKOM",
	"model": "DK50 B",
	"variant": {
		"familyId": "ekom-dk50-b",
		"label": "Groupe avec cuve",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve",
			"pressionMaximale": "11,5 bar",
			"cuve": "4 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 4,
	"maxPressureBar": 11.5,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 50
		}
	],
	"dutyCycle": 0.5,
	"oilType": "oil-free",
	"powerKw": 0.55,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ekom-dk50-b.svg",
		"alt": "Repères techniques : EKOM DK50 B",
		"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_B-A-6_05-2026.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve",
			"evidenceIds": [
				"october3d-ekom-manual-19-p12"
			]
		},
		{
			"label": "Plafond de la plage de fonctionnement",
			"value": "11,5 bar relatifs",
			"evidenceIds": [
				"october3d-ekom-manual-19-p12"
			]
		},
		{
			"label": "Air livré à 10 bar",
			"value": "50 L/min",
			"evidenceIds": [
				"october3d-ekom-manual-19-p12",
				"october3d-ekom-manual-19-p12"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "4 L",
			"evidenceIds": [
				"october3d-ekom-manual-19-p12"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "Intermittent S 3-50",
			"evidenceIds": [
				"october3d-ekom-manual-19-p12"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "230, 50/60",
			"evidenceIds": [
				"october3d-ekom-manual-19-p12"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-ekom-manual-19-p12"
			]
		}
	],
	"editorial": {
		"overview": "EKOM DK50 B. 50 L/min à 10 bar. Groupe avec cuve.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 4 L.",
			"Plafond conservateur de la plage de fonctionnement : 11,5 bar."
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
			"id": "october3d-ekom-manual-19-p12",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_B-A-6_05-2026.pdf#page=12",
			"sourceLabel": "EKOM, notice ekom-manual-19, page PDF 12",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 19fdeb80b8abbeb6345faa1cd8de6b8b2523bfef96d9521c9d81e8aef2a879eb de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-ekom-manual-19-p7",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_B-A-6_05-2026.pdf#page=7",
			"sourceLabel": "EKOM, notice ekom-manual-19, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 19fdeb80b8abbeb6345faa1cd8de6b8b2523bfef96d9521c9d81e8aef2a879eb de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-ekom-manual-19-p12"
		],
		"tankLiters": [
			"october3d-ekom-manual-19-p12"
		],
		"fadCurve": [
			"october3d-ekom-manual-19-p12",
			"october3d-ekom-manual-19-p12"
		],
		"oilType": [
			"october3d-ekom-manual-19-p7"
		],
		"dutyCycle": [
			"october3d-ekom-manual-19-p12"
		],
		"powerKw": [
			"october3d-ekom-manual-19-p12"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
