import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-sumake-st-rw710",
	"slug": "cle-a-cliquet-sumake-st-rw710",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Sumake ST-RW710",
	"brand": "Sumake",
	"model": "ST-RW710",
	"mpn": "ST-RW710",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-sumake-st-rw710.webp",
		"alt": "Repères techniques : Sumake ST-RW710",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STG23.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-rw710",
		"label": "Référence ST-RW710",
		"distinguishingAttributes": {
			"reference": "ST-RW710",
			"Masse publiée": "2.48 kg",
			"Couple maximal déclaré": "90 Nm"
		}
	},
	"editorial": {
		"overview": "Sumake ST-RW710. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2.48 kg. Couple maximal déclaré : 90 Nm.",
		"verifiedFacts": [
			"Masse publiée : 2.48 kg.",
			"Couple maximal déclaré : 90 Nm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.48 kg",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p13"
			]
		},
		{
			"label": "Couple maximal déclaré",
			"value": "90 Nm",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p13"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Recommend Air Pressure: 6.2bar (90psi)",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p13"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "480 L/min",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p13"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-sumake-stg23-p13",
			"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STG23.pdf#page=13",
			"sourceLabel": "Sumake, catalogue STG23, page PDF 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : ff0083d1dd4d181861f42aec1de4be29edfd61d09bbf71196f6386a205b677aa. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-sumake-stg23-p13"
		],
		"workingPressureBar": [
			"october2-tools-sumake-stg23-p13"
		],
		"demandExplanation": [
			"october2-tools-sumake-stg23-p13"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
