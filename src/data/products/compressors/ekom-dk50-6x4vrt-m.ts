import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ekom-dk50-6x4vrt-m",
	"slug": "ekom-dk50-6x4vrt-m",
	"brand": "EKOM",
	"model": "DK50 6x4VRT/M",
	"variant": {
		"familyId": "ekom-dk50-6x4vrt-m",
		"label": "Groupe avec cuve et sécheur",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve et sécheur",
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
			"litersPerMinute": 1370
		}
	],
	"dutyCycle": 1,
	"oilType": "unknown",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ekom-dk50-6x4vrt-m-technical-20261116-reviews.svg",
		"alt": "Repères techniques : EKOM DK50 6x4VRT/M",
		"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50-Nx4VRTM-AD-A-EN-12_11-2025.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve et sécheur",
			"evidenceIds": [
				"october3d-ekom-manual-16-p16"
			]
		},
		{
			"label": "Plafond de la plage de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-ekom-manual-16-p16"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "1 370 L/min",
			"evidenceIds": [
				"october3d-ekom-manual-16-p16",
				"october3d-ekom-manual-16-p19"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "500 L",
			"evidenceIds": [
				"october3d-ekom-manual-16-p16"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "S1-100",
			"evidenceIds": [
				"october3d-ekom-manual-16-p16"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "3x400, 50",
			"evidenceIds": [
				"october3d-ekom-manual-16-p16"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-ekom-manual-16-p16"
			]
		}
	],
	"editorial": {
		"overview": "Le DK50 6x4VRT/M 50 Hz fournit 1 370 L/min FAD à 6 bar avec séchage PDP −20 °C, contre 1 300 au réglage −40 °C. La version 4x4 fournit 910/870 L/min ; la 6x4VRTS/M ajoute l’insonorisation. Le tableau du groupe complet indique S1-100 et une cuve 500 L. Le FAD suppose les conditions de référence de la notice, avec correction d’altitude au-delà de 1 500 m.",
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
			"id": "october3d-ekom-manual-16-p16",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50-Nx4VRTM-AD-A-EN-12_11-2025.pdf#page=16",
			"sourceLabel": "EKOM, notice ekom-manual-16, page PDF 16",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 a81ad585b5680e0fffee03a56db7457bc0debba5b80d5f9b560083720e8761cf de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-ekom-manual-16-p19",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50-Nx4VRTM-AD-A-EN-12_11-2025.pdf#page=19",
			"sourceLabel": "EKOM, notice ekom-manual-16, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 a81ad585b5680e0fffee03a56db7457bc0debba5b80d5f9b560083720e8761cf de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:ekom-dk50-6x4vrt-m:0",
			"sourceUrl": "https://www.ekom.sk/fileadmin/Ekom/navody/2021/industry_lab/NP-DK50-Nx4VRTM-AD-A-EN-12_11-2025.pdf",
			"sourceLabel": "EKOM, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le DK50 6x4VRT/M 50 Hz fournit 1 370 L/min FAD à 6 bar avec séchage PDP −20 °C, contre 1 300 au réglage −40 °C. La version 4x4 fournit 910/870 L/min ; la 6x4VRTS/M ajoute l’insonorisation. Le tableau du groupe complet indique S1-100 et une cuve 500 L. Le FAD suppose les conditions de référence de la notice, avec correction d’altitude au-delà de 1 500 m. GET complet SHA-256 a81ad585b5680e0fffee03a56db7457bc0debba5b80d5f9b560083720e8761cf. Pages PDF lues : 16, 19."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-ekom-manual-16-p16"
		],
		"tankLiters": [
			"october3d-ekom-manual-16-p16"
		],
		"fadCurve": [
			"october3d-ekom-manual-16-p16",
			"october3d-ekom-manual-16-p19"
		],
		"dutyCycle": [
			"october3d-ekom-manual-16-p16"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
