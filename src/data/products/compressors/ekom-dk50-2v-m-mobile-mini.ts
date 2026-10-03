const product = {
	"id": "ekom-dk50-2v-m-mobile-mini",
	"slug": "ekom-dk50-2v-m-mobile-mini",
	"brand": "EKOM",
	"model": "DK50 2V/M MOBILE MINI",
	"mpn": "5092020A5-305",
	"variant": {
		"familyId": "ekom-dk50-2v-m-mobile-mini",
		"label": "Groupe avec cuve et sécheur",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve et sécheur",
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
			"litersPerMinute": 110
		}
	],
	"dutyCycle": 1,
	"oilType": "oil-free",
	"powerKw": 1.2,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ekom-dk50-2v-m-mobile-mini.svg",
		"alt": "Repères techniques : EKOM DK50 2V/M MOBILE MINI",
		"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_2V_MOBILE_mini_MD-7_06-2026.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve et sécheur",
			"evidenceIds": [
				"october3d-ekom-manual-10-p16"
			]
		},
		{
			"label": "Plafond de la plage de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-ekom-manual-10-p16"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "110 L/min",
			"evidenceIds": [
				"october3d-ekom-manual-10-p16",
				"october3d-ekom-manual-10-p18"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "25 L",
			"evidenceIds": [
				"october3d-ekom-manual-10-p16"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "S1-100",
			"evidenceIds": [
				"october3d-ekom-manual-10-p16"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "230, 50",
			"evidenceIds": [
				"october3d-ekom-manual-10-p16"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-ekom-manual-10-p16"
			]
		}
	],
	"editorial": {
		"overview": "EKOM DK50 2V/M MOBILE MINI. 110 L/min à 6 bar. Groupe avec cuve et sécheur.",
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
			"id": "october3d-ekom-manual-10-p16",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_2V_MOBILE_mini_MD-7_06-2026.pdf#page=16",
			"sourceLabel": "EKOM, notice ekom-manual-10, page PDF 16",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 21cae90db766b868d934f7496f7c51a6c9b3b1300280aa148a4cc95c54285a51 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-ekom-manual-10-p18",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_2V_MOBILE_mini_MD-7_06-2026.pdf#page=18",
			"sourceLabel": "EKOM, notice ekom-manual-10, page PDF 18",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 21cae90db766b868d934f7496f7c51a6c9b3b1300280aa148a4cc95c54285a51 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-ekom-manual-10-p7",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_2V_MOBILE_mini_MD-7_06-2026.pdf#page=7",
			"sourceLabel": "EKOM, notice ekom-manual-10, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 21cae90db766b868d934f7496f7c51a6c9b3b1300280aa148a4cc95c54285a51 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-ekom-manual-10-p16"
		],
		"tankLiters": [
			"october3d-ekom-manual-10-p16"
		],
		"fadCurve": [
			"october3d-ekom-manual-10-p16",
			"october3d-ekom-manual-10-p18"
		],
		"oilType": [
			"october3d-ekom-manual-10-p7"
		],
		"dutyCycle": [
			"october3d-ekom-manual-10-p16"
		],
		"powerKw": [
			"october3d-ekom-manual-10-p16"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
