import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ekom-dk50-2v-50",
	"slug": "ekom-dk50-2v-50",
	"brand": "EKOM",
	"model": "DK50 2V/50",
	"variant": {
		"familyId": "ekom-dk50-2v-50",
		"label": "Groupe avec cuve",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve",
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
			"litersPerMinute": 135
		}
	],
	"dutyCycle": 1,
	"oilType": "oil-free",
	"powerKw": 1.2,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ekom-dk50-2v-50.svg",
		"alt": "Repères techniques : EKOM DK50 2V/50",
		"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_2V_50__2x2V_110-A-21_06-2026-MD.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve",
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
			"value": "135 L/min",
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
			"value": "230 V, 50 Hz ; variante retenue",
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
		"overview": "DK50 2V/50, variante 230 V à 50 Hz : cuve de 50 L, moteur de 1,2 kW et FAD de 135 L/min à 6 bar, pour une plage de travail de 6 à 8 bar. La version /M avec sécheur conserve 50 L et publie 104 L/min à 6 bar.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 50 L.",
			"Plafond conservateur de la plage de fonctionnement : 8 bar."
		],
		"limitations": [
			"La colonne 230 V à 50 Hz est retenue. Les versions 3 × 400 V à 50 Hz et 230 V à 60 Hz restent distinctes et doivent être précisées à la commande.",
			"Le fonctionnement S1-100 est publié, pour un local sec et ventilé, entre +5 et +40 °C et au plus 70 % d’humidité relative.",
			"Le FAD est référencé à 0 m d’altitude, 20 °C, 101 325 Pa et 0 % d’humidité relative. Le seul point à 6 bar ne permet pas d’affirmer un débit à 6,3 bar.",
			"Le groupe sans /M mesure 577 × 587 × 804 mm en largeur × profondeur × hauteur ; le /M, 577 × 628 × 804 mm. Le traitement d’air et l’implantation diffèrent."
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
		],
		"voltage": [
			"october3d-ekom-manual-08-p18"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	],
	"voltage": "230 V, 50 Hz"
};

export default product;
