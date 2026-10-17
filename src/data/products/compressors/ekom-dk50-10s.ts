import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ekom-dk50-10s",
	"slug": "ekom-dk50-10s",
	"brand": "EKOM",
	"model": "DK50-10S",
	"variant": {
		"familyId": "ekom-dk50-10s",
		"label": "Groupe avec cuve et armoire acoustique",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve et armoire acoustique",
			"pressionMaximale": "8 bar",
			"cuve": "10 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 10,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 6,
			"litersPerMinute": 70
		}
	],
	"dutyCycle": 1,
	"oilType": "oil-free",
	"powerKw": 0.55,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ekom-dk50-10s.svg",
		"alt": "Repères techniques : EKOM DK50-10S",
		"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50-10-A-21_04-2026-MD.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve et armoire acoustique",
			"evidenceIds": [
				"october3d-ekom-manual-01-p16"
			]
		},
		{
			"label": "Plafond de la plage de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-ekom-manual-01-p16"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "70 L/min",
			"evidenceIds": [
				"october3d-ekom-manual-01-p16"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "10 L",
			"evidenceIds": [
				"october3d-ekom-manual-01-p16"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "S1-100",
			"evidenceIds": [
				"october3d-ekom-manual-01-p16"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "230 V, 50 Hz ; variante retenue",
			"evidenceIds": [
				"october3d-ekom-manual-01-p16"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-ekom-manual-01-p16"
			]
		}
	],
	"editorial": {
		"overview": "DK50-10S 230 V à 50 Hz : 70 L/min à 6 bar, cuve de 10 L et mode S1-100. La version Z conserve ce débit avec un groupe non caréné ; la S/M avec sécheur publie 60 L/min à 6 bar. Le groupe S étudié possède son armoire acoustique et pèse environ 53 kg sans accessoires.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 10 L.",
			"Plafond conservateur de la plage de fonctionnement : 8 bar."
		],
		"limitations": [
			"Le tableau de la version 60 Hz annonce d’autres performances. Seules celles du 50 Hz sont retenues ici.",
			"Le FAD à 6 bar ne permet pas d’extrapoler au besoin de 6,2 ou 6,3 bar des deux exemples affichés.",
			"La plage de travail est de 6 à 8 bar ; les pressions de soupape sont distinctes.",
			"La notice prévoit un local intérieur sec et ventilé, de +5 à +40 °C, avec une humidité relative maximale de 70 %. Respecter également les conditions de référence du FAD."
		]
	},
	"evidence": [
		{
			"id": "october3d-ekom-manual-01-p16",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50-10-A-21_04-2026-MD.pdf#page=16",
			"sourceLabel": "EKOM, notice ekom-manual-01, page PDF 16",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 3c6969140d3397b9ae18fe442eea14c13d9e4caeb3afc290bdd017e4206bca66 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-ekom-manual-01-p18",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50-10-A-21_04-2026-MD.pdf#page=18",
			"sourceLabel": "EKOM, notice ekom-manual-01, page PDF 18",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 3c6969140d3397b9ae18fe442eea14c13d9e4caeb3afc290bdd017e4206bca66 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-ekom-manual-01-p7",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50-10-A-21_04-2026-MD.pdf#page=7",
			"sourceLabel": "EKOM, notice ekom-manual-01, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 3c6969140d3397b9ae18fe442eea14c13d9e4caeb3afc290bdd017e4206bca66 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-ekom-manual-01-p16"
		],
		"tankLiters": [
			"october3d-ekom-manual-01-p16"
		],
		"fadCurve": [
			"october3d-ekom-manual-01-p16",
			"october3d-ekom-manual-01-p18"
		],
		"oilType": [
			"october3d-ekom-manual-01-p7"
		],
		"dutyCycle": [
			"october3d-ekom-manual-01-p16"
		],
		"powerKw": [
			"october3d-ekom-manual-01-p16"
		],
		"voltage": [
			"october3d-ekom-manual-01-p16"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	],
	"voltage": "230 V, 50 Hz"
};

export default product;
