import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "polisseuse-sumake-st-as8007p3",
	"slug": "polisseuse-sumake-st-as8007p3",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "Sumake ST-AS8007P3",
	"brand": "Sumake",
	"model": "ST-AS8007P3",
	"mpn": "ST-AS8007P3",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/polisseuse-sumake-st-as8007p3.webp",
		"alt": "Repères techniques : Sumake ST-AS8007P3",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STG23.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-as8007p3",
		"label": "Référence ST-AS8007P3",
		"distinguishingAttributes": {
			"reference": "ST-AS8007P3",
			"Masse publiée": "2.0 kg",
			"Vitesse à vide": "4,500 tr/min"
		}
	},
	"editorial": {
		"overview": "Sumake ST-AS8007P3. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2.0 kg. Vitesse à vide : 4,500 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 2.0 kg.",
			"Vitesse à vide : 4,500 tr/min.",
			"Longueur hors tout : 370 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.0 kg",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p51"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4,500 tr/min",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p51"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "370 mm",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p51"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p51"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "280 L/min",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p51"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-sumake-stg23-p51",
			"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STG23.pdf#page=51",
			"sourceLabel": "Sumake, catalogue STG23, page PDF 51",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : ff0083d1dd4d181861f42aec1de4be29edfd61d09bbf71196f6386a205b677aa. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-sumake-stg23-p51"
		],
		"workingPressureBar": [
			"october2-tools-sumake-stg23-p51"
		],
		"demandExplanation": [
			"october2-tools-sumake-stg23-p51"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
