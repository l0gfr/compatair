import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-sumake-cs48",
	"slug": "visseuse-sumake-cs48",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Sumake CS48",
	"brand": "Sumake",
	"model": "CS48",
	"mpn": "CS48",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-sumake-cs48.webp",
		"alt": "Repères techniques : Sumake CS48",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-cs48",
		"label": "Référence CS48",
		"distinguishingAttributes": {
			"reference": "CS48",
			"Masse publiée": "840 g",
			"Vitesse à vide": "1700 tr/min"
		}
	},
	"editorial": {
		"overview": "Sumake CS48. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 840 g. Vitesse à vide : 1700 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 840 g.",
			"Vitesse à vide : 1700 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "840 g",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p12"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1700 tr/min",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p12"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans ce tableau ; aucune assimilation de kg/cm² à bar.",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p12"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "19 cfm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p12"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-sumake-stsc22-p12",
			"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf#page=12",
			"sourceLabel": "Sumake, catalogue assemblage STSC22, page PDF 12",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 3990da2e2da3b47636c11cbf6860d37cba62d302c1931caa98017f0c8cd3684a. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-sumake-stsc22-p12"
		],
		"workingPressureBar": [
			"october2-tools-sumake-stsc22-p12"
		],
		"demandExplanation": [
			"october2-tools-sumake-stsc22-p12"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
