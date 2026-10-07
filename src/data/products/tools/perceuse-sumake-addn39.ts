import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-sumake-addn39",
	"slug": "perceuse-sumake-addn39",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Sumake ADDN39",
	"brand": "Sumake",
	"model": "ADDN39",
	"mpn": "ADDN39",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-sumake-addn39.webp",
		"alt": "Repères techniques : Sumake ADDN39",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-addn39",
		"label": "Référence ADDN39",
		"distinguishingAttributes": {
			"reference": "ADDN39",
			"Masse publiée": "630 g",
			"Vitesse à vide": "1600 tr/min"
		}
	},
	"editorial": {
		"overview": "Sumake ADDN39. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 630 g. Vitesse à vide : 1600 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 630 g.",
			"Vitesse à vide : 1600 tr/min.",
			"Dimensions (Ø × L × H) : 36 x 140 x 142 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "630 g",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p10"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1600 tr/min",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p10"
			]
		},
		{
			"label": "Dimensions (Ø × L × H)",
			"value": "36 x 140 x 142 mm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p10"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans ce tableau ; aucune assimilation de kg/cm² à bar.",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p10"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "10 cfm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p10"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-sumake-stsc22-p10",
			"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf#page=10",
			"sourceLabel": "Sumake, catalogue assemblage STSC22, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 3990da2e2da3b47636c11cbf6860d37cba62d302c1931caa98017f0c8cd3684a. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-sumake-stsc22-p10"
		],
		"workingPressureBar": [
			"october2-tools-sumake-stsc22-p10"
		],
		"demandExplanation": [
			"october2-tools-sumake-stsc22-p10"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
