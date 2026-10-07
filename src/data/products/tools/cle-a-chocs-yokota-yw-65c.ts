import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-yokota-yw-65c",
	"slug": "cle-a-chocs-yokota-yw-65c",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Yokota YW-65C",
	"brand": "Yokota",
	"model": "YW-65C",
	"mpn": "YW-65C",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-yokota-yw-65c.webp",
		"alt": "Repères techniques : Yokota YW-65C",
		"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yokota-yw-65c",
		"label": "Référence YW-65C",
		"distinguishingAttributes": {
			"reference": "YW-65C",
			"Capacité de vissage publiée": "M64",
			"Vitesse à vide": "2100 tr/min"
		}
	},
	"editorial": {
		"overview": "Yokota YW-65C. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Capacité de vissage publiée : M64. Vitesse à vide : 2100 tr/min.",
		"verifiedFacts": [
			"Capacité de vissage publiée : M64.",
			"Vitesse à vide : 2100 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacité de vissage publiée",
			"value": "M64",
			"evidenceIds": [
				"october2-tools-yokota-jp-p37"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2100 tr/min",
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
			"value": "1800 L/min",
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
