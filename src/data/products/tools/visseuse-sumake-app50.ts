import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-sumake-app50",
	"slug": "visseuse-sumake-app50",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Sumake APP50",
	"brand": "Sumake",
	"model": "APP50",
	"mpn": "APP50",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-sumake-app50.webp",
		"alt": "Repères techniques : Sumake APP50",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-app50",
		"label": "Référence APP50",
		"distinguishingAttributes": {
			"reference": "APP50",
			"Masse publiée": "1030 g",
			"Vitesse à vide": "1400 tr/min"
		}
	},
	"editorial": {
		"overview": "Sumake APP50. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1030 g. Vitesse à vide : 1400 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 1030 g.",
			"Vitesse à vide : 1400 tr/min.",
			"Dimensions (Ø × L × H) : 39 x 230 x 160 mm.",
			"Plage de couple déclarée : 1-6 Nm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1030 g",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p9"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1400 tr/min",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p9"
			]
		},
		{
			"label": "Dimensions (Ø × L × H)",
			"value": "39 x 230 x 160 mm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p9"
			]
		},
		{
			"label": "Plage de couple déclarée",
			"value": "1-6 Nm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p9"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans ce tableau ; aucune assimilation de kg/cm² à bar.",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p9"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "19 cfm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p9"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-sumake-stsc22-p9",
			"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf#page=9",
			"sourceLabel": "Sumake, catalogue assemblage STSC22, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 3990da2e2da3b47636c11cbf6860d37cba62d302c1931caa98017f0c8cd3684a. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-sumake-stsc22-p9"
		],
		"workingPressureBar": [
			"october2-tools-sumake-stsc22-p9"
		],
		"demandExplanation": [
			"october2-tools-sumake-stsc22-p9"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
