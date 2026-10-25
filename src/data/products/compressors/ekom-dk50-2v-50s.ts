import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ekom-dk50-2v-50s",
	"slug": "ekom-dk50-2v-50s",
	"brand": "EKOM",
	"model": "DK50 2V/50S",
	"variant": {
		"familyId": "ekom-dk50-2v-50s",
		"label": "Groupe avec cuve et armoire acoustique",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve et armoire acoustique",
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
		"src": "/images/products/ekom-dk50-2v-50s.svg",
		"alt": "Repères techniques : EKOM DK50 2V/50S",
		"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_2V_50__2x2V_110-A-21_06-2026-MD.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve et armoire acoustique",
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
			"value": "Configurations 50 Hz :230 V ou 3× 400 V, à préciser à la commande ; variante 230 V/60 Hz séparée",
			"evidenceIds": [
				"review-20261025-s107-p18"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-ekom-manual-08-p18"
			]
		},
		{
			"label": "Comparaison documentée et limite de choix",
			"value": "Isoler la différence de débit associée à la variante avec sécheur, avec armoire et cuve identiques, et distinguer plage de service/soupape.",
			"evidenceIds": [
				"review-20261025-s107-p7",
				"review-20261025-s107-p18",
				"review-20261025-s107-p23"
			]
		}
	],
	"editorial": {
		"overview": "Le DK50 2 V/50S associe une armoire acoustique et une cuve 50 L ; il publie 135 L/min à 6 bar. Le DK50 2 V/50S/M avec sécheur annonce 104 L/min à 6 bar, avec la même cuve 50 L et le même moteur 1,2 kW. Pour choisir le traitement d’air, il faut dimensionner le poste avec le débit de la variante livrée. La plage de fonctionnement 6–8 bar reste distincte de la soupape 9 bar ; le mode S1-100 est documenté pour les compresseurs du tableau.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 50 L.",
			"Plafond conservateur de la plage de fonctionnement : 8 bar."
		],
		"limitations": [
			"Configuration 50 Hz retenue : la notice distingue 230 V/50 Hz et 3× 400 V/50 Hz ; ne pas concaténer ces variantes avec 230 V/60 Hz.",
			"FAD annoncé pour 20 °C,101325Pa et 0 % d’humidité relative au niveau de la mer ; la notice prévoit une correction au-dessus de 1500m.",
			"Le plafond 8 bar représente la plage de travail sélectionnée, pas la pression de soupape 9 bar.",
			"ModeS1-100 du groupe documenté, sous ambiance 5–40 °C et humidité relative maximale 70 % ; les exigences de qualité d’air au poste restent à vérifier."
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
		},
		{
			"id": "review-20261025-s107-p7",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_2V_50__2x2V_110-A-21_06-2026-MD.pdf#page=7",
			"sourceLabel": "EKOM, relecture primaire du 25 octobre 2026, s107, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 b732c4bd37b883479e473ebc1bbd69a11f666147cc0b5691360cd381385f442b. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s107-p18",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_2V_50__2x2V_110-A-21_06-2026-MD.pdf#page=18",
			"sourceLabel": "EKOM, relecture primaire du 25 octobre 2026, s107, page PDF 18",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 b732c4bd37b883479e473ebc1bbd69a11f666147cc0b5691360cd381385f442b. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s107-p23",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50_2V_50__2x2V_110-A-21_06-2026-MD.pdf#page=23",
			"sourceLabel": "EKOM, relecture primaire du 25 octobre 2026, s107, page PDF 23",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 b732c4bd37b883479e473ebc1bbd69a11f666147cc0b5691360cd381385f442b. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
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
		"maxPressureBasis": [
			"review-20261025-s107-p18"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	],
	"maxPressureBasis": "selected-working-pressure-ceiling"
};

export default product;
