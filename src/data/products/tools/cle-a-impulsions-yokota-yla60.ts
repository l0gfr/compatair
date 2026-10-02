const product = {
	"id": "cle-a-impulsions-yokota-yla60",
	"slug": "cle-a-impulsions-yokota-yla60",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Yokota YLa60",
	"brand": "Yokota",
	"model": "YLa60",
	"mpn": "YLa60",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-yokota-yla60.webp",
		"alt": "Repères techniques : Yokota YLa60",
		"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yokota-yla60",
		"label": "Référence YLa60",
		"distinguishingAttributes": {
			"reference": "YLa60",
			"Capacité de vissage publiée": "M6",
			"Vitesse à vide": "4000 tr/min"
		}
	},
	"editorial": {
		"overview": "Yokota YLa60. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Capacité de vissage publiée : M6. Vitesse à vide : 4000 tr/min.",
		"verifiedFacts": [
			"Capacité de vissage publiée : M6.",
			"Vitesse à vide : 4000 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacité de vissage publiée",
			"value": "M6",
			"evidenceIds": [
				"october2-tools-yokota-jp-p30"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4000 tr/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p30"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression précisée pour le couple ou le fonctionnement ne constitue pas un point de mesure de consommation documenté.",
			"evidenceIds": [
				"october2-tools-yokota-jp-p30"
			]
		},
		{
			"label": "Consommation en charge, hors calcul",
			"value": "300 L/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p30"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-yokota-jp-p30",
			"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf#page=30",
			"sourceLabel": "Yokota Kogyo, catalogue général japonais du fabricant, page PDF 30",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b60e8188ea17df768d52a2b1381382bc9b0e158a03fcd4416d4c4e3ebd0a866c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-yokota-jp-p30"
		],
		"workingPressureBar": [
			"october2-tools-yokota-jp-p30"
		],
		"demandExplanation": [
			"october2-tools-yokota-jp-p30"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
