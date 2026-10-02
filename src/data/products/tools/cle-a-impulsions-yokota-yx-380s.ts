const product = {
	"id": "cle-a-impulsions-yokota-yx-380s",
	"slug": "cle-a-impulsions-yokota-yx-380s",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Yokota YX-380S",
	"brand": "Yokota",
	"model": "YX-380S",
	"mpn": "YX-380S",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-yokota-yx-380s.webp",
		"alt": "Repères techniques : Yokota YX-380S",
		"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yokota-yx-380s",
		"label": "Référence YX-380S",
		"distinguishingAttributes": {
			"reference": "YX-380S",
			"Capacité de vissage publiée": "M8",
			"Vitesse à vide": "9000 tr/min"
		}
	},
	"editorial": {
		"overview": "Yokota YX-380S. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Capacité de vissage publiée : M8. Vitesse à vide : 9000 tr/min.",
		"verifiedFacts": [
			"Capacité de vissage publiée : M8.",
			"Vitesse à vide : 9000 tr/min."
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
				"october2-tools-yokota-jp-p32"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "9000 tr/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p32"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression précisée pour le couple ou le fonctionnement ne constitue pas un point de mesure de consommation documenté.",
			"evidenceIds": [
				"october2-tools-yokota-jp-p32"
			]
		},
		{
			"label": "Consommation en charge, hors calcul",
			"value": "300 L/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p32"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-yokota-jp-p32",
			"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf#page=32",
			"sourceLabel": "Yokota Kogyo, catalogue général japonais du fabricant, page PDF 32",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b60e8188ea17df768d52a2b1381382bc9b0e158a03fcd4416d4c4e3ebd0a866c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-yokota-jp-p32"
		],
		"workingPressureBar": [
			"october2-tools-yokota-jp-p32"
		],
		"demandExplanation": [
			"october2-tools-yokota-jp-p32"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
