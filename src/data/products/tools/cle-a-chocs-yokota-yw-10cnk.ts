const product = {
	"id": "cle-a-chocs-yokota-yw-10cnk",
	"slug": "cle-a-chocs-yokota-yw-10cnk",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Yokota YW-10CNK",
	"brand": "Yokota",
	"model": "YW-10CNK",
	"mpn": "YW-10CNK",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-yokota-yw-10cnk.webp",
		"alt": "Repères techniques : Yokota YW-10CNK",
		"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yokota-yw-10cnk",
		"label": "Référence YW-10CNK",
		"distinguishingAttributes": {
			"reference": "YW-10CNK",
			"Capacité de vissage publiée": "M10",
			"Vitesse à vide": "6800 tr/min"
		}
	},
	"editorial": {
		"overview": "Yokota YW-10CNK. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Capacité de vissage publiée : M10. Vitesse à vide : 6800 tr/min.",
		"verifiedFacts": [
			"Capacité de vissage publiée : M10.",
			"Vitesse à vide : 6800 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacité de vissage publiée",
			"value": "M10",
			"evidenceIds": [
				"october2-tools-yokota-jp-p35"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6800 tr/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p35"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression précisée pour le couple ou le fonctionnement ne constitue pas un point de mesure de consommation documenté.",
			"evidenceIds": [
				"october2-tools-yokota-jp-p35"
			]
		},
		{
			"label": "Consommation en charge, hors calcul",
			"value": "400 L/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p35"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-yokota-jp-p35",
			"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf#page=35",
			"sourceLabel": "Yokota Kogyo, catalogue général japonais du fabricant, page PDF 35",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b60e8188ea17df768d52a2b1381382bc9b0e158a03fcd4416d4c4e3ebd0a866c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-yokota-jp-p35"
		],
		"workingPressureBar": [
			"october2-tools-yokota-jp-p35"
		],
		"demandExplanation": [
			"october2-tools-yokota-jp-p35"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
