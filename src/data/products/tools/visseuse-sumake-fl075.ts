import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-sumake-fl075",
	"slug": "visseuse-sumake-fl075",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Sumake FL075",
	"brand": "Sumake",
	"model": "FL075",
	"mpn": "FL075",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-sumake-fl075.webp",
		"alt": "Repères techniques : Sumake FL075",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-fl075",
		"label": "Référence FL075",
		"distinguishingAttributes": {
			"reference": "FL075",
			"Masse publiée": "900 g",
			"Vitesse à vide": "1000 tr/min"
		}
	},
	"editorial": {
		"overview": "Sumake FL075. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 900 g. Vitesse à vide : 1000 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 900 g.",
			"Vitesse à vide : 1000 tr/min.",
			"Diamètre du corps : 43 mm.",
			"Plage de couple déclarée : 1.2-7.5 Nm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "900 g",
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
			"value": "43 mm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p7"
			]
		},
		{
			"label": "Plage de couple déclarée",
			"value": "1.2-7.5 Nm",
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
			"value": "19 cfm",
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
