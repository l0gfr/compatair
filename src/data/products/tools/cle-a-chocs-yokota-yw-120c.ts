import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-yokota-yw-120c",
	"slug": "cle-a-chocs-yokota-yw-120c",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Yokota YW-120C",
	"brand": "Yokota",
	"model": "YW-120C",
	"mpn": "YW-120C",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-yokota-yw-120c.webp",
		"alt": "Repères techniques : Yokota YW-120C",
		"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yokota-yw-120c",
		"label": "Référence YW-120C",
		"distinguishingAttributes": {
			"reference": "YW-120C",
			"Capacité de vissage publiée": "M120",
			"Vitesse à vide": "1800 tr/min"
		}
	},
	"editorial": {
		"overview": "Yokota YW-120C. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Capacité de vissage publiée : M120. Vitesse à vide : 1800 tr/min.",
		"verifiedFacts": [
			"Capacité de vissage publiée : M120.",
			"Vitesse à vide : 1800 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacité de vissage publiée",
			"value": "M120",
			"evidenceIds": [
				"october2-tools-yokota-jp-p37"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1800 tr/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p37"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression précisée pour le couple ou le fonctionnement ne constitue pas un point de mesure de consommation documenté.",
			"evidenceIds": [
				"october2-tools-yokota-jp-p37"
			]
		},
		{
			"label": "Consommation en charge, hors calcul",
			"value": "4100 L/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p37"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-yokota-jp-p37",
			"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf#page=37",
			"sourceLabel": "Yokota Kogyo, catalogue général japonais du fabricant, page PDF 37",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b60e8188ea17df768d52a2b1381382bc9b0e158a03fcd4416d4c4e3ebd0a866c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-yokota-jp-p37"
		],
		"workingPressureBar": [
			"october2-tools-yokota-jp-p37"
		],
		"demandExplanation": [
			"october2-tools-yokota-jp-p37"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
