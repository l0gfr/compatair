import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-sumake-fp010",
	"slug": "visseuse-sumake-fp010",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Sumake FP010",
	"brand": "Sumake",
	"model": "FP010",
	"mpn": "FP010",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-sumake-fp010.webp",
		"alt": "Repères techniques : Sumake FP010",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-fp010",
		"label": "Référence FP010",
		"distinguishingAttributes": {
			"reference": "FP010",
			"Masse publiée": "600 g",
			"Vitesse à vide": "1000 tr/min"
		}
	},
	"editorial": {
		"overview": "Sumake FP010. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 600 g. Vitesse à vide : 1000 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 600 g.",
			"Vitesse à vide : 1000 tr/min.",
			"Diamètre du corps : 35 mm.",
			"Plage de couple déclarée : 0.1-1 Nm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "600 g",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p7"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1000 tr/min",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p7"
			]
		},
		{
			"label": "Diamètre du corps",
			"value": "35 mm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p7"
			]
		},
		{
			"label": "Plage de couple déclarée",
			"value": "0.1-1 Nm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p7"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans ce tableau ; aucune assimilation de kg/cm² à bar.",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p7"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "7.1 cfm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p7"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-sumake-stsc22-p7",
			"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf#page=7",
			"sourceLabel": "Sumake, catalogue assemblage STSC22, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 3990da2e2da3b47636c11cbf6860d37cba62d302c1931caa98017f0c8cd3684a. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-sumake-stsc22-p7"
		],
		"workingPressureBar": [
			"october2-tools-sumake-stsc22-p7"
		],
		"demandExplanation": [
			"october2-tools-sumake-stsc22-p7"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
