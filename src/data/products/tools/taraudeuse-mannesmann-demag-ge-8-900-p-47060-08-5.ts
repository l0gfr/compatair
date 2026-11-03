import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "taraudeuse-mannesmann-demag-ge-8-900-p-47060-08-5",
	"slug": "taraudeuse-mannesmann-demag-ge-8-900-p-47060-08-5",
	"categoryId": "taraudeuse",
	"category": "taraudeuse",
	"label": "Mannesmann DEMAG GE 8-900 P (réf. 47060-08-5)",
	"brand": "Mannesmann DEMAG",
	"model": "GE 8-900 P",
	"mpn": "47060-08-5",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/taraudeuse-mannesmann-demag-ge-8-900-p-47060-08-5.webp",
		"alt": "Repères techniques : Mannesmann DEMAG GE 8-900 P (réf. 47060-08-5)",
		"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "mannesmann-demag-ge-8-900-p",
		"label": "Référence 47060-08-5",
		"distinguishingAttributes": {
			"reference": "47060-08-5",
			"Masse sans tuyau": "1.2 kg",
			"Référence fabricant": "47060-08-5"
		}
	},
	"editorial": {
		"overview": "Mannesmann DEMAG GE 8-900 P. La GE 8-900 P est la taraudeuse à mandrin pendulaire B12, M6 acier ou M8 aluminium, à 900 tr/min. La GE 8-500 P partage ces capacités à 500 tr/min ; la G 14-6 P monte à M14/M16 avec une autre puissance. Les capacités selon matière restent distinctes. La note de pression concerne puissance et vitesse, pas explicitement la consommation.",
		"verifiedFacts": [
			"Taraudage acier / aluminium : M6 / M8.",
			"Mandrin pendulaire : Oui.",
			"Plage de serrage carré : 3–9 mm.",
			"Cône : B12 DIN238.",
			"Vitesse à vide : 900 tr/min.",
			"Puissance : 200 W.",
			"Consommation, régime non précisé : 4,5 L/s."
		],
		"limitations": [
			"La note constructeur à 6 bar concerne explicitement puissance et vitesse/cadence ; elle n’est pas étendue à la consommation sans preuve."
		]
	},
	"specifications": [
		{
			"label": "Taraudage acier / aluminium",
			"value": "M6 / M8",
			"evidenceIds": [
				"taraudeuse-mannesmann-demag-ge-8-900-p-47060-08-5-reserved-20261103-1"
			]
		},
		{
			"label": "Mandrin pendulaire",
			"value": "Oui",
			"evidenceIds": [
				"taraudeuse-mannesmann-demag-ge-8-900-p-47060-08-5-reserved-20261103-1"
			]
		},
		{
			"label": "Plage de serrage carré",
			"value": "3–9 mm",
			"evidenceIds": [
				"taraudeuse-mannesmann-demag-ge-8-900-p-47060-08-5-reserved-20261103-1"
			]
		},
		{
			"label": "Cône",
			"value": "B12 DIN238",
			"evidenceIds": [
				"taraudeuse-mannesmann-demag-ge-8-900-p-47060-08-5-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "900 tr/min",
			"evidenceIds": [
				"taraudeuse-mannesmann-demag-ge-8-900-p-47060-08-5-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "200 W",
			"evidenceIds": [
				"taraudeuse-mannesmann-demag-ge-8-900-p-47060-08-5-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "4,5 L/s",
			"evidenceIds": [
				"taraudeuse-mannesmann-demag-ge-8-900-p-47060-08-5-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-mannesmann-0-p63",
			"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download#page=63",
			"sourceLabel": "ProfiToolsNext, catalogue fabricant anglais 05/2017, page PDF 63",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9de8eb77aad6c7412b390db54a16646c71c0a4f9925ddf3ddfba1048b1779f3b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "taraudeuse-mannesmann-demag-ge-8-900-p-47060-08-5-reserved-20261103-1",
			"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download#page=63",
			"sourceLabel": "Mannesmann DEMAG : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9de8eb77aad6c7412b390db54a16646c71c0a4f9925ddf3ddfba1048b1779f3b. La GE 8-900 P est la taraudeuse à mandrin pendulaire B12, M6 acier ou M8 aluminium, à 900 tr/min. La GE 8-500 P partage ces capacités à 500 tr/min ; la G 14-6 P monte à M14/M16 avec une autre puissance. Les capacités selon matière restent distinctes. La note de pression concerne puissance et vitesse, pas explicitement la consommation."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-mannesmann-0-p63"
		],
		"workingPressureBar": [
			"october2-tools-mannesmann-0-p63"
		],
		"demandExplanation": [
			"october2-tools-mannesmann-0-p63"
		],
		"editorial": [
			"taraudeuse-mannesmann-demag-ge-8-900-p-47060-08-5-reserved-20261103-1"
		],
		"specifications": [
			"taraudeuse-mannesmann-demag-ge-8-900-p-47060-08-5-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
