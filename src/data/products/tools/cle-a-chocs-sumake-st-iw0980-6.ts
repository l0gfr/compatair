import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-sumake-st-iw0980-6",
	"slug": "cle-a-chocs-sumake-st-iw0980-6",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Sumake ST-IW0980-6",
	"brand": "Sumake",
	"model": "ST-IW0980-6",
	"mpn": "ST-IW0980-6",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-sumake-st-iw0980-6.webp",
		"alt": "Repères techniques : Sumake ST-IW0980-6",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STG23.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-iw0980-6",
		"label": "Référence ST-IW0980-6",
		"distinguishingAttributes": {
			"reference": "ST-IW0980-6",
			"Longueur hors tout": "393 mm",
			"Couple maximal déclaré": "3,390 Nm"
		}
	},
	"editorial": {
		"overview": "Sumake ST-IW0980-6. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Longueur hors tout : 393 mm. Couple maximal déclaré : 3,390 Nm.",
		"verifiedFacts": [
			"Longueur hors tout : 393 mm.",
			"Couple maximal déclaré : 3,390 Nm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Longueur hors tout",
			"value": "393 mm",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p8"
			]
		},
		{
			"label": "Couple maximal déclaré",
			"value": "3,390 Nm",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p8"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Recommend Air Pressure: 6.2bar (90psi)",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p8"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "708 L/min",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p8"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-sumake-stg23-p8",
			"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STG23.pdf#page=8",
			"sourceLabel": "Sumake, catalogue STG23, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : ff0083d1dd4d181861f42aec1de4be29edfd61d09bbf71196f6386a205b677aa. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-sumake-stg23-p8"
		],
		"workingPressureBar": [
			"october2-tools-sumake-stg23-p8"
		],
		"demandExplanation": [
			"october2-tools-sumake-stg23-p8"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
