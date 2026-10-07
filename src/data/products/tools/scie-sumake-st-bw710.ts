import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-sumake-st-bw710",
	"slug": "scie-sumake-st-bw710",
	"categoryId": "scie",
	"category": "scie",
	"label": "Sumake ST-BW710",
	"brand": "Sumake",
	"model": "ST-BW710",
	"mpn": "ST-BW710",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-sumake-st-bw710.webp",
		"alt": "Repères techniques : Sumake ST-BW710",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STG23.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-bw710",
		"label": "Référence ST-BW710",
		"distinguishingAttributes": {
			"reference": "ST-BW710",
			"Masse publiée": "2.2 kg",
			"Longueur hors tout": "395 mm"
		}
	},
	"editorial": {
		"overview": "Sumake ST-BW710. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2.2 kg. Longueur hors tout : 395 mm.",
		"verifiedFacts": [
			"Masse publiée : 2.2 kg.",
			"Longueur hors tout : 395 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.2 kg",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p28"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "395 mm",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p28"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Recommend Air Pressure: 6.2bar (90psi)",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p28"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "370 L/min",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p28"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-sumake-stg23-p28",
			"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STG23.pdf#page=28",
			"sourceLabel": "Sumake, catalogue STG23, page PDF 28",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : ff0083d1dd4d181861f42aec1de4be29edfd61d09bbf71196f6386a205b677aa. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-sumake-stg23-p28"
		],
		"workingPressureBar": [
			"october2-tools-sumake-stg23-p28"
		],
		"demandExplanation": [
			"october2-tools-sumake-stg23-p28"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
