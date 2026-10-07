import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-sumake-st-3300",
	"slug": "burineur-sumake-st-3300",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Sumake ST-3300",
	"brand": "Sumake",
	"model": "ST-3300",
	"mpn": "ST-3300",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-sumake-st-3300.webp",
		"alt": "Repères techniques : Sumake ST-3300",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STG23.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-3300",
		"label": "Référence ST-3300",
		"distinguishingAttributes": {
			"reference": "ST-3300",
			"Masse publiée": "1.2 kg",
			"Fréquence de frappe": "1,000 coups/min"
		}
	},
	"editorial": {
		"overview": "Sumake ST-3300. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 1.2 kg. Fréquence de frappe : 1,000 coups/min.",
		"verifiedFacts": [
			"Masse publiée : 1.2 kg.",
			"Fréquence de frappe : 1,000 coups/min."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1.2 kg",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p59"
			]
		},
		{
			"label": "Fréquence de frappe",
			"value": "1,000 coups/min",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p59"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Recommend Air Pressure: 6.2bar (90psi)",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p59"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-sumake-stg23-p59",
			"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STG23.pdf#page=59",
			"sourceLabel": "Sumake, catalogue STG23, page PDF 59",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : ff0083d1dd4d181861f42aec1de4be29edfd61d09bbf71196f6386a205b677aa. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-sumake-stg23-p59"
		],
		"workingPressureBar": [
			"october2-tools-sumake-stg23-p59"
		],
		"demandExplanation": [
			"october2-tools-sumake-stg23-p59"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
