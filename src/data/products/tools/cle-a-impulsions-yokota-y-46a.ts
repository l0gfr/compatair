const product = {
	"id": "cle-a-impulsions-yokota-y-46a",
	"slug": "cle-a-impulsions-yokota-y-46a",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Yokota Y-46A",
	"brand": "Yokota",
	"model": "Y-46A",
	"mpn": "Y-46A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-yokota-y-46a.webp",
		"alt": "Repères techniques : Yokota Y-46A",
		"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yokota-y-46a",
		"label": "Référence Y-46A",
		"distinguishingAttributes": {
			"reference": "Y-46A",
			"Capacité de vissage publiée": "M6",
			"Vitesse à vide": "8000 tr/min"
		}
	},
	"editorial": {
		"overview": "Yokota Y-46A. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Capacité de vissage publiée : M6. Vitesse à vide : 8000 tr/min.",
		"verifiedFacts": [
			"Capacité de vissage publiée : M6.",
			"Vitesse à vide : 8000 tr/min."
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
				"october2-tools-yokota-jp-p31"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "8000 tr/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p31"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression précisée pour le couple ou le fonctionnement ne constitue pas un point de mesure de consommation documenté.",
			"evidenceIds": [
				"october2-tools-yokota-jp-p31"
			]
		},
		{
			"label": "Consommation en charge, hors calcul",
			"value": "350 L/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p31"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-yokota-jp-p31",
			"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf#page=31",
			"sourceLabel": "Yokota Kogyo, catalogue général japonais du fabricant, page PDF 31",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b60e8188ea17df768d52a2b1381382bc9b0e158a03fcd4416d4c4e3ebd0a866c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-yokota-jp-p31"
		],
		"workingPressureBar": [
			"october2-tools-yokota-jp-p31"
		],
		"demandExplanation": [
			"october2-tools-yokota-jp-p31"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
