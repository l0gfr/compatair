import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-sumake-cs45",
	"slug": "visseuse-sumake-cs45",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Sumake CS45",
	"brand": "Sumake",
	"model": "CS45",
	"mpn": "CS45",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-sumake-cs45.webp",
		"alt": "Repères techniques : Sumake CS45",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-cs45",
		"label": "Référence CS45",
		"distinguishingAttributes": {
			"reference": "CS45",
			"Masse publiée": "600 g",
			"Vitesse à vide": "800 tr/min"
		}
	},
	"editorial": {
		"overview": "Sumake CS45. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 600 g. Vitesse à vide : 800 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 600 g.",
			"Vitesse à vide : 800 tr/min."
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
				"october2-tools-sumake-stsc22-p12"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "800 tr/min",
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
			"value": "10 cfm",
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
