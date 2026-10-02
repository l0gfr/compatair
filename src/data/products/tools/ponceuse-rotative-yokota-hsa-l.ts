const product = {
	"id": "ponceuse-rotative-yokota-hsa-l",
	"slug": "ponceuse-rotative-yokota-hsa-l",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Yokota HSA-L",
	"brand": "Yokota",
	"model": "HSA-L",
	"mpn": "HSA-L",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-yokota-hsa-l.webp",
		"alt": "Repères techniques : Yokota HSA-L",
		"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yokota-hsa-l",
		"label": "Référence HSA-L",
		"distinguishingAttributes": {
			"reference": "HSA-L",
			"Vitesse à vide": "8400 tr/min",
			"Longueur": "222 mm"
		}
	},
	"editorial": {
		"overview": "Yokota HSA-L. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 8400 tr/min. Longueur : 222 mm.",
		"verifiedFacts": [
			"Vitesse à vide : 8400 tr/min.",
			"Longueur : 222 mm.",
			"Masse : 1.8 kg."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "8400 tr/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p57"
			]
		},
		{
			"label": "Longueur",
			"value": "222 mm",
			"evidenceIds": [
				"october2-tools-yokota-jp-p57"
			]
		},
		{
			"label": "Masse",
			"value": "1.8 kg",
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
			"value": "1100 L/min",
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
