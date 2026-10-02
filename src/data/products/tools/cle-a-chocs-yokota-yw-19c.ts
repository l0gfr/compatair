const product = {
	"id": "cle-a-chocs-yokota-yw-19c",
	"slug": "cle-a-chocs-yokota-yw-19c",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Yokota YW-19C",
	"brand": "Yokota",
	"model": "YW-19C",
	"mpn": "YW-19C",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-yokota-yw-19c.webp",
		"alt": "Repères techniques : Yokota YW-19C",
		"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yokota-yw-19c",
		"label": "Référence YW-19C",
		"distinguishingAttributes": {
			"reference": "YW-19C",
			"Capacité de vissage publiée": "M19",
			"Vitesse à vide": "4500 tr/min"
		}
	},
	"editorial": {
		"overview": "Yokota YW-19C. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Capacité de vissage publiée : M19. Vitesse à vide : 4500 tr/min.",
		"verifiedFacts": [
			"Capacité de vissage publiée : M19.",
			"Vitesse à vide : 4500 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacité de vissage publiée",
			"value": "M19",
			"evidenceIds": [
				"october2-tools-yokota-jp-p36"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4500 tr/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p36"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression précisée pour le couple ou le fonctionnement ne constitue pas un point de mesure de consommation documenté.",
			"evidenceIds": [
				"october2-tools-yokota-jp-p36"
			]
		},
		{
			"label": "Consommation en charge, hors calcul",
			"value": "700 L/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p36"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-yokota-jp-p36",
			"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf#page=36",
			"sourceLabel": "Yokota Kogyo, catalogue général japonais du fabricant, page PDF 36",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b60e8188ea17df768d52a2b1381382bc9b0e158a03fcd4416d4c4e3ebd0a866c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-yokota-jp-p36"
		],
		"workingPressureBar": [
			"october2-tools-yokota-jp-p36"
		],
		"demandExplanation": [
			"october2-tools-yokota-jp-p36"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
