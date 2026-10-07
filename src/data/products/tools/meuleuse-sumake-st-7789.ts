import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-sumake-st-7789",
	"slug": "meuleuse-sumake-st-7789",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sumake ST-7789",
	"brand": "Sumake",
	"model": "ST-7789",
	"mpn": "ST-7789",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-sumake-st-7789.webp",
		"alt": "Repères techniques : Sumake ST-7789",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STG23.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-7789",
		"label": "Référence ST-7789",
		"distinguishingAttributes": {
			"reference": "ST-7789",
			"Masse publiée": "5.7 kg",
			"Vitesse à vide": "6,500 tr/min"
		}
	},
	"editorial": {
		"overview": "Sumake ST-7789. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 5.7 kg. Vitesse à vide : 6,500 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 5.7 kg.",
			"Vitesse à vide : 6,500 tr/min.",
			"Longueur hors tout : 320 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "5.7 kg",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p45"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6,500 tr/min",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p45"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "320 mm",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p45"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Recommend Air Pressure: 6.2bar (90psi)",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p45"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "1130 L/min",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p45"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-sumake-stg23-p45",
			"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STG23.pdf#page=45",
			"sourceLabel": "Sumake, catalogue STG23, page PDF 45",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : ff0083d1dd4d181861f42aec1de4be29edfd61d09bbf71196f6386a205b677aa. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-sumake-stg23-p45"
		],
		"workingPressureBar": [
			"october2-tools-sumake-stg23-p45"
		],
		"demandExplanation": [
			"october2-tools-sumake-stg23-p45"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
