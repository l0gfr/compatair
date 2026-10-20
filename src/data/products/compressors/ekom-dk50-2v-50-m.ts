import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ekom-dk50-2v-50-m",
	"slug": "ekom-dk50-2v-50-m",
	"brand": "EKOM",
	"model": "DK50 2V/50/M",
	"variant": {
		"familyId": "ekom-dk50-2v-50-m",
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
			"litersPerMinute": 104
		}
	],
	"dutyCycle": 1,
	"oilType": "oil-free",
	"powerKw": 1.2,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ekom-dk50-2v-50-m.svg",
		"alt": "Repères techniques : EKOM DK50 2V/50/M",
		"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_2V_50__2x2V_110-A-21_06-2026-MD.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve et sécheur",
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
		"overview": "DK50 2V/50/M, variante 230 V à 50 Hz : 104 L/min à 6 bar, cuve 50 L et moteur 1,2 kW, avec sécheur et régime S1-100. La version 2V/50 sans sécheur annonce 135 L/min à 6 bar pour le même volume et la même puissance.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 50 L.",
			"Plafond conservateur de la plage de fonctionnement : 8 bar."
		],
		"limitations": [
			"La version M indique 61 kg sans accessoires et 577 × 628 × 804 mm en largeur × profondeur × hauteur. Le montage sans M mesure 577 × 587 × 804 mm.",
			"Le sécheur M annonce un point de rosée sous pression ≤ +3 °C à 7 bar et une filtration 0,1 µm. Le remplissage 0 à 7 bar passe de 149 s sans M à 218 s avec M selon le tableau.",
			"La plage de travail 6–8 bar reste distincte de la soupape 9 bar. Le point FAD 6 bar n’est pas extrapolé vers 6,2 ou  6,3 bar.",
			"La notice prévoit un local sec, ventilé, de +5 à +40 °C et humidité relative ≤ 70 %. Les références FAD sont 0 m, 20 °C, 101325 Pa et 0 % HR."
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
