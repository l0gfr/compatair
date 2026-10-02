const product = {
	"id": "ponceuse-rotative-yokota-hs-45",
	"slug": "ponceuse-rotative-yokota-hs-45",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Yokota HS-45",
	"brand": "Yokota",
	"model": "HS-45",
	"mpn": "HS-45",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-yokota-hs-45.webp",
		"alt": "Repères techniques : Yokota HS-45",
		"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yokota-hs-45",
		"label": "Référence HS-45",
		"distinguishingAttributes": {
			"reference": "HS-45",
			"Vitesse à vide": "8000 tr/min",
			"Longueur": "157 mm"
		}
	},
	"editorial": {
		"overview": "Yokota HS-45. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 8000 tr/min. Longueur : 157 mm.",
		"verifiedFacts": [
			"Vitesse à vide : 8000 tr/min.",
			"Longueur : 157 mm.",
			"Masse : 1.1 kg."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "8000 tr/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p57"
			]
		},
		{
			"label": "Longueur",
			"value": "157 mm",
			"evidenceIds": [
				"october2-tools-yokota-jp-p57"
			]
		},
		{
			"label": "Masse",
			"value": "1.1 kg",
			"evidenceIds": [
				"october2-tools-yokota-jp-p57"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression précisée pour le couple ou le fonctionnement ne constitue pas un point de mesure de consommation documenté.",
			"evidenceIds": [
				"october2-tools-yokota-jp-p57"
			]
		},
		{
			"label": "Consommation en charge, hors calcul",
			"value": "550 L/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p57"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-yokota-jp-p57",
			"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf#page=57",
			"sourceLabel": "Yokota Kogyo, catalogue général japonais du fabricant, page PDF 57",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b60e8188ea17df768d52a2b1381382bc9b0e158a03fcd4416d4c4e3ebd0a866c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-yokota-jp-p57"
		],
		"workingPressureBar": [
			"october2-tools-yokota-jp-p57"
		],
		"demandExplanation": [
			"october2-tools-yokota-jp-p57"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
