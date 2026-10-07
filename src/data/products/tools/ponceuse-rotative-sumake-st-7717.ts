import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-sumake-st-7717",
	"slug": "ponceuse-rotative-sumake-st-7717",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Sumake ST-7717",
	"brand": "Sumake",
	"model": "ST-7717",
	"mpn": "ST-7717",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-sumake-st-7717.webp",
		"alt": "Repères techniques : Sumake ST-7717",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STG23.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-7717",
		"label": "Référence ST-7717",
		"distinguishingAttributes": {
			"reference": "ST-7717",
			"Masse publiée": "0.5 kg",
			"Vitesse à vide": "20,000 tr/min"
		}
	},
	"editorial": {
		"overview": "Sumake ST-7717. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 0.5 kg. Vitesse à vide : 20,000 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 0.5 kg.",
			"Vitesse à vide : 20,000 tr/min.",
			"Longueur hors tout : 127 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "0.5 kg",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p55"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "20,000 tr/min",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p55"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "127 mm",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p55"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Recommend Air Pressure: 6.2bar (90psi)",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p55"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "370 L/min",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p55"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-sumake-stg23-p55",
			"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STG23.pdf#page=55",
			"sourceLabel": "Sumake, catalogue STG23, page PDF 55",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : ff0083d1dd4d181861f42aec1de4be29edfd61d09bbf71196f6386a205b677aa. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-sumake-stg23-p55"
		],
		"workingPressureBar": [
			"october2-tools-sumake-stg23-p55"
		],
		"demandExplanation": [
			"october2-tools-sumake-stg23-p55"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
