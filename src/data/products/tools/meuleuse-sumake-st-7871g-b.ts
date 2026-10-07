import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-sumake-st-7871g-b",
	"slug": "meuleuse-sumake-st-7871g-b",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sumake ST-7871G-B",
	"brand": "Sumake",
	"model": "ST-7871G-B",
	"mpn": "ST-7871G-B",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-sumake-st-7871g-b.webp",
		"alt": "Repères techniques : Sumake ST-7871G-B",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STG23.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-7871g-b",
		"label": "Référence ST-7871G-B",
		"distinguishingAttributes": {
			"reference": "ST-7871G-B",
			"Masse publiée": "2.68 kg",
			"Vitesse à vide": "7,000 tr/min"
		}
	},
	"editorial": {
		"overview": "Sumake ST-7871G-B. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2.68 kg. Vitesse à vide : 7,000 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 2.68 kg.",
			"Vitesse à vide : 7,000 tr/min.",
			"Longueur hors tout : 255 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.68 kg",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p44"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "7,000 tr/min",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p44"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "255 mm",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p44"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Recommend Air Pressure: 6.2bar (90psi)",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p44"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "820 L/min",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p44"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-sumake-stg23-p44",
			"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STG23.pdf#page=44",
			"sourceLabel": "Sumake, catalogue STG23, page PDF 44",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : ff0083d1dd4d181861f42aec1de4be29edfd61d09bbf71196f6386a205b677aa. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-sumake-stg23-p44"
		],
		"workingPressureBar": [
			"october2-tools-sumake-stg23-p44"
		],
		"demandExplanation": [
			"october2-tools-sumake-stg23-p44"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
