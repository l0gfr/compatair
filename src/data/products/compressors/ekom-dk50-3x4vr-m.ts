const product = {
	"id": "ekom-dk50-3x4vr-m",
	"slug": "ekom-dk50-3x4vr-m",
	"brand": "EKOM",
	"model": "DK50 3x4VR/M",
	"variant": {
		"familyId": "ekom-dk50-3x4vr-m",
		"label": "Groupe avec cuve et sécheur",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve et sécheur",
			"pressionMaximale": "8 bar",
			"cuve": "290 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 290,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 6,
			"litersPerMinute": 680
		}
	],
	"dutyCycle": 1,
	"oilType": "unknown",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ekom-dk50-3x4vr-m.svg",
		"alt": "Repères techniques : EKOM DK50 3x4VR/M",
		"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_3x4VR_M-AD-A-EN-9_11-2025.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve et sécheur",
			"evidenceIds": [
				"october3d-ekom-manual-14-p15"
			]
		},
		{
			"label": "Plafond de la plage de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-ekom-manual-14-p15"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "680 L/min",
			"evidenceIds": [
				"october3d-ekom-manual-14-p15",
				"october3d-ekom-manual-14-p21"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "290 L",
			"evidenceIds": [
				"october3d-ekom-manual-14-p15"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "S1-100",
			"evidenceIds": [
				"october3d-ekom-manual-14-p15"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "3x400, 50",
			"evidenceIds": [
				"october3d-ekom-manual-14-p15"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-ekom-manual-14-p15"
			]
		}
	],
	"editorial": {
		"overview": "EKOM DK50 3x4VR/M. 680 L/min à 6 bar. Groupe avec cuve et sécheur.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 290 L.",
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
			"id": "october3d-ekom-manual-14-p15",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_3x4VR_M-AD-A-EN-9_11-2025.pdf#page=15",
			"sourceLabel": "EKOM, notice ekom-manual-14, page PDF 15",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 604be0c1f57eef2fad4285ddac4bfbee2de1beeb14f004bddfc7642fc9a84255 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-ekom-manual-14-p21",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_3x4VR_M-AD-A-EN-9_11-2025.pdf#page=21",
			"sourceLabel": "EKOM, notice ekom-manual-14, page PDF 21",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 604be0c1f57eef2fad4285ddac4bfbee2de1beeb14f004bddfc7642fc9a84255 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-ekom-manual-14-p15"
		],
		"tankLiters": [
			"october3d-ekom-manual-14-p15"
		],
		"fadCurve": [
			"october3d-ekom-manual-14-p15",
			"october3d-ekom-manual-14-p21"
		],
		"dutyCycle": [
			"october3d-ekom-manual-14-p15"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
