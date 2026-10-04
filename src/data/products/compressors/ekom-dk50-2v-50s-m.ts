const product = {
	"id": "ekom-dk50-2v-50s-m",
	"slug": "ekom-dk50-2v-50s-m",
	"brand": "EKOM",
	"model": "DK50 2V/50S/M",
	"variant": {
		"familyId": "ekom-dk50-2v-50s-m",
		"label": "Groupe avec cuve et sécheur et armoire acoustique",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve et sécheur et armoire acoustique",
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
			"litersPerMinute": 104
		}
	],
	"dutyCycle": 1,
	"oilType": "oil-free",
	"powerKw": 1.2,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ekom-dk50-2v-50s-m.svg",
		"alt": "Repères techniques : EKOM DK50 2V/50S/M",
		"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_2V_50__2x2V_110-A-21_06-2026-MD.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve et sécheur et armoire acoustique",
			"evidenceIds": [
				"october3d-ekom-manual-08-p18"
			]
		},
		{
			"label": "Plafond de la plage de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-ekom-manual-08-p18"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "104 L/min",
			"evidenceIds": [
				"october3d-ekom-manual-08-p18",
				"october3d-ekom-manual-08-p23"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "50 L",
			"evidenceIds": [
				"october3d-ekom-manual-08-p18"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "S1-100",
			"evidenceIds": [
				"october3d-ekom-manual-08-p18"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "230,50 230,60",
			"evidenceIds": [
				"october3d-ekom-manual-08-p18"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-ekom-manual-08-p18"
			]
		}
	],
	"editorial": {
		"overview": "EKOM DK50 2V/50S/M. 104 L/min à 6 bar. Groupe avec cuve et sécheur et armoire acoustique.",
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
			"id": "october3d-ekom-manual-08-p18",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_2V_50__2x2V_110-A-21_06-2026-MD.pdf#page=18",
			"sourceLabel": "EKOM, notice ekom-manual-08, page PDF 18",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 b732c4bd37b883479e473ebc1bbd69a11f666147cc0b5691360cd381385f442b de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-ekom-manual-08-p23",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_2V_50__2x2V_110-A-21_06-2026-MD.pdf#page=23",
			"sourceLabel": "EKOM, notice ekom-manual-08, page PDF 23",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 b732c4bd37b883479e473ebc1bbd69a11f666147cc0b5691360cd381385f442b de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-ekom-manual-08-p7",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_2V_50__2x2V_110-A-21_06-2026-MD.pdf#page=7",
			"sourceLabel": "EKOM, notice ekom-manual-08, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 b732c4bd37b883479e473ebc1bbd69a11f666147cc0b5691360cd381385f442b de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-ekom-manual-08-p18"
		],
		"tankLiters": [
			"october3d-ekom-manual-08-p18"
		],
		"fadCurve": [
			"october3d-ekom-manual-08-p18",
			"october3d-ekom-manual-08-p23"
		],
		"oilType": [
			"october3d-ekom-manual-08-p7"
		],
		"dutyCycle": [
			"october3d-ekom-manual-08-p18"
		],
		"powerKw": [
			"october3d-ekom-manual-08-p18"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
