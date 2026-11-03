import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-mannesmann-demag-g-100-h-400-60009-38-5",
	"slug": "meuleuse-mannesmann-demag-g-100-h-400-60009-38-5",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Mannesmann DEMAG G 100 H-400 (réf. 60009-38-5)",
	"brand": "Mannesmann DEMAG",
	"model": "G 100 H-400",
	"mpn": "60009-38-5",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-mannesmann-demag-g-100-h-400-60009-38-5.webp",
		"alt": "Repères techniques : Mannesmann DEMAG G 100 H-400 (réf. 60009-38-5)",
		"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "mannesmann-demag-g-100-h-400",
		"label": "Référence 60009-38-5",
		"distinguishingAttributes": {
			"reference": "60009-38-5",
			"Masse sans tuyau": "4.4 kg",
			"Référence fabricant": "60009-38-5"
		}
	},
	"editorial": {
		"overview": "Mannesmann DEMAG G 100 H-400. La G 100 H-400 est la meuleuse à pince 6 mm et rallonge 400 mm, longueur totale 923 mm. La H-200 mesure 723 mm et pèse 3,8 kg ; la H-500 mesure 1 023 mm et pèse 4,7 kg. Les 11,7 L/s à vide et 27,7 L/s en charge sont explicitement séparés, mais la note 6 bar ne qualifie que puissance et vitesse à vide : pas de pression de consommation supposée.",
		"verifiedFacts": [
			"Pince : 6 mm.",
			"Rallonge : 400 mm.",
			"Vitesse à vide : 10 000 tr/min.",
			"Puissance : 1 300 W.",
			"Longueur G100 : 923 mm.",
			"Masse sans flexible : 4,4 kg.",
			"Consommation à vide / en charge : 11,7 / 27,7 L/s."
		],
		"limitations": [
			"La note constructeur à 6 bar concerne explicitement puissance et vitesse/cadence ; elle n’est pas étendue à la consommation sans preuve."
		]
	},
	"specifications": [
		{
			"label": "Pince",
			"value": "6 mm",
			"evidenceIds": [
				"meuleuse-mannesmann-demag-g-100-h-400-60009-38-5-reserved-20261103-1"
			]
		},
		{
			"label": "Rallonge",
			"value": "400 mm",
			"evidenceIds": [
				"meuleuse-mannesmann-demag-g-100-h-400-60009-38-5-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "10 000 tr/min",
			"evidenceIds": [
				"meuleuse-mannesmann-demag-g-100-h-400-60009-38-5-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "1 300 W",
			"evidenceIds": [
				"meuleuse-mannesmann-demag-g-100-h-400-60009-38-5-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur G100",
			"value": "923 mm",
			"evidenceIds": [
				"meuleuse-mannesmann-demag-g-100-h-400-60009-38-5-reserved-20261103-1"
			]
		},
		{
			"label": "Masse sans flexible",
			"value": "4,4 kg",
			"evidenceIds": [
				"meuleuse-mannesmann-demag-g-100-h-400-60009-38-5-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation à vide / en charge",
			"value": "11,7 / 27,7 L/s",
			"evidenceIds": [
				"meuleuse-mannesmann-demag-g-100-h-400-60009-38-5-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-mannesmann-0-p16",
			"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download#page=16",
			"sourceLabel": "ProfiToolsNext, catalogue fabricant anglais 05/2017, page PDF 16",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9de8eb77aad6c7412b390db54a16646c71c0a4f9925ddf3ddfba1048b1779f3b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "meuleuse-mannesmann-demag-g-100-h-400-60009-38-5-reserved-20261103-1",
			"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download#page=16",
			"sourceLabel": "Mannesmann DEMAG : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9de8eb77aad6c7412b390db54a16646c71c0a4f9925ddf3ddfba1048b1779f3b. La G 100 H-400 est la meuleuse à pince 6 mm et rallonge 400 mm, longueur totale 923 mm. La H-200 mesure 723 mm et pèse 3,8 kg ; la H-500 mesure 1 023 mm et pèse 4,7 kg. Les 11,7 L/s à vide et 27,7 L/s en charge sont explicitement séparés, mais la note 6 bar ne qualifie que puissance et vitesse à vide : pas de pression de consommation supposée."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-mannesmann-0-p16"
		],
		"workingPressureBar": [
			"october2-tools-mannesmann-0-p16"
		],
		"demandExplanation": [
			"october2-tools-mannesmann-0-p16"
		],
		"editorial": [
			"meuleuse-mannesmann-demag-g-100-h-400-60009-38-5-reserved-20261103-1"
		],
		"specifications": [
			"meuleuse-mannesmann-demag-g-100-h-400-60009-38-5-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
