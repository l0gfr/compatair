const product = {
	"id": "cle-a-impulsions-yokota-yla80b",
	"slug": "cle-a-impulsions-yokota-yla80b",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Yokota YLa80B",
	"brand": "Yokota",
	"model": "YLa80B",
	"mpn": "YLa80B",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-yokota-yla80b.webp",
		"alt": "Repères techniques : Yokota YLa80B",
		"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yokota-yla80b",
		"label": "Référence YLa80B",
		"distinguishingAttributes": {
			"reference": "YLa80B",
			"Capacité de vissage publiée": "M8",
			"Vitesse à vide": "7000 tr/min"
		}
	},
	"editorial": {
		"overview": "Yokota YLa80B. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Capacité de vissage publiée : M8. Vitesse à vide : 7000 tr/min.",
		"verifiedFacts": [
			"Capacité de vissage publiée : M8.",
			"Vitesse à vide : 7000 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacité de vissage publiée",
			"value": "M8",
			"evidenceIds": [
				"october2-tools-yokota-jp-p30"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "7000 tr/min",
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
			"value": "350 L/min",
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
